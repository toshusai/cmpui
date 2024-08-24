import { hsvToRgb } from "../../../utils/colors/hsvToRgb";

export function drawSV(ctx: CanvasRenderingContext2D, hue: number) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const index = (i * width + j) * 4;
      const { r, g, b } = hsvToRgb({ h: hue, s: j / height, v: 1 - i / width });
      data[index] = r;
      data[index + 1] = g;
      data[index + 2] = b;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}
