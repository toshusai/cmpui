import { forwardRef, memo, useMemo } from "react";
import { classNames } from "../../utils/classNames";
import { useRectResizeObserver } from "../../utils/interactions/useRectResizeObserver";
import { mergeRefs } from "../../utils/mergeRefs";
import { TimeText } from "./TimeText";
import { defaultRenderText } from "./defaultRenderText";
import { defaultSteps } from "./defaultSteps";
import { getStepPixel } from "./getStepPixel";

import "./index.css";

export type RulerProps = {
  offset?: number;
  pxPerUnit?: number;
  height?: number;
  steps?: number[];
  renderText?: (time: number) => string;
  minInterval?: number;
  orientation?: "horizontal" | "vertical";
} & Omit<JSX.IntrinsicElements["div"], "ref">;

export const Ruler = memo(
  forwardRef(
    (
      {
        offset = 0,
        pxPerUnit = 1,
        renderText,
        steps: propsSteps,
        minInterval = 32,
        className,
        style,
        orientation = "horizontal",
        ...props
      }: RulerProps,
      fRef,
    ) => {
      const [rect, ref] = useRectResizeObserver();


      const length  =(orientation === "horizontal" ? rect?.width : rect?.height) ?? 0;

      const steps = useMemo(
        () =>
          getStepPixel(
            pxPerUnit,
            minInterval,
            propsSteps ?? defaultSteps,
            length,
            offset,
          ),
        [pxPerUnit, minInterval, propsSteps, length, offset],
      );
      const subSteps = useMemo(
        () =>
          getStepPixel(
            pxPerUnit,
            minInterval / 4,
            propsSteps ?? defaultSteps,
            length,
            offset,
          ),
        [pxPerUnit, minInterval, propsSteps, length, offset],
      );


      return (
        <div
          className={classNames("cmpui_ruler__root", className)}
          data-orientation={orientation}
          ref={mergeRefs(ref, fRef)}
          style={{
            ...style,
          }}
          {...props}
        >
          {subSteps.map((v) => {
            return (
              <div
              data-orientation={orientation}
                className="cmpui_ruler__point"
                key={v}
                style={{
                  top: orientation === "horizontal" ? undefined : `${v}px`,
                  left: orientation === "horizontal" ? `${v}px` : undefined,
                }}
              />
            );
          })}
          {steps.map((left) => {
            const time = left / pxPerUnit + offset;
            return (
              <TimeText
                time={renderText ? renderText(time) : defaultRenderText(time)}
                key={left}
                left={left}
                orientation={orientation}
              />
            );
          })}
        </div>
      );
    },
  ),
);
