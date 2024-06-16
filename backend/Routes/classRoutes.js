const express = require('express');
const classRoutes = express.Router();

/*
@ importing Controllers
*/
const {createClass,getAllClass} = require('../Controller/classController');

    classRoutes.get('/classes',getAllClass);
    classRoutes.post('/classes',createClass);

module.exports = classRoutes