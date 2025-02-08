"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4996],{12220:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(65043),o=n(58387),i=n(98610),s=n(34535),a=n(6431),l=n(4162),c=n(56258),d=n(92532),u=n(72372);function p(e){return(0,u.Ay)("MuiBackdrop",e)}(0,d.A)("MuiBackdrop",["root","invisible"]);var f=n(70579);const m=(0,s.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),h=r.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiBackdrop"}),{children:r,className:s,component:d="div",invisible:u=!1,open:h,components:v={},componentsProps:g={},slotProps:b={},slots:y={},TransitionComponent:A,transitionDuration:x,...E}=n,w={...n,component:d,invisible:u},P=(e=>{const{classes:t,invisible:n}=e,r={root:["root",n&&"invisible"]};return(0,i.A)(r,p,t)})(w),k={slots:{transition:A,root:v.Root,...y},slotProps:{...g,...b}},[R,T]=(0,l.A)("root",{elementType:m,externalForwardedProps:k,className:(0,o.A)(P.root,s),ownerState:w}),[C,M]=(0,l.A)("transition",{elementType:c.A,externalForwardedProps:k,ownerState:w}),S=(e=>{const{ownerState:t,...n}=e;return n})(M);return(0,f.jsx)(C,{in:h,timeout:x,...E,...S,children:(0,f.jsx)(R,{"aria-hidden":!0,...T,classes:P,ref:t,children:r})})}))},5658:(e,t,n)=>{n.d(t,{A:()=>s,K:()=>i});var r=n(92532),o=n(72372);function i(e){return(0,o.Ay)("MuiDivider",e)}const s=(0,r.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},56258:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(65043),o=n(9998),i=n(43198),s=n(26240),a=n(80653),l=n(95849),c=n(70579);const d={entering:{opacity:1},entered:{opacity:1}},u=r.forwardRef((function(e,t){const n=(0,s.A)(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:m,easing:h,in:v,onEnter:g,onEntered:b,onEntering:y,onExit:A,onExited:x,onExiting:E,style:w,timeout:P=u,TransitionComponent:k=o.Ay,...R}=e,T=r.useRef(null),C=(0,l.A)(T,(0,i.A)(m),t),M=e=>t=>{if(e){const n=T.current;void 0===t?e(n):e(n,t)}},S=M(y),I=M(((e,t)=>{(0,a.q)(e);const r=(0,a.c)({style:w,timeout:P,easing:h},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),g&&g(e,t)})),F=M(b),L=M(E),O=M((e=>{const t=(0,a.c)({style:w,timeout:P,easing:h},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),A&&A(e)})),N=M(x);return(0,c.jsx)(k,{appear:f,in:v,nodeRef:T,onEnter:I,onEntered:F,onEntering:S,onExit:O,onExited:N,onExiting:L,addEndListener:e=>{p&&p(T.current,e)},timeout:P,...R,children:(e,t)=>r.cloneElement(m,{style:{opacity:0,visibility:"exited"!==e||v?void 0:"hidden",...d[e],...w,...m.props.style},ref:C,...t})})}))},71424:(e,t,n)=>{n.d(t,{A:()=>s,f:()=>i});var r=n(92532),o=n(72372);function i(e){return(0,o.Ay)("MuiListItemIcon",e)}const s=(0,r.A)("MuiListItemIcon",["root","alignItemsFlexStart"])},32143:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(65043),o=n(58387),i=n(98610),s=n(31546),a=n(61475),l=n(34535),c=n(56262),d=n(6431),u=n(51347),p=n(64551),f=n(55013),m=n(95849),h=n(5658),v=n(71424),g=n(28052),b=n(92532),y=n(72372);function A(e){return(0,y.Ay)("MuiMenuItem",e)}const x=(0,b.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var E=n(70579);const w=(0,l.Ay)(p.A,{shouldForwardProp:e=>(0,a.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((0,c.A)((e=>{let{theme:t}=e;return{...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${x.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${h.A.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${h.A.inset}`]:{marginLeft:52},[`& .${g.A.root}`]:{marginTop:0,marginBottom:0},[`& .${g.A.inset}`]:{paddingLeft:36},[`& .${v.A.root}`]:{minWidth:36},variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return!t.dense},style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:e=>{let{ownerState:t}=e;return t.dense},style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${v.A.root} svg`]:{fontSize:"1.25rem"}}}]}}))),P=r.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:a="li",dense:l=!1,divider:c=!1,disableGutters:p=!1,focusVisibleClassName:h,role:v="menuitem",tabIndex:g,className:b,...y}=n,x=r.useContext(u.A),P=r.useMemo((()=>({dense:l||x.dense||!1,disableGutters:p})),[x.dense,l,p]),k=r.useRef(null);(0,f.A)((()=>{s&&k.current&&k.current.focus()}),[s]);const R={...n,dense:P.dense,divider:c,disableGutters:p},T=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:s,classes:a}=e,l={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",s&&"selected"]},c=(0,i.A)(l,A,a);return{...a,...c}})(n),C=(0,m.A)(k,t);let M;return n.disabled||(M=void 0!==g?g:-1),(0,E.jsx)(u.A.Provider,{value:P,children:(0,E.jsx)(w,{ref:C,role:v,tabIndex:M,component:a,focusVisibleClassName:(0,o.A)(T.focusVisible,h),className:(0,o.A)(T.root,b),...y,ownerState:R,classes:T})})}))},70378:(e,t,n)=>{n.d(t,{A:()=>U});var r=n(65043),o=(n(2086),n(58387)),i=n(98610),s=n(10875),a=n(88092),l=n(22427),c=n(35721);const d=n(68052).A;var u=n(95849),p=n(55013),f=n(36078),m=n(70579);function h(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function v(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function g(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),n=n.trim().toLowerCase(),0!==n.length&&(t.repeating?n[0]===t.keys[0]:n.startsWith(t.keys.join("")))}function b(e,t,n,r,o,i){let s=!1,a=o(e,t,!!t&&n);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const t=!r&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&g(a,i)&&!t)return a.focus(),!0;a=o(e,a,n)}return!1}const y=r.forwardRef((function(e,t){const{actions:n,autoFocus:o=!1,autoFocusItem:i=!1,children:s,className:a,disabledItemsFocusable:y=!1,disableListWrap:A=!1,onKeyDown:x,variant:E="selectedMenu",...w}=e,P=r.useRef(null),k=r.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,p.A)((()=>{o&&P.current.focus()}),[o]),r.useImperativeHandle(n,(()=>({adjustStyleForScrollbar:(e,t)=>{let{direction:n}=t;const r=!P.current.style.width;if(e.clientHeight<P.current.clientHeight&&r){const t=`${d((0,f.A)(e))}px`;P.current.style["rtl"===n?"paddingLeft":"paddingRight"]=t,P.current.style.width=`calc(100% + ${t})`}return P.current}})),[]);const R=(0,u.A)(P,t);let T=-1;r.Children.forEach(s,((e,t)=>{r.isValidElement(e)?(e.props.disabled||("selectedMenu"===E&&e.props.selected||-1===T)&&(T=t),T===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(T+=1,T>=s.length&&(T=-1))):T===t&&(T+=1,T>=s.length&&(T=-1))}));const C=r.Children.map(s,((e,t)=>{if(t===T){const t={};return i&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===E&&(t.tabIndex=0),r.cloneElement(e,t)}return e}));return(0,m.jsx)(c.A,{role:"menu",ref:R,className:a,onKeyDown:e=>{const t=P.current,n=e.key;if(e.ctrlKey||e.metaKey||e.altKey)return void(x&&x(e));const r=(0,l.A)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),b(t,r,A,y,h);else if("ArrowUp"===n)e.preventDefault(),b(t,r,A,y,v);else if("Home"===n)e.preventDefault(),b(t,null,A,y,h);else if("End"===n)e.preventDefault(),b(t,null,A,y,v);else if(1===n.length){const o=k.current,i=n.toLowerCase(),s=performance.now();o.keys.length>0&&(s-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=s,o.keys.push(i);const a=r&&!o.repeating&&g(r,o);o.previousKeyMatched&&(a||b(t,r,!1,y,h,o))?e.preventDefault():o.previousKeyMatched=!1}x&&x(e)},tabIndex:o?0:-1,...w,children:C})}));var A=n(43700),x=n(34535),E=n(6431),w=n(80950),P=n(86328),k=n(1149),R=n(61596),T=n(92532),C=n(72372);function M(e){return(0,C.Ay)("MuiPopover",e)}(0,T.A)("MuiPopover",["root","paper"]);var S=n(4162);function I(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function F(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function L(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?`${e}px`:e)).join(" ")}function O(e){return"function"===typeof e?e():e}const N=(0,x.Ay)(k.A,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),D=(0,x.Ay)(R.A,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),$=r.forwardRef((function(e,t){const n=(0,E.b)({props:e,name:"MuiPopover"}),{action:s,anchorEl:a,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:d,anchorReference:p="anchorEl",children:h,className:v,container:g,elevation:b=8,marginThreshold:y=16,open:x,PaperProps:k={},slots:R={},slotProps:T={},transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:$=P.A,transitionDuration:j="auto",TransitionProps:{onEntering:K,...z}={},disableScrollLock:B=!1,...H}=n,W=T?.paper??k,V=r.useRef(),U={...n,anchorOrigin:c,anchorReference:p,elevation:b,marginThreshold:y,externalPaperSlotProps:W,transformOrigin:C,TransitionComponent:$,transitionDuration:j,TransitionProps:z},G=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"],paper:["paper"]},M,t)})(U),X=r.useCallback((()=>{if("anchorPosition"===p)return d;const e=O(a),t=(e&&1===e.nodeType?e:(0,l.A)(V.current).body).getBoundingClientRect();return{top:t.top+I(t,c.vertical),left:t.left+F(t,c.horizontal)}}),[a,c.horizontal,c.vertical,d,p]),Y=r.useCallback((e=>({vertical:I(e,C.vertical),horizontal:F(e,C.horizontal)})),[C.horizontal,C.vertical]),q=r.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=Y(t);if("none"===p)return{top:null,left:null,transformOrigin:L(n)};const r=X();let o=r.top-n.vertical,i=r.left-n.horizontal;const s=o+t.height,l=i+t.width,c=(0,f.A)(O(a)),d=c.innerHeight-y,u=c.innerWidth-y;if(null!==y&&o<y){const e=o-y;o-=e,n.vertical+=e}else if(null!==y&&s>d){const e=s-d;o-=e,n.vertical+=e}if(null!==y&&i<y){const e=i-y;i-=e,n.horizontal+=e}else if(l>u){const e=l-u;i-=e,n.horizontal+=e}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:L(n)}}),[a,p,X,Y,y]),[J,Q]=r.useState(x),Z=r.useCallback((()=>{const e=V.current;if(!e)return;const t=q(e);null!==t.top&&e.style.setProperty("top",t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,Q(!0)}),[q]);r.useEffect((()=>(B&&window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z))),[a,B,Z]);r.useEffect((()=>{x&&Z()})),r.useImperativeHandle(s,(()=>x?{updatePosition:()=>{Z()}}:null),[x,Z]),r.useEffect((()=>{if(!x)return;const e=(0,w.A)((()=>{Z()})),t=(0,f.A)(a);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[a,x,Z]);let _=j;"auto"!==j||$.muiSupportAuto||(_=void 0);const ee=g||(a?(0,l.A)(O(a)).body:void 0),te={slots:R,slotProps:{...T,paper:W}},[ne,re]=(0,S.A)("paper",{elementType:D,externalForwardedProps:te,additionalProps:{elevation:b,className:(0,o.A)(G.paper,W?.className),style:J?W.style:{...W.style,opacity:0}},ownerState:U}),[oe,{slotProps:ie,...se}]=(0,S.A)("root",{elementType:N,externalForwardedProps:te,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:ee,open:x},ownerState:U,className:(0,o.A)(G.root,v)}),ae=(0,u.A)(V,re.ref);return(0,m.jsx)(oe,{...se,...!(0,A.A)(oe)&&{slotProps:ie,disableScrollLock:B},...H,ref:t,children:(0,m.jsx)($,{appear:!0,in:x,onEntering:(e,t)=>{K&&K(e,t),Z()},onExited:()=>{Q(!1)},timeout:_,...z,children:(0,m.jsx)(ne,{...re,ref:ae,children:h})})})}));var j=n(61475);function K(e){return(0,C.Ay)("MuiMenu",e)}(0,T.A)("MuiMenu",["root","paper","list"]);const z={vertical:"top",horizontal:"right"},B={vertical:"top",horizontal:"left"},H=(0,x.Ay)($,{shouldForwardProp:e=>(0,j.A)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),W=(0,x.Ay)(D,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),V=(0,x.Ay)(y,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),U=r.forwardRef((function(e,t){const n=(0,E.b)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:c,className:d,disableAutoFocusItem:u=!1,MenuListProps:p={},onClose:f,open:h,PaperProps:v={},PopoverClasses:g,transitionDuration:b="auto",TransitionProps:{onEntering:y,...A}={},variant:x="selectedMenu",slots:w={},slotProps:P={},...k}=n,R=(0,s.I)(),T={...n,autoFocus:l,disableAutoFocusItem:u,MenuListProps:p,onEntering:y,PaperProps:v,transitionDuration:b,TransitionProps:A,variant:x},C=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"],paper:["paper"],list:["list"]},K,t)})(T),M=l&&!u&&h,S=r.useRef(null);let I=-1;r.Children.map(c,((e,t)=>{r.isValidElement(e)&&(e.props.disabled||("selectedMenu"===x&&e.props.selected||-1===I)&&(I=t))}));const F=w.paper??W,L=P.paper??v,O=(0,a.A)({elementType:w.root,externalSlotProps:P.root,ownerState:T,className:[C.root,d]}),N=(0,a.A)({elementType:F,externalSlotProps:L,ownerState:T,className:C.paper});return(0,m.jsx)(H,{onClose:f,anchorOrigin:{vertical:"bottom",horizontal:R?"right":"left"},transformOrigin:R?z:B,slots:{paper:F,root:w.root},slotProps:{root:O,paper:N},open:h,ref:t,transitionDuration:b,TransitionProps:{onEntering:(e,t)=>{S.current&&S.current.adjustStyleForScrollbar(e,{direction:R?"rtl":"ltr"}),y&&y(e,t)},...A},ownerState:T,...k,classes:g,children:(0,m.jsx)(V,{onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),f&&f(e,"tabKeyDown"))},actions:S,autoFocus:l&&(-1===I||u),autoFocusItem:M,variant:x,...p,className:(0,o.A)(C.list,p.className),children:c})})}))},1149:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(65043),o=n(58387),i=n(98610),s=n(63462),a=n(43198),l=n(31668),c=n(70579);const d=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function u(e){const t=[],n=[];return Array.from(e.querySelectorAll(d)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function p(){return!0}const f=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:d=u,isEnabled:f=p,open:m}=e,h=r.useRef(!1),v=r.useRef(null),g=r.useRef(null),b=r.useRef(null),y=r.useRef(null),A=r.useRef(!1),x=r.useRef(null),E=(0,s.A)((0,a.A)(t),x),w=r.useRef(null);r.useEffect((()=>{m&&x.current&&(A.current=!n)}),[n,m]),r.useEffect((()=>{if(!m||!x.current)return;const e=(0,l.A)(x.current);return x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),A.current&&x.current.focus()),()=>{i||(b.current&&b.current.focus&&(h.current=!0,b.current.focus()),b.current=null)}}),[m]),r.useEffect((()=>{if(!m||!x.current)return;const e=(0,l.A)(x.current),t=t=>{w.current=t,!o&&f()&&"Tab"===t.key&&e.activeElement===x.current&&t.shiftKey&&(h.current=!0,g.current&&g.current.focus())},n=()=>{const t=x.current;if(null===t)return;if(!e.hasFocus()||!f()||h.current)return void(h.current=!1);if(t.contains(e.activeElement))return;if(o&&e.activeElement!==v.current&&e.activeElement!==g.current)return;if(e.activeElement!==y.current)y.current=null;else if(null!==y.current)return;if(!A.current)return;let n=[];if(e.activeElement!==v.current&&e.activeElement!==g.current||(n=d(x.current)),n.length>0){const e=Boolean(w.current?.shiftKey&&"Tab"===w.current?.key),t=n[0],r=n[n.length-1];"string"!==typeof t&&"string"!==typeof r&&(e?r.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,o,i,f,m,d]);const P=e=>{null===b.current&&(b.current=e.relatedTarget),A.current=!0};return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("div",{tabIndex:m?0:-1,onFocus:P,ref:v,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:E,onFocus:e=>{null===b.current&&(b.current=e.relatedTarget),A.current=!0,y.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,c.jsx)("div",{tabIndex:m?0:-1,onFocus:P,ref:g,"data-testid":"sentinelEnd"})]})};var m=n(67022),h=n(34535),v=n(56262),g=n(6431),b=n(12220),y=n(31782);function A(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}),(()=>{}))}var x=n(76114),E=n(63940),w=n(68052);function P(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function k(e){return parseInt((0,E.A)(e).getComputedStyle(e).paddingRight,10)||0}function R(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,(e=>{const t=!i.includes(e),n=!function(e){const t=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&P(e,o)}))}function T(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function C(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,l.A)(e);return t.body===e?(0,E.A)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=(0,w.A)((0,E.A)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${k(r)+e}px`;const t=(0,l.A)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${k(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,l.A)(r).body;else{const t=r.parentElement,n=(0,E.A)(r);e="HTML"===t?.nodeName&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((e=>{let{value:t,el:n,property:r}=e;t?n.style.setProperty(r,t):n.style.removeProperty(r)}))}}const M=new class{constructor(){this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&P(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);R(t,e.mount,e.modalRef,r,!0);const o=T(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=T(this.containers,(t=>t.modals.includes(e))),r=this.containers[n];r.restore||(r.restore=C(r,t))}remove(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=this.modals.indexOf(e);if(-1===n)return n;const r=T(this.containers,(t=>t.modals.includes(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&P(e.modalRef,t),R(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&P(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};const S=function(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:c,children:d,onClose:u,open:p,rootRef:f}=e,m=r.useRef({}),h=r.useRef(null),v=r.useRef(null),g=(0,s.A)(v,f),[b,E]=r.useState(!p),w=function(e){return!!e&&e.props.hasOwnProperty("in")}(d);let k=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(k=!1);const R=()=>(m.current.modalRef=v.current,m.current.mount=h.current,m.current),T=()=>{M.mount(R(),{disableScrollLock:o}),v.current&&(v.current.scrollTop=0)},C=(0,y.A)((()=>{const e=function(e){return"function"===typeof e?e():e}(t)||(0,l.A)(h.current).body;M.add(R(),e),v.current&&T()})),S=()=>M.isTopModal(R()),I=(0,y.A)((e=>{h.current=e,e&&(p&&S()?T():v.current&&P(v.current,k))})),F=r.useCallback((()=>{M.remove(R(),k)}),[k]);r.useEffect((()=>()=>{F()}),[F]),r.useEffect((()=>{p?C():w&&i||F()}),[p,F,w,i,C]);const L=e=>t=>{e.onKeyDown?.(t),"Escape"===t.key&&229!==t.which&&S()&&(n||(t.stopPropagation(),u&&u(t,"escapeKeyDown")))},O=e=>t=>{e.onClick?.(t),t.target===t.currentTarget&&u&&u(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(0,x.A)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const r={...n,...t};return{role:"presentation",...r,onKeyDown:L(r),ref:g}},getBackdropProps:function(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"aria-hidden":!0,...e,onClick:O(e),open:p}},getTransitionProps:()=>({onEnter:A((()=>{E(!1),a&&a()}),d?.props.onEnter),onExited:A((()=>{E(!0),c&&c(),i&&F()}),d?.props.onExited)}),rootRef:g,portalRef:I,isTopModal:S,exited:b,hasTransition:w}};var I=n(92532),F=n(72372);function L(e){return(0,F.Ay)("MuiModal",e)}(0,I.A)("MuiModal",["root","hidden","backdrop"]);var O=n(4162),N=n(95849);const D=(0,h.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((0,v.A)((e=>{let{theme:t}=e;return{position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:e=>{let{ownerState:t}=e;return!t.open&&t.exited},style:{visibility:"hidden"}}]}}))),$=(0,h.Ay)(b.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),j=r.forwardRef((function(e,t){const n=(0,g.b)({name:"MuiModal",props:e}),{BackdropComponent:s=$,BackdropProps:a,classes:l,className:d,closeAfterTransition:u=!1,children:p,container:h,component:v,components:b={},componentsProps:y={},disableAutoFocus:A=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:E=!1,disablePortal:w=!1,disableRestoreFocus:P=!1,disableScrollLock:k=!1,hideBackdrop:R=!1,keepMounted:T=!1,onBackdropClick:C,onClose:M,onTransitionEnter:I,onTransitionExited:F,open:j,slotProps:K={},slots:z={},theme:B,...H}=n,W={...n,closeAfterTransition:u,disableAutoFocus:A,disableEnforceFocus:x,disableEscapeKeyDown:E,disablePortal:w,disableRestoreFocus:P,disableScrollLock:k,hideBackdrop:R,keepMounted:T},{getRootProps:V,getBackdropProps:U,getTransitionProps:G,portalRef:X,isTopModal:Y,exited:q,hasTransition:J}=S({...W,rootRef:t}),Q={...W,exited:q},Z=(e=>{const{open:t,exited:n,classes:r}=e,o={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,i.A)(o,L,r)})(Q),_={};if(void 0===p.props.tabIndex&&(_.tabIndex="-1"),J){const{onEnter:e,onExited:t}=G();_.onEnter=e,_.onExited=t}const ee={...H,slots:{root:b.Root,backdrop:b.Backdrop,...z},slotProps:{...y,...K}},[te,ne]=(0,O.A)("root",{elementType:D,externalForwardedProps:ee,getSlotProps:V,additionalProps:{ref:t,as:v},ownerState:Q,className:(0,o.A)(d,Z?.root,!Q.open&&Q.exited&&Z?.hidden)}),[re,oe]=(0,O.A)("backdrop",{elementType:s,externalForwardedProps:ee,additionalProps:a,getSlotProps:e=>U({...e,onClick:t=>{C&&C(t),e?.onClick&&e.onClick(t)}}),className:(0,o.A)(a?.className,Z?.backdrop),ownerState:Q}),ie=(0,N.A)(a?.ref,oe.ref);return T||j||J&&!q?(0,c.jsx)(m.A,{ref:X,container:h,disablePortal:w,children:(0,c.jsxs)(te,{...ne,children:[!R&&s?(0,c.jsx)(re,{...oe,ref:ie}):null,(0,c.jsx)(f,{disableEnforceFocus:x,disableAutoFocus:A,disableRestoreFocus:P,isEnabled:Y,open:j,children:r.cloneElement(p,_)})]})}):null}))},80950:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(83468).A},22427:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(31668).A},36078:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(63940).A},55013:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(84440).A},83468:(e,t,n)=>{function r(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),n)}return r.clear=()=>{clearTimeout(t)},r}n.d(t,{A:()=>r})},68052:(e,t,n)=>{function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;const t=e.document.documentElement.clientWidth;return e.innerWidth-t}n.d(t,{A:()=>r})},63940:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(31668);function o(e){return(0,r.A)(e).defaultView||window}}}]);
//# sourceMappingURL=4996.0319cd68.chunk.js.map