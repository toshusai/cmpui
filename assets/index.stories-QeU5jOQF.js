import{j as d}from"./jsx-runtime-DtaoT6pD.js";import{r}from"./index-OjgoNOWw.js";import{b as i}from"./index-EiZappTy.js";/* empty css               */import"./index-2g1hGOAV.js";import"./createDragHandler-x_VoadIT.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./index-bDPzi3wY.js";import"./alpha-checker-board-4wBnyHDu.js";import"./index-GtgdPI8D.js";import"./index-THzmRLjR.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-6uWyxtkv.js";import"./index-hC_OXdTA.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-LzLkVWF6.js";import"./index-rAFazk-7.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-ySLf1xQK.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-8SWbSIpv.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-Uw5HcGO4.js";import"./index-94KwZlX1.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const at={title:"Colors/ColorPickerRect",component:i},o={render:function(){const[p,m]=r.useState(.5),[n,u]=r.useState(.5),[c,l]=r.useState(0),[h,S]=r.useState(1);return d.jsx(i,{hue:c,onChange:t=>{l(t.h),m(t.s),u(t.v),S(t.a)},alpha:h,saturation:p,value:n})}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
