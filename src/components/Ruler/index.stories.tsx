import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Ruler } from ".";
import { createDragHandler } from "../../utils/interactions/createDragHandler";

const meta: Meta<typeof Ruler> = {
  title: "Components/View/Ruler",
  component: Ruler,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Ruler>;

export const Basic: Story = {
  render: function RenderBasic() {
    const pxPerSec = 1;
    const [offset, setOffset] = useState(-24);
    const handlePointerDown = createDragHandler({
      onDown: (e) => {
        return {
          startX: e.clientX,
          startY: e.clientY,
          startOffset: offset,
        };
      },
      onMove: (e, ctx) => {
        if (!ctx) return;
        const dx = e.clientX - ctx.startX;
        const offset = ctx.startOffset - dx / pxPerSec;
        setOffset(offset);
      },
    });
    return (
      <Ruler
        offset={offset}
        pxPerUnit={pxPerSec}
        onPointerDown={handlePointerDown}
      />
    );
  },
};

export const Vertical: Story = {
  render: function RenderBasic() {
    const pxPerSec = 1;
    const [offset, setOffset] = useState(-24);
    useEffect(() => {
      const root = document.getElementById("storybook-root");
      if (!root) return;

      root.style.height = "100%";

      return () => {
        root.style.height = "";
      };
    });
    const handlePointerDown = createDragHandler({
      onDown: (e) => {
        return {
          startY: e.clientY,
          startOffset: offset,
        };
      },
      onMove: (e, ctx) => {
        if (!ctx) return;
        const dy = e.clientY - ctx.startY;
        const offset = ctx.startOffset - dy / pxPerSec;
        setOffset(offset);
      },
    });
    return (
      <div
        style={{
          width: "100vh",
          height: 512,
        }}
      >
        <Ruler
          orientation="vertical"
          offset={offset}
          pxPerUnit={pxPerSec}
          onPointerDown={handlePointerDown}
          height={24}
        />
      </div>
    );
  },
};
