import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{T as o,$ as x,a as f}from"./index-yb2Rdmt7.js";import{B as j}from"./index-bDPzi3wY.js";import{I as i}from"./index-91r8yyqG.js";import"./index-OjgoNOWw.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index-nFE2FeW6.js";import"./index-Nn85PjCb.js";import"./classNames-pTwYsIK_.js";const S={title:"Components/Float/Tooltip",component:o},n={render:function(){return e.jsx(x,{children:e.jsx(o,{content:"Hello",children:e.jsx(j,{children:"Tooltip"})})})}},r={render:function(){return e.jsx(x,{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx(o,{content:"A",children:e.jsx(i,{children:"A"})}),e.jsx(o,{content:"B",children:e.jsx(i,{children:"B"})}),e.jsx(o,{content:"C",children:e.jsx(i,{children:"C"})})]})})}},t={render:function(){return e.jsx(f,{children:"Hello, World!"})}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
