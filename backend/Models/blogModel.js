const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {type:String, required:true},
  BlogDesc:{type:String, required:true},
  image_url :{type:String,required:true,}
},{
    timestamps:true
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports=Blog