<template>
    <h1>Manager side with a managers job:</h1>
    <h3>Add model</h3>
    <h3>Add Manager</h3>
    <h3>Add Jobs</h3>
    <h3>Add model to Jobs</h3>
    <h3>Delete model from Jobs</h3>
</template>

<script>
export default {
    name: 'Manager',
    props: {
        models: Array,
        jobs: Array,
    },
    components: {
        Jobs,
        Models,
    },
    data() {
        return{
            jobs:[],
            models:[],
        }
    },
    //now get, delete should be here. 
    methods: {
      async getDetails(){
      let res = fetch("https://localhost:44368/api/account/Login", {
      method: 'GET', // Or DELETE
      credentials: 'include',
      headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json'
      }
      }).then(responseJson => {
      this.res = responseJson;
      })
      .catch(error => alert('Something bad happened ' + error));
    },
  
      async Details(){
      this.login = await this.getDetails()
      console.log(Details)
    },

      async fetchJobs(){
      const res = await fetch('api/Jobs')

      const data = await res.json()

      return data
    },
      async fetchJob(id){
        const res = await fetch(`api/Jobs/${id}`)

        const data = await res.json()

        return data
    },
          async fetchModels(){
        const res = await fetch('api/Models')

        const data = await res.json()

        return data
    },
      async fetchModel(id){
        const res = await fetch(`api/Models/${id}`)

        const data = await res.json()

        return data
      
    },
      async created(){
      //this.jobs = await this.fetchJobs()
      //this.models = await this.fetchModels()
    },
  }
}
</script>