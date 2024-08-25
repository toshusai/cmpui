import { forwardRef, memo, useCallback, useMemo, useState } from "react";

import { classNames } from "../..";
import { TextInput } from "../TextInput";
import { createWindowDragHandler } from "../TreeView/lib/createWindowDragHandler";

import { parseCursorStyle } from "./lib/parseCursorStyle";
import { inputEval } from "./lib/inputEval";

import "./index.css";

export type SliderNumberField = {
  label: string;
  step?: number;
  value?: number[];
  onChangeValue?: (value: number[]) => void;
  numToString?: (value: number) => string;
  evalFunc?: (str: string, mixed?: number) => number;
  suffix?: React.ReactNode;
  onStart?: () => void;
  onEnd?: () => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value">;

export const SliderNumberField = memo(
  forwardRef<HTMLInputElement, SliderNumberField>(function SliderNumberField(
    {
      label,
      value,
      step = 1,
      suffix,
      className,
      numToString = (value) => value.toString(),
      onChangeValue,
      evalFunc = inputEval,
      onStart,
      onEnd,
      ...props
    },
    ref,
  ) {
    const isMixed =
      Array.isArray(value) &&
      value.reduce((acc, v) => {
        return acc || v !== value[0];
      }, false);

    const [_value, set_value] = useState<string>(
      isMixed ? "mixed" : typeof value === "number" ? numToString(value) : "",
    );

    const [isFocused, setIsFocused] = useState(false);

    const down = useMemo(
      () =>
        createWindowDragHandler<
          | {
              startValue: number | number[];
              startX?: number;
              el?: HTMLImageElement;
              input?: HTMLInputElement;
            }
          | undefined,
          | {
              value?: number | number[];
            }
          | undefined
        >({
          onDown: (e) => {
            if (isFocused && e.currentTarget instanceof HTMLInputElement)
              return;
            document.body.requestPointerLock();

            const el = document.createElement("img");
            el.style.position = "fixed";
            document.body.appendChild(el);

            if (e.currentTarget instanceof HTMLElement) {
              const cursor = getComputedStyle(e.currentTarget).cursor;
              const result = parseCursorStyle(cursor);
              if (result) {
                el.src = result.src;
                // 0.5 for visual adjustment
                el.style.left = `${e.clientX - Number(result.x) - 0.5}px`;
                el.style.top = `${e.clientY - Number(result.y) - 0.5}px`;
                document.body.appendChild(el);
              }
            }

            onStart?.();
            return {
              startValue: value ?? 0,
              startX: e.clientX,
              el,
              input: e.currentTarget as HTMLInputElement,
            };
          },
          onMove: (e, ctx, prev) => {
            if (!ctx) return;
            const diff = e.movementX;
            const diffY = e.movementY;
            const el = ctx.el;
            if (!el) return;
            const left = Number(el.style.left.replace("px", ""));
            const offset = 12;
            if (left + diff < -offset) {
              el.style.left = `${window.innerWidth + diff - offset}px`;
            } else if (left + diff > window.innerWidth - offset) {
              el.style.left = `${diff - offset}px`;
            } else {
              el.style.left = `${left + diff}px`;
            }

            const top = Number(el.style.top.replace("px", ""));
            if (top + diffY < -offset) {
              el.style.top = `${window.innerHeight + diffY - offset}px`;
            } else if (top + diffY > window.innerHeight - offset) {
              el.style.top = `${diffY - offset}px`;
            } else {
              el.style.top = `${top + diffY}px`;
            }

            if (value !== undefined) {
              let v: number[] = value;
              if (prev?.value !== undefined && Array.isArray(prev.value)) {
                v = prev.value;
              }
              const newValues = v.map((value) => {
                return value + Math.round(diff) * step;
              });
              onChangeValue?.(newValues);
              return {
                value: newValues,
              };
            }
          },
          onUp: (_, ctx) => {
            if (!ctx) return;
            ctx.el?.remove();
            document.exitPointerLock();
            onEnd?.();
          },
        }),
      [isFocused, onChangeValue, onStart, onEnd, step, value],
    );

    const handleCommit = useCallback(
      (rawValue: string) => {
        if (value !== undefined) {
          const newValues = value.map((value) => {
            return evalFunc(rawValue, value);
          });
          if (newValues.some((value) => Number.isNaN(value))) return value;
          onChangeValue?.(newValues);
          return newValues;
        }
      },
      [evalFunc, onChangeValue, value],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        handleCommit(e.currentTarget.value);
        setIsFocused(false);
      },
      [handleCommit],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.currentTarget.value;
        set_value(rawValue);
      },
      [],
    );

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.currentTarget.select();
      },
      [],
    );

    const getValue = useMemo(() => {
      if (isFocused) {
        return _value;
      }
      if (isMixed) {
        return "mixed";
      }
      if (value === undefined) {
        return "";
      }
      if (typeof value === "number") {
        return numToString(value);
      }
      return numToString(value[0]);
    }, [_value, isFocused, isMixed, numToString, value]);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.select();
        set_value(getValue);
        setIsFocused(true);
      },
      [getValue],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          const newValues = handleCommit(e.currentTarget.value);
          if (newValues === undefined) {
            return;
          }
          if (typeof newValues === "number") {
            set_value(newValues ? numToString(newValues) : "");
          } else {
            const isMixed = newValues.reduce((acc, value) => {
              return acc || value !== newValues[0];
            }, false);
            if (isMixed) {
              set_value("mixed");
            } else {
              set_value(numToString(newValues[0]));
            }
          }
        } else if (e.key === "Escape") {
          set_value(getValue);
        } else if (e.key === "ArrowUp") {
          if (value === undefined) {
            return;
          }

          const isMixed = value.reduce((acc, v) => {
            return acc || v !== value[0];
          }, false);
          if (isMixed) {
            onChangeValue?.(value.map((value) => value + step));
          } else {
            set_value(numToString(value[0] + step));
          }
          e.preventDefault();
        } else if (e.key === "ArrowDown") {
          if (value === undefined) {
            return;
          }

          const isMixed = value.reduce((acc, v) => {
            return acc || v !== value[0];
          }, false);
          if (isMixed) {
            onChangeValue?.(value.map((value) => value - step));
          } else {
            set_value(numToString(value[0] - step));
          }
          e.preventDefault();
        }
      },
      [getValue, handleCommit, numToString, onChangeValue, step, value],
    );

    return (
      <TextInput
        {...props}
        ref={ref}
        className={classNames("cmpui_slider-number-input__root", className)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
        value={getValue}
        prefix={suffix}
        label={
          <label
            onPointerDown={down}
            className="cmpui_text-input__label cmpui_slider-number-input__label"
          >
            {label}
          </label>
        }
      />
    );
  }),
);
