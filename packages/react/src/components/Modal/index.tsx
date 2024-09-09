import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ariaHiddenOthers, focusTrap, lockScroll } from "@toshusai/cmpui-core";

import { classNames } from "../../utils/classNames";
import { FloatBox } from "../FloatBox";
import { IconButton } from "../IconButton";

export type ModalProps = {
  children: React.ReactNode;
  container?: HTMLElement | null;
  hideCloseButton?: boolean;
  onClose?: () => void;
  open?: boolean;
  title: string;
  trigger?: React.ReactNode;
  className?: string;
};

export function Modal(props: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!props.open) return;
    const cleanUpFocusTrap = focusTrap(el);
    const cleanUpLockScroll = lockScroll();
    const cleanUpAriaHiddenOthers = ariaHiddenOthers(el);
    return () => {
      cleanUpFocusTrap();
      cleanUpLockScroll();
      cleanUpAriaHiddenOthers();
    };
  }, [props.open]);

  if (!props.open) return null;

  return createPortal(
    <div ref={ref} className="cmpui_modal__overlay">
      <FloatBox className={classNames("cmpui_modal__root", props.className)}>
        <div className="cmpui_modal__header">
          <div className="cmpui_modal__title">{props.title}</div>
          <IconButton
            className="cmpui_modal__close-button"
            size="S"
            onClick={props.onClose}
          ></IconButton>
        </div>
        <hr className="cmpui_modal__divider" />
        <div>{props.children}</div>
      </FloatBox>
    </div>,
    document.body,
  );
}
