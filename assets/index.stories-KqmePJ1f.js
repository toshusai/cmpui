import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as o}from"./index-OjgoNOWw.js";import{i as c,T as y,S as a}from"./index-Sz03Oaaf.js";import{B as d}from"./index-bDPzi3wY.js";/* empty css               */import"./index-2g1hGOAV.js";import"./createDragHandler-x_VoadIT.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./alpha-checker-board-4wBnyHDu.js";import"./index-GtgdPI8D.js";import"./index-THzmRLjR.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-McrItdRX.js";import"./index-hC_OXdTA.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-oGaVDTzA.js";import"./index-GQHmTNEd.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-ySLf1xQK.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-8SWbSIpv.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-Uw5HcGO4.js";import"./index-94KwZlX1.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const le={title:"Float/Modal",component:c},n={render:function(){const[i,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>r(!0),children:"Open modal"}),e.jsx(c,{title:"settings",open:i,onClose:()=>r(!1),children:e.jsx(b,{onClose:()=>{r(!1)}})})]})}};function b({onClose:s}={}){const[i,r]=o.useState("Awesome project"),[u,h]=o.useState(256),[f,x]=o.useState(512),g=o.useCallback(t=>{r(t.target.value)},[]),C=o.useCallback(t=>{if(typeof t!="number")throw new Error("value is not number");h(t)},[]),j=o.useCallback(t=>{if(typeof t!="number")throw new Error("value is not number");x(t)},[]);return e.jsxs("div",{style:{textAlign:"center",padding:16,display:"flex",flexDirection:"column",gap:12},children:[e.jsx(y,{placeholder:"input",label:"name",value:i,onChange:g,autoFocus:!0}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{placeholder:"input",label:"width",value:[u],onChangeValue:C}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:"×"}),e.jsx(a,{placeholder:"input",label:"heigt",value:[f],onChangeValue:j})]}),e.jsx(d,{onClick:s,children:"Save"})]})}var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal title="settings" open={open} onClose={() => setOpen(false)}>
          <Body onClose={() => {
          setOpen(false);
        }} />
        </Modal>
      </>;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const me=["Primary"];export{n as Primary,me as __namedExportsOrder,le as default};