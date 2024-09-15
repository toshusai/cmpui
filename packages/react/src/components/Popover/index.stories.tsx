import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { IconDots } from "@tabler/icons-react";

import { codeWords } from "../../__stories__/const";
import { IconButton } from "../IconButton";
import { ListItem } from "../ListItem";

import { Popover } from ".";

const meta: Meta<typeof Popover> = {
  title: "Float/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const options = codeWords.slice(0, 5);
    const [selected, setSelected] = useState("null");
    return (
      <>
        <div>Selected: {selected}</div>
        <IconButton ref={ref} onClick={() => setOpen(true)}>
          <IconDots size={20} />
        </IconButton>

        <Popover
          isOpen={open}
          trigger={ref}
          onClose={() => setOpen(false)}
          placement="bottom-start"
        >
          {options.map((option) => (
            <ListItem
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </ListItem>
          ))}
        </Popover>
      </>
    );
  },
};
