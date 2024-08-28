import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as q}from"./index-CTjT7uj6.js";import{I as g}from"./Icon-CyLbqjB_.js";import{T as k,C as Y,a as v,b as Z,i as ee,O as S}from"./index-D9nq7hlE.js";import{L as ne}from"./index-DCmEyuZs.js";import"./index-BVhRoD2p.js";import"./classNames-CN4lTu6a.js";import"./index-D3iKhckW.js";import"./index-CYM-y3Gt.js";import"./index-kTCvGdNn.js";import"./index-BpKo_AiQ.js";import"./index-sQDGARt6.js";const pe={title:"View/TreeView",component:k};function P(){return Math.random().toString(36).slice(2)}const ie=[{id:"root",children:[{id:"src",children:[{id:"image.png",icon:"image"},{id:"music.mp3",icon:"music_note"}]},{id:"lib",children:[{id:"video.mp4",icon:"videocam"},{id:"code.tsx",icon:"code"}]},{id:"child3",children:[{id:"child3-1"},{id:"child3-2"}]}]}];function te({item:m,open:h,onOpenChange:I,setItems:r,items:c,map:a,depth:O,onOpenContext:E,selected:i,onClick:o}){return n.jsx(Y,{onOpenChange:E,content:n.jsxs(n.Fragment,{children:[m.children!==void 0&&n.jsxs(n.Fragment,{children:[n.jsx(v,{onClick:()=>{m.children?m.children.push({id:P()}):m.children=[{id:`${m.id}-1`}],r([...c])},children:"New File"}),n.jsx(v,{onClick:()=>{var s;(s=m.children)==null||s.push({id:P(),children:[]}),r([...c])},children:"New Folder"}),n.jsx(Z,{})]}),n.jsx(v,{onClick:()=>{var t,x,p,u;const s=(t=a.get(m.id))==null?void 0:t.parentId,e=a.get(s??"");if(!e){r(c.filter(j=>j.id!==m.id));return}const l=(x=e.item.children)==null?void 0:x.indexOf(m);if(l===void 0)throw new Error("index not found");(p=e.item.children)==null||p.splice(l,1),((u=e.item.children)==null?void 0:u.length)===0&&(e.item.children=[]),r([...c])},children:"Delete"})]}),children:n.jsxs(ne,{style:{display:"flex",alignItems:"center",width:"100%",height:"100%",paddingLeft:(O+1)*8,boxSizing:"border-box",paddingRight:8,gap:4},selected:i,onClick:o,as:"div",children:[m.children===void 0?n.jsx(g,{name:m.icon??"note",size:16,style:{marginLeft:12}}):h?n.jsxs("div",{style:{display:"flex",gap:4,cursor:"pointer"},onClick:()=>{I==null||I(!1)},children:[n.jsx(g,{name:"expand_more",size:16}),n.jsx(g,{name:"folder_open",size:16})]}):n.jsxs("div",{style:{display:"flex",cursor:"pointer",gap:4},onClick:()=>{I==null||I(!0)},children:[n.jsx(g,{name:"chevron_right",size:16}),n.jsx(g,{name:"folder",style:{cursor:"pointer"},size:16})]}),m.id]})})}const y={render:function(){const[h,I]=q.useState([]),[r,c]=q.useState(JSON.parse(JSON.stringify(ie))),a=new Map,O=(i,o)=>{var s;a.set(i.id,{item:i,parentId:o}),(s=i.children)==null||s.forEach(e=>O(e,i.id))};r.forEach(i=>O(i));function E(i,o,s){var p,u,j,T,M,_,N,R,b,F,z,B,L,V,J,$,A,K;const e=a.get(i),l=a.get(o);if(!e||!l)throw new Error("item not found");const t=(p=a.get(e.parentId??""))==null?void 0:p.item,x=(u=a.get(l.parentId??""))==null?void 0:u.item;if(!ee(e.item,l.item.id)){if(s===S.Before)if(x===void 0)if(t){const d=(j=t.children)==null?void 0:j.indexOf(e.item);if(d===void 0)throw new Error("index not found");(T=t.children)==null||T.splice(d,1),c([e.item,...r])}else{const d=r.indexOf(e.item),f=r.filter((D,w)=>w!==d);f.unshift(e.item),c(f)}else{const d=(M=x.children)==null?void 0:M.indexOf(l.item);if(d===void 0)throw new Error("index not found");const f=(_=t==null?void 0:t.children)==null?void 0:_.indexOf(e.item);if(f===void 0)throw new Error("index not found");if(t===void 0)throw new Error("srcParent is undefined");(N=t.children)==null||N.splice(f,1),(R=x.children)==null||R.splice(d,0,e.item),c([...r])}else if(s===S.After)if(x===void 0)if(t){const d=(b=t.children)==null?void 0:b.indexOf(e.item);if(d===void 0)throw new Error("index not found");(F=t.children)==null||F.splice(d,1),c([...r,e.item])}else{const d=r.indexOf(e.item),f=r.filter((D,w)=>w!==d);f.push(e.item),c(f)}else{const d=(z=x.children)==null?void 0:z.indexOf(l.item);if(d===void 0)throw new Error("index not found");const f=(B=t==null?void 0:t.children)==null?void 0:B.indexOf(e.item);if(f===void 0)throw new Error("index not found");if(t===void 0)throw new Error("srcParent is undefined");(L=t.children)==null||L.splice(f,1),(V=x.children)==null||V.splice(d+1,0,e.item),c([...r])}else if(s===S.Child)if(t){const d=(J=t.children)==null?void 0:J.indexOf(e.item);if(d===void 0)throw new Error("index not found");if(!l.item.children)return;($=t.children)==null||$.splice(d,1),(A=l.item.children)==null||A.push(e.item),c([...r])}else{const d=r.indexOf(e.item);if(d===void 0)throw new Error("index not found");if(!l.item.children)return;const f=r.filter((D,w)=>w!==d);(K=l.item.children)==null||K.push(e.item),c(f)}}}return n.jsx(Y,{content:n.jsxs(n.Fragment,{children:[n.jsx(v,{onClick:()=>{const i={id:P()};c([...r,i])},children:"New File"}),n.jsx(v,{onClick:()=>{const i={id:P(),children:[]};c([...r,i])},children:"New Folder"})]}),children:n.jsx("div",{style:{height:256,width:256,overflow:"auto"},children:n.jsx(k,{items:r,shadowRender:i=>{var s,e;if(h.length>1){const l=(s=a.get(h[0]))==null?void 0:s.item;return n.jsxs("div",{children:[l==null?void 0:l.id," + ",h.length-1," more"]})}const o=(e=a.get(i.item.id))==null?void 0:e.item;return n.jsx("div",{children:o==null?void 0:o.id})},render:i=>n.jsx(te,{...i,selected:h.includes(i.item.id),onOpenContext:o=>{o&&I([i.item.id])},onClick:o=>{if(o.metaKey){I([...h,i.item.id]);return}I([i.item.id])},items:r,setItems:c,map:a}),onOrderChange:(i,o,s)=>{if(h.length===1){E(i,o,s);return}for(const e of h)E(e,o,s)}})})})}},C={render:function(){return n.jsx("div",{style:{width:256,paddingBottom:32,overflow:"auto"},children:n.jsx(k,{items:[{id:"root",children:[{id:"child-1",children:[{id:"child-1-1",children:[{id:"child-1-1-1",children:[{id:"child-1-1-1-1",children:[{id:"child-1-1-1-1-1",children:[{id:"child-1-1-1-1-1-1",children:[{id:"child-1-1-1-1-1-1-1",children:[{id:"child-1-1-1-1-1-1-1-1",children:[{id:"child-1-1-1-1-1-1-1-1-1",children:[{id:"child-1-1-1-1-1-1-1-1-1-1"}]}]}]}]}]}]}]}]}]}]}],render:h=>n.jsx("div",{style:{backgroundColor:`rgba(0, 0, 0, ${.05+h.depth*.05})`,paddingLeft:h.depth*16,whiteSpace:"nowrap"},children:h.item.id})})})}};var G,H,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=y.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,W,X;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 256,
      paddingBottom: 32,
      overflow: "auto"
    }}>
        <TreeView items={[{
        id: "root",
        children: [{
          id: "child-1",
          children: [{
            id: "child-1-1",
            children: [{
              id: "child-1-1-1",
              children: [{
                id: "child-1-1-1-1",
                children: [{
                  id: "child-1-1-1-1-1",
                  children: [{
                    id: "child-1-1-1-1-1-1",
                    children: [{
                      id: "child-1-1-1-1-1-1-1",
                      children: [{
                        id: "child-1-1-1-1-1-1-1-1",
                        children: [{
                          id: "child-1-1-1-1-1-1-1-1-1",
                          children: [{
                            id: "child-1-1-1-1-1-1-1-1-1-1"
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]} render={props => <div style={{
        backgroundColor: \`rgba(0, 0, 0, \${0.05 + props.depth * 0.05})\`,
        paddingLeft: props.depth * 16,
        whiteSpace: "nowrap"
      }}>
              {props.item.id}
            </div>} />
      </div>;
  }
}`,...(X=(W=C.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ue=["Basic","Scroll"];export{y as Basic,C as Scroll,ue as __namedExportsOrder,pe as default};
