//Importing User model
const User = require('../Models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createUser = async(req,res,next) =>{
    let hashed_pass = await bcrypt.hash(req.body.password,10);
    try{
        let user = User.create({...req.body,password:hashed_pass})
        if(user){
            res.send(user);
        }
    }catch(e){
        res.send(e)
    }
}

const getAllUser = async(req,res,next) =>{
    try{
        let user =await User.find();
        if(user){
            res.send(user)
        }
    }catch(e){
        res.status(401).send(e)
    }
}

const loginUser = async(req,res,next)=>{
    
        let user = await User.findOne({username:req.body.username}).select('+password');
        if(user){
           let matched = await bcrypt.compare(req.body.password,user.password);
            if(matched){
                user = user.toObject();
                user.password = undefined;
                const token = jwt.sign(user,process.env.JWT_SECRET,{expiresIn:"7d"});
                res.send({user,token})
            }else{
                res.status(500).send("Invalid Credentials");
            }
        }
    
}


module.exports={createUser,getAllUser,loginUser};