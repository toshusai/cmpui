import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as M}from"./index-RYns6xqu.js";import{P as v}from"./index-BT2bw5_6.js";import{M as c,a as u}from"./MenuListItem-Cc35ocKm.js";import{M as m,a as C}from"./MenuBarButton-CE7qx3gF.js";import"./index-D16Yfzz8.js";import"./index.es-H_zVnTIh.js";import"./index-XX6COvLX.js";import"./classNames-CN4lTu6a.js";import"./index-DXb3pEBC.js";const g={title:"Float/MenuBarButton",component:m},l={render:function(){const i=[{name:"New File",shortcut:"⌘ N"},{name:"Open File",shortcut:"⌘ O",disabled:!0},{name:"Save File",shortcut:"⌘ S"},{name:"Save File As",shortcut:"⇧ ⌘ S"}],s=[{name:"Undo",shortcut:"⌘ Z"},{name:"Redo",shortcut:"⇧ ⌘ Z"},{name:"Cut",shortcut:"⌘ X"},{name:"Copy",shortcut:"⌘ C"},{name:"Paste",shortcut:"⌘ V"}],p=[{name:"Zoom In",shortcut:"⇧ ⌘ ="},{name:"Zoom Out",shortcut:"⌘ -"},{name:"Zoom to Fit",shortcut:"⌘ 0"},{name:"Zoom to Selection",shortcut:"⌘ 1"}],f=[{name:"About",shortcut:""}],o=d(n.jsx(c,{children:i.map(e=>n.jsxs(u,{disabled:e.disabled??!1,children:[e.name,n.jsx("span",{style:{marginLeft:"auto"},children:e.shortcut})]},e.name))})),t=d(n.jsx(c,{children:s.map(e=>n.jsxs(u,{children:[e.name,n.jsx("span",{style:{marginLeft:"auto"},children:e.shortcut})]},e.name))})),a=d(n.jsx(c,{children:p.map(e=>n.jsxs(u,{children:[e.name,n.jsx("span",{style:{marginLeft:"auto"},children:e.shortcut})]},e.name))})),r=d(n.jsx(c,{children:f.map(e=>n.jsxs(u,{children:[e.name,n.jsx("span",{style:{marginLeft:"auto"},children:e.shortcut})]},e.name))}));return n.jsxs(C,{children:[n.jsx(m,{onFocus:o.open,onClick:o.open,ref:o.ref,selected:o.isOpen,children:"File"}),o.popover,n.jsx(m,{onFocus:t.open,onClick:t.open,ref:t.ref,selected:t.isOpen,children:"Edit"}),t.popover,n.jsx(m,{onFocus:a.open,onClick:a.open,ref:a.ref,selected:a.isOpen,children:"View"}),a.popover,n.jsx(m,{onFocus:r.open,onClick:r.open,ref:r.ref,selected:r.isOpen,children:"Help"}),r.popover]})}};function d(h){const i=M.useRef(null),[s,p]=M.useState(!1),f=()=>{p(!0)},o=()=>{p(!1)},t=M.useMemo(()=>n.jsx(v,{trigger:i,isOpen:s,onClose:o,children:h}),[s,h]);return{ref:i,open:f,isOpen:s,popover:t}}var P,B,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    const filePop = usePopover<HTMLButtonElement>(<MenuList>
        {fileCommands.map(command => <MenuListItem key={command.name} disabled={command.disabled ?? false}>
            {command.name}
            <span style={{
          marginLeft: "auto"
        }}>{command.shortcut}</span>
          </MenuListItem>)}
      </MenuList>);
    const editPop = usePopover<HTMLButtonElement>(<MenuList>
        {editCommands.map(command => <MenuListItem key={command.name}>
            {command.name}
            <span style={{
          marginLeft: "auto"
        }}>{command.shortcut}</span>
          </MenuListItem>)}
      </MenuList>);
    const viewPop = usePopover<HTMLButtonElement>(<MenuList>
        {viewCommands.map(command => <MenuListItem key={command.name}>
            {command.name}
            <span style={{
          marginLeft: "auto"
        }}>{command.shortcut}</span>
          </MenuListItem>)}
      </MenuList>);
    const helpPop = usePopover<HTMLButtonElement>(<MenuList>
        {helpCommands.map(command => <MenuListItem key={command.name}>
            {command.name}
            <span style={{
          marginLeft: "auto"
        }}>{command.shortcut}</span>
          </MenuListItem>)}
      </MenuList>);
    return <MenuBar>
        <MenuBarButton onFocus={filePop.open} onClick={filePop.open} ref={filePop.ref} selected={filePop.isOpen}>
          File
        </MenuBarButton>
        {filePop.popover}

        <MenuBarButton onFocus={editPop.open} onClick={editPop.open} ref={editPop.ref} selected={editPop.isOpen}>
          Edit
        </MenuBarButton>
        {editPop.popover}

        <MenuBarButton onFocus={viewPop.open} onClick={viewPop.open} ref={viewPop.ref} selected={viewPop.isOpen}>
          View
        </MenuBarButton>
        {viewPop.popover}

        <MenuBarButton onFocus={helpPop.open} onClick={helpPop.open} ref={helpPop.ref} selected={helpPop.isOpen}>
          Help
        </MenuBarButton>
        {helpPop.popover}
      </MenuBar>;
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const E=["Basic"];export{l as Basic,E as __namedExportsOrder,g as default};
