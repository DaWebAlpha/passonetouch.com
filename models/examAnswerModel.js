// ====== /models/examAnswerModel.js ======
import mongoose from '../config/db.js'
import cuid from 'cuid';

const answerSchema = new mongoose.Schema({
  questionId: Number,
  answerGiven: String,
  isCorrect: Boolean,
  correctAnswer: String
});

const examAnswerSchema = new mongoose.Schema({
  _id: { type: String, default: cuid },
  userId: { type: String, required: true, ref: 'User' },
  examId: { type: String, required: true, ref: 'Exam' },
  examTitle: { type: String },
  examType: String,
  answers: [answerSchema],
  submittedAt: { type: Date, default: Date.now },
  score: Number
});

export const ExamAnswer = mongoose.model('ExamAnswer', examAnswerSchema);