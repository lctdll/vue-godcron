/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{ad as e,o as l,c as a,G as t,h as o,w as s,d as r,e as u,b as i,cG as n,g as c,c$ as m,J as d,dg as p,a as v,cY as f,V as g,O as y,P as h,dh as C,t as w,au as B,j as k,l as b,E as x}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as j}from"./087AC4D233B64EB0drawer.178042b4.js";import"./087AC4D233B64EB0overlay.ee491930.js";import{E}from"./087AC4D233B64EB0pagination.4f4dab9f.js";/* empty css                              *//* empty css                            */import"./087AC4D233B64EB0select.ac4ece9f.js";import"./087AC4D233B64EB0scrollbar.5ea68434.js";/* empty css                               */import{E as D}from"./087AC4D233B64EB0image-viewer.37983d33.js";/* empty css                               */import{i as _,a as A,_ as V,U as z,e as I,g as S,d as T}from"./087AC4D233B64EB0common.058b79ad.js";import{_ as U}from"./087AC4D233B64EB0warningBar.4245c872.js";const P={class:"w-40 h-40 relative rounded border border-dashed border-gray-300 overflow-hidden cursor-pointer group"},G={key:1,class:"w-full h-full object-cover",muted:"",preload:"metadata"},O=["src"],M=["src"],F={__name:"selectComponent",props:{model:{default:"",type:String}},emits:["chooseItem","deleteItem"],setup(p,{emit:v}){const f=v,g=()=>{f("chooseItem")},y=()=>{f("deleteItem")};return(v,f)=>{const h=e("VideoPlay"),C=d;return l(),a("div",P,[t(_)(p.model||"")?(l(),o(C,{key:0,size:32,class:"absolute top-[calc(50%-16px)] left-[calc(50%-16px)]"},{default:s((()=>[r(h)])),_:1})):u("",!0),t(_)(p.model||"")?(l(),a("video",G,[i("source",{src:t(A)(p.model)+"#t=1"},null,8,O)])):u("",!0),p.model&&!t(_)(p.model)?(l(),a("img",{key:2,class:"w-full h-full",src:t(A)(p.model),alt:"图片"},null,8,M)):u("",!0),p.model?(l(),a("div",{key:3,class:"left-0 top-0 hidden text-gray-600 group-hover:bg-gray-600 group-hover:bg-opacity-30 w-full h-full group-hover:flex justify-center items-center absolute z-10",onClick:y},[r(C,null,{default:s((()=>[r(t(n))])),_:1}),c(" 删除 ")])):(l(),a("div",{key:4,class:"text-gray-600 group-hover:bg-gray-400 w-full h-full flex justify-center items-center",onClick:g},[r(C,null,{default:s((()=>[r(t(m))])),_:1}),c(" 上传 ")]))])}}},H={key:1,class:"w-full gap-4 flex"},J={class:"gva-btn-list gap-2"},L={class:"flex flex-wrap gap-4"},N={class:"w-40 h-40 border rounded overflow-hidden border-dashed border-gray-300 cursor-pointer relative group"},Y=["onClick"],$=["src"],q={key:2,class:"w-full h-full object-cover flex items-center justify-center"},K=["onClick"],Q=["onClick"],R={__name:"selectImage",props:p({multiple:{type:Boolean,default:!1},fileType:{type:String,default:""},maxUpdateCount:{type:Number,default:0}},{modelValue:{type:[String,Array]},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const m=v(""),p=v(""),P=v({}),G=v(1),O=v(0),M=v(20),R=f(n,"modelValue"),W=n,X=v([]);g((()=>{W.multiple&&(X.value=R.value)}));const Z=e=>{M.value=e,re()},ee=e=>{G.value=e,re()},le=v(!1),ae=v([]),te={image:["png","jpg","jpeg","gif","bmp","webp"],video:["mp4","avi","rmvb","rm","asf","divx","mpg","mpeg","mpe","wmv","mkv","vob"]},oe=e=>{if(W.fileType){if(!te[W.fileType].some((l=>{if(e.includes(l))return!0})))return void k({type:"error",message:"当前类型不支持使用"})}W.multiple?(X.value.push(e),R.value=X.value):R.value=e,le.value=!1},se=async()=>{!R.value||W.multiple?(await re(),le.value=!0):R.value=""},re=async()=>{const e=await S({page:G.value,pageSize:M.value,...P.value});0===e.code&&(ae.value=e.data.list,O.value=e.data.total,G.value=e.data.page,M.value=e.data.pageSize)};return(v,f)=>{const g=b,S=x,te=e("VideoPlay"),ue=d,ie=D,ne=e("CircleClose"),ce=E,me=j;return l(),a("div",null,[n.multiple?(l(),a("div",H,[(l(!0),a(y,null,h(X.value,((e,a)=>(l(),o(F,{key:a,model:e,onChooseItem:se,onDeleteItem:e=>(e=>{X.value.splice(e,1),R.value=X.value})(a)},null,8,["model","onDeleteItem"])))),128)),X.value.length<W.maxUpdateCount||0===W.maxUpdateCount?(l(),o(F,{key:0,onChooseItem:se,onDeleteItem:se})):u("",!0)])):(l(),o(F,{key:0,model:R.value,onChooseItem:se,onDeleteItem:se},null,8,["model"])),r(me,{modelValue:le.value,"onUpdate:modelValue":f[1]||(f[1]=e=>le.value=e),title:"媒体库",size:"650px"},{default:s((()=>[r(U,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),i("div",J,[r(V,{"image-common":p.value,onOnSuccess:re},null,8,["image-common"]),r(z,{"image-url":m.value,"file-size":512,"max-w-h":1080,onOnSuccess:re},null,8,["image-url"]),r(g,{modelValue:P.value.keyword,"onUpdate:modelValue":f[0]||(f[0]=e=>P.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"]),r(S,{type:"primary",icon:"search",onClick:re},{default:s((()=>[c(" 查询 ")])),_:1})]),i("div",L,[(l(!0),a(y,null,h(ae.value,((e,n)=>(l(),a("div",{key:n,class:"w-40"},[i("div",N,[(l(),o(ie,{key:n,src:t(A)(e.url),fit:"cover",class:"w-full h-full relative",onClick:l=>oe(e.url)},{error:s((()=>[t(_)(e.url||"")?(l(),o(ue,{key:0,size:32,class:"absolute top-[calc(50%-16px)] left-[calc(50%-16px)]"},{default:s((()=>[r(te)])),_:1})):u("",!0),t(_)(e.url||"")?(l(),a("video",{key:1,class:"w-full h-full object-cover",muted:"",preload:"metadata",onClick:l=>oe(e.url)},[i("source",{src:t(A)(e.url)+"#t=1"},null,8,$),c(" 您的浏览器不支持视频播放 ")],8,Y)):(l(),a("div",q,[r(ue,{size:32},{default:s((()=>[r(t(C))])),_:1})]))])),_:2},1032,["src","onClick"])),i("div",{class:"absolute -right-1 top-1 w-8 h-8 group-hover:inline-block hidden",onClick:l=>(e=>{B.confirm("是否删除该文件","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await T(e)).code&&(k({type:"success",message:"删除成功!"}),re())})).catch((()=>{k({type:"info",message:"已取消删除"})}))})(e)},[r(ue,{size:16},{default:s((()=>[r(ne)])),_:1})],8,K)]),i("div",{class:"overflow-hidden text-nowrap overflow-ellipsis text-center w-full",onClick:l=>(async e=>{B.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:l})=>{e.name=l,0===(await I(e)).code&&(k({type:"success",message:"编辑成功!"}),re())})).catch((()=>{k({type:"info",message:"取消修改"})}))})(e)},w(e.name),9,Q)])))),128))]),r(ce,{"current-page":G.value,"page-size":M.value,total:O.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:ee,onSizeChange:Z},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])])}}};export{R as _};