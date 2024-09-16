import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  shift,
  Side,
  size,
} from "@floating-ui/dom";

type TooltipOptions = {
  offset?: number;
  padding?: number;
  placement?: Side;
};

const defaultOptions: TooltipOptions = {
  offset: 8,
  padding: 8,
  placement: "top",
};

export function tooltip(
  tooltipElement: HTMLElement,
  triggerElement: HTMLElement | SVGElement,
  arrowElement: HTMLElement | SVGElement,
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
  options?: TooltipOptions
) {
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Tab") {
      cleanUp();
    }
  };

  const updatePosition = () => {
    computePosition(triggerElement, tooltipElement, {
      placement: finalOptions.placement,
      strategy: "fixed",
      middleware: [
        offset(finalOptions.offset),
        shift({
          padding: finalOptions.padding,
        }),
        size({
          apply(args) {
            callback({
              maxWidth: Math.max(100, args.availableWidth),
              maxHeight: Math.max(100, args.availableHeight),
            });
          },
          padding: finalOptions.padding,
        }),
        flip({
          fallbackStrategy: "bestFit",
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
    updatePosition();
    window.addEventListener("keydown", handleKeyDown);
  };

  return {
    open,
    cleanUp,
  };
}
