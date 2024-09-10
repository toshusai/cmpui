<script setup lang="ts">
import { ref, useId } from "vue";
import CModal from "../CModal.vue";
import CButton from "../../CButton/CButton.vue";
import CIconButton from "../../CIconButton/CIconButton.vue";
import { IconMessagePlus } from "@tabler/icons-vue";
import CTextInput from "../../CTextInput/CTextInput.vue";

const show = ref(false);
const show2 = ref(false);
const message = ref("");
const id = useId();
</script>

<template>
  <CIconButton
    @click="
      show = true;
      message = '';
    "
  >
    <IconMessagePlus size="20" />
  </CIconButton>

  <CModal :show="show" title="Confirm" @close="show = false">
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
    </div>

    <div
      style="display: flex; gap: 8px; justify-content: right; margin-top: 16px"
    >
      <CButton size="S" variant="secondary" @click="show = false">
        Cancel
      </CButton>
      <CButton :disabled="!message" size="S" @click="show2 = true">
        Send
      </CButton>
    </div>

    <CModal :show="show2" title="Confirm" @close="show2 = false">
      <div style="padding: 8px">
        <p style="margin: 0">Are you sure you want to send this message?</p>
        <div
          style="
            display: flex;
            gap: 8px;
            justify-content: right;
            margin-top: 16px;
          "
        >
          <CButton
            autofocus
            size="S"
            variant="secondary"
            @click="show2 = false"
          >
            Cancel
          </CButton>
          <CButton
            size="S"
            @click="
              show = false;
              show2 = false;
            "
          >
            Yes
          </CButton>
        </div>
      </div>
    </CModal>
  </CModal>
</template>
