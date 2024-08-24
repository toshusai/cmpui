import { forwardRef } from "react";
import { CustomJSXElement } from "../../types/CustomJSXElement";
import { classNames } from "../../utils/classNames";

export type ButtonProps<T extends CustomJSXElement = "button"> = {
  as?: T;
  size?: "S" | "M";
  variant?: "primary" | "secondary";
} & Omit<React.ComponentProps<T>, "as">;

export const Button = forwardRef(function Button<T extends CustomJSXElement>(
  {
    variant = "primary",
    size = "M",
    children,
    className,
    as,
    ...props
  }: ButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const Component = as || "button";
  return (
    <Component
      ref={ref}
      type="button"
      className={classNames("cmpui_button", className)}
      {...props}
      data-variant={variant}
      data-size={size}
    >
      {children}
    </Component>
  );
}) as <T extends CustomJSXElement = "button">(p: ButtonProps<T>) => JSX.Element;
