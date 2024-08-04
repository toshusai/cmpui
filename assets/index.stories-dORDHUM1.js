import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{l as o,u}from"./index-yf8mkK-1.js";import"./index-aXz8NaAs.js";/* empty css               */import"./index-Kq3z_NZE.js";import"./createDragHandler-nJMxlNVC.js";import"./index-0ceNsg1m.js";import"./classNames-pTwYsIK_.js";import"./px-FpDDCCze.js";import"./index-U9bU_qbB.js";import"./index-5ui4R9NG.js";import"./alpha-checker-board-CANUayoU.js";import"./index-TRwoWG8Q.js";import"./index-btd8k4jy.js";import"./clamp-xqaTU5Qn.js";import"./index-AYEmu2YI.js";import"./useTouchStartPrevent-kBVXV8Ya.js";import"./index-uWlkGYMJ.js";import"./index-D9RaxIjz.js";import"./index-xX_uHqPz.js";import"./extends-dGVwEr9R.js";import"./index-M7H33-mE.js";import"./index-n3prD_Ok.js";import"./index-YkBf51cs.js";import"./index-MW3rGVG_.js";import"./index-sSXR_LKw.js";import"./index-NAhdMhKS.js";import"./index-nuWmM7Ma.js";import"./DropdownMenuItem-TbdlQnuP.js";import"./index-CYasbvvH.js";import"./index-MoE7EhU4.js";import"./IconButtonGroup-Vbjsao9W.js";import"./index-9ZytVVav.js";import"./index-Oh1OAjsI.js";import"./mergeRefs-mmWAE0a7.js";import"./index-K1fIJHIl.js";import"./index-DbrhxBeW.js";import"./index-x7ZWNYQl.js";import"./index-gJCp1G9s.js";import"./index-xx6ZF_mx.js";import"./index-a-IPPCxZ.js";const rt={title:"Controls/SelectRect",component:o,parameters:{layout:"fullscreen"}},t={render:function(){const{rect:i,onPointerDown:l}=u();return e.jsx("div",{onPointerDown:l,style:{width:"100%",height:512,position:"relative"},children:i&&e.jsx(o,{...i})})}},r={render:function(){return e.jsx("div",{style:{width:"100%",height:512,position:"relative"},children:e.jsx(o,{x:100,y:150,width:200,height:250})})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const {
      rect,
      onPointerDown
    } = useSelectRectHandler();
    return <div onPointerDown={onPointerDown} style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        {rect && <SelectRect {...rect} />}
      </div>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,c,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: "100%",
      height: 512,
      position: "relative"
    }}>
        {<SelectRect x={100} y={150} width={200} height={250} />}
      </div>;
  }
}`,...(a=(c=r.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const et=["Basic","Static"];export{t as Basic,r as Static,et as __namedExportsOrder,rt as default};
