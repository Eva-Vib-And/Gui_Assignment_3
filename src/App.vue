<template>
<div v-show="showLogin"/>
  <Login @login="login"/>
<router-view></router-view> 
  <Footer />
  
</template>

<script>
//import Home from "@/views/Home.vue"
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'


export default {
  name: "App",
  components: {
    Footer,
     Login,
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
