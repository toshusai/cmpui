import { useCallback } from "react";

import "./index.css";

export type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
};

export function Switch(props: SwitchProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e.target.checked);
    },
    [props.onChange],
  );
  return (
    <div className="cmpui_switch__root" aria-disabled={props.disabled}>
      <div className="cmpui_switch__box">
        <input
          className="cmpui_switch__input"
          type="checkbox"
          id={props.id}
          disabled={props.disabled}
          onChange={handleChange}
          checked={props.checked}
        />
        <div className="cmpui_switch__nob" data-checked={props.checked} />
      </div>
      {props.label && (
        <label className="cmpui_switch__label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
    </div>
  );
}
