<template>
  <!-- <v-row class="locales-container">
    <v-col cols="auto" class="locales-column d-flex">
      <p @click="locale = 'en'">English</p>
      <v-divider class="bg-secondary" vertical />
      <p @click="locale = 'ru'">Russian</p>
      <v-divider class="bg-secondary" vertical />
      <p @click="locale = 'am'">Armenian</p>
    </v-col>
  </v-row> -->
  <v-row class="mx-0 px-0" id="main-container">
    <v-col>
      <img @click="goToHomepage()" src="@/images/logo.png" alt="Home" title="Home"/>
    </v-col>
    <v-col class="section">
      <a class="link" href="/">{{ t('services') }}</a>
    </v-col>
    <v-col class="section">
      <a class="link" href="/path">{{ t('company') }}</a>
    </v-col>
    <v-col class="section">
      <a class="link" href="/path">{{ t('caseStudies') }}</a>
    </v-col>
    <v-col class="section">
      <a class="link" href="/path">{{ t('career') }}</a>
    </v-col>
    <v-col class="section">
      <a class="link" href="/path">{{ t('blog') }}</a>
    </v-col>
    <v-col class="section">
      <a class="link" href="/path">{{ t('contacts') }}</a>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  let { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global',
  });

  // Methods

  const goToHomepage = () => {
    window.location.href = "/";
  }
</script>

<style scoped lang="scss">
  #main-container{
    margin: 10px 10% !important;

    .section{
      padding: 2% 0;

      .link {
        cursor: pointer;
        text-decoration: none;
        
      }

      .link:hover {
        text-decoration: none;
        color: red !important;
      }

      .link:visited {
        text-decoration: none;
        color: black;
      }
    }
  }

  .locales-container {
    position: relative;
    z-index: 100;
    max-height: 0 !important;

    .locales-column {
      column-gap: 5px;
      cursor: pointer;
    }
  }
</style>
