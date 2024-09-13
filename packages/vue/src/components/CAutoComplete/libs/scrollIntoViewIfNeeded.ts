import { findScrollableParent } from "./findScrollableParent";

export function scrollIntoViewIfNeeded(element: HTMLElement) {
  const parent = findScrollableParent(element);
  if (!parent) return;

  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  if (elementRect.top < parentRect.top) {
    parent.scrollTop = element.offsetTop;
  } else if (elementRect.bottom > parentRect.bottom) {
    parent.scrollTop =
      element.offsetTop - parentRect.height + elementRect.height;
  }
}
