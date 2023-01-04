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
  color: $customBlack;
  background: $customYellow;
}

.secondary {
  color: $customWhite;
  background: transparent;
}

.secondary:hover {
  background: $customWhite;
  border-color: transparent;
  color: $customBlack;
}

.primary:hover {
  background: transparent;
  border: 2px solid $customWhite;
  color: $customWhite;
}

// .secondary:active,
// .primary:active {
//   color: $secondary;red
//   background-color: linear-gradient(180deg, $primary 0%, $black-green 100%);
//   box-shadow: inset -5px -5px 4px rgba(0, 0, 0, 0.25);
// }

// .sm {
//   padding: 8px 25px;
//   font-size: $fontSizeM;
//   line-height: 31px;
//   min-width: 100px;
// }

.lg {
  padding: 15px 30px;
  font-size: $fontSizeM;
  line-height: 36px;
  min-width: 216px;
  max-height: 68px;
}

.v-btn {
  width: fit-content;
  height: auto !important;
  text-transform: uppercase;
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.02em;
  transition: all 0.5s ease;
}
</style>
