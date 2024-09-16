import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{M as x,a as C}from"./MenuListItem-Cc35ocKm.js";import{c as h}from"./const-1rc2061Q.js";import{C as a,u as M}from"./index-C-35X-_Y.js";import"./index.es-H_zVnTIh.js";import"./index-DXb3pEBC.js";import"./classNames-CN4lTu6a.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";const R={title:"Float/ContextMenu",component:a},t={render:function(){const{ctx:i,handleClose:o,handleContextMenu:c}=M(),d=h.map(e=>({label:e,value:e})),[u,m]=p.useState(null);return n.jsxs(n.Fragment,{children:[n.jsx("div",{onContextMenu:c,style:{width:128,height:128,border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center"},children:u}),n.jsx(a,{onClose:o,...i,children:n.jsx(x,{onSelect:e=>{m(e),o()},children:d.map(e=>n.jsx(C,{value:e.value,children:e.label},e.value))})})]})}};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const {
      ctx,
      handleClose,
      handleContextMenu
    } = useContextMenu();
    const options = codeWords.map(word => ({
      label: word,
      value: word
    }));
    const [selected, setSelected] = useState<string | null>(null);
    return <>
        <div onContextMenu={handleContextMenu} style={{
        width: 128,
        height: 128,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
          {selected}
        </div>

        <ContextMenu onClose={handleClose} {...ctx}>
          <MenuList onSelect={v => {
          setSelected(v);
          handleClose();
        }}>
            {options.map(option => <MenuListItem key={option.value} value={option.value}>
                {option.label}
              </MenuListItem>)}
          </MenuList>
        </ContextMenu>
      </>;
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const B=["Basic"];export{t as Basic,B as __namedExportsOrder,R as default};
