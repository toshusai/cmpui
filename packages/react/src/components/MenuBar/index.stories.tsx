import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useRef, useState } from "react";

import { Popover } from "../Popover";
import { MenuListItem } from "../MenuList/MenuListItem";
import { MenuList } from "../MenuList/MenuList";

import { MenuBarButton } from "./MenuBarButton";
import { MenuBar } from "./MenuBar";

const meta: Meta<typeof MenuBarButton> = {
  title: "Float/MenuBarButton",
  component: MenuBarButton,
};

export default meta;
type Story = StoryObj<typeof MenuBarButton>;

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

    const filePop = usePopover<HTMLButtonElement>(
      <MenuList>
        {fileCommands.map((command) => (
          <MenuListItem key={command.name} disabled={command.disabled ?? false}>
            {command.name}
            <span style={{ marginLeft: "auto" }}>{command.shortcut}</span>
          </MenuListItem>
        ))}
      </MenuList>,
    );

    const editPop = usePopover<HTMLButtonElement>(
      <MenuList>
        {editCommands.map((command) => (
          <MenuListItem key={command.name}>
            {command.name}
            <span style={{ marginLeft: "auto" }}>{command.shortcut}</span>
          </MenuListItem>
        ))}
      </MenuList>,
    );

    const viewPop = usePopover<HTMLButtonElement>(
      <MenuList>
        {viewCommands.map((command) => (
          <MenuListItem key={command.name}>
            {command.name}
            <span style={{ marginLeft: "auto" }}>{command.shortcut}</span>
          </MenuListItem>
        ))}
      </MenuList>,
    );

    const helpPop = usePopover<HTMLButtonElement>(
      <MenuList>
        {helpCommands.map((command) => (
          <MenuListItem key={command.name}>
            {command.name}
            <span style={{ marginLeft: "auto" }}>{command.shortcut}</span>
          </MenuListItem>
        ))}
      </MenuList>,
    );

    return (
      <MenuBar>
        <MenuBarButton
          onFocus={filePop.open}
          onClick={filePop.open}
          ref={filePop.ref}
          selected={filePop.isOpen}
        >
          File
        </MenuBarButton>
        {filePop.popover}

        <MenuBarButton
          onFocus={editPop.open}
          onClick={editPop.open}
          ref={editPop.ref}
          selected={editPop.isOpen}
        >
          Edit
        </MenuBarButton>
        {editPop.popover}

        <MenuBarButton
          onFocus={viewPop.open}
          onClick={viewPop.open}
          ref={viewPop.ref}
          selected={viewPop.isOpen}
        >
          View
        </MenuBarButton>
        {viewPop.popover}

        <MenuBarButton
          onFocus={helpPop.open}
          onClick={helpPop.open}
          ref={helpPop.ref}
          selected={helpPop.isOpen}
        >
          Help
        </MenuBarButton>
        {helpPop.popover}
      </MenuBar>
    );
  },
};

function usePopover<T extends HTMLElement>(children: React.ReactNode) {
  const ref = useRef<T>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const popover = useMemo(
    () => (
      <Popover trigger={ref} isOpen={isOpen} onClose={close}>
        {children}
      </Popover>
    ),
    [isOpen, children],
  );

  return {
    ref,
    open,
    isOpen,
    popover,
  };
}
