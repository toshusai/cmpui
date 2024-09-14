import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{T as e,a as x,b as j}from"./index-DGvzY3Pe.js";import{B as f}from"./index-PmdniGp2.js";import{I as i}from"./index-DpXXaser.js";import"./index-CTjT7uj6.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-DU9HO3_w.js";import"./index-91UZ0hjQ.js";import"./index.es-CljsIJ_K.js";import"./classNames-CN4lTu6a.js";const E={title:"Float/Tooltip",component:e},n={render:function(){return o.jsx(x,{children:o.jsx(e,{content:"Hello",children:o.jsx(f,{children:"Tooltip"})})})}},r={render:function(){return o.jsx(x,{children:o.jsxs("div",{style:{display:"flex"},children:[o.jsx(e,{content:"A",children:o.jsx(i,{children:"A"})}),o.jsx(e,{content:"B",children:o.jsx(i,{children:"B"})}),o.jsx(e,{content:"C",children:o.jsx(i,{children:"C"})})]})})}},t={render:function(){return o.jsx(j,{children:"Hello, World!"})}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <TooltipProvider>
        <Tooltip content="Hello">
          <Button>Tooltip</Button>
        </Tooltip>
      </TooltipProvider>;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,a,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var m,B,T;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function RenderPresenter() {
    return <TooltipPresenter>Hello, World!</TooltipPresenter>;
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const M=["Basic","Multiple","Presenter"];export{n as Basic,r as Multiple,t as Presenter,M as __namedExportsOrder,E as default};
