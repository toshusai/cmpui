import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as e}from"./index-CTjT7uj6.js";import{G as p}from"./index-D9aJJu6P.js";import{R as h}from"./index-CDx_o3yU.js";import"./classNames-CN4lTu6a.js";import"./index-BAejv6NV.js";import"./px-DWM1exbb.js";import"./createDragHandler-DDNYS428.js";const N={title:"Controls/RectGizmo",component:h,parameters:{layout:"fullscreen"}},u={render:function(){const s={x:50,y:50},[n,i]=e.useState({x:200,y:200}),[o,a]=e.useState(1),[r,c]=e.useState(1),[l,g]=e.useState(0);return t.jsxs("div",{style:{width:"100%",height:512,position:"relative"},children:[t.jsx(p,{sizeX:50,sizeY:50,offsetX:0,offsetY:0}),t.jsx(h,{angle:l,onChangeAngle:g,position:n,origin:s,scaleX:o,setScaleX:a,scaleY:r,setScaleY:c,width:100,height:200,setPosition:i,canResize:!0,canRotate:!0,showOrigin:!0})]})}},d={render:function(){const s={x:.5,y:.5},[n,i]=e.useState({x:200,y:200}),[o,a]=e.useState(200),[r,c]=e.useState(200),[l,g]=e.useState(0);return t.jsxs("div",{style:{width:"100%",height:512,position:"relative"},children:[t.jsx(p,{sizeX:50,sizeY:50,offsetX:0,offsetY:0}),t.jsx(h,{angle:l,onChangeAngle:g,position:n,origin:s,scaleX:o,setScaleX:a,scaleY:r,setScaleY:c,width:1,height:1,setPosition:i,canResize:!0,canRotate:!0,showOrigin:!0})]})}},S={render:function(){const s={x:0,y:0},[n,i]=e.useState({x:200,y:200}),[o,a]=e.useState(1),[r,c]=e.useState(1),[l,g]=e.useState(0);return t.jsxs("div",{style:{width:"100%",height:512,position:"relative"},children:[t.jsx(p,{sizeX:50,sizeY:50,offsetX:0,offsetY:0}),t.jsx(h,{angle:l,onChangeAngle:g,setPosition:i,position:n,origin:s,scaleX:o,setScaleX:a,scaleY:r,setScaleY:c,width:100,height:200,canResize:!0,canRotate:!0,showOrigin:!0})]})}};var m,X,Y;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const origin = {
      x: 50,
      y: 50
    };
    const [position, setPosition] = useState({
      x: 200,
      y: 200
    });
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [angle, setAngle] = useState(0);
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo angle={angle} onChangeAngle={setAngle} position={position} origin={origin} scaleX={scaleX} setScaleX={setScaleX} scaleY={scaleY} setScaleY={setScaleY} width={100} height={200} setPosition={setPosition} canResize canRotate showOrigin />
      </div>;
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,x,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function Render() {
    const origin = {
      x: 0.5,
      y: 0.5
    };
    const [position, setPosition] = useState({
      x: 200,
      y: 200
    });
    const [scaleX, setScaleX] = useState(200);
    const [scaleY, setScaleY] = useState(200);
    const [angle, setAngle] = useState(0);
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo angle={angle} onChangeAngle={setAngle} position={position} origin={origin} scaleX={scaleX} setScaleX={setScaleX} scaleY={scaleY} setScaleY={setScaleY} width={1} height={1} setPosition={setPosition} canResize canRotate showOrigin />
      </div>;
  }
}`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var y,w,v;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render() {
    const origin = {
      x: 0,
      y: 0
    };
    const [position, setPosition] = useState({
      x: 200,
      y: 200
    });
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [angle, setAngle] = useState(0);
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo angle={angle} onChangeAngle={setAngle} setPosition={setPosition} position={position} origin={origin} scaleX={scaleX} setScaleX={setScaleX} scaleY={scaleY} setScaleY={setScaleY} width={100} height={200} canResize canRotate showOrigin />
      </div>;
  }
}`,...(v=(w=S.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const _=["Basic","NormalizedSize","CornerOrigin"];export{u as Basic,S as CornerOrigin,d as NormalizedSize,_ as __namedExportsOrder,N as default};
