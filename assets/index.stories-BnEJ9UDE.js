import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{B as c}from"./index-PmdniGp2.js";import{D as p,a as o}from"./DropdownMenuItem-CiPQ_PYB.js";import"./index.es-CljsIJ_K.js";import"./classNames-CN4lTu6a.js";import"./index-BVhRoD2p.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-DCmEyuZs.js";const v={title:"Float/DropdownMenu",component:p},n={render:function(){const[d,i]=m.useState(!1);return e.jsx("div",{style:{height:128},children:e.jsx(p,{content:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"New"}),e.jsx(o,{children:"Delete"}),e.jsx(o,{disabled:!0,children:"Disabled"})]}),open:d,onOpenChange:a=>i(a),children:e.jsx(c,{children:"Open"})})})}};var t,r,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["Basic"];export{n as Basic,E as __namedExportsOrder,v as default};
