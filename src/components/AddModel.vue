<template>
   <form @submit="onSubmit" class="add-form"> 
        <div class="form-control">
            <label>Models firstname</label>
             <input type="text" v-model="firstName" name="firstName" placeholder="Add firstName" />
        </div>
        <div class="form-control">
            <label>Models lastname</label>
             <input type="text" v-model="lastName" name="lastName" placeholder="Add lastName" />
        </div>
        <div class="form-control">
            <label>Models email</label>
             <input type="text" v-model="email" name="email" placeholder="Add Email" />
        </div>
        <div class="form-control">
            <label>Models phoneNo</label>
             <input type="text" v-model="phoneNo" name="phoneNo" placeholder="Add phoneNo" />
        </div>
        <div class="form-control">
            <label>Models addresLine1</label>
             <input type="text" v-model="addresLine1" name="addresLine1" placeholder="Add addresLine1" />
        </div>
        <div class="form-control">
            <label>Models addresLine2</label>
             <input type="text" v-model="addresLine2" name="addresLine2" placeholder="Add addresLine2" />
        </div>
        <div class="form-control">
            <label>Models zip</label>
             <input type="text" v-model="zip" name="zip" placeholder="Add zip" />
        </div>
        <div class="form-control">
            <label>Models city</label>
             <input type="text" v-model="city" name="city" placeholder="Add city" />
        </div>
        <div class="form-control">
            <label>Models country</label>
             <input type="text" v-model="country" name="country" placeholder="Add country" />
        </div>
        <div class="form-control">
            <label>Models birthDate</label>
             <input type="text" v-model="birthDate" name="birthDate" placeholder="Add birthDate" />
        </div>
        <div class="form-control">
            <label>Models nationality</label>
             <input type="text" v-model="nationality" name="nationality" placeholder="Add nationality" />
        </div>
        <div class="form-control">
            <label>Models height</label>
             <input type="text" v-model="height" name="height" placeholder="Add height" />
        </div>
        <div class="form-control">
            <label>Models shoeSize</label>
             <input type="text" v-model="shoeSize" name="shoeSize" placeholder="Add shoeSize" />
        </div>
        <div class="form-control">
            <label>Models hairColor</label>
             <input type="text" v-model="hairColor" name="hairColor" placeholder="Add hairColor" />
        </div>
        <div class="form-control">
            <label>Models eyeColor</label>
             <input type="text" v-model="eyeColor" name="eyeColor" placeholder="Add eyeColor" />
        </div>
        <div class="form-control">
            <label>Models comments</label>
             <input type="text" v-model="comments" name="comments" placeholder="Add comments" />
        </div>
        <div class="form-control">
            <label>Models password</label>
             <input type="text" v-model="password" name="password" placeholder="Add password" />
        </div>

        <input type="submit" value="Save Model" class="btn btn-block"/>
   </form>
</template>

<script>
export default {
    name: 'AddModel',
    data(){
        return{
            Account: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNo: "",
            addresLine1: "",
            addresLine2: "",
            zip: "",
            city: "",
            country: "",
            birthDate: "",
            nationality: "",
            height: 0,
            shoeSize: 0,
            hairColor: "",
            eyeColor: "",
            comments: "",
            
        }
    },
    methods: {
        onSubmit(e) {
      e.preventDefault()
      if (!this.text) {
        alert('Please add a model')
        return
      }
      var AddModel = {
            Account: this.Account,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNo: this.phoneNo,
            addresLine1: this.addresLine1,
            addresLine2: this.addresLine2,
            zip: this.zip,
            city: this.city,
            country: this.country,
            birthDate: this.birthDate,
            nationality: this.nationality,
            height: this.height,
            shoeSize: this.shoeSize,
            hairColor: this.hairColor,
            eyeColor: this.eyeColor,
            comments: this.comments,
            password: this.password
      }
      this.$emit('add-model-details', AddModel)
      this.Account =''
      this.firstName =''
      this.lastName =''
      this.email =''
      this.phoneNo =''
      this.addresLine1 =''
      this.addresLine2 =''
      this.zip=''
      this.city=''
      this.country=''
      this.birthDate =''
      this.nationality=''
      this.height=0
      this.shoeSize=0
      this.hairColor=''
      this.eyeColor=''
      this.comments=''
      this.password=''
        },
    },
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