import { MutableRefObject, useEffect } from "react";

export function useAddEventListener<K extends keyof HTMLElementEventMap>(
  ref: MutableRefObject<HTMLElement | null>,
  type: K,
  listener: (ev: HTMLElementEventMap[K]) => void,
  options?: AddEventListenerOptions,
) {
  useEffect(() => {
    if (ref.current === null) return;
    ref.current.addEventListener(type, listener, options);

    return () => {
      if (ref.current === null) return;
      ref.current.removeEventListener(type, listener);
    };
  }, [options, listener, type, ref]);
}
