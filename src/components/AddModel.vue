<template>
   <form @submit="onSubmit" class="add-form"> 
        <div class="form-control">
            <label for="FirstName">Models firstname</label>
             <input type="text" v-model="FirstName" name="FirstName" required />
        </div>
        <div class="form-control">
            <label for="LastName">Models lastname</label>
             <input type="text" v-model="LastName" name="LastName" required />
        </div>
        <div class="form-control">
            <label for="Email">Models email</label>
             <input type="text" v-model="Email" name="Email" required />
        </div>
        <div class="form-control">
            <label for="PhoneNo">Models phoneNo</label>
             <input type="text" v-model="PhoneNo" name="PhoneNo" required />
        </div>
        <div class="form-control">
            <label for="AdressLine1">Models addresLine1</label>
             <input type="text" v-model="AddresLine1" name="AddresLine1" required />
        </div>
        <div class="form-control">
            <label for="AdressLine2">Models addresLine2</label>
             <input type="text" v-model="AddresLine2" name="AddresLine2" />
        </div>
        <div class="form-control">
            <label for="Zip">Models zip</label>
             <input type="text" v-model="Zip" name="Zip" required />
        </div>
        <div class="form-control">
            <label for="City">Models city</label>
             <input type="text" v-model="City" name="City" required />
        </div>
        <div class="form-control">
            <label for="Country">Models country</label>
             <input type="text" v-model="Country" name="Country" required />
        </div>
        <div class="form-control">
            <label for="Birthday">Models birthDate</label>
             <input type="text" v-model="BirthDate" name="BirthDate" required />
        </div>
        <div class="form-control">
            <label for="Nationality">Models nationality</label>
             <input type="text" v-model="Nationality" name="Nationality" required />
        </div>
        <div class="form-control">
            <label for="Height">Models height</label>
             <input type="text" v-model="Height" name="Height" required />
        </div>
        <div class="form-control">
            <label for="ShoeSize">Models shoeSize</label>
             <input type="text" v-model="ShoeSize" name="ShoeSize" required />
        </div>
        <div class="form-control">
            <label for="HairColor">Models hairColor</label>
             <input type="text" v-model="HairColor" name="HairColor" required />
        </div>
        <div class="form-control">
            <label for="EyeColor">Models eyeColor</label>
             <input type="text" v-model="EyeColor" name="EyeColor" required />
        </div>
        <div class="form-control">
            <label for="Comments">Models comments</label>
             <input type="text" v-model="Comments" name="Comments" />
        </div>
        <div class="form-control">
            <label for="PassWord">Models password</label>
             <input type="text" v-model="Password" name="Password" required />
        </div>

        <input type="button" value="Save Model" v-on:click="submit" class="btn btn-block"/>
   </form>
</template>

<script>
export default {
    name: 'AddModel',
    data(){
        return{
            Account: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            PhoneNo: "",
            AddresLine1: "",
            AddresLine2: "",
            Zip: "",
            City: "",
            Country: "",
            BirthDate: "2019-01-06T17:16:40",
            Nationality: "",
            Height: 0,
            ShoeSize: 0,
            HairColor: "",
            EyeColor: "",
            Comments: "",
            
        }
    },
    methods: {
       async submit(){
      var AddModel = {
            Account: this.Account,
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            Password: this.Password,
            PhoneNo: this.PhoneNo,
            AddresLine1: this.AddresLine1,
            AddresLine2: this.AddresLine2,
            Zip: this.Zip,
            City: this.City,
            Country: this.Country,
            BirthDate: this.BirthDate,
            Nationality: this.Nationality,
            Height: parseFloat(this.Height),
            ShoeSize: parseInt(this.ShoeSize),
            HairColor: this.HairColor,
            EyeColor: this.EyeColor,
            Comments: this.Comments,
      }
         try {
          console.log("token"+localStorage.getItem("token"))
          let res = await fetch("https://localhost:44368/api/Models",{
          method: 'POST',
          body: JSON.stringify(AddModel),
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
      this.Account =''
      this.FirstName =''
      this.LastName =''
      this.Email =''
      this.Password=''
      this.PhoneNo =''
      this.AddresLine1 =''
      this.AddresLine2 =''
      this.Zip=''
      this.City=''
      this.Country=''
      this.BirthDate ='2019-01-06T17:16:40'
      this.Nationality=''
      this.Height=''
      this.ShoeSize=''
      this.HairColor=''
      this.EyeColor=''
      this.Comments=''
        },
    },
}
</script>

<style scoped>
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