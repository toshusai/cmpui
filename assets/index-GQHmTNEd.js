import{j as q}from"./jsx-runtime-DtaoT6pD.js";import{R as r,r as g}from"./index-OjgoNOWw.js";function h({commands:i,onClickCurve:k,onChange:$,...y}){const n=r.useRef(null),[s,l]=r.useState(0),[o,b]=r.useState(0),[t,v]=r.useState(0),[a,p]=r.useState(0),u=4;g.useEffect(()=>{if(!n.current)return;const e=n.current.getBBox();l(e.x-u),b(e.y-u),v(e.width+u*2),p(e.height+u*2)},[n.current,l,b,v,p]);function d(e){switch(e.type){case"move":return`M ${e.x} ${e.y}`;case"line":return`L ${e.x} ${e.y}`;case"quadratic":return`Q ${e.x1} ${e.y1} ${e.x} ${e.y}`;case"cubic":return`C ${e.x1} ${e.y1} ${e.x2} ${e.y2} ${e.x} ${e.y}`}}return q.jsx("svg",{...y,width:t,height:a,style:{position:"absolute",left:s,top:o,width:t,height:a,...y.style},viewBox:`${s} ${o} ${t} ${a}`,className:"cmpui_curve-controls-svg",ref:n,children:i.map((e,c)=>{let m=d(e);const x=i[c-1];return x&&(m=`${d(x)} ${m}`),q.jsx("path",{d:m,strokeWidth:1,fill:"none",onClick:k},c)})})}h.__docgenInfo={description:"",methods:[],displayName:"Path",props:{commands:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| MoveCommand
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"quadratic"',required:!0}},{key:"x1",value:{name:"number",required:!0}},{key:"y1",value:{name:"number",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}]}],raw:"Command[]"},name:"commands"}],return:{name:"void"}}},description:""}}};export{h as P};
