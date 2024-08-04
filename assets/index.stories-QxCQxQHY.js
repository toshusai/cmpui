import{j as S}from"./jsx-runtime-DvLKfCe6.js";import{r as t}from"./index-aXz8NaAs.js";import{a as i,h as f}from"./index-yf8mkK-1.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const it={title:"Colors/ColorPickerCircle",component:i},r={render:function(){const o=f("#c649ba"),[p,m]=t.useState(o.s),[u,c]=t.useState(o.v),[h,l]=t.useState(o.h),[v,C]=t.useState(o.a),d=t.useCallback(e=>{l(e.h),m(e.s),c(e.v),C(e.a)},[]);return S.jsx(i,{hue:h,onChange:d,alpha:v,saturation:p,value:u})}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const pt=["Default"];export{r as Default,pt as __namedExportsOrder,it as default};
