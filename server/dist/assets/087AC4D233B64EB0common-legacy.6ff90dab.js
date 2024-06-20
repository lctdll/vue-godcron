/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
!function(){function e(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t(r.key),r)}}function t(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0upload-legacy.5dc8d5b8.js","./087AC4D233B64EB0progress-legacy.dd27d880.js","./087AC4D233B64EB0button-legacy.6621f510.js"],(function(t,n){"use strict";var i,r,a,o,l,u,d,c,s,f,p,m;return{setters:[function(e){i=e.v,r=e._,a=e.a,o=e.m,l=e.o,u=e.c,d=e.d,c=e.w,s=e.g,f=e.j,p=e.E},function(e){m=e.E},null,null],execute:function(){var n=document.createElement("style");n.textContent=".image-uploader[data-v-f944346a]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;border-color:#409eff}.image-uploader-icon[data-v-f944346a]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-f944346a]{width:178px;height:178px;display:block}\n",document.head.appendChild(n);t("g",(function(e){return i({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),t("d",(function(e){return i({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),t("e",(function(e){return i({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})}));var h=function(){return t=function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.file=t,this.fileSize=n,this.maxWH=i},(n=[{key:"compress",value:function(){var e=this,t=this.file.type,n=this.file.size/1024;return new Promise((function(i){var r=new FileReader;r.readAsDataURL(e.file),r.onload=function(){var a=document.createElement("canvas"),o=document.createElement("img");o.src=r.result,o.onload=function(){var r=a.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);a.width=l.width,a.height=l.height,r.clearRect(0,0,a.width,a.height),r.drawImage(o,0,0,a.width,a.height);var u=a.toDataURL(t,.9),d=e.fileSizeKB(u);d>e.fileSize&&console.log("图片尺寸太大!"+n+" >> "+d);var c=e.dataURLtoBlob(u,t),s=new File([c],e.file.name);i(s)}}}))}},{key:"dWH",value:function(e,t,n){var i={width:e,height:t};return Math.max(e,t)>n?e>t?(i.width=n,i.height=Math.round(t*(n/e)),i):(i.height=n,i.width=Math.round(e*(n/t)),i):i}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var n=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),a=new Uint8Array(r),o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return t&&(i=t),new Blob([r],{type:i,lastModifiedDate:new Date})}}])&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,i}(),g=(t("a",(function(e){return e&&"http"!==e.slice(0,4)?"/api/"+e:e})),t("i",(function(e){return e.endsWith(".mp4")||e.endsWith(".mov")||e.endsWith(".webm")||e.endsWith(".ogg")})),Object.assign({name:"UploadImage"},{__name:"image",props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,i=e,r=a("/api");o();var g=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return f.error("上传头像图片只能是 jpg或png 格式!"),!1;var r=e.size/1024<i.fileSize;return r||new h(e,i.fileSize,i.maxWH).compress()},v=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=p,i=m;return l(),u("div",null,[d(i,{action:"".concat(r.value,"/fileUploadAndDownload/upload"),"show-file-list":!1,"on-success":v,"before-upload":g,multiple:!1},{default:c((function(){return[d(n,{type:"primary"},{default:c((function(){return[s("压缩上传")]})),_:1})]})),_:1},8,["action"])])}}}));t("U",r(g,[["__scopeId","data-v-f944346a"]])),t("_",Object.assign({name:"UploadCommon"},{__name:"common",emits:["on-success"],setup:function(e,t){var n=t.emit,i=a("/api"),r=a(!1),o=function(e){r.value=!0;var t,n=e.size/1024/1024<.5,i=e.size/1024/1024<5,a="video/mp4"==(t=e.type)||"video/webm"==t||"video/ogg"==t,o=function(e){return"image/jpeg"==e||"image/png"==e||"image/webp"==e||"image/svg+xml"==e}(e.type),l=!0;return a||o||(f.error("上传图片只能是 jpg,png,svg,webp 格式, 上传视频只能是 mp4,webm 格式!"),r.value=!1,l=!1),!i&&a&&(f.error("上传视频大小不能超过 5MB"),r.value=!1,l=!1),!n&&o&&(f.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),r.value=!1,l=!1),console.log("upload file check result: ",l),l},h=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},g=function(){f({type:"error",message:"上传失败"}),r.value=!1};return function(e,t){var n=p,r=m;return l(),u("div",null,[d(r,{action:"".concat(i.value,"/fileUploadAndDownload/upload"),"before-upload":o,"on-error":g,"on-success":h,"show-file-list":!1,class:"upload-btn"},{default:c((function(){return[d(n,{type:"primary"},{default:c((function(){return[s("普通上传")]})),_:1})]})),_:1},8,["action"])])}}}))}}}))}();