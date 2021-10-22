const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      });
      console.log(`Mongo DB is Connected: ${conn.connection.host}`);
  } catch(err) {
      console.log(err);
      process.exit(1);
  }
}

  const createStudent = function(studentId, course) {
    return db.Student.create(course).then(docStudent => {
      console.log("\n>> Created Student:\n", docStudent);
  
      return db.Student.findByIdAndUpdate(
        studentId,
        { $push: { courses: docStudent._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };

  const run = async function() {
    var student = await createStudent({
      username: "Inva Cako",
      age: "23"
    });
  
    student = await createCourse(student._id, {
      name: "Matematike",
      semester: "I pare",
      startYearAt: Date.now()
    });
    console.log("\n>> Setudent:\n", student);
  
    student = await createCourse(student._id, {
      name: "Informatike",
      semester: "I pare",
      startYearAt: Date.now()
    });
    console.log("\n>> Student:\n", student);
  };