<template>
    <h2>Add expenses</h2>
    <form class="add-form"> 
    <div class="form-control">
            <label for="text">Expense: </label>
             <input type="text" v-model="text" name="text" required />
    </div>
    <div class="form-control">
            <label for="amount">Amount</label>
             <input type="text" v-model="amount" name="amount" required/>
    </div>
    <div class="form-control">
            <label for="date">Date(YYYY-MM-DD):</label>
             <input type="text" v-model="date" name="date" required/>
    </div>
    <div class="option-form">
        <label for="Job">Select Job: </label>
    <select v-model="jobId">
        <option v-for="job in jobs" v-bind:key="job.efJobId" v-bind:value="job.efJobId">
            {{job.customer}}
        </option>
    </select>
    </div>
    </form>
    

    <button type="button" value="Add Expense" v-on:click="addExpense" class="btn btn-block">Add New Expenses</button>


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
        let res= await fetch("https://localhost:44368/api/Expenses", {
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
<style scope>
h2{
    margin: 20px;
    text-align: left;
}
.option-form {
 margin-left: 20px;
 font-size: 20px;
 margin-bottom: 20px;
 margin-right: 0;
}
.add-form {
  background-color: #f2f2f2;
  width: 950px;
  padding: 0px;
  margin: 300 30 300 0;
}
.form-control {
  margin-left: 20px;
  margin-bottom: 20px;
  width: 500px;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>