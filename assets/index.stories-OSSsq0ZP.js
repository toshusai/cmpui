import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{r as h}from"./index-aXz8NaAs.js";import{R as r}from"./index-9ZytVVav.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./createDragHandler-nJMxlNVC.js";const P={title:"Controls/RectGizmo",component:r,parameters:{layout:"fullscreen"}},o={render:function(){const[t,n]=h.useState({x:256,y:256,width:100,height:50,angle:0});return e.jsx("div",{style:{width:"100%",height:512,position:"relative"},children:e.jsx(r,{angle:t.angle,width:t.width,height:t.height,x:t.x,y:t.y,onMove:i=>{n({...t,...i})},isResizable:!0,isRotatable:!0})})}},s={render:function(){const[t,n]=h.useState({x:256,y:256,width:100,height:50,angle:0});return e.jsx("div",{style:{width:"100%",height:512,position:"relative"},children:e.jsx(r,{angle:t.angle,width:t.width,height:t.height,x:t.x,y:t.y,nobRadius:4,onMove:i=>{n({...t,...i})},isResizable:!0,isRotatable:!0})})}},a={render:function(){const[t,n]=h.useState({x:256,y:256,width:100,height:50,angle:0});return e.jsxs("div",{style:{width:"100%",height:512,position:"relative"},children:[e.jsxs("div",{className:"cmpui_mono",style:{position:"absolute",fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',top:t.y-Math.abs(t.height)/2,left:t.x-Math.abs(t.width)/2,padding:8,boxSizing:"border-box",width:Math.abs(t.width),height:Math.abs(t.height),background:"rgba(0, 0, 0, 0.5)",transform:`rotate(${t.angle}rad) scale(${t.width>0?1:-1}, ${t.height>0?1:-1})`,transformOrigin:"center",color:"white",whiteSpace:"nowrap"},children:[e.jsxs("div",{children:["x: ",t.x.toFixed(2)]}),e.jsxs("div",{children:["y: ",t.y.toFixed(2)]}),e.jsxs("div",{children:["w: ",t.width.toFixed(2)]}),e.jsxs("div",{children:["h: ",t.height.toFixed(2)]}),e.jsxs("div",{children:["a: ",t.angle.toFixed(2)]})]}),e.jsx(r,{angle:t.angle,width:t.width,height:t.height,x:t.x,y:t.y,onMove:i=>{n({...t,...i})},isResizable:!0,isRotatable:!0})]})}};var p,l,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0
    });
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <RectGizmo angle={points.angle} width={points.width} height={points.height} x={points.x} y={points.y} onMove={args => {
        setPoints({
          ...points,
          ...args
        });
      }} isResizable isRotatable />
      </div>;
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0
    });
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <RectGizmo angle={points.angle} width={points.width} height={points.height} x={points.x} y={points.y} nobRadius={4} onMove={args => {
        setPoints({
          ...points,
          ...args
        });
      }} isResizable isRotatable />
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,w,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0
    });
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <div className="cmpui_mono" style={{
        position: "absolute",
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        top: points.y - Math.abs(points.height) / 2,
        left: points.x - Math.abs(points.width) / 2,
        padding: 8,
        boxSizing: "border-box",
        width: Math.abs(points.width),
        height: Math.abs(points.height),
        background: "rgba(0, 0, 0, 0.5)",
        transform: \`rotate(\${points.angle}rad) scale(\${points.width > 0 ? 1 : -1}, \${points.height > 0 ? 1 : -1})\`,
        transformOrigin: "center",
        color: "white",
        whiteSpace: "nowrap"
      }}>
          <div>x: {points.x.toFixed(2)}</div>
          <div>y: {points.y.toFixed(2)}</div>
          <div>w: {points.width.toFixed(2)}</div>
          <div>h: {points.height.toFixed(2)}</div>
          <div>a: {points.angle.toFixed(2)}</div>
        </div>
        <RectGizmo angle={points.angle} width={points.width} height={points.height} x={points.x} y={points.y} onMove={args => {
        setPoints({
          ...points,
          ...args
        });
      }} isResizable isRotatable />
      </div>;
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const N=["Basic","NobSize","Debug"];export{o as Basic,a as Debug,s as NobSize,N as __namedExportsOrder,P as default};
