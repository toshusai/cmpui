import{r as b,$ as pe}from"./index-aXz8NaAs.js";import{m as lt,c as yt,$ as me,a as Nt,i as he}from"./index-M7H33-mE.js";import{_ as mt}from"./extends-dGVwEr9R.js";import{r as ge}from"./index-n3prD_Ok.js";const we=pe.useId||(()=>{});let xe=0;function $n(t){const[e,n]=b.useState(we());return lt(()=>{t||n(o=>o??String(xe++))},[t]),t||(e?`radix-${e}`:"")}const ye=["top","right","bottom","left"],Y=Math.min,L=Math.max,ft=Math.round,ct=Math.floor,X=t=>({x:t,y:t}),ve={left:"right",right:"left",bottom:"top",top:"bottom"},be={start:"end",end:"start"};function wt(t,e,n){return L(t,Y(e,n))}function B(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function vt(t){return t==="x"?"y":"x"}function bt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(z(t))?"y":"x"}function $t(t){return vt(J(t))}function $e(t,e,n){n===void 0&&(n=!1);const o=G(t),i=$t(t),r=bt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=dt(s)),[s,dt(s)]}function Ae(t){const e=dt(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>be[e])}function Re(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Oe(t,e,n,o){const i=G(t);let r=Re(z(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(xt)))),r}function dt(t){return t.replace(/left|right|bottom|top/g,e=>ve[e])}function Pe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?Pe(t):{top:t,right:t,bottom:t,left:t}}function ut(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Dt(t,e,n){let{reference:o,floating:i}=t;const r=J(e),s=$t(e),a=bt(s),c=z(e),l=r==="y",p=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[a]/2-i[a]/2;let f;switch(c){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(G(e)){case"start":f[s]-=m*(n&&l?-1:1);break;case"end":f[s]+=m*(n&&l?-1:1);break}return f}const Ce=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:d}=Dt(l,o,c),m=o,f={},u=0;for(let g=0;g<a.length;g++){const{name:w,fn:h}=a[g],{x:v,y:x,data:y,reset:$}=await h({x:p,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:t,floating:e}});if(p=v??p,d=x??d,f={...f,[w]:{...f[w],...y}},$&&u<=50){u++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(l=$.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):$.rects),{x:p,y:d}=Dt(l,m,c)),g=-1;continue}}return{x:p,y:d,placement:m,strategy:i,middlewareData:f}};async function tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=B(e,t),u=Bt(f),w=a[m?d==="floating"?"reference":"floating":d],h=ut(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:p,strategy:c})),v=d==="floating"?{...s.floating,x:o,y:i}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),y=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},$=ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:x,strategy:c}):v);return{top:(h.top-$.top+u.top)/y.y,bottom:($.bottom-h.bottom+u.bottom)/y.y,left:(h.left-$.left+u.left)/y.x,right:($.right-h.right+u.right)/y.x}}const _t=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:a,middlewareData:c}=e,{element:l,padding:p=0}=B(t,e)||{};if(l==null)return{};const d=Bt(p),m={x:n,y:o},f=$t(i),u=bt(f),g=await s.getDimensions(l),w=f==="y",h=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",y=r.reference[u]+r.reference[f]-m[f]-r.floating[u],$=m[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let P=A?A[x]:0;(!P||!await(s.isElement==null?void 0:s.isElement(A)))&&(P=a.floating[x]||r.floating[u]);const S=y/2-$/2,E=P/2-g[u]/2-1,H=Y(d[h],E),T=Y(d[v],E),C=H,W=P-g[u]-T,O=P/2-g[u]/2+S,_=wt(C,O,W),R=!c.arrow&&G(i)!=null&&O!=_&&r.reference[u]/2-(O<C?H:T)-g[u]/2<0,D=R?O<C?O-C:O-W:0;return{[f]:m[f]+D,data:{[f]:_,centerOffset:O-_-D,...R&&{alignmentOffset:D}},reset:R}}}),Se=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:g=!0,...w}=B(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=z(i),v=z(a)===a,x=await(c.isRTL==null?void 0:c.isRTL(l.floating)),y=m||(v||!g?[dt(a)]:Ae(a));!m&&u!=="none"&&y.push(...Oe(a,g,u,x));const $=[a,...y],A=await tt(e,w),P=[];let S=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&P.push(A[h]),d){const C=$e(i,s,x);P.push(A[C[0]],A[C[1]])}if(S=[...S,{placement:i,overflows:P}],!P.every(C=>C<=0)){var E,H;const C=(((E=r.flip)==null?void 0:E.index)||0)+1,W=$[C];if(W)return{data:{index:C,overflows:S},reset:{placement:W}};let O=(H=S.filter(_=>_.overflows[0]<=0).sort((_,R)=>_.overflows[1]-R.overflows[1])[0])==null?void 0:H.placement;if(!O)switch(f){case"bestFit":{var T;const _=(T=S.map(R=>[R.placement,R.overflows.filter(D=>D>0).reduce((D,F)=>D+F,0)]).sort((R,D)=>R[1]-D[1])[0])==null?void 0:T[0];_&&(O=_);break}case"initialPlacement":O=a;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Tt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Lt(t){return ye.some(e=>t[e]>=0)}const Ee=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=B(t,e);switch(o){case"referenceHidden":{const r=await tt(e,{...i,elementContext:"reference"}),s=Tt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Lt(s)}}}case"escaped":{const r=await tt(e,{...i,altBoundary:!0}),s=Tt(r,n.floating);return{data:{escapedOffsets:s,escaped:Lt(s)}}}default:return{}}}}};async function De(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=z(n),a=G(n),c=J(n)==="y",l=["left","top"].includes(s)?-1:1,p=r&&c?-1:1,d=B(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof u=="number"&&(f=a==="end"?u*-1:u),c?{x:f*p,y:m*l}:{x:m*l,y:f*p}}const _e=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:a}=e,c=await De(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:h,y:v}=w;return{x:h,y:v}}},...c}=B(t,e),l={x:n,y:o},p=await tt(e,c),d=J(z(i)),m=vt(d);let f=l[m],u=l[d];if(r){const w=m==="y"?"top":"left",h=m==="y"?"bottom":"right",v=f+p[w],x=f-p[h];f=wt(v,f,x)}if(s){const w=d==="y"?"top":"left",h=d==="y"?"bottom":"right",v=u+p[w],x=u-p[h];u=wt(v,u,x)}const g=a.fn({...e,[m]:f,[d]:u});return{...g,data:{x:g.x-n,y:g.y-o}}}}},Le=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:a=0,mainAxis:c=!0,crossAxis:l=!0}=B(t,e),p={x:n,y:o},d=J(i),m=vt(d);let f=p[m],u=p[d];const g=B(a,e),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const x=m==="y"?"height":"width",y=r.reference[m]-r.floating[x]+w.mainAxis,$=r.reference[m]+r.reference[x]-w.mainAxis;f<y?f=y:f>$&&(f=$)}if(l){var h,v;const x=m==="y"?"width":"height",y=["top","left"].includes(z(i)),$=r.reference[d]-r.floating[x]+(y&&((h=s.offset)==null?void 0:h[d])||0)+(y?0:w.crossAxis),A=r.reference[d]+r.reference[x]+(y?0:((v=s.offset)==null?void 0:v[d])||0)-(y?w.crossAxis:0);u<$?u=$:u>A&&(u=A)}return{[m]:f,[d]:u}}}},Me=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...a}=B(t,e),c=await tt(e,a),l=z(n),p=G(n),d=J(n)==="y",{width:m,height:f}=o.floating;let u,g;l==="top"||l==="bottom"?(u=l,g=p===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(g=l,u=p==="end"?"top":"bottom");const w=f-c[u],h=m-c[g],v=!e.middlewareData.shift;let x=w,y=h;if(d){const A=m-c.left-c.right;y=p||v?Y(h,A):A}else{const A=f-c.top-c.bottom;x=p||v?Y(w,A):A}if(v&&!p){const A=L(c.left,0),P=L(c.right,0),S=L(c.top,0),E=L(c.bottom,0);d?y=m-2*(A!==0||P!==0?A+P:L(c.left,c.right)):x=f-2*(S!==0||E!==0?S+E:L(c.top,c.bottom))}await s({...e,availableWidth:y,availableHeight:x});const $=await i.getDimensions(r.floating);return m!==$.width||f!==$.height?{reset:{rects:!0}}:{}}}};function j(t){return zt(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(zt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function zt(t){return t instanceof Node||t instanceof M(t).Node}function V(t){return t instanceof Element||t instanceof M(t).Element}function N(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function Mt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ke(t){return["table","td","th"].includes(j(t))}function At(t){const e=Rt(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function He(t){let e=K(t);for(;N(e)&&!ht(e);){if(At(e))return e;e=K(e)}return null}function Rt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ht(t){return["html","body","#document"].includes(j(t))}function k(t){return M(t).getComputedStyle(t)}function gt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(t){if(j(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Mt(t)&&t.host||I(t);return Mt(e)?e.host:e}function Vt(t){const e=K(t);return ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&nt(e)?e:Vt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=M(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&n?et(s.frameElement):[]):e.concat(i,et(i,[],n))}function It(t){const e=k(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,a=ft(n)!==r||ft(o)!==s;return a&&(n=r,o=s),{width:n,height:o,$:a}}function Ot(t){return V(t)?t:t.contextElement}function Z(t){const e=Ot(t);if(!N(e))return X(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=It(e);let s=(r?ft(n.width):n.width)/o,a=(r?ft(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const We=X(0);function Yt(t){const e=M(t);return!Rt()||!e.visualViewport?We:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==M(t)?!1:e}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Ot(t);let s=X(1);e&&(o?V(o)&&(s=Z(o)):s=Z(t));const a=Fe(r,n,o)?Yt(r):X(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,p=i.width/s.x,d=i.height/s.y;if(r){const m=M(r),f=o&&V(o)?M(o):o;let u=m.frameElement;for(;u&&o&&f!==m;){const g=Z(u),w=u.getBoundingClientRect(),h=k(u),v=w.left+(u.clientLeft+parseFloat(h.paddingLeft))*g.x,x=w.top+(u.clientTop+parseFloat(h.paddingTop))*g.y;c*=g.x,l*=g.y,p*=g.x,d*=g.y,c+=v,l+=x,u=M(u).frameElement}}return ut({width:p,height:d,x:c,y:l})}function Ne(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=N(n),r=I(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},a=X(1);const c=X(0);if((i||!i&&o!=="fixed")&&((j(n)!=="body"||nt(r))&&(s=gt(n)),N(n))){const l=q(n);a=Z(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+c.x,y:e.y*a.y-s.scrollTop*a.y+c.y}}function Be(t){return Array.from(t.getClientRects())}function Xt(t){return q(I(t)).left+gt(t).scrollLeft}function ze(t){const e=I(t),n=gt(t),o=t.ownerDocument.body,i=L(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=L(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Xt(t);const a=-n.scrollTop;return k(o).direction==="rtl"&&(s+=L(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:a}}function Ve(t,e){const n=M(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const l=Rt();(!l||l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}function Ie(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?Z(t):X(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,c=i*r.x,l=o*r.y;return{width:s,height:a,x:c,y:l}}function kt(t,e,n){let o;if(e==="viewport")o=Ve(t,n);else if(e==="document")o=ze(I(t));else if(V(e))o=Ie(e,n);else{const i=Yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ut(o)}function jt(t,e){const n=K(t);return n===e||!V(n)||ht(n)?!1:k(n).position==="fixed"||jt(n,e)}function Ye(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(a=>V(a)&&j(a)!=="body"),i=null;const r=k(t).position==="fixed";let s=r?K(t):t;for(;V(s)&&!ht(s);){const a=k(s),c=At(s);!c&&a.position==="fixed"&&(i=null),(r?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!c&&jt(t,s))?o=o.filter(p=>p!==s):i=a,s=K(s)}return e.set(t,o),o}function Xe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Ye(e,this._c):[].concat(n),o],a=s[0],c=s.reduce((l,p)=>{const d=kt(e,p,i);return l.top=L(d.top,l.top),l.right=Y(d.right,l.right),l.bottom=Y(d.bottom,l.bottom),l.left=L(d.left,l.left),l},kt(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function je(t){return It(t)}function qe(t,e,n){const o=N(e),i=I(e),r=n==="fixed",s=q(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=X(0);if(o||!o&&!r)if((j(e)!=="body"||nt(i))&&(a=gt(e)),o){const l=q(e,!0,r,e);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else i&&(c.x=Xt(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Ht(t,e){return!N(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function qt(t,e){const n=M(t);if(!N(t))return n;let o=Ht(t,e);for(;o&&ke(o)&&k(o).position==="static";)o=Ht(o,e);return o&&(j(o)==="html"||j(o)==="body"&&k(o).position==="static"&&!At(o))?n:o||He(t)||n}const Ue=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||qt,r=this.getDimensions;return{reference:qe(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Ze(t){return k(t).direction==="rtl"}const Ke={convertOffsetParentRelativeRectToViewportRelativeRect:Ne,getDocumentElement:I,getClippingRect:Xe,getOffsetParent:qt,getElementRects:Ue,getClientRects:Be,getDimensions:je,getScale:Z,isElement:V,isRTL:Ze};function Ge(t,e){let n=null,o;const i=I(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),r();const{left:l,top:p,width:d,height:m}=t.getBoundingClientRect();if(a||e(),!d||!m)return;const f=ct(p),u=ct(i.clientWidth-(l+d)),g=ct(i.clientHeight-(p+m)),w=ct(l),v={rootMargin:-f+"px "+-u+"px "+-g+"px "+-w+"px",threshold:L(0,Y(1,c))||1};let x=!0;function y($){const A=$[0].intersectionRatio;if(A!==c){if(!x)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(y,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(t)}return s(!0),r}function Je(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,l=Ot(t),p=i||r?[...l?et(l):[],...et(e)]:[];p.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const d=l&&a?Ge(l,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(h=>{let[v]=h;v&&v.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),l&&!c&&f.observe(l),f.observe(e));let u,g=c?q(t):null;c&&w();function w(){const h=q(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,u=requestAnimationFrame(w)}return n(),()=>{p.forEach(h=>{i&&h.removeEventListener("scroll",n),r&&h.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const Qe=(t,e,n)=>{const o=new Map,i={platform:Ke,...n},r={...i.platform,_c:o};return Ce(t,e,{...i,platform:r})},tn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?_t({element:o.current,padding:i}).fn(n):{}:o?_t({element:o,padding:i}).fn(n):{}}}};var at=typeof document<"u"?b.useLayoutEffect:b.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!pt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Ut(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Wt(t,e){const n=Ut(t);return Math.round(e*n)/n}function Ft(t){const e=b.useRef(t);return at(()=>{e.current=t}),e}function en(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:a=!0,whileElementsMounted:c,open:l}=t,[p,d]=b.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,f]=b.useState(o);pt(m,o)||f(o);const[u,g]=b.useState(null),[w,h]=b.useState(null),v=b.useCallback(R=>{R!=A.current&&(A.current=R,g(R))},[g]),x=b.useCallback(R=>{R!==P.current&&(P.current=R,h(R))},[h]),y=r||u,$=s||w,A=b.useRef(null),P=b.useRef(null),S=b.useRef(p),E=Ft(c),H=Ft(i),T=b.useCallback(()=>{if(!A.current||!P.current)return;const R={placement:e,strategy:n,middleware:m};H.current&&(R.platform=H.current),Qe(A.current,P.current,R).then(D=>{const F={...D,isPositioned:!0};C.current&&!pt(S.current,F)&&(S.current=F,ge.flushSync(()=>{d(F)}))})},[m,e,n,H]);at(()=>{l===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[l]);const C=b.useRef(!1);at(()=>(C.current=!0,()=>{C.current=!1}),[]),at(()=>{if(y&&(A.current=y),$&&(P.current=$),y&&$){if(E.current)return E.current(y,$,T);T()}},[y,$,T,E]);const W=b.useMemo(()=>({reference:A,floating:P,setReference:v,setFloating:x}),[v,x]),O=b.useMemo(()=>({reference:y,floating:$}),[y,$]),_=b.useMemo(()=>{const R={position:n,left:0,top:0};if(!O.floating)return R;const D=Wt(O.floating,p.x),F=Wt(O.floating,p.y);return a?{...R,transform:"translate("+D+"px, "+F+"px)",...Ut(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:D,top:F}},[n,a,O.floating,p.x,p.y]);return b.useMemo(()=>({...p,update:T,refs:W,elements:O,floatingStyles:_}),[p,T,W,O,_])}const nn=b.forwardRef((t,e)=>{const{children:n,width:o=10,height:i=5,...r}=t;return b.createElement(yt.svg,mt({},r,{ref:e,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:b.createElement("polygon",{points:"0,0 30,0 15,10"}))}),on=nn;function rn(t){const[e,n]=b.useState(void 0);return lt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,a;if("borderBoxSize"in r){const c=r.borderBoxSize,l=Array.isArray(c)?c[0]:c;s=l.inlineSize,a=l.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}const Zt="Popper",[Kt,An]=me(Zt),[sn,Gt]=Kt(Zt),cn=t=>{const{__scopePopper:e,children:n}=t,[o,i]=b.useState(null);return b.createElement(sn,{scope:e,anchor:o,onAnchorChange:i},n)},an="PopperAnchor",ln=b.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=Gt(an,n),s=b.useRef(null),a=Nt(e,s);return b.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:b.createElement(yt.div,mt({},i,{ref:a}))}),Jt="PopperContent",[fn,dn]=Kt(Jt),un=b.forwardRef((t,e)=>{var n,o,i,r,s,a,c,l;const{__scopePopper:p,side:d="bottom",sideOffset:m=0,align:f="center",alignOffset:u=0,arrowPadding:g=0,avoidCollisions:w=!0,collisionBoundary:h=[],collisionPadding:v=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:$="optimized",onPlaced:A,...P}=t,S=Gt(Jt,p),[E,H]=b.useState(null),T=Nt(e,Q=>H(Q)),[C,W]=b.useState(null),O=rn(C),_=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,R=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,D=d+(f!=="center"?"-"+f:""),F=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},Pt=Array.isArray(h)?h:[h],te=Pt.length>0,ot={padding:F,boundary:Pt.filter(gn),altBoundary:te},{refs:ee,floatingStyles:Ct,placement:ne,isPositioned:it,middlewareData:U}=en({strategy:"fixed",placement:D,whileElementsMounted:(...Q)=>Je(...Q,{animationFrame:$==="always"}),elements:{reference:S.anchor},middleware:[_e({mainAxis:m+R,alignmentAxis:u}),w&&Te({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?Le():void 0,...ot}),w&&Se({...ot}),Me({...ot,apply:({elements:Q,rects:Et,availableWidth:le,availableHeight:fe})=>{const{width:de,height:ue}=Et.reference,st=Q.floating.style;st.setProperty("--radix-popper-available-width",`${le}px`),st.setProperty("--radix-popper-available-height",`${fe}px`),st.setProperty("--radix-popper-anchor-width",`${de}px`),st.setProperty("--radix-popper-anchor-height",`${ue}px`)}}),C&&tn({element:C,padding:g}),wn({arrowWidth:_,arrowHeight:R}),y&&Ee({strategy:"referenceHidden",...ot})]}),[St,oe]=Qt(ne),rt=he(A);lt(()=>{it&&(rt==null||rt())},[it,rt]);const ie=(i=U.arrow)===null||i===void 0?void 0:i.x,re=(r=U.arrow)===null||r===void 0?void 0:r.y,se=((s=U.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ce,ae]=b.useState();return lt(()=>{E&&ae(window.getComputedStyle(E).zIndex)},[E]),b.createElement("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ct,transform:it?Ct.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(a=U.transformOrigin)===null||a===void 0?void 0:a.x,(c=U.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},b.createElement(fn,{scope:p,placedSide:St,onArrowChange:W,arrowX:ie,arrowY:re,shouldHideArrow:se},b.createElement(yt.div,mt({"data-side":St,"data-align":oe},P,{ref:T,style:{...P.style,animation:it?void 0:"none",opacity:(l=U.hide)!==null&&l!==void 0&&l.referenceHidden?0:void 0}}))))}),pn="PopperArrow",mn={top:"bottom",right:"left",bottom:"top",left:"right"},hn=b.forwardRef(function(e,n){const{__scopePopper:o,...i}=e,r=dn(pn,o),s=mn[r.placedSide];return b.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},b.createElement(on,mt({},i,{ref:n,style:{...i.style,display:"block"}})))});function gn(t){return t!==null}const wn=t=>({name:"transformOrigin",options:t,fn(e){var n,o,i,r,s;const{placement:a,rects:c,middlewareData:l}=e,d=((n=l.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=d?0:t.arrowWidth,f=d?0:t.arrowHeight,[u,g]=Qt(a),w={start:"0%",center:"50%",end:"100%"}[g],h=((o=(i=l.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+m/2,v=((r=(s=l.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let x="",y="";return u==="bottom"?(x=d?w:`${h}px`,y=`${-f}px`):u==="top"?(x=d?w:`${h}px`,y=`${c.floating.height+f}px`):u==="right"?(x=`${-f}px`,y=d?w:`${v}px`):u==="left"&&(x=`${c.floating.width+f}px`,y=d?w:`${v}px`),{data:{x,y}}}});function Qt(t){const[e,n="center"]=t.split("-");return[e,n]}const Rn=cn,On=ln,Pn=un,Cn=hn;export{$n as $,An as a,Rn as b,On as c,Pn as d,Cn as e};
