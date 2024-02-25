import { useEffect, useMemo, useRef } from "react";

export function useTouchStartPrevent<T extends HTMLElement | SVGElement>() {
  const ref = useRef<T>(null);
  const handleTouchStart = useMemo(() => {
    const f = (e: Event) => {
      e.preventDefault();
      const onEnd = () => {
        document.removeEventListener("touchmove", f);
        document.removeEventListener("touchend", onEnd);
      };
      document.addEventListener("touchmove", f, {
        passive: false,
      });
      document.addEventListener("touchend", onEnd);
    };
    return f;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
    };
  }, [handleTouchStart]);

  return ref;
}
