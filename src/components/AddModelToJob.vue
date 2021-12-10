<template>
    <h1>Add Model To Job </h1>
    <div class="form-control">
        <label for="JobId">job.id</label>
        <input type="number" v-model="form.jobId" name="jobId">
    </div>
    <div class="form-control">
        <label for="ModelId">model.id</label>
        <input type="number" v-model="form.modelId" name="modelId">
    </div>
    <input type="button" value="Save Manager" v-on:click="submit" class="btn btn-block"/>
</template>

<script>
    export default {
        name: "VNTForm",
        data: () => ({
            form: {
                jobId: "",
                modelId: ""
            }
        }),
        methods: {
            onSubmitForm() {
                
                var url = "https://localhost:44368/api/Jobs/" + this.form.jobId + "/model/" + this.form.modelId;
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(this.form),
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    this.response = responseJson;
                    this.$router.push('ManagerSite');
                })
                    .catch(error => alert('Something bad happened: ' + error));
            }
        }
    }
</script>

<style scoped>
    #results {
        position: fixed;
        right: 0;
        top: 10%;
    }
</style>