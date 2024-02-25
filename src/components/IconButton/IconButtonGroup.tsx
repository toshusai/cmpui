import React, { forwardRef } from "react";
import { classNames } from "../../utils/classNames";

export const IconButtonGroup = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
  }
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("cmpui_icon-button__group", props.className)}
    >
      {props.children}
    </div>
  );
});
