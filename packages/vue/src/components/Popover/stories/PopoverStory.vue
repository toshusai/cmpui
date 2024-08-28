<script setup lang="ts">
import { ref } from "vue";
import Button from "../../Button/Button.vue";
import Popover from "../Popover.vue";
import MenuList from "../../MenuList/MenuList.vue";
import MenuListItem from "../../MenuListItem/MenuListItem.vue";

const trigger = ref<InstanceType<typeof Button> | null>(null);

const show = ref(false);

const selected = ref<string | null>(null);

const handleSelect = (v: string) => {
  selected.value = v;
  show.value = false;
};
</script>

<template>
  <Button ref="trigger" @click="show = true">
    {{ selected || "Select" }}
  </Button>
  <Popover
    v-if="show"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <MenuList @select="handleSelect">
      <MenuListItem value="Option A">Option A</MenuListItem>
      <MenuListItem value="Option B">Option B</MenuListItem>
      <MenuListItem value="Option C">Option C</MenuListItem>
    </MenuList>
  </Popover>
</template>
