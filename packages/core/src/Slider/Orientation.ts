export const Orientation = {
  Horizontal: "horizontal",
  Vertical: "vertical",
} as const;

export type Orientation = (typeof Orientation)[keyof typeof Orientation];

export const Direction = {
  LTR: "ltr",
  RTL: "rtl",
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];
