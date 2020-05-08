import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: '',
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    settingUser: (state, user) => (state.user = user),
  },
  actions: {
    setUser: async ({ commit }, user) => {
      if (user) {
        commit('settingUser', user)
      } else {
        commit('settingUser', '')
      }
    },
  },
  plugins: [createPersistedState()],
})

export default store
