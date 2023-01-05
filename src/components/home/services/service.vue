<template>
  <div class="single-service">
    <v-row>
      <v-col class="d-flex justify-center align-center">
        <img :src="setUrl(getIconName)" alt="" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center align-center mt-5d">
        <li-text size="xxl" font-weight="fw-6" color="customBlack">{{ serviceName }}</li-text>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/runtime-core';
  import liText from '@/components/shared/li-text.vue';

  // Props
  const props = defineProps({
    serviceName: {
      type: String,
      required: true,
    },
  });

  // Data
  const getIconName = computed(() => props.serviceName.toLowerCase().replace(' ', '-'))
  // (service: string) => service.toLowerCase().replace(' ', '-');

  // Methods
  const setUrl = (url: string) => new URL(`../../../images/service-icons/${url}.png`, import.meta.url);
</script>

<style scoped lang="scss">
  .single-service {
    min-width: 500px;
    margin: 10px auto;
    // border: 1px solid black;
  }
</style>
