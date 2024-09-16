import { useRef } from "react";
import {
  matrixToCss,
  radToDeg,
  px,
  createEdgeStyle,
  createEdgeHandler,
  corners,
  createRotateStyle,
  createStepped,
  createRotateHandler,
  whIndexToCornerName,
  createResizeHandler,
  type RectGizmoProps as CoreRectGizmoProps,
} from "@toshusai/cmpui-core";

import { Circle } from "../Circle";
import { createDragHandler } from "../../utils";

export type RectGizmoProps = CoreRectGizmoProps & {
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
  onChange: (props: CoreRectGizmoProps) => void;
};

export function RectGizmo(props: RectGizmoProps) {
  const matrix = new DOMMatrix()
    .translate(props.position.x, props.position.y)
    .rotate(0, 0, radToDeg(props.rotation))
    .scale(props.scale.x, props.scale.y)
    .translate(-props.origin.x, -props.origin.y);

  const invertScale = new DOMMatrix().scale(
    1 / props.scale.x,
    1 / props.scale.y,
  );
  const invertScaleCss = matrixToCss(invertScale);

  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="cmpui_rect-gizmo"
      style={{
        transform: matrixToCss(matrix),
        width: props.width,
        height: props.height,
      }}
      {...props.rootProps}
    >
      <div
        onPointerDown={createDragHandler({
          onMove(_, __, move) {
            props.onChange({
              ...props,
              position: {
                x: props.position.x + move.dx,
                y: props.position.y + move.dy,
              },
            });
          },
        })}
      />

      <div
        className="cmpui_rect-gizmo-origin"
        style={{
          left: px(props.origin.x),
          top: px(props.origin.y),
          transform: invertScaleCss,
        }}
        ref={centerRef}
      >
        <div></div>
      </div>

      {corners.map(([w, h], i) => {
        return (
          <div
            key={i}
            style={createEdgeStyle(w, h, i, 8, props.scale)}
            className={`cmpui_rect-gizmo-edge step-${createStepped(props.rotation, i, 0)}`}
            data-pos={"lbrt"[i]}
            onPointerDown={(e) =>
              createEdgeHandler(props, w, h, (x, y) => {
                props.onChange({
                  ...props,
                  scale: { x, y },
                });
              })(e.nativeEvent)
            }
          />
        );
      })}

      {corners.map(([w, h], i) => {
        return (
          <div
            key={i}
            style={createRotateStyle(w, h, props.scale)}
            className={`cmpui_rect-gizmo-corner step-${createStepped(
              props.rotation,
              i,
              -(Math.PI / 4) +
                (props.scale.x < 0 ? Math.PI / 2 : 0) +
                (props.scale.y < 0 ? Math.PI / 2 : 0),
            )}`}
            data-pos={whIndexToCornerName(w, h)}
            onPointerDown={(e) =>
              createRotateHandler(
                props.rotation,
                (r) =>
                  props.onChange({
                    ...props,
                    rotation: r,
                  }),
                centerRef.current!,
              )(e.nativeEvent)
            }
          />
        );
      })}

      {corners.map(([w, h], i) => {
        return (
          <Circle
            key={i}
            x={w * props.width}
            y={h * props.height}
            radius={4}
            fill="var(--cmpui-primary-color)"
            style={{
              transform: invertScaleCss,
            }}
            className={`cmpui_rect-gizmo-corner step-${createStepped(
              props.rotation,
              i,
              Math.PI / 4 +
                (props.scale.x < 0 ? Math.PI / 2 : 0) +
                (props.scale.y < 0 ? Math.PI / 2 : 0),
            )}`}
            onPointerDown={(e) =>
              createResizeHandler(props, w, h, (x, y) => {
                props.onChange({
                  ...props,
                  scale: { x, y },
                });
              })(e.nativeEvent)
            }
          />
        );
      })}
    </div>
  );
}
