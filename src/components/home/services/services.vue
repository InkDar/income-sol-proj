<!-- eslint-disable vue/no-template-shadow -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <v-row class="service-text d-flex justify-center align-center">
    <li-text size="xxxl" fontWeight="fw-7" color="customBlack">OUR SERVICES</li-text>
  </v-row>
  <v-row class="d-flex justify-center align-center service-icons">
    <v-row class="services-cont">
      <v-col v-for="(service, index) in services" cols="4" :class="services.length % 3 === 2 ? 'sing-serve' : ''">
        <service :serviceName="service" />
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup lang="ts">
  import service from '@/components/home/services/service.vue';
  import liText from '@/components/shared/li-text.vue';

  // Data
  const services = ['Market Research', 'SEO', 'Digital Marketing', 'Consulting', 'Market Analysis'];
</script>

<style scoped lang="scss">
  .service-text {
    margin-top: 150px !important;

    span {
      text-shadow: -3px -3px 0px $customYellow, -2px -2px 0px $customYellow;
    }
  }

  .service-icons {
    width: 100%;

    .services-cont {
      margin: 70px 5.21% 0 5.21% !important;
      max-width: 1720px;

      .sing-serve:nth-last-child(1) {
        margin: 0 15% 0 1%;
      }

      .sing-serve:nth-last-child(2) {
        margin: 0 1% 0 15%;
      }
    }
  }
</style>
