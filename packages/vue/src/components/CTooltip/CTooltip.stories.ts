import type { Meta, StoryObj } from "@storybook/vue3";
import CIconButton from "../CIconButton/CIconButton.vue";
import CButton from "../CButton/CButton.vue";
import TooltipProvider from "./CTooltipProvider.vue";
import Tooltip from "./CTooltip.vue";
import { h } from "vue";
import StoryTooltipPlacement from "./stories/StoryTooltipPlacement.vue";
import { IconInfoCircle } from "@tabler/icons-vue";

const meta = {
  component: Tooltip,
  args: {
    text: "tooltip",
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
      TooltipProvider,
    },
    template: `
        <Tooltip text="Tooltip">
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
    components: { CIconButton, IconInfoCircle, Tooltip, TooltipProvider },
    template: `
        <Tooltip text="Tooltip" force-show>
          <CIconButton>
            <IconInfoCircle size="20" />
          </CIconButton>
        </Tooltip>
    `,
  }),
};

export const Flip: Story = {
  render: () => ({
    components: { CIconButton, IconInfoCircle, Tooltip, TooltipProvider },
    template: `
        <Tooltip text="Tooltip">
          <CIconButton style="position: absolute; bottom: 4px;">
            <IconInfoCircle size="20" />
          </CIconButton>
        </Tooltip>
    `,
  }),
};

export const AutoPlacement: Story = {
  render: () => ({
    components: {
      Tooltip,
      TooltipProvider,
      IconInfoCircle,
      CIconButton,
    },
    template: `
        <Tooltip text="Tooltip can be placed anywhere">
          <CIconButton style="position: absolute; bottom: 4px; right: 4px">
            <IconInfoCircle size="20" />
          </CIconButton>
        </Tooltip>
    `,
  }),
};

export const MultipleItems: Story = {
  render: () => ({
    components: { CIconButton, Tooltip, TooltipProvider },
    template: html`
      <TooltipProvider>
        <div class="cmpui_icon-button__group">
          <Tooltip text="pointer">
            <CIconButton>
              <i class="ti ti-pointer"></i>
            </CIconButton>
          </Tooltip>
          <Tooltip text="typography">
            <CIconButton>
              <i class="ti ti-typography"></i>
            </CIconButton>
          </Tooltip>
          <Tooltip text="italic">
            <CIconButton>
              <i class="ti ti-italic"></i>
            </CIconButton>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
};
