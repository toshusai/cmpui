import { Ref, ref } from "vue";

export function useSubMenuPopover(): {
  show: Ref<boolean>;
  open: () => void;
  close: () => void;
  trigger: Ref<HTMLElement | null>;
  triggerBind: (el: { $el: Element } | null | Element) => void;
  pointerEnter: () => void;
  pointerLeave: () => void;
} {
  const show = ref(false);
  const trigger = ref<null | HTMLElement>(null);

  const open = () => {
    show.value = true;
  };

  const close = () => {
    show.value = false;
  };

  let timeout: ReturnType<typeof setTimeout> | null = null;
  const pointerEnter = () => {
    timeout = setTimeout(() => {
      open();
    }, 200);
  };

  const pointerLeave = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  return {
    show,
    open,
    pointerEnter,
    pointerLeave,
    close,
    trigger,
    triggerBind: (el) => {
      if (!el) return;
      if (el instanceof Element) {
        if (el instanceof HTMLElement) {
          trigger.value = el;
        }
        return;
      }
      if (el.$el instanceof HTMLElement) {
        trigger.value = el.$el;
        return;
      }
      console.log(el.$el);
      throw new Error("Invalid element");
    },
  };
}
