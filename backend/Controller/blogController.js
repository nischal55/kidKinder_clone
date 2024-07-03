const Blog = require('../Models/blogModel');

const createblog = async(req,res)=>{
    try{
        let blog =await Blog.create({...req.body});
        if(blog){
            res.send("Blog Created Successfully")
        }
    }catch(e){
        res.status(500).send(e)
    }
    
}

const getBlogs = async(req,res)=>{
    try{
        let blogs = await Blog.find();
        if(blogs){
            res.send(blogs)
        }
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports={createblog,getBlogs}