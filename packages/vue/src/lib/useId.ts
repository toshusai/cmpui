let id = 0;

export function useId() {
  id += 1;
  return `id-${id}`;
}
