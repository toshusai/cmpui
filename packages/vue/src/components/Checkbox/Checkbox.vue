<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
  }>(),
  {
    id: undefined,
    checked: false,
    disabled: false,
    label: undefined,
    onChange: undefined,
  },
);
</script>

<template>
  <div class="cmpui_checkbox__root" :aria-disabled="disabled">
    <div class="cmpui_checkbox__box">
      <input
        :id="id"
        type="checkbox"
        class="cmpui_checkbox__input"
        :disabled="disabled"
        :checked="checked"
        :on-change="checked"
        v-bind="$attrs"
      />
      <div class="cmpui_checkbox__indicator" :data-checked="checked">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          viewBox="0 -960 960 960"
          width="16"
          fill="currentColor"
        >
          <path d="M382-208 122-468l90-90 170 170 366-366 90 90-456 456Z" />
        </svg>
      </div>
    </div>
    <label v-if="$slots.default" class="cmpui_checkbox__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>
