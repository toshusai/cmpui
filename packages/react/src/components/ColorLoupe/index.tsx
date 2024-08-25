import { memo } from "react";

import { Circle } from "../Circle";
import { Line } from "../Line";

export type ColorLoupeProps = {
  color: string;
  nobRadius?: number;
  x: number;
  y: number;
};

export const ColorLoupe = memo(function ColorLoupe({
  color,
  nobRadius = 8,
  x,
  y,
}: ColorLoupeProps) {
  return (
    <>
      <Line
        stroke="var(--cmpui-border-color)"
        strokeWidth={1}
        x1={x}
        x2={x}
        y1={y - nobRadius}
        y2={y - nobRadius * 4}
      />
      <Circle
        fill={"white"}
        radius={nobRadius * 2}
        strokeColor="var(--cmpui-border-color)"
        strokeWidth={1}
        style={{ zIndex: 1, "--block-size": "4px" } as React.CSSProperties}
        x={x}
        y={y - nobRadius * 4}
        className="alpha-checker-board"
      />
      <Circle
        fill={color}
        radius={nobRadius * 2}
        strokeColor="var(--cmpui-border-color)"
        strokeWidth={1}
        style={{ zIndex: 1 }}
        x={x}
        y={y - nobRadius * 4}
      />
    </>
  );
});
