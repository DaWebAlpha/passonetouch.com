import mongoose from '../config/db.js';
import { Exams } from '../models/examModel.js';

// Connect to database
await mongoose.connect(process.env.MONGO_URI);

await Exams.create({
  title: "Principal Superintendent Test 28",
  examType: 'Principal Superintendent',
  questions : 
   [
  {
    id: 0,
    question: "According to John Dewey, schools must prepare students for",
    options: {
      a: "research",
      b: "future life",
      c: "present life",
      d: "entrepreneurship"
    },
    answer: "present life",
    score: 1,
    selectedOption: ""
  },
  {
    id: 1,
    question: "Children are usually egocentric during ________ and _________ stages.",
    options: {
      a: "Sensorimotor, Preoperational",
      b: "Formal operational, Sensorimotor",
      c: "Preoperational, Concrete operational",
      d: "Concrete operational, Formal operational"
    },
    answer: "Sensorimotor, Preoperational",
    score: 1,
    selectedOption: ""
  },
  {
    id: 2,
    question: "The Waldorf education approach emphasizes a balanced development of",
    options: {
      a: "head and heart",
      b: "heart and hands",
      c: "head and hands",
      d: "head, heart, and hands"
    },
    answer: "head, heart, and hands",
    score: 1,
    selectedOption: ""
  },
  {
    id: 3,
    question: "The standard deviation is the __________ of the variance.",
    options: {
      a: "cube",
      b: "cube root",
      c: "square",
      d: "square root"
    },
    answer: "square root",
    score: 1,
    selectedOption: ""
  },
  {
    id: 4,
    question: "The idea of teaching the whole child in the “philosophy of pragmatism in education” means teaching students to be good",
    options: {
      a: "citizens",
      b: "thinkers",
      c: "learners",
      d: "scientists"
    },
    answer: "citizens",
    score: 1,
    selectedOption: ""
  },
  {
    id: 5,
    question: "Curriculum revision should be a/an __________ process.",
    options: {
      a: "gradual",
      b: "abrupt",
      c: "relative",
      d: "continuous"
    },
    answer: "continuous",
    score: 1,
    selectedOption: ""
  },
  {
    id: 6,
    question: "The advocators of philosophy of Pragmatism believe that reality is",
    options: {
      a: "stagnant",
      b: "imagination",
      c: "related to mind",
      d: "constantly changing"
    },
    answer: "constantly changing",
    score: 1,
    selectedOption: ""
  },
  {
    id: 7,
    question: "According to the law of effect, if a stimulus results (SR) in a negative outcome, the SR bond is",
    options: {
      a: "stabilized",
      b: "weakened",
      c: "unsterilized",
      d: "strengthened"
    },
    answer: "weakened",
    score: 1,
    selectedOption: ""
  },
  {
    id: 8,
    question: "The technique of classroom management where the teacher punishes negative behaviors by removing an unruly student from the rest of the class is called",
    options: {
      a: "satiation technique",
      b: "time out technique",
      c: "corporal punishment",
      d: "extinction technique"
    },
    answer: "time out technique",
    score: 1,
    selectedOption: ""
  },
  {
    id: 9,
    question: "An assessment is __________ if it consistently achieves the same results with the same (or similar) students.",
    options: {
      a: "Valid",
      b: "Invalid",
      c: "Reliable",
      d: "Unreliable"
    },
    answer: "Reliable",
    score: 1,
    selectedOption: ""
  },
  {
    id: 10,
    question: "Which from the following is NOT a formal assessment?",
    options: {
      a: "Project",
      b: "Quizzes",
      c: "Interview",
      d: "Observation"
    },
    answer: "Observation",
    score: 1,
    selectedOption: ""
  },
  {
    id: 11,
    question: "According to Socrates, physical objects and events are __________ of their ideal form.",
    options: {
      a: "signs",
      b: "parts",
      c: "images",
      d: "shadows"
    },
    answer: "shadows",
    score: 1,
    selectedOption: ""
  },
  {
    id: 12,
    question: "The simplest skill in cognitive domain of Bloom’s taxonomy is",
    options: {
      a: "evaluating",
      b: "synthesizing",
      c: "remembering",
      d: "understanding"
    },
    answer: "remembering",
    score: 1,
    selectedOption: ""
  },
  {
    id: 13,
    question: "An assessment used to identify difficulties in the learning process is called",
    options: {
      a: "initial assessment",
      b: "formative assessment",
      c: "diagnostic assessment",
      d: "summative assessment"
    },
    answer: "diagnostic assessment",
    score: 1,
    selectedOption: ""
  },
  {
    id: 14,
    question: "The book Emile or “On Education” on the nature of education and man is written by",
    options: {
      a: "Plato",
      b: "Aristotle",
      c: "Rousseau",
      d: "John Dewey"
    },
    answer: "Rousseau",
    score: 1,
    selectedOption: ""
  },
  {
    id: 15,
    question: "A scoring guide used to evaluate the quality of students is called",
    options: {
      a: "rubrics",
      b: "checklists",
      c: "inventories",
      d: "rating scales"
    },
    answer: "rubrics",
    score: 1,
    selectedOption: ""
  },
  {
    id: 16,
    question: "Jean Piaget proposed __________ stages of Cognitive Development.",
    options: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    answer: "4",
    score: 1,
    selectedOption: ""
  },
  {
    id: 17,
    question: "Responses that produce a satisfying effect in a particular situation become __________ to occur again in that situation.",
    options: {
      a: "not likely",
      b: "less likely",
      c: "more likely",
      d: "equally likely"
    },
    answer: "more likely",
    score: 1,
    selectedOption: ""
  },
  {
    id: 18,
    question: "The truth of the conclusion of an inductive argument is",
    options: {
      a: "certain",
      b: "probable",
      c: "experience",
      d: "observation"
    },
    answer: "probable",
    score: 1,
    selectedOption: ""
  },
  {
    id: 19,
    question: "According to Jean Piaget, children are no longer egocentric when entering",
    options: {
      a: "Sensorimotor stage",
      b: "Preoperational stage",
      c: "Formal operational stage",
      d: "Concrete operational stage"
    },
    answer: "Concrete operational stage",
    score: 1,
    selectedOption: ""
  },
  {
    id: 20,
    question: "Rousseau advocated an educational method which consisted of removing the child from",
    options: {
      a: "school",
      b: "burden",
      c: "society",
      d: "past memory"
    },
    answer: "society",
    score: 1,
    selectedOption: ""
  },
  {
    id: 21,
    question: "Plato believed that talent and intelligence are",
    options: {
      a: "distributed genetically",
      b: "distributed gender-wise",
      c: "not distributed genetically",
      d: "not distributed gender-wise"
    },
    answer: "distributed genetically",
    score: 1,
    selectedOption: ""
  },
  {
    id: 22,
    question: "The philosopher who for the first time mentioned the importance of play (or sports) in education was",
    options: {
      a: "Plato",
      b: "Aristotle",
      c: "Socrates",
      d: "John Locke"
    },
    answer: "Plato",
    score: 1,
    selectedOption: ""
  },
  {
    id: 23,
    question: "The concept of pragmatism in educational philosophy says that education should be about",
    options: {
      a: "virtue",
      b: "obedience",
      c: "life and growth",
      d: "shaping good citizens"
    },
    answer: "life and growth",
    score: 1,
    selectedOption: ""
  }
]

});

console.log("saved to database");
process.exit();
