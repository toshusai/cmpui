import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../ListItem";

import { TreeView } from ".";

const meta: Meta<typeof TreeView> = {
  title: "View/TreeView",
  component: TreeView,
};

export default meta;

type Story = StoryObj<typeof TreeView>;

type Item = {
  id: string;
  children?: Item[];
  text: string;
  isExpanded?: boolean;
};

export const Basic: Story = {
  render: function Render() {
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

    return (
      <div
        style={{
          height: 256,
          width: 256,
          overflow: "auto",
        }}
      >
        <TreeView<Item>
          items={items}
          render={(props) => (
            <ListItem style={{ paddingLeft: `${props.depth * 16 + 8}px` }}>
              {props.item.text}
            </ListItem>
          )}
        />
      </div>
    );
  },
};
