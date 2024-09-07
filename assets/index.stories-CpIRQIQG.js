import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{S as s,T as y}from"./index-Cx5NK2RL.js";import"./index-DjOCQ1f2.js";import"./createDragHandler-DDNYS428.js";import"./index-VWCGd7j2.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CGxoC811.js";import"./index-DPLXiksS.js";import"./index-Bk7gfChQ.js";import"./clamp-co6UzHBn.js";import"./index-B1Pf1uP_.js";import"./index-CFrbT9h8.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";import"./index-CqZgG2wf.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-DoBa3JPr.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-BjZLtUHc.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-BhDvpG6f.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CEZRDE7O.js";import"./index-DD1un7QO.js";const oe={title:"Form/SliderNumberField",component:s},o={render:function(i){const[e,t]=g.useState([0]);return r.jsx(s,{...i,label:"value",inputMode:"decimal",value:e,onChangeValue:t})}},n={render:function(i){const[e,t]=g.useState([1,2,3]);return r.jsxs("div",{children:[r.jsx(s,{...i,label:"value",value:e,onChangeValue:a=>{if(!Array.isArray(a))throw new Error("values is not array");t(a)}}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8},children:e.map((a,l)=>r.jsx(y,{type:"number",value:a.toString(),onChange:f=>{const u=[...e];u[l]=Number(f.target.value),t(u)}},l))})]})}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState([0]);
    return <SliderNumberField {...props} label="value" inputMode="decimal" value={value} onChangeValue={setValue} />;
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,v,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const ne=["Basic","Mixed"];export{o as Basic,n as Mixed,ne as __namedExportsOrder,oe as default};
