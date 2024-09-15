import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../Button";

import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Float/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Toast show={open} onClose={() => setOpen(false)}>
          <div>Hello World</div>
        </Toast>
      </>
    );
  },
};
