
const mongoose = require("mongoose");
const courseSchema = require("../../models/courseschema");
const Course = mongoose.model('Course', courseSchema);

const createcourses = async (req, res) => {
    try {
      const newCourse = new Course({
        courseTitle: req.body.courseTitle,
        courseDescription: req.body.courseDescription,
        courseBanner: req.body.courseBanner,
        courseDomain: req.body.courseDomain,
        courseLink: req.body.courseLink,
        courseCost: req.body.courseCost,
      });
      await newCourse.save();
      res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (err) {
      res.status(500).json({ message: 'Error adding course', error: err.message });
    }
}

module.exports = createcourses;

