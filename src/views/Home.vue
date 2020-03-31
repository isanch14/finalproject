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
      <img :src="logo" alt="">
        
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import bgImage from '../assets/horsebackground.jpg'
import logo from '../assets/pocobueno.png'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      bgImage,
      logo
    }
  }
}
</script>
