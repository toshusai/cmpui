import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{c as t}from"./clamp-co6UzHBn.js";import{C as a}from"./index-B3L6MP2w.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-C3vRDm1t.js";const E={title:"Controls/CubicControls",component:a},o={render:function(){const[e,i]=x.useState([{type:"move",x:0,y:100},{type:"cubic",x:100,y:0,x1:50,y1:100,x2:50,y2:0}]),p=e[1];return r.jsx("div",{style:{width:100,height:100,position:"relative"},children:r.jsx(a,{prev:e[0],cubic:p,onChange:n=>{n.x=t(n.x,0,100),n.y=t(n.y,0,100),n.x1=t(n.x1,0,100),n.y1=t(n.y1,0,100),n.x2=t(n.x2,0,100),n.y2=t(n.y2,0,100),i([e[0],n])}})})}};var c,m,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [commands, setCommands] = useState<Command[]>([{
      type: "move",
      x: 0,
      y: 100
    }, {
      type: "cubic",
      x: 100,
      y: 0,
      x1: 50,
      y1: 100,
      x2: 50,
      y2: 0
    }]);
    const cubic = (commands[1] as CubicCommand);
    return <div style={{
      width: 100,
      height: 100,
      position: "relative"
    }}>
        <CubicControls prev={commands[0]} cubic={cubic} onChange={cubic => {
        cubic.x = clamp(cubic.x, 0, 100);
        cubic.y = clamp(cubic.y, 0, 100);
        cubic.x1 = clamp(cubic.x1, 0, 100);
        cubic.y1 = clamp(cubic.y1, 0, 100);
        cubic.x2 = clamp(cubic.x2, 0, 100);
        cubic.y2 = clamp(cubic.y2, 0, 100);
        setCommands([commands[0], cubic]);
      }} />
      </div>;
  }
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,E as default};
