import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{S as h}from"./ShortcutListItem-M_PfWX6x.js";import{C as m,a}from"./index-D9nq7hlE.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./alpha-checker-board-BYXq6jsz.js";import"./index-CI0rqRLE.js";import"./index-CTZGfwXl.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-CqZgG2wf.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-BVhRoD2p.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-DCmEyuZs.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-D38S78TV.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const $={title:"Float/ContextMenu",component:m};function e(o){return t.jsx(h,{...o,as:a})}const n={render:function(){const[c,p]=d.useState(!1);return t.jsx(t.Fragment,{children:t.jsx(m,{content:t.jsxs("div",{style:{width:128},children:[t.jsx(e,{shortcut:"⌘ Z",children:"Undo"}),t.jsx(e,{shortcut:"⇧ ⌘ Z",children:"Redo"}),t.jsx(e,{shortcut:"⌘ X",children:"Cut"}),t.jsx(e,{shortcut:"⌘ C",children:"Copy"}),t.jsx(e,{shortcut:"⌘ V",children:"Paste"})]}),open:c,onOpenChange:u=>p(u),children:t.jsx("div",{style:{width:200,height:200,borderRadius:4,border:"1px solid var(--cmpui-border-color)",touchAction:"none",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:"Right click me"})})})}};var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const tt=["Basic"];export{n as Basic,tt as __namedExportsOrder,$ as default};
