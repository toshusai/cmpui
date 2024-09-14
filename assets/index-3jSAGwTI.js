import{j as v}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{f as I,m as K,d as A,u as H}from"./index.es-CljsIJ_K.js";import{c as E}from"./clamp-co6UzHBn.js";import{C as O}from"./index-BAejv6NV.js";import{C as P}from"./index-DRqqH17F.js";function C(r){const e=r/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function k(r){const e=C(r.r),n=C(r.g),t=C(r.b);return .2126*e+.7152*n+.0722*t}function q(r,e){const n=k(r),t=k(e),u=Math.max(n,t),o=Math.min(n,t);return(u+.05)/(o+.05)}function N(r,e,n,t=0){const u=q(r,e),o=q(r,n);return u>o+t||u>o?e:n}const W={r:255,g:255,b:255},U={r:0,g:0,b:0},ne={r:255,g:255,b:255};function $(r,e=0){return N(r,W,U,e)}function L(r){let e=0,n=0,t=0;const u=r.h,o=r.s,i=r.v,m=Math.floor(u/60),c=u/60-m,d=i*(1-o),f=i*(1-o*c),l=i*(1-o*(1-c));switch(m%6){case 0:e=i,n=l,t=d;break;case 1:e=f,n=i,t=d;break;case 2:e=d,n=i,t=l;break;case 3:e=d,n=f,t=i;break;case 4:e=l,n=d,t=i;break;case 5:e=i,n=d,t=f;break}return{r:Math.round(e*255),g:Math.round(n*255),b:Math.round(t*255)}}function S({r,g:e,b:n}){return`rgb(${r},${e},${n})`}function B(r,e,n=500){const t=s.useRef(),u=s.useRef(!1);return s.useCallback(()=>{clearTimeout(t.current),u.current===!1&&(r==null||r()),u.current=!0,t.current=window.setTimeout(()=>{e==null||e(),u.current=!1,clearTimeout(t.current)},n)},[r,e,n])}function F(r,e=-3){return s.useMemo(()=>S($(L(r),e)),[r,e])}function G(){const r=s.useRef(null),e=s.useMemo(()=>{const n=t=>{t.preventDefault();const u=()=>{document.removeEventListener("touchmove",n),document.removeEventListener("touchend",u)};document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",u)};return n},[]);return s.useEffect(()=>{const n=r.current;if(n)return n.addEventListener("touchstart",e,{passive:!1}),()=>{n.removeEventListener("touchstart",e)}},[e]),r}const R=s.memo(function(e){const n=G(),t=s.useRef(null);s.useEffect(()=>{n.current&&(t.current=I(n.current))},[n.current]),s.useEffect(()=>{t.current&&K(t.current,e.hue)},[e.hue]);const u=s.useMemo(()=>A({height:e.height,width:e.width,onChange:e.onChange,onDownChange:e.onDownChange,onStart:e.onStart,onEnd:e.onEnd}),[e.height,e.width,e.onChange,e.onDownChange,e.onStart,e.onEnd]);return s.useEffect(()=>{if(n.current)return n.current.addEventListener("pointerdown",u),()=>{n.current&&n.current.removeEventListener("pointerdown",u)}},[u]),v.jsx("canvas",{width:e.width,height:e.height,style:{width:e.width,height:e.height},ref:n})});R.__docgenInfo={description:"",methods:[],displayName:"SVCanvas",props:{nobRadius:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(saturation: number, value: number) => void",signature:{arguments:[{type:{name:"number"},name:"saturation"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},hue:{required:!0,tsType:{name:"number"},description:""},saturation:{required:!1,tsType:{name:"number"},description:""},showLoupe:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"number"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},onStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDownChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isDown: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isDown"}],return:{name:"void"}}},description:""}}};function z({nobRadius:r=8,onChange:e,hue:n,saturation:t=1,showLoupe:u=!0,value:o=1,width:i=192,height:m=192,...c}){const d=t*i,f=(1-o)*m,[l,h]=s.useState(!1),y=B(c.onStart,c.onEnd),x=s.useMemo(()=>a=>{if(a.key==="ArrowLeft"||a.key==="ArrowRight"){y();const p=.01*(a.key==="ArrowLeft"?-1:1),T=E(t+p,0,1);e(T,o),a.preventDefault()}else if(a.key==="ArrowUp"||a.key==="ArrowDown"){y();const p=.01*(a.key==="ArrowUp"?1:-1),T=E(o+p,0,1);e(t,T),a.preventDefault()}},[t,o,e,y]),M=s.useCallback(()=>{h(!0)},[]),_=s.useCallback(()=>{h(!1)},[]),w=s.useMemo(()=>H({height:m,width:i,onChange:e,onDown:()=>{var a;h(!0),(a=c.onStart)==null||a.call(c)},onUp:()=>{var a;h(!1),(a=c.onEnd)==null||a.call(c)},s:t,v:o}),[e,t,o,i,m,c.onEnd,c.onStart]),D=s.useMemo(()=>S(L({h:n,s:t,v:o})),[n,t,o]),V=s.useMemo(()=>({h:n,s:t,v:o}),[n,t,o]),j=F(V),g=s.useRef(null);return s.useEffect(()=>{if(g.current)return g.current.addEventListener("pointerdown",w),()=>{g.current&&g.current.removeEventListener("pointerdown",w)}},[w]),v.jsxs("div",{className:"cmpui_sv-picker__root",tabIndex:0,onKeyDown:x,onFocus:M,onBlur:_,children:[v.jsx(R,{width:i,height:m,hue:n,onChange:(a,b)=>{e(a,b)},onDownChange:h}),u&&l&&v.jsx(P,{nobRadius:r,x:d,y:f,color:D}),v.jsx(O,{ref:g,className:"cmpui_sv-picker__nob",fill:D,radius:r,strokeColor:j,strokeWidth:2,x:d,y:f})]})}z.__docgenInfo={description:"",methods:[],displayName:"SVPicker",props:{nobRadius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(saturation: number, value: number) => void",signature:{arguments:[{type:{name:"number"},name:"saturation"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},hue:{required:!0,tsType:{name:"number"},description:""},saturation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showLoupe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"192",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"192",computed:!1}},onStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{z as S,ne as W,G as a,F as b,$ as g,L as h,S as r,B as u};
