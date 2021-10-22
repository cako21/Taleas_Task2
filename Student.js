const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    username: String,
    age: String,
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ]
  })
);

module.exports = Student;