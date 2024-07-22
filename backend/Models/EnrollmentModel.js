const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EnrollmentSchema = new Schema({
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
      StudentName :{type:String, required:true},
      contact :{type:String,required:true},
      ClassId :{type:ObjectId ,required:true, ref:'Class'},
      payment_status :{type:String, required:true, default:'pending'}


 
});


const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

module.exports = EnrollmentModel