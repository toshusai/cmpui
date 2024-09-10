import type { Meta, StoryObj } from "@storybook/vue3";
import CTreeView from "./CTreeView.vue";
import { RenderProps } from "./types";
import { h } from "vue";
import CListItem from "../CListItem/CListItem.vue";

const meta = {
  title: "data display/CTreeView",
  component: CTreeView,
} satisfies Meta<typeof CTreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  args: {
    items: [],
    render: () => h("div"),
  },
  render: () => ({
    setup: () => {
      type Item = {
        id: string;
        children?: Item[];
        text: string;
      };
      const items: Item[] = [
        {
          id: "1",
          text: "One",
        },
        {
          id: "2",
          text: "Two",
          children: [
            {
              id: "3",
              text: "Three",
              children: [
                {
                  id: "5",
                  text: "Five",
                },
              ],
            },
            {
              id: "6",
              text: "Six",
            },
          ],
        },
        {
          id: "4",
          text: "Four",
        },
      ];
      const render = (props: RenderProps<Item>) => {
        return h(
          CListItem,
          {
            style: `padding-left: ${props.depth * 16 + 8}px`,
          },
          props.item.text,
        );
      };
      return {
        items,
        render,
      };
    },
    components: { CTreeView },
    template: html`<CTreeView :items="items" :render="render" /> `,
  }),
};
