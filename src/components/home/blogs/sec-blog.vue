<template>
  <v-row class="gridCont">
    <v-col v-for="(blog, index) in blogList.slice(0, 6)">
      <li-blog :index="index" :blog="blog" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import liBlog from '@/Components/home/blogs/li-blog.vue';
  import { onBeforeMount, ref } from 'vue';
  import { key } from '@/store';
  import { useStore } from 'vuex';
  import Blog from '@/types/blog';

  // Data
  const store = useStore(key);
  const blogList = ref([] as Blog[]);


  // Methods
  const getData = (getterName: string) => store.getters[getterName];
  const loadBlogs = async () => {
    return await store.dispatch('loadBlogs');
  }

  onBeforeMount(async () => {
    await loadBlogs();
    blogList.value = getData('getBlogs');
  })
</script>

<style scoped lang="scss">
  .gridCont {
    margin-top: 150px !important;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    gap: 2px 2px;
  }
</style>
