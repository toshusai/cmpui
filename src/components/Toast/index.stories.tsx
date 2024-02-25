import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast } from ".";
import { Button } from "../Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Float/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          width: "100vw",
          height: 300,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div
            style={{
              padding: 8,
            }}
          >
            Hello World
          </div>
        </Toast>
      </div>
    );
  },
};
