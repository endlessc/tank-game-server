import{d as k,aq as P,ar as f,as as v,g as w,T as _,h as C,i as V,w as l,aM as b,av as F,aw as S,ax as R,aN as x,o as B,b as n,ab as q,q as E,e as T,t as U,n as D,a5 as A,k as o,aO as $,aa as N,_ as Q}from"./index.78d81d6b.js";const K=k({__name:"PlayerQuery",setup(L){const d=P();f();const e=v({search:"",loading:!0,totalRows:0,options:{page:1,itemsPerPage:10},headers:[{title:"\u73A9\u5BB6id",key:"id"},{title:"\u540D\u79F0",key:"name"},{title:"\u5934\u50CF",key:"avatar"},{title:"\u7ECF\u9A8C",key:"exp"},{title:"\u7B49\u7EA7",key:"level"},{title:"\u6CE8\u518C\u65F6\u95F4",key:"registerTime"},{title:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4",key:"lastLoginTime"}],playerRows:[]}),r=async()=>{e.loading=!0;const t=e.search.trim(),a=e.options.page,i=e.options.itemsPerPage;console.log("------------------"+a);const s=await F.post(S+"/api/player/search",{query:t,page:a,itemsPerPage:i},R()),g=s.data.code;if(g!=1){d.showErrorSnackbar(s.data.message,g);return}const u=s.data.data;console.log(u);const p=u.key,h=u.value;e.options={page:p.page,itemsPerPage:p.itemsPerPage},e.totalRows=p.totalSize,e.playerRows=h,e.loading=!1,d.showSuccessSnackbar(s.data.message)};async function m(t){e.options=t,await r()}function y(t){e.options.page=t}const c=async()=>{e.options.page=1,r()};return w(()=>{r()}),_(()=>e.options,(t,a)=>{x.isEqual(t,a)||r()}),(t,a)=>{const i=C("v-data-table-server");return B(),V(b,null,{default:l(()=>[n(N,null,{default:l(()=>[n(q,null,{default:l(()=>[n(E,null,{default:l(()=>[T(U(t.$t("player.description"))+" ",1),n(D),n(A,{modelValue:o(e).search,"onUpdate:modelValue":a[0]||(a[0]=s=>o(e).search=s),"append-icon":"search",label:t.$t("player.searchContent"),"single-line":"","hide-details":"","onClick:append":a[1]||(a[1]=s=>c()),onKeyup:a[2]||(a[2]=$(s=>c(),["enter"]))},null,8,["modelValue","label"])]),_:1}),n(i,{headers:o(e).headers,items:o(e).playerRows,search:o(e).search,loading:o(e).loading,"items-per-page":o(e).options.itemsPerPage,"items-length":o(e).totalRows,"onUpdate:options":m,"onUpdate:page":y},null,8,["headers","items","search","loading","items-per-page","items-length"])]),_:1})]),_:1})]),_:1})}}}),O=Q(K,[["__file","D:/Project/tank-game-server-ts/admin-vue3-ts/src/views/tank/PlayerQuery.vue"]]);export{O as default};