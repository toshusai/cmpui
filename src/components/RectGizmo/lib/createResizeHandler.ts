import { CornerPosition } from "../../../types";
import { createDragHandler } from "../../../utils/interactions/createDragHandler";
import { Vector2 } from "../../../utils/math";
import { rotateVector } from "../../../utils/math/rotateVector";
import { scaleVector } from "../../../utils/math/scaleVector";
import { positionSignMap } from "./positionSignMap";
import { resizeWithAspectRatio } from "./proportionalResize";

const positionSignAdjustMap: Record<
  CornerPosition,
  [number, number, number, number]
> = {
  "left-top": [-1, -1, 1, -1],
  "right-top": [1, 1, 1, -1],
  "left-bottom": [-1, -1, -1, 1],
  "right-bottom": [1, 1, -1, 1],
};

export function createResizeHandler(
  p1: Vector2,
  p2: Vector2,
  width: number,
  height: number,
  angle: number,
  onMove: (args: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => void,
  pos: CornerPosition,
  onEnd?: () => void,
  onStart?: () => void,
) {
  let _dx = 0;
  let _dy = 0;

  const getNewWidth = () => {
    const diffWidth =
      positionSignAdjustMap[pos][0] * _dx * Math.cos(angle) +
      positionSignAdjustMap[pos][1] * _dy * Math.sin(angle);
    const newWidth = width + diffWidth * 2;
    return newWidth;
  };

  const getNewHeight = () => {
    const diffHeight =
      positionSignAdjustMap[pos][2] * _dx * Math.sin(angle) +
      positionSignAdjustMap[pos][3] * _dy * Math.cos(angle);
    const newHeight = height + diffHeight * 2;
    return newHeight;
  };

  const startCenter = new Vector2((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);

  return createDragHandler({
    onDown: (e) => {
      e.stopPropagation();
      const startRatio = Math.abs(height / width);
      const onKeyDown = (_: KeyboardEvent) => {
        const result = resizeWithAspectRatio(
          getNewWidth(),
          getNewHeight(),
          startRatio,
        );
        onMove({
          x: startCenter.x,
          y: startCenter.y,
          ...result,
        });
      };

      const onKeyUp = () => {
        onMove({
          x: startCenter.x,
          y: startCenter.y,
          width: getNewWidth(),
          height: getNewHeight(),
        });
      };

      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
      onStart?.();
      return {
        startP2: p2,
        startRatio,
        startP1: p1,
        startWidth: width,
        startHeight: height,
        startCenter,
        cleanUp() {
          window.removeEventListener("keydown", onKeyDown);
          window.removeEventListener("keyup", onKeyUp);
        },
      };
    },
    onMove: (e, ctx, { dx, dy }) => {
      if (!ctx) return;
      _dx = dx;
      _dy = dy;

      const anchor = ctx.startCenter;
      const startD = new Vector2(
        anchor.x - ctx.startP1.x,
        anchor.y - ctx.startP1.y,
      );
      const newD = new Vector2(
        anchor.x - (ctx.startP1.x + _dx),
        anchor.y - (ctx.startP1.y + _dy),
      );
      const scale = new Vector2(newD.x / startD.x, newD.y / startD.y);
      if (
        Number.isNaN(scale.x) ||
        scale.x === Infinity ||
        scale.x === -Infinity
      ) {
        _dx = 0;
      }
      if (
        Number.isNaN(scale.y) ||
        scale.y === Infinity ||
        scale.y === -Infinity
      ) {
        _dy = 0;
      }
      const newP1 = new Vector2(ctx.startP1.x + _dx, ctx.startP1.y + _dy);
      const newP2 = scaleVector(ctx.startP2, scale, anchor);
      const newCenter = scaleVector(ctx.startCenter, scale, anchor);
      const rotatedNewP1 = rotateVector(newP1, newCenter, -angle);
      const rotatedNewP2 = rotateVector(newP2, newCenter, -angle);
      let newWidth = rotatedNewP2.x - rotatedNewP1.x;
      let newHeight = rotatedNewP2.y - rotatedNewP1.y;
      newWidth *= -positionSignMap[pos][0];
      newHeight *= -positionSignMap[pos][1];

      if (e.shiftKey) {
        const result = resizeWithAspectRatio(
          getNewWidth(),
          getNewHeight(),
          ctx.startRatio,
        );
        onMove({
          x: ctx.startCenter.x,
          y: ctx.startCenter.y,
          ...result,
        });
      } else {
        onMove({
          width: newWidth,
          height: newHeight,
          x: newCenter.x,
          y: newCenter.y,
        });
      }
    },
    onUp: (_, ctx) => {
      if (!ctx) return;
      ctx.cleanUp();
      onEnd?.();
    },
  });
}
