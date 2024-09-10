import type { Meta, StoryObj } from "@storybook/vue3";
import IconButton from "./IconButton.vue";
import { IconHome } from "@tabler/icons-vue";
import { h } from "vue";

const meta = {
  component: IconButton,
  argTypes: {
    rounded: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSlot = () => h(IconHome, { size: 20 });

export const Rounded: Story = {
  args: {
    default: defaultSlot,
    rounded: true,
  },
};

export const Border: Story = {
  args: {
    default: defaultSlot,
    bordered: true,
  },
};

export const Selected: Story = {
  args: {
    default: defaultSlot,
    selected: true,
  },
};

export const Small: Story = {
  args: {
    default: () => h(IconHome, { size: 16 }),
    size: "S",
  },
};

export const Disabled: Story = {
  args: {
    default: defaultSlot,
    disabled: true,
  },
};
