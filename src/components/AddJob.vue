<template>
     <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Customer</label>
      <input type="text" v-model="customer" name="customer" placeholder="Add Job" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="startDate"
        name="startDate"
        placeholder="Add startDate"
      />
    </div>
    <input type="submit" value="Save Job" class="btn btn-block" />
  </form>
</template>
<script>
export default {
    name: 'AddJob',
    data(){
        return{
            customer: '',
            startDate: "2021-12-08T13:05:11.752Z",
            days: 0,
            location: "string",
            comments: "string"
        }
    },
    methods: {
            onSubmit(e) {
      e.preventDefault()
      if (!this.text) {
        alert('Please add a job')
        return
      }
      const newJob = {
        customer:this.customer,
        startDate:this.startDate,
        days:this.days,
        location:this.location,
        comments:this.comments,
      }
      this.$emit('add-job', newJob)
      this.customer = ''
      this.startDate=''
      this.days = 0
      this.location =''
      this.comments =''
        },
    },
}
</script>
<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>