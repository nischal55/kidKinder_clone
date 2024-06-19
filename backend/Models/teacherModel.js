const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  teacher_name: {type:String, required:true},
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
  teacherImage:{type:String,required :true},
  contact: {type:Number,required:true},
  twitter:{type:String},
  facebook:{type:String},
  linkedin:{type:String},
  subject:{type:String, required:true}
});


const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports=Teacher