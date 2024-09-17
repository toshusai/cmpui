export type OnMoveHandler<T = undefined> = (
  e: PointerEvent,
  ctx: T | undefined,
  move: {
    dx: number;
    dy: number;
    deltaX: number;
    deltaY: number;
  }
) => void;

export function createDragHandler<T>({
  onDown,
  onMove,
  onUp,
  options,
}: {
  onDown?: (e: PointerEvent) => T | false;
  onMove?: OnMoveHandler<T>;
  onUp?: (e: PointerEvent, ctx?: T, moveEvent?: PointerEvent) => void;
  options?: {
    disableCapture?: boolean;
    pointerMoveOnWindow?: boolean;
  };
}) {
  const handlePointerDown = (downEvent: PointerEvent) => {
    if (downEvent.button !== 0) return;
    const el = downEvent.currentTarget;
    if (!(el instanceof HTMLElement)) return;

    const result = onDown?.(downEvent);
    let prevEvent: PointerEvent | undefined = undefined;
    const moveTarget = options?.pointerMoveOnWindow ? window : el;
    const handlePointerMove = (e: Event) => {
      if (!(e instanceof PointerEvent)) return;
      if (result === false) return;
      e.preventDefault();
      onMove?.(e, result, {
        dx: e.clientX - downEvent.clientX,
        dy: e.clientY - downEvent.clientY,
        deltaX: e.clientX - (prevEvent?.clientX ?? downEvent.clientX),
        deltaY: e.clientY - (prevEvent?.clientY ?? downEvent.clientY),
      });

      prevEvent = e;
    };

    const handlePointerUp = (e: Event) => {
      if (!(e instanceof PointerEvent)) return;
      if (result === false) return;
      moveTarget.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      if (options?.disableCapture !== true) {
        el.releasePointerCapture(e.pointerId);
      }
      onUp?.(e, result, prevEvent);
    };

    if (result === false) return;

    if (options?.disableCapture !== true) {
      el.setPointerCapture(downEvent.pointerId);
    }
    moveTarget.addEventListener("pointermove", handlePointerMove, {
      passive: false,
    });
    window.addEventListener("pointerup", handlePointerUp);
  };

  return handlePointerDown;
}
