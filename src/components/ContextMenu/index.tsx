import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { FloatBox } from "../FloatBox";

import "./index.css";

export type ContextMenuProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ContextMenu(props: ContextMenuProps) {
  return (
    <RadixContextMenu.Root onOpenChange={props.onOpenChange}>
      <RadixContextMenu.Trigger asChild>
        {props.children}
      </RadixContextMenu.Trigger>

      <RadixContextMenu.Portal>
        <RadixContextMenu.Content asChild>
          <FloatBox>{props.content}</FloatBox>
        </RadixContextMenu.Content>
      </RadixContextMenu.Portal>
    </RadixContextMenu.Root>
  );
}
