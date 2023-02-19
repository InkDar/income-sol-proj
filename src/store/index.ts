import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { AuthStore } from './auth';
import { BlogStore } from './blog';
import { ActivePageStore } from './activePage';
import Auth from '../types/auth';
import Blog from '@/types/blog';
import ActivePage from '@/types/activePage';


type storeTypes = Auth & Blog & ActivePage;
export const key: InjectionKey<Store<storeTypes>> = Symbol();

export const store = createStore<storeTypes>({
  modules: {
    AuthStore,
    BlogStore,
    ActivePageStore,
  },
  plugins: [
    createPersistedState({
      paths: ['AuthStore'],
    }),
  ],
});
