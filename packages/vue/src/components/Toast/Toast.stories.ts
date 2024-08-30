import type { Meta, StoryObj } from "@storybook/vue3";
import IconButton from "../IconButton/IconButton.vue";
import CButton from "../CButton/CButton.vue";
import ToastProvider from "./ToastProvider.vue";
import Toast from "./Toast.vue";

const meta = {
  title: "components/Toast",
  component: Toast,
  args: {
    text: "tooltip",
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  render: () => ({
    components: { CButton, Toast, ToastProvider },
    template: `
        <Toast text="Tooltip">
          <CButton>
            Hover me
          </CButton>
        </Toast>
    `,
  }),
};

export const Flip: Story = {
  render: () => ({
    components: { CButton, Toast, ToastProvider },
    template: `
        <Toast text="Tooltip">
          <CButton style="position: absolute; bottom: 4px; transform: translateX(-50%);">
            Hover me
          </CButton>
        </Toast>
    `,
  }),
};

export const AutoPlacement: Story = {
  render: () => ({
    components: { Button: CButton, Toast, ToastProvider },
    template: `
        <Toast text="Tooltip can be placed anywhere">
          <CButton style="position: absolute; bottom: 4px; right: 4px">
            Hover me
          </CButton>
        </Toast>
    `,
  }),
};

export const MultipleItems: Story = {
  render: () => ({
    components: { IconButton, Toast, ToastProvider },
    template: html`
      <ToastProvider>
        <div class="cmpui_icon-button__group">
          <Toast text="pointer">
            <IconButton>
              <i class="ti ti-pointer"></i>
            </IconButton>
          </Toast>
          <Toast text="typography">
            <IconButton>
              <i class="ti ti-typography"></i>
            </IconButton>
          </Toast>
          <Toast text="italic">
            <IconButton>
              <i class="ti ti-italic"></i>
            </IconButton>
          </Toast>
        </div>
      </ToastProvider>
    `,
  }),
};
