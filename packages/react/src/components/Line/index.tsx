import React from "react";

export type LineProps = {
  strokeWidth: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
} & React.SVGProps<SVGLineElement>;

export function Line(props: LineProps) {
  const width = Math.abs(props.x2 - props.x1);
  const height = Math.abs(props.y2 - props.y1);
  const padding = props.strokeWidth;
  return (
    <svg
      width={width + padding}
      height={height + padding}
      viewBox={`0 0 ${width + padding} ${height + padding}`}
      className={props.className}
      style={{
        position: "absolute",
        overflow: "visible",
        pointerEvents: "none",
        left: Math.min(props.x1, props.x2) - padding / 2,
        top: Math.min(props.y1, props.y2) - padding / 2,
      }}
    >
      <line
        {...props}
        x1={props.x1 - Math.min(props.x1, props.x2) + padding / 2}
        y1={props.y1 - Math.min(props.y1, props.y2) + padding / 2}
        x2={props.x2 - Math.min(props.x1, props.x2) + padding / 2}
        y2={props.y2 - Math.min(props.y1, props.y2) + padding / 2}
      />
    </svg>
  );
}
