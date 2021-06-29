const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    preflocation:{
        type:String,
        required:true
    },
  //  profilepic:{
    //  type:String,
      //  required:true

    //},
    email:{
        type:String,
        required:true 
    },
    dob: { type : String, 
        required:true  }

})

module.exports=mongoose.model('user',userSchema);
