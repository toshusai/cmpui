import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TreeView } from ".";
import { Icon } from "../../__stories__/Icon";
import { ITree } from "../../types";
import { ContextMenu } from "../ContextMenu";
import { ContextMenuItem } from "../ContextMenu/ContextMenuItem";
import { ContextMenuSeparator } from "../ContextMenu/ContextMenuSeparator";
import { ListItem } from "../ListItem";
import { inChildren } from "./lib/inChildren";
import { OrderType } from "./types/OrderType";
import { RenderProps } from "./types/RenderProps";

const meta: Meta<typeof TreeView> = {
  title: "View/TreeView",
  component: TreeView,
};

export default meta;

type Story = StoryObj<typeof TreeView>;

function randomId() {
  return Math.random().toString(36).slice(2);
}

type Item = {
  id: string;
  children?: Item[];
  icon?: string;
};

const defaultItems: Item[] = [
  {
    id: "root",
    children: [
      {
        id: "src",
        children: [
          {
            id: "image.png",
            icon: "image",
          },
          {
            id: "music.mp3",
            icon: "music_note",
          },
        ],
      },
      {
        id: "lib",
        children: [
          {
            id: "video.mp4",
            icon: "videocam",
          },
          {
            id: "code.tsx",
            icon: "code",
          },
        ],
      },
      {
        id: "child3",
        children: [
          {
            id: "child3-1",
          },
          {
            id: "child3-2",
          },
        ],
      },
    ],
  },
];

function RenderItem({
  item,
  open,
  onOpenChange,
  setItems,
  items,
  map,
  depth,
  onOpenContext,
  selected,
  onClick,
}: RenderProps<Item> & {
  items: Item[];
  selected?: boolean;
  setItems: React.Dispatch<React.SetStateAction<ITree[]>>;
  onOpenContext?: (open: boolean) => void;
  map: Map<string, { item: ITree; parentId?: string }>;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <ContextMenu
      onOpenChange={onOpenContext}
      content={
        <>
          {item.children !== undefined && (
            <>
              <ContextMenuItem
                onClick={() => {
                  if (item.children) {
                    item.children.push({
                      id: randomId(),
                    });
                  } else {
                    item.children = [
                      {
                        id: `${item.id}-1`,
                      },
                    ];
                  }
                  setItems([...items]);
                }}
              >
                New File
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => {
                  item.children?.push({
                    id: randomId(),
                    children: [],
                  });

                  setItems([...items]);
                }}
              >
                New Folder
              </ContextMenuItem>
              <ContextMenuSeparator />
            </>
          )}

          <ContextMenuItem
            onClick={() => {
              const parentId = map.get(item.id)?.parentId;
              const parent = map.get(parentId ?? "");
              if (!parent) {
                setItems(items.filter((i) => i.id !== item.id));
                return;
              }
              const index = parent.item.children?.indexOf(item);
              if (index === undefined) throw new Error("index not found");
              parent.item.children?.splice(index, 1);
              if (parent.item.children?.length === 0) parent.item.children = [];
              setItems([...items]);
            }}
          >
            Delete
          </ContextMenuItem>
        </>
      }
    >
      <ListItem
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          paddingLeft: (depth + 1) * 8,
          boxSizing: "border-box",
          paddingRight: 8,
          gap: 4,
        }}
        selected={selected}
        onClick={onClick}
        as="div"
      >
        {item.children === undefined ? (
          <Icon
            name={item.icon ?? "note"}
            size={16}
            style={{
              marginLeft: 12,
            }}
          />
        ) : open ? (
          <div
            style={{
              display: "flex",
              gap: 4,
              cursor: "pointer",
            }}
            onClick={() => {
              onOpenChange?.(false);
            }}
          >
            <Icon name="expand_more" size={16} />
            <Icon name="folder_open" size={16} />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: 4,
            }}
            onClick={() => {
              onOpenChange?.(true);
            }}
          >
            <Icon name="chevron_right" size={16} />
            <Icon
              name="folder"
              style={{
                cursor: "pointer",
              }}
              size={16}
            />
          </div>
        )}
        {item.id}
      </ListItem>
    </ContextMenu>
  );
}

