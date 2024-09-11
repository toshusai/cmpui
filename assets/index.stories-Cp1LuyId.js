import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{S as B}from"./ShortcutListItem-FlUx88Fi.js";import{M as e,d as l,e as M,f as S,g as o}from"./index-D64P4ZQh.js";import"./index-CTjT7uj6.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CtLoJ3yA.js";import"./index-DPLXiksS.js";import"./index-Bm9F_wyz.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-OFk5bV51.js";import"./clamp-co6UzHBn.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-91UZ0hjQ.js";import"./index-DGvzY3Pe.js";const on={title:"Float/MenuBarButton",component:e};function r(a){return n.jsx(B,{...a,as:o})}const m={render:function(){const i=[{name:"New File",shortcut:"⌘ N"},{name:"Open File",shortcut:"⌘ O",disabled:!0},{name:"Save File",shortcut:"⌘ S"},{name:"Save File As",shortcut:"⇧ ⌘ S"}],h=[{name:"Undo",shortcut:"⌘ Z"},{name:"Redo",shortcut:"⇧ ⌘ Z"},{name:"Cut",shortcut:"⌘ X"},{name:"Copy",shortcut:"⌘ C"},{name:"Paste",shortcut:"⌘ V"}],p=[{name:"Zoom In",shortcut:"⇧ ⌘ ="},{name:"Zoom Out",shortcut:"⌘ -"},{name:"Zoom to Fit",shortcut:"⌘ 0"},{name:"Zoom to Selection",shortcut:"⌘ 1"}],d=[{name:"About",shortcut:""}];return n.jsxs(l,{children:[n.jsx(e,{content:n.jsxs(n.Fragment,{children:[i.map(t=>n.jsx(r,{disabled:t.disabled,shortcut:t.shortcut,children:t.name},t.name)),n.jsx(M,{}),n.jsx(S,{content:n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Copy Link"}),n.jsx(o,{children:"Copy Text"}),n.jsx(o,{children:"Email"}),n.jsx(o,{children:"SNS"})]}),children:"Share"})]}),children:"File"}),n.jsx(e,{content:h.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"Edit"}),n.jsx(e,{content:p.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"View"}),n.jsx(e,{content:n.jsx(r,{shortcut:"⌘ /",children:d[0].name}),children:"Help"})]})}};var u,s,c;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const fileCommands = [{
      name: "New File",
      shortcut: "⌘ N"
    }, {
      name: "Open File",
      shortcut: "⌘ O",
      disabled: true
    }, {
      name: "Save File",
      shortcut: "⌘ S"
    }, {
      name: "Save File As",
      shortcut: "⇧ ⌘ S"
    }];
    const editCommands = [{
      name: "Undo",
      shortcut: "⌘ Z"
    }, {
      name: "Redo",
      shortcut: "⇧ ⌘ Z"
    }, {
      name: "Cut",
      shortcut: "⌘ X"
    }, {
      name: "Copy",
      shortcut: "⌘ C"
    }, {
      name: "Paste",
      shortcut: "⌘ V"
    }];
    const viewCommands = [{
      name: "Zoom In",
      shortcut: "⇧ ⌘ ="
    }, {
      name: "Zoom Out",
      shortcut: "⌘ -"
    }, {
      name: "Zoom to Fit",
      shortcut: "⌘ 0"
    }, {
      name: "Zoom to Selection",
      shortcut: "⌘ 1"
    }];
    const helpCommands = [{
      name: "About",
      shortcut: ""
    }];
    return <MenuBar>
        <MenuBarButton content={<>
              {fileCommands.map(command => <ShortcutMenuBarItem key={command.name} disabled={command.disabled} shortcut={command.shortcut}>
                  {command.name}
                </ShortcutMenuBarItem>)}
              <MenuBarSeparator />
              <MenuBarSubButton content={<>
                    <MenuBarItem>Copy Link</MenuBarItem>
                    <MenuBarItem>Copy Text</MenuBarItem>
                    <MenuBarItem>Email</MenuBarItem>
                    <MenuBarItem>SNS</MenuBarItem>
                  </>}>
                Share
              </MenuBarSubButton>
            </>}>
          File
        </MenuBarButton>
        <MenuBarButton content={editCommands.map(command => <ShortcutMenuBarItem key={command.name} shortcut={command.shortcut}>
              {command.name}
            </ShortcutMenuBarItem>)}>
          Edit
        </MenuBarButton>

        <MenuBarButton content={viewCommands.map(command => <ShortcutMenuBarItem key={command.name} shortcut={command.shortcut}>
              {command.name}
            </ShortcutMenuBarItem>)}>
          View
        </MenuBarButton>

        <MenuBarButton content={<ShortcutMenuBarItem shortcut="⌘ /">
              {helpCommands[0].name}
            </ShortcutMenuBarItem>}>
          Help
        </MenuBarButton>
      </MenuBar>;
  }
}`,...(c=(s=m.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const rn=["Basic"];export{m as Basic,rn as __namedExportsOrder,on as default};
