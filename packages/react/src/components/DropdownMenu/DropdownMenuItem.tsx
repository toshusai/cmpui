import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { ListItem } from "../ListItem";

export type DropdownMenuItemProps = React.ComponentProps<
  typeof DropdownMenu.Item
>;

export function DropdownMenuItem({
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenu.Item {...props} asChild>
      <ListItem size="S" rounded>
        {children}
      </ListItem>
    </DropdownMenu.Item>
  );
}
