import React, { forwardRef } from "react";

export type MenuBarProps = {
  children: React.ReactNode;
  className?: string;
};

export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  function MenuBar(props, ref) {
    return (
      <div className="cmpui_menu-bar__root" ref={ref}>
        {props.children}
      </div>
    );
  },
);
