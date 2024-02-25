type Result = {
  width: number;
  height: number;
};

export function resizeWithAspectRatio(
  newWidth: number,
  newHeight: number,
  startRatio: number,
): Result {
  const newHeightAbs = Math.abs(newHeight);
  const newWidthAbs = Math.abs(newWidth);

  const newRatio = Math.abs(newHeightAbs / newWidthAbs);
  if (newRatio > startRatio) {
    const proWidth = newHeightAbs / startRatio;
    return {
      width: proWidth * Math.sign(newWidth),
      height: newHeightAbs * Math.sign(newHeight),
    };
  }
  const proHeight = newWidthAbs * startRatio;

  return {
    width: newWidthAbs * Math.sign(newWidth),
    height: proHeight * Math.sign(newHeight),
  };
}
