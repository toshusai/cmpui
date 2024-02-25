import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CanvasView, CanvasViewProps } from ".";
import { createKeyDownUpHandler } from "../../utils/interactions/createKeyDownUpHandler";
import { View } from "./View";
import { ViewMode } from "./ViewMode";

import "../../styles/alpha-checker-board.css";

function usePointerEnterFocus() {
  return useCallback((e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.focus({
      preventScroll: true,
    });
  }, []);
}

const meta: Meta<typeof CanvasView> = {
  title: "Components/View/CanvasView",
  component: CanvasView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CanvasView>;

function BaseStory(props: CanvasViewProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: 512,
      }}
    >
      <CanvasView
        {...props}
        maxScale={50}
        minScale={0.2}
        content={
          <>
            <div style={{ width: 200, height: 100, background: "white" }}>
              <div
                className="alpha-checker-board"
                style={{
                  width: 200,
                  height: 100,
                }}
              />
            </div>
          </>
        }
      />
    </div>
  );
}

export const Basic: Story = {
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1,
    });

    const [keyStack, setKeyStack] = useState<string[]>([]);
    const handleKeyDowns = useMemo(
      () =>
        [" ", "Alt", "Shift"].map((key) =>
          createKeyDownUpHandler(key, {
            onDown: (e) => {
              e.preventDefault();
              setKeyStack((keyStack) => {
                if (keyStack.includes(key)) {
                  return keyStack;
                }
                return [...keyStack, key];
              });
            },
            onUp: () => {
              setKeyStack((keyStack) => keyStack.filter((k) => k !== key));
            },
          }),
        ),
      [],
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
      handleKeyDowns.map((handler) => handler(e));
    };

    const mode = useMemo(() => {
      if (keyStack.includes(" ")) {
        return "pan";
      }
      if (keyStack.includes("Alt") && keyStack.includes("Shift")) {
        return "zoom-out";
      }
      if (keyStack.includes("Alt")) {
        return "zoom-in";
      }
      return "default";
    }, [keyStack]);

    const handlePointerEnter = usePointerEnterFocus();

    return (
      <BaseStory
        onKeyDown={handleKeyDown}
        onChangeView={setView}
        view={view}
        mode={mode}
        onPointerEnter={handlePointerEnter}
      />
    );
  },
};

export const Grab: Story = {
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1,
    });

    return <BaseStory onChangeView={setView} view={view} mode={"pan"} />;
  },
};

export const Zoom: Story = {
  render: () => {
    const [view, setView] = useState<View>({
      x: 200,
      y: 100,
      scale: 1,
    });

    const [mode, setMode] = useState<ViewMode>("zoom-in");

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setMode("zoom-out");
          window.addEventListener("keyup", handleKeyUp);
        }
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Alt") {
          setMode("zoom-in");
        }
        window.removeEventListener("keyup", handleKeyUp);
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    return <BaseStory onChangeView={setView} view={view} mode={mode} />;
  },
};
