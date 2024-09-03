const mongoose = require('mongoose');

const teacherLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  
  },
  password: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  teacher: {
    type: Boolean,
    required: true
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  quizCreated:{
type:mongoose.Schema.ObjectId,
ref:"quiz"
  }
});

const Teacher = mongoose.model('TeacherLogin', teacherLoginSchema);

module.exports = Teacher;
