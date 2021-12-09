<template>
    <div :key="model.id" v-for="model in models">
        <Model @delete-task="$emit('delete-task', model.id)" :job="job" />
    </div>
</template>

<script>
import Model from '@/components/Model.vue'

export default {
    name: 'Models',
    props: {
        models: Array,
    },
    components: {
        Model,
    },
    emits: ['delete-task'],
}
</script>