const express = require('express');
const teacherRoutes = express.Router();

/*
@ importing Controllers
*/
const {createTeacher,getAllTeacher} = require('../Controller/teacherController')

    teacherRoutes.get('/teachers',getAllTeacher);
    teacherRoutes.post('/teachers',createTeacher);

module.exports = teacherRoutes