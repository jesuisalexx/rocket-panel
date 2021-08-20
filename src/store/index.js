import { createStore } from 'vuex';

export default createStore({
  state: {
    isSidebarExpanded: false,
  },
  getters: {
    isSidebarExpanded: (state) => state.isSidebarExpanded,
  },
  mutations: {
    SET_SIDEBAR_EXPAND(state, isExpanded) {
      state.isSidebarExpanded = isExpanded;
    },
  },
  actions: {
    toggleSidebar({ state, commit }) {
      const isExpanded = state.isSidebarExpanded;
      commit('SET_SIDEBAR_EXPAND', !isExpanded);
      console.log(state.isSidebarExpanded);
    },
  },
});
