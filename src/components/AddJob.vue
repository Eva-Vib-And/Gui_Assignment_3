<template>
    <div class="form-control">
        <label for="costumer">Customer</label>
        <input type="text" v-model="costumer" name="costumer">
    </div>
    <div class="form-control">
            <label for="startDate">StartDate</label>
             <input type="date" v-model="startDate" name="startDate" />
    </div>
    <div class="form-control">
            <label for="days">Days </label>
             <input type="number" v-model="days" name="days" />
    </div>
    <div class="form-control">
            <label for="location">Location</label>
             <input type="text" v-model="location" name="location" />
    </div>
    <div class="form-control">
            <label for="comments">Comments</label>
             <input type="text" v-model="comments" name="comments" />
    </div>
    <input type="button" value="Add New Job" v-on:click="submit" class="btn btn-block"/>
</template>

<script>
export default {
    name: 'AddJob',
    data(){
        return{
            customer: '',
            startDate: "2021-12-08T13:05:11.752Z",
            days: 0,
            location: "Location",
            comments: "Comment"
        }
    },

    methods: {
      Add() {
        var url = "https://localhost:44368/api/Jobs";
        this.form.days = Number(this.form.days);
        fetch(url, {
          method: 'Post',
          body: JSON.stringify(this.form),
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    this.response = responseJson;
                    this.$router.push('@/views/AddNewJob');
                })
                    .catch(error => alert('Something bad happened: ' + error));
        }
    }
}

</script>
<style scoped>
h2{
    margin: 20px;
    text-align: left;
}
.add-form {
  margin-bottom: 40px;
  margin-right: 10px;
}
.form-control {
  margin: 0px 0;
}
.form-control label {
  display: block;
  font-weight: bold;
}
div {
  background-color: #f2f2f2;
  width: 525px;
  padding: 10px;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 0px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>