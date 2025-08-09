import mongoose from '../config/db.js'  
import { Exams } from '../models/examModel.js'
import dotenv from 'dotenv'

dotenv.config()

await mongoose.connect(process.env.MONGO_URI)

await Exams.create({
  title: "Assistant Director II test 19",
  examType: "Assistant Director II",
  questions:[
  {
    "id": 0,
    "question": "A good teacher is one who",
    "options": {
      "a": "gives useful information",
      "b": "inspires students to learn",
      "c": "gives printed notes to students",
      "d": "explains concepts and principles"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 1,
    "question": "Attitudes, actions and appearances in the context of classroom communication are considered as:",
    "options": {
      "a": "Verbal",
      "b": "Irrational",
      "c": "Impersonal",
      "d": "Non-verbal"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 2,
    "question": "Identify the important element a teacher has to take cognizance of while addressing students in a classroom.",
    "options": {
      "a": "Fixed posture",
      "b": "Voice modulation",
      "c": "Repetitive pause",
      "d": "Avoidance of proximity"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 3,
    "question": "Internal and external factors that affect message reception by the students in the classroom are referred to as",
    "options": {
      "a": "noise",
      "b": "feedback",
      "c": "fragmentation",
      "d": "channelization"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 4,
    "question": "Which of the following statement is correct?",
    "options": {
      "a": "Communicator should be soft spoken",
      "b": "Communicator should have fine senses",
      "c": "Communicator should have tolerance power",
      "d": "Communicator should have good personality"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 5,
    "question": "Which of the following statement is correct?",
    "options": {
      "a": "Validity ensures reliability",
      "b": "Reliability ensures validity",
      "c": "Reliability does not depend on objectivity",
      "d": "Reliability and validity are independent of each other"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 6,
    "question": "The most appropriate purpose of learning is __________",
    "options": {
      "a": "personal adjustment",
      "b": "modification of behaviour",
      "c": "social and political awareness",
      "d": "preparing oneself for employment"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 7,
    "question": "According to Swami Vivekananda, teacher's success depends on:",
    "options": {
      "a": "His professional training and creativity",
      "b": "His renunciation of personal gain and service to others",
      "c": "His mastery on the subject and capacity in controlling the students",
      "d": "His concentration on his work and duties with a spirit of obedience to God"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 8,
    "question": "The primary responsibility for the teacher’s adjustment lies with",
    "options": {
      "a": "The principal",
      "b": "The children",
      "c": "The community",
      "d": "The teacher himself"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 9,
    "question": "If a parent approaches the teacher to do some favour to his/her ward in the examination, the teacher should",
    "options": {
      "a": "try to help him",
      "b": "refuse politely and firmly",
      "c": "ask him rudely to go away",
      "d": "ask him not to talk in those terms"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 10,
    "question": "When some students are deliberately attempting to disturb the discipline of the class by making mischief, what will be your role as a teacher?",
    "options": {
      "a": "Isolate those students.",
      "b": "Expelling those students.",
      "c": "Reform the group with your authority.",
      "d": "Giving them an opportunity for introspection and improve their behaviour."
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 11,
    "question": "Dynamic approach to teaching means",
    "options": {
      "a": "Teaching should be forceful and effective",
      "b": "Teachers should be energetic and dynamic",
      "c": "The topics of teaching should not be static, but dynamic",
      "d": "The students should be required to learn through activities"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 12,
    "question": "At the primary school stage, most of the teachers should be women because they",
    "options": {
      "a": "are available on lower salaries.",
      "b": "can teach children better than men.",
      "c": "know basic content better than men.",
      "d": "can deal with children with love and affection."
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 13,
    "question": "CLASS stands for",
    "options": {
      "a": "Complete Literacy and Studies in Schools",
      "b": "Computer Literacy and Studies in Schools",
      "c": "Centre for Literacy and Studies in Schools",
      "d": "Computer Literates and Students in Schools"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 14,
    "question": "Dyslexia is associated with",
    "options": {
      "a": "writing disorder",
      "b": "mental disorder",
      "c": "reading disorder",
      "d": "behavioural disorder"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 15,
    "question": "Which of the following is not a prescribed level of teaching?",
    "options": {
      "a": "Memory",
      "b": "Reflective",
      "c": "Differentiation",
      "d": "Understanding"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 16,
    "question": "Greater the handicap of the students coming to the educational institutions, greater the demand on the:",
    "options": {
      "a": "State",
      "b": "Teacher",
      "c": "Society",
      "d": "Family"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 17,
    "question": "Most often, the teacher - student communication is:",
    "options": {
      "a": "Critical",
      "b": "Utilitarian",
      "c": "Spurious",
      "d": "Confrontational"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 18,
    "question": "A teacher in a classroom has immediate control over",
    "options": {
      "a": "the audience, the noise and the reception.",
      "b": "the feedback, the technology and the audience experience.",
      "c": "the self, selected methods of communication and the message.",
      "d": "the communication channel, other communicators, and external factors."
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 19,
    "question": "The present annual examination system:",
    "options": {
      "a": "promotes rote learning",
      "b": "does not promote good study habits",
      "c": "does not encourage students to be regular in class",
      "d": "all the above"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 20,
    "question": "Which of the following statements is correct?",
    "options": {
      "a": "Syllabus is a part of curriculum.",
      "b": "Syllabus is an annexure to curriculum.",
      "c": "Curriculum is the same in all educational institutions affiliated to a particular university.",
      "d": "Syllabus is not the same in all educational institutions affiliated to a particular university."
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 21,
    "question": "Discussion Method can be used when:",
    "options": {
      "a": "The topic is easy",
      "b": "The topic is difficult",
      "c": "The topic is very difficult",
      "d": "All of the above"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 22,
    "question": "Micro teaching is most effective for the student-teacher:",
    "options": {
      "a": "before the practice-teaching",
      "b": "during the practice-teaching",
      "c": "after the practice-teaching",
      "d": "none of the above"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 23,
    "question": "An effective teacher is one who can:",
    "options": {
      "a": "control the class",
      "b": "motivate students to learn",
      "c": "correct the assignments carefully",
      "d": "give more information in less time"
    },
    "answer": "",
    "score": 1,
    "selectedOption": ""
  },
  
]


})

console.log("Printed Successfully")
process.exit()
