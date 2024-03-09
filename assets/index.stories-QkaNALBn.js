import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{r as g}from"./index-OjgoNOWw.js";import{S as s,T as y}from"./index-M3QHKHVc.js";/* empty css               */import"./index-2g1hGOAV.js";import"./createDragHandler-x_VoadIT.js";import"./index-pk5nlV7d.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-cYjXm3u-.js";import"./index-bDPzi3wY.js";import"./alpha-checker-board-4wBnyHDu.js";import"./index-GtgdPI8D.js";import"./index-THzmRLjR.js";import"./clamp-xqaTU5Qn.js";import"./index-3ZWm4lKU.js";import"./useTouchStartPrevent-SoOiKono.js";import"./index-ng_3zWXR.js";import"./index-hC_OXdTA.js";import"./index-14PbI9Yx.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";import"./index-oGaVDTzA.js";import"./index-GQHmTNEd.js";import"./DropdownMenuItem-65YTI1pm.js";import"./index-l6BeamT-.js";import"./index-91r8yyqG.js";import"./IconButtonGroup-N7RH39hC.js";import"./index-8SWbSIpv.js";import"./index-Joz1V2Yt.js";import"./mergeRefs-mmWAE0a7.js";import"./index-Nn85PjCb.js";import"./index-Uw5HcGO4.js";import"./index-94KwZlX1.js";import"./index-8i7E8DJg.js";import"./index-mnqn6aXF.js";import"./index-yb2Rdmt7.js";const se={title:"Form/SliderNumberField",component:s},a={render:function(i){const[e,t]=g.useState([0]);return r.jsx(s,{...i,label:"value",inputMode:"decimal",value:e,onChangeValue:t})}},n={render:function(i){const[e,t]=g.useState([1,2,3]);return r.jsxs("div",{children:[r.jsx(s,{...i,label:"value",value:e,onChangeValue:o=>{if(!Array.isArray(o))throw new Error("values is not array");t(o)}}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,marginTop:8},children:e.map((o,p)=>r.jsx(y,{type:"number",value:o.toString(),onChange:f=>{const l=[...e];l[p]=Number(f.target.value),t(l)}},p))})]})}};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
