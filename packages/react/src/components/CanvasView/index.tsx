import {
  CanvasViewCursor,
  createPanDragHandler,
  handleWheelZoom,
  zoomView,
} from "@toshusai/cmpui-core";
import { useCallback, useMemo, useRef } from "react";

import { useAddEventListener } from "../../utils/interactions/useAddEventListener";

import { View } from "./View";

export * from "./View";

export type CanvasViewProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  onChangeView: (view: View) => void;
  view: View;
  cursor?: CanvasViewCursor;
  setCursor?: (cursor: CanvasViewCursor) => void;
  minScale?: number;
  maxScale?: number;
  trackPadZoomScale?: number;
  trackPadMoveScaleX?: number;
  trackPadMoveScaleY?: number;
  pointerDownZoomScale?: number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "content">;

export function CanvasView({
  trackPadMoveScaleX = 1,
  trackPadMoveScaleY = 1,
  pointerDownZoomScale = 100,
  minScale,
  maxScale,
  children,
  content,
  view,
  cursor,
  setCursor,
  onChangeView,
  style,
  ...props
}: CanvasViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  const memoZoom = useCallback(
    (clientX: number, clientY: number, delta: number) => {
      if (!ref.current) return;
      zoomView(
        ref.current,
        clientX,
        clientY,
        delta,
        { view, maxScale, minScale },
        onChangeView,
      );
    },
    [ref.current, view, maxScale, minScale, onChangeView],
  );

  useAddEventListener(
    ref,
    "wheel",
    useCallback(
      (e) => {
        handleWheelZoom(e, view, onChangeView, memoZoom, {
          trackPadMoveScaleX,
          trackPadMoveScaleY,
        });
      },
      [view, onChangeView, zoomView, trackPadMoveScaleY, trackPadMoveScaleX],
    ),
    useMemo(() => ({ passive: false }), []),
  );

  const handlePointerDownForPan = useMemo(() => {
    if (!ref.current) return undefined;
    return createPanDragHandler(ref.current, view, onChangeView, setCursor);
  }, [view, onChangeView, ref.current]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (cursor === CanvasViewCursor.ZoomIn) {
        memoZoom(e.pageX, e.pageY, pointerDownZoomScale);
      } else if (cursor === CanvasViewCursor.ZoomOut) {
        memoZoom(e.pageX, e.pageY, -pointerDownZoomScale);
      } else {
        handlePointerDownForPan?.(e.nativeEvent);
      }
    },
    [handlePointerDownForPan, pointerDownZoomScale, zoomView, cursor],
  );

  const contentParentStyle = useMemo(
    () => ({
      position: "absolute" as const,
      pointerEvents: "none" as const,
      transformOrigin: "0 0",
      top: `${view.y}px`,
      left: `${view.x}px`,
      transform: `scale(${view.scale})`,
    }),
    [view.x, view.y, view.scale],
  );

  const rootStyle = useMemo(
    () => ({
      cursor,
      ...style,
    }),
    [cursor, style],
  );

  return (
    <div
      className="cmpui_canvas-view__root"
      tabIndex={-1}
      ref={ref}
      onPointerDown={handlePointerDown}
      style={rootStyle}
      {...props}
    >
      <div style={contentParentStyle}>{content}</div>
      {children}
    </div>
  );
}
