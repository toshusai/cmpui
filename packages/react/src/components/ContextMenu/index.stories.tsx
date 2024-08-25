import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ShortcutListItem } from "../../__stories__/ShortcutListItem";

import { ContextMenuItem } from "./ContextMenuItem";

import { ContextMenu } from ".";

const meta: Meta<typeof ContextMenu> = {
  title: "Float/ContextMenu",
  component: ContextMenu,
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

function ShortcutContextMenuItem(
  props: Omit<React.ComponentProps<typeof ShortcutListItem>, "as">,
) {
  return <ShortcutListItem {...props} as={ContextMenuItem} />;
}

export const Basic: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ContextMenu
          content={
            <div
              style={{
                width: 128,
              }}
            >
              <ShortcutContextMenuItem shortcut="⌘ Z">
                Undo
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⇧ ⌘ Z">
                Redo
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ X">
                Cut
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ C">
                Copy
              </ShortcutContextMenuItem>
              <ShortcutContextMenuItem shortcut="⌘ V">
                Paste
              </ShortcutContextMenuItem>
            </div>
          }
          open={open}
          onOpenChange={(open) => setOpen(open)}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 4,
              border: "1px solid var(--cmpui-border-color)",
              touchAction: "none",
              userSelect: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Right click me
          </div>
        </ContextMenu>
      </>
    );
  },
};
