import type { Meta, StoryObj } from "@storybook/vue3";
import TreeView from "./TreeView.vue";
import { RenderProps } from "./types";
import { h } from "vue";

const meta = {
  component: TreeView,
} satisfies Meta<typeof TreeView>;

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
          "span",
          {
            style: `padding-left: ${props.depth * 16}px`,
          },
          props.item.text,
        );
      };
      return {
        items,
        render,
      };
    },
    components: { TreeView },
    template: html`<TreeView :items="items" :render="render" /> `,
  }),
};
