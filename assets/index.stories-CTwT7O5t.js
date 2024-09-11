import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{S as s,T as y}from"./index-D64P4ZQh.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-CVWKsAoW.js";import"./index-CtLoJ3yA.js";import"./index-DPLXiksS.js";import"./index-OFk5bV51.js";import"./clamp-co6UzHBn.js";import"./index-Bm9F_wyz.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const oe={title:"Form/SliderNumberField",component:s},o={render:function(i){const[e,t]=g.useState([0]);return r.jsx(s,{...i,label:"value",inputMode:"decimal",value:e,onChangeValue:t})}},n={render:function(i){const[e,t]=g.useState([1,2,3]);return r.jsxs("div",{children:[r.jsx(s,{...i,label:"value",value:e,onChangeValue:a=>{if(!Array.isArray(a))throw new Error("values is not array");t(a)}}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8},children:e.map((a,l)=>r.jsx(y,{type:"number",value:a.toString(),onChange:f=>{const u=[...e];u[l]=Number(f.target.value),t(u)}},l))})]})}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
