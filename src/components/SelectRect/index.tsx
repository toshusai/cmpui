import { memo, useMemo, useState } from "react";
import { createDragHandler } from "../..";

type SelectRectProps = {
  x: number;
  y: number;
  width: number;
  height: number;

  className?: string;
  style?: React.CSSProperties;
};

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function useSelectRectHandler() {
  const [rect, setRect] = useState<Rect | null>(null);

  const onPointerDown = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          e.preventDefault();
          const el = e.currentTarget as HTMLElement;
          const rect = el.getBoundingClientRect();
          return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          };
        },
        onMove: (_, ctx, move) => {
          if (!ctx) return;

          let x = ctx.x;
          let y = ctx.y;
          let width = move.dx;
          let height = move.dy;
          if (move.dx < 0) {
            x += move.dx;
            width = -move.dx;
          }
          if (move.dy < 0) {
            y += move.dy;
            height = -move.dy;
          }

          setRect({
            x,
            y,
            width,
            height,
          });
        },
        onUp: () => {
          setRect(null);
        },
        options: {
          disableCapture: true,
          pointerMoveOnWindow: true,
        },
      }),
    []
  );

  return {
    rect,
    onPointerDown,
  };
}

export const SelectRect = memo(function SelectRect(props: SelectRectProps) {
  return (
    <div
      className={props.className}
      style={{
        height: props.height,
        left: props.x,
        top: props.y,
        width: props.width,

        background: "var(--cmpui-primary-color)",
        opacity: 0.3,
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1000,

        ...props.style,
      }}
    />
  );
});
