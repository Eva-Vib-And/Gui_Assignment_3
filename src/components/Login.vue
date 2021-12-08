<template>
     <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            text:'',
            day:'',
            reminder: false
        }
    },
    methods: {
            onSubmit(e) {
      e.preventDefault()
      if (!this.text) {
        alert('Please add a task')
        return
      }
      const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }
      this.$emit('add-task', newTask)
      this.text = ''
      this.day = ''
      this.reminder = false
        },
    },
    async login() {
          let url = "https://localhost:44368/api/account/login";
          try {
                let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(this.form), // Assumes data is in an object called form
                headers: new Headers({
                "Content-Type": "application/json"
              })
            });
          if (response.ok) {
              let token = await response.json();
              localStorage.setItem("token", token.jwt);
              // Change view to some other component // …
          } else {
          alert("Server returned: " + response.statusText);
            }
          } catch (err) {alert("Error: " + err);
        }
      return;
  }
}
</script>