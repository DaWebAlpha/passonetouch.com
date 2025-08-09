import express from 'express';
import { ensureAdmin, ensureUser } from '../middleware/authmiddleware.js';
import { Exams } from '../models/examModel.js';
import { ExamAnswer } from '../models/examAnswerModel.js';
import { activeUsers } from '../utils/activeUsers.js';


const router = express.Router();



router.get('/privacy', (req, res)=>{
  res.render('privacy', {title: 'Pricay Policy'})
})


router.get('/terms', (req, res)=>{
  res.render('terms', {title: 'Terms of use'})
})


router.get('/cookies', (req, res)=>{
  res.render('cookies', {title: 'Cookie Policy'})
})
// Home
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Register
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page', error: null });
});





// Logout
router.get('/logout', function(req, res){
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/'); 
    }
    res.redirect('/login'); 
  });
});





// Admin dashboard
router.get('/admin/home', ensureAdmin(), (req, res) => {
  res.render('admin/home', {
    title: 'Admin Dashboard',
    username: req.user.username,
  });
});

router.get('/admin/registeredUser', ensureAdmin(), (req, res) => {
  res.render('admin/registeredUser', {
    title: 'All Registered Users',
    username: req.user.username,
  });
});

router.delete('/admin/registeredUser', ensureAdmin(), (req, res) => {
  res.render('admin/registeredUser', {
    title: 'Delete User',
    username: req.user.username,
  });
});






/***************************** START OF PS******************************************/
// PS dashboard
router.get('/users/ps', ensureUser(), async (req, res) => {
  try {
    const userId = req.user._id;
    const takenExams = await ExamAnswer.find({ userId }).sort({ createdAt: -1 });
    const averageScore = takenExams.length
      ? (takenExams.reduce((acc, e) => acc + e.score, 0) / takenExams.length).toFixed(2)
      : null;

    res.render('users/ps/home', {
      title: 'PS Dashboard',
      username: req.user.username,
      takenExams,
      averageScore,
    });
  } catch (err) {
    console.error('Error loading dashboard:', err.message);
    res.status(500).send('Could not load dashboard');
  }
});

// PS - List available exams
router.get('/users/ps/exams', ensureUser(), async (req, res) => {
  const exams = await Exams.find({ examType: 'Principal Superintendent' });
  res.render('users/ps/exams', {
    title: 'Available Exams',
    exams,
    username: req.user.username,
  });
});

// PS - View single exam
router.get('/users/ps/exams/:id', ensureUser(), async (req, res) => {
  const exam = await Exams.findById(req.params.id).lean();
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/ps/examForm', {
    title: exam.title,
    username: req.user.username,
    examId: exam._id.toString(),
    questions: exam.questions,
    duration: exam.duration 
  });
});

// PS - Submit exam
router.post('/users/ps/submit', ensureUser(), async (req, res) => {
  try {
    const { examId, answers } = req.body;

    console.log('📥 req.body:', req.body);

    const exam = await Exams.findById(examId).lean();
    if (!exam) return res.status(404).send('Exam not found');

    console.log('✅ Loaded exam:', exam.title);

    let score = 0;

    const resultAnswers = exam.questions.map((q, index) => {
      const questionIdStr = q.id.toString();
      const userAnswer = answers?.[questionIdStr] || '';
      const correctAnswer = q.answer || '';

      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score += q.score;

      console.log(`--- Question ${index + 1} ---`);
      console.log('🆔 Question ID:', q.id);
      console.log('❓ Question Text:', q.question);
      console.log('📝 User Answer:', userAnswer);
      console.log('✅ Correct Answer:', correctAnswer);
      console.log('🎯 isCorrect:', isCorrect);

      return {
        questionId: q.id,
        questionText: q.question,
        answerGiven: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect
      };
    });

    console.log('🧮 Total Score:', score);
    console.log('📝 Result Answers Array:', resultAnswers);

    const result = await ExamAnswer.create({
      userId: req.user._id,
      examId: exam._id,
      examTitle: exam.title,
      examType: exam.examType,
      answers: resultAnswers,
      score
    });

    res.render('users/ps/result', {
      title: 'Exam Result',
      result,
      total: exam.questions.length,
      questions: exam.questions 
    });
  } catch (err) {
    console.error('❌ Submission failed:', err);
    res.status(500).send('Submission Failed');
  }
});

// PS - View detailed result
router.get('/users/ps/results/:answerId', ensureUser(), async (req, res) => {
  const result = await ExamAnswer.findById(req.params.answerId);
  if (!result) return res.status(404).send('Result not found');

  const exam = await Exams.findById(result.examId);
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/ps/resultDetail', {
    title: 'Exam Details',
    result,
    questions: exam.questions,
    username: req.user.username,
  });
});

