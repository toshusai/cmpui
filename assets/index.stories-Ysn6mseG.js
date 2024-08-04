import{j as d}from"./jsx-runtime-DvLKfCe6.js";import{r}from"./index-aXz8NaAs.js";import{b as i}from"./index-yf8mkK-1.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const at={title:"Colors/ColorPickerRect",component:i},o={render:function(){const[p,m]=r.useState(.5),[n,u]=r.useState(.5),[c,l]=r.useState(0),[h,S]=r.useState(1);return d.jsx(i,{hue:c,onChange:t=>{l(t.h),m(t.s),u(t.v),S(t.a)},alpha:h,saturation:p,value:n})}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const st=["Default"];export{o as Default,st as __namedExportsOrder,at as default};
