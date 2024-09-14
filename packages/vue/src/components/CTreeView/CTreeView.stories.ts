import type { Meta, StoryObj } from "@storybook/vue3";
import CTreeView from "./CTreeView.vue";
import { RenderProps } from "./types";
import { h, ref } from "vue";
import CListItem from "../CListItem/CListItem.vue";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-vue";

const meta = {
  title: "data display/CTreeView",
  component: CTreeView,
} as Meta<typeof CTreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

type Item = {
  id: string;
  children?: Item[];
  text: string;
  isExpanded?: boolean;
};

export const Default: Story = {
  args: {
    items: [],
    render: () => h("div"),
  },
  render: () => ({
    setup: () => {
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
      return () =>
        h(CTreeView as typeof CTreeView<Item>, { items, render: render });
    },
  }),
};

export const Expanded: Story = {
  args: {
    items: [],
    render: () => h("div"),
  },
  render: () => ({
    setup: () => {
      const items = ref<Item[]>([
        {
          id: "1",
          text: "One",
        },
        {
          id: "2",
          text: "Two",
          isExpanded: false,
          children: [
            {
              id: "3",
              text: "Three",
              isExpanded: false,
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
      ]);
      const render = (props: RenderProps<Item>) => {
        if (props.item.children) {
          return h(
            CListItem,
            {
              style: `padding-left: ${props.depth * 16 + 8}px`,
              onClick: () => {
                const flatItems = treeToFlat(items.value);

                const index = flatItems.findIndex(
                  (item) => item.id === props.item.id,
                );
                const item = flatItems[index];
                item.isExpanded = !item.isExpanded;
              },
            },
            () =>
              h(() => [
                props.item.isExpanded
                  ? h(IconChevronDown, { size: 20, style: "margin-right: 8px" })
                  : h(IconChevronRight, {
                      size: 20,
                      style: "margin-right: 8px",
                    }),
                h("div", props.item.text),
              ]),
          );
        }
        return h(
          CListItem,
          {
            style: `padding-left: ${props.depth * 16 + 8}px`,
          },
          () => props.item.text,
        );
      };
      return () =>
        h(
          "div",
          { style: { height: "256px", width: "256px" } },
          h(CTreeView as typeof CTreeView<Item>, {
            items: items.value,
            render: render,
          }),
        );
    },
  }),
};

function treeToFlat(items: Item[]) {
  return items.flatMap((item) => {
    const children = item.children || [];
    return [item, ...treeToFlat(children)];
  });
}
