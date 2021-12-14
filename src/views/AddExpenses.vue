<template>
    <p>add expenses</p>
    <div class="form-control">
            <label for="text">Expense: </label>
             <input type="text" v-model="text" name="text" required />
    </div>
    <div class="form-control">
            <label for="amount">amount</label>
             <input type="text" v-model="amount" name="amount" required/>
    </div>
    <div class="form-control">
            <label for="date">Date(YYYY-MM-DD):</label>
             <input type="text" v-model="date" name="date" required/>
    </div>
    <div>
    <select v-model="jobId">
        <option v-for="job in jobs" v-bind:key="job.efJobId" v-bind:value="job.efJobId">
            {{job.customer}}
        </option>
    </select>
    </div>
    

    <button type="button" value="Add Expense" v-on:click="addExpense">Add new expenses</button>


</template>
<script>
//import {addNewExpense} from "@/Services/addExpense.js"
import {getJobs} from "@/Services/getJobs.js"

export default{
    data() {
        return {
            //newExpense: {
                modelId: 0,
                date: "2021-01-06T06:20:10.890Z",
                text: "",
                amount:0,
                expense:[],
            //},
            jobs:[],
            jobId:""
        }
    },
    async mounted(){
        this.jobs = await getJobs();
    },
    methods:{
        async addExpense(){
           var bodydata ={
               text: this.text,
               date: this.date,
               amout: parseFloat(localStorage.getItem("modelId")),
               jobId: this.jobId,
           }
           try{
        let res= await fetch("https://localhost:44368/api/expenses", {
                method: "POST",
                body: JSON.stringify(bodydata),
                credentials:'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        "Content-Type": "application/json"
            }
        
         })//.then(responseJSON =>{this.response = responseJSON
         if (res.ok) {
               // let data = await res.json()
                //this.models = [...this.models,data]
                this.$router.push("ManagerSide");
         }
         }catch (error) {
                alert(alert('Something bad happened ' + error))
        }

         this.text =""
         this.date ="2021-01-06T06:20:10.890Z"
         this.amount=0
                   
        },
    
    }
}
</script>