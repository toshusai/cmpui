import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{I as t}from"./Icon-CyLbqjB_.js";import{I as g}from"./IconButtonGroup-CNqVmcEZ.js";import{I as e}from"./index-DpXXaser.js";import"./index-CTjT7uj6.js";import"./classNames-CN4lTu6a.js";const E={title:"Actions/IconButton",component:e},_=n.jsxs("svg",{width:"6",height:"6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",bottom:4,right:4,transform:"scaleX(-1)"},children:[n.jsx("title",{children:"corner"}),n.jsx("path",{d:"M0 24V0.00427246L24 24H0Z",fill:"currentColor"})]}),r={render:()=>n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsx(e,{children:n.jsx(t,{filled:!0,name:"arrow_selector_tool",style:{fontSize:20}})}),n.jsxs(e,{selected:!0,children:[n.jsx(t,{name:"square",style:{fontSize:20}}),_]}),n.jsx(e,{children:n.jsx(t,{name:"title",style:{fontSize:20}})})]})},o={render:()=>n.jsx(e,{selected:!0,children:n.jsx(t,{name:"star",style:{fontSize:20}})})},s={render:()=>n.jsx(e,{disabled:!0,children:n.jsx(t,{name:"star",style:{fontSize:20}})})},a={render:()=>n.jsx(e,{size:"S",children:n.jsx(t,{name:"star",style:{fontSize:16}})})},c={render:()=>n.jsxs(g,{children:[n.jsx(e,{children:n.jsx(t,{filled:!0,name:"align_horizontal_left",style:{fontSize:16}})}),n.jsx(e,{selected:!0,children:n.jsx(t,{name:"align_horizontal_center",style:{fontSize:16}})}),n.jsx(e,{children:n.jsx(t,{name:"align_horizontal_right",style:{fontSize:16}})})]})};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      gap: 4
    }}>
        <IconButton>
          <Icon filled name="arrow_selector_tool" style={{
          fontSize: 20
        }} />
        </IconButton>
        <IconButton selected>
          <Icon name="square" style={{
          fontSize: 20
        }} />
          {corner}
        </IconButton>
        <IconButton>
          <Icon name="title" style={{
          fontSize: 20
        }} />
        </IconButton>
      </div>;
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <IconButton selected>
        <Icon name="star" style={{
        fontSize: 20
      }} />
      </IconButton>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var I,f,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <IconButton disabled>
        <Icon name="star" style={{
        fontSize: 20
      }} />
      </IconButton>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,h,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <IconButton size="S">
        <Icon name="star" style={{
        fontSize: 16
      }} />
      </IconButton>;
  }
}`,...(z=(h=a.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var B,j,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <IconButtonGroup>
        <IconButton>
          <Icon filled name="align_horizontal_left" style={{
          fontSize: 16
        }} />
        </IconButton>
        <IconButton selected>
          <Icon name="align_horizontal_center" style={{
          fontSize: 16
        }} />
        </IconButton>
        <IconButton>
          <Icon name="align_horizontal_right" style={{
          fontSize: 16
        }} />
        </IconButton>
      </IconButtonGroup>;
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const A=["Basic","Selected","Disabled","Small","Group"];export{r as Basic,s as Disabled,c as Group,o as Selected,a as Small,A as __namedExportsOrder,E as default};
