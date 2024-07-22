const express = require('express');
const enrollRoutes = express.Router();

//@Controllers

const {createEnrollments,getEnrollments} = require('../Controller/EnrollmentController');

    enrollRoutes.get('/enrolls',getEnrollments);
    enrollRoutes.post('/enrolls',createEnrollments)


module.exports =enrollRoutes;