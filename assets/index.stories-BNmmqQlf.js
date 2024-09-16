import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{c as f}from"./const-1rc2061Q.js";import{I as v}from"./index-BzswFk5K.js";import{L as x}from"./index-DXb3pEBC.js";import{P as p}from"./index-BT2bw5_6.js";import{c as I}from"./createReactComponent-BtrV2-Xk.js";import"./classNames-CN4lTu6a.js";import"./index-D16Yfzz8.js";import"./index.es-H_zVnTIh.js";import"./index-XX6COvLX.js";/**
 * @license @tabler/icons-react v3.15.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var S=I("outline","dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);const M={title:"Float/Popover",component:p},t={render:function(){const[l,o]=s.useState(!1),r=s.useRef(null),m=f.slice(0,5),[d,u]=s.useState("null");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Selected: ",d]}),e.jsx(v,{ref:r,onClick:()=>o(!0),children:e.jsx(S,{size:20})}),e.jsx(p,{isOpen:l,trigger:r,onClose:()=>o(!1),placement:"bottom-start",children:m.map(n=>e.jsx(x,{onClick:()=>{u(n),o(!1)},children:n},n))})]})}};var c,a,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const options = codeWords.slice(0, 5);
    const [selected, setSelected] = useState("null");
    return <>
        <div>Selected: {selected}</div>
        <IconButton ref={ref} onClick={() => setOpen(true)}>
          <IconDots size={20} />
        </IconButton>

        <Popover isOpen={open} trigger={ref} onClose={() => setOpen(false)} placement="bottom-start">
          {options.map(option => <ListItem key={option} onClick={() => {
          setSelected(option);
          setOpen(false);
        }}>
              {option}
            </ListItem>)}
        </Popover>
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const D=["Primary"];export{t as Primary,D as __namedExportsOrder,M as default};
