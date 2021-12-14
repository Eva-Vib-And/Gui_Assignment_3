<template>
    <p>Add or remove model to a desired job</p>
    <p>This function is sadly out of order in the moment :( </p>
   <!-- <p v-for="job in jobs" :key="job.efjobId"> {{job.jobModels}}</p> tester-->
    <table>
        <thead>
            <tr>
                <th>Customer</th>
                <th>Location</th>
                <th>Days</th>
                <th>Start Date</th>
                <th>Comments</th>
            </tr>
        </thead>
        <tr v-for="(job) in jobs" :key="job.Id" >
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
            jobs:[], //this is empty because of an error: "backend.js:727 TypeError: Cannot read properties of null (reading 'component')"
            models:[]
        }
    },
    methods: {
        //gets jobs
        async fetchJobs(){
            try {
                console.log("token"+localStorage.getItem("token"))
                  let res = await fetch("https://localhost:44368/api/Jobs",{
                   method: 'GET',
                   credentials: 'include',
                     headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                })
                if (res.ok) {
               var jobData= await res.json()
               this.fetchJobsWithM(jobData)
               
             }
            }catch (error) {
                alert('Something bad happened ' + error)
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
                alert('Something bad happened ' + error)
            }
           
        },
         fetchJobsWithM(jobData){
         jobData.forEach((job) => {
                    try{
                        //gets jobs with models added
                        var respon = fetch("https://localhost:44368/api/Jobs/"+ job.efJobId, {
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
                console.log('Something bad happened ' + error)
            }
         })
        },
        addM(modelId, jobId) {
            try{
      var res = fetch("https://localhost:44368/api/Jobs/" + jobId + "/model/" + modelId, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
     if (res.ok) {
               // let data = await res.json()
                //this.models = [...this.models,data]
                this.$router.push("ManagerSide");
            }
            }catch (error) { alert(alert('Something bad happened ' + error))
        
        }        
    },
    deleteM(email, jobId) {
      var findModel = this.models.find((model) => model.email == email);
      var modelId = findModel.efModelId;
      console.log("Find", jobId);
      try{
      var res = fetch("https://localhost:44368/api/Jobs/" + jobId + "/model/" + modelId, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }) 
      if (res.ok) {
               // let data = await res.json()
                //this.models = [...this.models,data]
                this.$router.push("ManagerSide");
            }
        }catch (error) {alert(alert('Something bad happened ' + error))
        
        }
    },
    },
    async created(){
    this.models = await this.fetchModels()
     await this.fetchJobs()
    //this.jobs=await this.fetchJobsWithM()
    console.log('created')
  }
}

</script>