import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuList } from "../MenuList/MenuList";
import { codeWords } from "../../__stories__/const";
import { MenuListItem } from "../MenuList/MenuListItem";

import { ContextMenu, useContextMenu } from ".";

const meta: Meta<typeof ContextMenu> = {
  title: "Float/ContextMenu",
  component: ContextMenu,
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Basic: Story = {
  render: function Render() {
    const { ctx, handleClose, handleContextMenu } = useContextMenu();
    const options = codeWords.map((word) => ({ label: word, value: word }));
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <>
        <div
          onContextMenu={handleContextMenu}
          style={{
            width: 128,
            height: 128,
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selected}
        </div>

        <ContextMenu onClose={handleClose} {...ctx}>
          <MenuList
            onSelect={(v) => {
              setSelected(v);
              handleClose();
            }}
          >
            {options.map((option) => (
              <MenuListItem key={option.value} value={option.value}>
                {option.label}
              </MenuListItem>
            ))}
          </MenuList>
        </ContextMenu>
      </>
    );
  },
};
