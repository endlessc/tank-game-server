(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1379939c"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),s=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(s["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},a889:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{padless:""}},[i("v-row",{attrs:{justify:"center","no-gutters":""}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" Copyright "+t._s((new Date).getFullYear())+" — "),i("kbd",[t._v("zfoo")])])],1)],1)},s=[],n={name:"AppFooter",data:function(){return{links:[{text:"Home",to:"/"},{text:"About Us"},{text:"Team"},{text:"Services"},{text:"Contact Us"}]}}},a=n,r=i("2877"),c=i("6544"),p=i.n(c),u=i("62ad"),l=i("5530"),h=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),d=i("3a66"),f=i("d10f"),v=i("58df"),b=i("80d2"),m=Object(v["a"])(h["a"],Object(d["a"])("footer",["height","inset"]),f["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(l["a"])(Object(l["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(l["a"])(Object(l["a"])({},h["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(b["g"])(t),left:Object(b["g"])(this.computedLeft),right:Object(b["g"])(this.computedRight),bottom:Object(b["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),g=i("0fd9"),y=Object(r["a"])(a,o,s,!1,null,null,null);e["default"]=y.exports;p()(y,{VCol:u["a"],VFooter:m,VRow:g["a"]})},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);