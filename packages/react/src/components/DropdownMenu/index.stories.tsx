import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

import { DropdownMenuItem } from "./DropdownMenuItem";

import { DropdownMenu } from ".";

const meta: Meta<typeof DropdownMenu> = {
  title: "Float/DropdownMenu",
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{
          height: 128,
        }}
      >
        <DropdownMenu
          content={
            <>
              <DropdownMenuItem>New</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
            </>
          }
          open={open}
          onOpenChange={(open) => setOpen(open)}
        >
          <Button>Open</Button>
        </DropdownMenu>
      </div>
    );
  },
};
