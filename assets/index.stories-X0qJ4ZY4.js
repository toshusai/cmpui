import{j as l}from"./jsx-runtime-DvLKfCe6.js";import{r as e}from"./index-aXz8NaAs.js";import{S as n}from"./index-9yJ7Vv-H.js";import"./createDragHandler-nJMxlNVC.js";import"./clamp-xqaTU5Qn.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-AYEmu2YI.js";import"./index-U9bU_qbB.js";const E={title:"Colors/SVPicker",component:n},t={render:function(){const[s,u]=e.useState(1),[i,m]=e.useState(1);return l.jsx(n,{hue:0,onChange:(c,p)=>{u(c),m(p)},saturation:s,value:i})}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);
    return <SVPicker hue={0} onChange={(s, v) => {
      setSaturation(s);
      setValue(v);
    }} saturation={saturation} value={value} />;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,E as default};
