<script setup lang="ts">
import { ref } from "vue";
import CPopover from "../CPopover.vue";
import CButton from "../../CButton/CButton.vue";

const trigger1 = ref<InstanceType<typeof CButton> | null>(null);
const show1 = ref(false);

const trigger2 = ref<InstanceType<typeof CButton> | null>(null);
const show2 = ref(false);
</script>

<template>
  <div style="position: absolute; bottom: 24px; display: flex; gap: 16px">
    <CButton ref="trigger1" variant="transparent" @click="show1 = true">
      flit=true
    </CButton>
    <CPopover
      v-if="show1"
      style="padding: 8px"
      :trigger="trigger1?.$el"
      :show="show1"
      @close="show1 = false"
    >
      <div style="font-size: 16px; font-weight: bold; padding: 8px">
        Nested Popover
      </div>
    </CPopover>
    <CButton ref="trigger2" variant="transparent" @click="show2 = true">
      flip=false
    </CButton>
    <CPopover
      v-if="show2"
      :trigger="trigger2?.$el"
      :show="show2"
      :flip="false"
      @close="show2 = false"
    >
      <div style="font-size: 16px; font-weight: bold; padding: 8px">
        Nested Popover
      </div>
    </CPopover>
  </div>
</template>
