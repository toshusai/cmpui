<script setup lang="ts">
import { computed, ref, watch } from "vue";
import CPopover from "../CPopover/CPopover.vue";
import CTextInput from "../CTextInput/CTextInput.vue";
import CListItem from "../CListItem/CListItem.vue";
import { createAutoComplete } from "./libs/createAutoComplete";

const el = ref<InstanceType<typeof CTextInput> | null>(null);

const props = withDefaults(
  defineProps<{
    options: {
      value: string;
    }[];
  }>(),
  {
    options: () => [],
  },
);

const show = ref(false);

const value = defineModel<string>({ default: "" });

const filteredOptions = computed(() => {
  return props.options.filter((option) => option.value.includes(value.value));
});
const popoverRef = ref<HTMLDivElement | null>(null);

watch(
  () => filteredOptions.value,
  () => {
    if (filteredOptions.value.length == 0) {
      show.value = false;
    }

    currentElement.value = null;
  },
);

const currentElement = ref<HTMLElement | null>(null);
const { keydown } = createAutoComplete({
  getCurrentElement: () => currentElement.value,
  getPopoverElement: () => popoverRef.value,
  onChangeElement: (element) => {
    currentElement.value = element;
  },
  onChangeShow: (value) => {
    show.value = value;
  },
  onChangeValue: (newValue) => {
    value.value = newValue;
  },
});
</script>

<template>
  <CTextInput
    ref="el"
    v-model="value"
    autocomplete="off"
    @keydown="keydown"
    @focus="show = true"
  ></CTextInput>

  <CPopover
    v-if="show"
    :trigger="el?.$el"
    :show="show"
    :auto-resize="true"
    fit-trigger
    :disabled-trigger-click-close="true"
    @close="show = false"
  >
    <div ref="popoverRef">
      <CListItem
        v-for="option in filteredOptions"
        :key="option.value"
        :value="option.value"
        tabindex="0"
        data-focusable
        @click="
          value = option.value;
          show = false;
        "
      >
        {{ option.value }}
      </CListItem>
    </div>
  </CPopover>
</template>
