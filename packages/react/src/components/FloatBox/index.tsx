import { forwardRef } from "react";

import { classNames } from "../../utils/classNames";

export const FloatBox = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  function FloatBox({ className, ...props }, ref) {
    return (
      <div
        className={classNames("cmpui_float-box__root", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
