import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{L as t,a as c}from"./index-xX_uHqPz.js";import{F as f}from"./index-D9RaxIjz.js";import"./index-aXz8NaAs.js";import"./classNames-pTwYsIK_.js";const F={title:"View/ListItem",component:t},n={render:function(){return e.jsxs(c,{as:"ol",children:[e.jsx(t,{children:"Item1"}),e.jsx(t,{children:"Item2"}),e.jsx(t,{children:"Item3"})]})}},m={render:function(){return e.jsxs(c,{as:"ol",children:[e.jsx(t,{selected:!0,children:"Item1"}),e.jsx(t,{children:"Item2"}),e.jsx(t,{children:"Item3"})]})}},o={render:function(){return e.jsxs(c,{as:"ol",children:[e.jsx(t,{size:"S",children:"Item1"}),e.jsx(t,{size:"S",children:"Item2"}),e.jsx(t,{size:"S",children:"Item3"})]})}};function r(s){return e.jsxs(t,{style:{width:128},rounded:!0,selected:s.selected,size:"S",children:[s.children,s.shortcut&&e.jsx("span",{style:{marginLeft:"auto",fontSize:10,color:s.selected?"white":"var(--cmpui-text2-color)"},children:s.shortcut})]})}const i={render:function(){return e.jsx(f,{children:e.jsxs(c,{as:"ol",children:[e.jsx(r,{shortcut:"⌘ Z",children:"Undo"}),e.jsx(r,{shortcut:"⇧ ⌘ Z",children:"Redo"}),e.jsx(r,{shortcut:"⌘ X",children:"Cut"}),e.jsx(r,{selected:!0,shortcut:"⌘ C",children:"Copy"}),e.jsx(r,{shortcut:"⌘ V",children:"Paste"})]})})}};var a,d,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <List as="ol">
        <ListItem>Item1</ListItem>
        <ListItem>Item2</ListItem>
        <ListItem>Item3</ListItem>
      </List>;
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,I,h;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <List as="ol">
        <ListItem selected>Item1</ListItem>
        <ListItem>Item2</ListItem>
        <ListItem>Item3</ListItem>
      </List>;
  }
}`,...(h=(I=m.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var L,x,j;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <List as="ol">
        <ListItem size="S">Item1</ListItem>
        <ListItem size="S">Item2</ListItem>
        <ListItem size="S">Item3</ListItem>
      </List>;
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var p,C,S;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function RenderBasic() {
    return <FloatBox>
        <List as="ol">
          <CommandItem shortcut="⌘ Z">Undo</CommandItem>
          <CommandItem shortcut="⇧ ⌘ Z">Redo</CommandItem>
          <CommandItem shortcut="⌘ X">Cut</CommandItem>
          <CommandItem selected shortcut="⌘ C">
            Copy
          </CommandItem>
          <CommandItem shortcut="⌘ V">Paste</CommandItem>
        </List>
      </FloatBox>;
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Z=["Basic","Selected","Small","Commands"];export{n as Basic,i as Commands,m as Selected,o as Small,Z as __namedExportsOrder,F as default};
