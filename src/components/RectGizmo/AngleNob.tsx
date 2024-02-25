import { useMemo } from "react";
import { createDragHandler } from "../../utils/interactions";
import { useTouchStartPrevent } from "../../utils/interactions";
import { Vector2 } from "../../utils/math";
import { rotateVector } from "../../utils/math";
import { Circle } from "../Circle";
import { Line } from "../Line";
import { createRotateHorizontalResize } from "./lib/createRotateHorizontalResize";

type AngleNobProps = {
  angle: number;
  length: number;
  onChange: (angle: number) => void;
  startLength: number;
  x: number;
  y: number;
  nobRadius?: number;
  onEnd?: () => void;
  onStart?: () => void;
};

export function AngleNob({ nobRadius = 10, ...props }: AngleNobProps) {
  const ref = useTouchStartPrevent<HTMLDivElement>();

  const handleAngle = createDragHandler({
    onDown: (e) => {
      e.stopPropagation();
      props.onStart?.();
      return {
        startX: e.clientX,
        startY: e.clientY,
        startAngle: props.angle,
      };
    },
    onMove: (e, ctx) => {
      if (!ctx) return;
      const a = ctx.startAngle + Math.PI / 2;
      const nobCenter = new Vector2(
        ctx.startX + Math.cos(a) * props.length,
        ctx.startY + Math.sin(a) * props.length,
      );
      const deltaX = e.clientX - nobCenter.x;
      const deltaY = e.clientY - nobCenter.y;
      const newAngle = Math.atan2(deltaY, deltaX) + Math.PI / 2;
      props.onChange(newAngle);
    },
    onUp: props.onEnd,
  });

  const angleNobPos = rotateVector(
    new Vector2(props.x, props.y - props.length),
    { x: props.x, y: props.y },
    props.angle,
  );

  const angleStartNobPos = rotateVector(
    new Vector2(props.x, props.y - props.startLength),
    { x: props.x, y: props.y },
    props.angle,
  );
  const steppedAngle = useMemo(() => {
    const step = Math.PI / 12;
    return Math.round(props.angle / step) * step;
  }, [props.angle]);

  const style = useMemo(
    () => ({
      cursor: createRotateHorizontalResize(steppedAngle),
    }),
    [steppedAngle],
  );

  return (
    <>
      <Circle
        ref={ref}
        x={angleNobPos.x}
        y={angleNobPos.y}
        radius={nobRadius}
        onPointerDown={handleAngle}
        fill="var(--cmpui-primary-color)"
        style={style}
      />
      <Line
        x1={angleStartNobPos.x}
        y1={angleStartNobPos.y}
        x2={angleNobPos.x}
        y2={angleNobPos.y}
        strokeWidth={1}
        stroke="var(--cmpui-primary-color)"
      />
    </>
  );
}
