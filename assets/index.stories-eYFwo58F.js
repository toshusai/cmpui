import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{S as s}from"./index-Dg9in7Wc.js";import"./mergeRefs-D1znqPHH.js";import"./createDragHandler-DDNYS428.js";import"./px-DWM1exbb.js";const n=r=>e.jsx("div",{style:{background:r.color,width:"100%",height:"100%",display:"flex",overflow:"auto",position:"relative"},...r,children:e.jsx("div",{style:{width:"100%",pointerEvents:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"32px",position:"absolute"},children:r.name})});n.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{color:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const a=r=>e.jsx("div",{style:{height:"512px",width:"100vw",display:"flex",padding:"4px",boxSizing:"border-box"},children:r.children});a.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Layout/SplitPane",component:s,parameters:{layout:"fullscreen"}},i={render:function(){const[o,t]=p.useState(Array(3).fill(`${33.33333333333333}%`));return e.jsx(a,{children:e.jsxs(s,{type:"horizontal",sizes:o,onChangeRates:t,children:[e.jsx(n,{color:"#a8e6cf",name:"A"}),e.jsx(n,{color:"#dcedc1",name:"B"}),e.jsx(n,{color:"#ffd3b6",name:"C"})]})})}},c={render:function(){const[o]=p.useState(Array(3).fill(`${33.33333333333333}%`));return e.jsx(a,{children:e.jsxs(s,{type:"horizontal",sizes:o,children:[e.jsx(n,{color:"#a8e6cf",name:"A"}),e.jsx(n,{color:"#dcedc1",name:"B"}),e.jsx(n,{color:"#ffd3b6",name:"C"})]})})}},l={render:function(){const[o,t]=p.useState(Array(3).fill(`${33.33333333333333}%`));return e.jsx(a,{children:e.jsxs(s,{type:"horizontal",sizes:o,onChangeRates:t,minSizes:["100px","auto","10%"],maxSizes:["200px","auto","50%"],children:[e.jsx(n,{color:"#a8e6cf",name:"A"}),e.jsx(n,{color:"#dcedc1",name:"B"}),e.jsx(n,{color:"#ffd3b6",name:"C"})]})})}},d={render:function(){const[o,t]=p.useState(Array(3).fill(`${33.33333333333333}%`));return e.jsx(a,{children:e.jsxs(s,{type:"vertical",sizes:o,onChangeRates:t,children:[e.jsx(n,{color:"#a8e6cf",name:"A"},0),e.jsx(n,{color:"#dcedc1",name:"B"},1),e.jsx(n,{color:"#ffd3b6",name:"C"},2)]})})}};var m,u,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(Array(3).fill(\`\${1 / 3 * 100}%\`));
    return <Root>
        <SplitPane type="horizontal" sizes={sizes} onChangeRates={setSizes}>
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>;
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,z,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    const [sizes] = useState<string[]>(Array(3).fill(\`\${1 / 3 * 100}%\`));
    return <Root>
        <SplitPane type="horizontal" sizes={sizes}>
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>;
  }
}`,...(S=(z=c.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var h,y,R;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(Array(3).fill(\`\${1 / 3 * 100}%\`));
    return <Root>
        <SplitPane type="horizontal" sizes={sizes} onChangeRates={setSizes} minSizes={["100px", "auto", "10%"]} maxSizes={["200px", "auto", "50%"]}>
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>;
  }
}`,...(R=(y=l.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var j,g,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(Array(3).fill(\`\${1 / 3 * 100}%\`));
    return <Root>
        <SplitPane type="vertical" sizes={sizes} onChangeRates={setSizes}>
          <Panel key={0} color="#a8e6cf" name="A" />
          <Panel key={1} color="#dcedc1" name="B" />
          <Panel key={2} color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>;
  }
}`,...(P=(g=d.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const _=["Horizontal","Readonly","MinMax","Vertical"];export{i as Horizontal,l as MinMax,c as Readonly,d as Vertical,_ as __namedExportsOrder,w as default};
