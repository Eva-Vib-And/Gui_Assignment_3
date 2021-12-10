<template>
    <h1>Model side with a models fucnction:</h1>
<div :key="model.id">
    <h3>{{model.firstName}}</h3> | {{model.lastName}}
    <h2>{{model.phoneNo}}|{{model.email}}</h2>
</div>
<!--<div :key="model.id" v-for="model in model.job"/>-->
    
</template>
<script>
export default {
    name: 'Model',
    props: {
        model:Object,
    },
    //methods with adding expenses
}
</script>