import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    SET_LOGIN(state, status) {
      state.isLoggedIn = status;
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
