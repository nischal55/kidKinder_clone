const express = require('express');
const userRoutes = express.Router();

//importing Controllers
const {createUser,getAllUser,loginUser} = require('../Controller/userController');

//Middlewares
const checkAuthentication = require('../Middleware/auth')

    userRoutes.post('/users',checkAuthentication,createUser);
    userRoutes.get('/users',checkAuthentication,getAllUser);
    userRoutes.get('/users/auth',loginUser);

module.exports=userRoutes;