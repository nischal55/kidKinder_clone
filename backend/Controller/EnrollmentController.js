const Enrollment = require('../Models/EnrollmentModel');


const createEnrollments = async(req,res)=>{
    try{
        let enroll = Enrollment.create({...req});
        if(enroll){
            res.send("Created Successfully")
        }
    }catch(e){
        res.status(500).send(e)
    }



}

const getEnrollments = async(req,res)=>{

    try{
        let enroll = Enrollment.find();
        if(enroll){
            res.send(enroll)
        }
    }catch(e){
        res.status(500).send(e)
    }

}



module.exports={createEnrollments,getEnrollments}