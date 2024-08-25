import { forwardRef, memo, useRef } from "react";

import { mergeRefs } from "../..";
import { classNames } from "../../utils/classNames";
import { useNativeOnChange } from "../../utils/interactions/useNativeOnChange";

import "./index.css";

export type TextInputProps = {
  htmlPrefix?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string;
  onNativeChange?: (e: Event) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">;

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
    {
      className,
      htmlPrefix,
      invalid,
      label,
      placeholder,
      prefix,
      suffix,
      value,
      onNativeChange,
      ...props
    },
    fRef,
  ) {
    const ref = useRef<HTMLInputElement>(null);
    useNativeOnChange(ref, onNativeChange);
    return (
      <div
        className={classNames("cmpui_text-input__root", className)}
        aria-disabled={props.disabled}
        aria-invalid={invalid}
      >
        {prefix}
        {typeof label === "string" ? (
          <label className="cmpui_text-input__label" htmlFor={props.id}>
            {label}
          </label>
        ) : (
          label
        )}
        <input
          ref={mergeRefs(ref, fRef)}
          type="text"
          className="cmpui_text-input__input"
          value={value ?? ""}
          placeholder={placeholder ?? ""}
          prefix={htmlPrefix}
          aria-invalid={invalid}
          {...props}
        />
        {suffix}
      </div>
    );
  }),
);
