/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(t){c=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,l=Object.create(a.prototype),i=new C(n||[]);return o(l,"_invoke",{value:q(e,r,i)}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=d;var h="suspendedStart",p="suspendedYield",m="executing",y="completed",b={};function g(){}function v(){}function w(){}var x={};c(x,i,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(N([])));E&&E!==n&&a.call(E,i)&&(x=E);var j=w.prototype=g.prototype=Object.create(x);function B(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(n,o,l,i){var s=f(e[n],e,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&a.call(c,"__await")?t.resolve(c.__await).then((function(e){r("next",e,l,i)}),(function(e){r("throw",e,l,i)})):t.resolve(c).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,i)}))}i(s.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}})}function q(e,r,n){var a=h;return function(o,l){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===o)throw l;return{value:t,done:!0}}for(n.method=o,n.arg=l;;){var i=n.delegate;if(i){var s=A(i,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var u=f(e,r,n);if("normal"===u.type){if(a=n.done?y:p,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=y,n.method="throw",n.arg=u.arg)}}}function A(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var l=o.arg;return l?l.done?(r[e.resultName]=l.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=c(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,u,"GeneratorFunction")),e.prototype=Object.create(j),e},r.awrap=function(e){return{__await:e}},B(_.prototype),c(_.prototype,s,(function(){return this})),r.AsyncIterator=_,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var l=new _(d(e,t,n,a),o);return r.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},B(j),c(j,u,"Generator"),c(j,i,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var s=a.call(l,"catchLoc"),u=a.call(l,"finallyLoc");if(s&&u){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},r}function t(e,t,r,n,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0form-item-legacy.69b7dd56.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0tag-legacy.4ef5d524.js","./087AC4D233B64EB0select-legacy.cb3601f1.js","./087AC4D233B64EB0scrollbar-legacy.e49fae70.js","./087AC4D233B64EB0popper-legacy.78a44115.js","./087AC4D233B64EB0button-legacy.6621f510.js","./087AC4D233B64EB0initdb-legacy.876e424e.js","./087AC4D233B64EB0castArray-legacy.e83740bc.js","./087AC4D233B64EB0_baseClone-legacy.c051fd96.js","./087AC4D233B64EB0_Uint8Array-legacy.c1bedb77.js","./087AC4D233B64EB0_initCloneObject-legacy.79f847f8.js","./087AC4D233B64EB0index-legacy.53a4542e.js","./087AC4D233B64EB0index-legacy.c673660d.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0strings-legacy.940fe416.js","./087AC4D233B64EB0isEqual-legacy.b7a2b208.js","./087AC4D233B64EB0debounce-legacy.9dc71a8b.js","./087AC4D233B64EB0_baseIteratee-legacy.43e79d0a.js","./087AC4D233B64EB0index-legacy.0ec4d971.js"],(function(r,n){"use strict";var a,o,l,i,s,u,c,d,f,h,p,m,y,b,g,v,w,x,k,E,j,B,_,q,A,P;return{setters:[function(e){a=e._,o=e.u,l=e.r,i=e.a,s=e.o,u=e.c,c=e.b,d=e.n,f=e.d,h=e.w,p=e.e,m=e.f,y=e.E,b=e.g,g=e.h,v=e.p,w=e.i,x=e.j,k=e.k,E=e.l},function(e){j=e.E,B=e.a},null,null,function(e){_=e.E,q=e.a},null,null,null,function(e){A=e._,P=e.i},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".slide-in-fwd-top[data-v-29ba3bf9]{animation:slide-in-fwd-top-29ba3bf9 .4s cubic-bezier(.25,.46,.45,.94) both}.slide-out-right[data-v-29ba3bf9]{animation:slide-out-right-29ba3bf9 .5s cubic-bezier(.55,.085,.68,.53) both}.slide-in-left[data-v-29ba3bf9]{animation:slide-in-left-29ba3bf9 .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-in-fwd-top-29ba3bf9{0%{transform:translateZ(-1400px) translateY(-800px);opacity:0}to{transform:translateZ(0) translateY(0);opacity:1}}@keyframes slide-out-right-29ba3bf9{0%{transform:translate(0);opacity:1}to{transform:translate(1000px);opacity:0}}@keyframes slide-in-left-29ba3bf9{0%{transform:translate(-1000px);opacity:0}to{transform:translate(0);opacity:1}}@media (max-width: 750px){.form[data-v-29ba3bf9]{width:94vw!important;padding:0}}\n",document.head.appendChild(n);var L=function(e){return v("data-v-29ba3bf9"),e=e(),w(),e},C={class:"rounded-lg flex items-center justify-evenly w-full h-full relative md:w-screen md:h-screen md:bg-[#194bfb] overflow-hidden"},N={class:"rounded-md w-full h-full flex items-center justify-center overflow-hidden"},V=L((function(){return c("div",{class:"oblique h-[130%] w-3/5 bg-white dark:bg-slate-900 transform -rotate-12 absolute -ml-80"},null,-1)})),D={class:"text-lg"},O=m('<div class="font-sans text-4xl font-bold text-center mb-4 dark:text-white" data-v-29ba3bf9>GIN-VUE-ADMIN</div><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>初始化须知</p><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>1.您需有用一定的VUE和GOLANG基础</p><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>2.请您确认是否已经阅读过<a class="text-blue-600 font-bold" href="https://www.gin-vue-admin.com" target="_blank" data-v-29ba3bf9>官方文档</a> <a class="text-blue-600 font-bold" href="https://www.bilibili.com/video/BV1kv4y1g7nT?p=2" target="_blank" data-v-29ba3bf9>初始化视频</a></p><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>3.请您确认是否了解后续的配置流程</p><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>4.如果您使用mysql数据库，请确认数据库引擎为<span class="text-red-600 font-bold text-3xl ml-2" data-v-29ba3bf9>innoDB</span></p><p class="text-gray-600 dark:text-gray-300 mb-2" data-v-29ba3bf9>注：开发组不为文档中书写过的内容提供无偿服务</p>',7),T={class:"flex items-center justify-between mt-8"},G={style:{"text-align":"right"}},U=L((function(){return c("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[c("img",{class:"h-full",src:A,alt:"banner"})],-1)})),F=Object.assign({name:"Init"},{__name:"index",setup:function(r){var n=o(),a=l({showReadme:!1,showForm:!1}),m=function(){a.showReadme=!1,setTimeout((function(){a.showForm=!0}),20)},v=function(){window.open("https://www.gin-vue-admin.com/guide/start-quickly/env.html")},w=i(!1),A=l({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""}),L=function(e){switch(e){case"mysql":default:Object.assign(A,{adminPassword:"",reAdminPassword:"",dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""});break;case"pgsql":Object.assign(A,{adminPassword:"",reAdminPassword:"",dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva",dbPath:""});break;case"oracle":Object.assign(A,{adminPassword:"",reAdminPassword:"",dbType:"oracle",host:"127.0.0.1",port:"1521",userName:"oracle",password:"",dbName:"gva",dbPath:""});break;case"mssql":Object.assign(A,{adminPassword:"",reAdminPassword:"",dbType:"mssql",host:"127.0.0.1",port:"1433",userName:"mssql",password:"",dbName:"gva",dbPath:""});break;case"sqlite":Object.assign(A,{adminPassword:"",reAdminPassword:"",dbType:"sqlite",host:"",port:"",userName:"",password:"",dbName:"gva",dbPath:""})}},F=function(){var r,a=(r=e().mark((function t(){var r,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(A.adminPassword.length<6)){e.next=3;break}return x({type:"error",message:"密码长度不能小于6位"}),e.abrupt("return");case 3:return r=k.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"}),e.prev=4,e.next=7,P(A);case 7:0===(a=e.sent).code&&(w.value=!0,x({type:"success",message:a.msg}),n.push({name:"Login"})),r.close(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),r.close();case 15:case"end":return e.stop()}}),t,null,[[4,12]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var l=r.apply(e,n);function i(e){t(l,a,o,i,s,"next",e)}function s(e){t(l,a,o,i,s,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();return function(e,t){var r=y,n=E,o=B,l=_,i=q,w=j;return s(),u("div",C,[c("div",N,[V,a.showForm?p("",!0):(s(),u("div",{key:0,class:d([a.showReadme?"slide-out-right":"slide-in-fwd-top"])},[c("div",D,[O,c("p",T,[f(r,{type:"primary",size:"large",onClick:v},{default:h((function(){return[b(" 阅读文档 ")]})),_:1}),f(r,{type:"primary",size:"large",onClick:m},{default:h((function(){return[b(" 我已确认 ")]})),_:1})])])],2)),a.showForm?(s(),u("div",{key:1,class:d([[a.showForm?"slide-in-left":"slide-out-right"],"w-96"])},[f(w,{ref:"formRef",model:A,"label-width":"100px",size:"large"},{default:h((function(){return[f(o,{label:"管理员密码"},{default:h((function(){return[f(n,{modelValue:A.adminPassword,"onUpdate:modelValue":t[0]||(t[0]=function(e){return A.adminPassword=e}),placeholder:"admin账号的默认密码"},null,8,["modelValue"])]})),_:1}),f(o,{label:"数据库类型"},{default:h((function(){return[f(i,{modelValue:A.dbType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return A.dbType=e}),placeholder:"请选择",class:"w-full",onChange:L},{default:h((function(){return[f(l,{key:"mysql",label:"mysql",value:"mysql"}),f(l,{key:"pgsql",label:"pgsql",value:"pgsql"}),f(l,{key:"oracle",label:"oracle",value:"oracle"}),f(l,{key:"mssql",label:"mssql",value:"mssql"}),f(l,{key:"sqlite",label:"sqlite",value:"sqlite"})]})),_:1},8,["modelValue"])]})),_:1}),"sqlite"!==A.dbType?(s(),g(o,{key:0,label:"host"},{default:h((function(){return[f(n,{modelValue:A.host,"onUpdate:modelValue":t[2]||(t[2]=function(e){return A.host=e}),placeholder:"请输入数据库链接"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==A.dbType?(s(),g(o,{key:1,label:"port"},{default:h((function(){return[f(n,{modelValue:A.port,"onUpdate:modelValue":t[3]||(t[3]=function(e){return A.port=e}),placeholder:"请输入数据库端口"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==A.dbType?(s(),g(o,{key:2,label:"userName"},{default:h((function(){return[f(n,{modelValue:A.userName,"onUpdate:modelValue":t[4]||(t[4]=function(e){return A.userName=e}),placeholder:"请输入数据库用户名"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==A.dbType?(s(),g(o,{key:3,label:"password"},{default:h((function(){return[f(n,{modelValue:A.password,"onUpdate:modelValue":t[5]||(t[5]=function(e){return A.password=e}),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])]})),_:1})):p("",!0),f(o,{label:"dbName"},{default:h((function(){return[f(n,{modelValue:A.dbName,"onUpdate:modelValue":t[6]||(t[6]=function(e){return A.dbName=e}),placeholder:"请输入数据库名称"},null,8,["modelValue"])]})),_:1}),"sqlite"===A.dbType?(s(),g(o,{key:4,label:"dbPath"},{default:h((function(){return[f(n,{modelValue:A.dbPath,"onUpdate:modelValue":t[7]||(t[7]=function(e){return A.dbPath=e}),placeholder:"请输入sqlite数据库文件存放路径"},null,8,["modelValue"])]})),_:1})):p("",!0),f(o,null,{default:h((function(){return[c("div",G,[f(r,{type:"primary",onClick:F},{default:h((function(){return[b("立即初始化")]})),_:1})])]})),_:1})]})),_:1},8,["model"])],2)):p("",!0)]),U])}}});r("default",a(F,[["__scopeId","data-v-29ba3bf9"]]))}}}))}();