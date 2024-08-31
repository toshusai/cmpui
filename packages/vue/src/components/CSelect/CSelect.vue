<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from "vue";
import Popover from "../Popover/Popover.vue";
import MenuList from "../MenuList/MenuList.vue";
import MenuListItem from "../MenuListItem/MenuListItem.vue";
import { lockScroll } from "../../lib/dialog/lockScroll";
import { SelectProps } from "./types";
import { useId } from "../../lib/useId";

const props = withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  defaultShow: undefined,
  value: undefined,
  label: undefined,
  options: undefined,
});

const emit = defineEmits<{
  (_e: "change", v: string): void;
}>();

const show = ref(props.defaultShow ?? false);
const trigger = ref<HTMLElement | null>(null);

const preview = computed(() => {
  const option = props.options?.find((o) => o.value === props.value);
  if (option) {
    if (option?.render) {
      const v = option.render(props.value);
      return v;
    }
    return option.label;
  }
  return null;
});

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
    @click="handleClick"
  >
    <span v-if="typeof preview === 'string'">{{ preview }}</span>
    <component :is="preview" v-else />
    <div class="cmpui_select__keyboard-arrow-down-icon"></div>
    <label v-if="label" :id="labelId" className="cmpui_select__label" :for="id">
      {{ label }}
    </label>
  </button>

  <Popover v-if="show" :show="show" :trigger="trigger" @close="show = false">
    <MenuList
      :id="popupId"
      :default-value="props.value"
      :aria-labelledby="labelId"
      role="listbox"
      @select="handleSelect"
    >
      <MenuListItem
        v-for="option in options"
        :key="option.value"
        rounded
        style="padding-left: 24px; position: relative"
        role="option"
        :value="option.value"
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
