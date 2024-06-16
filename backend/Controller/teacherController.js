/*
@ importing Teacher Model
*/
const Teacher = require('../Models/teacherModel');

const createTeacher = async(req,res,next)=>{
    try{
        let teacher = Teacher.create({...req.body});
        if(teacher){
            res.send(teacher);
        }
    }catch(e){
        res.status(500).send(e)
    }
}

const getAllTeacher = async(req,res,next) =>{
    try{
        let teachers = await Teacher.find();
        if(teachers){
            res.send(teachers)
        }
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createTeacher , getAllTeacher}