<!-- SidebarItem.vue -->

<template>
  <li>
    <div class="flex items-center">
      <FontAwesomeIcon :icon="['fas', icon]" class="mr-2" />
      <span>{{ title }}</span>
    </div>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: {
    icon: String,
    title: String,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
/* Add any scoped styles for SidebarItem */
</style>
