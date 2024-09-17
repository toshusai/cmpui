import { FOCUSABLE_ELEMENTS_SELECTOR } from "../Dialog/focusTrap";

export function useKeyboardNavigation(
  element: HTMLDivElement,
  onSelect: (value: string) => void,
  options?: {
    defaultValue?: string;
  }
) {
  const items = [
    ...element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR),
  ].filter((el) => el instanceof HTMLElement) as HTMLElement[];
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      const index = items.findIndex((item) => item === document.activeElement);
      const next = items[index + 1];
      if (next && next instanceof HTMLElement) {
        next.focus();
      } else if (document.activeElement === element) {
        if (items[0] instanceof HTMLElement) {
          items[0].focus();
        }
      }
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      if (!element) return;
      const index = items.findIndex((item) => item === document.activeElement);
      const prev = items[index - 1];
      if (prev && prev instanceof HTMLElement) {
        prev.focus();
      } else if (document.activeElement === element) {
        if (items.length > 0) {
          const item = items[items.length - 1];
          if (item instanceof HTMLElement) {
            item.focus();
          }
        }
      }
      e.preventDefault();
    } else if (e.key === "Enter" || e.key === " ") {
      const current = document.activeElement;
      if (current instanceof HTMLElement) {
        const value = current.dataset.value;
        if (value) {
          onSelect(value);
          e.preventDefault();
        }
      }
    } else if (e.key === "Home") {
      if (items[0] instanceof HTMLElement) items[0].focus();
    } else if (e.key === "End") {
      const item = items[items.length - 1];
      if (item instanceof HTMLElement) item.focus();
    }
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      if (target instanceof HTMLInputElement) return;
      if (target instanceof HTMLTextAreaElement) return;
      if (target.dataset.value === undefined) return;
      onSelect(target.dataset.value);
    }
  };

  const handleFocus = (e: FocusEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
    }
  };

  const handleBlur = (e: FocusEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
    }
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.focus({ preventScroll: true });
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.blur();
    }
  };

  items.forEach((item) => {
    item.addEventListener("click", handleClick);
    item.addEventListener("focus", handleFocus);
    item.addEventListener("blur", handleBlur);
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);

    if (options?.defaultValue && item.dataset.value === options.defaultValue) {
      setTimeout(() => {
        item.focus();
      }, 0);
    }
  });

  element.addEventListener("keydown", handleKeyDown);

  const keywords = Array.from(items).map(
    (item) => item.textContent?.trim() ?? ""
  );

  typeAheadSearch(element, keywords, (index) => {
    items[index].focus();
  });

  return () => {
    element.removeEventListener("keydown", handleKeyDown);
    items.forEach((item) => {
      item.removeEventListener("click", handleClick);
      item.removeEventListener("focus", handleFocus);
      item.removeEventListener("blur", handleBlur);
      item.removeEventListener("mouseenter", handleMouseEnter);
      item.removeEventListener("mouseleave", handleMouseLeave);
    });
  };
}

export function debounce(fn: () => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}

function typeAheadSearch(
  el: HTMLElement,
  keywords: string[],
  onHit: (index: number) => void
) {
  let search = "";
  const handleKeyDown = (e: KeyboardEvent) => {
    if (document.activeElement instanceof HTMLInputElement) return;
    if (document.activeElement instanceof HTMLTextAreaElement) return;

    debounce(() => {
      search = "";
    }, 1000)();

    if (e.metaKey || e.ctrlKey || e.altKey) {
      return;
    }

    if (e.key.length === 1 && e.key.match(/[a-zA-Z0-9]/)) {
      search += e.key;
      const result = keywords.find((keyword) => {
        const a = keyword.toLowerCase();
        const b = search.toLowerCase();
        return a.startsWith(b);
      });
      if (result) {
        onHit(keywords.indexOf(result));
      }
      e.preventDefault();
      e.stopPropagation();
    }
  };

  el.addEventListener("keydown", handleKeyDown);

  return () => {
    el.removeEventListener("keydown", handleKeyDown);
  };
}
