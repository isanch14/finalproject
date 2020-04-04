<template>
  <div class="pt-24" id="firebaseui-auth-container"></div>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          this.$store.dispatch('setUser', authResult.user)
          this.$router.push('/Private')
          return false
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style lang="scss" scoped></style>