import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

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
  return (
    <Dialog.Root
      open={props.open}
      onOpenChange={(open) => {
        if (!open && props.onClose) {
          props.onClose();
        }
      }}
    >
      {props.trigger && (
        <Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
      )}
      <Dialog.Portal container={props.container}>
        <Dialog.Overlay className="cmpui_modal__overlay" />
        <Dialog.Content asChild>
          <FloatBox
            className={classNames("cmpui_modal__root", props.className)}
          >
            <div className="cmpui_modal__header">
              <Dialog.Title asChild>
                <div className="cmpui_modal__title">{props.title}</div>
              </Dialog.Title>
              {!props.hideCloseButton && (
                <Dialog.Close asChild>
                  <IconButton
                    className="cmpui_modal__close-button"
                    size="S"
                    onClick={props.onClose}
                  ></IconButton>
                </Dialog.Close>
              )}
            </div>
            <hr className="cmpui_modal__divider" />
            <div>{props.children}</div>
          </FloatBox>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