// PS - Delete/reset taken exam
router.post('/users/ps/reset/:answerId', ensureUser(), async (req, res) => {
  await ExamAnswer.findByIdAndDelete(req.params.answerId);
  res.redirect('/users/ps');
});

/***************************** END OF PS******************************************/



// ADII dashboard
router.get('/users/adII', ensureUser(), async (req, res) => {
  try {
    const userId = req.user._id;
    const takenExams = await ExamAnswer.find({ userId }).sort({ createdAt: -1 });
    const averageScore = takenExams.length
      ? (takenExams.reduce((acc, e) => acc + e.score, 0) / takenExams.length).toFixed(2)
      : null;

    res.render('users/adII/home', {
      title: 'ADII Dashboard',
      username: req.user.username,
      takenExams,
      averageScore,
    });
  } catch (err) {
    console.error('Error loading dashboard:', err.message);
    res.status(500).send('Could not load dashboard');
  }
});


/* Link to past Questions */
router.get('/users/adII/pastQuestions', ensureUser(), (req, res) =>{
  res.render('users/adII/pastQuestions')
})


router.get('/pastQo/adII2020', ensureUser(), (req, res) =>{
  res.render('users/adII/pastQo/adII2020')
})


router.get('/pastQo/adII2021', ensureUser(), (req, res) =>{
  res.render('users/adII/pastQo/adII2021')
})



router.get('/exams', async (req, res) => {
  const exams = await Exams.find({ examType: 'Try' });
  res.render('users/try/exams', {
    title: 'Available Exams',
    exams,
  });
});

// ADII - List available exams
router.get('/users/adII/exams', ensureUser(), async (req, res) => {
  const exams = await Exams.find({ examType: 'Assistant Director II' });
  res.render('users/adII/exams', {
    title: 'Available Exams',
    exams,
    username: req.user.username,
  });
});

// ADII - View single exam
router.get('/users/adII/exams/:id', ensureUser(), async (req, res) => {
  const exam = await Exams.findById(req.params.id).lean();
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/adII/examForm', {
    title: exam.title,
    username: req.user.username,
    examId: exam._id.toString(),
    questions: exam.questions,
    duration: exam.duration 
  });
});

// ADII - Submit exam
router.post('/users/adII/submit', ensureUser(), async (req, res) => {
  try {
    const { examId, answers } = req.body;

    console.log('📥 req.body:', req.body);

    const exam = await Exams.findById(examId).lean();
    if (!exam) return res.status(404).send('Exam not found');

    console.log('✅ Loaded exam:', exam.title);

    let score = 0;

    const resultAnswers = exam.questions.map((q, index) => {
      const questionIdStr = q.id.toString();
      const userAnswer = answers?.[questionIdStr] || '';
      const correctAnswer = q.answer || '';

      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score += q.score;

      console.log(`--- Question ${index + 1} ---`);
      console.log('🆔 Question ID:', q.id);
      console.log('❓ Question Text:', q.question);
      console.log('📝 User Answer:', userAnswer);
      console.log('✅ Correct Answer:', correctAnswer);
      console.log('🎯 isCorrect:', isCorrect);

      return {
        questionId: q.id,
        questionText: q.question,
        answerGiven: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect
      };
    });

    console.log('🧮 Total Score:', score);
    console.log('📝 Result Answers Array:', resultAnswers);

    const result = await ExamAnswer.create({
      userId: req.user._id,
      examId: exam._id,
      examTitle: exam.title,
      examType: exam.examType,
      answers: resultAnswers,
      score
    });

    res.render('users/adII/result', {
      title: 'Exam Result',
      result,
      total: exam.questions.length,
      questions: exam.questions 
    });
  } catch (err) {
    console.error('❌ Submission failed:', err);
    res.status(500).send('Submission Failed');
  }
});

// ADII - View detailed result
router.get('/users/adII/results/:answerId', ensureUser(), async (req, res) => {
  const result = await ExamAnswer.findById(req.params.answerId);
  if (!result) return res.status(404).send('Result not found');

  const exam = await Exams.findById(result.examId);
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/adII/resultDetail', {
    title: 'Exam Details',
    result,
    questions: exam.questions,
    username: req.user.username,
  });
});

// ADII - Delete/reset taken exam
router.post('/users/adII/reset/:answerId', ensureUser(), async (req, res) => {
  await ExamAnswer.findByIdAndDelete(req.params.answerId);
  res.redirect('/users/adII');
});

/***************************** END OF ADII ******************************************/





