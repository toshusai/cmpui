import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as d}from"./index-OjgoNOWw.js";import{C as n}from"./index-GtgdPI8D.js";import{I as L}from"./Icon-znzPB4bR.js";const I={title:"Form/Checkbox",component:n},s={render:function(){const[c,r]=d.useState(!1);return e.jsx(n,{label:"Label",checked:c,id:"checkbox-basic",onChange:r})}},a={render:function(){const[c,r]=d.useState(!0);return e.jsx(n,{checked:c,onChange:r,label:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(L,{style:{fontSize:16},name:"star"}),e.jsx("div",{children:"Custom Label"})]}),id:"checkbox-label"})}},t={render:()=>e.jsx(n,{label:"Label",id:"checkbox-disabled",disabled:!0})},o={render:function(){const[c,r]=d.useState(!0);return e.jsx(n,{label:"Label",id:"checkbox-checked",checked:c,onChange:r})}};var i,h,b;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="Label" checked={checked} id="checkbox-basic" onChange={setChecked} />;
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var u,k,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label={<div style={{
      display: "flex",
      alignItems: "center",
      gap: 4
    }}>
            <Icon style={{
        fontSize: 16
      }} name="star" />
            <div>Custom Label</div>
          </div>} id="checkbox-label" />;
  }
}`,...(m=(k=a.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var p,x,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox label="Label" id="checkbox-disabled" disabled />;
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,g,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <Checkbox label="Label" id="checkbox-checked" checked={checked} onChange={setChecked} />;
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const E=["Basic","Label","Disabled","Checked"];export{s as Basic,o as Checked,t as Disabled,a as Label,E as __namedExportsOrder,I as default};
