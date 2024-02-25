import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { ITree } from "../../types";
import { DragContext } from "./lib/DragContext";
import { TreeContext } from "./lib/TreeContext";
import { defaultIndicatorUpdate } from "./lib/defaultIndicatorUpdate";
import { useOverlayDragHandler } from "./lib/useOverlayDragHandler";
import { IHandleIndicatorUpdate } from "./types/IHandleIndicatorUpdate";
import { OrderType } from "./types/OrderType";
import { RenderProps } from "./types/RenderProps";

type OnUpdateIndicator = (
  el: HTMLLIElement,
  type: OrderType | null,
  depth: number,
) => void;

type TreeViewItemProps<T extends ITree> = {
  depth?: number;
  isSelected: boolean;
  item: T;
  onItemSelect: (item: T) => void;
  onOrderChange?: (src: string, dist: string, type: OrderType | null) => void;
  onUpdateIndicator?: OnUpdateIndicator;
  render: (props: RenderProps<T>) => React.ReactNode;
  shadowRender?: (props: RenderProps<T>) => React.ReactNode;
  updateIndicator?: IHandleIndicatorUpdate;
};

export function TreeViewItem<T extends ITree>({
  depth = 0,
  updateIndicator = defaultIndicatorUpdate,
  ...props
}: TreeViewItemProps<T>) {
  const Render = props.render;
  const { treeId, setIsDragging } = useContext(DragContext);
  const ref = useRef<HTMLLIElement>(null);
  const { map } = useContext(TreeContext);
  const [isExpanded, setIsExpanded] = useState(true);

  const { handlePointerDown, shadow } = useOverlayDragHandler(
    () => {
      setIsDragging(props.item.id);
    },
    () => {},
    props.shadowRender?.({
      item: props.item,
      depth,
      open: false,
      onOpenChange: () => {},
    }),
  );

  const pointerUp = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      if (!treeId) return;
      const srcItem = map.get(treeId);
      if (!srcItem) return;
      const orderType = updateIndicator(e, srcItem.item, props.item);

      props.onOrderChange?.(treeId, props.item.id, orderType);
      setIsDragging(null);
      if (!ref.current) return;
      props.onUpdateIndicator?.(ref.current, null, depth);
    },
    [
      depth,
      map,
      props.item,
      props.onOrderChange,
      props.onUpdateIndicator,
      setIsDragging,
      treeId,
      updateIndicator,
    ],
  );

  const pointerMove = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      console.log("pointerMove");
      if (!treeId) return;
      const srcItem = map.get(treeId);
      if (!srcItem) return;
      const orderType = defaultIndicatorUpdate(e, srcItem.item, props.item);
      if (!ref.current) return;
      props.onUpdateIndicator?.(ref.current, orderType, depth);
    },
    [depth, map, props.item, props.onUpdateIndicator, treeId],
  );

  const handleClick = useMemo(() => {
    return () => {
      props.onItemSelect(props.item);
    };
  }, [props.onItemSelect, props.item]);

  return (
    <>
      <li
        onPointerUp={pointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={pointerMove}
        ref={ref}
        className="cmpui_tree-view__item"
        onClick={handleClick}
      >
        <Render
          item={props.item}
          onOpenChange={setIsExpanded}
          open={isExpanded}
          depth={depth}
        />
        {shadow}
      </li>
      {props.item.children && isExpanded && (
        <li className="cmpui_tree-view__item-dir">
          <ol className="cmpui_tree-view__item-dir-ol">
            {props.item.children.map((item) => (
              <TreeViewItem
                updateIndicator={updateIndicator}
                render={props.render}
                shadowRender={props.shadowRender}
                onOrderChange={props.onOrderChange}
                onUpdateIndicator={props.onUpdateIndicator}
                depth={depth + 1}
                key={item.id}
                item={item as T}
                isSelected={props.isSelected}
                onItemSelect={props.onItemSelect}
              />
            ))}
          </ol>
        </li>
      )}
    </>
  );
}
