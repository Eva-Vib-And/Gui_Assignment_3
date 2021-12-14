<template>
<div>
    <div>
        <h2>See job list</h2>
    </div>
    <table>
        <tr>
            <th>Customer</th>
            <th>Location</th>
            <th>Start date</th>
            <th>Days</th>
            <th>Comments</th>
        </tr>
        <tr v-for="job in jobs" :key="job.efjobId">
                <td>{{job.customer}}</td>
                <td>{{job.location}}</td>
                <td>{{job.startDate}}</td>
                <td>{{jobs.days}}</td>
                <td>{{jobs.comments}}</td>
        </tr>
    </table>
</div>
   <!-- <p v-for="job in jobs" :key="job.efjobId"> {{job.customer}}|{{job.location}}</p> -->
</template>

<script>
import {getJobs} from "@/Services/getJobs.js"
export default {
    data() {
        return {
            jobs: []
        }
    },
   async mounted() {
        this.jobs = await getJobs();
    }
}
</script>

<style scope>
h2{
    margin: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 20px, 20px, 20px, 20px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>