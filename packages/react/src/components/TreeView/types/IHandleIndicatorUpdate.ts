import { ITree } from "../../../types";

import { OrderType } from "./OrderType";

export type IHandleIndicatorUpdate = (
  e: React.PointerEvent<HTMLLIElement>,
  srcItem: ITree,
  distItem: ITree,
) => OrderType | null;
