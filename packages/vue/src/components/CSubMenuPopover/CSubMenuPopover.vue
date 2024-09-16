<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CMenuList from "../CMenuList/CMenuList.vue";
import CPopover from "../CPopover/CPopover.vue";

const props = defineProps<{
  show: boolean;
  trigger: HTMLElement | null;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const menuList = ref<InstanceType<typeof CMenuList> | null>(null);

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "ArrowRight") {
    menuList.value?.$el.focus();
  }
};

onMounted(() => {
  props.trigger?.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  props.trigger?.removeEventListener("keydown", handleKeyDown);
});

const focusBackToTrigger = () => {
  props.trigger?.focus();
  emit("close");
};
</script>

<template>
  <CPopover
    placement="right-start"
    :show="show"
    :trigger="trigger"
    @close="emit('close')"
  >
    <CMenuList
      ref="menuList"
      :auto-focus="false"
      @keydown.left="focusBackToTrigger"
    >
      <slot></slot>
    </CMenuList>
  </CPopover>
</template>
