import { useKeyboardNavigation } from "@toshusai/cmpui-core";
import { useEffect, useRef } from "react";

export function MenuList({
  defaultValue,
  autoFocus,
  onSelect,
  children,
  ...props
}: {
  defaultValue?: string;
  autoFocus?: boolean;
  onSelect?: (value: string) => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect" | "defaultValue">) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(autoFocus === false)) {
      setTimeout(() => {
        el.current?.focus();
      }, 0);
    }
  }, [autoFocus]);
  useEffect(() => {
    const cleanup = useKeyboardNavigation(
      el.current!,
      (value) => {
        onSelect?.(value);
      },
      {
        defaultValue: defaultValue,
      },
    );

    return () => {
      cleanup();
    };
  }, [defaultValue, onSelect]);

  return (
    <div
      ref={el}
      className="cmpui_menu-list"
      role="listbox"
      tabIndex={-1}
      {...props}
    >
      {children}
    </div>
  );
}
