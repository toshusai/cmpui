<script lang="ts" setup>
import { ref } from "vue";

import Content from "./RootMenuItems.vue";
import MenuListItem from "../../../MenuListItem/MenuListItem.vue";
import CButton from "../../../CButton/CButton.vue";
import Popover from "../../../Popover/Popover.vue";
import MenuList from "../../../MenuList/MenuList.vue";

const trigger = ref<InstanceType<typeof MenuListItem> | null>(null);
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

  <Popover
    v-if="show"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <MenuList>
      <Content @select="handleSelect" />
    </MenuList>
  </Popover>
</template>
