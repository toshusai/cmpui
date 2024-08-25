export const ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonSize = {
  S: "S",
  M: "M",
  L: "L",
} as const;

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
};
