import type { Meta, StoryObj } from "@storybook/vue3";
import CListItem from "./CListItem.vue";
import { h } from "vue";
import StoryListItemExample from "./stories/StoryListItemExample.vue";

const meta = {
  title: "data display/CListItem",
  component: CListItem,
} satisfies Meta<typeof CListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  "Neil Armstrong",
  "Alan Bean",
  "Peter Conrad",
  "Edgar Mitchell",
  "Alan Shepard",
].map((v) => ({
  children: v,
}));

export const Default: Story = {
  render: () => h(StoryListItemExample, { items: defaultItems }),
};

export const Disabled: Story = {
  render: () =>
    h(StoryListItemExample, {
      items: defaultItems.map((v, i) =>
        i == 2 ? { ...v, disabled: true } : v,
      ),
    }),
};

export const Selected: Story = {
  render: () =>
    h(StoryListItemExample, {
      items: defaultItems.map((v, i) =>
        i == 2 ? { ...v, selected: true } : v,
      ),
    }),
};

export const DisabledInteraction: Story = {
  render: () =>
    h(StoryListItemExample, {
      items: defaultItems.map((v, i) =>
        i == 2 ? { ...v, disabledInteraction: true } : v,
      ),
    }),
};

export const Sizes: Story = {
  render: () =>
    h(
      "div",
      {
        style: "display: grid; grid-template-columns: repeat(3, auto);",
      },
      [
        h(StoryListItemExample, {
          items: defaultItems.map((v) => ({ ...v, size: "S" as const })),
        }),
        h(StoryListItemExample, {
          items: defaultItems.map((v) => ({ ...v, size: "M" as const })),
        }),
        h(StoryListItemExample, {
          items: defaultItems.map((v) => ({ ...v, size: "L" as const })),
        }),
      ],
    ),
};

export const Rounded: Story = {
  render: () =>
    h(StoryListItemExample, {
      items: defaultItems.map((v) => ({ ...v, rounded: true })),
    }),
};
