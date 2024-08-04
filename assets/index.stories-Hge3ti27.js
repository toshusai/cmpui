import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{r as d}from"./index-OjgoNOWw.js";import{C as s,a as h}from"./index-6uWyxtkv.js";import{S as a}from"./ShortcutListItem-KOfNuhqh.js";import"./index-hC_OXdTA.js";import"./classNames-pTwYsIK_.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";/* empty css               */import"./index-EwGKNtg5.js";import"./createDragHandler-nJMxlNVC.js";import"./index-pk5nlV7d.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./index-bDPzi3wY.js";import"./alpha-checker-board-tCTBQaJF.js";import"./index-GtgdPI8D.js";import"./index-CzAlb3Z9.js";import"./index-_tE33Gv2.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-7FH3x4aD.js";import"./index-rAFazk-7.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-ySLf1xQK.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-S2z5BvKN.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-pSLMz4T_.js";import"./index-vOUEYDQ3.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const nt={title:"Float/ContextMenu",component:s};function e(o){return t.jsx(a,{...o,as:h})}const n={render:function(){const[p,c]=d.useState(!1);return t.jsx(t.Fragment,{children:t.jsx(s,{content:t.jsxs("div",{style:{width:128},children:[t.jsx(e,{shortcut:"⌘ Z",children:"Undo"}),t.jsx(e,{shortcut:"⇧ ⌘ Z",children:"Redo"}),t.jsx(e,{shortcut:"⌘ X",children:"Cut"}),t.jsx(e,{shortcut:"⌘ C",children:"Copy"}),t.jsx(e,{shortcut:"⌘ V",children:"Paste"})]}),open:p,onOpenChange:u=>c(u),children:t.jsx("div",{style:{width:200,height:200,borderRadius:4,border:"1px solid var(--cmpui-border-color)",touchAction:"none",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:"Right click me"})})})}};var r,i,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ot=["Basic"];export{n as Basic,ot as __namedExportsOrder,nt as default};
