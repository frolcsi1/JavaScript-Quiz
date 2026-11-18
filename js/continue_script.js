const hasStarted = localStorage.getItem('hasStarted');
if (!hasStarted || hasStarted == null) {
    window.location.href = 'index.html';
}

function newQuiz() {
    localStorage.setItem('hasStarted', false);
    window.location.href='quiz.html';
}

function continueQuiz() {
    window.location.href='quiz.html';
}