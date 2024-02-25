import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{M as e,d as B,e as l,f as M,g as o}from"./index-M3QHKHVc.js";import{S}from"./ShortcutListItem-sKDpgdxX.js";import"./index-OjgoNOWw.js";/* empty css               */import"./index-2g1hGOAV.js";import"./createDragHandler-x_VoadIT.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./index-bDPzi3wY.js";import"./alpha-checker-board-4wBnyHDu.js";import"./index-GtgdPI8D.js";import"./index-THzmRLjR.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-ng_3zWXR.js";import"./index-hC_OXdTA.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-oGaVDTzA.js";import"./index-GQHmTNEd.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-l6BeamT-.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-8SWbSIpv.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-Uw5HcGO4.js";import"./index-94KwZlX1.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const an={title:"Components/Float/MenuBarButton",component:e};function r(a){return n.jsx(S,{...a,as:o})}const m={render:function(){const i=[{name:"New File",shortcut:"⌘ N"},{name:"Open File",shortcut:"⌘ O",disabled:!0},{name:"Save File",shortcut:"⌘ S"},{name:"Save File As",shortcut:"⇧ ⌘ S"}],h=[{name:"Undo",shortcut:"⌘ Z"},{name:"Redo",shortcut:"⇧ ⌘ Z"},{name:"Cut",shortcut:"⌘ X"},{name:"Copy",shortcut:"⌘ C"},{name:"Paste",shortcut:"⌘ V"}],p=[{name:"Zoom In",shortcut:"⇧ ⌘ ="},{name:"Zoom Out",shortcut:"⌘ -"},{name:"Zoom to Fit",shortcut:"⌘ 0"},{name:"Zoom to Selection",shortcut:"⌘ 1"}],d=[{name:"About",shortcut:""}];return n.jsxs(B,{children:[n.jsx(e,{content:n.jsxs(n.Fragment,{children:[i.map(t=>n.jsx(r,{disabled:t.disabled,shortcut:t.shortcut,children:t.name},t.name)),n.jsx(l,{}),n.jsx(M,{content:n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Copy Link"}),n.jsx(o,{children:"Copy Text"}),n.jsx(o,{children:"Email"}),n.jsx(o,{children:"SNS"})]}),children:"Share"})]}),children:"File"}),n.jsx(e,{content:h.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"Edit"}),n.jsx(e,{content:p.map(t=>n.jsx(r,{shortcut:t.shortcut,children:t.name},t.name)),children:"View"}),n.jsx(e,{content:n.jsx(r,{shortcut:"⌘ /",children:d[0].name}),children:"Help"})]})}};var u,s,c;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(s=m.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const un=["Basic"];export{m as Basic,un as __namedExportsOrder,an as default};
