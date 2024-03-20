import { useMemo, useRef, useState } from "react";
import { ITree } from "../../types";
import { TreeViewItem } from "./TreeViewItem";
import { DragContext } from "./lib/DragContext";
import { TreeContext } from "./lib/TreeContext";
import { IHandleIndicatorUpdate } from "./types/IHandleIndicatorUpdate";
import { OrderType } from "./types/OrderType";
import { RenderProps } from "./types/RenderProps";

import "./index.css";

export type { IHandleIndicatorUpdate } from "./types/IHandleIndicatorUpdate";
export type { RenderProps } from "./types/RenderProps";
export type { OrderType } from "./types/OrderType";

export type TreeViewProps<T extends ITree> = {
  items: T[];
  onOrderChange?: (src: string, dist: string, type: OrderType | null) => void;
  render: (props: RenderProps<T>) => React.ReactNode;
  shadowRender?: (props: RenderProps<T>) => React.ReactNode;
  updateIndicator?: IHandleIndicatorUpdate;
};

export function TreeView<T extends ITree>(props: TreeViewProps<T>) {
  const [selectedItem, setSelectedItem] = useState<ITree | null>(null);

  const [dragTreeId, setDragTreeId] = useState<string | null>(null);

  const map = useMemo(() => {
    const map = new Map<string, { item: ITree; parentId?: string }>();
    const traverse = (item: ITree, parentId?: string) => {
      map.set(item.id, { item, parentId });
      item.children?.forEach((child) => traverse(child, item.id));
    };
    props.items.forEach((item) => traverse(item));
    return map;
  }, [props.items]);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [orderType, setOrderType] = useState<OrderType | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <TreeContext.Provider value={{ map }}>
      <DragContext.Provider
        value={{
          treeId: dragTreeId,
          setIsDragging: setDragTreeId,
        }}
      >
        <div className="cmpui_tree-view__root" ref={ref}>
          <ol className="cmpui_tree-view__ol">
            {props.items.map((item) => (
              <TreeViewItem
                key={item.id}
                item={item}
                isSelected={selectedItem === item}
                onItemSelect={(item) => {
                  setSelectedItem(item);
                }}
                shadowRender={props.shadowRender}
                render={props.render}
                onOrderChange={props.onOrderChange}
                updateIndicator={props.updateIndicator}
                onUpdateIndicator={(el, type) => {
                  const rootRect = ref.current?.getBoundingClientRect();
                  if (!rootRect) return;
                  const rect = el.getBoundingClientRect();
                  const child = el.firstElementChild;
                  if (!child) return;
                  const padLeft = parseInt(getComputedStyle(child).paddingLeft);

                  setX(padLeft);
                  setWidth(rect.width - padLeft);
                  if (type === OrderType.Child) {
                    setY(rect.top - rootRect.top);
                    setHeight(rect.height);
                  } else if (type === OrderType.Before) {
                    setY(rect.top - rootRect.top);
                    setHeight(4);
                  } else {
                    setY(rect.top - rootRect.top + rect.height - 4);
                    setHeight(4);
                  }
                  setOrderType(type);
                }}
              />
            ))}
          </ol>
          {orderType !== null && (
            <div
              className="cmpui_tree-view__drag-indicator"
              data-order={orderType}
              style={{
                left: x,
                top: y,
                width: width,
                height: height,
              }}
            />
          )}
        </div>
      </DragContext.Provider>
    </TreeContext.Provider>
  );
}
