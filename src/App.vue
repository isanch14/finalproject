<template>
  <div class="min-h-screen bg-red-800">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'MainApp',
  components: {
    Footer
  }
}
</script>