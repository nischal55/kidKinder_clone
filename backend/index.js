const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

app.use(cors())
require('dotenv').config()
mongoose.connect('mongodb://127.0.0.1:27017/kidKinder')
  .then(() => console.log('Connected!'));

app.use(express.json())

//import routes
const userRoutes = require('./Routes/userRoutes');
const companyRoutes = require('./Routes/companyRoutes');
const classRoutes = require('./Routes/classRoutes');
const teacherRoutes = require('./Routes/teacherRoutes')

app.use("/api/",userRoutes);
app.use('/api/',companyRoutes);
app.use('/api/',classRoutes)
app.use('/api/',teacherRoutes)

app.listen(8000);