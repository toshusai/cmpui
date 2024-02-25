import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as m}from"./index-OjgoNOWw.js";import{D as p,a as o}from"./DropdownMenuItem-65YTI1pm.js";import{B as c}from"./index-bDPzi3wY.js";import"./index-hC_OXdTA.js";import"./classNames-pTwYsIK_.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-14PbI9Yx.js";const v={title:"Components/Float/DropdownMenu",component:p},n={render:function(){const[d,i]=m.useState(!1);return e.jsx("div",{style:{height:128},children:e.jsx(p,{content:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"New"}),e.jsx(o,{children:"Delete"}),e.jsx(o,{disabled:!0,children:"Disabled"})]}),open:d,onOpenChange:a=>i(a),children:e.jsx(c,{children:"Open"})})})}};var t,r,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div style={{
      height: 128
    }}>
        <DropdownMenu content={<>
              <DropdownMenuItem>New</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
            </>} open={open} onOpenChange={open => setOpen(open)}>
          <Button>Open</Button>
        </DropdownMenu>
      </div>;
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const C=["Basic"];export{n as Basic,C as __namedExportsOrder,v as default};
