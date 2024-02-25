import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{r as D}from"./index-OjgoNOWw.js";import{T as H,C as Q,a as v,b as U,i as W,O as y}from"./index-ng_3zWXR.js";import{I as g}from"./Icon-znzPB4bR.js";import{L as X}from"./index-14PbI9Yx.js";import"./index-hC_OXdTA.js";import"./classNames-pTwYsIK_.js";import"./index-Eok78svH.js";import"./index-wq2dZbDE.js";import"./index-mQqIOHEI.js";import"./index--q_WrUwI.js";import"./index-F4RL_6mv.js";import"./index-nFE2FeW6.js";const he={title:"Components/View/TreeView",component:H};function P(){return Math.random().toString(36).slice(2)}const Y=[{id:"root",children:[{id:"src",children:[{id:"image.png",icon:"image"},{id:"music.mp3",icon:"music_note"}]},{id:"lib",children:[{id:"video.mp4",icon:"videocam"},{id:"code.tsx",icon:"code"}]},{id:"child3",children:[{id:"child3-1"},{id:"child3-2"}]}]}];function Z({item:l,open:a,onOpenChange:h,setItems:r,items:c,map:I,depth:O,onOpenContext:E,selected:t,onClick:o}){return n.jsx(Q,{onOpenChange:E,content:n.jsxs(n.Fragment,{children:[l.children!==void 0&&n.jsxs(n.Fragment,{children:[n.jsx(v,{onClick:()=>{l.children?l.children.push({id:P()}):l.children=[{id:`${l.id}-1`}],r([...c])},children:"New File"}),n.jsx(v,{onClick:()=>{var s;(s=l.children)==null||s.push({id:P(),children:[]}),r([...c])},children:"New Folder"}),n.jsx(U,{})]}),n.jsx(v,{onClick:()=>{var i,x,p,u;const s=(i=I.get(l.id))==null?void 0:i.parentId,e=I.get(s??"");if(!e){r(c.filter(j=>j.id!==l.id));return}const m=(x=e.item.children)==null?void 0:x.indexOf(l);if(m===void 0)throw new Error("index not found");(p=e.item.children)==null||p.splice(m,1),((u=e.item.children)==null?void 0:u.length)===0&&(e.item.children=[]),r([...c])},children:"Delete"})]}),children:n.jsxs(X,{style:{display:"flex",alignItems:"center",width:"100%",height:"100%",paddingLeft:(O+1)*8,boxSizing:"border-box",paddingRight:8,gap:4},selected:t,onClick:o,as:"div",children:[l.children===void 0?n.jsx(g,{name:l.icon??"note",size:16,style:{marginLeft:12}}):a?n.jsxs("div",{style:{display:"flex",gap:4,cursor:"pointer"},onClick:()=>{h==null||h(!1)},children:[n.jsx(g,{name:"expand_more",size:16}),n.jsx(g,{name:"folder_open",size:16})]}):n.jsxs("div",{style:{display:"flex",cursor:"pointer",gap:4},onClick:()=>{h==null||h(!0)},children:[n.jsx(g,{name:"chevron_right",size:16}),n.jsx(g,{name:"folder",style:{cursor:"pointer"},size:16})]}),l.id]})})}const C={render:function(){const[a,h]=D.useState([]),[r,c]=D.useState(JSON.parse(JSON.stringify(Y))),I=new Map,O=(t,o)=>{var s;I.set(t.id,{item:t,parentId:o}),(s=t.children)==null||s.forEach(e=>O(e,t.id))};r.forEach(t=>O(t));function E(t,o,s){var p,u,j,S,M,T,_,k,N,F,R,z,b,B,J,L,V,A;const e=I.get(t),m=I.get(o);if(!e||!m)throw new Error("item not found");const i=(p=I.get(e.parentId??""))==null?void 0:p.item,x=(u=I.get(m.parentId??""))==null?void 0:u.item;if(!W(e.item,m.item.id)){if(s===y.Before)if(x===void 0)if(i){const d=(j=i.children)==null?void 0:j.indexOf(e.item);if(d===void 0)throw new Error("index not found");(S=i.children)==null||S.splice(d,1),c([e.item,...r])}else{const d=r.indexOf(e.item),f=r.filter((K,w)=>w!==d);f.unshift(e.item),c(f)}else{const d=(M=x.children)==null?void 0:M.indexOf(m.item);if(d===void 0)throw new Error("index not found");const f=(T=i==null?void 0:i.children)==null?void 0:T.indexOf(e.item);if(f===void 0)throw new Error("index not found");if(i===void 0)throw new Error("srcParent is undefined");(_=i.children)==null||_.splice(f,1),(k=x.children)==null||k.splice(d,0,e.item),c([...r])}else if(s===y.After)if(x===void 0)if(i){const d=(N=i.children)==null?void 0:N.indexOf(e.item);if(d===void 0)throw new Error("index not found");(F=i.children)==null||F.splice(d,1),c([...r,e.item])}else{const d=r.indexOf(e.item),f=r.filter((K,w)=>w!==d);f.push(e.item),c(f)}else{const d=(R=x.children)==null?void 0:R.indexOf(m.item);if(d===void 0)throw new Error("index not found");const f=(z=i==null?void 0:i.children)==null?void 0:z.indexOf(e.item);if(f===void 0)throw new Error("index not found");if(i===void 0)throw new Error("srcParent is undefined");(b=i.children)==null||b.splice(f,1),(B=x.children)==null||B.splice(d+1,0,e.item),c([...r])}else if(s===y.Child)if(i){const d=(J=i.children)==null?void 0:J.indexOf(e.item);if(d===void 0)throw new Error("index not found");if(!m.item.children)return;(L=i.children)==null||L.splice(d,1),(V=m.item.children)==null||V.push(e.item),c([...r])}else{const d=r.indexOf(e.item);if(d===void 0)throw new Error("index not found");if(!m.item.children)return;const f=r.filter((K,w)=>w!==d);(A=m.item.children)==null||A.push(e.item),c(f)}}}return n.jsx(Q,{content:n.jsxs(n.Fragment,{children:[n.jsx(v,{onClick:()=>{const t={id:P()};c([...r,t])},children:"New File"}),n.jsx(v,{onClick:()=>{const t={id:P(),children:[]};c([...r,t])},children:"New Folder"})]}),children:n.jsx("div",{style:{height:256,width:256,overflow:"auto"},children:n.jsx(H,{items:r,shadowRender:t=>{var s,e;if(a.length>1){const m=(s=I.get(a[0]))==null?void 0:s.item;return n.jsxs("div",{children:[m==null?void 0:m.id," + ",a.length-1," more"]})}const o=(e=I.get(t.item.id))==null?void 0:e.item;return n.jsx("div",{children:o==null?void 0:o.id})},render:t=>n.jsx(Z,{...t,selected:a.includes(t.item.id),onOpenContext:o=>{o&&h([t.item.id])},onClick:o=>{if(o.metaKey){h([...a,t.item.id]);return}h([t.item.id])},items:r,setItems:c,map:I}),onOrderChange:(t,o,s)=>{if(a.length===1){E(t,o,s);return}for(const e of a)E(e,o,s)}})})})}};var $,q,G;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [items, setItems] = useState((JSON.parse(JSON.stringify(defaultItems)) as ITree[]));
    const map = new Map<string, {
      item: ITree;
      parentId?: string;
    }>();
    const traverse = (item: ITree, parentId?: string) => {
      map.set(item.id, {
        item,
        parentId: parentId
      });
      item.children?.forEach(child => traverse(child, item.id));
    };
    items.forEach(item => traverse(item));
    function handleOrderChange(src: string, dist: string, type: OrderType | null) {
      const srcItem = map.get(src);
      const distItem = map.get(dist);
      if (!srcItem || !distItem) throw new Error("item not found");
      const srcParent = map.get(srcItem.parentId ?? "")?.item;
      const distParent = map.get(distItem.parentId ?? "")?.item;
      if (inChildren(srcItem.item, distItem.item.id)) return;
      if (type === OrderType.Before) {
        if (distParent === undefined) {
          if (srcParent) {
            const srcIndex = srcParent.children?.indexOf(srcItem.item);
            if (srcIndex === undefined) throw new Error("index not found");
            srcParent.children?.splice(srcIndex, 1);
            setItems([srcItem.item, ...items]);
          } else {
            const srcIndex = items.indexOf(srcItem.item);
            const newItems = items.filter((_, index) => index !== srcIndex);
            newItems.unshift(srcItem.item);
            setItems(newItems);
          }
        } else {
          const distIndex = distParent.children?.indexOf(distItem.item);
          if (distIndex === undefined) throw new Error("index not found");
          const srcIndex = srcParent?.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (srcParent === undefined) throw new Error("srcParent is undefined");
          srcParent.children?.splice(srcIndex, 1);
          distParent.children?.splice(distIndex, 0, srcItem.item);
          setItems([...items]);
        }
      } else if (type === OrderType.After) {
        if (distParent === undefined) {
          if (srcParent) {
            const srcIndex = srcParent.children?.indexOf(srcItem.item);
            if (srcIndex === undefined) throw new Error("index not found");
            srcParent.children?.splice(srcIndex, 1);
            setItems([...items, srcItem.item]);
          } else {
            const srcIndex = items.indexOf(srcItem.item);
            const newItems = items.filter((_, index) => index !== srcIndex);
            newItems.push(srcItem.item);
            setItems(newItems);
          }
        } else {
          const distIndex = distParent.children?.indexOf(distItem.item);
          if (distIndex === undefined) throw new Error("index not found");
          const srcIndex = srcParent?.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (srcParent === undefined) throw new Error("srcParent is undefined");
          srcParent.children?.splice(srcIndex, 1);
          distParent.children?.splice(distIndex + 1, 0, srcItem.item);
          setItems([...items]);
        }
      } else if (type === OrderType.Child) {
        if (srcParent) {
          const srcIndex = srcParent.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (!distItem.item.children) {
            return;
          }
          srcParent.children?.splice(srcIndex, 1);
          distItem.item.children?.push(srcItem.item);
          setItems([...items]);
        } else {
          const srcIndex = items.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (!distItem.item.children) {
            return;
          }
          const newItems = items.filter((_, index) => index !== srcIndex);
          distItem.item.children?.push(srcItem.item);
          setItems(newItems);
        }
      }
    }
    return <ContextMenu content={<>
            <ContextMenuItem onClick={() => {
        const newItem = {
          id: randomId()
        };
        setItems([...items, newItem]);
      }}>
              New File
            </ContextMenuItem>
            <ContextMenuItem onClick={() => {
        const newItem = {
          id: randomId(),
          children: []
        };
        setItems([...items, newItem]);
      }}>
              New Folder
            </ContextMenuItem>
          </>}>
        <div style={{
        height: 256,
        width: 256,
        overflow: "auto"
      }}>
          <TreeView<Item> items={items} shadowRender={props => {
          if (selectedIds.length > 1) {
            const item = map.get(selectedIds[0])?.item;
            return <div>
                    {item?.id} + {selectedIds.length - 1} more
                  </div>;
          }
          const item = map.get(props.item.id)?.item;
          return <div>{item?.id}</div>;
        }} render={props => <RenderItem {...props} selected={selectedIds.includes(props.item.id)} onOpenContext={open => {
          if (open) {
            setSelectedIds([props.item.id]);
          }
        }} onClick={e => {
          if (e.metaKey) {
            setSelectedIds([...selectedIds, props.item.id]);
            return;
          }
          setSelectedIds([props.item.id]);
        }} items={items} setItems={setItems} map={map} />} onOrderChange={(src, dist, type) => {
          if (selectedIds.length === 1) {
            handleOrderChange(src, dist, type);
            return;
          }
          for (const id of selectedIds) {
            handleOrderChange(id, dist, type);
          }
        }} />
        </div>
      </ContextMenu>;
  }
}`,...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ae=["Basic"];export{C as Basic,ae as __namedExportsOrder,he as default};
