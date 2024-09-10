import type { Meta, StoryObj } from "@storybook/vue3";
import CIconButton from "../CIconButton/CIconButton.vue";
import CButton from "../CButton/CButton.vue";
import TooltipProvider from "./CTooltipProvider.vue";
import Tooltip from "./CTooltip.vue";

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
    components: { CButton, Tooltip, TooltipProvider },
    template: `
        <Tooltip text="Tooltip">
          <CButton>
            Hover me
          </CButton>
        </Tooltip>
    `,
  }),
};

export const Flip: Story = {
  render: () => ({
    components: { CButton, Tooltip, TooltipProvider },
    template: `
        <Tooltip text="Tooltip">
          <CButton style="position: absolute; bottom: 4px; transform: translateX(-50%);">
            Hover me
          </CButton>
        </Tooltip>
    `,
  }),
};

export const AutoPlacement: Story = {
  render: () => ({
    components: { CButton, Tooltip, TooltipProvider },
    template: `
        <Tooltip text="Tooltip can be placed anywhere">
          <CButton style="position: absolute; bottom: 4px; right: 4px">
            Hover me
          </CButton>
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
