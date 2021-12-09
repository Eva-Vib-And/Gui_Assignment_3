<template>
    <div :key="job.id" v-for="job in jobs">
        <Job @delete-task="$emit('delete-task', task.id)" :job="job" />
    </div>
</template>

<script>
import Job from '@/components/Job.vue'

export default {
    name: 'Jobs',
    props: {
        jobs: Array,
    },
    components: {
        Job,
    },
    emits: ['delete-task'],
}
</script>