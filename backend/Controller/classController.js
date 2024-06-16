const Class = require('../Models/classModel');

const createClass = async(req,res,next)=>{
    try{
        let new_class = Class.create({...req.body});
        if(new_class){
            res.send(new_class);
        }
    }catch(e){
        res.status(500).send(e)
    }
}

const getAllClass = async(req,res,next) =>{
    try{
        let classes = await Class.find();
        if(classes){
            res.send(classes)
        }
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createClass,getAllClass}