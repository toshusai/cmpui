import { hsvToRgb } from "./colors";
import { createDragHandler } from "./interactions/createDragHandler";
import { KeyboardKey } from "./interactions/KeyboardKey";
import { clamp } from "./math/clamp";

export function initSVCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });
  if (!ctx) {
    throw new Error("Failed to get 2d context");
  }
  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "low";
  return ctx;
}

export function createSVPickerNobPointerDownHandler(props: {
  onChange: (s: number, v: number) => void;
  width: number;
  height: number;
  s: number;
  v: number;
  onDown: () => void;
  onUp: () => void;
}) {
  return createDragHandler({
    onDown: (e) => {
      props.onDown();
      return {
        startX: e.clientX,
        startY: e.clientY,
        s: props.s,
        v: props.v,
      };
    },
    onMove: (_, ctx, { dx, dy }) => {
      if (!ctx) return;
      const s = clamp(ctx.s + dx / props.width, 0, 1);
      const v = clamp(ctx.v - dy / props.height, 0, 1);
      props.onChange(s, v);
    },
    onUp: () => {
      props.onUp();
    },
  });
}

export function createSVCanvasPointerDownHandler(props: {
  onStart?: () => void;
  onChange: (s: number, v: number) => void;
  onDownChange: (down: boolean) => void;
  onEnd?: () => void;
  width: number;
  height: number;
}) {
  return createDragHandler({
    onDown: (e) => {
      props.onStart?.();
      const el = e.target;
      if (!(el instanceof HTMLCanvasElement)) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const s = x / props.width;
      const v = 1 - y / props.height;
      props.onChange(s, v);
      props.onDownChange(true);

      return {
        startX: e.clientX,
        startY: e.clientY,
      };
    },
    onMove: (e, ctx) => {
      if (!ctx) return;

      const el = e.target;
      if (!(el instanceof HTMLCanvasElement)) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const s = clamp(x / props.width, 0, 1);
      const v = clamp(1 - y / props.height, 0, 1);

      props.onChange(s, v);
    },

    onUp: () => {
      props.onDownChange(false);
      props.onEnd?.();
    },
  });
}

export function drawSVRect(ctx: CanvasRenderingContext2D, hue: number) {
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

export function createSVPickerKeyDownHandler({
  scale = 0.01,
  shiftScale = 0.1,
  ...props
}: {
  saturation: number;
  value: number;
  onChange: (s: number, v: number) => void;
  scale?: number;
  shiftScale?: number;
}) {
  return (e: KeyboardEvent) => {
    if (e.key === KeyboardKey.ArrowLeft || e.key === KeyboardKey.ArrowRight) {
      const sign = e.key === KeyboardKey.ArrowLeft ? -1 : 1;
      const signedStep = e.metaKey ? shiftScale * sign : scale * sign;
      const s = clamp(props.saturation + signedStep, 0, 1);
      props.onChange(s, props.value);
      e.preventDefault();
    } else if (
      e.key === KeyboardKey.ArrowUp ||
      e.key === KeyboardKey.ArrowDown
    ) {
      const sign = e.key === KeyboardKey.ArrowUp ? 1 : -1;
      const signedStep = e.metaKey ? shiftScale * sign : scale * sign;
      const v = clamp(props.value + signedStep, 0, 1);
      props.onChange(props.saturation, v);
      e.preventDefault();
    }
  };
}
