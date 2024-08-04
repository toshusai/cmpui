import{j as l}from"./jsx-runtime-DvLKfCe6.js";import{r as e}from"./index-aXz8NaAs.js";import{S as n}from"./index-btd8k4jy.js";import"./createDragHandler-nJMxlNVC.js";import"./clamp-xqaTU5Qn.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-AYEmu2YI.js";import"./index-U9bU_qbB.js";import"./useTouchStartPrevent-kBVXV8Ya.js";const P={title:"Colors/SVPicker",component:n},t={render:function(){const[s,u]=e.useState(1),[i,m]=e.useState(1);return l.jsx(n,{hue:0,onChange:(c,p)=>{u(c),m(p)},saturation:s,value:i})}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);
    return <SVPicker hue={0} onChange={(s, v) => {
      setSaturation(s);
      setValue(v);
    }} saturation={saturation} value={value} />;
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
