export function createWindowDragHandler<T, P>({
  onDown,
  onMove,
  onUp,
}: {
  onDown?: (e: React.PointerEvent<HTMLElement>) => T;
  onMove?: (e: PointerEvent, ctx?: T, prev?: P) => P;
  onUp?: (e: PointerEvent, ctx?: T, prev?: P) => void;
}) {
  const handlePointerDown = (downEvent: React.PointerEvent<HTMLElement>) => {
    if (downEvent.buttons === 2) {
      return;
    }
    const result = onDown?.(downEvent);
    let prev: P | undefined;
    const handlePointerMove = (e: PointerEvent) => {
      prev = onMove?.(e, result, prev);
    };

    const handlePointerUp = (e: PointerEvent) => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      onUp?.(e, result, prev);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return handlePointerDown;
}
