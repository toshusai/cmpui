import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{P as c,T as v,S as s}from"./index-JHoNq4V6.js";import{B as d}from"./index-CVWKsAoW.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./alpha-checker-board-C272x69B.js";import"./index-CI0rqRLE.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-D9nq7hlE.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-yHTTKtaV.js";import"./index-CZ1B-fWX.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-Cfq5nsaS.js";import"./index-DpTo7KKv.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const pe={title:"Float/Popover",component:c},n={render:function(){const[i,o]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(c,{isOpen:i,onOpenChange:()=>o(!1),content:e.jsx(O,{onClose:()=>{o(!1)}}),children:e.jsx(d,{onClick:()=>o(!0),children:"Open Popover"})})})}};function O({onClose:p}={}){const[i,o]=t.useState("Awesome project"),[u,h]=t.useState(256),[x,g]=t.useState(512),f=t.useCallback(r=>{o(r.target.value)},[]),C=t.useCallback(r=>{h(r[0])},[]),j=t.useCallback(r=>{g(r[0])},[]);return e.jsxs("div",{style:{textAlign:"center",padding:16,display:"flex",flexDirection:"column",gap:12,width:256},children:[e.jsx(v,{placeholder:"input",label:"name",value:i,onChange:f,autoFocus:!0}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{placeholder:"input",label:"width",value:[u],onChangeValue:C}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:"×"}),e.jsx(s,{placeholder:"input",label:"heigt",value:[x],onChangeValue:j})]}),e.jsx(d,{onClick:p,children:"Save"})]})}var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    return <>
        <Popover isOpen={open} onOpenChange={() => setOpen(false)} content={<Body onClose={() => {
        setOpen(false);
      }} />}>
          <Button onClick={() => setOpen(true)}>Open Popover</Button>
        </Popover>
      </>;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const se=["Primary"];export{n as Primary,se as __namedExportsOrder,pe as default};
