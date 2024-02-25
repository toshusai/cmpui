import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { useAddEventListener } from "../../utils/interactions/useAddEventListener";
import { View } from "./View";
import { ViewMode } from "./ViewMode";

import "./index.css";

export * from "./View";
export * from "./ViewMode";

export type CanvasViewProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  onChangeView: (view: View) => void;
  view: View;
  mode?: ViewMode;
  minScale?: number;
  maxScale?: number;
  mouseZoomScale?: number;
  trackPadZoomScale?: number;
  trackPadMoveScaleX?: number;
  trackPadMoveScaleY?: number;
  pointerDownZoomScale?: number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "content">;

export function CanvasView({
  mouseZoomScale = 0.04,
  trackPadZoomScale = -0.02,
  trackPadMoveScaleX = 1,
  trackPadMoveScaleY = 1,
  pointerDownZoomScale = 100,
  minScale,
  maxScale,
  children,
  content,
  view,
  mode,
  onChangeView,
  style,
  ...props
}: CanvasViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<
    "auto" | "grab" | "grabbing" | "zoom-in" | "zoom-out"
  >("auto");
  const modeRef = useRef(mode);

  const zoom = useCallback(
    (clientX: number, clientY: number, delta: number) => {
      if (!ref.current) return;
      let rate = 1 + delta / 200;

      const rect = ref.current.getBoundingClientRect();
      const parentRect = ref.current.parentElement?.getBoundingClientRect();
      if (!parentRect) return;
      const offsetX = clientX - rect.left;
      const offsetY = clientY - rect.top;

      const NX = offsetX - view.x;
      const NY = offsetY - view.y;

      if (maxScale !== undefined && view.scale * rate > maxScale) {
        rate = maxScale / view.scale;
      } else if (minScale !== undefined && view.scale * rate < minScale) {
        rate = minScale / view.scale;
      }

      onChangeView({
        x: view.x + NX - NX * rate,
        y: view.y + NY - NY * rate,
        scale: view.scale * rate,
      });
    },
    [view, onChangeView, maxScale, minScale],
  );

  useAddEventListener(
    ref,
    "wheel",
    useCallback(
      (e) => {
        const isTrackpad = Number.isInteger(e.deltaY);
        const isZoom = e.ctrlKey || e.metaKey;

        if (isTrackpad && !isZoom) {
          onChangeView({
            x: view.x - e.deltaX * trackPadMoveScaleX,
            y: view.y - e.deltaY * trackPadMoveScaleY,
            scale: view.scale,
          });
          e.preventDefault();
          return;
        }

        zoom(e.clientX, e.clientY, -e.deltaY);
        e.preventDefault();
      },
      [view, onChangeView, zoom, trackPadMoveScaleY, trackPadMoveScaleX],
    ),
    useMemo(() => ({ passive: false }), []),
  );

  useEffect(() => {
    if (mode === "pan") {
      setCursor("grab");
    } else if (mode === "zoom-in") {
      setCursor("zoom-in");
    } else if (mode === "zoom-out") {
      setCursor("zoom-out");
    } else {
      setCursor("auto");
    }
    modeRef.current = mode;
  }, [mode]);

  const handlePointerDownForPan = useMemo(
    () =>
      createDragHandler<
        | {
            startX: number;
            startY: number;
            startOSX: number;
            startOSY: number;
          }
        | undefined
      >({
        onDown: (e: React.PointerEvent<HTMLElement | SVGElement>) => {
          if (mode !== "pan") return false;
          setCursor("grabbing");
          return {
            startX: e.clientX,
            startY: e.clientY,
            startOSX: view.x,
            startOSY: view.y,
          };
        },
        onMove: (e, ctx) => {
          if (ctx === undefined) return;
          const deltaX = ctx.startX - e.clientX;
          const deltaY = ctx.startY - e.clientY;

          onChangeView({
            x: ctx.startOSX - deltaX,
            y: ctx.startOSY - deltaY,
            scale: view.scale,
          });
        },
        onUp: () => {
          if (modeRef.current === "pan") {
            setCursor("grab");
          } else {
            setCursor("auto");
          }
        },
      }),
    [mode, view, onChangeView],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (mode === "zoom-in") {
        zoom(e.pageX, e.pageY, pointerDownZoomScale);
      } else if (mode === "zoom-out") {
        zoom(e.pageX, e.pageY, -pointerDownZoomScale);
      } else {
        handlePointerDownForPan(e);
      }
    },
    [mode, handlePointerDownForPan, pointerDownZoomScale, zoom],
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
