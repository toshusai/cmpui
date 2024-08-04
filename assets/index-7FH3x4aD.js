import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{r as m}from"./index-OjgoNOWw.js";import{c as T}from"./createDragHandler-nJMxlNVC.js";import{C as b}from"./index-pk5nlV7d.js";import{L as x}from"./index-cYjXm3u-.js";import{P as H}from"./index-rAFazk-7.js";function L({prev:l,cubic:u,onChange:e}){const{x1:a,y1:o,x2:s,y2:c,x:v,y:k}=u,{x:q,y:f}=l,d={type:"move",x:l.x,y:l.y},y=m.useCallback((t,r,D)=>T({onDown:i=>({x:i.clientX,y:i.clientY}),onMove:(i,p)=>{if(!p)return;const N=i.clientX-p.x,E=i.clientY-p.y,M=t+N,W=r+E;D(M,W)}}),[]),_=m.useMemo(()=>y(a,o,(t,r)=>{e==null||e({...u,x1:t,y1:r})}),[u,a,o,e,y]),j=m.useMemo(()=>y(s,c,(t,r)=>{e==null||e({...u,x2:t,y2:r})}),[u,s,c,e,y]),w=m.useCallback(t=>{t.forEach(r=>{r.type==="cubic"&&(e==null||e(r))})},[e]),P=m.useMemo(()=>[d,u],[d,u]);return n.jsxs(n.Fragment,{children:[n.jsx(H,{commands:P,onChange:w,stroke:"var(--cmpui-primary-color)",style:{pointerEvents:"none"}}),n.jsx(x,{className:"cmpui_cubic-controls__line",strokeWidth:1,x1:q,y1:f,x2:a,y2:o}),n.jsx(x,{className:"cmpui_cubic-controls__line",strokeWidth:1,x1:v,y1:k,x2:s,y2:c}),n.jsx(b,{className:"cmpui_cubic-controls__circle",x:a,y:o,radius:6,onPointerDown:_,fill:"var(--cmpui-primary-color)",strokeColor:"var(--cmpui-border-color)",strokeWidth:1}),n.jsx(b,{className:"cmpui_cubic-controls__circle",x:s,y:c,radius:6,onPointerDown:j,fill:"var(--cmpui-primary-color)",strokeColor:"var(--cmpui-border-color)",strokeWidth:1})]})}L.__docgenInfo={description:"",methods:[],displayName:"CubicControls",props:{prev:{required:!0,tsType:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},description:""},cubic:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"cubic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x2",value:{name:"number",required:!0}},{key:"y2",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},name:"cubic"}],return:{name:"void"}}},description:""}}};export{L as C};
