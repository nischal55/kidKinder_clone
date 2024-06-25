const express = require('express');
const bookRoutes = express.Router();

//Controllers
const {createBook,getBooks} = require('../Controller/bookController');

bookRoutes.post("/books",createBook);
bookRoutes.get("/books",getBooks);

module.exports=bookRoutes;
