import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  shift,
  size,
} from "@floating-ui/dom";

export const defaultOptions: Option = {
  offset: 4,
  padding: 8,
  placement: "bottom-start",
  disabledTriggerClickClose: false,
  disabledTabClose: false,
  flip: true,
} as const;

type Option = {
  placement?: Placement;
  offset?: number;
  padding?: number;
  disabledTriggerClickClose?: boolean;
  disabledTabClose?: boolean;
  flip?: boolean;
};

export function setPopover(
  popoverElement: HTMLElement,
  triggerElement: HTMLElement,
  onCleanUp: () => void,
  callback: (position: {
    top?: number;
    left?: number;
    maxWidth?: number;
    maxHeight?: number;
    placement?: Placement;
  }) => void,
  options?: Option
) {
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };
  let prevPopover: string | undefined = undefined;
  const handlePointerDown = (e: PointerEvent) => {
    const el = e.target as HTMLElement;
    const current = document.getElementById(
      document.body.dataset.popover ?? ""
    );
    if (
      (current && current.contains(el)) ||
      popoverElement.contains(el) ||
      triggerElement.contains(el)
    ) {
      return;
    } else {
      cleanUp();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      e.key === "Escape" ||
      (!finalOptions.disabledTabClose && e.key === "Tab")
    ) {
      cleanUp();
    }
  };

  const handleClick = () => {
    cleanUp();
  };

  const updatePosition = () => {
    computePosition(triggerElement, popoverElement, {
      placement: finalOptions.placement,
      strategy: "fixed",
      middleware: [
        offset(finalOptions.offset),
        shift({
          padding: finalOptions.padding,
          boundary: document.body,
        }),
        size({
          apply(args) {
            callback({
              maxWidth: Math.max(50, args.availableWidth),
              maxHeight: Math.max(50, args.availableHeight),
            });
          },
          padding: finalOptions.padding,
          boundary: document.body,
        }),
        finalOptions.flip
          ? flip({
              fallbackStrategy: "initialPlacement",
            })
          : undefined,
      ],
    }).then((position) => {
      callback({
        top: position.y,
        left: position.x,
        placement: position.placement,
      });
    });
  };

  let cleanupUpdate: () => void = () => {};
  const cleanUp = () => {
    cleanupUpdate();
    onCleanUp();
    window.removeEventListener("pointerdown", handlePointerDown);
    window.removeEventListener("keydown", handleKeyDown);
    if (!finalOptions.disabledTriggerClickClose) {
      triggerElement?.removeEventListener("click", handleClick);
    }
    document.body.dataset.popover = prevPopover;
  };

  const open = () => {
    cleanupUpdate = autoUpdate(triggerElement, popoverElement, updatePosition);
    prevPopover = document.body.dataset.popover;
    document.body.dataset.popover = popoverElement.id;
    if (!finalOptions.disabledTriggerClickClose) {
      triggerElement?.addEventListener("click", handleClick);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
  };

  return {
    open,
    cleanUp,
  };
}
