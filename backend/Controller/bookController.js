const Book = require('../Models/bookModel');

const createBook = async(req,res)=>{
    try{
        let book = await Book.create({...req.body})
        if(book){
            res.send("Booking Completed");
        }
    }catch(e){
        res.status(500).send(e)
        
    }
    
}

const getBooks = async(req,res)=>{
    try{
        let books = await Book.find();
        if(books){
            res.send(books)
        }
    }catch(e){
        res.status(500).send(e)
    }
}
module.exports = {createBook,getBooks};