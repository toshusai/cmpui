import React, { ForwardedRef, forwardRef } from "react";
import { CustomJSXElement } from "../../types/CustomJSXElement";
import { classNames } from "../../utils/classNames";

import "./index.css";

export type ListItemProps<T extends CustomJSXElement = "li"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  selected?: boolean;
  size?: "S" | "M";
} & React.ComponentProps<T>;

export const ListItem = forwardRef(function ListItem<
  T extends CustomJSXElement,
>(
  {
    as: Component = "li",
    children,
    className,
    rounded,
    size = "M",
    ...props
  }: ListItemProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <Component
      className={classNames("cmpui_list-item__root", className)}
      ref={ref}
      aria-selected={props.selected}
      data-size={size}
      data-rounded={rounded}
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends CustomJSXElement = "li">(p: ListItemProps<T>) => JSX.Element;

export const List = forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul"> & {
    as?: React.ElementType;
  }
>(({ className, children, as: Component = "ul", ...props }, ref) => {
  return (
    <Component
      className={classNames("cmpui_list-list__root", className)}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});
