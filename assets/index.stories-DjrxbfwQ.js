import{j as d}from"./jsx-runtime-DEdD30eg.js";import{r as e}from"./index-RYns6xqu.js";import{b as i}from"./index-UxT1lfTJ.js";import"./index-BTgGIVd4.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";const Z={title:"Colors/ColorPickerRect",component:i},r={render:function(){const[p,n]=e.useState(.5),[m,u]=e.useState(.5),[c,l]=e.useState(0),[h,S]=e.useState(1);return d.jsx(i,{hue:c,onChange:t=>{l(t.h),n(t.s),u(t.v),S(t.a)},alpha:h,saturation:p,value:m})}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,Z as default};
