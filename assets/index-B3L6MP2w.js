import{j as u}from"./jsx-runtime-Cw0GR0a5.js";import{r as y}from"./index-CTjT7uj6.js";import{c as g}from"./createDragHandler-DDNYS428.js";import{C as b}from"./index-BAejv6NV.js";import{L as x}from"./index-Et-kLNzN.js";import{P as E}from"./index-C3vRDm1t.js";function T({prev:l,cubic:r,onChange:e}){const{x1:m,y1:o,x2:a,y2:s,x:v,y:k}=r,{x:q,y:_}=l,d={type:"move",x:l.x,y:l.y},c=y.useCallback((n,t,P)=>g({onDown:i=>({x:i.clientX,y:i.clientY}),onMove:(i,p)=>{if(!p)return;const D=i.clientX-p.x,N=i.clientY-p.y,M=n+D,W=t+N;P(M,W)}}),[]),f=y.useMemo(()=>c(m,o,(n,t)=>{e==null||e({...r,x1:n,y1:t})}),[r,m,o,e,c]),j=y.useMemo(()=>c(a,s,(n,t)=>{e==null||e({...r,x2:n,y2:t})}),[r,a,s,e,c]),w=y.useMemo(()=>[d,r],[d,r]);return u.jsxs(u.Fragment,{children:[u.jsx(E,{commands:w,stroke:"var(--cmpui-primary-color)",style:{pointerEvents:"none"}}),u.jsx(x,{className:"cmpui_cubic-controls__line",strokeWidth:1,x1:q,y1:_,x2:m,y2:o}),u.jsx(x,{className:"cmpui_cubic-controls__line",strokeWidth:1,x1:v,y1:k,x2:a,y2:s}),u.jsx(b,{className:"cmpui_cubic-controls__circle",x:m,y:o,radius:6,onPointerDown:f,fill:"var(--cmpui-primary-color)",strokeColor:"var(--cmpui-border-color)",strokeWidth:1}),u.jsx(b,{className:"cmpui_cubic-controls__circle",x:a,y:s,radius:6,onPointerDown:j,fill:"var(--cmpui-primary-color)",strokeColor:"var(--cmpui-border-color)",strokeWidth:1})]})}T.__docgenInfo={description:"",methods:[],displayName:"CubicControls",props:{prev:{required:!0,tsType:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},description:""},cubic:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  type: "cubic";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"cubic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x2",value:{name:"number",required:!0}},{key:"y2",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(cubic: CubicCommand) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  type: "cubic";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"cubic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x2",value:{name:"number",required:!0}},{key:"y2",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},name:"cubic"}],return:{name:"void"}}},description:""}}};export{T as C};
