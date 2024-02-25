import{j as i}from"./jsx-runtime-DtaoT6pD.js";import{r as l}from"./index-OjgoNOWw.js";import{R as d}from"./index-Joz1V2Yt.js";import{c as S}from"./createDragHandler-x_VoadIT.js";import"./classNames-pTwYsIK_.js";import"./mergeRefs-mmWAE0a7.js";const B={title:"Components/View/Ruler",component:d,parameters:{layout:"fullscreen"}},r={render:function(){const[n,s]=l.useState(-24),c=S({onDown:t=>({startX:t.clientX,startY:t.clientY,startOffset:n}),onMove:(t,e)=>{if(!e)return;const f=t.clientX-e.startX,a=e.startOffset-f/1;s(a)}});return i.jsx(d,{offset:n,pxPerUnit:1,onPointerDown:c})}},o={render:function(){const[n,s]=l.useState(-24);l.useEffect(()=>{const t=document.getElementById("storybook-root");if(t)return t.style.height="100%",()=>{t.style.height=""}});const c=S({onDown:t=>({startY:t.clientY,startOffset:n}),onMove:(t,e)=>{if(!e)return;const f=t.clientY-e.startY,a=e.startOffset-f/1;s(a)}});return i.jsx("div",{style:{width:"100vh",height:512},children:i.jsx(d,{orientation:"vertical",offset:n,pxPerUnit:1,onPointerDown:c,height:24})})}};var u,p,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const pxPerSec = 1;
    const [offset, setOffset] = useState(-24);
    const handlePointerDown = createDragHandler({
      onDown: e => {
        return {
          startX: e.clientX,
          startY: e.clientY,
          startOffset: offset
        };
      },
      onMove: (e, ctx) => {
        if (!ctx) return;
        const dx = e.clientX - ctx.startX;
        const offset = ctx.startOffset - dx / pxPerSec;
        setOffset(offset);
      }
    });
    return <Ruler offset={offset} pxPerUnit={pxPerSec} onPointerDown={handlePointerDown} />;
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,h,P;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function RenderBasic() {
    const pxPerSec = 1;
    const [offset, setOffset] = useState(-24);
    useEffect(() => {
      const root = document.getElementById("storybook-root");
      if (!root) return;
      root.style.height = "100%";
      return () => {
        root.style.height = "";
      };
    });
    const handlePointerDown = createDragHandler({
      onDown: e => {
        return {
          startY: e.clientY,
          startOffset: offset
        };
      },
      onMove: (e, ctx) => {
        if (!ctx) return;
        const dy = e.clientY - ctx.startY;
        const offset = ctx.startOffset - dy / pxPerSec;
        setOffset(offset);
      }
    });
    return <div style={{
      width: "100vh",
      height: 512
    }}>
        <Ruler orientation="vertical" offset={offset} pxPerUnit={pxPerSec} onPointerDown={handlePointerDown} height={24} />
      </div>;
  }
}`,...(P=(h=o.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const X=["Basic","Vertical"];export{r as Basic,o as Vertical,X as __namedExportsOrder,B as default};
