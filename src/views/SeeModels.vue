<template>
    <table>
        <tr v-for="model in models" :key="model.efModelId">
            <td >{{model.firstName}}</td>
            <td>{{model.lastName}}</td>
            <td>{{model.phoneNo}}</td>
             <td>{{model.email}}</td>
        </tr>
            </table>
</template>
<script>
export default {
    name: 'SeeModels',
     data() {
        return{
            models: []
        }
    },
    methods: {

        async fetchModels(){
            try {
                console.log("token"+localStorage.getItem("token"))
                  let res = await fetch("https://localhost:44368/api/Models",{
                    method: 'GET',
                    credentials: 'include',
                     headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                })//.then(responseJson =>{ this.response = responseJson}).catch(error => alert(alert('Something bad happened ' + error)))
                if (res.ok) {
                return await res.json()
                //return  data
                }
            }catch (error) {
                alert(alert('Something bad happened ' + error))
            }
           
        },
         /*async fetchModel(id){
            const res = await fetch(`https://localhost:44368/api/Models/${id}`)

            const data = await res.json()

            return data
        }*/

    },
    async created(){
    this.models = await this.fetchModels()
    console.log('created')
  }
}
</script>