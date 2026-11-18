const hasStarted = localStorage.getItem('hasStarted');
if (!hasStarted || hasStarted == null) {
    window.location.href = 'index.html';
}

function newQuiz() {
    localStorage.setItem('hasStarted', false);
    localStorage.setItem('points', 0);
    localStorage.setItem('taskNum', 0);
    localStorage.setItem('usedQuestions', JSON.stringify([]));
    window.location.href='quiz.html';
}

function continueQuiz() {
    window.location.href='quiz.html';
}

function resetQuiz() {
    localStorage.clear();
    window.location.href='index.html';
}