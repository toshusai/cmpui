import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as p}from"./index-CTjT7uj6.js";import{B as l}from"./index-CVWKsAoW.js";import{T as i}from"./index-CEZRDE7O.js";import"./classNames-CN4lTu6a.js";import"./index-CYM-y3Gt.js";import"./index-D3iKhckW.js";import"./index-BpKo_AiQ.js";import"./index-BhDvpG6f.js";import"./index-BVhRoD2p.js";const v={title:"Float/Toast",component:i,parameters:{layout:"fullscreen"}},n={render:function(){const[a,t]=p.useState(!1);return e.jsxs("div",{style:{width:"100vw",height:300,justifyContent:"center",alignItems:"center",display:"flex"},children:[e.jsx(l,{onClick:()=>t(!0),children:"Open"}),e.jsx(i,{open:a,onOpenChange:t,children:e.jsx("div",{style:{padding:8},children:"Hello World"})})]})}};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const B=["Basic"];export{n as Basic,B as __namedExportsOrder,v as default};
