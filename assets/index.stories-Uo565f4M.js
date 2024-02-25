import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{r as o}from"./index-OjgoNOWw.js";import{S as t}from"./index-8i7E8DJg.js";import{I as x}from"./Icon-znzPB4bR.js";const y={title:"Components/Form/Switch",component:t},c={render:function(){const[e,s]=o.useState(!1);return n.jsx(t,{id:"switch",label:"Label",checked:e,onChange:s})}},r={render:function(){const[e,s]=o.useState(!1);return n.jsx(t,{label:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n.jsx(x,{style:{fontSize:16},name:"star"}),n.jsx("div",{children:"Custom Label"})]}),id:"switch-label",checked:e,onChange:s})}},a={render:function(){const[e,s]=o.useState(!1);return n.jsx(t,{label:"Label",id:"switch-disabled",disabled:!0,checked:e,onChange:s})}},d={render:function(){const[e,s]=o.useState(!0);return n.jsx(t,{label:"Label",id:"switch-checked",checked:e,onChange:s})}};var l,h,u;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Switch id="switch" label="Label" checked={checked} onChange={setChecked} />;
  }
}`,...(u=(h=c.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,k,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Switch label={<div style={{
      display: "flex",
      alignItems: "center",
      gap: 4
    }}>
            <Icon style={{
        fontSize: 16
      }} name="star" />
            <div>Custom Label</div>
          </div>} id="switch-label" checked={checked} onChange={setChecked} />;
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var b,C,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Switch label="Label" id="switch-disabled" disabled checked={checked} onChange={setChecked} />;
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,g,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <Switch label="Label" id="switch-checked" checked={checked} onChange={setChecked} />;
  }
}`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const I=["Basic","Label","Disabled","Checked"];export{c as Basic,d as Checked,a as Disabled,r as Label,I as __namedExportsOrder,y as default};
