import { forwardRef } from "react";
import { classNames } from "../../utils/classNames";
import { px } from "../../utils/px";

import "./index.css";

export type CircleProps = {
  x: number;
  y: number;
  className?: string;
  radius?: number;
  strokeColor?: string;
  strokeWidth?: string | number;
  fill?: string;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const Circle = forwardRef(function Nob(
  { strokeColor, strokeWidth, fill, style, radius = 0, ...props }: CircleProps,
  fRef: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={fRef}
      {...props}
      className={classNames("cmpui_circle__root", props.className)}
      style={
        {
          "--cmpui-circle-nob-fill": fill,
          "--cmpui-circle-nob-radius": px(radius),
          "--cmpui-circle-nob-stroke-color": strokeColor,
          "--cmpui-circle-nob-stroke-width": `${strokeWidth ?? 0}px`,
          border: `${strokeWidth ?? 0}px solid ${strokeColor}`,
          left: props.x - radius,
          top: props.y - radius,
          ...style,
        } as React.CSSProperties
      }
    />
  );
});
