(function(e){function n(n){for(var o,a,u=n[0],c=n[1],l=n[2],s=0,p=[];s<u.length;s++)a=u[s],r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"994ccd4d"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e),i=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},"69b3":function(e,n,t){"use strict";var o=t("af03"),r=t.n(o);r.a},af03:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n      "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a=(t("5c0b"),t("2877")),u={},c=Object(a["a"])(u,r,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,s=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Kingslayer"}})],1)},p=[],d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("p",[e._v("A text adventure game written in Rust.")])])},v=[],m=o["a"].extend({name:"HelloWorld",props:{msg:String}}),b=m,g=(t("69b3"),Object(a["a"])(b,d,v,!1,null,"4c744c9e",null));g.options.__file="HelloWorld.vue";var h=g.exports,w=o["a"].extend({name:"home",components:{HelloWorld:h}}),_=w,y=Object(a["a"])(_,f,p,!1,null,null,null);y.options.__file="Home.vue";var j=y.exports;o["a"].use(s["a"]);var O=new s["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),x=t("2f62");o["a"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{}}),P=t("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:O,store:k,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.b34449bc.js.map