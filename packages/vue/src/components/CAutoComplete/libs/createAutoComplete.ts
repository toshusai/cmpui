import { scrollIntoViewIfNeeded } from "./scrollIntoViewIfNeeded";

export function createAutoComplete(props: {
  onChangeElement: (element: HTMLElement | null) => void;
  onChangeShow: (show: boolean) => void;
  onChangeValue: (value: string) => void;
  getCurrentElement: () => HTMLElement | null;
  getPopoverElement: () => HTMLElement | null;
}) {
  const keydown = (e: KeyboardEvent) => {
    const currentElement = props.getCurrentElement();
    const findAllTabIndexes = (el: HTMLElement) => {
      const elements = el.querySelectorAll(`[data-focusable]`);
      const tabbable = [];
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        tabbable.push(element);
      }
      return tabbable;
    };

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      let newElement: HTMLElement | null = null;
      if (currentElement) {
        const next =
          e.key === "ArrowDown"
            ? currentElement.nextElementSibling
            : currentElement.previousElementSibling;

        if (next instanceof HTMLElement) {
          currentElement.removeAttribute("aria-selected");
          newElement = next;
        } else {
          return;
        }
      } else {
        const popoverRef = props.getPopoverElement();
        if (!popoverRef) return;
        const tabbable = findAllTabIndexes(popoverRef);
        if (tabbable.length === 0) return;
        const index = e.key === "ArrowDown" ? 0 : tabbable.length - 1;
        newElement = tabbable[index];
      }
      props.onChangeElement(newElement);
      newElement.setAttribute("aria-selected", "true");
      scrollIntoViewIfNeeded(newElement);
    } else if (e.key === "Enter") {
      if (currentElement) {
        props.onChangeValue(currentElement.getAttribute("value") || "");
        props.onChangeShow(false);
        props.onChangeElement(null);
      }
    } else if (e.key.match(/^[a-zA-Z0-9]$/) || e.key === "Backspace") {
      props.onChangeShow(true);
    } else if (e.key === "Escape") {
      props.onChangeShow(false);
    }
  };

  return {
    keydown,
  };
}
