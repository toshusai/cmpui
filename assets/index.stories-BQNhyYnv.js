import{j as S}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{s as f}from"./index.es-H_zVnTIh.js";import{a as i}from"./index-UxT1lfTJ.js";import"./index-BTgGIVd4.js";import"./classNames-CN4lTu6a.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";const et={title:"Colors/ColorPickerCircle",component:i},r={render:function(){const e=f("#c649ba"),[p,m]=t.useState(e.s),[u,c]=t.useState(e.v),[l,h]=t.useState(e.h),[v,C]=t.useState(e.a),d=t.useCallback(o=>{h(o.h),m(o.s),c(o.v),C(o.a)},[]);return S.jsx(i,{hue:l,onChange:d,alpha:v,saturation:p,value:u})}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ot=["Default"];export{r as Default,ot as __namedExportsOrder,et as default};
