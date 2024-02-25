import { createContext } from "react";

export const DragContext = createContext<{
  treeId: string | null;
  setIsDragging: (id: string | null) => void;
}>({
  treeId: null,
  setIsDragging: () => {},
});
