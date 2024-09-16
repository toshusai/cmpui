import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{c as m}from"./const-1rc2061Q.js";import{M as i,a as p}from"./MenuListItem-Cc35ocKm.js";import"./index.es-H_zVnTIh.js";import"./index-DXb3pEBC.js";import"./classNames-CN4lTu6a.js";const j={title:"data display/MenuList",component:i},s={render:function(){const n=m.slice(0,5),[o,a]=l.useState(n[3]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:["Selected: ",o]}),t.jsx(i,{onSelect:e=>a(e),style:{width:"fit-content"},children:n.map(e=>t.jsx(p,{value:e,selected:o===e,children:e},e))})]})}};var r,c,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const options = codeWords.slice(0, 5);
    const [selected, setSelected] = useState(options[3]);
    return <>
        <div>Selected: {selected}</div>
        <MenuList onSelect={v => setSelected(v)} style={{
        width: "fit-content"
      }}>
          {options.map(word => <MenuListItem key={word} value={word} selected={selected === word}>
              {word}
            </MenuListItem>)}
        </MenuList>
      </>;
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,j as default};
