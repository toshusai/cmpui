import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipPresenter } from ".";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Float/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: function RenderBasic() {
    return (
      <TooltipProvider>
        <Tooltip content="Hello">
          <Button>Tooltip</Button>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const Multiple: Story = {
  render: function RenderBasic() {
    return (
      <TooltipProvider>
        <div
          style={{
            display: "flex",
          }}
        >
          <Tooltip content="A">
            <IconButton>A</IconButton>
          </Tooltip>
          <Tooltip content="B">
            <IconButton>B</IconButton>
          </Tooltip>
          <Tooltip content="C">
            <IconButton>C</IconButton>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  },
};

export const Presenter: Story = {
  render: function RenderPresenter() {
    return <TooltipPresenter>Hello, World!</TooltipPresenter>;
  },
};
