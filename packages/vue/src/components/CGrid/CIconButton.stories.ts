import type { Meta, StoryObj } from "@storybook/vue3";
import CGrid from "./CGrid.vue";

const meta = {
  title: "parts/CGrid",
  component: CGrid,
  args: {
    offsetX: 0,
    offsetY: 0,
    sizeX: 50,
    sizeY: 50,
  },
} satisfies Meta<typeof CGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithColor: Story = {
  args: {
    color: "red",
  },
};

export const Size: Story = {
  args: {
    sizeX: 100,
    sizeY: 25,
  },
};

export const Offset: Story = {
  args: {
    offsetX: 10,
    offsetY: 25,
  },
};
