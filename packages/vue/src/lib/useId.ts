import { inject, provide } from "vue";

let id = 0;

function defaultGenId() {
  id += 1;
  return `id-${id}`;
}

export function useId(defaultId?: string) {
  if (defaultId) return defaultId;
  const genId = inject("cmpui_use_id", defaultGenId);
  return genId();
}

export function provideUseId() {
  provide("cmpui_use_id", useId);
}
