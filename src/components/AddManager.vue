<template>
  <h2>Create Manager</h2>
  <p>Please fill every block before pressing the add button</p>
<div class="k-form">
<div class="h-form"> 
    <div class="form-control">
        <label for="email">Email</label>
        <input type="text" v-model="email" name="email" required>
    </div>
    <div class="form-control">
            <label for="password">Password</label>
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
    </div>
    <input type="button" value="Add Manager" v-on:click="submit" class="btn btn-block"/>
   </div>
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
               // let data = await res.json()
                //this.models = [...this.models,data]
                this.$router.push("ManagerSide");
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
<style scope>
.form-control {
  margin-left: 20px;
  margin-right: 0px;
}
.form-control label {
  display: block;
  font-weight: bold;
}
.h-form{
  background: #f2f2f2;
  width: 600px;
  height: 400px;
  padding: 30px;
}
.k-form{
  height: 500px;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 100px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>