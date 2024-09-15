import { ListItem, ListItemProps } from "../ListItem";

export function MenuListItem(
  props: ListItemProps & {
    value?: string;
  },
) {
  return <ListItem {...props} tabIndex={0} data-value={props.value} />;
}
