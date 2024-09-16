import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{B as j}from"./index-BTgGIVd4.js";import{I as P}from"./index-BzswFk5K.js";import{T as R}from"./index-YRJ9S26Y.js";import{c as S}from"./createReactComponent-BtrV2-Xk.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./index-XX6COvLX.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";/**
 * @license @tabler/icons-react v3.15.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _=S("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const i=s.createContext({addToast:()=>{throw new Error("ToastContext not found")},removeToast:()=>{throw new Error("ToastContext not found")},getToasts:()=>{throw new Error("ToastContext not found")}});function p(e){const[o,r]=s.useState([]),m=(u,l)=>{const n=o.length.toString();r(I=>[...I,{vNode:u(()=>{r(w=>w.filter(y=>y.id!==n))}),props:l,id:n}])},g=u=>{r(l=>l.filter(n=>n.id!==u))},B=()=>o;return t.jsx(i.Provider,{value:{addToast:m,removeToast:g,getToasts:B},children:e.children})}p.__docgenInfo={description:"",methods:[],displayName:"ToastContextProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function c(){const e=s.useContext(i);return t.jsx("div",{className:"cmpui_toaster",children:e.getToasts().map(o=>t.jsx(R,{show:!0,onClose:()=>{console.log("removeToast",o.id),e.removeToast(o.id)},...o.props,children:o.vNode},o.id))})}c.__docgenInfo={description:"",methods:[],displayName:"Toaster"};const H={title:"Float/Toaster",component:c},a={render:function(){return t.jsx(t.Fragment,{children:t.jsxs(p,{children:[t.jsx(A,{}),t.jsx(c,{})]})})}};function A(){const e=s.useContext(i),[o,r]=s.useState(0);return t.jsx(j,{onClick:()=>{r(o+1),e.addToast(()=>t.jsxs("div",{children:["This is a toast ",o]}))},children:"Add Toast"})}const d={render:function(){return t.jsx(t.Fragment,{children:t.jsxs(p,{children:[t.jsx(E,{}),t.jsx(c,{})]})})}};function E(){const e=s.useContext(i),[o,r]=s.useState(0);return t.jsx(j,{onClick:()=>{r(o+1),e.addToast(m=>t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsxs("div",{children:["This is a toast ",o]}),t.jsx(P,{size:"S",onClick:m,children:t.jsx(_,{size:16})})]}),{time:0})},children:"Add Toast"})}var x,T,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    return <>
        <ToastContextProvider>
          <AddToastButton />
          <Toaster />
        </ToastContextProvider>
      </>;
  }
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var f,v,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    return <>
        <ToastContextProvider>
          <AddToastButton2 />
          <Toaster />
        </ToastContextProvider>
      </>;
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const J=["Basic","Controlled"];export{a as Basic,d as Controlled,J as __namedExportsOrder,H as default};
