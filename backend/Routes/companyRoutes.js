const express = require('express');
const companyRoutes = express.Router();

//@importing Controllers
const {createCompany , getCompany} = require('../Controller/companyController');

//Routes related to company data
    companyRoutes.get('/company',getCompany);
    companyRoutes.post('/company',createCompany);

module.exports = companyRoutes;


