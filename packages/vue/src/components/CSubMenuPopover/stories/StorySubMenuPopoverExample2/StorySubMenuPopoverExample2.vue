<script lang="ts" setup>
import { ref } from "vue";

import Contents from "./Contents.vue";
import CMenuListItem from "../../../CMenuListItem/CMenuListItem.vue";
import CButton from "../../../CButton/CButton.vue";
import CPopover from "../../../CPopover/CPopover.vue";
import CMenuList from "../../../CMenuList/CMenuList.vue";

const trigger = ref<InstanceType<typeof CMenuListItem> | null>(null);
const show = ref(false);
const selected = ref<string | null>(null);

const handleSelect = (v: string) => {
  selected.value = v;
  show.value = false;
};
</script>

<template>
  <CButton ref="trigger" data-testid="trigger" @click="show = true">
    {{ selected ?? "Select" }}
  </CButton>

  <CPopover
    v-if="show"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <CMenuList>
      <Contents @select="handleSelect" />
    </CMenuList>
  </CPopover>
</template>
