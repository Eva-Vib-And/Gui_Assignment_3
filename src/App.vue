<template>
<router-view></router-view>
  <Footer />
  
</template>

<script>
//import Home from "@/views/Home.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
