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
    <IconButton ref="triggerBottom" border>
      <IconArrowDown size="20" />
    </IconButton>
    <Popover placement="bottom" :trigger="triggerBottom?.$el" show>
      <p>bottom</p>
    </Popover>

    <IconButton ref="triggerBottomStart" border>
      <IconCornerDownRight size="20" />
    </IconButton>
    <Popover placement="bottom-start" :trigger="triggerBottomStart?.$el" show>
      <p>bottom-start</p>
    </Popover>

    <IconButton ref="triggerBottomEnd" border>
      <IconCornerDownLeft size="20" />
    </IconButton>
    <Popover placement="bottom-end" :trigger="triggerBottomEnd?.$el" show>
      <p>bottom-end</p>
    </Popover>

    <IconButton ref="triggerLeft" border>
      <IconArrowLeft size="20" />
    </IconButton>
    <Popover placement="left" :trigger="triggerLeft?.$el" show>
      <p>left</p>
    </Popover>

    <IconButton ref="triggerLeftStart" border>
      <IconCornerLeftDown size="20" />
    </IconButton>
    <Popover placement="left-start" :trigger="triggerLeftStart?.$el" show>
      <p>left-start</p>
    </Popover>

    <IconButton ref="triggerLeftEnd" border>
      <IconCornerLeftUp size="20" />
    </IconButton>
    <Popover placement="left-end" :trigger="triggerLeftEnd?.$el" show>
      <p>left-end</p>
    </Popover>

    <IconButton ref="triggerRight" border>
      <IconArrowRight size="20" />
    </IconButton>
    <Popover placement="right" :trigger="triggerRight?.$el" show>
      <p>right</p>
    </Popover>

    <IconButton ref="triggerRightStart" border>
      <IconCornerRightDown size="20" />
    </IconButton>
    <Popover placement="right-start" :trigger="triggerRightStart?.$el" show>
      <p>right-start</p>
    </Popover>

    <IconButton ref="triggerRightEnd" border>
      <IconCornerRightUp size="20" />
    </IconButton>
    <Popover placement="right-end" :trigger="triggerRightEnd?.$el" show>
      <p>right-end</p>
    </Popover>

    <IconButton ref="triggerTop" border>
      <IconArrowUp size="20" />
    </IconButton>
    <Popover placement="top" :trigger="triggerTop?.$el" show>
      <p>top</p>
    </Popover>

    <IconButton ref="triggerTopStart" border>
      <IconCornerUpRight size="20" />
    </IconButton>
    <Popover placement="top-start" :trigger="triggerTopStart?.$el" show>
      <p>top-start</p>
    </Popover>

    <IconButton ref="triggerTopEnd" border>
      <IconCornerUpLeft size="20" />
    </IconButton>
    <Popover placement="top-end" :trigger="triggerTopEnd?.$el" show>
      <p>top-end</p>
    </Popover>
  </div>
</template>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(4, 200px);
}

.grid > button {
  margin: auto;
}
</style>
