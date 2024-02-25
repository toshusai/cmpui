import { useCallback, useRef } from "react";

export function useKeyDownStartEnd(
  onStart?: () => void,
  onEnd?: () => void,
  delay = 500,
) {
  const timerId = useRef<number>();
  const isKeyDownRef = useRef(false);

  const updateKeyDown = useCallback(() => {
    clearTimeout(timerId.current);
    if (isKeyDownRef.current === false) {
      onStart?.();
    }
    isKeyDownRef.current = true;

    timerId.current = window.setTimeout(() => {
      onEnd?.();
      isKeyDownRef.current = false;
      clearTimeout(timerId.current);
    }, delay);
  }, [onStart, onEnd, delay]);

  return updateKeyDown;
}
