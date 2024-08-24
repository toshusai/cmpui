import { useEffect } from "react";

export function useNativeOnChange(
  ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
  onChange?: (e: Event) => void,
) {
  useEffect(() => {
    const input = ref.current;
    if (input && onChange) {
      const listener = (e: Event) => {
        onChange(e);
      };
      input.addEventListener("change", listener);
      return () => {
        input.removeEventListener("change", listener);
      };
    }
  }, [ref, onChange]);
}
