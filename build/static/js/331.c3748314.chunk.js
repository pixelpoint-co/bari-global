"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[331],{96117:(e,t,a)=>{a.d(t,{HD:()=>d,SJ:()=>p,TZ:()=>o,UU:()=>c,ft:()=>n,hN:()=>u,oK:()=>m,vS:()=>l,yf:()=>i});var s=a(9320);const r=`${a(81895).i$}/api/user/tours`,l=async e=>{let{page:t,size:a=9,keyword:l="",type:o="t",category:n=""}=e;try{console.log("API params:",{page:t,size:a,keyword:l,type:o,category:n});const e=await s.A.get(`${r}/list`,{params:{page:t,size:9,keyword:l,type:o,category:n}});return console.log("API response:",e.data),e.data}catch(i){throw console.error("API Error:",i.message),i}},o=async e=>{try{return(await s.A.get(`${r}/top`,{params:{limit:e}})).data}catch(t){throw console.error("Error fetching top reserved tours:",t),t}},n=async()=>{try{return(await s.A.get(`${r}/categories`)).data}catch(e){throw console.error("Error fetching tour categories:",e.message),e}},i=async e=>(await s.A.post(`${r}/`,e,{headers:{"Content-Type":"multipart/form-data"}})).data,d=async e=>(await s.A.get(`${r}/${e}`)).data,c=async(e,t)=>(await s.A.put(`${r}/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,m=async e=>(await s.A.delete(`${r}/${e}`)).data,p=async e=>{console.log("filteredBookInfo:",e);const t={"Content-Type":"application/json"};try{return(await s.A.post(`${r}/orders`,e,{headers:t})).data}catch(o){var a,l;throw new Error((null===(a=o.response)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.message)||"Failed to Post order info")}},u=async(e,t)=>{console.log(t);const a={"Content-Type":"application/json"};try{return(await s.A.post(`${r}/payment/${t}`,e,{headers:a})).data}catch(n){var l,o;throw new Error((null===(l=n.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.message)||"Failed to Post payment info")}}},5138:(e,t,a)=>{a.d(t,{A:()=>r});a(65043);var s=a(70579);const r=()=>(0,s.jsx)("div",{className:"fixed top-0 left-0 z-[1055] flex h-full w-full place-items-center justify-center bg-black bg-opacity-20",children:(0,s.jsx)("div",{className:"bg-white rounded-3xl opacity-100 min-w-min h-1/4 min-w-[600px] flex justify-center items-center",children:(0,s.jsx)("div",{className:"text-4xl font-extrabold text-orange-400 m-20",children:"Loading....."})})})},54949:(e,t,a)=>{a.d(t,{A:()=>r});a(65043);var s=a(70579);const r=e=>{let{title:t,content:a,callbackFn:r}=e;return(0,s.jsx)("div",{className:"fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20",onClick:()=>{r&&r()},children:(0,s.jsxs)("div",{className:"absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded mt-10 mb-10 px-6 min-w-[600px]",children:[(0,s.jsx)("div",{className:"justify-center bg-warning-400 mt-6 mb-6 text-2xl border-b-4 border-gray-500",children:t}),(0,s.jsx)("div",{className:"text-4xl border-orange-400 border-b-4 pt-4 pb-4",children:a}),(0,s.jsx)("div",{className:"justify-end flex",children:(0,s.jsx)("button",{className:"rounded bg-blue-500 mt-4 mb-4 px-6 pt-4 pb-4 text-lg text-white",onClick:()=>{r&&r()},children:"Close Modal"})})]})})}},55670:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(65043),r=a(73216),l=a(35475);const o=(e,t)=>e?parseInt(e):t,n=()=>{const e=(0,r.Zp)(),[t,a]=(0,s.useState)(!1),[n]=(0,l.ok)(),i=o(n.get("page"),1),d=o(n.get("size"),10),c=(0,l.PI)({page:i,size:d}).toString();return{moveToList:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("pageParam:",s),console.log(s?"pageParam = \ucc38":"pageParam = \uac70\uc9d3");let r="";if(s){const e=o(s.page,1),t=o(s.size,10);r=(0,l.PI)({page:e,size:t}).toString()}else r=c;console.log("queryStr:",r),e({pathname:"../list",search:r}),a(!t)},moveToModify:t=>{console.log(c),e({pathname:`../modify/${t}`,search:c})},page:i,size:d,moveToProductRead:t=>{console.log(c),e({pathname:`/user/products/read/${t}`,search:c})},moveToTourRead:t=>{console.log(c),e({pathname:`/user/tours/read/${t}`,search:c})},moveToProductReadNU:t=>{console.log(c),e({pathname:`/products/read/${t}`,search:c})},moveToTourReadNU:t=>{console.log(c),e({pathname:`/tours/read/${t}`,search:c})},refresh:t,navigate:e,moveToReadProductFromMain:t=>{console.log(c),e({pathname:`/products/read/${t}`,search:c})},moveToReadTourFromMain:t=>{console.log(c),e({pathname:`/tours/read/${t}`,search:c})}}}},10331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(65043),r=a(5138),l=a(81895),o=a(54949),n=a(55670),i=a(96117),d=a(70579);const c=l.i$,m={tno:0,tname:"",tdesc:"",tprice:0,uploadFileNames:[]},p=e=>{let{tno:t}=e;const[a,l]=(0,s.useState)(m),[p,u]=(0,s.useState)(!1),[x,h]=(0,s.useState)(null),{moveToList:f,moveToTourRead:g,page:b,size:w}=(0,n.A)(),v=(0,s.useRef)();(0,s.useEffect)((()=>{u(!0),(0,i.HD)(t).then((e=>{l(e),u(!1)}))}),[t]);const j=e=>{a[e.target.name]=e.target.value,l({...a})};return(0,d.jsxs)("div",{children:[p?(0,d.jsx)(r.A,{}):(0,d.jsx)(d.Fragment,{}),x?(0,d.jsx)(o.A,{title:`${x}`,content:"\uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4",callbackFn:()=>{"Modified"===x?g(t):"Deleted"===x&&f({page:b,size:w}),h(null)}}):(0,d.jsx)(d.Fragment,{}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Tour Name"}),(0,d.jsx)("input",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",name:"tname",type:"text",value:a.tname,onChange:j})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"DESC"}),(0,d.jsx)("textarea",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y",name:"tdesc",rows:"10",onChange:j,value:a.tdesc})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Price"}),(0,d.jsx)("input",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",name:"price",type:"number",value:a.tprice,onChange:j})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Delete"}),(0,d.jsxs)("select",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",name:"delFlag",value:a.delFlag,onChange:j,children:[(0,d.jsx)("option",{value:!1,children:"\uc0ac\uc6a9"}),(0,d.jsx)("option",{value:!0,children:"\uc0ad\uc81c"})]})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Files"}),(0,d.jsx)("input",{className:"w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md",ref:v,multiple:!0,type:"file"})]})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsxs)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:[(0,d.jsx)("div",{className:"w-1/5 p-6 text-right font-bold",children:"Images"}),(0,d.jsx)("div",{className:"w-4/5 justify-center flex flex-wrap items-start",children:a.uploadFileNames.map(((e,t)=>(0,d.jsxs)("div",{className:"flex justify-center flex-col w-1/3 m-1 align-baseline",children:[(0,d.jsx)("button",{className:"bg-blue-500 text-3xl text-white",onClick:()=>(e=>{const t=a.uploadFileNames.filter((t=>t!==e));a.uploadFileNames=t,l({...a})})(e),children:"Delete"}),(0,d.jsx)("img",{src:`${c}/api/tours/view/s_${e}`,alt:"img"})]},t)))})]})}),(0,d.jsxs)("div",{className:"flex justify-end p-4",children:[(0,d.jsx)("button",{type:"button",className:"inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500",onClick:()=>{u(!0),(0,i.oK)(t).then((e=>{h("Deleted"),u(!1)}))},children:"Delete"}),(0,d.jsx)("button",{type:"butotn",className:"inline-block rounded p-4 m-2 text-xl w-32 text-white bg-orange-500",onClick:()=>{const e=v.current.files,s=new FormData;for(let t=0;t<e.length;t++)s.append("files",e[t]);s.append("tname",a.tname),s.append("tdesc",a.tdesc),s.append("price",a.price),s.append("delFlag",a.delFlag);for(let t=0;t<a.uploadFileNames.length;t++)s.append("uploadFileNames",a.uploadFileNames[t]);u(!0),(0,i.UU)(t,s)},children:"Modify"}),(0,d.jsx)("button",{type:"button",className:"rounded p-4 m-2 text-xl w-32 text-white bg-blue-500",onClick:()=>f({page:b,size:w}),children:"List"})]})]})};var u=a(73216);const x=()=>{const{tno:e}=(0,u.g)();return(0,d.jsxs)("div",{className:"p-4 w-full bg-white",children:[(0,d.jsx)("div",{className:"text-3xl font-extrabold",children:"TourModifyPage"}),(0,d.jsx)(p,{tno:e})]})}}}]);
//# sourceMappingURL=331.c3748314.chunk.js.map