import { useCallback } from "react";

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
      <input
        type="checkbox"
        className="cmpui_checkbox__input"
        id={props.id}
        disabled={props.disabled}
        checked={props.checked}
        onChange={handleChange}
      />
      {props.label && (
        <label className="cmpui_checkbox__label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
    </div>
  );
}
