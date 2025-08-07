import mongoose from '../config/db.js'  
import { Exams } from '../models/examModel.js'
import dotenv from 'dotenv'

dotenv.config()

await mongoose.connect(process.env.MONGO_URI)

await Exams.create({
  title: "Assistant Director II test 12",
  examType: "Assistant Director II",
  questions:[
  {
    "id": 0,
    "question": "In Ghanaian schools, the performance of a learner can best be evaluated through ………….. assessments.",
    "options": { "a": "annually", "b": "daily", "c": "monthly", "d": "weekly" },
    "answer": "daily",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 1,
    "question": "What does the term ‘equal educational opportunities’ mean?",
    "options": {
      "a": "All children have access to education",
      "b": "All children have access to quality teaching and learning resources",
      "c": "All children have the type of education which is suitable for their peculiar needs.",
      "d": "All of the above"
    },
    "answer": "All of the above",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 2,
    "question": "Which one of the following refers to a situation where a learner studies simply because work is assigned by the teacher?",
    "options": {
      "a": "Cognitive memorizing",
      "b": "Experimental learning",
      "c": "Sensory learning",
      "d": "None of the above"
    },
    "answer": "Cognitive memorizing",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 3,
    "question": "An assessment that is conducted before the start of teaching or instructions is called ………… assessment.",
    "options": { "a": "diagnostic", "b": "formal", "c": "formative", "d": "summative" },
    "answer": "diagnostic",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 4,
    "question": "The models based on the philosophy that learning occurs when there are changes in mental structure are called ………………. learning models.",
    "options": { "a": "effective", "b": "cognitive", "c": "knowledge", "d": "psychomotor" },
    "answer": "cognitive",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 5,
    "question": "Which of the following is/are termed student-centered learning methods?",
    "options": {
      "a": "I and II only",
      "b": "I, II, and III",
      "c": "II and III only",
      "d": "II only"
    },
    "answer": "II and III only",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 6,
    "question": "The office of the Ministry of Education that houses the Education Management Information System (EMIS) data is",
    "options": {
      "a": "Administration and General Services",
      "b": "Education Reform Secretariat",
      "c": "Free Senior High School Secretariat",
      "d": "Statistics, Research, and Information Management (SRIM)"
    },
    "answer": "Statistics, Research, and Information Management (SRIM)",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 7,
    "question": "The type of test that measures the performance of test takers against the criteria covered in the curriculum is called",
    "options": {
      "a": "aptitude test",
      "b": "criterion-referenced test",
      "c": "diagnostic test",
      "d": "norm-referenced test"
    },
    "answer": "criterion-referenced test",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 8,
    "question": "Teachers could be made accountable when they are given",
    "options": {
      "a": "freedom in the selection of content and methods of teaching",
      "b": "opportunities for professional growth",
      "c": "training in teaching and examination",
      "d": "transfer to places where they want to serve"
    },
    "answer": "freedom in the selection of content and methods of teaching",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 9,
    "question": "When using a problem-solving method, the teacher can",
    "options": {
      "a": "help the learners define what is to be solved",
      "b": "propose ways of obtaining the needed data",
      "c": "set up the problem",
      "d": "test the conclusion"
    },
    "answer": "help the learners define what is to be solved",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 10,
    "question": "Which of the following is/are important in gender equality?",
    "options": {
      "a": "Equal opportunities for males and females",
      "b": "Equal pay for men and women for the same work done",
      "c": "Girls receiving the same level of education as boys",
      "d": "All the above"
    },
    "answer": "All the above",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 11,
    "question": "The Government of Ghana introduced the Capitation Grant Scheme at the beginning of the 2005/2006 academic year with the primary purpose to",
    "options": {
      "a": "demolish the School Management Committee arrangement",
      "b": "discontinue schools from forming canteen committees",
      "c": "make school more open to the public",
      "d": "replace all kinds of fees that were payable by children enrolled in schools"
    },
    "answer": "replace all kinds of fees that were payable by children enrolled in schools",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 12,
    "question": "The Professional requirements of a teacher as explained by UNESCO is/are",
    "options": {
      "a": "innovativeness in approach and teaching strategies",
      "b": "justice to the teaching profession",
      "c": "mastery over the subject and competency for teaching",
      "d": "All of the above"
    },
    "answer": "All of the above",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 13,
    "question": "A junior high school teacher wants her students to acquire a specific skill to undertake a practical task required. Which of the following teaching methods would be the most appropriate?",
    "options": {
      "a": "Demonstration",
      "b": "Discussion",
      "c": "Recitation",
      "d": "Role-play"
    },
    "answer": "Demonstration",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 14,
    "question": "Which of the factors predict improvements in senior high school student learning outcomes?",
    "options": {
      "a": "Learning style",
      "b": "School environment",
      "c": "Socio-Cultural background",
      "d": "All of the above"
    },
    "answer": "All of the above",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 15,
    "question": "The standards-based curriculum was rolled out for the primary schools in Ghana in the academic year 2017/2018.",
    "options": { "a": "True", "b": "False" },
    "answer": "False",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 16,
    "question": "A person who has been exposed to an infectious illness may be quarantined to see if they will become sick.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 17,
    "question": "The aim of schooling is not to develop individual students, but to develop their social, cultural, and economic capital for the advancement of society as a whole.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 18,
    "question": "The release of a teacher from one Directorate of Education to another in the GES system presently depends, in part, on the approval of the teacher’s current District Director of Education.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 19,
    "question": "The Ministry of Education aims to achieve universal access to free, quality, and equitable education for all Ghanaians by 2030.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 20,
    "question": "Effective teaching requires the continuous professional development of teachers in both content knowledge and pedagogical skills.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 21,
    "question": "It is necessary for teachers to understand the emotional and social needs of their students in order to help them develop holistically.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 22,
    "question": "In a student-centered classroom, the teacher takes the role of a facilitator, guiding students to construct their own learning.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 23,
    "question": "The use of digital tools in the classroom is a key factor in promoting active and collaborative learning among students.",
    "options": { "a": "True", "b": "False" },
    "answer": "True",
    "score": 1,
    "selectedOption": ""
  }
]
})

console.log("Printed Successfully")
process.exit()
