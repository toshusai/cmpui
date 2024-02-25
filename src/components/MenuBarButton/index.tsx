import * as RadixMenubar from "@radix-ui/react-menubar";
import React, { forwardRef } from "react";
import { classNames } from "../../utils/classNames";
import { FloatBox } from "../FloatBox";

import "./index.css";

export type MenuBarButtonProps = {
  content?: React.ReactNode;
  selected?: boolean;
} & Omit<React.ComponentProps<"button">, "content">;

export const MenuBarButton = forwardRef<HTMLButtonElement, MenuBarButtonProps>(
  ({ selected, content, ...props }, ref) => {
    return (
      <RadixMenubar.Menu>
        <RadixMenubar.Trigger asChild>
          <button
            ref={ref}
            className={classNames(
              "cmpui_menu-bar-button__root",
              props.className,
            )}
            type="button"
            data-selected={selected}
            data-highlighted={selected}
            {...props}
          >
            {props.children}
          </button>
        </RadixMenubar.Trigger>
        <RadixMenubar.Portal>
          <RadixMenubar.Content asChild>
            <FloatBox>{content}</FloatBox>
          </RadixMenubar.Content>
        </RadixMenubar.Portal>
      </RadixMenubar.Menu>
    );
  },
);
