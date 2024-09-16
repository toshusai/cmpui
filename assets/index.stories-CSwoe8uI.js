import{j as o}from"./jsx-runtime-DEdD30eg.js";import{i as a}from"./index.es-H_zVnTIh.js";import{r}from"./index-RYns6xqu.js";import{C as D}from"./index-DnbojIU2.js";function b(e,{onDown:s,onUp:n}){const i=t=>{t.key===e&&(n==null||n(t),window.removeEventListener("keyup",i))};return t=>{t.key===e&&(s==null||s(t.nativeEvent),window.addEventListener("keyup",i))}}function Z(){return r.useCallback(e=>{e.currentTarget.focus({preventScroll:!0})},[])}const G={title:"View/CanvasView",component:D,parameters:{layout:"fullscreen"}};function h(e){return o.jsx("div",{style:{width:"100vw",height:512},children:o.jsx(D,{...e,maxScale:50,minScale:.2,content:o.jsx(o.Fragment,{children:o.jsx("div",{style:{width:200,height:100,background:"white"},children:o.jsx("div",{className:"alpha-checker-board",style:{width:200,height:100}})})})})})}const m={render:()=>{const[e,s]=r.useState({x:200,y:100,scale:1}),[n,i]=r.useState([]),u=r.useMemo(()=>[" ","Alt","Shift"].map(c=>b(c,{onDown:l=>{l.preventDefault(),i(y=>y.includes(c)?y:[...y,c])},onUp:()=>{i(l=>l.filter(y=>y!==c))}})),[]),t=c=>{u.map(l=>l(c))},[d,w]=r.useState(a.Auto);r.useEffect(()=>{n.includes(" ")?w(a.Grab):n.includes("Alt")&&n.includes("Shift")?w(a.ZoomOut):n.includes("Alt")?w(a.ZoomIn):w(a.Auto)},[n]);const A=Z();return o.jsx(h,{onKeyDown:t,onChangeView:s,view:e,cursor:d,setCursor:w,onPointerEnter:A})}},v={render:()=>{const[e,s]=r.useState({x:200,y:100,scale:1});return o.jsx(h,{onChangeView:s,view:e,cursor:a.Grab})}},k={render:()=>{const[e,s]=r.useState({x:200,y:100,scale:1}),[n,i]=r.useState(a.ZoomIn);return r.useEffect(()=>{const u=d=>{d.key==="Alt"&&(i(a.ZoomOut),window.addEventListener("keyup",t))},t=d=>{d.key==="Alt"&&i(a.ZoomIn),window.removeEventListener("keyup",t)};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[]),o.jsx(h,{onChangeView:s,view:e,cursor:n})}};var C,p,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1
    });
    const [keyStack, setKeyStack] = useState<string[]>([]);
    const handleKeyDowns = useMemo(() => [" ", "Alt", "Shift"].map(key => createKeyDownUpHandler(key, {
      onDown: e => {
        e.preventDefault();
        setKeyStack(keyStack => {
          if (keyStack.includes(key)) {
            return keyStack;
          }
          return [...keyStack, key];
        });
      },
      onUp: () => {
        setKeyStack(keyStack => keyStack.filter(k => k !== key));
      }
    })), []);
    const handleKeyDown = (e: React.KeyboardEvent) => {
      handleKeyDowns.map(handler => handler(e));
    };
    const [cursor, setCursor] = useState<CanvasViewCursor>(CanvasViewCursor.Auto);
    useEffect(() => {
      if (keyStack.includes(" ")) {
        setCursor(CanvasViewCursor.Grab);
      } else if (keyStack.includes("Alt") && keyStack.includes("Shift")) {
        setCursor(CanvasViewCursor.ZoomOut);
      } else if (keyStack.includes("Alt")) {
        setCursor(CanvasViewCursor.ZoomIn);
      } else {
        setCursor(CanvasViewCursor.Auto);
      }
    }, [keyStack]);
    const handlePointerEnter = usePointerEnterFocus();
    return <BaseStory onKeyDown={handleKeyDown} onChangeView={setView} view={view} cursor={cursor} setCursor={setCursor} onPointerEnter={handlePointerEnter} />;
  }
}`,...(S=(p=m.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var f,V,E;v.parameters={...v.parameters,docs:{...(f=v.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1
    });
    return <BaseStory onChangeView={setView} view={view} cursor={CanvasViewCursor.Grab} />;
  }
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var K,x,g;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1
    });
    const [cursor, setCursor] = useState<CanvasViewCursor>(CanvasViewCursor.ZoomIn);
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setCursor(CanvasViewCursor.ZoomOut);
          window.addEventListener("keyup", handleKeyUp);
        }
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setCursor(CanvasViewCursor.ZoomIn);
        }
        window.removeEventListener("keyup", handleKeyUp);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
    return <BaseStory onChangeView={setView} view={view} cursor={cursor} />;
  }
}`,...(g=(x=k.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const I=["Basic","Grab","Zoom"];export{m as Basic,v as Grab,k as Zoom,I as __namedExportsOrder,G as default};
