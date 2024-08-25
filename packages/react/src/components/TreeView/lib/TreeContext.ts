import { createContext } from "react";

import { ITree } from "../../../types";

export const TreeContext = createContext<{
  map: Map<string, { item: ITree; parentId?: string }>;
}>({
  map: new Map(),
});
