(()=>{var e={};e.id=702,e.ids=[702],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9455:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>p,routeModule:()=>h,tree:()=>c});var r=t(3137),a=t(4647),i=t(4183),n=t.n(i),o=t(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let d=r.AppPageRouteModule,c=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1003)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\dashboard\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1967)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\Apurv Krishn Jha\\Desktop\\CHTBTY\\chatbot-frnt\\src\\app\\dashboard\\page.tsx"],x="/dashboard/page",u={require:t,loadChunk:()=>Promise.resolve()},h=new d({definition:{kind:a.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8277:(e,s,t)=>{Promise.resolve().then(t.bind(t,6880))},6880:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>page});var r=t(80),a=t(8312),i=t(9885);function OrgTemp({OrganizationName:e,OrganizationPhone:s,OrganizationWebsite:t,createdAt:a}){return r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex justify-center items-center p-3",children:(0,r.jsxs)("div",{className:"max-w-xs bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300",children:[r.jsx("h1",{className:"text-xl font-semibold mb-2",children:e}),(0,r.jsxs)("div",{className:"mb-3",children:[r.jsx("span",{className:"font-medium",children:"Phone:"})," ",s]}),(0,r.jsxs)("div",{className:"mb-3",children:[r.jsx("span",{className:"font-medium",children:"Website:"})," ",t]}),(0,r.jsxs)("div",{children:[r.jsx("span",{className:"font-medium",children:"Created At:"})," ",new Date(a).toLocaleString()]})]})})})}var n=t(2695),o=t(2772),l=t(930),d=t(4751);let dashboard_AiModel=({organizationName:e,uploadKnowledge:s,embeddedKnowlege:t,apiKey:a,createdAt:c})=>{let[p,x]=(0,i.useState)({organizationName:"",uploadKnowledge:"",embeddedKnowlege:"",apiKey:"",createdAt:""}),[u,h]=(0,i.useState)(!1);return r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex justify-between",children:r.jsx("div",{className:"rounded-xl p-2 shadow-xl w-full",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[r.jsx("div",{className:"flex-none rounded-md mr-2",children:e}),(0,r.jsxs)("div",{className:"flex-grow text-center rounded-md",children:[a.substring(0,4),"...",a.slice(-5),r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(a.toString()).then(()=>{(0,d.Am)("API Key copied to clipboard!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}).catch(e=>{d.Am.error("Failed to copy API Key!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})},className:"p-2 border text-white rounded active:bg-white",children:r.jsx("div",{className:"flex",children:r.jsx(n.fwS,{className:"text-lime-500"})})})]}),(0,r.jsxs)("div",{children:[r.jsx("button",{className:"flex-none rounded-md underline pt-3 text-blue-900",onClick:()=>{x({organizationName:e,uploadKnowledge:s,embeddedKnowlege:t,apiKey:a,createdAt:c}),h(!0)},children:r.jsx(l.xt8,{})}),u&&(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",onClick:()=>h(!1),children:[r.jsx("div",{className:"absolute inset-0 bg-gray-500 opacity-50 backdrop-blur-md"}),(0,r.jsxs)("div",{className:"relative p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-md max-w-screen-lg mx-auto",onClick:e=>e.stopPropagation(),children:[r.jsx("button",{onClick:()=>h(!1),className:"absolute top-4 right-4  text-gray-500 rounded-full p-2 hover:bg-gray-600 focus:outline-none",children:r.jsx(o.FMH,{})}),r.jsx("h2",{className:"text-2xl mb-4",children:"Details"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Organization Name:"})," ",p.organizationName]}),(0,r.jsxs)("p",{className:"flex",children:[r.jsx("strong",{children:"Upload Knowledge:"})," ",r.jsx("div",{className:"text-sky-500 underline",children:p.uploadKnowledge})]}),(0,r.jsxs)("p",{className:"flex",children:[r.jsx("strong",{children:"Embedded Knowledge:"})," ",r.jsx("div",{className:"text-sky-500 underline",children:p.embeddedKnowlege})]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"API Key:"})," ",p.apiKey]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Created At:"})," ",new Date(p.createdAt).toLocaleString()]})]})]})]})]})})})})};var c=t(3511),p=t(505),x=t(2479),u=t(1440),h=t.n(u);let page=()=>{let[e,s]=(0,i.useState)(void 0),t=x.Z.get("UserId");(0,i.useEffect)(()=>{d.Am.error("Please Login !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},[t]);let[n,o]=(0,i.useState)({response:{data:[]}}),[l,u]=(0,i.useState)({response:{data:[]}}),value=async()=>{if(e){let e=await (0,c.$9)();o(e)}};(0,i.useEffect)(()=>{value()},[e]);let valueAi=async()=>{if(e){let e=await (0,c.XU)();u(e)}};return(0,i.useEffect)(()=>{valueAi()},[e]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.Z,{}),e?(0,r.jsxs)("div",{className:"grid md:grid-cols-7 grid-cols-1 sm:pt-20 pt-52 h-screen shadow-2xl",children:[(0,r.jsxs)("div",{className:"md:col-span-3 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[r.jsx("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Organizations"}),r.jsx("div",{className:" grid grid-cols-2",children:n&&n.response&&n.response.data&&n.response.data.map((e,s)=>r.jsx(OrgTemp,{OrganizationName:e.OrganizationName,OrganizationPhone:e.OrganizationPhone,OrganizationWebsite:e.OrganizationWebsite,createdAt:e.createdAt},s))})]}),(0,r.jsxs)("div",{className:"md:col-span-4 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[r.jsx("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Ai Trained Models"}),(0,r.jsxs)("div",{className:"flex p-3",children:[r.jsx("div",{className:"text-start py-2 font-bold font-sans",children:"Name"}),r.jsx("div",{className:"flex-grow text-center py-2 font-bold font-sans",children:"API Key"})]}),r.jsx("div",{className:"p-4 overflow-y-auto",children:l&&l.response&&l.response.data&&l.response.data.map((e,s)=>r.jsx(h(),{href:`/trychatbot/${e.apiKey}`,children:r.jsx(dashboard_AiModel,{organizationName:e.organizationName,uploadKnowledge:e.uploadKnowledge,embeddedKnowlege:e.embeddedKnowlege,apiKey:e.apiKey,createdAt:e.createdAt})},s))})]})]}):r.jsx(p.Z,{})]})}},1003:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var r=t(7536);let a=(0,r.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\CHTBTY\chatbot-frnt\src\app\dashboard\page.tsx`),{__esModule:i,$$typeof:n}=a,o=a.default,l=o}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[273,575,610,258,695,772,225,185,511,505],()=>__webpack_exec__(9455));module.exports=t})();