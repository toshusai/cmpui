import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CRectGizmo from "./CRectGizmo.vue";
import StoryCRectGizmoExample from "./stories/StoryCRectGizmoExample.vue";

const meta = {
  title: "tools/CRectGizmo",
  component: CRectGizmo,
} satisfies Meta<typeof CRectGizmo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      return () => h(StoryCRectGizmoExample);
    },
  }),
};
