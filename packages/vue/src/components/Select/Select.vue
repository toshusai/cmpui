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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      viewBox="0 -960 960 960"
      width="16"
      fill="currentColor"
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
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
        <svg
          v-if="option.value === props.value"
          style="position: absolute; left: 8px"
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          viewBox="0 -960 960 960"
          width="12"
          fill="currentColor"
        >
          <path d="M382-208 122-468l90-90 170 170 366-366 90 90-456 456Z" />
        </svg>
        {{ option.label }}
      </MenuListItem>
    </MenuList>
  </Popover>
</template>
