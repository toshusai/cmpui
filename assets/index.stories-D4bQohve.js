import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{b as i}from"./index-WZGREwkT.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-PmdniGp2.js";import"./index.es-CljsIJ_K.js";import"./index-B0aGP_7T.js";import"./index-DPLXiksS.js";import"./index-3jSAGwTI.js";import"./clamp-co6UzHBn.js";import"./index-DRqqH17F.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const ot={title:"Colors/ColorPickerRect",component:i},o={render:function(){const[p,m]=r.useState(.5),[n,u]=r.useState(.5),[c,l]=r.useState(0),[h,S]=r.useState(1);return d.jsx(i,{hue:c,onChange:t=>{l(t.h),m(t.s),u(t.v),S(t.a)},alpha:h,saturation:p,value:n})}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const et=["Default"];export{o as Default,et as __namedExportsOrder,ot as default};
