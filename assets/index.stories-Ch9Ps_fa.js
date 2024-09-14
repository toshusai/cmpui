import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{S as h}from"./ShortcutListItem-Bu5jISmC.js";import{C as m,a}from"./index-NsRgp_yC.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-PmdniGp2.js";import"./index.es-CljsIJ_K.js";import"./index-B0aGP_7T.js";import"./index-DPLXiksS.js";import"./index-WZGREwkT.js";import"./index-3jSAGwTI.js";import"./clamp-co6UzHBn.js";import"./index-DRqqH17F.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-BVhRoD2p.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-DCmEyuZs.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const tt={title:"Float/ContextMenu",component:m};function e(o){return t.jsx(h,{...o,as:a})}const n={render:function(){const[c,p]=d.useState(!1);return t.jsx(t.Fragment,{children:t.jsx(m,{content:t.jsxs("div",{style:{width:128},children:[t.jsx(e,{shortcut:"⌘ Z",children:"Undo"}),t.jsx(e,{shortcut:"⇧ ⌘ Z",children:"Redo"}),t.jsx(e,{shortcut:"⌘ X",children:"Cut"}),t.jsx(e,{shortcut:"⌘ C",children:"Copy"}),t.jsx(e,{shortcut:"⌘ V",children:"Paste"})]}),open:c,onOpenChange:u=>p(u),children:t.jsx("div",{style:{width:200,height:200,borderRadius:4,border:"1px solid var(--cmpui-border-color)",touchAction:"none",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:"Right click me"})})})}};var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
        <ContextMenu content={<div style={{
        width: 128
      }}>
              <ShortcutContextMenuItem shortcut="⌘ Z">
                Undo
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⇧ ⌘ Z">
                Redo
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ X">
                Cut
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ C">
                Copy
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ V">
                Paste
              </ShortcutContextMenuItem>
            </div>} open={open} onOpenChange={open => setOpen(open)}>
          <div style={{
          width: 200,
          height: 200,
          borderRadius: 4,
          border: "1px solid var(--cmpui-border-color)",
          touchAction: "none",
          userSelect: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            Right click me
          </div>
        </ContextMenu>
      </>;
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const et=["Basic"];export{n as Basic,et as __namedExportsOrder,tt as default};
