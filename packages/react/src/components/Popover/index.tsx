import * as RadixPopover from "@radix-ui/react-popover";

import { FloatBox } from "../FloatBox";

import "./index.css";

export type PopoverProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Popover(props: PopoverProps) {
  return (
    <RadixPopover.Root open={props.isOpen} onOpenChange={props.onOpenChange}>
      <RadixPopover.Anchor asChild>{props.children}</RadixPopover.Anchor>
      <RadixPopover.Portal>
        <RadixPopover.Content
          alignOffset={4}
          sideOffset={4}
          collisionPadding={8}
          asChild
        >
          <FloatBox className="cmpui_popover__root">{props.content}</FloatBox>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
