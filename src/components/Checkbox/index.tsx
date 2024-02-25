import { useCallback } from "react";
import { CheckSVG } from "./CheckSVG";

import "./index.css";

export type CheckboxProps = {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
};

export function Checkbox(props: CheckboxProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e.target.checked);
    },
    [props.onChange],
  );
  return (
    <div className="cmpui_checkbox__root" aria-disabled={props.disabled}>
      <div className="cmpui_checkbox__box">
        <input
          type="checkbox"
          className="cmpui_checkbox__input"
          id={props.id}
          disabled={props.disabled}
          checked={props.checked}
          onChange={handleChange}
        />
        <div className="cmpui_checkbox__indicator" data-checked={props.checked}>
          <CheckSVG />
        </div>
      </div>
      {props.label && (
        <label className="cmpui_checkbox__label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
    </div>
  );
}
