import { createContext, ReactNode, useState } from "react";

export type Toast = {
  id: string;
  vNode: ReactNode;
  props?: {
    time?: number;
  };
};

export type ToasterContext = {
  addToast: (
    createVNode: (close: () => void) => ReactNode,
    props?: { time?: number },
  ) => void;
  removeToast: (id: string) => void;
  getToasts: () => Toast[];
};

export const ToastContext = createContext<ToasterContext>({
  addToast: () => {
    throw new Error("ToastContext not found");
  },
  removeToast: () => {
    throw new Error("ToastContext not found");
  },
  getToasts: () => {
    throw new Error("ToastContext not found");
  },
});

export function ToastContextProvider(props: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    createVNode: (close: () => void) => ReactNode,
    props?: { time?: number },
  ) => {
    const id = toasts.length.toString();
    setToasts((prev) => [
      ...prev,
      {
        vNode: createVNode(() => {
          setToasts((prev) => prev.filter((v) => v.id !== id));
        }),
        props,
        id,
      },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((v) => v.id !== id));
  };

  const getToasts = () => toasts;
  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        getToasts,
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
}
