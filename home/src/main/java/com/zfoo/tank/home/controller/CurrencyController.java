/*
 *  Copyright (C) 2020 The zfoo Authors
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License. You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and limitations under the License.
 */

package com.zfoo.tank.home.controller;

import com.zfoo.event.anno.EventReceiver;
import com.zfoo.net.task.TaskBus;
import com.zfoo.orm.anno.EntityCacheAutowired;
import com.zfoo.orm.cache.IEntityCache;
import com.zfoo.scheduler.anno.Scheduler;
import com.zfoo.storage.anno.StorageAutowired;
import com.zfoo.storage.model.IStorage;
import com.zfoo.tank.common.entity.PlayerEntity;
import com.zfoo.tank.common.protocol.CurrencyUpdateNotice;
import com.zfoo.tank.common.resource.PlayerExpResource;
import com.zfoo.tank.home.model.PlayerLevelUpEvent;
import com.zfoo.tank.home.util.SendUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.function.BiConsumer;

/**
 * @author godotg
 */
@Component
public class CurrencyController {

    private static final Logger logger = LoggerFactory.getLogger(CurrencyController.class);

    @EntityCacheAutowired
    private IEntityCache<Long, PlayerEntity> playerEntityCaches;

    @StorageAutowired
    private IStorage<Integer, PlayerExpResource> playerExpStorage;

    @EventReceiver
    public void onPlayerLevelUpEvent(PlayerLevelUpEvent event) {
        // 升级给奖励
        var player = event.getPlayerEntity();
        var oldLevel = event.getOldLevel();
        logger.info("升级[{}]奖励", oldLevel);

        var playerExpConfig = playerExpStorage.get(oldLevel);
        var currencyPo = player.getCurrencyPo();
        currencyPo.addGold(playerExpConfig.getGold());
        currencyPo.addGem(playerExpConfig.getGem());
        playerEntityCaches.update(player);
        // 推送给客户端
        SendUtils.sendToPlayer(player, CurrencyUpdateNotice.valueOf(currencyPo.toCurrencyVO()));
    }

    @Scheduler(cron = "0/30 * * * * ?")
    public void cronEnergyScheduler() {
        logger.info("每30秒恢复在线玩家一点能量，定时任务开始执行");

        var map = new HashMap<Integer, List<PlayerEntity>>();

        playerEntityCaches.forEach(new BiConsumer<Long, PlayerEntity>() {
            @Override
            public void accept(Long uid, PlayerEntity playerEntity) {
                // 计算需要在哪一个线程池去执行玩家的逻辑
                var executorIndex = TaskBus.calTaskExecutorHash(playerEntity.id());
                var list = map.computeIfAbsent(executorIndex, k -> new ArrayList<>());
                list.add(playerEntity);
            }
        });

        map.forEach((executorIndex, players) -> TaskBus.execute(executorIndex, new Runnable() {
            @Override
            public void run() {
                for (var player : players) {
                    var currencyPo = player.getCurrencyPo();
                    currencyPo.addEnergy(1);
                    playerEntityCaches.update(player);
                    // 推送给客户端
                    SendUtils.sendToPlayer(player, CurrencyUpdateNotice.valueOf(currencyPo.toCurrencyVO()));
                }
            }
        }));
    }

}
