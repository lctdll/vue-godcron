/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0switch-legacy.f98eec2a.js","./087AC4D233B64EB0index-legacy.494c7a1c.js"],(function(e,t){"use strict";var a,n,o,r,c,i,d,s,l,u,m,v,p,g;return{setters:[function(e){a=e._,n=e.a,o=e.ah,r=e.o,c=e.c,i=e.b,d=e.n,s=e.d,l=e.G,u=e.d5,m=e.d6,v=e.cU},function(e){p=e.E},function(e){g=e.default}],execute:function(){var t=document.createElement("style");t.textContent=".search-component[data-v-56d86ca2]{margin-right:1.25rem;display:inline-flex;gap:1.25rem;overflow:hidden;text-align:center;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.search-component[data-v-56d86ca2]:is(.dark *){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.search-component div[data-v-56d86ca2]{cursor:pointer}.search-component .el-input__inner[data-v-56d86ca2]{border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.search-component .el-dropdown-link[data-v-56d86ca2]{cursor:pointer}.reload[data-v-56d86ca2]{font-size:18px}.reloading[data-v-56d86ca2]{animation:turn-56d86ca2 .5s linear infinite}@keyframes turn-56d86ca2{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(360deg)}}\n",document.head.appendChild(t);var f={class:"search-component items-center"};e("default",a(Object.assign({name:"BtnBox"},{__name:"search",setup:function(e){var t=n("true"===localStorage.getItem("isDark")||!0);o((function(){t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("isDark",!0)):(document.documentElement.classList.remove("dark"),localStorage.setItem("isDark",!1))}));var a=n(!1),h=function(){a.value=!0,v.emit("reload"),setTimeout((function(){a.value=!1}),500)},y=function(){window.open("https://support.qq.com/product/371961")},x=function(e){t.value=e};return function(e,n){var o=p;return r(),c("div",f,[i("div",{class:d(["gvaIcon gvaIcon-refresh",[a.value?"reloading":""]]),onClick:h},null,2),s(g,{class:"search-icon"}),i("div",{class:"gvaIcon gvaIcon-customer-service",onClick:y}),s(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return t.value=e}),"active-action-icon":l(u),"inactive-action-icon":l(m),onChange:x},null,8,["modelValue","active-action-icon","inactive-action-icon"])])}}}),[["__scopeId","data-v-56d86ca2"]]))}}}));