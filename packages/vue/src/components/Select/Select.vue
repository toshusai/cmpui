<script setup lang="ts">
import { computed, onUnmounted, ref, VNode, watch } from "vue";
import Popover from "../Popover/Popover.vue";
import MenuList from "../MenuList/MenuList.vue";
import MenuListItem from "../MenuListItem/MenuListItem.vue";
import { lockScroll } from "../../lib/dialog/lockScroll";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    value?: string;
    defaultShow?: boolean;
    options?: {
      label: string | VNode;
      value: string;
    }[];
  }>(),
  {
    disabled: false,
    defaultShow: undefined,
    value: undefined,
    options: undefined,
  },
);

const emit = defineEmits<{
  (_e: "change", v: string): void;
}>();

const show = ref(props.defaultShow ?? false);
const trigger = ref<HTMLElement | null>(null);

const selectedChild = computed(() => {
  const option = props.options?.find((o) => o.value === props.value);
  return option?.label;
});
const isChildString = computed(() => typeof selectedChild.value === "string");

const handleSelect = (v: string) => {
  emit("change", v);
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

const handleClick = () => {
  show.value = true;
};
</script>

<template>
  <button
    ref="trigger"
    class="cmpui_select__root"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="isChildString">{{ selectedChild }}</span>
    <component :is="selectedChild" v-else />
    <div class="cmpui_select__keyboard-arrow-down-icon"></div>
  </button>

  <Popover v-if="show" :show="show" :trigger="trigger" @close="show = false">
    <MenuList :default-value="props.value" @select="handleSelect">
      <MenuListItem
        v-for="option in options"
        :key="option.value"
        rounded
        :value="option.value"
        style="padding-left: 24px; position: relative"
        role="option"
        @click="handleSelect(option.value)"
      >
        <div
          v-if="option.value === props.value"
          class="cmpui_select_check-icon"
          style="position: absolute; left: 8px"
        ></div>

        {{ option.label }}
      </MenuListItem>
    </MenuList>
  </Popover>
</template>
