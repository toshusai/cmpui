import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as i}from"./index-CTjT7uj6.js";import{c as s}from"./index-JHoNq4V6.js";import{h as R}from"./index-Bk7gfChQ.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./alpha-checker-board-C272x69B.js";import"./index-CI0rqRLE.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-D9nq7hlE.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-yHTTKtaV.js";import"./index-CZ1B-fWX.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-Cfq5nsaS.js";import"./index-DpTo7KKv.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const se={title:"Colors/ColorSlider",component:s},o={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:(1-e)*255,g:(1-e)*255,b:(1-e)*255,a:e},value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}})})}},n={render:function(){const[e,t]=i.useState(.5),v=i.useMemo(()=>{const{r:S,g:C,b:x}=R({h:e*360,s:1,v:1});return{r:S,g:C,b:x,a:1}},[e]);return r.jsx(s,{color:v,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"}})})}},a={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:e*255,g:0,b:0,a:1},height:32,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, black, red)"}})})}};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ue=["Default","Hue","HeightAndNobSize"];export{o as Default,a as HeightAndNobSize,n as Hue,ue as __namedExportsOrder,se as default};
