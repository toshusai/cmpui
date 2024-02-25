import { useCallback, useMemo } from "react";
import { hsvaToRgba } from "../../utils/colors";
import { hsvToRgb } from "../../utils/colors/hsvToRgb";
import { rgbToCss } from "../../utils/colors/rgbToCss";
import { ColorPickerRectProps } from "../ColorPickerRect";
import { ColorSlider } from "../ColorSlider";
import { HueCircle } from "../HueCircle";
import { SVPicker } from "../SVPicker";

import "./index.css";

export type ColorPickerCircleProps = ColorPickerRectProps & {
  circleStrokeWidth?: number;
};

export function ColorPickerCircle({
  hue,
  saturation,
  value,
  alpha,
  onChange,
  size = 192,
  circleStrokeWidth = 24,
  onStart,
  onEnd,
}: ColorPickerCircleProps) {
  const rectSize = size - circleStrokeWidth * 2 - 12;

  const handleChangeSV = useCallback(
    (s: number, v: number) => {
      onChange({
        h: hue,
        s,
        v,
        a: alpha ?? 1,
      });
    },
    [hue, alpha, onChange],
  );

  const hsva = useMemo(
    () => ({ h: hue, s: saturation, v: value, a: alpha ?? 1 }),
    [hue, saturation, value, alpha],
  );

  const rgba = useMemo(() => hsvaToRgba(hsva), [hsva]);

  const background = useMemo(() => rgbToCss(hsvToRgb(hsva)), [hsva]);

  const bgStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      background: background,
      maskImage: "linear-gradient(to right, transparent 0%, black 100%)",
    }),
    [background],
  );

  const handleAlphaChange = useCallback(
    (a: number) => {
      onChange({
        h: hue,
        s: saturation,
        v: value,
        a,
      });
    },
    [hue, saturation, value, onChange],
  );

  const handleHueChange = useCallback(
    (h: number) => {
      onChange({
        h,
        s: saturation,
        v: value,
        a: alpha ?? 1,
      });
    },
    [saturation, value, alpha, onChange],
  );

  const svPickerSize = useMemo(
    () => Math.cos(Math.PI / 4) * rectSize,
    [rectSize],
  );

  return (
    <>
      <div className="cmpui_color-picker-circle__root">
        <div>
          <HueCircle
            strokeWidth={circleStrokeWidth}
            hue={hue}
            size={size}
            onHueChange={handleHueChange}
            onStart={onStart}
            onEnd={onEnd}
          />
          <div className="cmpui_color-picker-circle__sv-picker-parent">
            <SVPicker
              width={svPickerSize}
              height={svPickerSize}
              hue={hue}
              onChange={handleChangeSV}
              saturation={saturation}
              value={value}
              onStart={onStart}
              onEnd={onEnd}
            />
          </div>
        </div>
        {alpha !== undefined && (
          <ColorSlider
            color={rgba}
            value={alpha}
            onChange={handleAlphaChange}
            bg={<div style={bgStyle} />}
            onStart={onStart}
            onEnd={onEnd}
          />
        )}
      </div>
    </>
  );
}
