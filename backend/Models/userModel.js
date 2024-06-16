const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, required:true},
  email:{
    type: String,
    required: true,
    validate: {
      validator: async (value) => {
        let matched = await mongoose.models.User.findOne({ email: value });
        if (matched) {
          return false;
        }
      },
      message: "email already used",
    },
  },
  contact: {type:Number,required:true},
  password:{type:String , required:true, select:false},
  role:{type:String, required:true}

});


const User = mongoose.model("User", userSchema);

module.exports=User