import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{T as o,$ as x,a as f}from"./index-a-IPPCxZ.js";import{B as j}from"./index-5ui4R9NG.js";import{I as i}from"./index-MoE7EhU4.js";import"./index-aXz8NaAs.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-sSXR_LKw.js";import"./index-K1fIJHIl.js";import"./classNames-pTwYsIK_.js";const S={title:"Float/Tooltip",component:o},n={render:function(){return e.jsx(x,{children:e.jsx(o,{content:"Hello",children:e.jsx(j,{children:"Tooltip"})})})}},r={render:function(){return e.jsx(x,{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(o,{content:"A",children:e.jsx(i,{children:"A"})}),e.jsx(o,{content:"B",children:e.jsx(i,{children:"B"})}),e.jsx(o,{content:"C",children:e.jsx(i,{children:"C"})})]})})}},t={render:function(){return e.jsx(f,{children:"Hello, World!"})}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <TooltipProvider>
        <Tooltip content="Hello">
          <Button>Tooltip</Button>
        </Tooltip>
      </TooltipProvider>;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var a,d,u;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <TooltipProvider>
        <div style={{
        display: "flex"
      }}>
          <Tooltip content="A">
            <IconButton>A</IconButton>
          </Tooltip>
          <Tooltip content="B">
            <IconButton>B</IconButton>
          </Tooltip>
          <Tooltip content="C">
            <IconButton>C</IconButton>
          </Tooltip>
        </div>
      </TooltipProvider>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,B,T;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function RenderPresenter() {
    return <TooltipPresenter>Hello, World!</TooltipPresenter>;
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const b=["Basic","Multiple","Presenter"];export{n as Basic,r as Multiple,t as Presenter,b as __namedExportsOrder,S as default};
