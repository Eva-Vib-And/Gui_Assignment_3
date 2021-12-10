<template>
    <h1>Model side with a models fucnction:</h1>
<div :key="model.account">
    <h3>{{model.firstName}}</h3> | {{model.lastName}}
    <h2>{{model.phoneNo}}|{{model.email}}</h2>
</div>
<!-- right know just trying to get it to write something.... not working :(-->
    
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