<script setup lang="ts">
import { ref } from "vue";
import Button from "../../Button/Button.vue";
import Toast from "../Toast.vue";
import ToastProvider from "../ToastProvider.vue";

const forceShow = ref(false);
</script>

<template>
  <div style="height: 500px"></div>
  <ToastProvider>
    <Toast text="Tooltip" :force-show="forceShow">
      <Button>Hover me</Button>
    </Toast>
    <Toast text="Tooltip2">
      <Button>Hover me</Button>
    </Toast>
  </ToastProvider>

  <Button @click="forceShow = !forceShow">Toggle</Button>
  <div style="height: 500px"></div>
</template>
