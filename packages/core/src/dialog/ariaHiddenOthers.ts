export function ariaHiddenOthers(element: HTMLElement) {
  const siblings = Array.from(document.body?.children ?? []).filter(
    (el) => el !== element,
  ) as HTMLElement[];

  siblings.forEach((el) => {
    el.setAttribute("aria-hidden", "true");
  });

  return () => {
    siblings.forEach((el) => {
      el.removeAttribute("aria-hidden");
    });
  };
}
