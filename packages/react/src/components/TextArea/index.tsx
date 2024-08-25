import { forwardRef, useRef } from "react";

import { mergeRefs } from "../..";
import { classNames } from "../../utils/classNames";
import { useNativeOnChange } from "../../utils/interactions/useNativeOnChange";

import "./index.css";

export type TextAreaProps = {
  label?: React.ReactNode;
  onNativeChange?: (e: Event) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, onNativeChange, ...props }, fRef) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    useNativeOnChange(ref, onNativeChange);
    return (
      <div
        className={classNames("cmpui_textarea__root", className)}
        aria-disabled={props.disabled}
      >
        {typeof label === "string" ? (
          <label className="cmpui_textarea__label" htmlFor={props.id}>
            {label}
          </label>
        ) : (
          label
        )}
        <textarea
          {...props}
          className="cmpui_textarea__textarea"
          ref={mergeRefs(ref, fRef)}
        />
      </div>
    );
  },
);
