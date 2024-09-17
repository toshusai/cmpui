import { createPortal } from "react-dom";
import {
  CSSProperties,
  memo,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  lockScroll,
  PopoverOption,
  createPopover,
  focusTrap as cmpUiFocusTrap,
} from "@toshusai/cmpui-core";

import { FloatBox } from "../FloatBox";

export type PopoverProps = {
  children: React.ReactNode;
  trigger: RefObject<HTMLElement>;
  isOpen?: boolean;
  onClose?: () => void;
  scrollLock?: boolean;
  focusTrap?: boolean;
} & PopoverOption;

export const MemoPopover = memo(Popover);

export function Popover(props: PopoverProps) {
  const [style, setStyle] = useState<Partial<CSSProperties>>({
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
  });

  useEffect(() => {
    if (!ref.current) return;
    if (!props.trigger.current) return;
    const { cleanUp, open } = createPopover(
      ref.current,
      props.trigger.current,
      () => {},
      (pos) => {
        setStyle((prev) => {
          const newStyle = { ...prev };
          if (pos.left !== undefined && pos.top !== undefined) {
            newStyle.transform = `translate(${pos.left}px, ${pos.top}px)`;
          }
          if (pos.maxWidth !== undefined) {
            newStyle.maxWidth = `${pos.maxWidth}px`;
          }
          if (pos.maxHeight !== undefined) {
            newStyle.maxHeight = `${pos.maxHeight}px`;
            ref.current!.style.maxHeight = `${pos.maxHeight}px`;
          }
          newStyle.display = "";

          return newStyle;
        });
      },
      {
        ...props,
      },
      () => {
        props.onClose?.();
      },
    );

    open();

    const cleanUpScrollLock =
      (props.scrollLock ?? true) ? lockScroll() : () => {};
    const focusTrapCleanUp = props.focusTrap
      ? cmpUiFocusTrap(ref.current)
      : () => {};

    return () => {
      cleanUpScrollLock();
      focusTrapCleanUp();
      cleanUp();
    };
  }, [props.trigger.current, props.onClose, props.isOpen]);

  const ref = useRef<HTMLDivElement>(null);

  if (!props.isOpen) {
    return null;
  }
  return createPortal(
    <FloatBox
      ref={ref}
      className="cmpui_popover__root"
      tabIndex={-1}
      style={style}
    >
      {props.children}
    </FloatBox>,
    document.body,
  );
}
