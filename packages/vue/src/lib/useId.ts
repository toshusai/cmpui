let id = 0;

export function useId(defaultId?: string) {
  if (defaultId) return defaultId;
  id += 1;
  return `id-${id}`;
}
