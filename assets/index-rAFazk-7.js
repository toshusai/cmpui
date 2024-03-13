import{j as g}from"./jsx-runtime-DtaoT6pD.js";import{R as n,r as h}from"./index-OjgoNOWw.js";function w({commands:l,onClickCurve:f,onChange:$,...o}){const u=n.useRef(null),[b,v]=n.useState(0),[p,d]=n.useState(0),[a,c]=n.useState(0),[i,x]=n.useState(0),t=4;function q(e){switch(e.type){case"move":return`M ${e.x} ${e.y}`;case"line":return`L ${e.x} ${e.y}`;case"quadratic":return`Q ${e.x1} ${e.y1} ${e.x} ${e.y}`;case"cubic":return`C ${e.x1} ${e.y1} ${e.x2} ${e.y2} ${e.x} ${e.y}`}}const m=n.useRef([]);return h.useEffect(()=>{const e=new ResizeObserver(()=>{if(u.current){const r=u.current.getBBox();v(r.x-t),d(r.y-t),c(r.width+t*2),x(r.height+t*2)}});return m.current.forEach(r=>{e.observe(r)}),()=>{e.disconnect()}},[v,d,c,x,m,u]),g.jsx("svg",{...o,width:a,height:i,style:{position:"absolute",overflow:"visible",left:b,top:p,width:a,height:i,...o.style},viewBox:`${b} ${p} ${a} ${i}`,className:"cmpui_curve-controls-svg",ref:u,children:l.map((e,r)=>{let y=q(e);const k=l[r-1];return k&&(y=`${q(k)} ${y}`),g.jsx("path",{d:y,strokeWidth:1,fill:"none",onClick:f,ref:s=>{s&&(m.current[r]=s)}},r)})})}w.__docgenInfo={description:"",methods:[],displayName:"Path",props:{commands:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| MoveCommand
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"quadratic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}]}],raw:"Command[]"},description:""},onClickCurve:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<SVGPathElement>",elements:[{name:"SVGPathElement"}]},name:"event"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(commands: Command[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| MoveCommand
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"quadratic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}]}],raw:"Command[]"},name:"commands"}],return:{name:"void"}}},description:""}}};export{w as P};
