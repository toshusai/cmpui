import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{S as n}from"./index-C0kOzs5V.js";import"./index.es-H_zVnTIh.js";import"./createDragHandler-DDNYS428.js";const q={title:"Form/Slider",component:n},s={render:()=>{const[r,a]=t.useState(.5);return e.jsx(e.Fragment,{children:e.jsx(n,{value:r,onChange:a})})}},o={render:()=>{const[r,a]=t.useState(50);return e.jsx(e.Fragment,{children:e.jsx(n,{max:100,min:-50,value:r,onChange:a})})}},u={render:()=>{const[r,a]=t.useState(.5);return e.jsx(e.Fragment,{children:e.jsx(n,{direction:"rtl",value:r,onChange:a})})}},l={render:()=>{const[r,a]=t.useState(.5);return e.jsx(e.Fragment,{children:e.jsx(n,{orientation:"vertical",value:r,onChange:a})})}},c={render:()=>{const[r,a]=t.useState(.5);return e.jsx(e.Fragment,{children:e.jsx(n,{orientation:"vertical",direction:"rtl",value:r,onChange:a})})}},i={render:()=>{const[r,a]=t.useState(.5);return e.jsx(e.Fragment,{children:e.jsx(n,{disabled:!0,value:r,onChange:a})})}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0.5);
    return <>
        <Slider value={value} onChange={setValue} />
      </>;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,S,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <>
        <Slider max={100} min={-50} value={value} onChange={setValue} />
      </>;
  }
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var V,x,h;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0.5);
    return <>
        <Slider direction="rtl" value={value} onChange={setValue} />
      </>;
  }
}`,...(h=(x=u.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,C,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0.5);
    return <>
        <Slider orientation="vertical" value={value} onChange={setValue} />
      </>;
  }
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var R,b,f;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0.5);
    return <>
        <Slider orientation="vertical" direction="rtl" value={value} onChange={setValue} />
      </>;
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var L,M,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0.5);
    return <>
        <Slider disabled value={value} onChange={setValue} />
      </>;
  }
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const w=["Basic","MinMax","RtoL","Vertical","VerticalR2L","Disabled"];export{s as Basic,i as Disabled,o as MinMax,u as RtoL,l as Vertical,c as VerticalR2L,w as __namedExportsOrder,q as default};
