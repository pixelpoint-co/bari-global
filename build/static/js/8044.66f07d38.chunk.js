"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8044],{59367:(e,t,a)=>{a.d(t,{HD:()=>i,UU:()=>p,ab:()=>d,hN:()=>g,hk:()=>h,k0:()=>x,oK:()=>m,ql:()=>c,vS:()=>n,vT:()=>u,yf:()=>l});var r=a(81895),s=a(9320);const o=`${r.i$}/api/user/products`,l=async e=>(await s.A.post(`${o}/`,e,{headers:{"Content-Type":"multipart/form-data"}})).data,n=async e=>{let{page:t,size:a,keyword:r="",type:l="t",category:n=""}=e;try{return(await s.A.get(`${o}/list`,{params:{page:t,size:9,keyword:r,type:l,category:n}})).data}catch(d){throw d}},d=async e=>{let{page:t,size:a,category:r}=e;try{return(await s.A.get(`${o}/listByCategory`,{params:{page:t,size:a,category:r}})).data}catch(l){throw console.error("Error fetching products by category:",l),l}},c=async()=>{try{return(await s.A.get(`${o}/categories`)).data}catch(e){throw console.error("Error fetching tour categories:",e.message),e}},i=async e=>(await s.A.get(`${o}/${e}`)).data,p=async(e,t)=>(await s.A.put(`${o}/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,m=async e=>(await s.A.delete(`${o}/${e}`)).data,u=async()=>(await s.A.get(`${o}/orderinfo`)).data,h=async e=>{console.log("\ubcf4\ub0b4\ub294 \uc815\ubcf4 orderInfo",e);const t={"Content-Type":"application/json"};try{const a=await s.A.post(`${o}/orders`,e,{headers:t});return console.log(a),a.data}catch(l){var a,r;throw new Error((null===(a=l.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)||"Failed to Post order info")}},g=async(e,t)=>{console.log("payment:",e);const a={"Content-Type":"application/json"};try{return(await s.A.post(`${o}/payment/${t}`,e,{headers:a})).data}catch(n){var r,l;throw new Error((null===(r=n.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message)||"Failed to Post payment info")}},x=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;try{return(await s.A.get(`${o}/top-selling`,{params:{limit:e}})).data}catch(t){throw console.error("Error fetching top-selling products:",t.message),t}}},5138:(e,t,a)=>{a.d(t,{A:()=>s});a(65043);var r=a(70579);const s=()=>(0,r.jsx)("div",{className:"fixed top-0 left-0 z-[1055] flex h-full w-full place-items-center justify-center bg-black bg-opacity-20",children:(0,r.jsx)("div",{className:"bg-white rounded-3xl opacity-100 min-w-min h-1/4 min-w-[600px] flex justify-center items-center",children:(0,r.jsx)("div",{className:"text-4xl font-extrabold text-orange-400 m-20",children:"Loading....."})})})},54949:(e,t,a)=>{a.d(t,{A:()=>s});a(65043);var r=a(70579);const s=e=>{let{title:t,content:a,callbackFn:s}=e;return(0,r.jsx)("div",{className:"fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20",onClick:()=>{s&&s()},children:(0,r.jsxs)("div",{className:"absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded mt-10 mb-10 px-6 min-w-[600px]",children:[(0,r.jsx)("div",{className:"justify-center bg-warning-400 mt-6 mb-6 text-2xl border-b-4 border-gray-500",children:t}),(0,r.jsx)("div",{className:"text-4xl border-orange-400 border-b-4 pt-4 pb-4",children:a}),(0,r.jsx)("div",{className:"justify-end flex",children:(0,r.jsx)("button",{className:"rounded bg-blue-500 mt-4 mb-4 px-6 pt-4 pb-4 text-lg text-white",onClick:()=>{s&&s()},children:"Close Modal"})})]})})}},55670:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(65043),s=a(73216),o=a(35475);const l=(e,t)=>e?parseInt(e):t,n=()=>{const e=(0,s.Zp)(),[t,a]=(0,r.useState)(!1),[n]=(0,o.ok)(),d=l(n.get("page"),1),c=l(n.get("size"),10),i=(0,o.PI)({page:d,size:c}).toString();return{moveToList:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("pageParam:",r),console.log(r?"pageParam = \ucc38":"pageParam = \uac70\uc9d3");let s="";if(r){const e=l(r.page,1),t=l(r.size,10);s=(0,o.PI)({page:e,size:t}).toString()}else s=i;console.log("queryStr:",s),e({pathname:"../list",search:s}),a(!t)},moveToModify:t=>{console.log(i),e({pathname:`../modify/${t}`,search:i})},page:d,size:c,moveToProductRead:t=>{console.log(i),e({pathname:`/user/products/read/${t}`,search:i})},moveToTourRead:t=>{console.log(i),e({pathname:`/user/tours/read/${t}`,search:i})},moveToProductReadNU:t=>{console.log(i),e({pathname:`/products/read/${t}`,search:i})},moveToTourReadNU:t=>{console.log(i),e({pathname:`/tours/read/${t}`,search:i})},refresh:t,navigate:e,moveToReadProductFromMain:t=>{console.log(i),e({pathname:`/products/read/${t}`,search:i})},moveToReadTourFromMain:t=>{console.log(i),e({pathname:`/tours/read/${t}`,search:i})}}}},78044:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(65043),s=a(59367),o=a(5138),l=a(54949),n=a(55670),d=a(70579);const c={pname:"",pdesc:"",pprice:0,files:[]},i=()=>{const[e,t]=(0,r.useState)({...c}),a=(0,r.useRef)(),[i,p]=(0,r.useState)(!1),[m,u]=(0,r.useState)(null),{moveToList:h}=(0,n.A)(),g=a=>{e[a.target.name]=a.target.value,t({...e})};return(0,d.jsxs)("div",{className:"border-2 border-sky-200 mt-10 m-2 p-4",children:[i?(0,d.jsx)(o.A,{}):(0,d.jsx)(d.Fragment,{}),m?(0,d.jsx)(l.A,{title:"Product Add Result",content:`${m}\ubc88 \ub4f1\ub85d \uc644\ub8cc`,callbackFn:()=>{u(null),h({page:1})}}):(0,d.jsx)(d.Fragment,{}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Product Name"}),(0,d.jsx)("input",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",name:"pname",type:"text",value:e.pname,onChange:g})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Desc"}),(0,d.jsx)("textarea",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y",name:"pdesc",rows:"4",onChange:g,value:e.pdesc,children:e.pdesc})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Price"}),(0,d.jsx)("input",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",name:"price",type:"number",value:e.pprice,onChange:g})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Files"}),(0,d.jsx)("input",{ref:a,className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",type:"file",multiple:!0})]})}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:(0,d.jsx)("button",{type:"button",className:"rounded p-4 w-36 bg-blue-500 text-xl text-white",onClick:t=>{const r=a.current.files,o=new FormData;for(let e=0;e<r.length;e++)o.append("files",r[e]);o.append("pname",e.pname),o.append("pdesc",e.pdesc),o.append("price",e.pprice),console.log(o),p(!0),(0,s.yf)(o).then((e=>{p(!1),u(e.result)}))},children:"ADD"})})})]})},p=()=>(0,d.jsxs)("div",{className:"p-4 w-full bg-white",children:[(0,d.jsx)("div",{className:"text-3xl font-extrabold",children:"Products Add page"}),(0,d.jsx)(i,{})]})}}]);
//# sourceMappingURL=8044.66f07d38.chunk.js.map