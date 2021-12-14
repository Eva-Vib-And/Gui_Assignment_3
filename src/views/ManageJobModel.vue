<template>
    <p>Add or remove model to a desired job</p>
    <table>
        <thead>
            <tr>
                <th>Customer</th>
                <th>Location</th>
                <th>Days</th>
                <th>Start Date</th>
                <th>Comments</th>
                <th>Remove model</th>
                <th>Add model</th>
            </tr>
        </thead>
        <tr v-for="(job,jobIndex) in jobs" :key="jobIndex" >
            <td>{{job.customer}}</td>
            <td>{{job.location}}</td>
            <td>{{job.days}}</td>
            <td>{{job.startDate}}</td>
            <td>{{job.comments}}</td>
        </tr>
        <td>
            <table>
                <tr>
                    <td v-for="(model,modelIndex) in job.models" :key="modelIndex">
                        <a href="#" v-on:click="deleteM(model.email,job.jobId)">Remove {{model.lastName}}</a>
                    </td>
                </tr>
            </table>
        </td>
        <td>
            <table>
                <tr>
                    <td v-for="(model,modelIndex) in job.models" :key="modelIndex">
                        <a href="#" v-on:click="addM(model.efModelId,job.jobId)">Add {{model.lastName}}</a>
                    </td>
                </tr>
            </table>
        </td>
    </table>
</template>

<script>
export default{
    data(){
        return {
            jobs:[],
            models:[]
        }
    },
    methods: {

        //gets jobs
        async fetchJobsWithM(){
            try {
                console.log("token"+localStorage.getItem("token"))
                  let res = await fetch("https://localhost:44368/api/Jobs",{
                    method: 'GET',
                    credentials: 'include',
                     headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                })//.then(responseJson =>{ this.response = responseJson}).catch(error => alert(alert('Something bad happened ' + error)))
                if (res.ok) {
                var data= await res.json()
                data.forEach((job) => {
                    try{
                        //gets jobs with models added
                        var respon = fetch("https://localhost:44368/api/Jobs"+"/"+ job.efJobId, {
                            method: "GET",
                             headers: {headers: {
                             'Authorization': 'Bearer ' + localStorage.getItem("token"),
                             'Content-Type': 'application/json'} 
                 },//<= header end tag
                 })
                 if (respon.ok) {
                    this.jobs= respon.json() 
                 }
                 }catch (error) {
                alert(alert('Something bad happened ' + error))
            }
                })
             }
            }catch (error) {
                alert(alert('Something bad happened ' + error))
            }
        },
        //gets models
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
     await this.fetchJobsWithM()
    //await this.fetchJobsWithM()
    console.log('created')
  }
}

</script>