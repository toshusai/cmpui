import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as i}from"./index-CTjT7uj6.js";import{h as R}from"./index-3jSAGwTI.js";import{c as s}from"./index-WZGREwkT.js";import"./index.es-CljsIJ_K.js";import"./clamp-co6UzHBn.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-DRqqH17F.js";import"./index-Et-kLNzN.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-PmdniGp2.js";import"./index-B0aGP_7T.js";import"./index-DPLXiksS.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const ue={title:"Colors/ColorSlider",component:s},o={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:(1-e)*255,g:(1-e)*255,b:(1-e)*255,a:e},value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}})})}},n={render:function(){const[e,t]=i.useState(.5),v=i.useMemo(()=>{const{r:S,g:C,b:x}=R({h:e*360,s:1,v:1});return{r:S,g:C,b:x,a:1}},[e]);return r.jsx(s,{color:v,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"}})})}},a={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:e*255,g:0,b:0,a:1},height:32,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, black, red)"}})})}};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const le=["Default","Hue","HeightAndNobSize"];export{o as Default,a as HeightAndNobSize,n as Hue,le as __namedExportsOrder,ue as default};
