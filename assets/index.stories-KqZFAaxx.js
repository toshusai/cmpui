import{j as r}from"./jsx-runtime-DvLKfCe6.js";import{r as g}from"./index-aXz8NaAs.js";import{S as s,T as y}from"./index-yf8mkK-1.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const se={title:"Form/SliderNumberField",component:s},a={render:function(i){const[e,t]=g.useState([0]);return r.jsx(s,{...i,label:"value",inputMode:"decimal",value:e,onChangeValue:t})}},n={render:function(i){const[e,t]=g.useState([1,2,3]);return r.jsxs("div",{children:[r.jsx(s,{...i,label:"value",value:e,onChangeValue:o=>{if(!Array.isArray(o))throw new Error("values is not array");t(o)}}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8},children:e.map((o,p)=>r.jsx(y,{type:"number",value:o.toString(),onChange:f=>{const l=[...e];l[p]=Number(f.target.value),t(l)}},p))})]})}};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState([0]);
    return <SliderNumberField {...props} label="value" inputMode="decimal" value={value} onChangeValue={setValue} />;
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,v,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render(props) {
    const [values, setValues] = useState([1, 2, 3]);
    return <div>
        <SliderNumberField {...props} label="value" value={values} onChangeValue={values => {
        if (!Array.isArray(values)) throw new Error("values is not array");
        setValues(values);
      }} />
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        marginTop: 8
      }}>
          {values.map((value, index) => <TextInput type="number" key={index} value={value.toString()} onChange={e => {
          const newValues = [...values];
          newValues[index] = Number(e.target.value);
          setValues(newValues);
        }} />)}
        </div>
      </div>;
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const pe=["Basic","Mixed"];export{a as Basic,n as Mixed,pe as __namedExportsOrder,se as default};
