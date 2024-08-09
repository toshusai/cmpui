import{j as r}from"./jsx-runtime-DvLKfCe6.js";import{r as i}from"./index-aXz8NaAs.js";import{c as s}from"./index-mYLZ1MSy.js";import{h as R}from"./index-9yJ7Vv-H.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-qwq-PmEO.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const le={title:"Colors/ColorSlider",component:s},o={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:(1-e)*255,g:(1-e)*255,b:(1-e)*255,a:e},value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}})})}},n={render:function(){const[e,t]=i.useState(.5),v=i.useMemo(()=>{const{r:S,g:C,b:x}=R({h:e*360,s:1,v:1});return{r:S,g:C,b:x,a:1}},[e]);return r.jsx(s,{color:v,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"}})})}},a={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:e*255,g:0,b:0,a:1},height:32,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, black, red)"}})})}};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const me=["Default","Hue","HeightAndNobSize"];export{o as Default,a as HeightAndNobSize,n as Hue,me as __namedExportsOrder,le as default};
