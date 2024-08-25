import { memo, useEffect, useMemo, useRef } from "react";

import { SVPickerProps } from "..";
import { createDragHandler } from "../../../utils/interactions/createDragHandler";
import { useTouchStartPrevent } from "../../../utils/interactions/useTouchStartPrevent";
import { clamp } from "../../../utils/math/clamp";

import { drawSV } from "./drawSV";

export const SVCanvas = memo(function SVCanvas(
  props: SVPickerProps & {
    width: number;
    height: number;
    onDownChange: (isDown: boolean) => void;
  },
) {
  const canvasRef = useTouchStartPrevent<HTMLCanvasElement>();
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    ctx.current = canvasRef.current?.getContext("2d", {
      willReadFrequently: true,
    });
    if (!ctx.current) return;
    ctx.current.imageSmoothingEnabled = false;
    ctx.current.imageSmoothingQuality = "low";
  }, [canvasRef.current]);

  useEffect(() => {
    if (!ctx.current) return;
    drawSV(ctx.current, props.hue);
  }, [props.hue]);

  const handlePointerDownCanvas = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          props.onStart?.();
          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const s = x / props.width;
          const v = 1 - y / props.height;
          props.onChange(s, v);
          props.onDownChange(true);

          return {
            startX: e.clientX,
            startY: e.clientY,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;

          const el = e.currentTarget;
          if (!(el instanceof HTMLCanvasElement)) return;
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const s = clamp(x / props.width, 0, 1);
          const v = clamp(1 - y / props.height, 0, 1);

          props.onChange(s, v);
        },

        onUp: () => {
          props.onDownChange(false);
          props.onEnd?.();
        },
      }),
    [
      props.height,
      props.width,
      props.onChange,
      props.onDownChange,
      props.onStart,
      props.onEnd,
    ],
  );

  return (
    <canvas
      onPointerDown={handlePointerDownCanvas}
      width={props.width}
      height={props.height}
      style={{
        width: props.width,
        height: props.height,
      }}
      ref={canvasRef}
    />
  );
});
