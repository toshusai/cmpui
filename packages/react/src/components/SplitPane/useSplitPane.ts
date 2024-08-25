import React, { useCallback, useRef } from "react";

import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { px } from "../../utils/px";

export function useSplitPane(
  type: "horizontal" | "vertical",
  sizes: string[],
  maxSizes: string[],
  minSizes: string[],
  onChangeRates?: (rates: string[]) => void,
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  const iRef = useRef(0);
  const handlePointerDown = createDragHandler({
    onDown: (e) => {
      const i = iRef.current;
      const root = rootRef.current;
      const left = refs.current[i];
      const right = refs.current[i + 1];
      if (root == null || left == null || right == null) {
        return;
      }
      const leftRect = left.getBoundingClientRect();
      const rightRect = right.getBoundingClientRect();
      const startX = e.clientX;

      return {
        i,
        startX,
        startY: e.clientY,
        leftRect,
        rightRect,
      };
    },
    onMove: (e, ctx) => {
      if (ctx === undefined) return;
      const i = ctx.i;
      const diff =
        type === "horizontal" ? e.clientX - ctx.startX : e.clientY - ctx.startY;

      const left = refs.current[i];
      const right = refs.current[i + 1];

      let parentSize = 0;
      let leftSize = 0;
      let rightSize = 0;
      if (left === undefined || right === undefined) return;
      if (type === "horizontal") {
        parentSize = rootRef.current?.getBoundingClientRect().width ?? 0;
        leftSize = ctx.leftRect.width;
        rightSize = ctx.rightRect.width;
      } else {
        parentSize = rootRef.current?.getBoundingClientRect().height ?? 0;
        leftSize = ctx.leftRect.height;
        rightSize = ctx.rightRect.height;
      }

      // left

      let minLeft = -Number.MAX_SAFE_INTEGER;
      if (minSizes[i].includes("px")) {
        minLeft = parseInt(minSizes[i]);
      } else if (minSizes[i].includes("%")) {
        minLeft = (parseInt(minSizes[i]) / 100) * parentSize;
      }

      let maxLeft = Number.MAX_SAFE_INTEGER;
      if (maxSizes[i].includes("px")) {
        maxLeft = parseInt(maxSizes[i]);
      } else if (maxSizes[i].includes("%")) {
        maxLeft = (parseInt(maxSizes[i]) / 100) * parentSize;
      }

      const newRates = [...sizes];

      const newLeft = leftSize + diff;
      let newLeftDiff = diff;
      if (newLeft < minLeft) {
        newLeftDiff = minLeft - leftSize;
        newRates[i] = px(leftSize + newLeftDiff);
        newRates[i + 1] = px(rightSize - newLeftDiff);
        onChangeRates?.(newRates);
        return;
      }
      if (newLeft > maxLeft) {
        newLeftDiff = maxLeft - leftSize;
        newRates[i] = px(leftSize + newLeftDiff);
        newRates[i + 1] = px(rightSize - newLeftDiff);
        onChangeRates?.(newRates);
        return;
      }

      // right
      let minRight = -Number.MAX_SAFE_INTEGER;
      if (minSizes[i + 1].includes("px")) {
        minRight = parseInt(minSizes[i + 1]);
      } else if (minSizes[i + 1].includes("%")) {
        minRight = (parseInt(minSizes[i + 1]) / 100) * parentSize;
      }

      let maxRight = Number.MAX_SAFE_INTEGER;
      if (maxSizes[i + 1].includes("px")) {
        maxRight = parseInt(maxSizes[i + 1]);
      } else if (maxSizes[i + 1].includes("%")) {
        maxRight = (parseInt(maxSizes[i + 1]) / 100) * parentSize;
      }

      const newRight = rightSize - diff;
      let newRightDiff = -diff;
      if (newRight < minRight) {
        newRightDiff = rightSize - minRight;
        newRates[i] = px(leftSize + newRightDiff);
        newRates[i + 1] = px(rightSize - newRightDiff);
        onChangeRates?.(newRates);
        return;
      }
      if (newRight > maxRight) {
        newRightDiff = rightSize - maxRight;
        newRates[i] = px(leftSize + newRightDiff);
        newRates[i + 1] = px(rightSize - newRightDiff);
        onChangeRates?.(newRates);
        return;
      }
      newRates[i] = px(leftSize + diff);
      newRates[i + 1] = px(rightSize - diff);
      onChangeRates?.(newRates);
    },
  });
  const handlePointerDownForRef = useCallback(
    (i: number) => (e: React.PointerEvent<HTMLDivElement>) => {
      iRef.current = i;
      handlePointerDown(e);
    },
    [handlePointerDown],
  );

  return {
    rootRef,
    refs,
    handlePointerDownForRef,
  };
}
