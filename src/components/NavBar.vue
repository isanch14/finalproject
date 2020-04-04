<template>
  <nav
    class="nav w-screen z-20 text-black"
    :class="ishome ? '' : 'shadow-2xl bg-red-800'"
  >
    <div class="left">
      <router-link to="/" class="font-semibold text-3xl">
        {{$route.name}}
      </router-link>
    </div>
    <div>
      <span v-if="user" class="text-black font-bold mr-8"
        >Welcome <span class="font-normal">{{ user.displayName }}</span></span
      >
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        @click="logOut"
      >
        Logout
      </button>
      <router-link
        class="p-2 mx-1 hover:text-purple-900 hover:bg-gray-300"
        to="/about"
        >About</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 text-black hover:text-purple-900 hover:bg-gray-300"
        to="/private"
        >Private</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    ishome: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut()
      this.$store.dispatch('setUser', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  @apply h-24 fixed px-12 flex justify-between items-center;
}
.link {
  @apply px-2 font-semibold;
  &:hover {
    @apply text-purple-900;
  }
}
</style>
