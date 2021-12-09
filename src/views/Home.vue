<template>
   <div v-show="showLogin">
  <Login @login="login"/>
   </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: "Home",
  components: {
     Login,
  },
};
</script>
