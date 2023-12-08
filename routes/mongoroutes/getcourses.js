const mongoose = require("mongoose");
const courseSchema = require("../../models/courseschema");
const Course = mongoose.model('Course', courseSchema);

const getcourses = async (req, res) => {
}

module.exports = createcourses; 