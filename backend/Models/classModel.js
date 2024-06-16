const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const classSchema = new Schema({
  title: {type:String, required:true},
  desc: {type:String,required:true},
  ageOfKids:{type:String,required:true},
  totalSeats:{type:String,required:true},
  classTime:{type:String,required:true},
  tutionFee :{type:String , required:true},
  teacherId : {type:ObjectId, required:true},
  classImage : {type:String , required:true}
});


const ClassModel = mongoose.model("Class", classSchema);

module.exports = ClassModel