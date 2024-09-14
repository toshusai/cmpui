<script setup lang="ts">
import { h, ref } from "vue";
import { useToastContext } from "../useToast";
import CButton from "../../CButton/CButton.vue";
import ToastContent from "./ToastContent.vue";

const toastCtx = useToastContext();

const id = ref(0);

const addToast = () => {
  toastCtx?.addToast(
    (close) => {
      id.value++;
      return h(ToastContent, {
        onClose: close,
        text: `This is a toast ${id.value}`,
      });
    },
    {
      time: 0,
    },
  );
};
</script>
<template>
  <CButton @click="addToast"> Add toast </CButton>
</template>
