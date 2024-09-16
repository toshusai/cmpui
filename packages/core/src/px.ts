export function px(value: number | undefined) {
  return value === undefined ? value : `${value}px`;
}
