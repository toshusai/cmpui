export const IconButtonSize = {
  S: "S",
  M: "M",
} as const;

export type IconButtonSize =
  (typeof IconButtonSize)[keyof typeof IconButtonSize];

export type IconButtonProps = {
  bordered?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  selected?: boolean;
  size?: IconButtonSize;
};
