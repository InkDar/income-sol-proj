<template>
  <router-link class="link" :to="path">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
// Props
defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  position: relative;
}
</style>
