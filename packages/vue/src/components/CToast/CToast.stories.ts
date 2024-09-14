import type { Meta, StoryObj } from "@storybook/vue3";
import { h, ref } from "vue";
import CToast from "./CToast.vue";
import CIconButton from "../CIconButton/CIconButton.vue";
import { IconBell, IconX } from "@tabler/icons-vue";

const meta = {
  component: CToast,
  args: {
    show: false,
  },
} satisfies Meta<typeof CToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const show = ref(false);
      return () =>
        h(() => [
          h(
            CIconButton,
            {
              onClick: () => (show.value = true),
            },
            () => h(IconBell, { size: 20 }),
          ),
          h(
            CToast,
            {
              show: show.value,
              onClose: () => (show.value = false),
            },
            () => "Hello World",
          ),
        ]);
    },
  }),
};

export const Controlled: Story = {
  render: () => ({
    setup() {
      const show = ref(false);
      return () =>
        h(() => [
          h(
            CIconButton,
            {
              onClick: () => (show.value = true),
            },
            () => h(IconBell, { size: 20 }),
          ),
          h(
            CToast,
            {
              show: show.value,
              time: 0,
              onClose: () => (show.value = false),
            },
            () =>
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  },
                },
                h(() => [
                  h("div", "Hello World"),
                  h(CIconButton, { size: "S" }, () =>
                    h(IconX, {
                      onClick: () => (show.value = false),
                      size: 16,
                    }),
                  ),
                ]),
              ),
          ),
        ]);
    },
  }),
};

export const Placement: Story = {
  render: () => ({
    setup() {
      const horizontals = ["left", "center", "right"];
      const verticals = ["top", "bottom"];
      const show = ref(false);
      return () =>
        h(() => [
          h(
            CIconButton,
            {
              onClick: () => (show.value = true),
            },
            () => h(IconBell, { size: 20 }),
          ),
          ...horizontals.map((horizontal) =>
            verticals.map((vertical) =>
              h(
                CToast,
                {
                  show: show.value,
                  horizontal,
                  vertical,
                  onClose: () => (show.value = false),
                  style: { fontWeight: "bold" },
                },
                () => `Horizontal: ${horizontal}, Vertical: ${vertical}`,
              ),
            ),
          ),
        ]);
    },
  }),
};
