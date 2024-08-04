import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{r as m}from"./index-aXz8NaAs.js";import{D as p,a as o}from"./DropdownMenuItem-TbdlQnuP.js";import{B as c}from"./index-5ui4R9NG.js";import"./index-D9RaxIjz.js";import"./classNames-pTwYsIK_.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-xX_uHqPz.js";const v={title:"Float/DropdownMenu",component:p},n={render:function(){const[d,i]=m.useState(!1);return e.jsx("div",{style:{height:128},children:e.jsx(p,{content:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"New"}),e.jsx(o,{children:"Delete"}),e.jsx(o,{disabled:!0,children:"Disabled"})]}),open:d,onOpenChange:a=>i(a),children:e.jsx(c,{children:"Open"})})})}};var t,r,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
