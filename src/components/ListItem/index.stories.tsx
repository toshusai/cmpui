import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from ".";
import { FloatBox } from "../FloatBox";

const meta: Meta<typeof ListItem> = {
  title: "View/ListItem",
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Basic: Story = {
  render: function RenderBasic() {
    return (
      <List as="ol">
        <ListItem>Item1</ListItem>
        <ListItem>Item2</ListItem>
        <ListItem>Item3</ListItem>
      </List>
    );
  },
};

export const Selected: Story = {
  render: function RenderBasic() {
    return (
      <List as="ol">
        <ListItem selected>Item1</ListItem>
        <ListItem>Item2</ListItem>
        <ListItem>Item3</ListItem>
      </List>
    );
  },
};

export const Small: Story = {
  render: function RenderBasic() {
    return (
      <List as="ol">
        <ListItem size="S">Item1</ListItem>
        <ListItem size="S">Item2</ListItem>
        <ListItem size="S">Item3</ListItem>
      </List>
    );
  },
};

function CommandItem(props: {
  children?: React.ReactNode;
  shortcut?: string;
  selected?: boolean;
}) {
  return (
    <ListItem
      style={{
        width: 128,
      }}
      rounded
      selected={props.selected}
      size="S"
    >
      {props.children}
      {props.shortcut && (
        <span
          style={{
            marginLeft: "auto",
            fontSize: 10,
            color: props.selected ? "white" : "var(--cmpui-text2-color)",
          }}
        >
          {props.shortcut}
        </span>
      )}
    </ListItem>
  );
}

export const Commands: Story = {
  render: function RenderBasic() {
    return (
      <FloatBox>
        <List as="ol">
          <CommandItem shortcut="⌘ Z">Undo</CommandItem>
          <CommandItem shortcut="⇧ ⌘ Z">Redo</CommandItem>
          <CommandItem shortcut="⌘ X">Cut</CommandItem>
          <CommandItem selected shortcut="⌘ C">
            Copy
          </CommandItem>
          <CommandItem shortcut="⌘ V">Paste</CommandItem>
        </List>
      </FloatBox>
    );
  },
};
