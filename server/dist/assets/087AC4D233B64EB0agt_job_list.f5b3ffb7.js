/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{_ as e,r as a,a as l,o as t,c as n,b as o,d as r,w as s,O as i,P as d,h as u,g as m,t as p,e as c,j as g,au as B,E as v,l as f}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as C}from"./087AC4D233B64EB0drawer.178042b4.js";import"./087AC4D233B64EB0overlay.ee491930.js";/* empty css                              */import{E as _}from"./087AC4D233B64EB0pagination.4f4dab9f.js";/* empty css                            */import{E as j,a as b}from"./087AC4D233B64EB0select.ac4ece9f.js";import"./087AC4D233B64EB0scrollbar.5ea68434.js";/* empty css                               */import{E,a as y}from"./087AC4D233B64EB0table-column.ebf38335.js";import"./087AC4D233B64EB0checkbox.689d67cf.js";/* empty css                                */import{a as A,E as D}from"./087AC4D233B64EB0form-item.2294f669.js";/* empty css                               */import{g as h,b as w,d as k}from"./087AC4D233B64EB0mangjob.af0baf26.js";import{g as x}from"./087AC4D233B64EB0manger.bc2b6569.js";/* empty css                                                             */import{_ as z}from"./087AC4D233B64EB0warningBar.4245c872.js";import"./087AC4D233B64EB0index.180a68c4.js";import"./087AC4D233B64EB0isEqual.e4d5ab49.js";import"./087AC4D233B64EB0_Uint8Array.a14e9c36.js";import"./087AC4D233B64EB0index.18ebb74e.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0strings.13f65845.js";import"./087AC4D233B64EB0debounce.9b1e718d.js";import"./087AC4D233B64EB0_baseIteratee.ecc9a1d9.js";import"./087AC4D233B64EB0index.21f2f826.js";import"./087AC4D233B64EB0castArray.b2df96d4.js";import"./087AC4D233B64EB0_initCloneObject.6c0ecbc8.js";import"./087AC4D233B64EB0_baseClone.3d27a61c.js";const V={class:"gva-search-box"},S={class:"gva-table-box"},I={class:"gva-pagination"},T={class:"flex justify-between items-center"},q={class:"text-lg"},F=e(Object.assign({name:"Menus"},{__name:"agt_job_list",setup(e){const F=a({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),O=l(1),U=l(0),R=l(10),M=l([]),N=l({}),$=l([]);(async()=>{const e=await x({page:O.value,pageSize:R.value,...N.value});0===e.code&&(M.value=e.data.list)})();const G=()=>{O.value=1,R.value=10,L()},L=async()=>{const e=await h({page:O.value,pageSize:R.value,...N.value});0===e.code&&(console.log(e.data.list),$.value=e.data.list,U.value=e.data.total,O.value=e.data.page,R.value=e.data.pageSize)},P=async()=>{K.value.validate((async e=>{if(e){let e;Z.value||(e=await createAgentTable(form.value)),0===e.code&&(g({type:"success",message:Z.value?"编辑成功":"添加成功!"}),getTableData()),W(),X.value=!1}}))},H=()=>{form.value.path=form.value.name},J=e=>{W(),e()},K=l(null),Q=l(!1),W=()=>{Q.value=!1,K.value.resetFields(),form.value={ID:0,agent_addr:""}},X=l(!1),Y=()=>{W(),X.value=!1};l([{ID:"0"}]);const Z=l(!1),ee=l("新增菜单");return(e,a)=>{const l=j,h=b,x=A,Q=v,W=D,Z=E,ae=y,le=_,te=f,ne=C;return t(),n("div",null,[o("div",V,[r(W,{ref:"searchForm",inline:!0,model:N.value},{default:s((()=>[r(x,{label:"Agent"},{default:s((()=>[r(h,{modelValue:N.value.agent_addr,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value.agent_addr=e),clearable:"",placeholder:"请选择"},{default:s((()=>[(t(!0),n(i,null,d(M.value,((e,a)=>(t(),u(l,{key:a,label:e.agent_addr,value:e.agent_addr},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(x,null,{default:s((()=>[r(Q,{type:"primary",icon:"search",onClick:G},{default:s((()=>[m("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),o("div",S,[r(ae,{data:$.value,"row-key":"id"},{default:s((()=>[r(Z,{align:"left",label:"ID","min-width":"100",prop:"id"}),r(Z,{align:"left",label:"Name","min-width":"100",prop:"name"}),r(Z,{align:"left",label:"Cron","min-width":"100",prop:"spec"}),r(Z,{align:"left",label:"Running","min-width":"100",prop:"isRunning"}),r(Z,{align:"left",label:"Text","min-width":"100",prop:"text"}),r(Z,{align:"left",fixed:"right",label:"操作",width:"300"},{default:s((e=>[e.row.isRunning?(t(),u(Q,{key:0,type:"primary",link:"",onClick:a=>(async(e,a,l)=>{0===(await w({agent_addr:e,job_name:a,action:"stop"})).code&&(g({type:"success",message:"暂停成功!"}),L())})(N.value.agent_addr,e.row.name,e.$index)},{default:s((()=>[m("暂停")])),_:2},1032,["onClick"])):(t(),u(Q,{key:1,type:"primary",link:"",onClick:a=>(async(e,a,l)=>{0===(await w({agent_addr:e,job_name:a,action:"start"})).code&&(g({type:"success",message:"启动成功!"}),L())})(N.value.agent_addr,e.row.name,e.$index)},{default:s((()=>[m("启动")])),_:2},1032,["onClick"])),r(Q,{type:"primary",link:"",icon:"delete",onClick:a=>{return l=N.value.agent_addr,t=e.row.name,void B.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await k({agent_addr:l,job_name:t})).code&&(g({type:"success",message:"删除成功!"}),1===$.value.length&&O.value>1&&O.value--,L())})).catch((e=>{console.log("用户取消了操作",e),g({type:"info",message:"已取消删除"})}));var l,t}},{default:s((()=>[m("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",I,[r(le,{"current-page":O.value,"page-size":R.value,"page-sizes":[10,30,50,100],total:U.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]),r(ne,{modelValue:X.value,"onUpdate:modelValue":a[2]||(a[2]=e=>X.value=e),size:"60%","before-close":J,"show-close":!1},{header:s((()=>[o("div",T,[o("span",q,p(ee.value),1),o("div",null,[r(Q,{onClick:Y},{default:s((()=>[m("取 消")])),_:1}),r(Q,{type:"primary",onClick:P},{default:s((()=>[m("确 定")])),_:1})])])])),default:s((()=>[r(z,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),X.value?(t(),u(W,{key:0,ref_key:"menuForm",ref:K,model:e.form,rules:F,"label-width":"85px"},{default:s((()=>[r(x,{label:"agent_addr",prop:"agent_addr"},{default:s((()=>[r(te,{modelValue:e.form.agent_addr,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.agent_addr=a),autocomplete:"off",placeholder:"唯一英文字符串",onChange:H},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):c("",!0)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-ec40f250"]]);export{F as default};