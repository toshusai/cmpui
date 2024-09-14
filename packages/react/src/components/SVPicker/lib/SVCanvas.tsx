import { memo, useEffect, useMemo, useRef } from "react";
import {
  createPointerDownHandler,
  drawSV,
  initSVCanvas,
} from "@toshusai/cmpui-core";

import { SVPickerProps } from "..";
import { useTouchStartPrevent } from "../../../utils/interactions/useTouchStartPrevent";

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
    ctx.current = initSVCanvas(canvasRef.current);
  }, [canvasRef.current]);

  useEffect(() => {
    if (!ctx.current) return;
    drawSV(ctx.current, props.hue);
  }, [props.hue]);

  const handlePointerDownCanvas = useMemo(
    () =>
      createPointerDownHandler({
        height: props.height,
        width: props.width,
        onChange: props.onChange,
        onDownChange: props.onDownChange,
        onStart: props.onStart,
        onEnd: props.onEnd,
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

  /**
   * e.currentTarget may not be the same as the underlying e.nativeEvent.currentTarget.
   */
  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.addEventListener("pointerdown", handlePointerDownCanvas);
    return () => {
      if (!canvasRef.current) return;
      canvasRef.current.removeEventListener(
        "pointerdown",
        handlePointerDownCanvas,
      );
    };
  }, [handlePointerDownCanvas]);

  return (
    <canvas
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
