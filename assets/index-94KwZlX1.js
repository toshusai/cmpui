import{j as v}from"./jsx-runtime-DtaoT6pD.js";import{r as N,R as H}from"./index-OjgoNOWw.js";import{m as L}from"./mergeRefs-mmWAE0a7.js";import{c as T}from"./createDragHandler-x_VoadIT.js";import{p as d}from"./px-FpDDCCze.js";function Y(P,n,e,u,i){const a=N.useRef(null),o=N.useRef([]),w=N.useRef(0),E=T({onDown:m=>{const l=w.current,t=a.current,r=o.current[l],_=o.current[l+1];if(t==null||r==null||_==null)return;const x=r.getBoundingClientRect(),p=_.getBoundingClientRect(),c=m.clientX;return{i:l,startX:c,startY:m.clientY,leftRect:x,rightRect:p}},onMove:(m,l)=>{var B,G;if(l===void 0)return;const t=l.i,r=P==="horizontal"?m.clientX-l.startX:m.clientY-l.startY,_=o.current[t],x=o.current[t+1];let p=0,c=0,s=0;if(_===void 0||x===void 0)return;P==="horizontal"?(p=((B=a.current)==null?void 0:B.getBoundingClientRect().width)??0,c=l.leftRect.width,s=l.rightRect.width):(p=((G=a.current)==null?void 0:G.getBoundingClientRect().height)??0,c=l.leftRect.height,s=l.rightRect.height);let g=-Number.MAX_SAFE_INTEGER;u[t].includes("px")?g=parseInt(u[t]):u[t].includes("%")&&(g=parseInt(u[t])/100*p);let j=Number.MAX_SAFE_INTEGER;e[t].includes("px")?j=parseInt(e[t]):e[t].includes("%")&&(j=parseInt(e[t])/100*p);const f=[...n],b=c+r;let I=r;if(b<g){I=g-c,f[t]=d(c+I),f[t+1]=d(s-I),i==null||i(f);return}if(b>j){I=j-c,f[t]=d(c+I),f[t+1]=d(s-I),i==null||i(f);return}let D=-Number.MAX_SAFE_INTEGER;u[t+1].includes("px")?D=parseInt(u[t+1]):u[t+1].includes("%")&&(D=parseInt(u[t+1])/100*p);let F=Number.MAX_SAFE_INTEGER;e[t+1].includes("px")?F=parseInt(e[t+1]):e[t+1].includes("%")&&(F=parseInt(e[t+1])/100*p);const M=s-r;let A=-r;if(M<D){A=s-D,f[t]=d(c+A),f[t+1]=d(s-A),i==null||i(f);return}if(M>F){A=s-F,f[t]=d(c+A),f[t+1]=d(s-A),i==null||i(f);return}f[t]=d(c+r),f[t+1]=d(s-r),i==null||i(f)}}),X=N.useCallback(m=>l=>{w.current=m,E(l)},[E]);return{rootRef:a,refs:o,handlePointerDownForRef:X}}const R=N.forwardRef(function({children:n,type:e,onChangeRates:u,...i},a){let o=i.sizes??Array((n==null?void 0:n.length)??0).fill("100%");o.length<((n==null?void 0:n.length)??0)&&(o=o.concat(Array(((n==null?void 0:n.length)??0)-o.length).fill("100%")));const w=i.minSizes??Array(o.length).fill("auto"),E=i.maxSizes??Array(o.length).fill("auto"),{rootRef:X,refs:m,handlePointerDownForRef:l}=Y(e,o,E,w,t=>{u==null||u(t)});return v.jsx(v.Fragment,{children:v.jsx("div",{ref:L(X,a),className:"cmpui_split-pane__root","data-orientation":e,children:(n==null?void 0:n.map((t,r)=>v.jsxs(H.Fragment,{children:[v.jsx("div",{ref:_=>{_!==null&&(m.current[r]=_)},className:"cmpui_split-pane__child",style:{width:e==="horizontal"?o[r]:"100%",height:e==="vertical"?o[r]:"100%",minWidth:e==="horizontal"?w[r]:void 0,minHeight:e==="vertical"?w[r]:void 0,maxWidth:e==="horizontal"?E[r]:void 0,maxHeight:e==="vertical"?E[r]:void 0},children:t}),r!==n.length-1&&v.jsx("div",{className:"cmpui_split-pane__divider","data-orientation":e,"data-resizable":u!=null,children:v.jsx("div",{onPointerDown:l(r)})})]},`${r}`)))??null})})});R.__docgenInfo={description:"",methods:[],displayName:"SplitPane"};export{R as S};
