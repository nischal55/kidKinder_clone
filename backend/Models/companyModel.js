const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const companySchema = new Schema({
  company_name : {type:String, required:true},
  company_address : {type:String, required:true},
  company_logo:{type:String, required:true},
  company_address:{type:String, required:true},
  email:{type:String, required:true},
  contact:{type:String, required:true},
  twitter:{type:String},
  facebook:{type:String},
  linkedin:{type:String}
});


const Company = mongoose.model("Company", companySchema);

module.exports = Company