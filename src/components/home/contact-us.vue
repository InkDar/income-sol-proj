<template>
  <v-row>
    <v-col class="contactText d-flex align-center justify-center">
      <li-text size="xxxl" font-weight="fw-7" color="customBlack">CONTACT US</li-text>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import liText from '@/components/shared/li-text.vue';
</script>

<style scoped lang="scss">
  .contactText {
    margin-top: 150px;
    margin-bottom: 100px !important;

    span {
      text-shadow: -3px -3px 0px $customYellow, -2px -2px 0px $customYellow;
    }
  }
</style>
