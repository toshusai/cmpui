import type { Meta, StoryObj } from "@storybook/react";

import { SelectRect, useSelectRectHandler } from ".";

const meta: Meta<typeof SelectRect> = {
  title: "Controls/SelectRect",
  component: SelectRect,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SelectRect>;

export const Basic: Story = {
  render: function Render() {
    const { rect, onPointerDown } = useSelectRectHandler();
    return (
      <div
        onPointerDown={onPointerDown}
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        {rect && <SelectRect {...rect} />}
      </div>
    );
  },
};

export const Static: Story = {
  render: function Render() {
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        {<SelectRect x={100} y={150} width={200} height={250} />}
      </div>
    );
  },
};
