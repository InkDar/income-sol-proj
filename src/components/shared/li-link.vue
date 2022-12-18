<template>
  <router-link :class="`link ${size} text-${color}`" :to="path"
    ><slot />
    <div :class="`line ${size == 'lg' && 'line-highlight'}`"
  /></router-link>
</template>

<script setup lang="ts">
  // Props
  defineProps({
    size: {
      type: String,
      required: false,
      default: 'lg',
    },
    path: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'customBlack',
    },
  });
</script>

<style scoped lang="scss">
  .link {
    text-decoration: none;
    line-height: 34px;
    position: relative;
  }

  .lg {
    font-size: 26px;
    font-weight: 700;
  }

  .sm {
    font-size: 18px;
    font-weight: 600;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 3px;
    z-index: 5;
    color: $primary;
    transition: transform 580ms cubic-bezier(0.2, 0.1, 0.15, 1.32);
  }

  @keyframes highlight {
    0% {
      transform: unset;
    }

    50% {
      transform: scale(1, 1.5) translateY(-1em);
    }

    100% {
      transform: unset;
    }
  }

  .router-link-exact-active {
    color: $secondary !important;

    .line {
      background-color: $secondary !important;
    }
  }

  .link:hover {
    color: $secondary !important;

    .line {
      animation-duration: 0.4s;
      background-color: $secondary;
    }

    .line-highlight {
      animation-name: highlight;
    }
  }
</style>
