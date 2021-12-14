<template>
    <p v-for="job in jobs" :key="job.efjobId"> {{job.location}}</p>
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

<style>
</style>