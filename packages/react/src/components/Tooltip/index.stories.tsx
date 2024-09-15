import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconInfoCircle,
  IconPhoto,
  IconPointer,
  IconTypography,
} from "@tabler/icons-react";
import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../IconButton";

import { Tooltip } from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Float/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: function RenderBasic() {
    return (
      <Tooltip content="Tooltip">
        <IconInfoCircle size={20} />
      </Tooltip>
    );
  },
};

export const Flip: Story = {
  render: function RenderBasic() {
    return (
      <Tooltip content="Tooltip">
        <IconInfoCircle
          size={20}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
          }}
        />
      </Tooltip>
    );
  },
};

export const ForceShow: Story = {
  render: function RenderBasic() {
    return (
      <Tooltip content="Tooltip" forceShow>
        <IconInfoCircle size={20} />
      </Tooltip>
    );
  },
};

export const Placement: Story = {
  render: function RenderPlacement() {
    const sides = ["top", "right", "bottom", "left"] as const;
    const icons = {
      top: <IconArrowUp />,
      right: <IconArrowRight />,
      bottom: <IconArrowDown />,
      left: <IconArrowLeft />,
    };
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 150px)",
          gridTemplateRows: "repeat(2, 150px)",
        }}
      >
        {sides.map((side) => (
          <div
            key={side}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              border: "1px solid var(--cmpui-border-color)",
            }}
          >
            <Tooltip content="Tooltip" side={side} key={side}>
              <IconButton
                style={{
                  margin: "auto",
                }}
              >
                {icons[side]}
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </div>
    );
  },
};

export const Group: Story = {
  render: function RenderBasic() {
    return (
      <div className="cmpui_icon-button__group">
        <Tooltip content="Select">
          <IconButton>
            <IconPointer size={20} />
          </IconButton>
        </Tooltip>
        <Tooltip content="Text" side="bottom">
          <IconButton>
            <IconTypography size={20} />
          </IconButton>
        </Tooltip>
        <Tooltip content="Image">
          <IconButton>
            <IconPhoto size={20} />
          </IconButton>
        </Tooltip>
      </div>
    );
  },
};
