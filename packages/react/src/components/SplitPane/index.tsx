import React, { forwardRef } from "react";

import { mergeRefs } from "../../utils/mergeRefs";

import { useSplitPane } from "./useSplitPane";

import "./index.css";

export type SplitPaneProps = {
  children?: React.ReactNode[];
  maxSizes?: string[];
  minSizes?: string[];
  onChangeRates?: (rates: string[]) => void;
  sizes?: string[];
  type: "horizontal" | "vertical";
};

export const SplitPane = forwardRef<HTMLDivElement, SplitPaneProps>(
  function HSplitPane({ children, type, onChangeRates, ...props }, ref) {
    let sizes = props.sizes ?? Array(children?.length ?? 0).fill("100%");
    if (sizes.length < (children?.length ?? 0)) {
      sizes = sizes.concat(
        Array((children?.length ?? 0) - sizes.length).fill("100%"),
      );
    }

    const minSizes = props.minSizes ?? Array(sizes.length).fill("auto");
    const maxSizes = props.maxSizes ?? Array(sizes.length).fill("auto");
    const { rootRef, refs, handlePointerDownForRef } = useSplitPane(
      type,
      sizes,
      maxSizes,
      minSizes,
      (sizes) => {
        onChangeRates?.(sizes);
      },
    );

    return (
      <>
        <div
          ref={mergeRefs(rootRef, ref)}
          className="cmpui_split-pane__root"
          data-orientation={type}
        >
          {children?.map((child, i) => (
            <React.Fragment key={`${i}`}>
              <div
                ref={(el) => {
                  if (el !== null) {
                    refs.current[i] = el;
                  }
                }}
                className="cmpui_split-pane__child"
                style={{
                  width: type === "horizontal" ? sizes[i] : "100%",
                  height: type === "vertical" ? sizes[i] : "100%",
                  minWidth: type === "horizontal" ? minSizes[i] : undefined,
                  minHeight: type === "vertical" ? minSizes[i] : undefined,
                  maxWidth: type === "horizontal" ? maxSizes[i] : undefined,
                  maxHeight: type === "vertical" ? maxSizes[i] : undefined,
                }}
              >
                {child}
              </div>
              {i !== children.length - 1 && (
                <div
                  className="cmpui_split-pane__divider"
                  data-orientation={type}
                  data-resizable={onChangeRates != null}
                >
                  <div onPointerDown={handlePointerDownForRef(i)} />
                </div>
              )}
            </React.Fragment>
          )) ?? null}
        </div>
      </>
    );
  },
);
