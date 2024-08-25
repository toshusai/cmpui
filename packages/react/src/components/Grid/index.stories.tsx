import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from ".";

const meta: Meta<typeof Grid> = {
  title: "View/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  render: function Render() {
    return (
      <div
        style={{
          width: "100vh",
          height: 300,
        }}
      >
        <Grid sizeX={50} sizeY={50} offsetX={10} offsetY={25} />
      </div>
    );
  },
};

export const Size: Story = {
  render: function Render() {
    return (
      <div
        style={{
          width: "100vh",
          height: 300,
        }}
      >
        <Grid sizeX={25} sizeY={100} offsetX={10} offsetY={25} />
      </div>
    );
  },
};
