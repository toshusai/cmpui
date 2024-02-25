export function createKeyDownUpHandler(
  key: string,
  {
    onDown,
    onUp,
  }: {
    onDown?: (e: KeyboardEvent) => void;
    onUp?: (e: KeyboardEvent) => void;
  },
) {
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== key) return;
    onUp?.(e);
    window.removeEventListener("keyup", handleKeyUp);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== key) return;
    onDown?.(e.nativeEvent);
    window.addEventListener("keyup", handleKeyUp);
  };

  return handleKeyDown;
}
