import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as o}from"./index-CTjT7uj6.js";import{T as n}from"./index-Cx5NK2RL.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CGxoC811.js";import"./index-DPLXiksS.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-CFrbT9h8.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-CqZgG2wf.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-BjZLtUHc.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const ge={title:"Form/TextInput",component:n,args:{label:"Label"}},s={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",placeholder:"Placeholder",value:e,onChange:r=>t(r.target.value)})}},u={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",id:"text-input-label",value:e,onChange:r=>t(r.target.value)})}},i={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"",placeholder:"Placeholder",value:e,onChange:r=>t(r.target.value)})}},p={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",prefix:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",style:{maxWidth:16,height:16},children:[a.jsx("title",{children:"search"}),a.jsx("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"})]}),value:e,onChange:r=>t(r.target.value)})}},c={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",value:e,onChange:r=>t(r.target.value),disabled:!0})}},d={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",value:e,onChange:r=>t(r.target.value),invalid:!0})}};var m,v,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" placeholder="Placeholder" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,x,b;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" id="text-input-label" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(b=(x=u.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,f,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="" placeholder="Placeholder" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var q,V,L;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" prefix={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style={{
      maxWidth: 16,
      height: 16
    }}>
            <title>search</title>
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>} value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var R,w,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" value={value} onChange={event => setValue(event.target.value)} disabled />;
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,I,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" value={value} onChange={event => setValue(event.target.value)} invalid />;
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const he=["Basic","Label","Placeholder","Suffix","Disabled","Invalid"];export{s as Basic,c as Disabled,d as Invalid,u as Label,i as Placeholder,p as Suffix,he as __namedExportsOrder,ge as default};
