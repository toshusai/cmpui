import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-BTgGIVd4.js";import"./index-DnbojIU2.js";import"./index-Dren9rUg.js";import"./index-Cw-4VH1H.js";import"./index-UxT1lfTJ.js";import"./index-DRG_lRMT.js";import"./index-C-35X-_Y.js";import{F as m}from"./index-XX6COvLX.js";import"./index-CtqMlwW_.js";import"./index-BzswFk5K.js";import"./IconButtonGroup-DqfBNjVa.js";import"./index-BQPDHACx.js";import{L as l}from"./index-DXb3pEBC.js";import"./MenuBarButton-CE7qx3gF.js";import"./index-RYns6xqu.js";import"./index-D16Yfzz8.js";import"./index-BT2bw5_6.js";import"./index-jyJWYchm.js";import"./index-Cf6dk9Uu.js";import"./index-xI5C5Vc3.js";import"./index-C0kOzs5V.js";import"./index-Dg9in7Wc.js";import"./index-CRBFmlc0.js";import"./index-B-Yy_oJ1.js";import"./index-YRJ9S26Y.js";import"./index-bCtEw-De.js";import"./index-BqarEWD8.js";import"./index.es-H_zVnTIh.js";import"./classNames-CN4lTu6a.js";import"./px-DWM1exbb.js";import"./mergeRefs-D1znqPHH.js";import"./createDragHandler-DDNYS428.js";import"./MenuListItem-Cc35ocKm.js";import"./inheritsLoose-Co2FXOuK.js";function e({disabled:o,shortcut:n,as:a=l,children:p,...c}){const u=a;return t.jsxs(u,{disabled:o,className:"shortcut-list-item",...c,children:[t.jsx("div",{style:{width:"100%"},children:p}),n&&t.jsx("div",{style:{fontSize:"10px",marginLeft:16,whiteSpace:"nowrap"},children:n})]})}e.__docgenInfo={description:"",methods:[],displayName:"ShortcutListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shortcut:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:`forwardRef(function ListItem<
  T extends CustomJSXElement,
>(
  {
    as: Component = "li",
    children,
    className,
    rounded,
    size = "M",
    disabled,
    ...props
  }: ListItemProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <Component
      className={classNames("cmpui_list-item__root", className)}
      ref={ref}
      aria-selected={props.selected}
      data-size={size}
      data-rounded={rounded}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
})`,computed:!0}}}};const K={title:"Float/FloatBox",component:m},r={render:function(){return t.jsxs(m,{style:{width:128},children:[t.jsx(e,{rounded:!0,size:"S",shortcut:"⌘ Z",children:"Undo"}),t.jsx(e,{rounded:!0,size:"S",shortcut:"⇧ ⌘ Z",children:"Redo"}),t.jsx(e,{rounded:!0,size:"S",shortcut:"⌘ X",children:"Cut"}),t.jsx(e,{rounded:!0,size:"S",shortcut:"⌘ C",children:"Copy"}),t.jsx(e,{rounded:!0,size:"S",shortcut:"⌘ V",children:"Paste"})]})}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <FloatBox style={{
      width: 128
    }}>
        <ShortcutListItem rounded size="S" shortcut="⌘ Z">
          Undo
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⇧ ⌘ Z">
          Redo
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ X">
          Cut
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ C">
          Copy
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ V">
          Paste
        </ShortcutListItem>
      </FloatBox>;
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const Q=["Basic"];export{r as Basic,Q as __namedExportsOrder,K as default};
