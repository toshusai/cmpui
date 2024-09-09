import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  shift,
  size,
} from "@floating-ui/dom";

const defaultOptions = {
  offset: 7,
  padding: 8,
};

export function tooltip(
  tooltipElement: HTMLElement,
  triggerElement: HTMLElement,
  arrowElement: HTMLElement,
  onCleanUp: () => void,
  callback: (position: {
    top?: number;
    left?: number;
    maxWidth?: number;
    maxHeight?: number;
    arrow?: {
      x?: number;
      y?: number;
    };
    placement?: Placement;
  }) => void,
  options?: {
    offset?: number;
    padding?: number;
    disabledTriggerClickClose?: boolean;
  },
) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Tab") {
      cleanUp();
    }
  };

  const updatePosition = () => {
    computePosition(triggerElement, tooltipElement, {
      placement: "bottom",
      strategy: "fixed",
      middleware: [
        offset(options?.offset ?? defaultOptions.offset),
        shift({
          padding: options?.padding ?? defaultOptions.padding,
        }),
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
        arrow({ element: arrowElement }),
      ],
    }).then((position) => {
      callback({
        top: position.y,
        left: position.x,
        placement: position.placement,
        arrow: position.middlewareData.arrow,
      });
    });
  };

  let cleanupUpdate: () => void = () => {};

  const cleanUp = () => {
    cleanupUpdate();
    onCleanUp();
    window.removeEventListener("keydown", handleKeyDown);
  };

  const open = () => {
    cleanupUpdate = autoUpdate(triggerElement, tooltipElement, updatePosition);
    window.addEventListener("keydown", handleKeyDown);
  };

  return {
    open,
    cleanUp,
  };
}
