import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as e}from"./index-RYns6xqu.js";import{S as n}from"./index-CRBFmlc0.js";import"./index.es-H_zVnTIh.js";import"./index-Cw-4VH1H.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";const C={title:"Colors/SVPicker",component:n},t={render:function(){const[s,u]=e.useState(1),[i,c]=e.useState(1);return l.jsx(n,{hue:0,onChange:(m,p)=>{u(m),c(p)},saturation:s,value:i})}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);
    return <SVPicker hue={0} onChange={(s, v) => {
      setSaturation(s);
      setValue(v);
    }} saturation={saturation} value={value} />;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,C as default};
