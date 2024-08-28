import{j as k}from"./jsx-runtime-Cw0GR0a5.js";import{R as t,r as $}from"./index-CTjT7uj6.js";function g({commands:o,onClickCurve:h,...l}){const n=t.useRef(null),[v,c]=t.useState(0),[b,p]=t.useState(0),[a,x]=t.useState(0),[i,d]=t.useState(0),u=4;function f(e){switch(e.type){case"move":return`M ${e.x} ${e.y}`;case"line":return`L ${e.x} ${e.y}`;case"quadratic":return`Q ${e.x1} ${e.y1} ${e.x} ${e.y}`;case"cubic":return`C ${e.x1} ${e.y1} ${e.x2} ${e.y2} ${e.x} ${e.y}`}}const s=t.useRef([]);return $.useEffect(()=>{const e=new ResizeObserver(()=>{if(n.current){const r=n.current.getBBox();c(r.x-u),p(r.y-u),x(r.width+u*2),d(r.height+u*2)}});return s.current.forEach(r=>{e.observe(r)}),()=>{e.disconnect()}},[c,p,x,d,s,n]),k.jsx("svg",{...l,width:a,height:i,style:{position:"absolute",overflow:"visible",left:v,top:b,width:a,height:i,...l.style},viewBox:`${v} ${b} ${a} ${i}`,className:"cmpui_curve-controls-svg",ref:n,children:o.map((e,r)=>{let y=f(e);const q=o[r-1];return q&&(y=`${f(q)} ${y}`),k.jsx("path",{d:y,strokeWidth:1,fill:"none",onClick:h,ref:m=>{m&&(s.current[r]=m)}},r)})})}g.__docgenInfo={description:"",methods:[],displayName:"Path",props:{commands:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| MoveCommand
| CubicCommand
| LineCommand
| QuadraticCommand`,elements:[{name:"signature",type:"object",raw:`{
  type: "move";
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"move"',required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "cubic";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"cubic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x2",value:{name:"number",required:!0}},{key:"y2",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "line";
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"line"',required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: "quadratic";
  x1: number;
  y1: number;
  x: number;
  y: number;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"quadratic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}]}],raw:"Command[]"},description:""},onClickCurve:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGPathElement>",elements:[{name:"SVGPathElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{g as P};
