import{j as n}from"./jsx-runtime-DEdD30eg.js";import{p}from"./index.es-H_zVnTIh.js";import{r as a}from"./index-RYns6xqu.js";import{L as l}from"./index-DXb3pEBC.js";function m({defaultValue:e,autoFocus:i,onSelect:r,children:o,...u}){const s=a.useRef(null);return a.useEffect(()=>{i!==!1&&setTimeout(()=>{var t;(t=s.current)==null||t.focus({preventScroll:!0})},0)},[i]),a.useEffect(()=>{const t=p(s.current,d=>{r==null||r(d)},{defaultValue:e});return()=>{t()}},[e,r]),n.jsx("div",{ref:s,className:"cmpui_menu-list",role:"listbox",tabIndex:-1,...u,children:o})}m.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function c(e){return n.jsx(l,{...e,tabIndex:0,"data-value":e.value})}c.__docgenInfo={description:"",methods:[],displayName:"MenuListItem",props:{as:{required:!1,tsType:{name:"T"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"S" | "M"',elements:[{name:"literal",value:'"S"'},{name:"literal",value:'"M"'}]},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};export{m as M,c as a};
