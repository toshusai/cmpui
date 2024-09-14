export const KeyboardKey = {
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
} as const;

export type KeyboardKey = (typeof KeyboardKey)[keyof typeof KeyboardKey];
