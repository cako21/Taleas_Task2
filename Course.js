const mongoose = require("mongoose");

const Course = mongoose.model( "Course",
  new mongoose.Schema({
    name: String,
    semester: String,
    startYearAt: Date
  })
);

module.exports = Course;