const express = require('express');
const teacherRoutes = express.Router();

/*
@ importing Controllers
*/
const {createTeacher,getAllTeacher,deleteTeacher} = require('../Controller/teacherController')

    teacherRoutes.get('/teachers',getAllTeacher);
    teacherRoutes.post('/teachers',createTeacher);
    teacherRoutes.delete('/teacher/:id', deleteTeacher)


module.exports = teacherRoutes