import { ActionContext } from 'vuex';
import ActivePage from '@/types/activePage';

export const ActivePageStore = {
  state: {
    currentPage: 'home'
  },
  getters: {
    currentPage(state: ActivePage): string {
      return state.currentPage;
    },
  },
  actions: {
    changeCurrentPage(context: ActionContext<ActivePage, ActivePage>, pageName: string): void {
      context.commit('changeCurrentPage', pageName);
    },
  },
  mutations: {
    changeCurrentPage(state: ActivePage, pageName: string): void {
      state.currentPage = pageName;
    },
  },
};
