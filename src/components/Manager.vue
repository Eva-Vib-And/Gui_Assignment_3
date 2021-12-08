<template>
    <h1>Manager side with a managers job:</h1>
    <h3>Add model</h3>
    <h3>Add Manager</h3>
    <h3>Add Jobs</h3>
    <h3>Add model to Jobs</h3>
    <h3>Delete model from Jobs</h3>
</template>

<script>
export default {
    name: 'Manager',
    props: {
        models: Array,
        jobs: Array,

    }
}
</script>