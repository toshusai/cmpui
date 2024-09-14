<script setup lang="ts">
import CToast from "../CToast/CToast.vue";
import { useToastContext } from "./useToast";

const ctx = useToastContext();
</script>

<template>
  <div v-if="ctx" class="cmpui_toaster">
    <TransitionGroup name="cmpui_toast_transition">
      <CToast
        v-for="t in ctx.getToasts()"
        :key="t.id"
        show
        :time="t.props?.time"
        @close="
          () => {
            if (ctx) {
              ctx.removeToast(t.id);
            }
          }
        "
      >
        <component :is="t.vNode" />
      </CToast>
    </TransitionGroup>
  </div>
</template>
