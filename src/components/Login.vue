<template>
<div class="container">
     <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Email</label>
      <input type="text" v-model="email" name="email" placeholder="Email" />
    </div>
    <div class="form-control">
      <label>Password</label>
      <input
        type="text"
        v-model="password"
        name="password"
        placeholder="Password"
      />
    </div>
    
    
    <input type="submit" value="Login" class="btn btn-block" />
  </form>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods: {
            onSubmit(e) {
      e.preventDefault()
      if (!this.email) {
        alert('Please add a task')
        return
      }
      this.login();
      
    },
    async login() {
          let url = "https://localhost:44368/api/account/login";
          const newTask = {
          // id: Math.floor(Math.random() * 100000),
          email: this.email,
          password: this.password,
          }
          try {
                let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(newTask), // Assumes data is in an object called form
                headers: new Headers({
                "Content-Type": "application/json"
              })
            });
          if (response.ok) {
              let token = await response.json();
              localStorage.setItem("token", token.jwt);
              this.$router.push("Overview"); // samme sti som routeren 
          //     let payload = this.parseJwt(token);

          //     Object.keys(payload).forEach((key) => {
          // if (key.indexOf("role") !== -1) {
          //   payload["role"] = payload[key];
          // }

          // if (key.indexOf("emailaddress") !== -1) {
          //   payload["email"] = payload[key];
          // }
          // });
          // localStorage.setItem("email", payload.email);
          // localStorage.setItem("role", payload.role);

              // Change view to some other component // …
          } else {
          alert("Server returned: " + response.statusText);
            }
          } catch (err) {alert("Error: " + err);
        }
        return;
        },
        // parseJwt (token) {
        // var base64Url = token.split('.')[1];
        // var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        // return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        // }).join(''));

        // return JSON.parse(jsonPayload);
        // },  
  },
}
</script>

<style scoped>
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-width: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
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
  width: 20%;
  height: 30px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 15px;
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