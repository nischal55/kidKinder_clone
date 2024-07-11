const express = require('express');
const newsRoutes = express.Router();

//Controllers
const {createNewsLetter,getNewsLetter} = require('../Controller/newsController')

newsRoutes.get('/news',getNewsLetter);
newsRoutes.post('/news',createNewsLetter);

module.exports =newsRoutes;
