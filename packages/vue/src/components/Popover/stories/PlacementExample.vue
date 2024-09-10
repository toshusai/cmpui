<script setup lang="ts">
import { ref } from "vue";
import CButton from "../../CButton/CButton.vue";
import Popover from "../Popover.vue";
import IconButton from "../../IconButton/IconButton.vue";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconCornerDownLeft,
  IconCornerDownRight,
  IconCornerLeftDown,
  IconCornerLeftUp,
  IconCornerRightDown,
  IconCornerRightUp,
  IconCornerUpLeft,
  IconCornerUpRight,
} from "@tabler/icons-vue";

const triggerBottom = ref<InstanceType<typeof CButton> | null>(null);
const triggerBottomStart = ref<InstanceType<typeof CButton> | null>(null);
const triggerBottomEnd = ref<InstanceType<typeof CButton> | null>(null);

const triggerLeft = ref<InstanceType<typeof CButton> | null>(null);
const triggerLeftStart = ref<InstanceType<typeof CButton> | null>(null);
const triggerLeftEnd = ref<InstanceType<typeof CButton> | null>(null);

const triggerRight = ref<InstanceType<typeof CButton> | null>(null);
const triggerRightStart = ref<InstanceType<typeof CButton> | null>(null);
const triggerRightEnd = ref<InstanceType<typeof CButton> | null>(null);

const triggerTop = ref<InstanceType<typeof CButton> | null>(null);
const triggerTopStart = ref<InstanceType<typeof CButton> | null>(null);
const triggerTopEnd = ref<InstanceType<typeof CButton> | null>(null);
</script>

<template>
  <div class="grid">
    <div>
      <IconButton ref="triggerBottom" bordered>
        <IconArrowDown size="20" />
      </IconButton>
      <Popover
        placement="bottom"
        :trigger="triggerBottom?.$el"
        :boundary="triggerBottom?.$el.parentElement"
        show
        auto-resize
      >
        <p>bottom</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerBottomStart" bordered>
        <IconCornerDownRight size="20" />
      </IconButton>
      <Popover
        placement="bottom-start"
        :trigger="triggerBottomStart?.$el"
        :boundary="triggerBottomStart?.$el.parentElement"
        show
        auto-resize
      >
        <p>bottom-start</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerBottomEnd" bordered>
        <IconCornerDownLeft size="20" />
      </IconButton>
      <Popover
        placement="bottom-end"
        :trigger="triggerBottomEnd?.$el"
        :boundary="triggerBottomEnd?.$el.parentElement"
        show
        auto-resize
      >
        <p>bottom-end</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerLeft" bordered>
        <IconArrowLeft size="20" />
      </IconButton>
      <Popover
        placement="left"
        :trigger="triggerLeft?.$el"
        :boundary="triggerLeft?.$el.parentElement"
        show
        auto-resize
      >
        <p>left</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerLeftStart" bordered>
        <IconCornerLeftDown size="20" />
      </IconButton>
      <Popover
        placement="left-start"
        :trigger="triggerLeftStart?.$el"
        :boundary="triggerLeftStart?.$el.parentElement"
        show
        auto-resize
      >
        <p>left-start</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerLeftEnd" bordered>
        <IconCornerLeftUp size="20" />
      </IconButton>
      <Popover
        placement="left-end"
        :trigger="triggerLeftEnd?.$el"
        :boundary="triggerLeftEnd?.$el.parentElement"
        show
        auto-resize
      >
        <p>left-end</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerRight" bordered>
        <IconArrowRight size="20" />
      </IconButton>
      <Popover
        placement="right"
        :trigger="triggerRight?.$el"
        :boundary="triggerRight?.$el.parentElement"
        show
        auto-resize
      >
        <p>right</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerRightStart" bordered>
        <IconCornerRightDown size="20" />
      </IconButton>
      <Popover
        placement="right-start"
        :trigger="triggerRightStart?.$el"
        :boundary="triggerRightStart?.$el.parentElement"
        show
        auto-resize
      >
        <p>right-start</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerRightEnd" bordered>
        <IconCornerRightUp size="20" />
      </IconButton>
      <Popover
        placement="right-end"
        :trigger="triggerRightEnd?.$el"
        :boundary="triggerRightEnd?.$el.parentElement"
        show
        auto-resize
      >
        <p>right-end</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerTop" bordered>
        <IconArrowUp size="20" />
      </IconButton>
      <Popover
        placement="top"
        :trigger="triggerTop?.$el"
        :boundary="triggerTop?.$el.parentElement"
        show
        auto-resize
      >
        <p>top</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerTopStart" bordered>
        <IconCornerUpRight size="20" />
      </IconButton>
      <Popover
        placement="top-start"
        :trigger="triggerTopStart?.$el"
        :boundary="triggerTopStart?.$el.parentElement"
        show
        auto-resize
      >
        <p>top-start</p>
      </Popover>
    </div>

    <div>
      <IconButton ref="triggerTopEnd" bordered>
        <IconCornerUpLeft size="20" />
      </IconButton>
      <Popover
        placement="top-end"
        :trigger="triggerTopEnd?.$el"
        :boundary="triggerTopEnd?.$el.parentElement"
        show
        auto-resize
      >
        <p>top-end</p>
      </Popover>
    </div>
  </div>
</template>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(4, 150px);
}

.grid > div {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid var(--cmpui-border-color);
}

.grid > div > button {
  margin: auto;
}

p {
  margin: 0;
  padding: 0;
}
</style>
