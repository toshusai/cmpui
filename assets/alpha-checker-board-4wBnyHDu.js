import{j as z}from"./jsx-runtime-DtaoT6pD.js";import{r}from"./index-OjgoNOWw.js";import{c as O}from"./createDragHandler-x_VoadIT.js";function _(o,f,l,i){r.useEffect(()=>{if(o.current!==null)return o.current.addEventListener(f,l,i),()=>{o.current!==null&&o.current.removeEventListener(f,l)}},[i,l,f,o])}function V({mouseZoomScale:o=.04,trackPadZoomScale:f=-.02,trackPadMoveScaleX:l=1,trackPadMoveScaleY:i=1,pointerDownZoomScale:g=100,minScale:y,maxScale:b,children:E,content:N,view:e,mode:a,onChangeView:c,style:q,...P}){const m=r.useRef(null),[x,u]=r.useState("auto"),R=r.useRef(a),d=r.useCallback((t,n,p)=>{var k;if(!m.current)return;let s=1+p/200;const Y=m.current.getBoundingClientRect();if(!((k=m.current.parentElement)==null?void 0:k.getBoundingClientRect()))return;const C=t-Y.left,M=n-Y.top,T=C-e.x,X=M-e.y;b!==void 0&&e.scale*s>b?s=b/e.scale:y!==void 0&&e.scale*s<y&&(s=y/e.scale),c({x:e.x+T-T*s,y:e.y+X-X*s,scale:e.scale*s})},[e,c,b,y]);_(m,"wheel",r.useCallback(t=>{const n=Number.isInteger(t.deltaY),p=t.ctrlKey||t.metaKey;if(n&&!p){c({x:e.x-t.deltaX*l,y:e.y-t.deltaY*i,scale:e.scale}),t.preventDefault();return}d(t.clientX,t.clientY,-t.deltaY),t.preventDefault()},[e,c,d,i,l]),r.useMemo(()=>({passive:!1}),[])),r.useEffect(()=>{u(a==="pan"?"grab":a==="zoom-in"?"zoom-in":a==="zoom-out"?"zoom-out":"auto"),R.current=a},[a]);const v=r.useMemo(()=>O({onDown:t=>a!=="pan"?!1:(u("grabbing"),{startX:t.clientX,startY:t.clientY,startOSX:e.x,startOSY:e.y}),onMove:(t,n)=>{if(n===void 0)return;const p=n.startX-t.clientX,s=n.startY-t.clientY;c({x:n.startOSX-p,y:n.startOSY-s,scale:e.scale})},onUp:()=>{R.current==="pan"?u("grab"):u("auto")}}),[a,e,c]),j=r.useCallback(t=>{a==="zoom-in"?d(t.pageX,t.pageY,g):a==="zoom-out"?d(t.pageX,t.pageY,-g):v(t)},[a,v,g,d]),D=r.useMemo(()=>({position:"absolute",pointerEvents:"none",transformOrigin:"0 0",top:`${e.y}px`,left:`${e.x}px`,transform:`scale(${e.scale})`}),[e.x,e.y,e.scale]),S=r.useMemo(()=>({cursor:x,...q}),[x,q]);return z.jsxs("div",{className:"cmpui_canvas-view__root",tabIndex:-1,ref:m,onPointerDown:j,style:S,...P,children:[z.jsx("div",{style:D,children:N}),E]})}V.__docgenInfo={description:"",methods:[],displayName:"CanvasView",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChangeView:{required:!0,tsType:{name:"signature",type:"function",raw:"(view: View) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  scale: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"scale",value:{name:"number",required:!0}}]}},name:"view"}],return:{name:"void"}}},description:""},view:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  scale: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"scale",value:{name:"number",required:!0}}]}},description:""},mode:{required:!1,tsType:{name:"union",raw:'"pan" | "zoom-in" | "zoom-out" | "default"',elements:[{name:"literal",value:'"pan"'},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'},{name:"literal",value:'"default"'}]},description:""},minScale:{required:!1,tsType:{name:"number"},description:""},maxScale:{required:!1,tsType:{name:"number"},description:""},mouseZoomScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},trackPadZoomScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-0.02",computed:!1}},trackPadMoveScaleX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},trackPadMoveScaleY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},pointerDownZoomScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}};export{V as C};
