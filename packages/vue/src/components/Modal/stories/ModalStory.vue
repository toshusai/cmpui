<script setup lang="ts">
import { ref } from "vue";
import Button from "../../Button/Button.vue";
import Modal from "../Modal.vue";

const show = ref(false);
</script>

<template>
  <Modal :show="show" title="Confirm" @close="show = false">
    <div style="padding: 8px">
      <p style="font-size: 14px; margin: 0">
        Are you sure you want to delete this item?
      </p>
      <div
        style="display: flex; gap: 8px; justify-content: right; margin-top: 8px"
      >
        <Button size="S" variant="secondary" @click="show = false">
          Cancel
        </Button>
        <Button size="S" @click="show = false">OK</Button>
      </div>
    </div>
  </Modal>
  <Button @click="show = true">Open</Button>
</template>
