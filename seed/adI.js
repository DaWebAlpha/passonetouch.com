// seed/adI.js

import mongoose from '../config/db.js';
import { Exams } from '../models/examModel.js';

await mongoose.connect(process.env.MONGO_URI); // connect to your MongoDB

// Optional: clear existing Assistant Director I exams
//await Exams.deleteMany({ examType: 'Assistant Director I' });

// Create new exam
await Exams.create({
  title: 'Assistant Director I TEST 1',
  examType: 'Assistant Director I',
  questions: [
  {
    "id": 0,
    "question": "The learning strategy that utilizes the practice of using both online and in-person learning experiences when teaching students is referred to as",
    "options": { "a": "Zoom learning.", "b": "Virtual learning.", "c": "Blended learning.", "d": "Distance learning." },
    "answer": "Blended learning.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 1,
    "question": "The end-of-term examinations conducted in schools are largely",
    "options": { "a": "An achievement test.", "b": "Aptitude test.", "c": "Intelligence test.", "d": "Standardized achievement test." },
    "answer": "An achievement test.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 2,
    "question": "The pedagogy used to actively engage students in the learning process through the integration of reading, writing, discussion, and practical activities is commonly known as",
    "options": { "a": "Activity-based.", "b": "Student-based.", "c": "Brainstorming.", "d": "Mainstreaming." },
    "answer": "Activity-based.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 3,
    "question": "Evaluation of students is intended to make about their performance.",
    "options": { "a": "Decision", "b": "Judgment", "c": "Suggestion", "d": "Prediction" },
    "answer": "Judgment",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 4,
    "question": "A formal and systematic procedure of getting information about how much students have learned is",
    "options": { "a": "Assessment.", "b": "Evaluation.", "c": "Measurement.", "d": "Test." },
    "answer": "Assessment.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 5,
    "question": "The re-appointment of a teacher who was on interdiction as a result of a disciplinary decision but cleared of all charges is referred to as",
    "options": { "a": "Re-instatement", "b": "Reactivation", "c": "Recruitment", "d": "Replacement" },
    "answer": "Re-instatement",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 6,
    "question": "What is the name of the contract of appointment into the Ghana Education Service (GES) that regulates the relationship between the GES and teachers?",
    "options": { "a": "Scheme of service", "b": "Scheme of work", "c": "Terms and conditions of service", "d": "Workman’s compensation" },
    "answer": "Scheme of service",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 7,
    "question": "Which one of the following statements is true about a double-barreled question?",
    "options": {
      "a": "Convergent and seeks a single answer tied to a specific learning target.",
      "b": "More open and used to direct the exploration of a concept.",
      "c": "Often used at the start of a lesson to grab students’ interest.",
      "d": "Made up of two questions at the same time and only allows one response."
    },
    "answer": "Made up of two questions at the same time and only allows one response.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 8,
    "question": "In an open school climate,",
    "options": {
      "a": "All decisions are made by PTA. Interactions among stakeholders are promoted.",
      "b": "Interactions among stakeholders are promoted.",
      "c": "Parents do not participate in decision making.",
      "d": "School heads interact only with teachers."
    },
    "answer": "Interactions among stakeholders are promoted.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 9,
    "question": "Which one of the following statements is true about school climate and school culture?",
    "options": {
      "a": "The school climate is another word for school culture.",
      "b": "The school climate is part of the school culture.",
      "c": "The school culture is part of the school climate.",
      "d": "The school culture is used in JHS and school climate is used in SHS."
    },
    "answer": "The school climate is part of the school culture.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 10,
    "question": "The culture shared by the school head enables teachers to",
    "options": {
      "a": "Conduct self-assessments of their instructional techniques.",
      "b": "Stay with the instructional pedagogy they are used to.",
      "c": "Work independently in the classroom.",
      "d": "Set the ground rules in the classroom."
    },
    "answer": "Conduct self-assessments of their instructional techniques.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 11,
    "question": "Which of the following statements is true about the culture in the school? The school culture creates conditions for",
    "options": {
      "a": "I, II, and III",
      "b": "I, III, and IV",
      "c": "I, II, and IV",
      "d": "II, III, and IV"
    },
    "answer": "I, II, and IV",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 12,
    "question": "What school culture is being shared by the head?",
    "options": {
      "a": "Reflective practice",
      "b": "Innovative practice",
      "c": "Teacher-centred practice",
      "d": "Student-centred practice"
    },
    "answer": "Reflective practice",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 13,
    "question": "What distinguishes criterion-referenced tests from norm-referenced tests?",
    "options": {
      "a": "Criterion-referenced tests measure a test taker’s performance compared to a specific set of standards and norm-referenced tests make comparisons between individuals",
      "b": "Criterion-referenced tests make comparisons between individuals and norm-referenced tests measure a test taker’s performance compared to a specific set of standards",
      "c": "Criterion-referenced tests resort students and norm-referenced tests make comparisons between individuals.",
      "d": "Criterion-referenced tests make comparisons between individuals and norm-referenced tests report how well students are doing relative to groups of students."
    },
    "answer": "Criterion-referenced tests measure a test taker’s performance compared to a specific set of standards and norm-referenced tests make comparisons between individuals",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 14,
    "question": "Achievement tests are developed to",
    "options": {
      "a": "Measure a learner’s acquisition of skills and knowledge in a given grade level",
      "b": "Determine a learner’s cognitive ability in a given grade level.",
      "c": "Evaluate a learner’s pre-existing knowledge of a subject in a given grade level.",
      "d": "Identify a learner’s strengths and weaknesses in a given grade level"
    },
    "answer": "Measure a learner’s acquisition of skills and knowledge in a given grade level",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 15,
    "question": "Which one of the following statements about the year-round school calendar is not correct? The year-round school calendar increases",
    "options": {
      "a": "Student retention rates.",
      "b": "The functional capacity of a school",
      "c": "Access to remediation opportunities for students.",
      "d": "Need to re-teach skills to students after long vacations."
    },
    "answer": "Need to re-teach skills to students after long vacations.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 16,
    "question": "The National Teachers’ Standards expects teachers to demonstrate which of the following qualities?",
    "options": { "a": "I only", "b": "I and II only", "c": "I, II, and IV only", "d": "II, III, and IV only" },
    "answer": "I and II only",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 17,
    "question": "The National Teachers’ Standards is divided into three main domains, namely",
    "options": {
      "a": "Professional Practice, Professional Associations, Professional License",
      "b": "Professional Practice, Professional Knowledge, Professional License",
      "c": "Professional Values and Attitudes, Professional Associations, Professional Practice",
      "d": "Professional values and attitudes, professional knowledge, professional Practice"
    },
    "answer": "Professional values and attitudes, professional knowledge, professional Practice",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 18,
    "question": "Which learning strategy is the teacher promoting in the school?",
    "options": { "a": "Standards-based learning", "b": "Problem-based learning", "c": "Student-based learning", "d": "Group-based learning" },
    "answer": "Problem-based learning",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 19,
    "question": "The teaching strategy of the teacher is aimed at developing the students",
    "options": { "a": "I and II only", "b": "I, II, III only", "c": "II, III, and IV only", "d": "I, II, III, and IV" },
    "answer": "I, II, III, and IV",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 20,
    "question": "Which one of the following statements is true about the observed teaching strategy?",
    "options": {
      "a": "Students approach a challenge through different routes",
      "b": "Students compete with one another to investigate a challenge",
      "c": "Students depend solely on the teacher for assistance to investigate a challenge",
      "d": "Students apply only a known solution to investigate the challenge"
    },
    "answer": "Students approach a challenge through different routes",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 21,
    "question": "The core element of cooperative learning is to",
    "options": {
      "a": "Encourage contracts between teachers and parents.",
      "b": "Foster student competition rather than student support.",
      "c": "Promote ability groupings.",
      "d": "Showcases the positive effects of interdependence."
    },
    "answer": "Showcases the positive effects of interdependence.",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 22,
    "question": "The teaching strategy consists of the efforts of teachers to respond to variance among learners in the classroom is commonly referred to as",
    "options": { "a": "Team instruction", "b": "Focused instruction", "c": "Differentiated instruction", "d": "Cooperative instruction" },
    "answer": "Differentiated instruction",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 23,
    "question": "When adopting differentiated instruction in teaching, the teacher",
    "options": { "a": "II only", "b": "II and III only", "c": "I, II, and III only", "d": "I, II, III, and IV" },
    "answer": "I, II, III, and IV",
    "score": 1,
    "selectedOption": ""
  },
  {
    "id": 24,
    "question": "What is the difference between content and process in teaching?",
    "options": {
      "a": "Content is how students make sense of what they are asked to learn and Process is what students are asked to learn",
      "b": "Content is how students make sense of what they are asked to learn and Process is what the teacher teaches",
      "c": "Content is what the teacher teaches and Process is how students make sense of what they are asked to learn",
      "d": "Content is what the teacher teaches and Process is what students are asked to learn"
    },
    "answer": "Content is what the teacher teaches and Process is how students make sense of what they are asked to learn",
    "score": 1,
    "selectedOption": ""
  }
]


});

console.log('✅ ADI Exam seeded!');
process.exit();
