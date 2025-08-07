// models/examModel.js

import mongoose from '../config/db.js';
import { v4 as uuidv4 } from 'uuid'; // ✅ Use UUID instead of cuid

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: {
    a: String,
    b: String,
    c: String,
    d: String
  },
  answer: String,
  score: { type: Number, default: 1 },
  selectedOption: { type: String, default: '' }
});

const examSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 }, // ✅ Uses UUID to generate unique ID
  title: { type: String, required: true },
  examType: {
    type: String,
    enum: [
      'Principal Superintendent',
      'Assistant Director II',
      'Assistant Director I',
      'Deputy Director',
      'Try',
    ],
    required: true
  },
  questions: [questionSchema],
  duration: { type: Number, default: 600 }, // 10 minutes in seconds
  createdAt: { type: Date, default: Date.now }
});

export const Exams = mongoose.model('Exam', examSchema);
