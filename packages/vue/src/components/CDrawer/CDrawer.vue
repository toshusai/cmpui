<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useDialog } from "../CModal/libs/useDialog";

const elRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  show: boolean;
  title: string;
  position: "left" | "right";
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const { cleanUp } = useDialog(elRef, () => emit("close"));

watchEffect(() => {
  if (!props.show) {
    cleanUp();
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="cmpui_drawer_transition" :duration="250">
      <div
        v-if="show"
        ref="el"
        class="cmpui_drawer__overlay"
        @click="emit('close')"
      >
        <div class="cmpui_drawer" :data-position="position" @click.stop>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
