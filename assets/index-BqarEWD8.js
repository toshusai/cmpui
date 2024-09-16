import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{r as S}from"./index-D16Yfzz8.js";function _({onDown:n,onMove:a,onUp:e}){return r=>{if(r.buttons===2)return;const d=n==null?void 0:n(r);let i;const l=c=>{i=a==null?void 0:a(c,d,i)},g=c=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",g),e==null||e(c,d,i)};window.addEventListener("pointermove",l),window.addEventListener("pointerup",g)}}const L=t.createContext({treeId:null,setIsDragging:()=>{}}),P=t.createContext({map:new Map});var v=(n=>(n[n.Before=0]="Before",n[n.After=1]="After",n[n.Child=2]="Child",n))(v||{});function j(n,a){if(n.id===a)return!0;if(n.children){for(const e of n.children)if(j(e,a))return!0}return!1}function k(n,a,e){const p=n.currentTarget;if(!(p instanceof HTMLElement))return null;const r=p.getBoundingClientRect(),d=n.clientY-r.top,i=d<r.height/3?v.Before:d>r.height*2/3?v.After:v.Child;return j(a,e.id)||e.children===void 0&&i===v.Child?null:i}function N(n,a,e){const[p,r]=t.useState(!1),[d,i]=t.useState(0),[l,g]=t.useState(0);return{handlePointerDown:t.useMemo(()=>_({onMove:(T,I,w)=>{if(T.pointerType!=="touch")return T.preventDefault(),w?(r(!0),i(T.pageX),g(T.pageY),!0):(n(),!0)},onUp:()=>{r(!1)}}),[n,a]),shadow:p&&S.createPortal(o.jsx("div",{style:{position:"absolute",pointerEvents:"none",display:"flex",left:`${d}px`,top:`${l}px`,opacity:"0.5",boxSizing:"border-box"},children:e}),document.body)}}function q({depth:n=0,updateIndicator:a=k,...e}){var b;const p=e.render,{treeId:r,setIsDragging:d}=t.useContext(L),i=t.useRef(null),{map:l}=t.useContext(P),[g,c]=t.useState(!0),{handlePointerDown:T,shadow:I}=N(()=>{d(e.item.id)},()=>{},(b=e.shadowRender)==null?void 0:b.call(e,{item:e.item,depth:n,open:!1,onOpenChange:()=>{}})),w=t.useCallback(y=>{var u,h;if(!r)return;const s=l.get(r);if(!s)return;const m=a(y,s.item,e.item);(u=e.onOrderChange)==null||u.call(e,r,e.item.id,m),d(null),i.current&&((h=e.onUpdateIndicator)==null||h.call(e,i.current,null,n))},[n,l,e.item,e.onOrderChange,e.onUpdateIndicator,d,r,a]),C=t.useCallback(y=>{var u;if(!r)return;const s=l.get(r);if(!s)return;const m=k(y,s.item,e.item);i.current&&((u=e.onUpdateIndicator)==null||u.call(e,i.current,m,n))},[n,l,e.item,e.onUpdateIndicator,r]),R=t.useMemo(()=>()=>{e.onItemSelect(e.item)},[e.onItemSelect,e.item]);return o.jsxs(o.Fragment,{children:[o.jsxs("li",{onPointerUp:w,onPointerDown:T,onPointerMove:C,ref:i,className:"cmpui_tree-view__item",onClick:R,children:[o.jsx(p,{item:e.item,onOpenChange:c,open:g,depth:n}),I]}),e.item.children&&g&&o.jsx("li",{className:"cmpui_tree-view__item-dir",children:o.jsx("ol",{className:"cmpui_tree-view__item-dir-ol",children:e.item.children.map(y=>o.jsx(q,{updateIndicator:a,render:e.render,shadowRender:e.shadowRender,onOrderChange:e.onOrderChange,onUpdateIndicator:e.onUpdateIndicator,depth:n+1,item:y,isSelected:e.isSelected,onItemSelect:e.onItemSelect},y.id))})})]})}q.__docgenInfo={description:"",methods:[],displayName:"TreeViewItem",props:{depth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},isSelected:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"T"},description:""},onItemSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => void",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"void"}}},description:""},onOrderChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(src: string, dist: string, type: OrderType | null) => void",signature:{arguments:[{type:{name:"string"},name:"src"},{type:{name:"string"},name:"dist"},{type:{name:"union",raw:"OrderType | null",elements:[{name:"OrderType"},{name:"null"}]},name:"type"}],return:{name:"void"}}},description:""},onUpdateIndicator:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  el: HTMLLIElement,
  type: OrderType | null,
  depth: number,
) => void`,signature:{arguments:[{type:{name:"HTMLLIElement"},name:"el"},{type:{name:"union",raw:"OrderType | null",elements:[{name:"OrderType"},{name:"null"}]},name:"type"},{type:{name:"number"},name:"depth"}],return:{name:"void"}}},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: RenderProps<T>) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  depth: number;
  item: T;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
}`,signature:{properties:[{key:"depth",value:{name:"number",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"onOpenChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!0}},{key:"open",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},shadowRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: RenderProps<T>) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  depth: number;
  item: T;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
}`,signature:{properties:[{key:"depth",value:{name:"number",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"onOpenChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!0}},{key:"open",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},updateIndicator:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  e: React.PointerEvent<HTMLLIElement>,
  srcItem: ITree,
  distItem: ITree,
) => OrderType | null`,signature:{arguments:[{type:{name:"ReactPointerEvent",raw:"React.PointerEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"},{type:{name:"signature",type:"object",raw:`{
  id: string;
  children?: ITree[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ITree"}],raw:"ITree[]",required:!1}}]}},name:"srcItem"},{type:{name:"signature",type:"object",raw:`{
  id: string;
  children?: ITree[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ITree"}],raw:"ITree[]",required:!1}}]}},name:"distItem"}],return:{name:"union",raw:"OrderType | null",elements:[{name:"OrderType"},{name:"null"}]}}},description:"",defaultValue:{value:`function defaultIndicatorUpdate(
  e: React.PointerEvent<HTMLLIElement>,
  srcItem: ITree,
  distItem: ITree,
): OrderType | null {
  const el = e.currentTarget;
  if (!(el instanceof HTMLElement)) return null;
  const rect = el.getBoundingClientRect();
  const y = e.clientY - rect.top;

  const orderType =
    y < rect.height / 3
      ? OrderType.Before
      : y > (rect.height * 2) / 3
        ? OrderType.After
        : OrderType.Child;

  if (inChildren(srcItem, distItem.id)) {
    return null;
  }

  if (distItem.children === undefined && orderType === OrderType.Child) {
    return null;
  }

  return orderType;
}`,computed:!1}}}};function M(n){const[a,e]=t.useState(null),[p,r]=t.useState(null),d=t.useMemo(()=>{const s=new Map,m=(u,h)=>{var f;s.set(u.id,{item:u,parentId:h}),(f=u.children)==null||f.forEach(O=>m(O,u.id))};return n.items.forEach(u=>m(u)),s},[n.items]),[i,l]=t.useState(0),[g,c]=t.useState(0),[T,I]=t.useState(0),[w,C]=t.useState(0),[R,b]=t.useState(null),y=t.useRef(null);return o.jsx(P.Provider,{value:{map:d},children:o.jsx(L.Provider,{value:{treeId:p,setIsDragging:r},children:o.jsxs("div",{className:"cmpui_tree-view__root",ref:y,children:[o.jsx("ol",{className:"cmpui_tree-view__ol",children:n.items.map(s=>o.jsx(q,{item:s,isSelected:a===s,onItemSelect:m=>{e(m)},shadowRender:n.shadowRender,render:n.render,onOrderChange:n.onOrderChange,updateIndicator:n.updateIndicator,onUpdateIndicator:(m,u)=>{var E;const h=(E=y.current)==null?void 0:E.getBoundingClientRect();if(!h)return;const f=m.getBoundingClientRect(),O=m.firstElementChild;if(!O)return;const x=parseInt(getComputedStyle(O).paddingLeft);l(x),C(f.width-x),u===v.Child?(c(f.top-h.top),I(f.height)):u===v.Before?(c(f.top-h.top),I(4)):(c(f.top-h.top+f.height-4),I(4)),b(u)}},s.id))}),R!==null&&o.jsx("div",{className:"cmpui_tree-view__drag-indicator","data-order":R,style:{left:i,top:g,width:w,height:T}})]})})})}M.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onOrderChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(src: string, dist: string, type: OrderType | null) => void",signature:{arguments:[{type:{name:"string"},name:"src"},{type:{name:"string"},name:"dist"},{type:{name:"union",raw:"OrderType | null",elements:[{name:"OrderType"},{name:"null"}]},name:"type"}],return:{name:"void"}}},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: RenderProps<T>) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  depth: number;
  item: T;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
}`,signature:{properties:[{key:"depth",value:{name:"number",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"onOpenChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!0}},{key:"open",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},shadowRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: RenderProps<T>) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  depth: number;
  item: T;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
}`,signature:{properties:[{key:"depth",value:{name:"number",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"onOpenChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!0}},{key:"open",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},updateIndicator:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  e: React.PointerEvent<HTMLLIElement>,
  srcItem: ITree,
  distItem: ITree,
) => OrderType | null`,signature:{arguments:[{type:{name:"ReactPointerEvent",raw:"React.PointerEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"},{type:{name:"signature",type:"object",raw:`{
  id: string;
  children?: ITree[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ITree"}],raw:"ITree[]",required:!1}}]}},name:"srcItem"},{type:{name:"signature",type:"object",raw:`{
  id: string;
  children?: ITree[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"ITree"}],raw:"ITree[]",required:!1}}]}},name:"distItem"}],return:{name:"union",raw:"OrderType | null",elements:[{name:"OrderType"},{name:"null"}]}}},description:""}}};export{M as T,_ as c};
