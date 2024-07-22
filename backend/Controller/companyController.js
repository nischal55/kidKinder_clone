const Company = require('../Models/companyModel')

const createCompany = async(req,res,next) =>{
    try{
        let company = await Company.create({...req.body});
        if(company){
            res.send(company)
        }
    }catch(e){
        res.status(500).send(e)
    }

}

const getCompany = async(req,res,next) =>{
    try{
        let company =await Company.find();
        if(company){
            res.send(company);
        }
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports ={createCompany,getCompany}