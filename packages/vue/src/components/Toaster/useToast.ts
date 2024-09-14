import { inject, provide, ref, VNode } from "vue";

const TOAST_KEY = Symbol("TOAST_KEY");

export type Toast = {
  id: string;
  vNode: VNode;
  props?: {
    time?: number;
  };
};

export type ToasterContext = {
  addToast: (
    createVNode: (close: () => void) => VNode,
    props?: { time?: number },
  ) => void;
  removeToast: (id: string) => void;
  getToasts: () => Toast[];
};

export function useToastContext() {
  return inject<ToasterContext>(TOAST_KEY);
}

export function useProvideToastContext() {
  const toasts = ref<Toast[]>([]);

  const toastId = ref(0);

  provide<ToasterContext>(TOAST_KEY, {
    addToast: (
      createVNode: (close: () => void) => VNode,
      props?: { time?: number },
    ) => {
      const id = (toastId.value++).toString();
      toasts.value.push({
        vNode: createVNode(
          () => (toasts.value = toasts.value.filter((v) => v.id !== id)),
        ),
        props,
        id: id,
      });
    },
    removeToast: (id: string) => {
      toasts.value = toasts.value.filter((v) => v.id !== id);
    },
    getToasts: () => toasts.value,
  });
}
