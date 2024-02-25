import type { Meta, StoryObj } from "@storybook/react";
import { MenuBarButton } from ".";
import { ShortcutListItem } from "../../__stories__/ShortcutListItem";
import { MenuBar } from "./MenuBar";
import { MenuBarItem } from "./MenuBarItem";
import { MenuBarSeparator } from "./MenuBarSeparator";
import { MenuBarSubButton } from "./MenuBarSubButton";

const meta: Meta<typeof MenuBarButton> = {
  title: "Components/Float/MenuBarButton",
  component: MenuBarButton,
};

export default meta;
type Story = StoryObj<typeof MenuBarButton>;

function ShortcutMenuBarItem(
  props: Omit<React.ComponentProps<typeof ShortcutListItem>, "as">,
) {
  return <ShortcutListItem {...props} as={MenuBarItem} />;
}

export const Basic: Story = {
  render: function RenderBasic() {
    const fileCommands = [
      {
        name: "New File",
        shortcut: "⌘ N",
      },
      {
        name: "Open File",
        shortcut: "⌘ O",
        disabled: true,
      },
      {
        name: "Save File",
        shortcut: "⌘ S",
      },
      {
        name: "Save File As",
        shortcut: "⇧ ⌘ S",
      },
    ];

    const editCommands = [
      {
        name: "Undo",
        shortcut: "⌘ Z",
      },
      {
        name: "Redo",
        shortcut: "⇧ ⌘ Z",
      },
      {
        name: "Cut",
        shortcut: "⌘ X",
      },
      {
        name: "Copy",
        shortcut: "⌘ C",
      },
      {
        name: "Paste",
        shortcut: "⌘ V",
      },
    ];

    const viewCommands = [
      {
        name: "Zoom In",
        shortcut: "⇧ ⌘ =",
      },
      {
        name: "Zoom Out",
        shortcut: "⌘ -",
      },
      {
        name: "Zoom to Fit",
        shortcut: "⌘ 0",
      },
      {
        name: "Zoom to Selection",
        shortcut: "⌘ 1",
      },
    ];

    const helpCommands = [
      {
        name: "About",
        shortcut: "",
      },
    ];

    return (
      <MenuBar>
        <MenuBarButton
          content={
            <>
              {fileCommands.map((command) => (
                <ShortcutMenuBarItem
                  key={command.name}
                  disabled={command.disabled}
                  shortcut={command.shortcut}
                >
                  {command.name}
                </ShortcutMenuBarItem>
              ))}
              <MenuBarSeparator />
              <MenuBarSubButton
                content={
                  <>
                    <MenuBarItem>Copy Link</MenuBarItem>
                    <MenuBarItem>Copy Text</MenuBarItem>
                    <MenuBarItem>Email</MenuBarItem>
                    <MenuBarItem>SNS</MenuBarItem>
                  </>
                }
              >
                Share
              </MenuBarSubButton>
            </>
          }
        >
          File
        </MenuBarButton>
        <MenuBarButton
          content={editCommands.map((command) => (
            <ShortcutMenuBarItem key={command.name} shortcut={command.shortcut}>
              {command.name}
            </ShortcutMenuBarItem>
          ))}
        >
          Edit
        </MenuBarButton>

        <MenuBarButton
          content={viewCommands.map((command) => (
            <ShortcutMenuBarItem key={command.name} shortcut={command.shortcut}>
              {command.name}
            </ShortcutMenuBarItem>
          ))}
        >
          View
        </MenuBarButton>

        <MenuBarButton
          content={
            <ShortcutMenuBarItem shortcut="⌘ /">
              {helpCommands[0].name}
            </ShortcutMenuBarItem>
          }
        >
          Help
        </MenuBarButton>
      </MenuBar>
    );
  },
};
