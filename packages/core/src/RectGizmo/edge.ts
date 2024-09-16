
import { createDragHandler } from "../createDragHandler";
import { rotateVector, Vector2 } from "../math";
import { matrixToCss } from "../matrixToCss";
import { corners } from "./const";
import { RectGizmoProps } from "./RectGizmoProps";

function getEdgeTransform(
  w: number,
  h: number,
  i: number,
  sw: number,
  scale: Vector2,
) {
  const half = sw / 2;
  return new DOMMatrix()
    .translate(
      w === corners[(i + 1) % corners.length][0] ? -half : 0,
      h === corners[(i + 1) % corners.length][1] ? -half : 0,
    )
    .scale(
      w === corners[(i + 1) % corners.length][0] ? 1 / Math.abs(scale.x) : 1,
      h === corners[(i + 1) % corners.length][1] ? 1 / Math.abs(scale.y) : 1,
    );
}

export function createEdgeStyle(
  w: number,
  h: number,
  i: number,
  sw: number,
  scale: Vector2,
) {
  return {
    "--size": `${sw}px`,
    transform: matrixToCss(
      getEdgeTransform(w, h, i, h === 0 ? sw : -sw, scale),
    ),
  };
}

export function createEdgeHandler(
  props: RectGizmoProps,
  w: 0 | 1,
  h: 0 | 1,
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

      if (
        (w === corners[0][0] && h === corners[0][1]) ||
        (w === corners[2][0] && h === corners[2][1])
      ) {
        if (!Number.isFinite(scaleX)) return;
        onChange(scaleX, props.scale.y);
      } else {
        if (!Number.isFinite(scaleY)) return;
        onChange(props.scale.x, scaleY);
      }
    },
  });
}
