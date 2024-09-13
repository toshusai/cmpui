export function findScrollableParent(element: HTMLElement): HTMLElement {
  if (!element) return document.body;
  const style = getComputedStyle(element);
  const overflow = style.overflow;
  if (overflow === "auto" || overflow === "scroll") {
    return element;
  } else {
    if (element.parentElement === null) return document.body;
    return findScrollableParent(element.parentElement);
  }
}
