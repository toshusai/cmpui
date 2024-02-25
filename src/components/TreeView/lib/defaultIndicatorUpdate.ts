import { ITree } from "../../../types";
import { OrderType } from "../types/OrderType";
import { inChildren } from "./inChildren";

export function defaultIndicatorUpdate(
  e: React.PointerEvent<HTMLLIElement>,
  srcItem: ITree,
  distItem: ITree,
): OrderType | null {
  const el = e.currentTarget;
  if (!(el instanceof HTMLElement)) return null;
  const rect = el.getBoundingClientRect();
  const y = e.clientY - rect.top;

  const orderType =
    y < rect.height / 3
      ? OrderType.Before
      : y > (rect.height * 2) / 3
        ? OrderType.After
        : OrderType.Child;

  if (inChildren(srcItem, distItem.id)) {
    return null;
  }

  if (distItem.children === undefined && orderType === OrderType.Child) {
    return null;
  }

  return orderType;
}
