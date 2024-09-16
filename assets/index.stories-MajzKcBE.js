import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{B as c}from"./index-BTgGIVd4.js";import{T as a}from"./index-YRJ9S26Y.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./index-XX6COvLX.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";const T={title:"Float/Toast",component:a},o={render:function(){const[p,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{show:p,onClose:()=>t(!1),children:e.jsx("div",{children:"Hello World"})})]})}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Toast show={open} onClose={() => setOpen(false)}>
          <div>Hello World</div>
        </Toast>
      </>;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const C=["Basic"];export{o as Basic,C as __namedExportsOrder,T as default};
