/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{v as a}from"./087AC4D233B64EB0index.f7794d3b.js";const t=t=>a({url:"/autoCode/preview",method:"post",data:t}),o=t=>a({url:"/autoCode/createTemp",method:"post",data:t,responseType:"blob"}),e=t=>a({url:"/autoCode/getDB",method:"get",params:t}),d=t=>a({url:"/autoCode/getTables",method:"get",params:t}),s=t=>a({url:"/autoCode/getColumn",method:"get",params:t}),u=t=>a({url:"/autoCode/getSysHistory",method:"post",data:t}),r=t=>a({url:"/autoCode/rollback",method:"post",data:t}),l=t=>a({url:"/autoCode/getMeta",method:"post",data:t}),p=t=>a({url:"/autoCode/delSysHistory",method:"post",data:t}),m=t=>a({url:"/autoCode/createPackage",method:"post",data:t}),C=()=>a({url:"/autoCode/getPackage",method:"post"}),g=t=>a({url:"/autoCode/delPackage",method:"post",data:t}),h=t=>a({url:"/autoCode/createPlug",method:"post",data:t}),c=t=>a({url:"/autoCode/pubPlug",method:"post",params:t});export{d as a,s as b,o as c,C as d,l as e,u as f,e as g,p as h,m as i,g as j,h as k,c as l,t as p,r};