function v({onDown:e,onMove:t,onUp:r,options:n}){return a=>{if(a.button!==0)return;const i=a.currentTarget;if(!(i instanceof HTMLElement))return;const o=e==null?void 0:e(a);let c;const s=n!=null&&n.pointerMoveOnWindow?window:i,u=l=>{l instanceof PointerEvent&&o!==!1&&(l.preventDefault(),t==null||t(l,o,{dx:l.clientX-a.clientX,dy:l.clientY-a.clientY,deltaX:l.clientX-((c==null?void 0:c.clientX)??a.clientX),deltaY:l.clientY-((c==null?void 0:c.clientY)??a.clientY)}),c=l)},d=l=>{l instanceof PointerEvent&&o!==!1&&(s.removeEventListener("pointermove",u),window.removeEventListener("pointerup",d),(n==null?void 0:n.disableCapture)!==!0&&i.releasePointerCapture(l.pointerId),r==null||r(l,o,c))};o!==!1&&((n==null?void 0:n.disableCapture)!==!0&&i.setPointerCapture(a.pointerId),s.addEventListener("pointermove",u,{passive:!1}),window.addEventListener("pointerup",d))}}const f={Auto:"auto",Grab:"grab",Grabbing:"grabbing",ZoomIn:"zoom-in",ZoomOut:"zoom-out"};function Y(e,t,r,n){return v({onDown:a=>e.style.cursor!==f.Grab?!1:(n==null||n(f.Grabbing),{startX:a.clientX,startY:a.clientY,startOSX:t.x,startOSY:t.y}),onMove:(a,i)=>{if(i===void 0)return;const o=i.startX-a.clientX,c=i.startY-a.clientY;r({x:i.startOSX-o,y:i.startOSY-c,scale:t.scale})},onUp:()=>{e.style.cursor===f.Grabbing?n==null||n(f.Grab):n==null||n(f.Auto)}})}const w={trackPadMoveScaleX:1,trackPadMoveScaleY:1};function x(e,t,r,n,a){if(e.shiftKey)return;const i={...w,...a},o=Number.isInteger(e.deltaY),c=e.ctrlKey||e.metaKey;if(o&&!c){r({x:t.x-e.deltaX*i.trackPadMoveScaleX,y:t.y-e.deltaY*i.trackPadMoveScaleY,scale:t.scale}),e.preventDefault();return}n(e.clientX,e.clientY,-e.deltaY),e.preventDefault()}function X(e,t,r,n,a,i){var o;const{view:c,maxScale:s,minScale:u}=a;let d=1+n/200;const l=e.getBoundingClientRect();if(!((o=e.parentElement)!=null&&o.getBoundingClientRect()))return;const p=t-l.left,y=r-l.top,h=p-c.x,b=y-c.y;s!==void 0&&c.scale*d>s?d=s/c.scale:u!==void 0&&c.scale*d<u&&(d=u/c.scale),i({x:c.x+h-h*d,y:c.y+b-b*d,scale:c.scale*d})}function S(e){var t;const r=Array.from(((t=document.body)==null?void 0:t.children)??[]).filter(n=>n!==e);return r.forEach(n=>{n.setAttribute("aria-hidden","true")}),()=>{r.forEach(n=>{n.removeAttribute("aria-hidden")})}}const g=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];function k(e){let t=[...e.querySelectorAll(g.join(", "))].filter(o=>o instanceof HTMLElement);const r=document.activeElement,n=new MutationObserver(()=>{t=[...e.querySelectorAll(g.join(", "))].filter(o=>o instanceof HTMLElement)});n.observe(e,{attributes:!0,childList:!0,subtree:!0});const a=o=>{o.key==="Tab"&&(o.shiftKey?document.activeElement===t[0]&&(o.preventDefault(),t[t.length-1].focus()):document.activeElement===t[t.length-1]&&(o.preventDefault(),t[0].focus()))},i=t.find(o=>o.autofocus);return i?i.focus():t.length>0&&t[0].focus(),window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a),n.disconnect(),r instanceof HTMLElement&&r.focus()}}function E(){return window.innerWidth-document.documentElement.clientWidth}const C=()=>{if(document.body.dataset.lockScroll)return()=>{};const e=document.documentElement.scrollLeft,t=document.documentElement.scrollTop,r={overflow:"hidden",position:"fixed",top:`${-t}px`,left:`${-e}px`,width:"100%",height:"100%",boxSizing:"border-box",paddingRight:`${E()}px`},n=Object.keys(r).reduce((a,i)=>(a[i]=document.body.style[i],a),{});return Object.entries(r).forEach(([a,i])=>{document.body.style[a]=i}),document.body.dataset.lockScroll="true",()=>{Object.keys(r).forEach(a=>{document.body.style[a]=n[a]}),delete document.body.dataset.lockScroll,window.scrollTo(e,t)}},L={primary:"primary",secondary:"secondary",transparent:"transparent"},D={S:"S",M:"M",L:"L"};function m(e,t,r){return Math.min(Math.max(e,t),r)}function M(e){let t=0,r=0,n=0;const a=e.h,i=e.s,o=e.v,c=Math.floor(a/60),s=a/60-c,u=o*(1-i),d=o*(1-i*s),l=o*(1-i*(1-s));switch(c%6){case 0:t=o,r=l,n=u;break;case 1:t=d,r=o,n=u;break;case 2:t=u,r=o,n=l;break;case 3:t=u,r=d,n=o;break;case 4:t=l,r=u,n=o;break;case 5:t=o,r=u,n=d;break}return{r:Math.round(t*255),g:Math.round(r*255),b:Math.round(n*255)}}function O(e){const t=e.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Failed to get 2d context");return t.imageSmoothingEnabled=!1,t.imageSmoothingQuality="low",t}function T(e){return v({onDown:t=>(e.onDown(),{startX:t.clientX,startY:t.clientY,s:e.s,v:e.v}),onMove:(t,r,{dx:n,dy:a})=>{if(!r)return;const i=m(r.s+n/e.width,0,1),o=m(r.v-a/e.height,0,1);e.onChange(i,o)},onUp:()=>{e.onUp()}})}function j(e){return v({onDown:t=>{var r;(r=e.onStart)==null||r.call(e);const n=t.target;if(!(n instanceof HTMLCanvasElement))return;const a=n.getBoundingClientRect(),i=t.clientX-a.left,o=t.clientY-a.top,c=i/e.width,s=1-o/e.height;return e.onChange(c,s),e.onDownChange(!0),{startX:t.clientX,startY:t.clientY}},onMove:(t,r)=>{if(!r)return;const n=t.target;if(!(n instanceof HTMLCanvasElement))return;const a=n.getBoundingClientRect(),i=t.clientX-a.left,o=t.clientY-a.top,c=m(i/e.width,0,1),s=m(1-o/e.height,0,1);e.onChange(c,s)},onUp:()=>{var t;e.onDownChange(!1),(t=e.onEnd)==null||t.call(e)}})}function I(e,t){const r=e.canvas.width,n=e.canvas.height,a=e.getImageData(0,0,r,n),i=a.data;for(let o=0;o<n;o++)for(let c=0;c<r;c++){const s=(o*r+c)*4,{r:u,g:d,b:l}=M({h:t,s:c/n,v:1-o/r});i[s]=u,i[s+1]=d,i[s+2]=l,i[s+3]=255}e.putImageData(a,0,0)}export{X as I,f as J,S as K,x as N,D as Q,Y as V,L as Z,k as _,j as d,O as f,C as j,I as m,T as u};
