import{j as S}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{a as i,h as f}from"./index-Cx5NK2RL.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CGxoC811.js";import"./index-DPLXiksS.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-CFrbT9h8.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-CqZgG2wf.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-BjZLtUHc.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const at={title:"Colors/ColorPickerCircle",component:i},r={render:function(){const e=f("#c649ba"),[p,m]=t.useState(e.s),[u,c]=t.useState(e.v),[h,l]=t.useState(e.h),[v,C]=t.useState(e.a),d=t.useCallback(o=>{l(o.h),m(o.s),c(o.v),C(o.a)},[]);return S.jsx(i,{hue:h,onChange:d,alpha:v,saturation:p,value:u})}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const hsv = hexToHsv("#c649ba");
    const [saturation, setSaturation] = useState(hsv.s);
    const [value, setValue] = useState(hsv.v);
    const [hue, setHue] = useState(hsv.h);
    const [alpha, setAlpha] = useState(hsv.a);
    const handleChange = useCallback((hsva: HSVA) => {
      setHue(hsva.h);
      setSaturation(hsva.s);
      setValue(hsva.v);
      setAlpha(hsva.a);
    }, []);
    return <ColorPickerCircle hue={hue} onChange={handleChange} alpha={alpha} saturation={saturation} value={value} />;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const st=["Default"];export{r as Default,st as __namedExportsOrder,at as default};
