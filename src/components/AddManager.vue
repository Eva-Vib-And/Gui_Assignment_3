<template>
    <div class="form-control">
        <label for="email">Email</label>
        <input type="text" v-model="email" name="email" required>
    </div>
    <div class="form-control">
            <label for="password">password</label>
             <input type="text" v-model="password" name="password" required />
    </div>
    <div class="form-control">
            <label for="managerFName">FirstName </label>
             <input type="text" v-model="managerFName" name="managerFName" required />
    </div>
    <div class="form-control">
            <label for="managerLName">LastName</label>
             <input type="text" v-model="managerLName" name="managerLName" required/>
    </div>
    <input type="button" value="Save Manager" v-on:click="submit" class="btn btn-block"/>
</template>


<script>
export default{
    name: 'AddManager',
     data(){
         return{
         email: "",
         password:"",
         managerFName:"",
         managerLName:"",
         }
     },
     methods:{
       async submit(){
             var AddManager ={
                 email: this.email,
                 password: this.password,
                 managerFName: this.managerFName,
                 managerLName: this.managerLName,
            }
         try {
          //console.log("token"+localStorage.getItem("token"))
          let res = await fetch("https://localhost:44368/api/Managers",{
          method: 'POST',
          body: JSON.stringify(AddManager),
          credentials: 'include',
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
              'Content-Type': 'application/json'
          }

      })//.then(responseJson => {this.response = responseJson;}).catch(error => alert('Something bad happend: ' + error));
        if (res.ok) {
                let data = await res.json()
                this.models = [...this.models,data]
                //this.$router("ManagerSide");
            }
        }catch (error) {
                alert(alert('Something bad happened ' + error))
        }
         this.email=''
         this.password=''
         this.managerFName=''
         this.managerLName=''
        }
     }
}

</script>
<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 0px 0;
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
</style>