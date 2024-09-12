import type { Meta, StoryObj } from "@storybook/vue3";
import CIconButton from "./CIconButton.vue";
import { IconHome } from "@tabler/icons-vue";
import { h } from "vue";

const meta = {
  title: "inputs/CIconButton",
  component: CIconButton,
  argTypes: {
    rounded: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof CIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(CIconButton, () => h(IconHome, { size: 20 })),
};

export const Bordered: Story = {
  render: () =>
    h(CIconButton, { bordered: true }, () => h(IconHome, { size: 20 })),
};

export const Disabled: Story = {
  render: () =>
    h(() => [
      h(CIconButton, { disabled: true }, () => h(IconHome, { size: 20 })),
      h(CIconButton, { disabled: true, selected: true }, () =>
        h(IconHome, { size: 20 }),
      ),
      h(CIconButton, { disabled: true, bordered: true }, () =>
        h(IconHome, { size: 20 }),
      ),
    ]),
};

export const Rounded: Story = {
  render: () =>
    h(() => [
      h(CIconButton, { rounded: true }, () => h(IconHome, { size: 20 })),
      h(CIconButton, { rounded: true, bordered: true }, () =>
        h(IconHome, { size: 20 }),
      ),
      h(CIconButton, { rounded: true, selected: true }, () =>
        h(IconHome, { size: 20 }),
      ),
    ]),
};

export const Selected: Story = {
  render: () =>
    h(CIconButton, { selected: true }, () => h(IconHome, { size: 20 })),
};

export const Sizes: Story = {
  render: () =>
    h(() => [
      h(CIconButton, { size: "S" }, () => h(IconHome, { size: 16 })),
      h(CIconButton, {}, () => h(IconHome, { size: 20 })),
    ]),
};
