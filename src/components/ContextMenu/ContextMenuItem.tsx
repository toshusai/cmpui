import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { ListItem } from "../ListItem";

export type ContextMenuItemProps = React.ComponentProps<
  typeof RadixContextMenu.Item
>;

export function ContextMenuItem({ children, ...props }: ContextMenuItemProps) {
  return (
    <RadixContextMenu.Item {...props} asChild>
      <ListItem size="S" rounded>
        {children}
      </ListItem>
    </RadixContextMenu.Item>
  );
}
