import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import { Icon } from "../../__stories__/Icon";
import { IconButtonGroup } from "./IconButtonGroup";

const meta: Meta<typeof IconButton> = {
  title: "Components/Actions/IconButton",
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

const corner = (
  <svg
    width="6"
    height="6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      bottom: 4,
      right: 4,
      transform: "scaleX(-1)",
    }}
  >
    <title>corner</title>
    <path d="M0 24V0.00427246L24 24H0Z" fill="currentColor" />
  </svg>
);

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: 4 }}>
        <IconButton>
          <Icon filled name="arrow_selector_tool" style={{ fontSize: 20 }} />
        </IconButton>
        <IconButton selected>
          <Icon name="square" style={{ fontSize: 20 }} />
          {corner}
        </IconButton>
        <IconButton>
          <Icon name="title" style={{ fontSize: 20 }} />
        </IconButton>
      </div>
    );
  },
};

export const Selected: Story = {
  render: () => {
    return (
      <IconButton selected>
        <Icon name="star" style={{ fontSize: 20 }} />
      </IconButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <IconButton disabled>
        <Icon name="star" style={{ fontSize: 20 }} />
      </IconButton>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <IconButton size="S">
        <Icon name="star" style={{ fontSize: 16 }} />
      </IconButton>
    );
  },
};

export const Group: Story = {
  render: () => {
    return (
      <IconButtonGroup>
        <IconButton>
          <Icon filled name="align_horizontal_left" style={{ fontSize: 16 }} />
        </IconButton>
        <IconButton selected>
          <Icon name="align_horizontal_center" style={{ fontSize: 16 }} />
        </IconButton>
        <IconButton>
          <Icon name="align_horizontal_right" style={{ fontSize: 16 }} />
        </IconButton>
      </IconButtonGroup>
    );
  },
};
