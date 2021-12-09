<template>
    <h1>Manager side with a managers job:</h1>
    
</template>

<script>
import Jobs from '@/components/Jobs.vue'
import Models from '@/components/Models.vue'

export default {
    name: 'Manager',
    props: {
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
    }
    },
     async created(){
    //this.jobs = await this.fetchJobs()
    //this.models = await this.fetchModels()
  }
}
</script>