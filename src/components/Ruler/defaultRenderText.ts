export function defaultRenderText(time: number) {
  let viewTime = time.toFixed(2);
  if (viewTime.endsWith(".00")) {
    viewTime = viewTime.slice(0, -3);
  } else if (viewTime.endsWith("0")) {
    viewTime = viewTime.slice(0, -1);
  }
  if (viewTime === "-0") {
    viewTime = "0";
  }
  return viewTime;
}
