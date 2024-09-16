import{j as e}from"./jsx-runtime-DEdD30eg.js";import{S as o,u}from"./index-UxT1lfTJ.js";import"./index-RYns6xqu.js";import"./index-BTgGIVd4.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./px-DWM1exbb.js";import"./index-DRG_lRMT.js";import"./index-BQPDHACx.js";import"./index-CRBFmlc0.js";import"./index-C-35X-_Y.js";import"./index-BT2bw5_6.js";import"./index-D16Yfzz8.js";import"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-jyJWYchm.js";import"./createDragHandler-DDNYS428.js";import"./index-Cf6dk9Uu.js";import"./mergeRefs-D1znqPHH.js";import"./index-xI5C5Vc3.js";import"./MenuListItem-Cc35ocKm.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";const W={title:"Controls/SelectRect",component:o,parameters:{layout:"fullscreen"}},t={render:function(){const{rect:i,onPointerDown:l}=u();return e.jsx("div",{onPointerDown:l,style:{width:"100%",height:512,position:"relative"},children:i&&e.jsx(o,{...i})})}},r={render:function(){return e.jsx("div",{style:{width:"100%",height:512,position:"relative"},children:e.jsx(o,{x:100,y:150,width:200,height:250})})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(c=r.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const X=["Basic","Static"];export{t as Basic,r as Static,X as __namedExportsOrder,W as default};
