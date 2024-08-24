import * as RadixMenubar from "@radix-ui/react-menubar";
import React from "react";
import { FloatBox } from "../FloatBox";
import { ListItem } from "../ListItem";

export type MenuBarSubButtonProps = {
  children: React.ReactNode;
  className?: string;
  content: React.ReactNode;
  shortcut?: string | React.ReactNode;
};

export function MenuBarSubButton(props: MenuBarSubButtonProps) {
  return (
    <RadixMenubar.Sub>
      <RadixMenubar.SubTrigger asChild>
        <ListItem
          size="S"
          rounded
          className="cmpui_menu-bar-sub-button__list-item"
        >
          {props.children}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="-240 -960 720 960"
            width="16"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </ListItem>
      </RadixMenubar.SubTrigger>
      <RadixMenubar.Portal>
        <RadixMenubar.SubContent alignOffset={-4} sideOffset={2} asChild>
          <FloatBox>{props.content}</FloatBox>
        </RadixMenubar.SubContent>
      </RadixMenubar.Portal>
    </RadixMenubar.Sub>
  );
}
