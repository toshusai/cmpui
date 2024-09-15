import { useContext } from "react";

import { Toast } from "../Toast";

import { ToastContext } from "./ToastProvider";

export function Toaster() {
  const ctx = useContext(ToastContext);

  return (
    <div className="cmpui_toaster">
      {ctx.getToasts().map((toast) => (
        <Toast
          key={toast.id}
          show
          onClose={() => {
            console.log("removeToast", toast.id);
            ctx.removeToast(toast.id);
          }}
          {...toast.props}
        >
          {toast.vNode}
        </Toast>
      ))}
    </div>
  );
}
