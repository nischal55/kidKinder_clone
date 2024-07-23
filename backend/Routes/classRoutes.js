const express = require('express');
const classRoutes = express.Router();

/*
@ importing Controllers
*/
const {createClass,getAllClass,deleteClass} = require('../Controller/classController');

    classRoutes.get('/classes',getAllClass);
    classRoutes.post('/classes',createClass);
    classRoutes.delete('/classes/:id',deleteClass);

module.exports = classRoutes