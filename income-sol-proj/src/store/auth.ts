import { ActionContext } from 'vuex';
import Auth from '../types/auth';

export const AuthStore = {
  state: {
    loggedIn: false,
    redirected: false,
  },
  getters: {
    isLoggedIn(state: Auth): boolean {
      return state.loggedIn;
    },
    isRedirected(state: Auth): boolean {
      return state.redirected;
    },
  },
  actions: {
    changeAuth(context: ActionContext<Auth, Auth>, data: boolean): void {
      context.commit('changeAuth', data);
    },
    changeRedir(context: ActionContext<Auth, Auth>, data: boolean): void {
      context.commit('changeRedir', data);
    },
  },
  mutations: {
    changeAuth(state: Auth, data: boolean): void {
      state.loggedIn = data;
    },
    changeRedir(state: Auth, data: boolean): void {
      state.redirected = data;
    },
  },
};
