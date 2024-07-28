import React, { CSSProperties } from "react";

export type LineProps = {
  strokeWidth: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  adjust?: boolean;
  pointerEvents?: CSSProperties["pointerEvents"];
} & React.SVGProps<SVGLineElement>;

export function Line({
  adjust = true,
  pointerEvents = "none",
  style,
  ...props
}: LineProps) {
  const width = Math.abs(props.x2 - props.x1);
  const height = Math.abs(props.y2 - props.y1);
  const padding = props.strokeWidth;
  const adjustPadding = adjust === true ? props.strokeWidth / 2 : 0;
  return (
    <svg
      width={width + padding}
      height={height + padding}
      viewBox={`0 0 ${width + padding} ${height + padding}`}
      style={{
        position: "absolute",
        overflow: "visible",
        pointerEvents,
        left: Math.min(props.x1, props.x2) - adjustPadding,
        top: Math.min(props.y1, props.y2) - adjustPadding,
        ...style,
      }}
    >
      <line
        className={props.className}
        {...props}
        x1={props.x1 - Math.min(props.x1, props.x2) + adjustPadding}
        y1={props.y1 - Math.min(props.y1, props.y2) + adjustPadding}
        x2={props.x2 - Math.min(props.x1, props.x2) + adjustPadding}
        y2={props.y2 - Math.min(props.y1, props.y2) + adjustPadding}
      />
    </svg>
  );
}
