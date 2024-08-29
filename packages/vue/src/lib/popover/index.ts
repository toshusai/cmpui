import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size,
} from "@floating-ui/dom";

const defaultOptions = {
  offset: 4,
  padding: 8,
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
  options?: {
    offset?: number;
    padding?: number;
    disabledTriggerClickClose?: boolean;
  },
) {
  const handlePointerDown = (e: PointerEvent) => {
    if (
      !popoverElement?.contains(e.target as Node) &&
      !triggerElement?.contains(e.target as Node)
    ) {
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
      placement: "bottom",
      strategy: "fixed",
      middleware: [
        offset(options?.offset ?? defaultOptions.offset),
        shift(),
        size({
          apply(args) {
            callback({
              maxWidth: Math.max(100, args.availableWidth),
              maxHeight: Math.max(100, args.availableHeight),
            });
          },
          padding: options?.padding ?? defaultOptions.padding,
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

  let cleanupUpdate: () => void;
  const cleanUp = () => {
    cleanupUpdate();
    onCleanUp();
    window.removeEventListener("pointerdown", handlePointerDown);
    window.removeEventListener("keydown", handleKeyDown);
    if (!options?.disabledTriggerClickClose) {
      triggerElement?.removeEventListener("click", handleClick);
    }
  };

  const open = () => {
    cleanupUpdate = autoUpdate(triggerElement, popoverElement, updatePosition);
    if (!options?.disabledTriggerClickClose) {
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
