<template>
  <span :class="`${size} ${fontWeight} text-${color}`" @click="$emit('click')">
    <slot />
  </span>
</template>

<script setup lang="ts">
  // Props
  defineProps({
    size: {
      type: String,
      required: false,
      default: 'md',
    },
    color: {
      type: String,
      required: false,
      default: 'customBlack',
    },
    fontWeight: {
      type: String,
      required: false,
      default: 'fw-6',
    }
  });
</script>

<style scoped lang="scss">
  span {
    font-family: 'Nunito';
  }

  .xxxs {
    font-size: $fontSizeXXXS;
  }

  .xxs {
    font-size: $fontSizeXXS;
  }

  .xs {
    font-size: $fontSizeXS;
  }

  .s {
    font-size: $fontSizeS;
  }

  .m {
    font-size: $fontSizeM;
  }

  .l {
    font-size: $fontSizeL;
  }

  .xl {
    font-size: $fontSizeXXL;
  }

  .xxl {
    font-size: $fontSizeXXL;
  }

  .xxxl {
    font-size: $fontSizeXXXL;
  }

  .fw-6 {
    font-weight: 600;
  }

  .fw-7 {
    font-weight: 700;
  }
</style>
