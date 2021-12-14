<template>

        <h1>List of Models</h1>
    <table>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNo</th>
            <th>Email</th>
        </tr>
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
    },
    async created(){
    this.models = await this.fetchModels()
    console.log('created')
  }
}
</script>

<style scoped>
h1{
    color: black;
    text-align: center;
    margin-right: 100px;
}
table, td, th {
  border: 1px solid black;
  margin: 10px;
  text-align: center;
}
table {
  width: 80%;
  margin-left: 10%;
  border-collapse: collapse;
}
</style>