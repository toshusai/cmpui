import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{b as i}from"./index-D64P4ZQh.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CtLoJ3yA.js";import"./index-DPLXiksS.js";import"./index-OFk5bV51.js";import"./clamp-co6UzHBn.js";import"./index-Bm9F_wyz.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const rt={title:"Colors/ColorPickerRect",component:i},o={render:function(){const[p,n]=r.useState(.5),[m,u]=r.useState(.5),[c,l]=r.useState(0),[h,S]=r.useState(1);return d.jsx(i,{hue:c,onChange:t=>{l(t.h),n(t.s),u(t.v),S(t.a)},alpha:h,saturation:p,value:m})}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: function Render() {
    const [saturation, setSaturation] = useState(0.5);
    const [value, setValue] = useState(0.5);
    const [hue, setHue] = useState(0);
    const [alpha, setAlpha] = useState(1);
    return <ColorPickerRect hue={hue} onChange={hsva => {
      setHue(hsva.h);
      setSaturation(hsva.s);
      setValue(hsva.v);
      setAlpha(hsva.a);
    }} alpha={alpha} saturation={saturation} value={value} />;
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const ot=["Default"];export{o as Default,ot as __namedExportsOrder,rt as default};
