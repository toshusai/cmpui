import { ITree } from "../../../types";

export function inChildren(item: ITree, id: string): boolean {
  if (item.id === id) return true;
  if (item.children) {
    for (const child of item.children) {
      if (inChildren(child, id)) return true;
    }
  }
  return false;
}
