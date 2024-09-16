import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{u as V}from"./index.es-H_zVnTIh.js";import{c as s}from"./index-UxT1lfTJ.js";import"./index-BTgGIVd4.js";import"./classNames-CN4lTu6a.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";const oe={title:"Colors/ColorSlider",component:s},n={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:(1-e)*255,g:(1-e)*255,b:(1-e)*255,a:e},value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}})})}},o={render:function(){const[e,t]=i.useState(.5),v=i.useMemo(()=>{const{r:S,g:C,b:x}=V({h:e*360,s:1,v:1});return{r:S,g:C,b:x,a:1}},[e]);return r.jsx(s,{color:v,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"}})})}},a={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:e*255,g:0,b:0,a:1},height:32,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, black, red)"}})})}};var l,m,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(0.5);
    return <ColorSlider color={{
      r: (1 - value) * 255,
      g: (1 - value) * 255,
      b: (1 - value) * 255,
      a: value
    }} value={value} onChange={setValue} bg={<div style={{
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
    }} />} />;
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(0.5);
    const color = useMemo(() => {
      const {
        r,
        g,
        b
      } = hsvToRgb({
        h: value * 360,
        s: 1,
        v: 1
      });
      return {
        r,
        g,
        b,
        a: 1
      };
    }, [value]);
    return <ColorSlider color={color} value={value} onChange={setValue} bg={<div style={{
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
    }} />} />;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(0.5);
    return <ColorSlider color={{
      r: value * 255,
      g: 0,
      b: 0,
      a: 1
    }} height={32} value={value} onChange={setValue} bg={<div style={{
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(to right, black, red)"
    }} />} />;
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ae=["Default","Hue","HeightAndNobSize"];export{n as Default,a as HeightAndNobSize,o as Hue,ae as __namedExportsOrder,oe as default};
