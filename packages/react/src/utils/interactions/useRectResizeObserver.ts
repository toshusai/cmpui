import { useEffect, useRef, useState } from "react";

export function useRectResizeObserver() {
  const [rect, setRect] = useState<DOMRectReadOnly>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (
          entry.contentRect.width === rect?.width &&
          entry.contentRect.height === rect?.height
        )
          return;
        setRect(entry.contentRect);
      }
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [rect]);
  return [rect, ref] as const;
}
