import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

import { FloatBox } from "../FloatBox";

export type DropdownMenuProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function DropdownMenu(props: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root open={props.open} onOpenChange={props.onOpenChange}>
      <RadixDropdownMenu.Trigger asChild>
        {props.children}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Content
        align="start"
        sideOffset={2}
        collisionPadding={8}
        alignOffset={0}
        asChild
      >
        <FloatBox>{props.content}</FloatBox>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  );
}
