import type { Meta, StoryObj } from "@storybook/vue3";
import CCanvasView from "./CCanvasView.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { CanvasViewCursor, CanvasViewTransform } from "@toshusai/cmpui-core";

const meta = {
  title: "data display/CCanvasView",
  component: CCanvasView,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    view: {
      x: 200,
      y: 200,
      scale: 1,
    },
  },
} satisfies Meta<typeof CCanvasView>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Common: Story = {
  render: () => ({
    setup() {
      const view = ref<CanvasViewTransform>({
        x: 200,
        y: 200,
        scale: 1,
      });
      const setView = (v: CanvasViewTransform) => {
        view.value.scale = v.scale;
        view.value.x = v.x;
        view.value.y = v.y;
      };
      const cursor = ref<CanvasViewCursor>(CanvasViewCursor.Auto);

      const keyMap = ref<Record<string, boolean>>({});
      const handleKeyDown = (e: KeyboardEvent) => {
        keyMap.value[e.key] = true;
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        keyMap.value[e.key] = false;
      };

      onMounted(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
      });

      onUnmounted(() => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      });

      watch(keyMap.value, (map) => {
        if (map[" "]) {
          cursor.value = CanvasViewCursor.Grab;
        } else if (map["Alt"] && map["Shift"]) {
          cursor.value = CanvasViewCursor.ZoomOut;
        } else if (map["Alt"]) {
          cursor.value = CanvasViewCursor.ZoomIn;
        } else {
          cursor.value = CanvasViewCursor.Auto;
        }
      });

      return { view, setView, cursor };
    },
    components: { CCanvasView },
    template: html`
      <div style="width: 100%; height: 100vh;">
        <CCanvasView
          :view="view"
          @change-view="setView"
          :cursor="cursor"
          @change-cursor="v => (cursor = v)"
          :maxScale="50"
          :minScale="0.2"
        >
          <template #content>
            <div style="width: 200px; height: 100px; background: white">
              <div
                className="alpha-checker-board"
                style="width: 200px; height: 100px"
              />
            </div>
          </template>
        </CCanvasView>
      </div>
    `,
  }),
};

export const CommonScoped: Story = {
  render: () => ({
    setup() {
      const view = ref<CanvasViewTransform>({
        x: 200,
        y: 200,
        scale: 1,
      });
      const setView = (v: CanvasViewTransform) => {
        view.value.scale = v.scale;
        view.value.x = v.x;
        view.value.y = v.y;
      };
      const cursor = ref<CanvasViewCursor>(CanvasViewCursor.Auto);

      const keyMap = ref<Record<string, boolean>>({});
      const handleKeyDown = (e: KeyboardEvent) => {
        keyMap.value[e.key] = true;
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        keyMap.value[e.key] = false;
      };

      onMounted(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
      });

      onUnmounted(() => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      });

      watch(keyMap.value, (map) => {
        if (map[" "]) {
          cursor.value = CanvasViewCursor.Grab;
        } else if (map["Alt"] && map["Shift"]) {
          cursor.value = CanvasViewCursor.ZoomOut;
        } else if (map["Alt"]) {
          cursor.value = CanvasViewCursor.ZoomIn;
        } else {
          cursor.value = CanvasViewCursor.Auto;
        }
      });

      return { view, setView, cursor };
    },
    components: { CCanvasView },
    template: html`
      <div style="width: 100%; height: 100vh;">
        <div
          style="position: absolute; top: 100px; left: 100px; width: 300px; height: 300px; border: 1px solid black; overflow: hidden"
        >
          <CCanvasView
            :view="view"
            @change-view="setView"
            :cursor="cursor"
            @change-cursor="v => (cursor = v)"
            :maxScale="50"
            :minScale="0.2"
          >
            <template #content>
              <div style="width: 200px; height: 100px; background: white">
                <div
                  className="alpha-checker-board"
                  style="width: 200px; height: 100px"
                />
              </div>
            </template>
          </CCanvasView>
        </div>
      </div>
    `,
  }),
};

export const Grab: Story = {
  render: () => ({
    setup() {
      const view = ref<CanvasViewTransform>({
        x: 200,
        y: 200,
        scale: 1,
      });
      const cursor = ref<CanvasViewCursor>(CanvasViewCursor.Grab);
      return { view, cursor };
    },
    components: { CCanvasView },
    template: html`
      <div style="width: 100%; height: 100vh;">
        <CCanvasView
          :view="view"
          @change-view="v => (view = v)"
          @change-cursor="v => (cursor=v)"
          :cursor="cursor"
          :maxScale="50"
          :minScale="0.2"
        >
          <template #content>
            <div style="width: 200px; height: 100px; background: white">
              <div
                className="alpha-checker-board"
                style="width: 200px; height: 100px"
              />
            </div>
          </template>
        </CCanvasView>
      </div>
    `,
  }),
};
