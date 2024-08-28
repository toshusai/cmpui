/**
 * https://github.com/ghosh/Micromodal/blob/2a316150d12b3f3a0540762ee77dcb7247c6518a/lib/src/index.js#L4
 * MIT License
 * Copyright (c) 2017 Indrashish Ghosh
 */
const FOCUSABLE_ELEMENTS = [
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

export function focusTrap(element: HTMLElement) {
  const focusableElements = [
    ...element.querySelectorAll(FOCUSABLE_ELEMENTS.join(", ")),
  ].filter((el) => el instanceof HTMLElement) as HTMLElement[];

  const prevActiveElement = document.activeElement;

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

  focusableElements[0].focus();

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    if (prevActiveElement instanceof HTMLElement) {
      prevActiveElement.focus();
    }
  };
}
