import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  shift,
  size,
} from "@floating-ui/dom";

const defaultOptions: Option = {
  offset: 4,
  padding: 8,
  placement: "bottom-start",
  disabledTriggerClickClose: false,
};

type Option = {
  placement?: Placement;
  offset?: number;
  padding?: number;
  disabledTriggerClickClose?: boolean;
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
  }) => void,
  options?: Option,
) {
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };
  let prevPopover: string | undefined = undefined;
  const handlePointerDown = (e: PointerEvent) => {
    const el = e.target as HTMLElement;
    const current = document.getElementById(
      document.body.dataset.popover ?? "",
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
    if (e.key === "Escape" || e.key === "Tab") {
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
              maxWidth: Math.max(100, args.availableWidth),
              maxHeight: Math.max(100, args.availableHeight),
            });
          },
          padding: finalOptions.padding,
          boundary: document.body,
        }),
        flip({
          fallbackStrategy: "initialPlacement",
        }),
      ],
    }).then((position) => {
      callback({
        top: position.y,
        left: position.x,
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
