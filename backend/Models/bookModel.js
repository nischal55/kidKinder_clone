const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
  name: {type:String, required:true},
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
  classId:{type:ObjectId, required:true},
  payment_status :{type:String,required:true, default:"false"}
});


const Book = mongoose.model("Book", bookSchema);

module.exports=Book