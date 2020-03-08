<template>
  <div class="flex justify-center items-center">
    <div class="h-20 bottom-o py-8 flex">
      <p class="pr-2">&copy; Poco Bueno Ranch</p>
      <a class="facebook" href="https://www.facebook.com/profile.php?id=1808742291" target="_blank"><Facebook /></a>
      <a class="twitter" href="#" target="_blank"><Twitter /></a>
    </div>
  </div>
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook'
import Twitter from 'vue-material-design-icons/Twitter'
export default {
  name: 'Footer',
  components: {
      Facebook,
      Twitter
  }
}
</script>

<style lang="scss" scoped>
.facebook:hover {
  @apply text-green-700;
}
.twitter:hover {
  @apply text-blue-400;
}
</style>
