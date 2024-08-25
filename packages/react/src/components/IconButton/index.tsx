import { forwardRef } from "react";

import { classNames } from "../../utils/classNames";

export type IconButton = {
  selected?: boolean;
  size?: "S" | "M";
} & JSX.IntrinsicElements["button"];

export const IconButton = forwardRef<HTMLButtonElement, IconButton>(
  function IconButton(
    { children, size = "M", selected, className, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={classNames("cmpui_icon-button__root", className)}
        aria-selected={selected}
        data-size={size}
        {...props}
      >
        {children}
      </button>
    );
  },
);
