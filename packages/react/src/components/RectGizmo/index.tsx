import { Fragment, useMemo } from "react";

import { Circle } from "../Circle";
import { matrixToCss } from "../../utils/matrixToCss";
import { Vector2, createDragHandler, radToDeg } from "../../utils";

import { OriginMarker } from "./OriginMarker";
import { corners } from "./corners";
import { createEdgeHandler } from "./lib/createEdgeHandler";
import { createResizeHandler } from "./lib/createResizeHandler";
import { createRotateHorizontalResize } from "./lib/createRotateHorizontalResize";

export type RectGizmoProps = {
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
  setScaleX?: (scaleX: number) => void;
  setScaleY?: (scaleY: number) => void;
  position: Vector2;
  setPosition?: (position: Vector2) => void;
  origin: Vector2;
  angle: number;
  onChangeAngle?: (angle: number) => void;
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
  showOrigin?: boolean;
  canRotate?: boolean;
  canResize?: boolean;
};

export function RectGizmo(props: RectGizmoProps) {
  const matrix = new DOMMatrix()
    .translate(props.position.x, props.position.y)
    .rotate(0, 0, radToDeg(props.angle))
    .scale(props.scaleX, props.scaleY)
    .translate(-props.origin.x, -props.origin.y);

  const invertScale = new DOMMatrix().scale(1 / props.scaleX, 1 / props.scaleY);
  const invertScaleCss = matrixToCss(invertScale);

  const steppedAngle = useMemo(() => {
    const step = Math.PI / 12;
    return Math.round(props.angle / step) * step;
  }, [props.angle]);

  const memoCursorStyle = useMemo(() => {
    return [0, 0, 0, 0].map((_, i) => {
      return {
        cursor: createRotateHorizontalResize(
          steppedAngle +
            Math.PI / 4 +
            (i * Math.PI) / 2 +
            (props.scaleX < 0 ? Math.PI / 2 : 0) +
            (props.scaleY < 0 ? Math.PI / 2 : 0),
        ),
      };
    });
  }, [steppedAngle, props.scaleX, props.scaleY]);

  const edgeCursorStyle = useMemo(() => {
    return [0, 0, 0, 0].map((_, i) => {
      return {
        cursor: createRotateHorizontalResize(
          steppedAngle +
            (i * Math.PI) / 2 +
            (props.scaleX < 0 ? Math.PI / 2 : 0) +
            (props.scaleY < 0 ? Math.PI / 2 : 0),
        ),
      };
    });
  }, [steppedAngle, props.scaleX, props.scaleY]);

  return (
    <div
      style={{
        position: "absolute",
        transformOrigin: "top left",
        left: 0,
        top: 0,
        transform: matrixToCss(matrix),
        width: props.width,
        height: props.height,
      }}
      {...props.rootProps}
    >
      <div
        style={{
          left: 0,
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPointerDown={createDragHandler({
          onMove(_, __, move) {
            props.setPosition?.({
              x: props.position.x + move.dx,
              y: props.position.y + move.dy,
            });
          },
        })}
      />

      <OriginMarker
        x={props.origin.x}
        y={props.origin.y}
        transform={invertScaleCss}
      />

      {props.showOrigin && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            left: props.origin.x,
            top: props.origin.y,
            transform: invertScaleCss,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 16,
              height: 16,
              transform: "translate(-50%, -50%)",
              border: "1px solid var(--cmpui-primary-color)",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 1,
                height: 16,
                background: "var(--cmpui-primary-color)",
                left: 7.5,
              }}
            />

            <div
              style={{
                position: "absolute",
                width: 16,
                height: 1,
                background: "var(--cmpui-primary-color)",
                top: 7.5,
              }}
            />
          </div>
        </div>
      )}

      {corners.map(([w, h], i) => {
        return (
          <Fragment key={i}>
            <div
              style={{
                position: "absolute",
                left: w === 1 && h === 0 ? 0 : w * props.width,
                top: w === 1 && h === 1 ? 0 : h * props.height,
                width:
                  w === corners[(i + 1) % corners.length][0] ? 1 : props.width,
                height:
                  h === corners[(i + 1) % corners.length][1] ? 1 : props.height,
                background: "var(--cmpui-primary-color)",
                transform: matrixToCss(
                  new DOMMatrix()
                    .translate(
                      w === corners[(i + 1) % corners.length][0] ? -0.5 : 0,
                      h === corners[(i + 1) % corners.length][1] ? -0.5 : 0,
                    )
                    .scale(
                      w === corners[(i + 1) % corners.length][0]
                        ? 1 / Math.abs(props.scaleX)
                        : 1,
                      h === corners[(i + 1) % corners.length][1]
                        ? 1 / Math.abs(props.scaleY)
                        : 1,
                    ),
                ),
              }}
            />

            {props.canResize && (
              <div
                style={{
                  position: "absolute",
                  left: w === 1 && h === 0 ? 0 : w * props.width,
                  top: w === 1 && h === 1 ? 0 : h * props.height,
                  width:
                    w === corners[(i + 1) % corners.length][0]
                      ? 8
                      : props.width,
                  height:
                    h === corners[(i + 1) % corners.length][1]
                      ? 8
                      : props.height,
                  cursor: edgeCursorStyle[i].cursor,
                  transform: matrixToCss(
                    new DOMMatrix()
                      .translate(
                        w === corners[(i + 1) % corners.length][0] ? -4 : 0,
                        h === corners[(i + 1) % corners.length][1] ? -4 : 0,
                      )
                      .scale(
                        w === corners[(i + 1) % corners.length][0]
                          ? 1 / Math.abs(props.scaleX)
                          : 1,
                        h === corners[(i + 1) % corners.length][1]
                          ? 1 / Math.abs(props.scaleY)
                          : 1,
                      ),
                  ),
                }}
                onPointerDown={createEdgeHandler(props, w, h)}
              />
            )}
          </Fragment>
        );
      })}

      {props.canRotate &&
        corners.map(([w, h], i) => {
          return (
            <div
              key={i}
              style={{
                transform: matrixToCss(
                  new DOMMatrix()
                    .scale(
                      1 / Math.abs(props.scaleX),
                      1 / Math.abs(props.scaleY),
                    )
                    .translate(w === 1 ? -4 : 4, h === 1 ? -4 : 4),
                ),
                left: w * props.width + (w === 1 ? 0 : -16),
                top: h * props.height + (h === 1 ? 0 : -16),
                position: "absolute",
                width: 16,
                height: 16,
                transformOrigin: `${w === 0 ? "right" : "left"} ${
                  h === 0 ? "bottom" : "top"
                }`,
                cursor: [0, 0, 0, 0].map((_, i) => {
                  return {
                    cursor: createRotateHorizontalResize(
                      steppedAngle +
                        -Math.PI / 4 +
                        (i * Math.PI) / 2 +
                        (props.scaleX < 0 ? Math.PI / 2 : 0) +
                        (props.scaleY < 0 ? Math.PI / 2 : 0),
                    ),
                  };
                })[i].cursor,
              }}
              onPointerDown={createDragHandler({
                onDown(e) {
                  const globalCenter = new Vector2(
                    props.position.x,
                    props.position.y,
                  );
                  const globalCursor = new Vector2(e.clientX, e.clientY);
                  return {
                    startX: e.clientX,
                    startY: e.clientY,
                    startAngle: props.angle,
                    diffAngle:
                      Math.atan2(
                        globalCenter.y - globalCursor.y,
                        globalCenter.x - globalCursor.x,
                      ) -
                      Math.PI / 2,
                  };
                },
                onMove(e, ctx) {
                  if (!ctx) return;
                  const center = new Vector2(
                    props.position.x,
                    props.position.y,
                  );
                  const deltaX = e.clientX - center.x;
                  const deltaY = e.clientY - center.y;
                  const newAngle = Math.atan2(deltaY, deltaX) + Math.PI / 2;
                  props.onChangeAngle?.(
                    newAngle - ctx.diffAngle + ctx.startAngle,
                  );
                },
              })}
            />
          );
        })}

      {props.canResize &&
        corners.map(([w, h], i) => {
          return (
            <Fragment key={i}>
              <Circle
                x={w * props.width}
                y={h * props.height}
                radius={4}
                fill="var(--cmpui-primary-color)"
                style={{
                  transform: invertScaleCss,
                  ...memoCursorStyle[i],
                }}
              />
              <div
                style={{
                  transform: matrixToCss(
                    new DOMMatrix()
                      .scale(
                        1 / Math.abs(props.scaleX),
                        1 / Math.abs(props.scaleY),
                      )
                      .translate(w === 1 ? -4 : 4, h === 1 ? -4 : 4),
                  ),
                  left: w * props.width + (w === 1 ? 0 : -8),
                  top: h * props.height + (h === 1 ? 0 : -8),
                  position: "absolute",
                  width: 8,
                  height: 8,
                  transformOrigin: `${w === 0 ? "right" : "left"} ${
                    h === 0 ? "bottom" : "top"
                  }`,
                  ...memoCursorStyle[i],
                }}
                onPointerDown={createResizeHandler(props, w, h)}
              />
            </Fragment>
          );
        })}
    </div>
  );
}
