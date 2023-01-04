<template>
  <v-app>
    <layout />
  </v-app>
</template>

<script setup lang="ts">
import layout from './components/layout/index.vue';
</script>

<style lang="scss">
.v-theme--light {
  --v-theme-background: unset !important;
}

#app {
  z-index: 1;
  color: unset !important;
  width: 100%;
  height: 100%;
}
</style>
