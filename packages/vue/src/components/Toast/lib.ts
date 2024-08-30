import { Static, Transition, VNode } from "vue";

export function isValidVNode(node: VNode): node is VNode {
  switch (node.type) {
    case Comment:
      return false;
    case Static:
      return false;
    case Transition:
      return false;
    default:
      return true;
  }
}

export const TOAST_PROVIDER_KEY = Symbol("toast-provider");
