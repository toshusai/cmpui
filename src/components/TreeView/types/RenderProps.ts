import { ITree } from "../../../types";

export type RenderProps<T extends ITree> = {
  depth: number;
  item: T;
  onOpenChange: (isOpen: boolean) => void;
  open: boolean;
};
