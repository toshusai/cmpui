import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{G as p}from"./index-CtqMlwW_.js";import{R as s}from"./index-jyJWYchm.js";import"./classNames-CN4lTu6a.js";import"./index.es-H_zVnTIh.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./createDragHandler-DDNYS428.js";const R={title:"Controls/RectGizmo",component:s,parameters:{layout:"fullscreen"}},t={render:function(){const[i,a]=c.useState({scale:{x:1,y:1},rotation:0,position:{x:100,y:100},origin:{x:10,y:50},width:100,height:100});return n.jsxs("div",{style:{width:"100%",height:512,position:"relative"},children:[n.jsx(p,{sizeX:50,sizeY:50,offsetX:0,offsetY:0}),n.jsx(s,{...i,onChange:m=>a(m)})]})}};var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [transform, setTransform] = useState({
      scale: {
        x: 1,
        y: 1
      },
      rotation: 0,
      position: {
        x: 100,
        y: 100
      },
      origin: {
        x: 10,
        y: 50
      },
      width: 100,
      height: 100
    });
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo {...transform} onChange={v => setTransform(v)} />
      </div>;
  }
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const G=["Basic"];export{t as Basic,G as __namedExportsOrder,R as default};
