<template><!-- <v-row class="locales-container">
    <v-col cols="auto" class="locales-column d-flex">
      <p @click="locale = 'en'">English</p>
      <v-divider class="bg-secondary" vertical />
      <p @click="locale = 'ru'">Russian</p>
      <v-divider class="bg-secondary" vertical />
      <p @click="locale = 'am'">Armenian</p>
    </v-col>
</v-row> -->
  <v-row class="mx-0 px-0" id="main-container">
    <v-col class="logo">
      <img @click="goToHomepage()" src="@/images/logo.png" alt="Home" title="Home" />
    </v-col>
    <v-col cols="4.5" class="sections pt-3">
      <v-row class="ma-0 pa-0">
        <v-col class="section d-flex align-center justify-center" :class="currentPage === 'home' ? 'sectionActive' : ''">
          <li-link path="/"><li-text size="xs" fontWeight="fw-6" color="customBlack"> HOME </li-text></li-link>
        </v-col>
        <v-col class="section d-flex align-center justify-center">
          <li-link path="/blog"><li-text size="xs" fontWeight="fw-6" color="customBlack"> BLOG </li-text></li-link>
        </v-col>
        <v-col @click="scrollToElement('aboutUs')" class="section d-flex align-center justify-center">
          <li-link path="/about"><li-text size="xs" fontWeight="fw-6" color="customBlack"> ABOUT </li-text></li-link>
        </v-col>
        <v-col @click="scrollToElement('contactUs')" class="section d-flex align-center justify-center">
          <li-link><li-text size="xs" fontWeight="fw-6" color="customBlack"> CONTACTS
            </li-text></li-link>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>

<script setup lang="ts">
  import { computed } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  import { key } from '@/store';
  import { useI18n } from 'vue-i18n';
  import liText from '@/components/shared/li-text.vue';
  import liLink from '@/components/shared/li-link.vue';
  
  // Data
  const store = useStore(key);
  const currentPage = computed((): string => getData('currentPage'))
  
  let { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global',
  });
  
  // Methods
  const getData = (getterName: string) => store.getters[getterName];
  
  const scrollToElement = (targetId: string) => {
    const el = document.getElementById(targetId);
  
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const goToHomepage = () => {
    window.location.href = "/";
  }
</script>

<style scoped lang="scss">
  #main-container {
    margin: 0 0 !important;
    max-height: 140px;
    padding-top: 48px;

    .logo {
      margin-left: 4.95%;
    }

    .sections {
      max-width: 605px;
      max-height: 40px;
      margin-right: 4.5%;

      .section {
        background-color: transparent;
        transition: background-color 0.5s ease;
        border-radius: 20px;

        span {
          cursor: pointer;
          margin: 5px 20px 5px 20px;
        }
      }

      .section:hover {
        background-color: $TransparentYellow;
        transition: background-color 0.5s ease;
      }

      .sectionActive {
        background-color: $TransparentYellow;
      }
    }
  }
</style>
