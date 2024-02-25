export type MoveCommand = {
  type: "move";
  x: number;
  y: number;
};

export type CubicCommand = {
  type: "cubic";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x: number;
  y: number;
};

export type LineCommand = {
  type: "line";
  x: number;
  y: number;
};

export type QuadraticCommand = {
  type: "quadratic";
  x1: number;
  y1: number;
  x: number;
  y: number;
};

export type Command =
  | MoveCommand
  | CubicCommand
  | LineCommand
  | QuadraticCommand;
