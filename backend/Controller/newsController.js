const News = require('../Models/newsLetterModel');

const createNewsLetter = async(req,res)=>{
    try{
        let news = await News.create({...req.body});
        if(news){
            res.send("Sucessfully Recorded")
        }
    }catch(e){
        res.status(500).send(e)
    }
    
}

const getNewsLetter = async(req,res)=>{
    try{
        let news = await News.find();
        if(news){
            res.send(news)
        }
    }catch(e){
        res.status(500).send(e)
    }
    
}

module.exports ={createNewsLetter,getNewsLetter}