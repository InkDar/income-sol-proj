import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { AuthStore } from './auth';
import { BlogStore } from './blog';
import Auth from '../types/auth';
import Blog from '@/types/blog';

type storeTypes = Auth & Blog;
export const key: InjectionKey<Store<storeTypes>> = Symbol();

export const store = createStore<storeTypes>({
  modules: {
    AuthStore,
    BlogStore,
  },
  plugins: [
    createPersistedState({
      paths: ['AuthStore'],
    }),
  ],
});
