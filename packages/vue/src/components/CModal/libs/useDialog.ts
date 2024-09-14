import { ariaHiddenOthers, focusTrap, lockScroll } from "@toshusai/cmpui-core";
import { Ref, useId, watch } from "vue";
import { useOverlayEscape } from "./useOverlayEscape";

export function useDialog(elRef: Ref<HTMLElement | null>, onClose: () => void) {
  const cleanUpFunctions: (() => void)[] = [];
  const cleanUp = () => {
    cleanUpFunctions.forEach((f) => f());
  };

  watch(
    () => elRef.value,
    (el) => {
      if (el) {
        const cleanUpFocusTrap = focusTrap(el);
        const cleanUpLockScroll = lockScroll();
        const cleanUpAriaHiddenOthers = ariaHiddenOthers(el);
        cleanUpFunctions.push(
          cleanUpFocusTrap,
          cleanUpLockScroll,
          cleanUpAriaHiddenOthers,
        );
      }
    },
  );

  const id = useId() ?? "";

  useOverlayEscape(id, onClose);

  return {
    id,
    cleanUp,
  };
}
