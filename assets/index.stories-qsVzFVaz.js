import{j as a}from"./jsx-runtime-DvLKfCe6.js";import{r as o}from"./index-aXz8NaAs.js";import{T as n}from"./index-mYLZ1MSy.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-9yJ7Vv-H.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-qwq-PmEO.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const xe={title:"Form/TextInput",component:n,args:{label:"Label"}},s={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",placeholder:"Placeholder",value:e,onChange:r=>t(r.target.value)})}},u={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",id:"text-input-label",value:e,onChange:r=>t(r.target.value)})}},i={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"",placeholder:"Placeholder",value:e,onChange:r=>t(r.target.value)})}},p={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",prefix:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",style:{maxWidth:16,height:16},children:[a.jsx("title",{children:"search"}),a.jsx("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"})]}),value:e,onChange:r=>t(r.target.value)})}},c={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",value:e,onChange:r=>t(r.target.value),disabled:!0})}},m={render:function(){const[e,t]=o.useState("");return a.jsx(n,{label:"Label",value:e,onChange:r=>t(r.target.value),invalid:!0})}};var d,v,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,I,P;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" value={value} onChange={event => setValue(event.target.value)} invalid />;
  }
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const be=["Basic","Label","Placeholder","Suffix","Disabled","Invalid"];export{s as Basic,c as Disabled,m as Invalid,u as Label,i as Placeholder,p as Suffix,be as __namedExportsOrder,xe as default};
