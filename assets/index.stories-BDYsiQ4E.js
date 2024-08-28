import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{S as B}from"./ShortcutListItem-M_PfWX6x.js";import{M as e,d as l,e as M,f as S,g as o}from"./index-CTZGfwXl.js";import"./index-CTjT7uj6.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./alpha-checker-board-BYXq6jsz.js";import"./index-CI0rqRLE.js";import"./index-B1Pf1uP_.js";import"./index-D9nq7hlE.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-CqZgG2wf.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-D38S78TV.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-BhDvpG6f.js";import"./index-DD1un7QO.js";const on={title:"Float/MenuBarButton",component:e};function r(a){return n.jsx(B,{...a,as:o})}const m={render:function(){const i=[{name:"New File",shortcut:"⌘ N"},{name:"Open File",shortcut:"⌘ O",disabled:!0},{name:"Save File",shortcut:"⌘ S"},{name:"Save File As",shortcut:"⇧ ⌘ S"}],h=[{name:"Undo",shortcut:"⌘ Z"},{name:"Redo",shortcut:"⇧ ⌘ Z"},{name:"Cut",shortcut:"⌘ X"},{name:"Copy",shortcut:"⌘ C"},{name:"Paste",shortcut:"⌘ V"}],p=[{name:"Zoom In",shortcut:"⇧ ⌘ ="},{name:"Zoom Out",shortcut:"⌘ -"},{name:"Zoom to Fit",shortcut:"⌘ 0"},{name:"Zoom to Selection",shortcut:"⌘ 1"}],d=[{name:"About",shortcut:""}];return n.jsxs(l,{children:[n.jsx(e,{content:n.jsxs(n.Fragment,{children:[i.map(t=>n.jsx(r,{disabled:t.disabled,shortcut:t.shortcut,children:t.name},t.name)),n.jsx(M,{}),n.jsx(S,{content:n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Copy Link"}),n.jsx(o,{children:"Copy Text"}),n.jsx(o,{children:"Email"}),n.jsx(o,{children:"SNS"})]}),children:"Share"})]}),children:"File"}),n.jsx(e,{content:h.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"Edit"}),n.jsx(e,{content:p.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"View"}),n.jsx(e,{content:n.jsx(r,{shortcut:"⌘ /",children:d[0].name}),children:"Help"})]})}};var u,s,c;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
