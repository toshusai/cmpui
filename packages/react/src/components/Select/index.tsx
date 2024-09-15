import React, { useId, useMemo, useRef } from "react";

import { Popover } from "../Popover";
import { MenuList } from "../MenuList/MenuList";
import { MenuListItem } from "../MenuList/MenuListItem";
import { classNames } from "../../utils";

export type SelectProps = {
  children?: React.ReactNode;

  value: string;

  onChange?: (v: string) => void;

  options: {
    label: string | React.ReactNode;
    value: string;
  }[];

  label?: string;

  className?: string;
};

export function Select(props: SelectProps) {
  const preview = useMemo(() => {
    return props.options.find((option) => option.value === props.value)?.label;
  }, [props.value, props.options]);

  const id = useId();

  const labelId = useId();

  const triggerRef = useRef<HTMLButtonElement>(null);

  const [show, setShow] = React.useState(false);

  const enablePointerUpSelect = useRef(false);
  const handlePointerDown = () => {
    // if (props.disabled) return;
    const firstState = show;
    setShow(true);

    enablePointerUpSelect.current = false;
    let distance = 0;
    const pointerMove = (e: PointerEvent) => {
      distance += Math.abs(e.movementX) + Math.abs(e.movementY);
      if (distance > 10) {
        enablePointerUpSelect.current = true;
      }
    };

    const pUp = () => {
      if (firstState) {
        setShow(false);
      }
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pUp);
    };

    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pUp);
  };

  const handleSelect = (v: string) => {
    setShow(false);
    triggerRef.current?.focus();
    props.onChange?.(v);
  };

  const popupId = useId();

  return (
    <>
      <button
        className={classNames("cmpui_select__root", props.className)}
        onPointerDown={handlePointerDown}
        ref={triggerRef}
        role="combobox"
        aria-expanded={show}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-controls={popupId}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShow(!show);
          }
        }}
      >
        <div className="cmpui_select__preview">
          {typeof preview === "string" ? <span>{preview}</span> : preview}
        </div>
        {props.label && (
          <label
            v-if="label"
            id={labelId}
            className="cmpui_select__label"
            htmlFor={id}
          >
            {props.label}
          </label>
        )}
      </button>
      <Popover
        trigger={triggerRef}
        isOpen={show}
        onClose={() => setShow(false)}
        disabledTriggerClickClose
        autoResize
      >
        <MenuList
          id={popupId}
          onSelect={handleSelect}
          role="listbox"
          aria-labelledby={labelId}
          defaultValue={props.value}
        >
          {props.options.map((option) => (
            <MenuListItem
              key={option.value}
              value={option.value}
              rounded
              onPointerUp={() => {
                if (enablePointerUpSelect.current) handleSelect(option.value);
              }}
              selected={option.value === props.value}
              onClick={() => {
                handleSelect(option.value);
              }}
              onKeyDown={(e) =>
                e.key === "Tab" ? handleSelect(option.value) : null
              }
              style={{
                paddingLeft: "24px",
                position: "relative",
              }}
              role="option"
            >
              {option.value === props.value && (
                <div
                  className="cmpui_select_check-icon"
                  style={{ position: "absolute", left: "8px" }}
                ></div>
              )}
              {option.label}
            </MenuListItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
