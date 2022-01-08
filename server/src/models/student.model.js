const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: false },
  studentCity: { type: String, required: false },
  studentAge: { type: Number, required: false },
  studentEducation: { type: String, required: false },
  studentGender: { type: String, required: false },
  studentContact: { type: Number, required: false },
});

const Students = mongoose.model("Students", studentSchema);

module.exports = Students;
