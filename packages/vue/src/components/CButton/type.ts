export const CButtonVariant = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type CButtonVariant =
  (typeof CButtonVariant)[keyof typeof CButtonVariant];

export const CButtonSize = {
  S: "S",
  M: "M",
  L: "L",
} as const;

export type CButtonSize = (typeof CButtonSize)[keyof typeof CButtonSize];

export type CButtonProps = {
  variant?: CButtonVariant;
  size?: CButtonSize;
  disabled?: boolean;
};
