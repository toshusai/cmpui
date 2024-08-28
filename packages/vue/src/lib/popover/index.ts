import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/dom";

const defaultOptions = {
  offset: 4,
};
export function setPopover(
  popoverElement: HTMLElement,
  triggerElement: HTMLElement,
  onCleanUp: () => void,
  callback: (position: { top: number; left: number }) => void,
  options?: {
    offset?: number;
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
    console.log("Click event");
    cleanUp();
  };

  const updatePosition = () => {
    computePosition(triggerElement, popoverElement, {
      placement: "bottom",
      strategy: "fixed",
      middleware: [
        offset(options?.offset ?? defaultOptions.offset),
        flip(),
        shift(),
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
    triggerElement?.removeEventListener("click", handleClick);
  };

  const open = () => {
    cleanupUpdate = autoUpdate(triggerElement, popoverElement, updatePosition);
    triggerElement?.addEventListener("click", handleClick);

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
  };

  return {
    open,
    cleanUp,
  };
}
