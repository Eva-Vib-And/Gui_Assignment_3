<template>
    <div :key="model.ModelId" v-for="model in models">
        <Model :model="model" />
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
}
</script>