/******************************Start of DD Dashbaord ******************************/
// DD dashboard
router.get('/users/dd', ensureUser(), async (req, res) => {
  try {
    const userId = req.user._id;
    const takenExams = await ExamAnswer.find({ userId }).sort({ createdAt: -1 });
    const averageScore = takenExams.length
      ? (takenExams.reduce((acc, e) => acc + e.score, 0) / takenExams.length).toFixed(2)
      : null;

    res.render('users/dd/home', {
      title: 'DD Dashboard',
      username: req.user.username,
      takenExams,
      averageScore,
    });
  } catch (err) {
    console.error('Error loading dashboard:', err.message);
    res.status(500).send('Could not load dashboard');
  }
});

// DD - List available exams
router.get('/users/dd/exams', ensureUser(), async (req, res) => {
  const exams = await Exams.find({ examType: 'Deputy Director' });
  res.render('users/dd/exams', {
    title: 'Available Exams',
    exams,
    username: req.user.username,
  });
});

// DD - View single exam
router.get('/users/dd/exams/:id', ensureUser(), async (req, res) => {
  const exam = await Exams.findById(req.params.id).lean();
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/dd/examForm', {
    title: exam.title,
    username: req.user.username,
    examId: exam._id.toString(),
    questions: exam.questions,
    duration: exam.duration 
  });
});

// DD - Submit exam
router.post('/users/dd/submit', ensureUser(), async (req, res) => {
  try {
    const { examId, answers } = req.body;

    console.log('📥 req.body:', req.body);

    const exam = await Exams.findById(examId).lean();
    if (!exam) return res.status(404).send('Exam not found');

    console.log('✅ Loaded exam:', exam.title);

    let score = 0;

    const resultAnswers = exam.questions.map((q, index) => {
      const questionIdStr = q.id.toString();
      const userAnswer = answers?.[questionIdStr] || '';
      const correctAnswer = q.answer || '';

      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score += q.score;

      console.log(`--- Question ${index + 1} ---`);
      console.log('🆔 Question ID:', q.id);
      console.log('❓ Question Text:', q.question);
      console.log('📝 User Answer:', userAnswer);
      console.log('✅ Correct Answer:', correctAnswer);
      console.log('🎯 isCorrect:', isCorrect);

      return {
        questionId: q.id,
        questionText: q.question,
        answerGiven: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect
      };
    });

    console.log('🧮 Total Score:', score);
    console.log('📝 Result Answers Array:', resultAnswers);

    const result = await ExamAnswer.create({
      userId: req.user._id,
      examId: exam._id,
      examTitle: exam.title,
      examType: exam.examType,
      answers: resultAnswers,
      score
    });

    res.render('users/dd/result', {
      title: 'Exam Result',
      result,
      total: exam.questions.length,
      questions: exam.questions
    });
  } catch (err) {
    console.error('❌ Submission failed:', err);
    res.status(500).send('Submission Failed');
  }
});

// DD - View detailed result
router.get('/users/dd/results/:answerId', ensureUser(), async (req, res) => {
  const result = await ExamAnswer.findById(req.params.answerId);
  if (!result) return res.status(404).send('Result not found');

  const exam = await Exams.findById(result.examId);
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/dd/resultDetail', {
    title: 'Exam Details',
    result,
    questions: exam.questions,
    username: req.user.username,
  });
});

// DD - Delete/reset taken exam
router.post('/users/dd/reset/:answerId', ensureUser(), async (req, res) => {
  await ExamAnswer.findByIdAndDelete(req.params.answerId);
  res.redirect('/users/dd');
});



/******************************END OF DD DASHBOARD ***************************** */
// Assistant Director I dashboard
router.get('/users/adI', ensureUser(), async (req, res) => {
  try {
    const userId = req.user._id;
    const takenExams = await ExamAnswer.find({ userId }).sort({ createdAt: -1 });
    const averageScore = takenExams.length
      ? (takenExams.reduce((acc, e) => acc + e.score, 0) / takenExams.length).toFixed(2)
      : null;

    res.render('users/adI/home', {
      title: 'Assistant Director I Dashboard',
      username: req.user.username,
      takenExams,
      averageScore,
    });
  } catch (err) {
    console.error('Error loading dashboard:', err.message);
    res.status(500).send('Could not load dashboard');
  }
});

// Assistant Director I - List available exams
router.get('/users/adI/exams', ensureUser(), async (req, res) => {
  const exams = await Exams.find({ examType: 'Assistant Director I' });
  res.render('users/adI/exams', {
    title: 'Available Exams',
    exams,
    username: req.user.username,
  });
});

// Assistant Director I - View single exam
router.get('/users/adI/exams/:id', ensureUser(), async (req, res) => {
  const exam = await Exams.findById(req.params.id).lean();
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/adI/examForm', {
    title: exam.title,
    username: req.user.username,
    examId: exam._id.toString(),
    questions: exam.questions,
    duration: exam.duration 
  });
});



