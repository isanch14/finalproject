<template>
  <div class="bg-red-800">
    <NavBar />
  <div class="min-h-screen shadow-2xl">
      <router-view />
  </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default {
  name: 'MainApp',
  components: {
    Footer,
    NavBar
  }
}
</script>