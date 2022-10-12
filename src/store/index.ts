import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Auth from '../types/auth';
import { AuthStore } from './auth';

type storeTypes = Auth & null;
export const key: InjectionKey<Store<storeTypes>> = Symbol();

export const store = createStore<storeTypes>({
  modules: {
    AuthStore,
  },
  plugins: [
    createPersistedState({
      paths: ['UserStore', 'AuthStore'],
    }),
  ],
});
