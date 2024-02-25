import{j as l}from"./jsx-runtime-DtaoT6pD.js";import{r as e}from"./index-OjgoNOWw.js";import{S as n}from"./index-THzmRLjR.js";import"./createDragHandler-x_VoadIT.js";import"./clamp-xqaTU5Qn.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-3ZWm4lKU.js";import"./index-cYjXm3u-.js";import"./useTouchStartPrevent-SoOiKono.js";const P={title:"Components/Colors/SVPicker",component:n},t={render:function(){const[s,u]=e.useState(1),[i,m]=e.useState(1);return l.jsx(n,{hue:0,onChange:(p,c)=>{u(p),m(c)},saturation:s,value:i})}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);
    return <SVPicker hue={0} onChange={(s, v) => {
      setSaturation(s);
      setValue(v);
    }} saturation={saturation} value={value} />;
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
