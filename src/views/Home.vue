<template>
  <div class="main-cont pa-0 ma-0">
    <hero />
  </div>
  <services />
  <sec-blog />
  <about />
  <contact-us />
</template>

<script setup lang="ts">
  import hero from '@/components/home/hero.vue';
  import services from '@/components/home/services/services.vue';
  import secBlog from '@/components/home/blogs/sec-blog.vue';
  import about from '@/components/home/about.vue';
  import contactUs from '@/components/home/contact-us.vue';
</script>

<style scoped lang="scss">
  .main-cont {
    min-width: 1720px;
    max-width: 1720px;
    width: 89.58%;
    min-height: 940px;
    max-height: 940px;
    padding: 2.65% !important;
    background-color: $customBlack;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 0 auto !important;
    margin-top: 31px !important;
  }
</style>

<style lang="scss">
  .v-col {
    margin: 0;
    padding: 0;
  }

  .v-row {
    margin: unset !important;
  }
</style>
