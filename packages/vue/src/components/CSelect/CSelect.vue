<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from "vue";
import Popover from "../CPopover/CPopover.vue";
import CMenuList from "../CMenuList/CMenuList.vue";
import CMenuListItem from "../CMenuListItem/CMenuListItem.vue";
import { lockScroll } from "../../../../core/src/dialog/lockScroll";
import { SelectProps } from "./types";
import { useId } from "../../lib/useId";

const props = withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  defaultShow: undefined,
  label: undefined,
  options: undefined,
});

const value = defineModel<string>();

const show = ref(false);
const trigger = ref<HTMLElement | null>(null);

const preview = computed(() => {
  const option = props.options?.find((o) => o.value === value.value);
  if (option) {
    if (typeof option.label === "string") return option.label;
    return option.label;
  }
  return null;
});

const handleSelect = (v: string) => {
  value.value = v;
  show.value = false;
  trigger.value?.focus();
};

let cleanUp = () => {};

watch(
  () => show.value,
  (show) => {
    if (show) {
      const cleanUpLockScroll = lockScroll();
      cleanUp = () => {
        cleanUpLockScroll();
      };
    } else {
      cleanUp();
    }
  },
);

onUnmounted(() => {
  cleanUp();
});

const enablePointerUpSelect = ref(false);

const handlePointerDown = () => {
  if (props.disabled) return;
  let firstState = show.value;
  show.value = true;

  enablePointerUpSelect.value = false;
  let distance = 0;
  const pointerMove = (e: PointerEvent) => {
    distance += Math.abs(e.movementX) + Math.abs(e.movementY);
    if (distance > 10) {
      enablePointerUpSelect.value = true;
    }
  };

  const pUp = () => {
    if (firstState) {
      show.value = false;
    }
    window.removeEventListener("pointermove", pointerMove);
    window.removeEventListener("pointerup", pUp);
  };

  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerup", pUp);
};

const id = useId();
const labelId = useId();
const popupId = useId();
</script>

<template>
  <button
    :id="id"
    ref="trigger"
    class="cmpui_select__root"
    :disabled="disabled"
    v-bind="$attrs"
    role="combobox"
    :aria-expanded="show"
    :aria-labelledby="labelId"
    :aria-controls="popupId"
    aria-haspopup="listbox"
    @pointerdown="handlePointerDown"
    @keydown.enter="show = true"
    @keydown.space="show = true"
  >
    <div class="cmpui_select__preview">
      <span v-if="typeof preview === 'string'">{{ preview }}</span>
      <component :is="preview" v-else />
    </div>
    <label v-if="label" :id="labelId" class="cmpui_select__label" :for="id">
      {{ label }}
    </label>
  </button>
  <Popover
    v-if="show"
    disabled-trigger-click-close
    auto-resize
    :show="show"
    :trigger="trigger"
    @close="show = false"
  >
    <CMenuList
      :id="popupId"
      :default-value="value"
      :aria-labelledby="labelId"
      role="listbox"
      @select="handleSelect"
    >
      <CMenuListItem
        v-for="option in options"
        :key="option.value"
        rounded
        style="padding-left: 24px; position: relative"
        role="option"
        :value="option.value"
        :data-value="option.value"
        @click="handleSelect(option.value)"
        @pointerup="enablePointerUpSelect ? handleSelect(option.value) : null"
        @keydown.tab="handleSelect(option.value)"
      >
        <div
          v-if="option.value === value"
          class="cmpui_select_check-icon"
          style="position: absolute; left: 8px"
        ></div>
        <component :is="option.label" v-if="typeof option.label !== 'string'" />
        <template v-else>
          {{ option.label }}
        </template>
      </CMenuListItem>
    </CMenuList>
  </Popover>
</template>
