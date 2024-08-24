import * as RadixSelect from "@radix-ui/react-select";
import { ListItem } from "../ListItem";

export type SelectItemProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
  value: string;
};

export function SelectItem(props: SelectItemProps) {
  return (
    <RadixSelect.Item
      value={props.value}
      asChild
      onSelect={props.onSelect}
      disabled={props.disabled}
    >
      <ListItem
        rounded
        style={{
          paddingLeft: 24,
        }}
      >
        <RadixSelect.ItemIndicator asChild>
          <svg
            style={{
              position: "absolute",
              left: 8,
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            viewBox="0 -960 960 960"
            width="12"
            fill="currentColor"
          >
            <path d="M382-208 122-468l90-90 170 170 366-366 90 90-456 456Z" />
          </svg>
        </RadixSelect.ItemIndicator>
        <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
      </ListItem>
    </RadixSelect.Item>
  );
}
