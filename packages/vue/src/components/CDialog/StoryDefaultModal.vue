<script setup lang="ts">
import { ref, useId, watch } from "vue";
import { IconMessagePlus } from "@tabler/icons-vue";
import CIconButton from "../CIconButton/CIconButton.vue";
import CDialog from "./CDialog.vue";
import CTextInput from "../CTextInput/CTextInput.vue";
import CButton from "../CButton/CButton.vue";

const show = ref(false);
const message = ref("");
const id = useId();

watch(
  () => show.value,
  () => {
    message.value = "";
  },
);
</script>

<template>
  <CIconButton @click="show = true">
    <IconMessagePlus size="20" />
  </CIconButton>

  <CDialog :show="show" title="Add Message" @close="show = false">
    <div style="padding: 8px">
      <CTextInput
        v-model="message"
        :aria-describedby="id"
        autofocus
        label="Message"
      />
      <p :id="id" style="margin: 0">
        <small>Message will be sent to all users</small>
      </p>
      <div
        style="
          display: flex;
          gap: 8px;
          justify-content: right;
          margin-top: 16px;
        "
      >
        <CButton size="S" variant="transparent" @click="show = false">
          Cancel
        </CButton>
        <CButton :disabled="!message" size="S" @click="show = false">
          Send
        </CButton>
      </div>
    </div>
  </CDialog>
</template>
