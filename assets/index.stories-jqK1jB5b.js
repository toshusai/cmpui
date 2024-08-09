import{j as n}from"./jsx-runtime-DvLKfCe6.js";import{M as e,d as B,e as l,f as M,g as o}from"./index-mYLZ1MSy.js";import{S}from"./ShortcutListItem-xPhlnyXt.js";import"./index-aXz8NaAs.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-9yJ7Vv-H.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-qwq-PmEO.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const mn={title:"Float/MenuBarButton",component:e};function r(a){return n.jsx(S,{...a,as:o})}const m={render:function(){const i=[{name:"New File",shortcut:"⌘ N"},{name:"Open File",shortcut:"⌘ O",disabled:!0},{name:"Save File",shortcut:"⌘ S"},{name:"Save File As",shortcut:"⇧ ⌘ S"}],h=[{name:"Undo",shortcut:"⌘ Z"},{name:"Redo",shortcut:"⇧ ⌘ Z"},{name:"Cut",shortcut:"⌘ X"},{name:"Copy",shortcut:"⌘ C"},{name:"Paste",shortcut:"⌘ V"}],p=[{name:"Zoom In",shortcut:"⇧ ⌘ ="},{name:"Zoom Out",shortcut:"⌘ -"},{name:"Zoom to Fit",shortcut:"⌘ 0"},{name:"Zoom to Selection",shortcut:"⌘ 1"}],d=[{name:"About",shortcut:""}];return n.jsxs(B,{children:[n.jsx(e,{content:n.jsxs(n.Fragment,{children:[i.map(t=>n.jsx(r,{disabled:t.disabled,shortcut:t.shortcut,children:t.name},t.name)),n.jsx(l,{}),n.jsx(M,{content:n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Copy Link"}),n.jsx(o,{children:"Copy Text"}),n.jsx(o,{children:"Email"}),n.jsx(o,{children:"SNS"})]}),children:"Share"})]}),children:"File"}),n.jsx(e,{content:h.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"Edit"}),n.jsx(e,{content:p.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"View"}),n.jsx(e,{content:n.jsx(r,{shortcut:"⌘ /",children:d[0].name}),children:"Help"})]})}};var u,s,c;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(s=m.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const an=["Basic"];export{m as Basic,an as __namedExportsOrder,mn as default};
