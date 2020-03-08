<template>
  <div>
    <NavBar />
    <div
      class="relative h-screen w-screen bg-cover bg-center shadow-2xl"
      :style="`background-image:url(${bgImage})`"
    >
      <div class="h-screen w-screen bg-red-800 opacity-75" />
      <div
      class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center"
      >
        <h1
          class="text-6xl font-bold text-black px-4 hover:bg-white hover:text-blue-800 opacity-75"
        >
          Poco Bueno Ranch
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import bgImage from '../assets/horsebackground.jpg'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      bgImage
    }
  }
}
</script>
