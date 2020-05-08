import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firestore'

Vue.use(firestorePlugin)

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui

export const db = firebase.firestore()