export const Basic: Story = {
  render: function Render() {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [items, setItems] = useState(
      JSON.parse(JSON.stringify(defaultItems)) as ITree[],
    );
    const map = new Map<
      string,
      {
        item: ITree;
        parentId?: string;
      }
    >();
    const traverse = (item: ITree, parentId?: string) => {
      map.set(item.id, {
        item,
        parentId: parentId,
      });
      item.children?.forEach((child) => traverse(child, item.id));
    };
    items.forEach((item) => traverse(item));

    function handleOrderChange(
      src: string,
      dist: string,
      type: OrderType | null,
    ) {
      const srcItem = map.get(src);
      const distItem = map.get(dist);
      if (!srcItem || !distItem) throw new Error("item not found");

      const srcParent = map.get(srcItem.parentId ?? "")?.item;
      const distParent = map.get(distItem.parentId ?? "")?.item;

      if (inChildren(srcItem.item, distItem.item.id)) return;
      if (type === OrderType.Before) {
        if (distParent === undefined) {
          if (srcParent) {
            const srcIndex = srcParent.children?.indexOf(srcItem.item);
            if (srcIndex === undefined) throw new Error("index not found");
            srcParent.children?.splice(srcIndex, 1);
            setItems([srcItem.item, ...items]);
          } else {
            const srcIndex = items.indexOf(srcItem.item);
            const newItems = items.filter((_, index) => index !== srcIndex);
            newItems.unshift(srcItem.item);
            setItems(newItems);
          }
        } else {
          const distIndex = distParent.children?.indexOf(distItem.item);
          if (distIndex === undefined) throw new Error("index not found");

          const srcIndex = srcParent?.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (srcParent === undefined)
            throw new Error("srcParent is undefined");

          srcParent.children?.splice(srcIndex, 1);
          distParent.children?.splice(distIndex, 0, srcItem.item);
          setItems([...items]);
        }
      } else if (type === OrderType.After) {
        if (distParent === undefined) {
          if (srcParent) {
            const srcIndex = srcParent.children?.indexOf(srcItem.item);
            if (srcIndex === undefined) throw new Error("index not found");
            srcParent.children?.splice(srcIndex, 1);
            setItems([...items, srcItem.item]);
          } else {
            const srcIndex = items.indexOf(srcItem.item);
            const newItems = items.filter((_, index) => index !== srcIndex);
            newItems.push(srcItem.item);
            setItems(newItems);
          }
        } else {
          const distIndex = distParent.children?.indexOf(distItem.item);
          if (distIndex === undefined) throw new Error("index not found");
          const srcIndex = srcParent?.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");
          if (srcParent === undefined)
            throw new Error("srcParent is undefined");
          srcParent.children?.splice(srcIndex, 1);
          distParent.children?.splice(distIndex + 1, 0, srcItem.item);
          setItems([...items]);
        }
      } else if (type === OrderType.Child) {
        if (srcParent) {
          const srcIndex = srcParent.children?.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");

          if (!distItem.item.children) {
            return;
          }
          srcParent.children?.splice(srcIndex, 1);
          distItem.item.children?.push(srcItem.item);
          setItems([...items]);
        } else {
          const srcIndex = items.indexOf(srcItem.item);
          if (srcIndex === undefined) throw new Error("index not found");

          if (!distItem.item.children) {
            return;
          }
          const newItems = items.filter((_, index) => index !== srcIndex);
          distItem.item.children?.push(srcItem.item);
          setItems(newItems);
        }
      }
    }

    return (
      <ContextMenu
        content={
          <>
            <ContextMenuItem
              onClick={() => {
                const newItem = {
                  id: randomId(),
                };
                setItems([...items, newItem]);
              }}
            >
              New File
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => {
                const newItem = {
                  id: randomId(),
                  children: [],
                };
                setItems([...items, newItem]);
              }}
            >
              New Folder
            </ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            height: 256,
            width: 256,
            overflow: "auto",
          }}
        >
          <TreeView<Item>
            items={items}
            shadowRender={(props) => {
              if (selectedIds.length > 1) {
                const item = map.get(selectedIds[0])?.item;
                return (
                  <div>
                    {item?.id} + {selectedIds.length - 1} more
                  </div>
                );
              }
              const item = map.get(props.item.id)?.item;
              return <div>{item?.id}</div>;
            }}
            render={(props) => (
              <RenderItem
                {...props}
                selected={selectedIds.includes(props.item.id)}
                onOpenContext={(open) => {
                  if (open) {
                    setSelectedIds([props.item.id]);
                  }
                }}
                onClick={(e) => {
                  if (e.metaKey) {
                    setSelectedIds([...selectedIds, props.item.id]);
                    return;
                  }
                  setSelectedIds([props.item.id]);
                }}
                items={items}
                setItems={setItems}
                map={map}
              />
            )}
            onOrderChange={(src, dist, type) => {
              if (selectedIds.length === 1) {
                handleOrderChange(src, dist, type);
                return;
              }
              for (const id of selectedIds) {
                handleOrderChange(id, dist, type);
              }
            }}
          />
        </div>
      </ContextMenu>
    );
  },
};
