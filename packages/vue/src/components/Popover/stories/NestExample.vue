<script setup lang="ts">
import { ref } from "vue";
import CButton from "../../CButton/CButton.vue";
import Popover from "../Popover.vue";
import IconButton from "../../CIconButton/CIconButton.vue";
import { IconMessage2 } from "@tabler/icons-vue";

const trigger1 = ref<InstanceType<typeof CButton> | null>(null);
const show1 = ref(false);

const trigger2 = ref<InstanceType<typeof CButton> | null>(null);
const show2 = ref(false);
</script>

<template>
  <IconButton ref="trigger1" @click="show1 = true">
    <IconMessage2 size="20" />
  </IconButton>
  <Popover
    v-if="show1"
    placement="bottom-start"
    style="padding: 8px"
    :trigger="trigger1?.$el"
    :show="show1"
    @close="show1 = false"
  >
    <IconButton ref="trigger2" @click="show2 = true">
      <IconMessage2 size="20" />
    </IconButton>
    <Popover
      v-if="show2"
      placement="bottom-start"
      :trigger="trigger2?.$el"
      :show="show2"
      @close="show2 = false"
    >
      <div style="font-size: 16px; font-weight: bold; padding: 8px">
        Nested Popover
      </div>
    </Popover>
  </Popover>
</template>
