import React from "react";

export type CustomJSXElement =
  | keyof JSX.IntrinsicElements
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  | React.JSXElementConstructor<any>;
