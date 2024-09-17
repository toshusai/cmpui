import { Orientation } from "./Orientation";

export function createSliderStyles(
  value: number,
  min: number,
  max: number,
  orientation: Orientation,
  direction: "ltr" | "rtl"
) {
  const length = max - min;
  const directionValue = direction === "rtl" ? max - value : value;
  const leftRatio = ((directionValue - min) / length) * 100;

  const rangeStyle = {
    width:
      orientation === Orientation.Vertical
        ? "100%"
        : `${direction === "rtl" ? 100 - leftRatio : leftRatio}%`,
    height:
      orientation === Orientation.Vertical
        ? `${direction === "rtl" ? 100 - leftRatio : leftRatio}%`
        : "100%",
    top:
      orientation === Orientation.Vertical && direction === "rtl"
        ? `${leftRatio}%`
        : "",
  };

  const nobStyle = {
    left:
      orientation === Orientation.Vertical ? "" : `calc(${leftRatio}% - 8px)`,
    top:
      orientation === Orientation.Vertical ? `calc(${leftRatio}% - 8px)` : "",
  };

  return {
    rangeStyle,
    nobStyle,
  };
}
