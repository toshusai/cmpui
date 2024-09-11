import type { Meta, StoryObj } from "@storybook/vue3";
import CListItem from "./CListItem.vue";
import { h } from "vue";
import StoryListItemBasic from "./stories/StoryListItemBasic.vue";
import StoryListItemDisabled from "./stories/StoryListItemDisabled.vue";
import StoryListItemSize from "./stories/StoryListItemSize.vue";

const meta = {
  title: "data display/CListItem",
  component: CListItem,
} satisfies Meta<typeof CListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(StoryListItemBasic),
};

export const Disabled: Story = {
  render: () => h(StoryListItemDisabled),
};

export const Small: Story = {
  render: () => h(StoryListItemSize, { size: "S" }),
};

export const Large: Story = {
  render: () => h(StoryListItemSize, { size: "L" }),
};
