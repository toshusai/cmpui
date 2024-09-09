import { nextTick } from "vue";

export function asyncNextTick() {
  return new Promise<void>((resolve) => nextTick(resolve));
}
