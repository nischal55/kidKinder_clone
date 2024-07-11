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
const bookRoutes = require('./Routes/bookRoutes');
const blogRoutes = require('./Routes/blogRoutes');
const newsRoutes = require('./Routes/newsRoutes');

app.use("/api/",userRoutes);
app.use('/api/',companyRoutes);
app.use('/api/',classRoutes)
app.use('/api/',teacherRoutes)
app.use('/api/',bookRoutes)
app.use('/api/',blogRoutes)
app.use('/api/',newsRoutes)


app.listen(8000);