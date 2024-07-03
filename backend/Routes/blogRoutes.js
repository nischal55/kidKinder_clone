const express = require('express');
const blogRoutes = express.Router();

const checkAuthentication = require('../Middleware/auth')

/*
@Controllers
*/
const {createblog,getBlogs} = require('../Controller/blogController')

blogRoutes.get('/blogs',getBlogs);
blogRoutes.post('/blogs',checkAuthentication,createblog)

module.exports=blogRoutes
