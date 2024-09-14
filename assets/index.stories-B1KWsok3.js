import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{k as o,u}from"./index-WZGREwkT.js";import"./index-CTjT7uj6.js";import"./index-BdrDrc7S.js";import"./createDragHandler-DDNYS428.js";import"./index-BAejv6NV.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./index-Et-kLNzN.js";import"./index-PmdniGp2.js";import"./index.es-CljsIJ_K.js";import"./index-B0aGP_7T.js";import"./index-DPLXiksS.js";import"./index-3jSAGwTI.js";import"./clamp-co6UzHBn.js";import"./index-DRqqH17F.js";import"./index-NsRgp_yC.js";import"./index-BVhRoD2p.js";import"./index-DCmEyuZs.js";import"./index-DVQbr_LR.js";import"./index-CYM-y3Gt.js";import"./index-CsRt--OO.js";import"./index-DE3JpOvA.js";import"./index-DU9HO3_w.js";import"./index-B3L6MP2w.js";import"./index-C3vRDm1t.js";import"./DropdownMenuItem-CiPQ_PYB.js";import"./index-D9aJJu6P.js";import"./index-DpXXaser.js";import"./IconButtonGroup-CNqVmcEZ.js";import"./index-CDx_o3yU.js";import"./index-BPVpoRAo.js";import"./mergeRefs-D1znqPHH.js";import"./index-91UZ0hjQ.js";import"./index-FzlHB9oK.js";import"./index-CL60H3As.js";import"./index-BoQn9C7d.js";import"./index-CsQnl2H3.js";import"./index-DGvzY3Pe.js";const $={title:"Controls/SelectRect",component:o,parameters:{layout:"fullscreen"}},t={render:function(){const{rect:i,onPointerDown:l}=u();return e.jsx("div",{onPointerDown:l,style:{width:"100%",height:512,position:"relative"},children:i&&e.jsx(o,{...i})})}},r={render:function(){return e.jsx("div",{style:{width:"100%",height:512,position:"relative"},children:e.jsx(o,{x:100,y:150,width:200,height:250})})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(c=r.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const tt=["Basic","Static"];export{t as Basic,r as Static,tt as __namedExportsOrder,$ as default};
