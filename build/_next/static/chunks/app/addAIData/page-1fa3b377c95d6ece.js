(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{1785:function(e,t,r){Promise.resolve().then(r.bind(r,3586))},7832:function(e,t,r){"use strict";r.d(t,{Z:function(){return Components_Navbar}});var a=r(7437),i=r(1396),o=r.n(i);r(2265);var s=r(4606),Components_Logout=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{children:(0,a.jsx)("div",{onClick:()=>{localStorage.removeItem("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Log Out"})})}),Components_Navbar=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,a.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,a.jsx)(o(),{href:"/dashboard",className:"flex items-center",children:(0,a.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap dark:text-white",children:"Chit-Chat"})}),(0,a.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,a.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Organizations"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Train Data"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/docs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Docs"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(s.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,a.jsx)(Components_Logout,{})]})})]})})})})},4608:function(e,t,r){"use strict";var a=r(7437);r(2265);var i=r(1396),o=r.n(i);t.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"bg-white bg-opacity-10 rounded-xl p-8 w-96 shadow-lg backdrop-blur-md",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Login Is Require !"}),(0,a.jsx)(o(),{href:"/login",className:"px-4 py-2 rounded bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none",children:"Sign Up"})]})})})},3586:function(e,t,r){"use strict";r.r(t);var a=r(7437),i=r(2265),o=r(7832),s=r(9947),n=r(9222),l=r(171),d=r(4033),c=r(9150),h=r(4608);t.default=()=>{let e=(0,d.useRouter)(),t=null;t=localStorage.getItem("UserId");let[r,g]=(0,i.useState)(!1),[p,u]=(0,i.useState)(""),[m,x]=(0,i.useState)([]),[b,v]=(0,i.useState)(null),[f,y]=(0,i.useState)(""),[k,w]=(0,i.useState)(""),[j,N]=(0,i.useState)({organization:{userId:"",organizationName:""},url:"",openAIApi:""});(0,i.useEffect)(()=>{!async function(){let e=await (0,s.$u)();e&&e.response&&e.response.data&&x(e.response.data)}()},[]);let isValidOpenAIApi=e=>e.startsWith("sk-")&&e.length>50;(0,i.useEffect)(()=>{N({organization:{organizationName:p,userId:t},url:f,openAIApi:k})},[p,f,t,k]);let fetchFile=async()=>{if(!b){l.Am.error("No file selected",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}let e=new FormData;e.append("file",b);try{let t=await n.Z.post("https://chit-chat.tech/api/v1/upload",e);return(0,l.Am)("Successfully, Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),y(t.data.data.url),!0}catch(e){return l.Am.error("oops someting went wrong !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),!1}},SubmitAiModel=async()=>{await n.Z.post("https://chit-chat.tech/api/v1/addAiTrainingModel",j)};console.log(j);let handleFileSubmit=async e=>{e.preventDefault();let t=await fetchFile();t?(0,l.Am)("File Submmited !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):l.Am.error("File not Submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},handleSubmit=async t=>{t.preventDefault(),g(!0),await SubmitAiModel().then(t=>{(0,l.Am)("Ai Model Created !",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.log(t),e.push("/dashboard")}).catch(e=>{l.Am.error("Failed Training",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.log(e)}),g(!1)},O=!!b&&!!p;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",children:[(0,a.jsx)(o.Z,{}),t?r?(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20",children:(0,a.jsx)(c.Z7b,{className:"animate-spin text-6xl"})}):(0,a.jsx)("div",{className:"sm:pt-32 pt-52 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50",children:(0,a.jsxs)("div",{className:"p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10",children:[(0,a.jsx)("h2",{className:"text-xl mb-4 font-bold",children:"Train Data"}),(0,a.jsxs)("form",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Upload File:"}),(0,a.jsx)("input",{onChange:e=>{var t,r;let a=null===(t=e.target.files)||void 0===t?void 0:t.item(0);if(a&&"text/plain"===a.type){let t=null===(r=e.target.files)||void 0===r?void 0:r.item(0);t&&v(t)}else l.Am.error("Only txt files are allowed!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},type:"file",className:"mb-4 p-2 file:bg-pink-300 file:rounded-xl file:active:bg-pink-400 file:shadow-lg file:border-pink-600"}),(0,a.jsx)("button",{onClick:handleFileSubmit,className:"bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600",children:"Add File"}),(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"Select Organization:"}),(0,a.jsxs)("select",{value:p,onChange:e=>u(e.target.value),className:"mb-4 border p-2 rounded w-full bg-pink-200",children:[(0,a.jsx)("option",{disabled:!0,value:"",children:"-- Select Organization --"}),m&&m.map((e,t)=>(0,a.jsx)("option",{value:e.OrganizationName,children:e.OrganizationName},t))]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium mb-2",children:"OpenAi ApiKey"}),(0,a.jsx)("input",{type:"text",name:"openAIApi",required:!0,onChange:e=>{let t=e.target.value;if(!isValidOpenAIApi(t)){l.Am.error("Invalid OpenAI API Key",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}w(t)},className:"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"})]}),(0,a.jsx)("button",{type:"submit",onClick:handleSubmit,className:"bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ".concat(!O&&"opacity-50 cursor-not-allowed"),disabled:!O,children:"Submit"})]})]})}):(0,a.jsx)(h.Z,{})]})})}},9947:function(e,t,r){"use strict";r.d(t,{$9:function(){return getOrganizationById},$u:function(){return fetchs},Fi:function(){return addOrganization},Mo:function(){return SignUp},XU:function(){return getAiModelById},gx:function(){return Auth}});var a=r(9222);let fetchs=async()=>{let e=await a.Z.get("https://chit-chat.tech/api/v1/getAllOrganization");return e.data},getOrganizationById=async e=>{let t=await a.Z.get("https://chit-chat.tech/api/v1/getOrganizationById?UserId=".concat(e));return t.data},getAiModelById=async e=>{let t=await a.Z.get("https://chit-chat.tech/api/v1/getAiModelById?UserId=".concat(e));return t.data},addOrganization=async e=>{let t=await a.Z.post("https://chit-chat.tech/api/v1/newOrganization",e);return t},Auth=async e=>{let t=await a.Z.post("https://chit-chat.tech/register/login",e);return t},SignUp=async e=>{let t=await a.Z.post("https://chit-chat.tech/register/signup",e);return t}},4033:function(e,t,r){e.exports=r(290)}},function(e){e.O(0,[447,712,438,656,971,864,744],function(){return e(e.s=1785)}),_N_E=e.O()}]);