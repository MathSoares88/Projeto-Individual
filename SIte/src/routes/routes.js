const express = require('express');
const router = express.Router();
const quizController = require('./controllers/quizController');

router.post('/quiz/saveResult', quizController.saveResult);
router.get('/quiz/getResult', quizController.getResult);

module.exports = router;