// Assistant Director I - Submit exam
router.post('/users/adI/submit', ensureUser(), async (req, res) => {
  try {
    const { examId, answers } = req.body;

    console.log('📥 req.body:', req.body);

    const exam = await Exams.findById(examId).lean();
    if (!exam) return res.status(404).send('Exam not found');

    console.log('✅ Loaded exam:', exam.title);

    let score = 0;

    const resultAnswers = exam.questions.map((q, index) => {
      const questionIdStr = q.id.toString();
      const userAnswer = answers?.[questionIdStr] || ''; // safe access
      const correctAnswer = q.answer || '';

      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score += q.score;

      console.log(`--- Question ${index + 1} ---`);
      console.log('🆔 Question ID:', q.id);
      console.log('❓ Question Text:', q.question);
      console.log('📝 User Answer:', userAnswer);
      console.log('✅ Correct Answer:', correctAnswer);
      console.log('🎯 isCorrect:', isCorrect);

      return {
        questionId: q.id,
        questionText: q.question,
        answerGiven: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect
      };
    });

    console.log('🧮 Total Score:', score);
    console.log('📝 Result Answers Array:', resultAnswers);

    const result = await ExamAnswer.create({
      userId: req.user._id,
      examId: exam._id,
      examTitle: exam.title,
      examType: exam.examType,
      answers: resultAnswers,
      score
    });

    res.render('users/adI/result', {
      title: 'Exam Result',
      result,
      total: exam.questions.length,
      questions: exam.questions 
    });
  } catch (err) {
    console.error('❌ Submission failed:', err);
    res.status(500).send('Submission Failed');
  }
});



// Assistant Director I - View detailed result
router.get('/users/adI/results/:answerId', ensureUser(), async (req, res) => {
  const result = await ExamAnswer.findById(req.params.answerId);
  if (!result) return res.status(404).send('Result not found');

  const exam = await Exams.findById(result.examId);
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/adI/resultDetail', {
    title: 'Exam Details',
    result,
    questions: exam.questions,
    username: req.user.username,
  });
});

// Assistant Director I - Delete/reset taken exam
router.post('/users/adI/reset/:answerId', ensureUser(), async (req, res) => {
  await ExamAnswer.findByIdAndDelete(req.params.answerId);
  res.redirect('/users/adI');
});



// Try dashboard (no login)
router.get('/users/try/home', (req, res)=>{
  res.render('users/try/home', {
    title: "Try"
  })
})




router.get('/exams', async (req, res) => {
  const exams = await Exams.find({ examType: 'Try' });
  res.render('users/try/exams', {
    title: 'Available Exams',
    exams,
  });
});



// Try - View single exam
router.get('/users/try/exams/:id', async (req, res) => {
  const exam = await Exams.findById(req.params.id).lean();
  if (!exam) return res.status(404).send('Exam not found');

  res.render('users/try/examForm', {
    title: exam.title,
    examId: exam._id.toString(),
    questions: exam.questions,
    duration: exam.duration,
  });
});

// Try - Submit exam (public)
router.post('/users/try/submit', async (req, res) => {
  try {
    const { examId, answers } = req.body;
    const exam = await Exams.findById(examId).lean();
    if (!exam) return res.status(404).send('Exam not found');

    let score = 0;

    const resultAnswers = exam.questions.map((q) => {
      const questionIdStr = q.id.toString();
      const userAnswer = answers?.[questionIdStr] || '';
      const correctAnswer = q.answer || '';
      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) score += q.score;

      return {
        questionId: q.id,
        questionText: q.question,
        answerGiven: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect,
      };
    });

    const result = {
      examTitle: exam.title,
      examType: exam.examType,
      answers: resultAnswers,
      score,
    };

    res.render('users/try/result', {
      title: 'Exam Result',
      result,
      total: exam.questions.length,
      questions: exam.questions,
    });
  } catch (err) {
    console.error('❌ Submission failed:', err);
    res.status(500).send('Submission Failed');
  }
});

// Try - View result details (not needed if not saving)
router.get('/users/try/results/:answerId', (req, res) => {
  res.status(403).send('This route is not available for public users.');
});

// Try - Reset not needed for public
router.post('/users/try/reset/:answerId', (req, res) => {
  res.status(403).send('This route is not available for public users.');
});




// List active users (dummy for now)
router.get('/admin/activeUsers', ensureAdmin(), (req, res) => {
  console.log("Names" + activeUsers)
  res.render('admin/activeUsers', {
    title: 'Active Users',
    users: activeUsers,
    error: null
  });
});



export default router;
