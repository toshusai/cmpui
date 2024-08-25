import * as RadixSelect from "@radix-ui/react-select";

import { classNames } from "../..";
import { FloatBox } from "../FloatBox";

import "./index.css";

export type SelectProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
};

export function Select(props: SelectProps) {
  return (
    <RadixSelect.Root
      value={props.value}
      onValueChange={props.onChange}
      disabled={props.disabled}
    >
      <RadixSelect.Trigger
        className={classNames("cmpui_select__root", props.className)}
      >
        <RadixSelect.Value />
        <RadixSelect.Icon asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            fill="currentColor"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </RadixSelect.Icon>
        <label className="cmpui_select__label">{props.label}</label>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content asChild>
          <FloatBox
            style={{
              width: 200,
            }}
          >
            <RadixSelect.Viewport
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {props.children}
            </RadixSelect.Viewport>
          </FloatBox>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
