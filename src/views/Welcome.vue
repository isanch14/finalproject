<template>
  <v-container fluid>
    <v-flex justify="center" items-center>
        <v-img src="../assets/pocobueno.png" aspect-ratio="2.5" contain></v-img>
    </v-flex>
  </v-container>
</template>

<script>
import logo from '../assets/pocobueno.png'
export default {
  name:'Home',
  data() {
    return {
      logo,
    }
  },
}
</script>