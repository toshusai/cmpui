<script setup lang="ts">
import { h, ref } from "vue";
import { useToastContext } from "../useToast";
import CButton from "../../CButton/CButton.vue";

const toastCtx = useToastContext();

let id = ref(0);
</script>

<template>
  <CButton
    @click="
      toastCtx?.addToast(() => {
        id++;
        return h('div', `This is a toast ${id}`);
      })
    "
  >
    Add toast
  </CButton>
</template>
