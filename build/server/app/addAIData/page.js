(()=>{var e={};e.id=547,e.ids=[547],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6911:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>u,routeModule:()=>g,tree:()=>d});var s=r(3137),a=r(4647),i=r(4183),o=r.n(i),n=r(1775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let p=s.AppPageRouteModule,d=["",{children:["addAIData",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4073)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\addAIData\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1967)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\addAIData\\page.tsx"],c="/addAIData/page",h={require:r,loadChunk:()=>Promise.resolve()},g=new p({definition:{kind:a.x.APP_PAGE,page:"/addAIData/page",pathname:"/addAIData",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7100:(e,t,r)=>{Promise.resolve().then(r.bind(r,5254))},5254:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(80),a=r(9885),i=r(8312),o=r(3511),n=r(3258),l=r(4751),p=r(7114),d=r(5816),u=r(505);r(2479);let __WEBPACK_DEFAULT_EXPORT__=()=>{let e;let t=(0,p.useRouter)(),[r,c]=(0,a.useState)(!1),[h,g]=(0,a.useState)(""),[m,x]=(0,a.useState)([]),[b,f]=(0,a.useState)(null),[v,A]=(0,a.useState)(""),[_,y]=(0,a.useState)(""),[k,C]=(0,a.useState)({organization:{userId:"",organizationName:""},url:"",openAIApi:""});(0,a.useEffect)(()=>{(async function(){let e=await (0,o.$9)();e&&e.response&&e.response.data&&x(e.response.data)})()},[]);let isValidOpenAIApi=e=>e.startsWith("sk-")&&e.length>50;(0,a.useEffect)(()=>{C({organization:{organizationName:h,userId:e},url:v,openAIApi:_})},[h,v,e,_]);let fetchFile=async()=>{if(!b){l.Am.error("No file selected",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}let e=new FormData;e.append("file",b);try{let t=await n.Z.post("https://chit-chat.tech/api/v1/upload",e);return(0,l.Am)("Successfully, Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),A(t.data.data.url),!0}catch(e){return l.Am.error("oops someting went wrong !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),!1}},SubmitAiModel=async()=>{await n.Z.post("https://chit-chat.tech/api/v1/addAiTrainingModel",k)};console.log(k);let handleFileSubmit=async e=>{e.preventDefault();let t=await fetchFile();t?(0,l.Am)("File Submmited !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):l.Am.error("File not Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},handleSubmit=async e=>{e.preventDefault(),c(!0),await SubmitAiModel().then(e=>{(0,l.Am)("Ai Model Created !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.log(e),t.push("/dashboard")}).catch(e=>{l.Am.error("Failed Training",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.log(e)}),c(!1)},P=!!b&&!!h;return(0,s.jsxs)(s.Fragment,{children:[s.jsx(i.Z,{}),e?r?s.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20",children:s.jsx(d.Z7b,{className:"animate-spin text-6xl"})}):s.jsx("div",{className:"sm:pt-32 pt-52 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50",children:(0,s.jsxs)("div",{className:"p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10",children:[s.jsx("h2",{className:"text-xl mb-4 font-bold",children:"Train Data"}),(0,s.jsxs)("form",{children:[s.jsx("label",{className:"block text-sm font-medium mb-2",children:"Upload File:"}),s.jsx("input",{onChange:e=>{let t=e.target.files?.item(0);t&&t.type;{let t=e.target.files?.item(0);t&&f(t)}},type:"file",className:"mb-4 p-2 file:bg-pink-300 file:rounded-xl file:active:bg-pink-400 file:shadow-lg file:border-pink-600"}),s.jsx("button",{onClick:handleFileSubmit,className:"bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600",children:"Add File"}),s.jsx("label",{className:"block text-sm font-medium mb-2",children:"Select Organization:"}),(0,s.jsxs)("select",{value:h,onChange:e=>g(e.target.value),className:"mb-4 border p-2 rounded w-full bg-pink-200",children:[s.jsx("option",{disabled:!0,value:"",children:"-- Select Organization --"}),m&&m.map((e,t)=>s.jsx("option",{value:e.OrganizationName,children:e.OrganizationName},t))]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-sm font-medium mb-2",children:"OpenAi ApiKey"}),s.jsx("input",{type:"text",name:"openAIApi",required:!0,onChange:e=>{let t=e.target.value;if(!isValidOpenAIApi(t)){l.Am.error("Invalid OpenAI API Key",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}y(t)},className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"})]}),s.jsx("button",{type:"submit",onClick:handleSubmit,className:`bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ${!P&&"opacity-50 cursor-not-allowed"}`,disabled:!P,children:"Submit"})]})]})}):s.jsx(u.Z,{})]})}},4073:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var s=r(7536);let a=(0,s.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\CHTBTY\chatbot-frnt\src\app\addAIData\page.tsx`),{__esModule:i,$$typeof:o}=a,n=a.default,l=n}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[273,575,610,258,402,225,185,511,505],()=>__webpack_exec__(6911));module.exports=r})();