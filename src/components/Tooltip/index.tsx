import * as RadixTooltip from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import "./index.css";

export type TooltipProps = {
  alignOffset?: number;
  avoidCollisions?: boolean;
  children: React.ReactNode;
  container?: HTMLElement;
  content: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <RadixTooltip.Root
      delayDuration={500}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
      open={props.open}
    >
      <RadixTooltip.Trigger asChild>{props.children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal container={props.container}>
        <RadixTooltip.Content
          side={props.side}
          asChild
          sideOffset={props.sideOffset}
          alignOffset={props.alignOffset}
          avoidCollisions={props.avoidCollisions}
        >
          <TooltipPresenter>
            {props.content}
            <RadixTooltip.Arrow className="cmpui_tooltip__arrow" />
          </TooltipPresenter>
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

export const TooltipPresenter = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
  }
>((props, ref) => {
  return (
    <div ref={ref} className="cmpui_tooltip__root">
      {props.children}
    </div>
  );
});

export function Arrow() {
  return (
    <svg width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none">
      <polygon points="0,0 30,0 15,10" />
    </svg>
  );
}
