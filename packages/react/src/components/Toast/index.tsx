import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { FloatBox } from "../FloatBox";
import { createCssTransitionClassNames } from "../Modal/createCssTransitionClassNames";

export type ToastProps = {
  show: boolean;
  time?: number;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "center" | "bottom";

  children: React.ReactNode;
  onClose?: () => void;
};

export function Toast(props: ToastProps) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (props.show) {
      if (props.time === 0) return;
      timeoutRef.current = window.setTimeout(() => {
        props.onClose?.();
      }, props.time ?? 3000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [props.show, props.time]);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      nodeRef={ref}
      unmountOnExit
      timeout={300}
      in={props.show}
      classNames={createCssTransitionClassNames("cmpui_toast_transition")}
    >
      <FloatBox
        ref={ref}
        className="cmpui_toast__root"
        data-horizontal={props.horizontal}
        data-vertical={props.vertical}
      >
        {props.children}
      </FloatBox>
    </CSSTransition>
  );
}
