import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as p}from"./index-OjgoNOWw.js";import{T as i}from"./index-mnqn6aXF.js";import{B as l}from"./index-bDPzi3wY.js";import"./index-Eok78svH.js";import"./index-mQqIOHEI.js";import"./index-wq2dZbDE.js";import"./index-F4RL_6mv.js";import"./index-Nn85PjCb.js";import"./index-hC_OXdTA.js";import"./classNames-pTwYsIK_.js";const C={title:"Components/Float/Toast",component:i,parameters:{layout:"fullscreen"}},n={render:function(){const[a,t]=p.useState(!1);return e.jsxs("div",{style:{width:"100vw",height:300,justifyContent:"center",alignItems:"center",display:"flex"},children:[e.jsx(l,{onClick:()=>t(!0),children:"Open"}),e.jsx(i,{open:a,onOpenChange:t,children:e.jsx("div",{style:{padding:8},children:"Hello World"})})]})}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div style={{
      width: "100vw",
      height: 300,
      justifyContent: "center",
      alignItems: "center",
      display: "flex"
    }}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div style={{
          padding: 8
        }}>
            Hello World
          </div>
        </Toast>
      </div>;
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["Basic"];export{n as Basic,B as __namedExportsOrder,C as default};
