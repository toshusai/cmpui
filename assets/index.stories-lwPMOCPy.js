import{j as o}from"./jsx-runtime-DvLKfCe6.js";import{r}from"./index-aXz8NaAs.js";import{j as s,k as p}from"./index-yf8mkK-1.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const Se={title:"Form/Select",component:s},d=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],i={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,children:d.map(t=>o.jsx(p,{value:t.value,children:t.label},t.value))})}},u={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,disabled:!0,children:d.map(t=>o.jsx(p,{value:t.value,children:t.label},t.value))})}},m={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,children:d.map(t=>o.jsx(p,{value:t.value,disabled:t.value==="2",children:t.label},t.value))})}},F=["Roboto","Sixtyfour","Wavefont","Gabarito","Agbalumo","Honk","Slackside One","Smooch","Chokokutai","Monomaniac One","Palette Mosaic"].sort(),c={render:function(){const a=F.map(n=>({label:n,value:n,family:n,url:`https://fonts.googleapis.com/css2?family=${n}&display=swap`})),[l,t]=r.useState("Roboto");return o.jsx(s,{label:"font",value:l,onChange:t,children:a.map(n=>o.jsx(L,{family:n.family,url:n.url,value:n.value,children:n.label},n.value))})}},v=new Map;function I(e){if(v.has(e))return;const a=document.createElement("link");a.href=e,a.rel="stylesheet",document.head.appendChild(a),v.set(e,e)}function L(e){return r.useEffect(()=>{I(e.url)},[e.url]),o.jsx(p,{value:e.value,children:o.jsx("div",{style:{fontFamily:e.family},children:e.children})})}var f,b,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("1");
    return <Select label="Label" value={value} onChange={setValue}>
        {options.map(option => <SelectItem value={option.value} key={option.value}>
            {option.label}
          </SelectItem>)}
      </Select>;
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var h,y,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("1");
    return <Select label="Label" value={value} onChange={setValue} disabled>
        {options.map(option => <SelectItem value={option.value} key={option.value}>
            {option.label}
          </SelectItem>)}
      </Select>;
  }
}`,...(g=(y=u.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,R,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("1");
    return <Select label="Label" value={value} onChange={setValue}>
        {options.map(option => <SelectItem value={option.value} key={option.value} disabled={option.value === "2"}>
            {option.label}
          </SelectItem>)}
      </Select>;
  }
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var V,k,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const fonts = fontList.map(font => ({
      label: font,
      value: font,
      family: font,
      url: \`https://fonts.googleapis.com/css2?family=\${font}&display=swap\`
    }));
    const [value, setValue] = useState("Roboto");
    return <Select label="font" value={value} onChange={setValue}>
        {fonts.map(font => <FontRender family={font.family} url={font.url} value={font.value} key={font.value}>
            {font.label}
          </FontRender>)}
      </Select>;
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const he=["Basic","Disabled","DisabledItem","Fonts"];export{i as Basic,u as Disabled,m as DisabledItem,c as Fonts,he as __namedExportsOrder,Se as default};
