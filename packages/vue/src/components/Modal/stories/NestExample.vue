<script setup lang="ts">
import { ref } from "vue";
import Modal from "../Modal.vue";
import CButton from "../../CButton/CButton.vue";

const show = ref(false);
const show2 = ref(false);
</script>

<template>
  <Modal :show="show" title="Confirm" @close="show = false">
    <div style="padding: 8px">
      <p style="font-size: 14px; margin: 0">
        Are you sure you want to delete this item?
      </p>
      <div
        style="display: flex; gap: 8px; justify-content: right; margin-top: 16px"
      >
        <CButton size="S" variant="secondary" @click="show = false">
          Cancel
        </CButton>
        <CButton autofocus size="S" @click="show2 = true">Next</CButton>
      </div>
    </div>

    <Modal :show="show2" title="Confirm2" @close="show2 = false">
      <div style="padding: 8px">
        <p style="font-size: 14px; margin: 0">Are you sure?</p>
        <div
          style="
            display: flex;
            gap: 8px;
            justify-content: right;
            margin-top: 16px;
          "
        >
          <CButton size="S" variant="secondary" @click="show2 = false">
            Cancel
          </CButton>
          <CButton size="S" @click="show2 = false">OK</CButton>
        </div>
      </div>
    </Modal>
  </Modal>
  <CButton @click="show = true">Open</CButton>
</template>
