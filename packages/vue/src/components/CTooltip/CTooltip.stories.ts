import type { Meta, StoryObj } from "@storybook/vue3";
import CIconButton from "../CIconButton/CIconButton.vue";
import CButton from "../CButton/CButton.vue";
import Tooltip from "./CTooltip.vue";
import { h } from "vue";
import StoryTooltipPlacement from "./stories/StoryTooltipPlacement.vue";
import {
  IconInfoCircle,
  IconPhoto,
  IconPointer,
  IconTypography,
} from "@tabler/icons-vue";

const meta = {
  component: Tooltip,
  args: {
    content: "tooltip",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  render: () => ({
    components: {
      CButton,
      CIconButton,
      IconInfoCircle,
      Tooltip,
    },
    template: `
        <Tooltip content="Tooltip">
            <IconInfoCircle size="20" />
        </Tooltip>
    `,
  }),
};

export const Placement: Story = {
  render: () => h(StoryTooltipPlacement),
};

export const ForceShow: Story = {
  render: () => ({
    components: { CIconButton, IconInfoCircle, Tooltip },
    template: `
        <Tooltip content="Tooltip" force-show>
          <CIconButton>
            <IconInfoCircle size="20" />
          </CIconButton>
        </Tooltip>
    `,
  }),
};

export const Flip: Story = {
  render: () => ({
    components: { CIconButton, IconInfoCircle, Tooltip },
    template: `
        <Tooltip content="Tooltip">
          <CIconButton style="position: absolute; top: 8px; right: 8px">
            <IconInfoCircle size="20" />
          </CIconButton>
        </Tooltip>
    `,
  }),
};

export const MultipleItems: Story = {
  render: () => ({
    components: {
      CIconButton,
      Tooltip,
      IconPointer,
      IconTypography,
      IconPhoto,
    },
    template: html`
      <div class="cmpui_icon-button__group">
        <Tooltip content="Select">
          <CIconButton>
            <IconPointer size="20" />
          </CIconButton>
        </Tooltip>
        <Tooltip content="Text" side="bottom">
          <CIconButton>
            <IconTypography size="20" />
          </CIconButton>
        </Tooltip>
        <Tooltip content="Image">
          <CIconButton>
            <IconPhoto size="20" />
          </CIconButton>
        </Tooltip>
      </div>
    `,
  }),
};
