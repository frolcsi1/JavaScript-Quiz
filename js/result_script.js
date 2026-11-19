import { loadQuestions } from './load.js'

window.onload = function() {
    if (
        localStorage.getItem('hasStarted') != 'true' ||
        localStorage.getItem('taskNum') != '20'
    ) {
        window.location.href = 'index.html';
    }
    const points = parseInt(localStorage.getItem('points')) || 0;
    const pointsElement = document.getElementById('points');
    pointsElement.textContent = points;

    const usedQuestions = JSON.parse(localStorage('usedQuestions'));
    const questions = loadQuestions();
    const rightAnswersDiv = docuemnt.getElementById("rigthAnswers")

    usedQuestions.forEach(questionId => {

        `
    <div class="quiz-container">
        <h1 id="question-text">${questions[questionId].question}</h1>

        <input type="radio" name="answer${questionId}" id="o0${questionId}" value="0" disabled>
        <label for="o0${questionId}" id="o0${questionId}-label" class="${questions[questionId].correct == '0' ? 'correct' : 'incorrect'}">${questions[questionId].options[0]}</label>
        <br>
        <input type="radio" name="answer${questionId}" id="o1${questionId}" value="1" disabled>
        <label for="o1${questionId}" id="o1${questionId}-label" class="${questions[questionId].correct == '1' ? 'correct' : 'incorrect'}">${questions[questionId].options[1]}</label>
        <br>
        <input type="radio" name="answer${questionId}" id="o2${questionId}" value="2" disabled>
        <label for="o2${questionId}" id="o2${questionId}-label" class="${questions[questionId].correct == '2' ? 'correct' : 'incorrect'}">${questions[questionId].options[2]}</label>
        <br>
        <input type="radio" name="answer${questionId}" id="o3${questionId}" value="3" disabled>
        <label for="o3${questionId}" id="o3${questionId}-label" class="${questions[questionId].correct == '3' ? 'correct' : 'incorrect'}">${questions[questionId].options[3]}</label>
        <br>

        <p class="center" id="question-counter">0/20</p>
    </div>`;



        
    });

    localStorage.setItem('hasStarted', false);
    localStorage.setItem('points', 0);
    localStorage.setItem('taskNum', 0);
    localStorage.setItem('usedQuestions', JSON.stringify([]));
}

function newQuiz() {
    localStorage.setItem('hasStarted', false);
    localStorage.setItem('points', 0);
    localStorage.setItem('taskNum', 0);
    localStorage.setItem('usedQuestions', JSON.stringify([]));
    window.location.href='quiz.html';
}
