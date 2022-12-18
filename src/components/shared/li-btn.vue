<template lang="">
  <v-btn :variant="type === 'secondary' ? 'outlined' : 'contained'" :class="[type, size]"><slot /></v-btn>
</template>

<script setup lang="ts">
  // Props
  defineProps({
    type: {
      type: String,
      default: 'primary',
      required: false,
    },
    size: {
      type: String,
      default: 'lg',
      required: false,
    },
  });
</script>

<style scoped lang="scss">
  .primary {
    color: $background;
    background: linear-gradient(180deg, $primary 0%, $dark-green 100%);
  }

  .secondary {
    color: $secondary;
    background: transparent;
  }

  .secondary:hover {
    background: linear-gradient(180deg, $darkness-green 0%, $dark-green 100%);
    border-color: transparent;
  }

  .primary:hover {
    background: linear-gradient(180deg, $darkness-green 0%, $dark-green 100%);
    border-color: transparent;
    color: $secondary;
  }

  .secondary:active,
  .primary:active {
    color: $secondary;
    background-color: linear-gradient(180deg, $primary 0%, $black-green 100%);
    box-shadow: inset -5px -5px 4px rgba(0, 0, 0, 0.25);
  }

  .sm {
    padding: 8px 25px;
    font-size: $fontSizeSm;
    line-height: 31px;
    min-width: 100px;
  }

  .lg {
    padding: 12px 30px;
    font-size: $fontSizeMd;
    line-height: 36px;
    min-width: 240px;
  }

  .v-btn {
    width: fit-content;
    height: auto !important;
    text-transform: capitalize;
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.02em;
    transition: all 0.5s;
  }
</style>
