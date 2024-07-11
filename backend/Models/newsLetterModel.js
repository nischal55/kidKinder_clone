const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newsLetterSchema = new Schema({
  name: {type:String, required:true},
  email:{
    type: String,
    required: true,
    validate: {
      validator: async (value) => {
        let matched = await mongoose.models.News.findOne({ email: value });
        if (matched) {
          return false;
        }
      },
      message: "email already Registered",
    },
  },

});


const News = mongoose.model("News", newsLetterSchema);

module.exports=News