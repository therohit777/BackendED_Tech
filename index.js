const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const courseSchema = require('./models/courseschema');
const createcourses = require('./routes/mongoroutes/createcourse');


app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI) 
.then(() => {
    console.log("Connected to MongoDB Atlas"); 
})
.catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error); 
});

const Course = mongoose.model('Course', courseSchema);
app.post('/courses',createcourses);

app.listen(PORT,()=>{
    console.log(`Server is runnig at port ${PORT}`);
})

module.exports = Course;