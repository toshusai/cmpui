import { useMemo } from "react";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { useTouchStartPrevent } from "../../utils/interactions/useTouchStartPrevent";

type MovableRectProps = {
  angle: number;
  height: number;
  onMove: (args: { x?: number; y?: number }) => void;
  width: number;
  x: number;
  y: number;
  onEnd?: () => void;
  onStart?: () => void;
};

export function MovableRect({
  angle,
  height,
  onMove,
  width,
  x,
  y,
  onEnd,
  onStart,
}: MovableRectProps) {
  const rectWidth = width < 0 ? -width : width;
  const rectHeight = height < 0 ? -height : height;
  const rectX = width < 0 ? x - rectWidth / 2 : x - rectWidth / 2;
  const rectY = height < 0 ? y - rectHeight / 2 : y - rectHeight / 2;

  const handlePointerDownRect = useMemo(
    () =>
      createDragHandler({
        onDown(e) {
          e.stopPropagation();
          onStart?.();
        },
        onMove: (e, __, { dx, dy }) => {
          onMove({
            x: x + dx,
            y: y + dy,
          });
          e.preventDefault();
        },
        onUp: onEnd,
      }),
    [onMove, x, y, onEnd, onStart],
  );

  const ref = useTouchStartPrevent<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox={`${0} ${0} ${rectWidth} ${rectHeight}`}
      style={{
        position: "absolute",
        width: rectWidth,
        height: rectHeight,
        transform: `rotate(${angle}rad)`,
        top: rectY,
        left: rectX,
      }}
      className="cmpui-rect-gizmo--movable-rect"
      onPointerDown={handlePointerDownRect}
    >
      <rect
        x={0}
        y={0}
        width={rectWidth}
        height={rectHeight}
        fill="transparent"
      />
    </svg>
  );
}
