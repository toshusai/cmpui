import React, { forwardRef } from "react";

import { classNames } from "../../utils/classNames";

export type MenuBarButtonProps = {
  selected?: boolean;
} & Omit<React.ComponentProps<"button">, "content">;

export const MenuBarButton = forwardRef<HTMLButtonElement, MenuBarButtonProps>(
  ({ selected, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames("cmpui_menu-bar-button__root", props.className)}
        type="button"
        data-selected={selected}
        {...props}
      >
        {props.children}
      </button>
    );
  },
);
