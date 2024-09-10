<script setup lang="ts">
import { ref } from "vue";
import CButton from "../../CButton/CButton.vue";
import TextInput from "../../CTextInput/CTextInput.vue";
import Popover from "../Popover.vue";

const trigger = ref<InstanceType<typeof CButton> | null>(null);

const show = ref(false);
</script>

<template>
  <CButton ref="trigger" @click="show = true"> Show </CButton>
  <Popover
    v-if="show"
    disabled-tab-close
    focus-trap
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <TextInput autofocus />
    <TextInput />
    <TextInput />
  </Popover>
</template>
