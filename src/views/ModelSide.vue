<template>
<div class="main">
    <h3>You are at modelside, you can:</h3>
    <h3>See list with accepted jobs</h3>
    <h3>Add expenses to job</h3>
</div>  
<Models :models="models" />
</template>

<script>
//import Model from '@/components/Model.vue'
import Models from '@/components/Models.vue'

export default {
    name: 'ModelSide',
    components: {
       // Model,
        Models
    },
    data() {
        return{
            models: [],
        }
    },
    method: {

        async fetchModels(){
            const res = await fetch("https://localhost:44368/api/Models", {
                    method: 'GET',
                    credentials: 'include',
                     headers: {
                        'Authorization': 'Bearer' + localStorage.getItem("token"),
                        'Content Type': 'application/json'
                    },
            }).then(responseJson =>{ this.response =responseJson}).catch(error => alert(alert('Something bad happened ' + error)))
            
            const data = await res.json()
             return data
        },
         async fetchModek(id){
            const res = await fetch(`https://localhost:44368/api/Models/${id}`)

            const data = await res.json()

            return data
    }

    },
    async created(){
    this.models = await this.fetchModels()
  }
   
}
</script>


<style>
/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding:0px 10px;
}
</style>