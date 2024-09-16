import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  hsvaToRgba,
  hexToHsv,
  hsvToHex,
  isValidHex6,
  rgbToCss,
  HSVA,
  clamp,
} from "@toshusai/cmpui-core";

import { ColorPickerCircle } from "../ColorPickerCircle";
import { SliderNumberField } from "../SliderNumberField";
import { TextInput } from "../TextInput";
import { MemoPopover } from "../Popover";

import "./index.css";

export type ColorInputProps = {
  value: HSVA;
  label?: string;
  onChange?: (value: HSVA) => void;
  onStart?: () => void;
  onEnd?: () => void;
};

const ColorView = forwardRef(function ColorView(
  props: {
    onClick?: () => void;
    value: HSVA;
  },
  ref: ForwardedRef<HTMLDivElement>,
) {
  const rgba = hsvaToRgba(props.value);
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        props.onClick?.();
      }
    },
    [props.onClick],
  );
  return (
    <div
      ref={ref}
      className="alpha-checker-board"
      style={
        {
          "--cmpui-block-size": "4px",
          margin: "0 4px 0 8px",
        } as React.CSSProperties
      }
    >
      <div
        onClick={props.onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="cmpui_color-input__color"
        style={{
          backgroundColor: rgbToCss(rgba),
          maskImage: `linear-gradient(to right, rgba(0,0,0,${props.value.a}) 50%, black 50%)`,
        }}
      />
    </div>
  );
});

export function ColorInput(props: ColorInputProps) {
  const [prevValue, setPrevValue] = useState<string>(hsvToHex(props.value));
  const [isFocused, setIsFocused] = useState<HSVA | null>(null);

  const [open, setOpen] = useState(false);

  const handleChangeHsva = useCallback(
    (hsva: HSVA) => {
      const _a = hsva.a === undefined ? props.value.a : hsva.a;
      props.onChange?.({
        ...hsva,
        a: _a,
      });
      setPrevValue(
        hsvToHex({
          ...hsva,
          a: _a,
        }),
      );
    },
    [props.onChange, props.value.a],
  );

  const handleChangeAlpha = useCallback(
    (a: number[]) => {
      props.onChange?.({ ...props.value, a: a[0] / 100 });
    },
    [props.onChange, props.value],
  );

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length > 7) return;
      if (isValidHex6(value)) {
        props.onChange?.(hexToHsv(value));
      }
      setPrevValue(value);
    },
    [props.onChange],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isValidHex6(e.target.value)) {
        props.onChange?.(isFocused || props.value);
        setPrevValue(hsvToHex(isFocused || props.value));
      } else {
        props.onChange?.({ ...hexToHsv(e.target.value), a: props.value.a });
        setPrevValue(e.target.value);
      }
      setIsFocused(null);
    },
    [isFocused, props.onChange, props.value.a, props.value],
  );

  const viewRef = useRef<HTMLDivElement>(null);

  const memoColorPickerCircle = useMemo(
    () => (
      <ColorPickerCircle
        onChange={handleChangeHsva}
        onStart={props.onStart}
        onEnd={props.onEnd}
        hue={props.value.h}
        saturation={props.value.s}
        value={props.value.v}
        alpha={props.value.a}
      />
    ),
    [handleChangeHsva, props.onStart, props.onEnd],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="cmpui_color-input__root">
      <TextInput
        label={props.label}
        prefix={
          <>
            <MemoPopover
              isOpen={open}
              onClose={handleClose}
              trigger={viewRef}
              placement="bottom-start"
              disabledTabClose
              focusTrap
              autoResize
            >
              {memoColorPickerCircle}
            </MemoPopover>

            <ColorView
              ref={viewRef}
              onClick={() => setOpen((prev) => !prev)}
              value={props.value}
            />
          </>
        }
        onFocus={() => setIsFocused(props.value)}
        value={isFocused ? prevValue : hsvToHex(props.value)}
        onChange={handleChangeInput}
        onBlur={handleBlur}
      />
      <SliderNumberField
        label="%"
        value={[props.value.a * 100]}
        onChangeValue={handleChangeAlpha}
        numToString={(value) => `${clamp(value, 0, 100).toFixed(0)}`}
        onStart={props.onStart}
        onEnd={props.onEnd}
      />
    </div>
  );
}
