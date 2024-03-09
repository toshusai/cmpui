import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{r as i}from"./index-OjgoNOWw.js";import{c as s}from"./index-Sz03Oaaf.js";import{h as R}from"./index-THzmRLjR.js";/* empty css               */import"./index-2g1hGOAV.js";import"./createDragHandler-x_VoadIT.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./index-bDPzi3wY.js";import"./alpha-checker-board-4wBnyHDu.js";import"./index-GtgdPI8D.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./index-McrItdRX.js";import"./index-hC_OXdTA.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-oGaVDTzA.js";import"./index-GQHmTNEd.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-ySLf1xQK.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-8SWbSIpv.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-Uw5HcGO4.js";import"./index-94KwZlX1.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const le={title:"Colors/ColorSlider",component:s},o={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:(1-e)*255,g:(1-e)*255,b:(1-e)*255,a:e},value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}})})}},n={render:function(){const[e,t]=i.useState(.5),v=i.useMemo(()=>{const{r:S,g:C,b:x}=R({h:e*360,s:1,v:1});return{r:S,g:C,b:x,a:1}},[e]);return r.jsx(s,{color:v,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"}})})}},a={render:function(){const[e,t]=i.useState(.5);return r.jsx(s,{color:{r:e*255,g:0,b:0,a:1},height:32,value:e,onChange:t,bg:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:"linear-gradient(to right, black, red)"}})})}};var m,l,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ge=["Default","Hue","HeightAndNobSize"];export{o as Default,a as HeightAndNobSize,n as Hue,ge as __namedExportsOrder,le as default};
