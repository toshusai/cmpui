import { RectGizmoProps } from "..";
import { Vector2, createDragHandler, rotateVector } from "../../../utils";

export function createResizeHandler(
  props: RectGizmoProps,
  w: 0 | 1 = 0,
  h: 0 | 1 = 0,
) {
  return createDragHandler({
    onDown() {
      const originRateX = props.origin.x / props.width;
      const originRateY = props.origin.y / props.height;
      const scaledX = props.width * props.scaleX;
      const scaledY = props.height * props.scaleY;

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
        props.angle,
      );

      return {
        alreadyMovedDistanceRotated,
        originToCornerWithoutScale,
      };
    },
    onMove(_, ctx, move) {
      if (!ctx) return;
      const { alreadyMovedDistanceRotated, originToCornerWithoutScale } = ctx;
      const theta = props.angle;

      move.dx += alreadyMovedDistanceRotated.x;
      move.dy += alreadyMovedDistanceRotated.y;

      const DX = move.dx * Math.cos(theta) + move.dy * Math.sin(theta);
      const DY = -move.dx * Math.sin(theta) + move.dy * Math.cos(theta);

      const scaleX =
        (DX + originToCornerWithoutScale.x) / originToCornerWithoutScale.x;
      const scaleY =
        (DY + originToCornerWithoutScale.y) / originToCornerWithoutScale.y;

      if (Number.isFinite(scaleX)) {
        props.setScaleX?.(scaleX);
      }
      if (Number.isFinite(scaleY)) {
        props.setScaleY?.(scaleY);
      }
    },
  });
}
