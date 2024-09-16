import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as g}from"./index-RYns6xqu.js";import{d as s,T as y}from"./index-UxT1lfTJ.js";import"./index-BTgGIVd4.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";const re={title:"Form/SliderNumberField",component:s},n={render:function(i){const[e,t]=g.useState([0]);return r.jsx(s,{...i,label:"value",inputMode:"decimal",value:e,onChangeValue:t})}},o={render:function(i){const[e,t]=g.useState([1,2,3]);return r.jsxs("div",{children:[r.jsx(s,{...i,label:"value",value:e,onChangeValue:a=>{if(!Array.isArray(a))throw new Error("values is not array");t(a)}}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8},children:e.map((a,l)=>r.jsx(y,{type:"number",value:a.toString(),onChange:f=>{const u=[...e];u[l]=Number(f.target.value),t(u)}},l))})]})}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState([0]);
    return <SliderNumberField {...props} label="value" inputMode="decimal" value={value} onChangeValue={setValue} />;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,v,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const te=["Basic","Mixed"];export{n as Basic,o as Mixed,te as __namedExportsOrder,re as default};
