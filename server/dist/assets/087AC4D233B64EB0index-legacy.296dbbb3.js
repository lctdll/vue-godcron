/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),u=new q(n||[]);return o(i,"_invoke",{value:k(e,r,u)}),i}function v(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",d="suspendedYield",h="executing",y="completed",m={};function b(){}function g(){}function w(){}var x={};s(x,u,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(N([])));S&&S!==n&&a.call(S,u)&&(x=S);var _=w.prototype=b.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(n,o,i,u){var l=v(e[n],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,u)}))}u(l.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}})}function k(e,r,n){var a=p;return function(o,i){if(a===h)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var l=L(u,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var c=v(e,r,n);if("normal"===c.type){if(a=n.done?y:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function L(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=v(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,o(_,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},E(j.prototype),s(j.prototype,l,(function(){return this})),r.AsyncIterator=j,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new j(f(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(_),s(_,c,"Generator"),s(_,u,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=N,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return u.type="throw",u.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function t(e,t,r,n,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,a)}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0tab-pane-legacy.6f06a411.js","./087AC4D233B64EB0strings-legacy.940fe416.js","./087AC4D233B64EB0index-legacy.48ef5f11.js"],(function(a,o){"use strict";var i,u,l,c,s,f,v,p,d,h,y,m,b,g,w,x,O,S,_,E,j,k,L,P,I,q,N,C,T;return{setters:[function(e){i=e._,u=e.cP,l=e.u,c=e.a,s=e.m,f=e.F,v=e.T,p=e.cU,d=e.a9,h=e.o,y=e.c,m=e.d,b=e.w,g=e.O,w=e.P,x=e.h,O=e.b,S=e.n,_=e.g,E=e.t,j=e.G,k=e.cS,L=e.a3,P=e.a2,I=e.a5,q=e.H,N=e.aj},function(e){C=e.E,T=e.a},null,null],execute:function(){var o=document.createElement("style");o.textContent=".contextmenu[data-v-bfefb9a4]{position:absolute;z-index:50;margin:0;width:7rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:.625rem;padding-bottom:.625rem;padding-left:0;padding-right:0;font-size:.875rem;line-height:1.25rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.contextmenu[data-v-bfefb9a4]:is(.dark *){--tw-border-opacity: 1;border-color:rgb(30 41 59 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.contextmenu li[data-v-bfefb9a4]{cursor:pointer;list-style-type:none;padding:.375rem 1rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity))}.contextmenu li[data-v-bfefb9a4]:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.contextmenu li[data-v-bfefb9a4]:is(.dark *){--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.contextmenu li[data-v-bfefb9a4]:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.gva-tabs[data-v-bfefb9a4] .el-tabs--card>.el-tabs__header{border:none}.gva-tabs[data-v-bfefb9a4] .el-tabs__nav-scroll{padding:4px}.gva-tabs[data-v-bfefb9a4] .el-tabs__nav{border:0}.gva-tabs[data-v-bfefb9a4] .el-tabs__header{border-bottom:0}.gva-tabs[data-v-bfefb9a4] .el-tabs__item{box-sizing:border-box;border:1px solid var(--el-border-color-darker);border-radius:2px;margin-right:5px;margin-left:2px;transition:padding .3s cubic-bezier(.645,.045,.355,1)!important;height:34px}.gva-tabs[data-v-bfefb9a4] .el-tabs__item.is-active{border:1px solid var(--el-color-primary)}.gva-tabs[data-v-bfefb9a4] .el-tabs__item:first-child{border:1px solid var(--el-border-color-darker)}.gva-tabs[data-v-bfefb9a4] .el-tabs__item:first-child.is-active{border:1px solid var(--el-color-primary)}\n",document.head.appendChild(o);var A={class:"gva-tabs"},J=["tab"],G=Object.assign({name:"HistoryComponent"},{__name:"index",setup:function(a){var o=u(),i=l(),G=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},B=c([]),D=c(""),V=c(!1),F=s(),z=c(0),R=c(0),U=c(!1),Y=c(!1),H=c(""),K=f((function(){return F.userInfo.authority.defaultRouter})),Q=function(){B.value=[{name:K.value,meta:{title:"首页"},query:{},params:{}}],i.push({name:K.value}),V.value=!1,sessionStorage.setItem("historys",JSON.stringify(B.value))},X=function(){var e,t=B.value.findIndex((function(t){return G(t)===H.value&&(e=t),G(t)===H.value})),r=B.value.findIndex((function(e){return G(e)===D.value}));B.value.splice(0,t),t>r&&i.push(e),sessionStorage.setItem("historys",JSON.stringify(B.value))},$=function(){var e,t=B.value.findIndex((function(t){return G(t)===H.value&&(e=t),G(t)===H.value})),r=B.value.findIndex((function(e){return G(e)===D.value}));B.value.splice(t+1,B.value.length),t<r&&i.push(e),sessionStorage.setItem("historys",JSON.stringify(B.value))},M=function(){var e;B.value=B.value.filter((function(t){return G(t)===H.value&&(e=t),G(t)===H.value})),i.push(e),sessionStorage.setItem("historys",JSON.stringify(B.value))},W=function(e){if(!B.value.some((function(t){return function(e,t){if(e.name!==t.name)return!1;if(Object.keys(e.query).length!==Object.keys(t.query).length||Object.keys(e.params).length!==Object.keys(t.params).length)return!1;for(var r in e.query)if(e.query[r]!==t.query[r])return!1;for(var n in e.params)if(e.params[n]!==t.params[n])return!1;return!0}(t,e)}))){var t={};t.name=e.name,t.meta=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.meta),delete t.meta.matched,t.query=e.query,t.params=e.params,B.value.push(t)}window.sessionStorage.setItem("activeValue",G(e))},Z=c({}),ee=function(e){var t,r=null==e||null===(t=e.props)||void 0===t?void 0:t.name;if(r){var n=Z.value[r];i.push({name:n.name,query:n.query,params:n.params})}},te=function(e){var t=B.value.findIndex((function(t){return G(t)===e}));G(o)===e&&(1===B.value.length?i.push({name:K.value}):t<B.value.length-1?i.push({name:B.value[t+1].name,query:B.value[t+1].query,params:B.value[t+1].params}):i.push({name:B.value[t-1].name,query:B.value[t-1].query,params:B.value[t-1].params})),B.value.splice(t,1)};v((function(){return V.value}),(function(){V.value?document.body.addEventListener("click",(function(){V.value=!1})):document.body.removeEventListener("click",(function(){V.value=!1}))})),v((function(){return o}),(function(e,t){"Login"!==e.name&&"Reload"!==e.name&&(B.value=B.value.filter((function(e){return!e.meta.closeTab})),W(e),sessionStorage.setItem("historys",JSON.stringify(B.value)),D.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),v((function(){return B.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(B.value)),Z.value={},B.value.forEach((function(e){Z.value[G(e)]=e})),p.emit("setKeepAlive",B.value)}),{deep:!0});return function(){p.on("closeThisPage",(function(){te(G(o))})),p.on("closeAllPage",(function(){Q()})),p.on("mobile",(function(e){Y.value=e})),p.on("collapse",(function(e){U.value=e})),p.on("setQuery",(function(e){var t=B.value.findIndex((function(e){return G(e)===D.value}));B.value[t].query=e,D.value=G(B.value[t]);var r=window.location.href.split("?")[0],n=new URLSearchParams(e).toString();window.history.replaceState({},"","".concat(r,"?").concat(n)),sessionStorage.setItem("historys",JSON.stringify(B.value))})),p.on("switchTab",function(){var r,n=(r=e().mark((function t(r){var n,a,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=B.value.findIndex((function(e){return e.name===r.name})))<0)){e.next=3;break}return e.abrupt("return");case 3:for(a in r.query)r.query[a]=String(r.query[a]);for(o in r.params)r.params[o]=String(r.params[o]);return B.value[n].query=r.query||{},B.value[n].params=r.params||{},e.next=9,N();case 9:i.push(B.value[n]);case 10:case"end":return e.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,o){var i=r.apply(e,n);function u(e){t(i,a,o,u,l,"next",e)}function l(e){t(i,a,o,u,l,"throw",e)}u(void 0)}))});return function(e){return n.apply(this,arguments)}}());var r=[{name:K.value,meta:{title:"首页"},query:{},params:{}}];W(o),B.value=JSON.parse(sessionStorage.getItem("historys"))||r,window.sessionStorage.getItem("activeValue")?D.value=window.sessionStorage.getItem("activeValue"):D.value=G(o),"true"===window.sessionStorage.getItem("needCloseAll")&&(Q(),window.sessionStorage.removeItem("needCloseAll"))}(),d((function(){p.off("collapse"),p.off("mobile")})),function(e,t){var r=C,n=T;return h(),y("div",A,[m(n,{modelValue:D.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return D.value=e}),closable:!(1===B.value.length&&e.$route.name===K.value),type:"card",class:"bg-white text-slate-700 dark:text-slate-500 dark:bg-slate-900",onContextmenu:t[1]||(t[1]=L((function(e){return function(e){if(1===B.value.length&&o.name===K.value)return!1;var t="";(t="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(V.value=!0,z.value=e.clientX,R.value=e.clientY+10,H.value=t.substring(4))}(e)}),["prevent"])),onTabClick:ee,onTabRemove:te},{default:b((function(){return[(h(!0),y(g,null,w(B.value,(function(e){return h(),x(r,{key:G(e),label:e.meta.title,name:G(e),tab:e,class:"border-none"},{label:b((function(){return[O("span",{tab:e,class:S(D.value===G(e)?"text-active":"text-gray-600 dark:text-slate-400 ")},[O("i",{class:S(D.value===G(e)?"text-active":"text-gray-600 dark:text-slate-400")},null,2),_(" "+E(j(k)(e.meta.title,e)),1)],10,J)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),P(O("ul",{style:q({left:z.value+"px",top:R.value+"px"}),class:"contextmenu"},[O("li",{onClick:Q}," 关闭所有 "),O("li",{onClick:X}," 关闭左侧 "),O("li",{onClick:$}," 关闭右侧 "),O("li",{onClick:M}," 关闭其他 ")],4),[[I,V.value]])])}}});a("default",i(G,[["__scopeId","data-v-bfefb9a4"]]))}}}))}();