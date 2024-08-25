import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => {
    return <Button>Button</Button>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Button variant="secondary">Button</Button>;
  },
};

export const Small: Story = {
  render: () => {
    return <Button size="S">Button</Button>;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Button disabled>Button</Button>;
  },
};
