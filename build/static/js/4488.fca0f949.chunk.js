"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4488],{93671:(e,t,s)=>{s.d(t,{Cx:()=>r,TA:()=>i,Xo:()=>n,aw:()=>c,dZ:()=>o});var l=s(86213);const a=`${s(81895).i$}/api/products`,r=async e=>{let{page:t,size:s,keyword:r="",type:i="t",category:n=""}=e;try{return(await l.A.get(`${a}/list`,{params:{page:t,size:9,keyword:r,type:i,category:n}})).data}catch(c){throw c}},i=async e=>{let{page:t,size:s,category:r}=e;try{return(await l.A.get(`${a}/listByCategory`,{params:{page:t,size:s,category:r}})).data}catch(i){throw console.error("Error fetching products by category:",i),i}},n=async()=>{try{return(await l.A.get(`${a}/categories`)).data}catch(e){throw console.error("Error fetching tour categories:",e.message),e}},c=async e=>(await l.A.get(`${a}/${e}`)).data,o=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;try{return(await l.A.get(`${a}/top-selling`,{params:{limit:e}})).data}catch(t){throw console.error("Error fetching top-selling products:",t.message),t}}},94967:(e,t,s)=>{s.d(t,{A:()=>o});s(65043);var l=s(81210),a=s(39760),r=s(11951),i=s(46237),n=s(10716),c=s(70579);const o=()=>{const e=[{icon:(0,c.jsx)(l.A,{className:"text-2xl text-blue-500"}),title:"30-Day Refund Policy",description:"Enjoy a hassle-free refund if you're unsatisfied within 30 days of purchase."},{icon:(0,c.jsx)(a.A,{className:"text-2xl text-blue-500"}),title:"100% Satisfaction Guarantee",description:"We stand behind our product quality. If you're not satisfied, we'll make it right."},{icon:(0,c.jsx)(r.A,{className:"text-2xl text-blue-500"}),title:"Secure Payment",description:"Your transactions are encrypted and safe with us."},{icon:(0,c.jsx)(i.A,{className:"text-2xl text-blue-500"}),title:"Quality Assurance",description:"Every product is inspected to meet the highest standards."},{icon:(0,c.jsx)(n.A,{className:"text-2xl text-blue-500"}),title:"Dedicated Support Team",description:"Reach out to our customer service team for any questions or concerns."}];return(0,c.jsx)("div",{className:"space-y-4",children:e.map(((e,t)=>(0,c.jsxs)("div",{className:"flex items-start space-x-4",children:[e.icon,(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:"text-lg font-semibold text-gray-800",children:e.title}),(0,c.jsx)("p",{className:"text-gray-600",children:e.description})]})]},t)))})}},15451:(e,t,s)=>{s.d(t,{A:()=>c});var l=s(65043),a=s(31882),r=s(59654),i=s(54462),n=s(70579);const c=e=>{let{selectedReview:t,closeEditModal:s,deleteOne:c,putOne:o}=e;console.log("selectedReview.trid",t.trid);const{loginState:d}=(0,i.A)(),[x,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)({prid:t.prid,trid:t.trid,title:t.title,reviewContent:t.reviewContent,rating:t.rating});if(!t)return null;const u=e=>{const{name:t,value:s}=e.target;g((e=>({...e,[t]:s})))};return(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,n.jsxs)("div",{className:"relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[t.email===d.email&&(0,n.jsx)("div",{className:"absolute top-5 right-5 px-3 py-1 text-sm font-semibold text-white bg-teal-500 rounded-lg shadow-md",children:"My Review"}),x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center mb-4",children:[(0,n.jsx)("div",{className:"bg-stone-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg",children:t.nickName[0]}),(0,n.jsxs)("div",{className:"ml-4",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold text-gray-800",children:t.nickName}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:t.itemName})]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center mb-4",children:[(0,n.jsx)("p",{className:"text-gray-600 font-medium",children:"Update your rating:"}),(0,n.jsx)("div",{className:"flex items-center",children:[1,2,3,4,5].map((e=>(0,n.jsx)("span",{onClick:()=>{return t=e,void g((e=>({...e,rating:t})));var t},className:"cursor-pointer",children:h.rating>=e?(0,n.jsx)(a.A,{className:"text-yellow-400 text-2xl"}):(0,n.jsx)(r.A,{className:"text-gray-300 text-2xl"})},e)))})]}),(0,n.jsx)("div",{className:"flex flex-row justify-between mb-4",children:(0,n.jsx)("input",{type:"text",name:"title",value:h.title,onChange:u,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter title"})}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("textarea",{name:"reviewContent",value:h.reviewContent,onChange:u,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter review content"})}),(0,n.jsxs)("div",{className:"flex justify-end mt-6",children:[(0,n.jsx)("button",{className:"px-4 py-2 bg-yellow-400 text-white rounded-lg mr-2 hover:bg-yellow-500",onClick:()=>{console.log("editData.trid",h.trid),console.log(h.reviewContent),o(h).then((()=>{s()}))},children:"Save"}),(0,n.jsx)("button",{className:"px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400",onClick:()=>m(!1),children:"Cancel"})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:" flex items-center mb-4",children:[(0,n.jsx)("div",{className:"bg-stone-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg",children:t.nickName[0]}),(0,n.jsxs)("div",{className:"ml-4",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold text-gray-800",children:t.nickName}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:t.dueDate}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:t.itemName})]})]}),(0,n.jsx)("div",{className:"flex items-center mb-4",children:[1,2,3,4,5].map((e=>(0,n.jsx)("span",{children:t.rating>=e?(0,n.jsx)(a.A,{className:"text-yellow-400 text-2xl"}):(0,n.jsx)(r.A,{className:"text-gray-300 text-2xl"})},e)))}),(0,n.jsx)("h4",{className:"text-xl font-semibold text-gray-800 mb-2",children:t.title}),(0,n.jsx)("p",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-800 leading-relaxed",children:t.reviewContent}),(0,n.jsxs)("div",{className:"flex justify-end mt-6",children:[t.email===d.email&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"px-4 py-2 bg-yellow-400 text-white rounded-lg mr-2 hover:bg-yellow-500",onClick:()=>{m(!0)},children:"Modify"}),(0,n.jsx)("button",{className:"px-4 py-2 bg-stone-400 text-white rounded-lg mr-2 hover:bg-stone-500",onClick:()=>{return e=t.prid||t.trid,console.log("rid",e),void c(e).then((()=>{s()}));var e},children:"Delete"})]}),(0,n.jsx)("button",{className:"px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400",onClick:s,children:"Close"})]})]})]})})}},86844:(e,t,s)=>{s.d(t,{A:()=>m});var l=s(65043),a=s(9463),r=s(38326),i=s(31882),n=s(59654),c=s(73216),o=s(15451),d=s(54462),x=s(70579);const m=e=>{let{refresh:t,setRefresh:s,reviews:m,putOne:h,deleteOne:g}=e;const[u,p]=(0,l.useState)(0),y=(0,c.Zp)(),[f,j]=(0,l.useState)(window.innerWidth),[w,b]=(0,l.useState)(null),[N,v]=(0,l.useState)(!1),{isLogin:A,loginState:C}=(0,d.A)();console.log(m),l.useEffect((()=>{const e=()=>j(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const k=f>=1024?2:1;return(0,x.jsxs)("div",{className:"mt-10 bg-gray-50 p-6 border border-gray-200 rounded-lg shadow-lg",children:[(0,x.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,x.jsx)("h2",{className:"text-xl font-bold text-gray-800",children:"What Customers Say About This Item"}),A?(0,x.jsx)("button",{className:"px-4 py-2 text-gray-500 underline hover:text-gray-600",onClick:()=>{y("/mypage/review")},children:"Go to Your Review List"}):""]}),(0,x.jsxs)("div",{className:"relative flex items-center",children:[(0,x.jsx)("button",{className:"absolute left-[-20px] z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100",onClick:()=>{p((e=>e-k>=0?e-k:m.length-k))},children:(0,x.jsx)(a.A,{className:"h-5 w-5 text-gray-700"})}),(0,x.jsx)("div",{className:"flex space-x-4 overflow-hidden w-full",children:m&&m.slice(u,u+k).map((e=>(0,x.jsxs)("div",{className:"relative bg-white rounded-lg shadow-md p-4 w-full lg:w-1/2 border border-gray-200",onClick:()=>(e=>{b(e),v(!0)})(e),children:[(0,x.jsxs)("div",{className:"flex items-center mb-2",children:[(0,x.jsx)("div",{className:"bg-stone-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold",children:e.nickName[0]}),(0,x.jsxs)("div",{className:"ml-3",children:[(0,x.jsx)("h3",{className:"text-sm font-semibold text-gray-800",children:e.nickName}),(0,x.jsx)("p",{className:"text-xs text-gray-500",children:e.dueDate})]})]}),A&&e.email===C.email&&(0,x.jsx)("div",{className:"absolute top-5 right-5 px-3 py-1 text-sm font-semibold text-white bg-teal-500 rounded-lg shadow-md",children:"My Review"}),(0,x.jsx)("div",{className:"flex items-center",children:[1,2,3,4,5].map((t=>(0,x.jsx)("span",{children:e.rating>=t?(0,x.jsx)(i.A,{className:"text-yellow-400 text-xl"}):(0,x.jsx)(n.A,{className:"text-gray-300 text-xl"})},t)))}),(0,x.jsx)("h3",{className:"text-gray-800 leading-relaxed mb-2 font-semibold",children:e.title}),(0,x.jsx)("p",{className:"text-sm text-gray-700",children:e.reviewContent})]},e.prid||e.trid)))}),(0,x.jsx)("button",{className:"absolute right-[-20px] z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100",onClick:()=>{p((e=>e+k<m.length?e+k:0))},children:(0,x.jsx)(r.A,{className:"h-5 w-5 text-gray-700"})})]}),N&&(0,x.jsx)(o.A,{selectedReview:w,closeEditModal:()=>{b(null),v(!1),s(!t)},putOne:h,deleteOne:g})]})}},84488:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var l=s(65043),a=s(73216),r=s(81895),i=s(86844),n=s(51419),c=s(31882),o=s(59654),d=s(54462),x=s(93671),m=s(94967),h=s(37490),g=s(70579);const u={pno:0,pname:"",pdesc:"",pprice:0,pqty:0,shippingFee:0,uploadFileNames:[]},p=r.i$,y=e=>{let{pno:t}=e;const[s,y]=(0,l.useState)(u),[f,j]=(0,l.useState)(!1),[w,b]=(0,l.useState)(0),{loginState:N}=(0,d.A)(),[v,A]=(0,l.useState)(0),[C,k]=(0,l.useState)(0),[S,$]=(0,l.useState)([]),[F,E]=(0,l.useState)(!1),[R,z]=(0,l.useState)(!1),q=(0,a.Zp)();return(0,l.useEffect)((()=>{window.scrollTo(0,0),j(!0),(0,x.aw)(t).then((e=>{y(e),j(!1)})),console.log(N.email),(0,r.Ph)(t).then((e=>{console.log(e),$(e),k((e=>{if(0===e.length)return 0;const t=e.reduce(((e,t)=>e+t.rating),0)/e.length;return Number(t.toFixed(1))})(e))}))}),[t,F]),(0,g.jsxs)("div",{className:"min-h-screen py-12 px-6 lg:px-32 relative",children:[(0,g.jsxs)("div",{className:"flex flex-col lg:flex-row lg:space-x-12",children:[(0,g.jsxs)("div",{className:"w-full lg:w-[450px] flex flex-col items-center space-y-6",children:[(0,g.jsx)("div",{className:"w-full h-64 md:h-[450px] lg:h-[650px]",children:(0,g.jsx)("img",{src:`${p}/api/products/view/${s.uploadFileNames[w]}`,alt:s.pname,className:"w-full h-full object-cover"})}),(0,g.jsx)("div",{className:"flex space-x-3 overflow-x-auto w-full",children:s.uploadFileNames.map(((e,t)=>(0,g.jsx)("button",{onClick:()=>b(t),className:"w-20 h-20 overflow-hidden "+(w===t?"ring-2 ring-blue-500":""),children:(0,g.jsx)("img",{src:`${p}/api/products/view/${e}`,alt:`${s.pname} thumbnail`,className:"w-full h-full object-cover"})},t)))})]}),(0,g.jsxs)("div",{className:"lg:w-1/2 space-y-6",children:[(0,g.jsx)("h1",{className:"text-4xl font-light text-gray-900",children:s.pname}),(0,g.jsxs)("div",{className:"flex items-center space-x-2",children:[[...Array(5)].map(((e,t)=>(0,g.jsx)("span",{children:C>=t+1?(0,g.jsx)(c.A,{className:"text-yellow-400 text-xl"}):(0,g.jsx)(o.A,{className:"text-gray-300 text-xl"})},t))),(0,g.jsxs)("span",{className:"text-gray-600",children:["(",C,") ",S.length," reviews"]})]}),(0,g.jsxs)("p",{className:"text-2xl text-gray-900",children:["\u20a9",s.pprice.toLocaleString()]}),(0,g.jsx)(h.A,{count:s.shippingFee?`Shipping Fee \u20a9${s.shippingFee}`:"Free Shipping",style:{backgroundColor:s.shippingFee?"#718C5A":"#0097A7",color:"#fff",padding:"0 10px",borderRadius:"5px"}}),(0,g.jsx)("p",{className:"text-gray-700 mb-6",children:s.pdesc}),(0,g.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,g.jsx)("label",{htmlFor:"quantity",className:"text-gray-700",children:"Quantity"}),(0,g.jsx)("input",{type:"number",id:"quantity",min:"0",max:s.pqty,value:v,onChange:e=>A(Number(e.target.value)),className:"border rounded-lg p-2 w-20"}),s.pqty?"":(0,g.jsx)("p",{className:"text-red-600 font-semibold",children:"out of stock"})]}),(0,g.jsx)("div",{className:"flex space-x-4",children:(0,g.jsxs)("button",{onClick:()=>{window.confirm("Please log in first to purchase the product.")&&q("/member/login")},className:"flex-1 bg-stone-400 hover:bg-stone-600 text-white py-3 rounded-lg flex items-center justify-center",children:[(0,g.jsx)(n.A,{className:"mr-2"}),"Add to Cart"]})}),(0,g.jsxs)("div",{className:"mt-10 bg-gray-100 p-6 rounded-lg",children:[(0,g.jsxs)("div",{className:"flex justify-between items-center",children:[(0,g.jsx)("h2",{className:"text-lg font-semibold text-gray-900",children:"Product Policies"}),(0,g.jsx)("button",{onClick:()=>z(!R),className:"text-gray-500 hover:text-gray-700 text-2xl",children:R?"-":"+"})]}),R&&(0,g.jsx)(m.A,{})]})]})]}),(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsx)(i.A,{refresh:F,setRefresh:E,reviews:S})})]})},f=()=>{const{pno:e}=(0,a.g)();return(0,g.jsx)("div",{className:"p-4 w-full bg-white mt-20",children:(0,g.jsx)(y,{pno:e})})}}}]);
//# sourceMappingURL=4488.fca0f949.chunk.js.map