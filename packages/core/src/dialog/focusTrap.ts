/**
 * https://github.com/ghosh/Micromodal/blob/2a316150d12b3f3a0540762ee77dcb7247c6518a/lib/src/index.js#L4
 * MIT License
 * Copyright (c) 2017 Indrashish Ghosh
 */
export const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])',
];

export const FOCUSABLE_ELEMENTS_SELECTOR = FOCUSABLE_ELEMENTS.join(", ");

export function focusTrap(element: HTMLElement) {
  let focusableElements = [
    ...element.querySelectorAll(FOCUSABLE_ELEMENTS.join(", ")),
  ].filter((el) => el instanceof HTMLElement) as HTMLElement[];

  const prevActiveElement = document.activeElement;

  const observer = new MutationObserver(() => {
    focusableElements = [
      ...element.querySelectorAll(FOCUSABLE_ELEMENTS.join(", ")),
    ].filter((el) => el instanceof HTMLElement) as HTMLElement[];
  });

  observer.observe(element, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === focusableElements[0]) {
          e.preventDefault();
          focusableElements[focusableElements.length - 1].focus();
        }
      } else {
        if (
          document.activeElement ===
          focusableElements[focusableElements.length - 1]
        ) {
          e.preventDefault();
          focusableElements[0].focus();
        }
      }
    }
  };

  const autoFocusElement = focusableElements.find((el) => el.autofocus);
  if (autoFocusElement) {
    autoFocusElement.focus();
  } else if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    observer.disconnect();
    if (prevActiveElement instanceof HTMLElement) {
      prevActiveElement.focus();
    }
  };
}
