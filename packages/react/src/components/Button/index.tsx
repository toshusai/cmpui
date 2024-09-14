import {
  CButtonProps,
  CButtonSize,
  KeyboardKey,
} from "@toshusai/cmpui-core";
import { forwardRef } from "react";

import { CustomJSXElement } from "../../types/CustomJSXElement";
import { classNames } from "../../utils/classNames";

export type ButtonProps<T extends CustomJSXElement = "button"> =
  CButtonProps & {
    as?: T;
  } & Omit<React.ComponentProps<T>, keyof CButtonProps | "as">;

export const Button = forwardRef(function Button<T extends CustomJSXElement>(
  {
    variant = CButtonVariant.primary,
    size = CButtonSize.M,
    bordered = false,
    disabled = false,
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
      className={classNames("cmpui_button", className)}
      data-bordered={bordered}
      data-size={size}
      data-variant={variant}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends CustomJSXElement = "button">(p: ButtonProps<T>) => JSX.Element;
