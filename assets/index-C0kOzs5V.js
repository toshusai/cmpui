import{j as u}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{Z as f}from"./index.es-H_zVnTIh.js";import{c as h}from"./createDragHandler-DDNYS428.js";function D({min:i=0,max:l=1,step:m=.01,...e}){const s=d.useRef(null),c=l-i,y=d.useMemo(()=>t=>{let n=0;if(t.key==="ArrowLeft"||t.key==="ArrowDown"?n=-1:(t.key==="ArrowRight"||t.key==="ArrowUp")&&(n=1),e.orientation==="vertical"&&(n*=-1),n!==0){const a=m*n,o=f(e.value+a,i,l);e.onChange(o),t.preventDefault()}},[e.onChange,e.orientation,e.value,m,i,l]),w=d.useMemo(()=>h({onDown:t=>{t.stopPropagation();const n=t.currentTarget.getBoundingClientRect(),a=t.clientX-n.left,o=t.clientY-n.top;return{offsetX:a,offsetY:o,startX:t.clientX,startY:t.clientY,value:e.value}},onMove:(t,n)=>{if(!n)return;const a=t.clientX-n.startX,o=t.clientY-n.startY;if(!s.current)return;const g=s.current.getBoundingClientRect();let v;e.orientation==="vertical"?v=n.value+o/g.height*c:v=n.value+a/g.width*c,e.onChange(f(v,i,l))}}),[e.onChange,e.orientation,i,l,c,e.value]),b=d.useMemo(()=>h({onDown:t=>{const n=t.currentTarget.getBoundingClientRect(),a=(t.clientX-n.left)/n.width*c+i;return e.onChange(f(a,i,l)),{startX:t.clientX,startY:t.clientY}},onMove:(t,n)=>{if(!n||!s.current)return;const a=s.current.getBoundingClientRect();let o;e.orientation==="vertical"?o=(t.clientY-a.top)/a.height*c+i:o=(t.clientX-a.left)/a.width*c+i,e.onChange(f(o,i,l))}}),[e.onChange,e.orientation,i,l,c]),r=(e.value-i)/c*100,_=d.useMemo(()=>({width:e.orientation==="vertical"?"100%":`${e.direction==="rtl"?100-r:r}%`,height:e.orientation==="vertical"?`${e.direction==="rtl"?100-r:r}%`:"100%",top:e.orientation==="vertical"&&e.direction==="rtl"?`${r}%`:""}),[e.orientation,e.direction,r]),C=d.useMemo(()=>({left:e.orientation==="vertical"?"":`calc(${r}% - 8px)`,top:e.orientation==="vertical"?`calc(${r}% - 8px)`:""}),[e.orientation,r]);return u.jsx(u.Fragment,{children:u.jsxs("div",{ref:s,onPointerDown:b,className:"cmpui_slider__root","data-orientation":e.orientation,dir:e.direction,"aria-disabled":e.disabled,children:[u.jsx("div",{className:"cmpui_slider__track","data-orientation":e.orientation,children:u.jsx("div",{"data-orientation":e.orientation,className:"cmpui_slider__range",style:_})}),u.jsx("div",{tabIndex:0,onKeyDown:y,"data-orientation":e.orientation,onPointerDown:w,className:"cmpui_slider__nob","aria-label":"Volume",style:C})]})})}D.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.01",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},direction:{required:!1,tsType:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};export{D as S};
