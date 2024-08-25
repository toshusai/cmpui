import { useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { createWindowDragHandler } from "./createWindowDragHandler";

export function useOverlayDragHandler(
  onStart: () => void,
  onEnd: () => void,
  render: React.ReactNode,
) {
  const [isDrag, setIsDrag] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handlePointerDown = useMemo(
    () =>
      createWindowDragHandler<undefined, true | undefined>({
        onMove: (e, _ctx, prev) => {
          if (e.pointerType === "touch") {
            // touch device does not support drag shadow
            return;
          }
          e.preventDefault();
          if (!prev) {
            onStart();
            return true;
          }
          setIsDrag(true);
          setX(e.pageX);
          setY(e.pageY);
          return true;
        },
        onUp: () => {
          setIsDrag(false);
          onEnd();
        },
      }),
    [onStart, onEnd],
  );

  return {
    handlePointerDown,
    shadow:
      isDrag &&
      createPortal(
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            left: `${x}px`,
            top: `${y}px`,
            opacity: "0.5",
            boxSizing: "border-box",
          }}
        >
          {render}
        </div>,
        document.body,
      ),
  };
}
