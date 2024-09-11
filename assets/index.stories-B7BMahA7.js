import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{i as s,j as p}from"./index-D64P4ZQh.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CtLoJ3yA.js";import"./index-DPLXiksS.js";import"./index-OFk5bV51.js";import"./clamp-co6UzHBn.js";import"./index-Bm9F_wyz.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const ve={title:"Form/Select",component:s},d=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],i={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,children:d.map(t=>o.jsx(p,{value:t.value,children:t.label},t.value))})}},u={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,disabled:!0,children:d.map(t=>o.jsx(p,{value:t.value,children:t.label},t.value))})}},m={render:function(){const[a,l]=r.useState("1");return o.jsx(s,{label:"Label",value:a,onChange:l,children:d.map(t=>o.jsx(p,{value:t.value,disabled:t.value==="2",children:t.label},t.value))})}},F=["Roboto","Sixtyfour","Wavefont","Gabarito","Agbalumo","Honk","Slackside One","Smooch","Chokokutai","Monomaniac One","Palette Mosaic"].sort(),c={render:function(){const a=F.map(n=>({label:n,value:n,family:n,url:`https://fonts.googleapis.com/css2?family=${n}&display=swap`})),[l,t]=r.useState("Roboto");return o.jsx(s,{label:"font",value:l,onChange:t,children:a.map(n=>o.jsx(L,{family:n.family,url:n.url,value:n.value,children:n.label},n.value))})}},v=new Map;function I(e){if(v.has(e))return;const a=document.createElement("link");a.href=e,a.rel="stylesheet",document.head.appendChild(a),v.set(e,e)}function L(e){return r.useEffect(()=>{I(e.url)},[e.url]),o.jsx(p,{value:e.value,children:o.jsx("div",{style:{fontFamily:e.family},children:e.children})})}var f,b,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var V,C,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const fe=["Basic","Disabled","DisabledItem","Fonts"];export{i as Basic,u as Disabled,m as DisabledItem,c as Fonts,fe as __namedExportsOrder,ve as default};
