import * as RadixMenubar from "@radix-ui/react-menubar";
import React from "react";

export type MenuBarProps = {
  children: React.ReactNode;
  className?: string;
};

export function MenuBar(props: MenuBarProps) {
  return (
    <RadixMenubar.Root className="cmpui_menu-bar__root">
      {props.children}
    </RadixMenubar.Root>
  );
}
