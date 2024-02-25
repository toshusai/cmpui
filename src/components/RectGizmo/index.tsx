import { useCallback, useMemo } from "react";
import { CornerPosition } from "../../types";
import { useTouchStartPrevent } from "../../utils/interactions/useTouchStartPrevent";
import { Vector2 } from "../../utils/math";
import { rotateVector } from "../../utils/math/rotateVector";
import { Circle, CircleProps } from "../Circle";
import { Line } from "../Line";
import { AngleNob } from "./AngleNob";
import { MovableRect } from "./MovableRect";
import { createResizeHandler } from "./lib/createResizeHandler";
import { createRotateHorizontalResize } from "./lib/createRotateHorizontalResize";
import { positionSignMap } from "./lib/positionSignMap";

import "./index.css";

const positions: CornerPosition[] = [
  "left-top",
  "right-top",
  "right-bottom",
  "left-bottom",
];

export type RectGizmoProps = {
  width: number;
  height: number;
  x: number;
  y: number;
  angle: number;
  nobRadius?: number;
  isRotatable?: boolean;
  isResizable?: boolean;
  onMove: (args: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    angle?: number;
  }) => void;
  onEnd?: () => void;
  onStart?: () => void;
};

export function RectGizmo({
  width,
  height,
  x,
  y,
  angle,
  onMove,
  isRotatable = false,
  isResizable = false,
  nobRadius = 6,
  onEnd,
  onStart,
}: RectGizmoProps) {
  const center = useMemo(() => new Vector2(x, y), [x, y]);

  const [rlt, rrt, rrb, rlb] = useMemo(
    () =>
      positions.map((pos) => {
        const [dx, dy] = positionSignMap[pos];
        const point = new Vector2(x + (dx * width) / 2, y + (dy * height) / 2);

        return rotateVector(point, center, angle);
      }),
    [angle, center, height, width, x, y],
  );

  const onMoveRect = useCallback(
    (args: {
      x: number;
      y: number;
      width: number;
      height: number;
    }) => {
      onMove({
        x: args.x,
        y: args.y,
        width: args.width,
        height: args.height,
        angle,
      });
    },
    [onMove, angle],
  );

  const ltpd = useMemo(
    () =>
      createResizeHandler(
        rlt,
        rrb,
        width,
        height,
        angle,
        onMoveRect,
        "left-top",
        onEnd,
        onStart,
      ),
    [rlt, rrb, width, height, angle, onMoveRect, onEnd, onStart],
  );

  const rtpd = useMemo(
    () =>
      createResizeHandler(
        rrt,
        rlb,
        width,
        height,
        angle,
        onMoveRect,
        "right-top",
        onEnd,
        onStart,
      ),
    [rrt, rlb, width, height, angle, onMoveRect, onEnd, onStart],
  );
  const lbpd = useMemo(
    () =>
      createResizeHandler(
        rlb,
        rrt,
        width,
        height,
        angle,
        onMoveRect,
        "left-bottom",
        onEnd,
        onStart,
      ),
    [rlb, rrt, width, height, angle, onMoveRect, onEnd, onStart],
  );
  const rbpd = useMemo(
    () =>
      createResizeHandler(
        rrb,
        rlt,
        width,
        height,
        angle,
        onMoveRect,
        "right-bottom",
        onEnd,
        onStart,
      ),
    [rlt, rrb, width, height, angle, onMoveRect, onEnd, onStart],
  );

  const linesPoints = useMemo(
    () => [
      [rlt.x, rlt.y],
      [rrt.x, rrt.y],
      [rrb.x, rrb.y],
      [rlb.x, rlb.y],
    ],
    [rlt, rrt, rrb, rlb],
  );

  const handlers = useMemo(
    () => [ltpd, rtpd, rbpd, lbpd],
    [ltpd, rtpd, rbpd, lbpd],
  );

  const steppedAngle = useMemo(() => {
    const step = Math.PI / 12;
    return Math.round(angle / step) * step;
  }, [angle]);

  const memoCursorStyle = useMemo(() => {
    return [0, 0, 0, 0].map((_, i) => {
      return {
        cursor: createRotateHorizontalResize(
          steppedAngle +
            Math.PI / 4 +
            (i * Math.PI) / 2 +
            (width < 0 ? Math.PI / 2 : 0) +
            (height < 0 ? Math.PI / 2 : 0),
        ),
      };
    });
  }, [steppedAngle, width, height]);

  const handleChangeAngle = useCallback(
    (angle: number) => {
      onMove({
        x,
        y,
        width,
        height,
        angle,
      });
    },
    [onMove, x, y, width, height],
  );

  return (
    <>
      <MovableRect
        width={width}
        height={height}
        x={x}
        y={y}
        angle={angle}
        onMove={onMove}
        onEnd={onEnd}
        onStart={onStart}
      />
      {linesPoints.map((points, i) => {
        const [x1, y1] = points;
        const [x2, y2] = linesPoints[i + 1] ?? linesPoints[0];
        return (
          <Line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={1}
            stroke="var(--cmpui-primary-color)"
          />
        );
      })}

      {isResizable &&
        handlers.map((handler, i) => {
          const [x, y] = linesPoints[i];
          return (
            <PreventTouchStartCircle
              key={i}
              x={x}
              y={y}
              radius={nobRadius}
              fill="var(--cmpui-primary-color)"
              onPointerDown={handler}
              style={memoCursorStyle[i]}
            />
          );
        })}

      {isRotatable && (
        <AngleNob
          x={x}
          y={y}
          angle={angle}
          nobRadius={nobRadius}
          startLength={Math.abs(height / 2)}
          length={Math.abs(height) / 2 + nobRadius * 2}
          onChange={handleChangeAngle}
          onEnd={onEnd}
          onStart={onStart}
        />
      )}
    </>
  );
}

function PreventTouchStartCircle(props: CircleProps) {
  const ref = useTouchStartPrevent<HTMLDivElement>();
  return <Circle ref={ref} {...props} />;
}
