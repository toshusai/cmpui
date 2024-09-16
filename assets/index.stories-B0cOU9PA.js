import{j as t}from"./jsx-runtime-DEdD30eg.js";import{L as m}from"./index-DXb3pEBC.js";import{T as o}from"./index-BqarEWD8.js";import"./index-RYns6xqu.js";import"./classNames-CN4lTu6a.js";import"./index-D16Yfzz8.js";const f={title:"View/TreeView",component:o},e={render:function(){const s=[{id:"1",text:"One"},{id:"2",text:"Two",children:[{id:"3",text:"Three",children:[{id:"5",text:"Five"}]},{id:"6",text:"Six"}]},{id:"4",text:"Four"}];return t.jsx("div",{style:{height:256,width:256,overflow:"auto"},children:t.jsx(o,{items:s,render:n=>t.jsx(m,{style:{paddingLeft:`${n.depth*16+8}px`},children:n.item.text})})})}};var i,r,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const items: Item[] = [{
      id: "1",
      text: "One"
    }, {
      id: "2",
      text: "Two",
      children: [{
        id: "3",
        text: "Three",
        children: [{
          id: "5",
          text: "Five"
        }]
      }, {
        id: "6",
        text: "Six"
      }]
    }, {
      id: "4",
      text: "Four"
    }];
    return <div style={{
      height: 256,
      width: 256,
      overflow: "auto"
    }}>
        <TreeView<Item> items={items} render={props => <ListItem style={{
        paddingLeft: \`\${props.depth * 16 + 8}px\`
      }}>
              {props.item.text}
            </ListItem>} />
      </div>;
  }
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const w=["Basic"];export{e as Basic,w as __namedExportsOrder,f as default};
