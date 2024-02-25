import * as RadixToast from "@radix-ui/react-toast";
import { FloatBox } from "../FloatBox";

import "./index.css";

export type ToastProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "bottom" | "left" | "right";
  avoidCollisions?: boolean;
  onDismiss?: () => void;
  sideOffset?: number;
  alignOffset?: number;
  children: React.ReactNode;
  close?: React.ReactNode;
};

export function Toast(props: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="down">
      <RadixToast.Root
        duration={3000}
        open={props.open}
        onOpenChange={props.onOpenChange}
        asChild
      >
        <FloatBox className="cmpui_toast__root">
          <RadixToast.Title />
          <RadixToast.Description>{props.children}</RadixToast.Description>
          {props.close && <RadixToast.Close>{props.close}</RadixToast.Close>}
        </FloatBox>
      </RadixToast.Root>

      <RadixToast.Viewport className="cmpui_toast__viewport" />
    </RadixToast.Provider>
  );
}
