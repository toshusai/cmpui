import{j as t}from"./jsx-runtime-DvLKfCe6.js";import{r as d}from"./index-aXz8NaAs.js";import{C as s,a as h}from"./index-uWlkGYMJ.js";import{S as a}from"./ShortcutListItem-YpM7ilT6.js";import"./index-D9RaxIjz.js";import"./classNames-pTwYsIK_.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-yf8mkK-1.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const nt={title:"Float/ContextMenu",component:s};function e(o){return t.jsx(a,{...o,as:h})}const n={render:function(){const[p,c]=d.useState(!1);return t.jsx(t.Fragment,{children:t.jsx(s,{content:t.jsxs("div",{style:{width:128},children:[t.jsx(e,{shortcut:"⌘ Z",children:"Undo"}),t.jsx(e,{shortcut:"⇧ ⌘ Z",children:"Redo"}),t.jsx(e,{shortcut:"⌘ X",children:"Cut"}),t.jsx(e,{shortcut:"⌘ C",children:"Copy"}),t.jsx(e,{shortcut:"⌘ V",children:"Paste"})]}),open:p,onOpenChange:u=>c(u),children:t.jsx("div",{style:{width:200,height:200,borderRadius:4,border:"1px solid var(--cmpui-border-color)",touchAction:"none",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:"Right click me"})})})}};var r,i,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
