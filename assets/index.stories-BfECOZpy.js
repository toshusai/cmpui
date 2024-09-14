import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{r as e}from"./index-CTjT7uj6.js";import{S as n}from"./index-3jSAGwTI.js";import"./index.es-CljsIJ_K.js";import"./clamp-co6UzHBn.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-DRqqH17F.js";import"./index-Et-kLNzN.js";const E={title:"Colors/SVPicker",component:n},t={render:function(){const[s,u]=e.useState(1),[i,m]=e.useState(1);return l.jsx(n,{hue:0,onChange:(c,p)=>{u(c),m(p)},saturation:s,value:i})}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);
    return <SVPicker hue={0} onChange={(s, v) => {
      setSaturation(s);
      setValue(v);
    }} saturation={saturation} value={value} />;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,E as default};
