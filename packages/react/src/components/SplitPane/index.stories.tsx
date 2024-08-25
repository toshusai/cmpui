import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Panel } from "../../__stories__/Panel";
import { Root } from "../../__stories__/Root";

import { SplitPane } from ".";

const meta: Meta<typeof SplitPane> = {
  title: "Layout/SplitPane",
  component: SplitPane,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Horizontal: Story = {
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(
      Array(3).fill(`${(1 / 3) * 100}%`),
    );
    return (
      <Root>
        <SplitPane type="horizontal" sizes={sizes} onChangeRates={setSizes}>
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>
    );
  },
};

export const Readonly: Story = {
  render: function Render() {
    const [sizes] = useState<string[]>(Array(3).fill(`${(1 / 3) * 100}%`));
    return (
      <Root>
        <SplitPane type="horizontal" sizes={sizes}>
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>
    );
  },
};

export const MinMax: Story = {
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(
      Array(3).fill(`${(1 / 3) * 100}%`),
    );
    return (
      <Root>
        <SplitPane
          type="horizontal"
          sizes={sizes}
          onChangeRates={setSizes}
          minSizes={["100px", "auto", "10%"]}
          maxSizes={["200px", "auto", "50%"]}
        >
          <Panel color="#a8e6cf" name="A" />
          <Panel color="#dcedc1" name="B" />
          <Panel color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>
    );
  },
};

export const Vertical: Story = {
  render: function Render() {
    const [sizes, setSizes] = useState<string[]>(
      Array(3).fill(`${(1 / 3) * 100}%`),
    );
    return (
      <Root>
        <SplitPane type="vertical" sizes={sizes} onChangeRates={setSizes}>
          <Panel key={0} color="#a8e6cf" name="A" />
          <Panel key={1} color="#dcedc1" name="B" />
          <Panel key={2} color="#ffd3b6" name="C" />
        </SplitPane>
      </Root>
    );
  },
};
