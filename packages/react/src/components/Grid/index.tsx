import { useLayoutEffect, useRef } from "react";

import { classNames } from "../../utils/classNames";

import "./index.css";

export type GridProps = {
  offsetX?: number;
  offsetY?: number;
  sizeX?: number;
  sizeY?: number;
  color?: string;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export function Grid({
  offsetX = 0,
  offsetY = 0,
  sizeX = 50,
  sizeY = 50,
  className,
  ...props
}: GridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.style.setProperty("--cmpui-offset-x", `${offsetX}px`);
    ref.current.style.setProperty("--cmpui-offset-y", `${offsetY}px`);
    ref.current.style.setProperty("--cmpui-size-x", `${sizeX}px`);
    ref.current.style.setProperty("--cmpui-size-y", `${sizeY}px`);
    if (props.color) {
      ref.current.style.setProperty("--cmpui-color", props.color);
    }
  });

  return (
    <div
      className={classNames("cmpui_grid__root", className)}
      ref={ref}
      {...props}
    />
  );
}
