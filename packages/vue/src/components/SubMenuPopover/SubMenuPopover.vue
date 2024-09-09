<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import MenuList from "../MenuList/MenuList.vue";
import Popover from "../Popover/Popover.vue";

const props = defineProps<{
  trigger: HTMLElement | null;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const menuList = ref<InstanceType<typeof MenuList> | null>(null);

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
  <Popover
    placement="right-start"
    :show="true"
    :trigger="trigger"
    @close="emit('close')"
  >
    <MenuList
      ref="menuList"
      :auto-focus="false"
      @keydown.left="focusBackToTrigger"
    >
      <slot></slot>
    </MenuList>
  </Popover>
</template>
