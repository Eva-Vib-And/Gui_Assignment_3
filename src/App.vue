<template>
<div>
 <Header />
 <!--<Login />-->
<router-view></router-view> 
  <Footer />
</div>

  
</template>

<script>
//import Home from "@/views/Home.vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//import Login from '@/components/Login.vue'


export default {
  name: "App",
  components: {
    Header,
    Footer,
    //Login
  },
}
</script>

<style>
@import url('http://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
font-family: 'Poppins', sans-serif;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
