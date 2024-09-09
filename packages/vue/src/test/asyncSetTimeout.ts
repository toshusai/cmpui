export function asyncSetTimeout(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
