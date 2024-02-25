import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{r as s}from"./index-OjgoNOWw.js";import{C as g}from"./alpha-checker-board-4wBnyHDu.js";import"./createDragHandler-x_VoadIT.js";function C(e,{onDown:r,onUp:n}){const a=t=>{t.key===e&&(n==null||n(t),window.removeEventListener("keyup",a))};return t=>{t.key===e&&(r==null||r(t.nativeEvent),window.addEventListener("keyup",a))}}function j(){return s.useCallback(e=>{e.currentTarget.focus({preventScroll:!0})},[])}const b={title:"Components/View/CanvasView",component:g,parameters:{layout:"fullscreen"}};function k(e){return o.jsx("div",{style:{width:"100vw",height:512},children:o.jsx(g,{...e,maxScale:50,minScale:.2,content:o.jsx(o.Fragment,{children:o.jsx("div",{style:{width:200,height:100,background:"white"},children:o.jsx("div",{className:"alpha-checker-board",style:{width:200,height:100}})})})})})}const w={render:()=>{const[e,r]=s.useState({x:200,y:100,scale:1}),[n,a]=s.useState([]),c=s.useMemo(()=>[" ","Alt","Shift"].map(i=>C(i,{onDown:u=>{u.preventDefault(),a(l=>l.includes(i)?l:[...l,i])},onUp:()=>{a(u=>u.filter(l=>l!==i))}})),[]),t=i=>{c.map(u=>u(i))},d=s.useMemo(()=>n.includes(" ")?"pan":n.includes("Alt")&&n.includes("Shift")?"zoom-out":n.includes("Alt")?"zoom-in":"default",[n]),D=j();return o.jsx(k,{onKeyDown:t,onChangeView:r,view:e,mode:d,onPointerEnter:D})}},y={render:()=>{const[e,r]=s.useState({x:200,y:100,scale:1});return o.jsx(k,{onChangeView:r,view:e,mode:"pan"})}},m={render:()=>{const[e,r]=s.useState({x:200,y:100,scale:1}),[n,a]=s.useState("zoom-in");return s.useEffect(()=>{const c=d=>{d.key==="Alt"&&(a("zoom-out"),window.addEventListener("keyup",t))},t=d=>{d.key==="Alt"&&a("zoom-in"),window.removeEventListener("keyup",t)};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[]),o.jsx(k,{onChangeView:r,view:e,mode:n})}};var h,p,v;w.parameters={...w.parameters,docs:{...(h=w.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const mode = useMemo(() => {
      if (keyStack.includes(" ")) {
        return "pan";
      }
      if (keyStack.includes("Alt") && keyStack.includes("Shift")) {
        return "zoom-out";
      }
      if (keyStack.includes("Alt")) {
        return "zoom-in";
      }
      return "default";
    }, [keyStack]);
    const handlePointerEnter = usePointerEnterFocus();
    return <BaseStory onKeyDown={handleKeyDown} onChangeView={setView} view={view} mode={mode} onPointerEnter={handlePointerEnter} />;
  }
}`,...(v=(p=w.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var S,f,K;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1
    });
    return <BaseStory onChangeView={setView} view={view} mode={"pan"} />;
  }
}`,...(K=(f=y.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};var E,V,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1
    });
    const [mode, setMode] = useState<ViewMode>("zoom-in");
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setMode("zoom-out");
          window.addEventListener("keyup", handleKeyUp);
        }
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setMode("zoom-in");
        }
        window.removeEventListener("keyup", handleKeyUp);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
    return <BaseStory onChangeView={setView} view={view} mode={mode} />;
  }
}`,...(x=(V=m.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const P=["Basic","Grab","Zoom"];export{w as Basic,y as Grab,m as Zoom,P as __namedExportsOrder,b as default};
