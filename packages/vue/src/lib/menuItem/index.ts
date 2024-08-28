export function useKeyboardNavigation(
  element: HTMLUListElement,
  onSelect: (value: string) => void,
) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      const items = element.querySelectorAll("li");
      const next = Array.from(items).find(
        (item) => item === document.activeElement,
      )?.nextElementSibling;
      if (next && next instanceof HTMLElement) {
        next.focus();
      } else {
        items[0].focus();
      }
    } else if (e.key === "ArrowUp") {
      if (!element) return;
      const items = element.querySelectorAll("li");
      const prev = Array.from(items).find(
        (item) => item === document.activeElement,
      )?.previousElementSibling;
      if (prev && prev instanceof HTMLElement) {
        prev.focus();
      } else {
        items[items.length - 1].focus();
      }
    } else if (e.key === "Enter") {
      const current = document.activeElement;
      if (current instanceof HTMLElement) {
        const value = current.dataset.value;
        if (value) {
          onSelect(value);
        }
      }
    }
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      onSelect(target.dataset.value ?? "");
    }
  };

  const items = element.querySelectorAll("li");
  items.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    items.forEach((item) => {
      item.removeEventListener("click", handleClick);
    });
  };
}
