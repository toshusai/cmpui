import { ListItem } from "..";
import "./stories.css";

export function ShortcutListItem({
  disabled,
  shortcut,
  as = ListItem,
  children,
  ...props
}: {
  children: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  as?: React.ElementType;
} & React.ComponentProps<typeof ListItem>) {
  const Component = as;
  return (
    <Component disabled={disabled} className="shortcut-list-item" {...props}>
      <div style={{ width: "100%" }}>{children}</div>
      {shortcut && (
        <div
          style={{
            fontSize: "10px",
            marginLeft: 16,
            whiteSpace: "nowrap",
          }}
        >
          {shortcut}
        </div>
      )}
    </Component>
  );
}
