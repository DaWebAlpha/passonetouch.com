import mongoose from 'mongoose';
import {Exams } from '../models/examModel.js';

import dotenv from 'dotenv';

dotenv.config();


const MONGO_URI = process.env.MONGO_URI;

const seed = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        await Exams.create({
              title: 'Try Test 2',
              examType: 'Try',
              questions: [
            {
              "id": 0,
              "question": "Retrieval of state-dependent memory is improved when:",
              "options": {
                "a": "The environment for encoding is the same as the environment for retrieval",
                "b": "The environment for storage is different from the environment for encoding",
                "c": "The environment for retrieval is the same as the environment for storage",
                "d": "The environment for retrieval is different from the environment for storage"
              },
              "answer": "The environment for encoding is the same as the environment for retrieval",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 1,
              "question": "Which of the following is characteristic of a positive correlation?",
              "options": {
                "a": "Amount of food consumed and your weight",
                "b": "Amount of partying you do and your GPA",
                "c": "Amount of clothes worn and the temperature of the air",
                "d": "Amount of exercise you do and the size of your clothes"
              },
              "answer": "Amount of food consumed and your weight",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 2,
              "question": "Expert teachers are very concerned about:",
              "options": {
                "a": "Being reflective problem solvers",
                "b": "The specific techniques teachers apply",
                "c": "Maintaining classroom discipline",
                "d": "Adhering to lesson plans"
              },
              "answer": "Being reflective problem solvers",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 3,
              "question": "The Carnegie Foundation (1987) reported that teachers felt most involved in making decisions about:",
              "options": {
                "a": "Choosing textbooks",
                "b": "Shaping the curriculum",
                "c": "Setting standards for student behavior",
                "d": "Designing staff development programs"
              },
              "answer": "Shaping the curriculum",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 4,
              "question": "Research suggests that reasons for lack of teacher participation in school-wide decisions stem from:",
              "options": {
                "a": "Teachers have little time or energy for these kinds of activities outside of the classroom",
                "b": "Teachers not wanting to step on administrator's toes",
                "c": "The fact that restructuring adds responsibilities to teachers for which they are not compensated",
                "d": "All of the above"
              },
              "answer": "All of the above",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 5,
              "question": "Educational Psychology is distinct from other branches of psychology because:",
              "options": {
                "a": "Its findings are based upon research",
                "b": "Expert teachers are the researchers versus psychologists",
                "c": "Understanding and improving education is its primary goal",
                "d": "Most educational principles have their foundation in common sense notions regarding teaching"
              },
              "answer": "Understanding and improving education is its primary goal",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 6,
              "question": "................is the transfer of a loan of an employee to another related organization for a specific time period to perform a specific important duty",
              "options": {
                "a": "Re-activation",
                "b": "Replacement",
                "c": "Secondment",
                "d": "Re-engagement"
              },
              "answer": "Secondment",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 7,
              "question": "Which of the following is FALSE regarding a general principle of development?",
              "options": {
                "a": "Development occurs at different rates",
                "b": "Development is rapid and dramatic",
                "c": "Development takes place in a sequence",
                "d": "Development follows a predictable pattern"
              },
              "answer": "Development is rapid and dramatic",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 8,
              "question": "Which is the first stage of Piaget's cognitive development?",
              "options": {
                "a": "Concrete operational",
                "b": "Formal operational",
                "c": "Preoperational",
                "d": "Sensorimotor"
              },
              "answer": "Sensorimotor",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 9,
              "question": "According to Lev Vygotsky, what is the main goal of education?",
              "options": {
                "a": "To provide a safe environment for learning",
                "b": "To scaffold students' cognitive development",
                "c": "To create a cooperative social environment",
                "d": "To promote a student-centered environment"
              },
              "answer": "To scaffold students' cognitive development",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 10,
              "question": "When teachers apply scaffolding in the classroom, they:",
              "options": {
                "a": "Give students the answers directly",
                "b": "Provide temporary support to help students learn independently",
                "c": "Focus on rote memorization",
                "d": "Discourage students from asking questions"
              },
              "answer": "Provide temporary support to help students learn independently",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 11,
              "question": "Which type of motivation comes from within the student rather than external rewards?",
              "options": {
                "a": "Intrinsic motivation",
                "b": "Extrinsic motivation",
                "c": "Social motivation",
                "d": "Academic motivation"
              },
              "answer": "Intrinsic motivation",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 12,
              "question": "A summative assessment is mainly used to:",
              "options": {
                "a": "Provide ongoing feedback during learning",
                "b": "Measure what students have learned at the end of instruction",
                "c": "Diagnose students' prior knowledge",
                "d": "Motivate students throughout a course"
              },
              "answer": "Measure what students have learned at the end of instruction",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 13,
              "question": "Differentiated instruction aims to:",
              "options": {
                "a": "Teach all students in the exact same way",
                "b": "Adapt teaching to meet diverse student needs",
                "c": "Focus only on high-performing students",
                "d": "Use standardized tests for all assessments"
              },
              "answer": "Adapt teaching to meet diverse student needs",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 14,
              "question": "Effective classroom management helps to:",
              "options": {
                "a": "Increase teacher authority only",
                "b": "Create a safe and supportive learning environment",
                "c": "Limit student participation",
                "d": "Promote rote memorization"
              },
              "answer": "Create a safe and supportive learning environment",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 15,
              "question": "Assessment for learning is primarily used to support student progress.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 16,
              "question": "Formative assessment occurs during the learning process rather than at the end.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 17,
              "question": "Students learn best when teaching is tailored to their individual needs.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 18,
              "question": "Providing immediate feedback has no impact on student learning outcomes.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "False",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 19,
              "question": "Motivation in learning can be influenced by students' interests and goals.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 20,
              "question": "In cooperative learning, students work independently rather than together.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "False",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 21,
              "question": "Student engagement increases when lessons relate to real-life contexts.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 22,
              "question": "Summative assessments help teachers adjust instruction in real-time.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "False",
              "score": 1,
              "selectedOption": ""
            },
            {
              "id": 23,
              "question": "Collaborative activities can help develop critical thinking skills in students.",
              "options": {
                "a": "True",
                "b": "False"
              },
              "answer": "True",
              "score": 1,
              "selectedOption": ""
            }
          ]
        })
        console.log("Questions have been uploaded successfully");
    }catch(err){
        console.log("Could not upload test" + err);
    }finally{
        process.exit(0)
    }
}

seed();