import { useMemo } from "react";
import { HSVA, hsvaToRgba } from "@toshusai/cmpui-core";
import { hsvToRgb } from "@toshusai/cmpui-core";
import { rgbToCss } from "@toshusai/cmpui-core";

import { ColorSlider } from "../ColorSlider";
import { SVPicker } from "../SVPicker";

import "./index.css";

export type ColorPickerRectProps = {
  alpha?: number;
  hue: number;
  saturation: number;
  size?: number;
  value: number;
  onChange: (hsva: HSVA) => void;
  onStart?: () => void;
  onEnd?: () => void;
};

export function ColorPickerRect({
  alpha,
  hue,
  onChange,
  saturation,
  size,
  value,
}: ColorPickerRectProps) {
  const hsv = useMemo(
    () => ({ h: hue, s: saturation, v: value }),
    [hue, saturation, value],
  );

  const hueColor = useMemo(
    () => ({
      ...hsvToRgb({
        h: hue,
        s: 1,
        v: 1,
      }),
      a: 1,
    }),
    [hue],
  );

  const hsva = useMemo(() => ({ ...hsv, a: alpha ?? 1 }), [hsv, alpha]);
  const rgba = useMemo(() => hsvaToRgba(hsva), [hsva]);

  return (
    <div className="cmpui_color-picker-rect__root">
      <SVPicker
        hue={hue}
        onChange={(h, v) =>
          onChange({
            h,
            s: saturation,
            v,
            a: alpha ?? 1,
          })
        }
        saturation={saturation}
        value={value}
        width={size}
        height={size}
      />
      <ColorSlider
        color={hueColor}
        value={hue / 360}
        onChange={(v) => {
          onChange({
            h: v * 360,
            s: saturation,
            v: value,
            a: alpha ?? 1,
          });
        }}
        bg={
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
            }}
          />
        }
      />
      {alpha !== undefined && (
        <ColorSlider
          color={rgba}
          value={alpha}
          onChange={(a) => {
            onChange({
              h: hue,
              s: saturation,
              v: value,
              a,
            });
          }}
          bg={
            <>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: rgbToCss(hsvToRgb(hsv)),
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 100%)",
                }}
              />
            </>
          }
        />
      )}
    </div>
  );
}
