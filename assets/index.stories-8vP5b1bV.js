import{j as S}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{a as i,h as f}from"./index-D64P4ZQh.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CtLoJ3yA.js";import"./index-DPLXiksS.js";import"./index-OFk5bV51.js";import"./clamp-co6UzHBn.js";import"./index-Bm9F_wyz.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const at={title:"Colors/ColorPickerCircle",component:i},r={render:function(){const e=f("#c649ba"),[p,m]=t.useState(e.s),[u,c]=t.useState(e.v),[h,l]=t.useState(e.h),[v,C]=t.useState(e.a),d=t.useCallback(o=>{l(o.h),m(o.s),c(o.v),C(o.a)},[]);return S.jsx(i,{hue:h,onChange:d,alpha:v,saturation:p,value:u})}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
