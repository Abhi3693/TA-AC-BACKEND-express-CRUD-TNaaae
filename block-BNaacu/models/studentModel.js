let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let studentSchema = {
  name: String,
  email: String,
  age: Number,
};

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;
