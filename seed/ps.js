import mongoose from '../config/db.js';
import { Exams } from '../models/examModel.js';

await mongoose.connect(process.env.MONGO_URI);

await Exams.create({
  title: "Principal Superintendent Test 7",
  examType: 'Principal Superintendent',
  questions: [
  {
    "id": 0,
    "question": "The Ghana Teacher Prize Award 2023 was organized at which place?",
    "options": {
      "a": "Ghana Secondary Technical School (GSTS), Takoradi",
      "b": "Accra International Conference Center",
      "c": "Cape Coast University",
      "d": "Kumasi Technical Institute"
    },
    "answer": "Ghana Secondary Technical School (GSTS), Takoradi",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 1,
    "question": "The prize award given to the outstanding teacher in Ghana Teacher Prize 2023 was ______________",
    "options": {
      "a": "A car",
      "b": "A house worth 450,000.00",
      "c": "Cash prize of 100,000",
      "d": "Scholarship for further studies"
    },
    "answer": "A house worth 450,000.00",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 2,
    "question": "The end-of-term examination conducted in schools are largely ______________",
    "options": {
      "a": "Standardized Tests",
      "b": "Formative Tests",
      "c": "Summative Tests",
      "d": "Diagnostic Tests"
    },
    "answer": "Standardized Tests",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 3,
    "question": "GES is responsible for providing quality education in Ghana at which levels?",
    "options": {
      "a": "Basic and secondary education",
      "b": "Tertiary education",
      "c": "Pre-primary education only",
      "d": "Adult education only"
    },
    "answer": "Basic and secondary education",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 4,
    "question": "Which year did Ghana introduce the Free Senior High School (SHS) policy?",
    "options": {
      "a": "2015",
      "b": "2016",
      "c": "2017",
      "d": "2018"
    },
    "answer": "2017",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 5,
    "question": "The main goal of the STEM education policy in Ghana is to ______________",
    "options": {
      "a": "Promote science, technology, engineering, and mathematics",
      "b": "Increase teacher salaries",
      "c": "Focus on the arts",
      "d": "Build more schools in rural areas"
    },
    "answer": "Promote science, technology, engineering, and mathematics",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 6,
    "question": "The 4Rs introduced in Ghana’s new basic education curriculum stand for ______________",
    "options": {
      "a": "Reading, wRiting, aRithmetic, and Responsibility",
      "b": "Respect, Responsibility, Rights, and Rules",
      "c": "Recreation, Reflection, Research, and Responsibility",
      "d": "Reading, Recreation, Rights, and Research"
    },
    "answer": "Reading, wRiting, aRithmetic, and Responsibility",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 7,
    "question": "Which of the following is not part of the core values of GES?",
    "options": {
      "a": "Professionalism",
      "b": "Discipline",
      "c": "Excellence",
      "d": "Corruption"
    },
    "answer": "Corruption",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 8,
    "question": "Continuous Professional Development (CPD) for teachers in Ghana is aimed at ______________",
    "options": {
      "a": "Improving teacher effectiveness and learning outcomes",
      "b": "Increasing teacher salaries",
      "c": "Building new classrooms",
      "d": "Recruiting more teachers"
    },
    "answer": "Improving teacher effectiveness and learning outcomes",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 9,
    "question": "The National Teachers’ Standards were developed by ______________",
    "options": {
      "a": "GES and NaCCA",
      "b": "MoE and T-TEL",
      "c": "GTEC and NAB",
      "d": "UNESCO and UNICEF"
    },
    "answer": "MoE and T-TEL",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 10,
    "question": "Ghana Teacher Prize 2023 was held in which region?",
    "options": {
      "a": "Western Region",
      "b": "Greater Accra Region",
      "c": "Ashanti Region",
      "d": "Volta Region"
    },
    "answer": "Western Region",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 11,
    "question": "Which organization funds GALOP in Ghana?",
    "options": {
      "a": "World Bank",
      "b": "UNESCO",
      "c": "IMF",
      "d": "Ghana Government"
    },
    "answer": "World Bank",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 12,
    "question": "The main aim of the School Feeding Programme in Ghana is to ______________",
    "options": {
      "a": "Reduce malnutrition and increase school enrollment",
      "b": "Provide employment for caterers",
      "c": "Support local farmers",
      "d": "Train head teachers"
    },
    "answer": "Reduce malnutrition and increase school enrollment",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 13,
    "question": "The GES Promotion Examination mainly assesses ______________",
    "options": {
      "a": "Professionalism, knowledge, and performance",
      "b": "Creativity and innovation",
      "c": "Classroom teaching only",
      "d": "Communication skills only"
    },
    "answer": "Professionalism, knowledge, and performance",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 14,
    "question": "The current Education Minister in Ghana is ______________",
    "options": {
      "a": "Yaw Osei Adutwum",
      "b": "Dr. Matthew Opoku Prempeh",
      "c": "Prof. Kwasi Opoku-Amankwa",
      "d": "John Dumelo"
    },
    "answer": "Yaw Osei Adutwum",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 15,
    "question": "The Ghana Tertiary Education Commission (GTEC) was formed in 2020.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 16,
    "question": "Teachers can nominate themselves for the Ghana Teacher Prize.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 17,
    "question": "The GES Council consists of 20 members.",
    "options": { "a": "True", "b": "False" },
    "answer": "False",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 18,
    "question": "Photosynthesis is the process through which trees absorb carbon dioxide and give out oxygen.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 19,
    "question": "The Ghana Accountability for Learning Outcomes Project (GALOP) focuses on improving education in high-performing schools.",
    "options": { "a": "True", "b": "False" },
    "answer": "False",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 20,
    "question": "The GES approved age for voluntary retirement starts at 45 years.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 21,
    "question": "The Ministry of Education is responsible for the formulation of national education policies.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 22,
    "question": "The Ghana Education Service governs pre-tertiary education policies.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 23,
    "question": "Formative evaluation is used to monitor learning progress.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 24,
    "question": "NaCCA stands for National Council for Curriculum and Assessment.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  }
]

});

console.log("saved to database");
process.exit();
