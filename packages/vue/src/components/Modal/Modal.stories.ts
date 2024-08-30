import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Modal from "./Modal.vue";
import CButton from "../CButton/CButton.vue";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;
export const Default: Story = {
  render: () => ({
    setup() {
      const show = ref(false);
      return {
        show,
      };
    },
    components: { Modal, CButton },
    template: html`
      <Modal :show="show" title="Confirm" @close="show = false">
        <div style="padding: 8px">
          <p style="font-size: 14px; margin: 0">
            Are you sure you want to delete this item?
          </p>
          <div
            style="display: flex; gap: 8px; justify-content: right; margin-top: 8px"
          >
            <CButton size="S" variant="secondary" @click="show = false">
              Cancel
            </CButton>
            <CButton size="S" @click="show = false">OK</CButton>
          </div>
        </div>
      </Modal>
      <CButton @click="show = true">Open</CButton>
    `,
  }),
};
