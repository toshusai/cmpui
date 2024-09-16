import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";import{I as N}from"./index-BzswFk5K.js";import{T as o}from"./index-UxT1lfTJ.js";import{c as h}from"./createReactComponent-BtrV2-Xk.js";import"./classNames-CN4lTu6a.js";import"./index-BTgGIVd4.js";import"./index.es-H_zVnTIh.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";/**
 * @license @tabler/icons-react v3.15.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var O=h("outline","currency-dollar","IconCurrencyDollar",[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.15.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var F=h("outline","eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.15.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=h("outline","eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]);const we={title:"Form/TextInput",component:o,args:{label:"Label"}},l={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"Label",placeholder:"Placeholder",value:e,onChange:a=>t(a.target.value)})}},u={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"Label",id:"text-input-label",value:e,onChange:a=>t(a.target.value)})}},c={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"",placeholder:"Placeholder",value:e,onChange:a=>t(a.target.value)})}},i={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"Amount",placeholder:"1.0",type:"number",value:e,onChange:a=>t(a.target.value),prefix:r.jsx(O,{size:16,style:{margin:"0 4px",minWidth:"16px"}})})}},p={render:function(){const[e,t]=n.useState(!1),[a,D]=n.useState("NN2mdJec,Ff+^[a");return r.jsx(o,{label:"Password",placeholder:"password",type:e?"text":"password",suffix:r.jsx(N,{onClick:()=>t(v=>!v),size:"S",style:{marginRight:"4px"},children:e?r.jsx(F,{size:16,style:{margin:"0 4px",minWidth:"16px"}}):r.jsx(A,{size:16,style:{margin:"0 4px",minWidth:"16px"}})}),value:a,onChange:v=>D(v.target.value)})}},d={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"Label",value:e,onChange:a=>t(a.target.value),disabled:!0})}},m={render:function(){const[e,t]=n.useState("");return r.jsx(o,{label:"Label",value:e,onChange:a=>t(a.target.value),invalid:!0})}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" placeholder="Placeholder" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,y,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" id="text-input-label" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,V,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="" placeholder="Placeholder" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var C,R,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Amount" placeholder="1.0" type="number" value={value} onChange={event => setValue(event.target.value)} prefix={<IconCurrencyDollar size={16} style={{
      margin: "0 4px",
      minWidth: "16px"
    }} />} />;
  }
}`,...(P=(R=i.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var j,L,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("NN2mdJec,Ff+^[a");
    return <TextInput label="Password" placeholder="password" type={showPassword ? "text" : "password"} suffix={<IconButton onClick={() => setShowPassword(v => !v)} size="S" style={{
      marginRight: "4px"
    }}>
            {showPassword ? <IconEyeOff size={16} style={{
        margin: "0 4px",
        minWidth: "16px"
      }} /> : <IconEye size={16} style={{
        margin: "0 4px",
        minWidth: "16px"
      }} />}
          </IconButton>} value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(T=(L=p.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var k,E,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" value={value} onChange={event => setValue(event.target.value)} disabled />;
  }
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var M,W,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <TextInput label="Label" value={value} onChange={event => setValue(event.target.value)} invalid />;
  }
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Ce=["Basic","Label","Placeholder","Prefix","Suffix","Disabled","Invalid"];export{l as Basic,d as Disabled,m as Invalid,u as Label,c as Placeholder,i as Prefix,p as Suffix,Ce as __namedExportsOrder,we as default};
