<template>
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
    </template>

<script>
import bgImage from '../assets/horsebackground.jpg'
import logo from '../assets/pocobueno.png'

export default {
  name:'Home',
  data() {
    return {
      bgImage,
      logo
    }
  }    
}
</script>

<style lang="scss" scoped></style>