import { useCallback, useMemo } from "react";

import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { Circle } from "../Circle";
import { Line } from "../Line";
import { Path } from "../Path";

import { CubicCommand, MoveCommand } from "./CubicCommand";

import "./index.css";

export type CubicControlsProps = {
  prev: { x: number; y: number };
  cubic: CubicCommand;
  onChange?: (cubic: CubicCommand) => void;
};

export function CubicControls({ prev, cubic, onChange }: CubicControlsProps) {
  const { x1, y1, x2, y2, x, y } = cubic;
  const { x: x0, y: y0 } = prev;

  const move: MoveCommand = {
    type: "move",
    x: prev.x,
    y: prev.y,
  };

  const getPointerDownHandler = useCallback(
    (x: number, y: number, onChange: (x: number, y: number) => void) => {
      return createDragHandler({
        onDown: (e) => {
          return {
            x: e.clientX,
            y: e.clientY,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.x;
          const dy = e.clientY - ctx.y;

          const x1 = x + dx;
          const y1 = y + dy;
          onChange(x1, y1);
        },
      });
    },
    [],
  );

  const handleP1 = useMemo(() => {
    return getPointerDownHandler(x1, y1, (x1, y1) => {
      onChange?.({ ...cubic, x1, y1 });
    });
  }, [cubic, x1, y1, onChange, getPointerDownHandler]);

  const handleP2 = useMemo(() => {
    return getPointerDownHandler(x2, y2, (x2, y2) => {
      onChange?.({ ...cubic, x2, y2 });
    });
  }, [cubic, x2, y2, onChange, getPointerDownHandler]);

  const commands = useMemo(() => [move, cubic], [move, cubic]);

  return (
    <>
      <Path
        commands={commands}
        stroke="var(--cmpui-primary-color)"
        style={{
          pointerEvents: "none",
        }}
      />
      <Line
        className="cmpui_cubic-controls__line"
        strokeWidth={1}
        x1={x0}
        y1={y0}
        x2={x1}
        y2={y1}
      />
      <Line
        className="cmpui_cubic-controls__line"
        strokeWidth={1}
        x1={x}
        y1={y}
        x2={x2}
        y2={y2}
      />
      <Circle
        className="cmpui_cubic-controls__circle"
        x={x1}
        y={y1}
        radius={6}
        onPointerDown={handleP1}
        fill="var(--cmpui-primary-color)"
        strokeColor="var(--cmpui-border-color)"
        strokeWidth={1}
      />
      <Circle
        className="cmpui_cubic-controls__circle"
        x={x2}
        y={y2}
        radius={6}
        onPointerDown={handleP2}
        fill="var(--cmpui-primary-color)"
        strokeColor="var(--cmpui-border-color)"
        strokeWidth={1}
      />
    </>
  );
}
