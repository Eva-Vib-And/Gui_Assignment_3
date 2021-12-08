<template>
  <div v-show="showAddModel">
  <AddModel @add-model="addModel"/>
</template>

<script>
import AddModel from '@/components/AddModel.vue'

export default {
  name: "App",
  components: {
     AddModel,
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
