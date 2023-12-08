const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseTitle: String,
    courseDescription: String,
    courseBanner: String,
    courseDomain: String,
    courseLink: String,
    courseCost: String,
});

module.exports = courseSchema;