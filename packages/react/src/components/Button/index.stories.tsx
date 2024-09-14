import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "inputs/CButton",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    return <Button>Button</Button>;
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="transparent">Transparent</Button>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <>
        <Button size="M">Medium</Button>
        <Button size="S">Small</Button>
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return <Button disabled>Button</Button>;
  },
};

export const Bordered: Story = {
  render: () => {
    return (
      <>
        <Button bordered>Primary</Button>
        <Button variant="secondary" bordered>
          Secondary
        </Button>
      </>
    );
  },
};

export const Link: Story = {
  render: () => {
    return (
      <Button as="a" href="">
        Link Button
      </Button>
    );
  },
};
