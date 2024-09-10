<script setup lang="ts">
import { ref } from "vue";
import CButton from "../../CButton/CButton.vue";
import CTextInput from "../../CTextInput/CTextInput.vue";
import CPopover from "../CPopover.vue";

const trigger = ref<InstanceType<typeof CButton> | null>(null);

const show = ref(false);
</script>

<template>
  <CButton ref="trigger" @click="show = true"> Show </CButton>
  <CPopover
    v-if="show"
    disabled-tab-close
    focus-trap
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <CTextInput autofocus />
    <CTextInput />
    <CTextInput />
  </CPopover>
</template>
