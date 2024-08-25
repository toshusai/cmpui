import * as RadixMenubar from "@radix-ui/react-menubar";
import React from "react";

import { ListItem } from "../ListItem";

export type MenuBarItemProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<typeof ListItem>;

export function MenuBarItem({
  className,
  disabled,
  children,
  ...props
}: MenuBarItemProps) {
  return (
    <RadixMenubar.Item asChild disabled={disabled}>
      <ListItem size="S" rounded className={className} {...props}>
        {children}
      </ListItem>
    </RadixMenubar.Item>
  );
}
