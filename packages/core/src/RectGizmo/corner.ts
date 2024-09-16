import { createDragHandler } from "../createDragHandler";
import { rotateVector, Vector2 } from "../math";
import { matrixToCss } from "../matrixToCss";
import { RectGizmoProps } from "./RectGizmoProps";

export const createCornerStyles = (w: number, h: number, scale: Vector2) => {
  return {
    transform: matrixToCss(
      new DOMMatrix()
        .scale(1 / Math.abs(scale.x), 1 / Math.abs(scale.y))
        .translate(w === 1 ? -4 : 4, h === 1 ? -4 : 4),
    ),
    "--size": "8px",
  } as const;
};

const cornerNames = {
  "00": "lt",
  "01": "lb",
  "10": "rt",
  "11": "rb",
} as const;

export function whIndexToCornerName(w: 0 | 1, h: 0 | 1) {
  return cornerNames[`${w}${h}`];
}

export function createResizeHandler(
  props: RectGizmoProps,
  w: 0 | 1 = 0,
  h: 0 | 1 = 0,
  onChange: (scaleX: number, scaleY: number) => void,
) {
  return createDragHandler({
    onDown() {
      const originRateX = props.origin.x / props.width;
      const originRateY = props.origin.y / props.height;
      const scaledX = props.width * props.scale.x;
      const scaledY = props.height * props.scale.y;

      const originToCorner = new Vector2(
        w * scaledX - scaledX * originRateX,
        h * scaledY - scaledY * originRateY,
      );

      const originToCornerWithoutScale = new Vector2(
        w * props.width - props.width * originRateX,
        h * props.height - props.height * originRateY,
      );

      const alreadyMovedDistance = new Vector2(
        originToCorner.x - originToCornerWithoutScale.x,
        originToCorner.y - originToCornerWithoutScale.y,
      );

      const alreadyMovedDistanceRotated = rotateVector(
        alreadyMovedDistance,
        { x: 0, y: 0 },
        props.rotation,
      );

      return {
        alreadyMovedDistanceRotated,
        originToCornerWithoutScale,
      };
    },
    onMove(_, ctx, move) {
      if (!ctx) return;
      const { alreadyMovedDistanceRotated, originToCornerWithoutScale } = ctx;
      const theta = props.rotation;

      move.dx += alreadyMovedDistanceRotated.x;
      move.dy += alreadyMovedDistanceRotated.y;

      const DX = move.dx * Math.cos(theta) + move.dy * Math.sin(theta);
      const DY = -move.dx * Math.sin(theta) + move.dy * Math.cos(theta);

      const scaleX =
        (DX + originToCornerWithoutScale.x) / originToCornerWithoutScale.x;
      const scaleY =
        (DY + originToCornerWithoutScale.y) / originToCornerWithoutScale.y;

      if (Number.isFinite(scaleX) && !Number.isFinite(scaleY)) {
        onChange(scaleX, props.scale.y);
      } else if (!Number.isFinite(scaleX) && Number.isFinite(scaleY)) {
        onChange(props.scale.x, scaleY);
      } else if (Number.isFinite(scaleX) && Number.isFinite(scaleY)) {
        onChange(scaleX, scaleY);
      }
    },
  });
}
