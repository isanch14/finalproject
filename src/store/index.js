import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { db } from '../plugins/firebase'

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
        const userObject = {
          displayName: user.displayName,
          email: user.email,
          roles: {
            user: true,
          },
          lastAccess: new Date(),
        }
        const userRef = db.collection('users').doc(user.uid)
        await userRef.set(userObject, { merge: true })
        const userDB = await userRef.get()
        commit('settingUser', { uid: user.uid, ...userDB.data() })
        await db
        .collection('cart')
        .doc(user.uid)
        .set({
          items: [],
          total: 0,
        })
      } else {
        commit('settingUser', '')
      }
    },
  },
  plugins: [createPersistedState()],
})

export default store
