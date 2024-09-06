export type CanvasViewTransform = {
  x: number;
  y: number;
  scale: number;
};

export const CanvasViewCursor = {
  Auto: "auto",
  Grab: "grab",
  Grabbing: "grabbing",
  ZoomIn: "zoom-in",
  ZoomOut: "zoom-out",
} as const;

export type CanvasViewCursor =
  (typeof CanvasViewCursor)[keyof typeof CanvasViewCursor];

export const CanvasViewMode = {
  Pan: "pan",
  ZoomIn: "zoom-in",
  ZoomOut: "zoom-out",
  Default: "default",
} as const;

export type CanvasViewMode =
  (typeof CanvasViewMode)[keyof typeof CanvasViewMode];
