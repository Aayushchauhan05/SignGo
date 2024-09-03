const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  name: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const QuestionSchema = new Schema({
  image: { type: String },
  option1: { type: OptionSchema, required: true },
  option2: { type: OptionSchema, required: true },
  option3: { type: OptionSchema, required: true },
  option4: { type: OptionSchema, required: true },
});

const QuizSchema = new Schema({
  quizName: { type: String, required: true },
  quizType: { type: String, required: true },
  questions: [QuestionSchema],
  marksObtained: { type: Number, default: 0 },
  checkedBy: { type: String },
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
