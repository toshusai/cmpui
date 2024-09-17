import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  shift,
  size,
} from "@floating-ui/dom";

export const defaultPopoverOption: PopoverOption = {
  offset: 4,
  padding: 8,
  placement: "bottom-start",
  disabledTriggerClickClose: false,
  disabledTabClose: false,
  flip: true,
  autoResize: false,
  boundary: undefined,
  disabledFocusBack: false,
} as const;

export type PopoverOption = {
  placement?: Placement;
  offset?: number;
  padding?: number;
  disabledTriggerClickClose?: boolean;
  disabledTabClose?: boolean;
  flip?: boolean;
  autoResize?: boolean;
  boundary?: HTMLElement;
  disabledFocusBack?: boolean;
};

export function createPopover(
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
  options?: PopoverOption,
  onClose?: () => void
) {
  const finalOptions = {
    ...defaultPopoverOption,
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
      onClose?.();
      cleanUp();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      e.key === "Escape" ||
      (!finalOptions.disabledTabClose && e.key === "Tab")
    ) {
      if (!finalOptions.disabledFocusBack) {
        triggerElement.focus();
      }
      onClose?.();
      cleanUp();
    }
  };

  const handleClick = () => {
    onClose?.();
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
        finalOptions.flip
          ? flip({
              fallbackStrategy: "bestFit",
            })
          : undefined,
        finalOptions.autoResize
          ? size({
              apply(args) {
                callback({
                  maxWidth: args.availableWidth,
                  maxHeight: args.availableHeight,
                });
              },
              padding: finalOptions.padding,
              boundary: finalOptions.boundary ?? document.body,
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
