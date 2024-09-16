import{j as m}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{c as t}from"./const-1rc2061Q.js";import{S as n}from"./index-xI5C5Vc3.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index.es-H_zVnTIh.js";import"./index-XX6COvLX.js";import"./classNames-CN4lTu6a.js";import"./MenuListItem-Cc35ocKm.js";import"./index-DXb3pEBC.js";const W={title:"inputs/Select",component:n},o={render:function(){const[c,p]=i.useState(t[8]),l=t.map(e=>({label:e,value:e}));return m.jsx(n,{label:"Label",value:c,options:l,onChange:e=>p(e)})}};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(codeWords[8]);
    const options = codeWords.map(word => ({
      label: word,
      value: word
    }));
    return <Select label="Label" value={value} options={options} onChange={v => setValue(v)}></Select>;
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["Basic"];export{o as Basic,h as __namedExportsOrder,W as default};
