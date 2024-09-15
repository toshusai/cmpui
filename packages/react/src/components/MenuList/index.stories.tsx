import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { codeWords } from "../../__stories__/const";

import { MenuList } from "./MenuList";
import { MenuListItem } from "./MenuListItem";

const meta: Meta<typeof MenuList> = {
  title: "data display/MenuList",
  component: MenuList,
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  render: function Render() {
    const options = codeWords.slice(0, 5);
    const [selected, setSelected] = useState(options[3]);
    return (
      <>
        <div>Selected: {selected}</div>
        <MenuList
          onSelect={(v) => setSelected(v)}
          style={{ width: "fit-content" }}
        >
          {options.map((word) => (
            <MenuListItem key={word} value={word} selected={selected === word}>
              {word}
            </MenuListItem>
          ))}
        </MenuList>
      </>
    );
  },
};
