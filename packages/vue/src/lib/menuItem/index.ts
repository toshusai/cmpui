export function useKeyboardNavigation(
  element: HTMLUListElement,
  onSelect: (value: string) => void,
  options?: {
    defaultValue?: string;
  },
) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      const items = element.querySelectorAll("li");
      const next = Array.from(items).find(
        (item) => item === document.activeElement,
      )?.nextElementSibling;
      if (next && next instanceof HTMLElement) {
        next.focus();
      }
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      if (!element) return;
      const items = element.querySelectorAll("li");
      const prev = Array.from(items).find(
        (item) => item === document.activeElement,
      )?.previousElementSibling;
      if (prev && prev instanceof HTMLElement) {
        prev.focus();
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
      const items = element.querySelectorAll("li");
      items[0].focus();
    } else if (e.key === "End") {
      const items = element.querySelectorAll("li");
      items[items.length - 1].focus();
    }
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      onSelect(target.dataset.value ?? "");
    }
  };

  const handleFocus = (e: FocusEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.dataset.highlighted = "true";
    }
  };

  const handleBlur = (e: FocusEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.dataset.highlighted = "false";
    }
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      target.focus({ preventScroll: true });
    }
  };

  const items = element.querySelectorAll("li");
  items.forEach((item) => {
    item.addEventListener("click", handleClick);
    item.addEventListener("focus", handleFocus);
    item.addEventListener("blur", handleBlur);
    item.addEventListener("mouseenter", handleMouseEnter);

    if (options?.defaultValue && item.dataset.value === options.defaultValue) {
      item.dataset.highlighted = "true";
      setTimeout(() => {
        item.focus();
      }, 0);
    }
  });

  window.addEventListener("keydown", handleKeyDown);

  const keywords = Array.from(items).map(
    (item) => item.textContent?.trim() ?? "",
  );

  typeAheadSearch(element, keywords, (index) => {
    items[index].focus();
  });

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    items.forEach((item) => {
      item.removeEventListener("click", handleClick);
      item.removeEventListener("focus", handleFocus);
      item.removeEventListener("blur", handleBlur);
      item.removeEventListener("mouseenter", handleMouseEnter);
    });
  };
}

function debounce(fn: () => void, delay: number) {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}

function typeAheadSearch(
  el: HTMLElement,
  keywords: string[],
  onHit: (index: number) => void,
) {
  let search = "";
  const handleKeyDown = (e: KeyboardEvent) => {
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
