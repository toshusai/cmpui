import type { Meta, StoryObj } from "@storybook/react";
import { FloatBox } from ".";
import { ShortcutListItem } from "../../__stories__/ShortcutListItem";

const meta: Meta<typeof FloatBox> = {
  title: "Components/Float/FloatBox",
  component: FloatBox,
};

export default meta;
type Story = StoryObj<typeof FloatBox>;

export const Basic: Story = {
  render: function Render() {
    return (
      <FloatBox
        style={{
          width: 128,
        }}
      >
        <ShortcutListItem rounded size="S" shortcut="⌘ Z">
          Undo
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⇧ ⌘ Z">
          Redo
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ X">
          Cut
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ C">
          Copy
        </ShortcutListItem>
        <ShortcutListItem rounded size="S" shortcut="⌘ V">
          Paste
        </ShortcutListItem>
      </FloatBox>
    );
  },
};
