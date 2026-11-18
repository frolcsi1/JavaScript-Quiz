const hasStarted = localStorage.getItem('hasStarted') == 'true';
if (hasStarted && hasStarted != null) {
    window.location.href = 'continue.html';
}

function newQuiz() {
    localStorage.setItem('hasStarted', false);
    window.location.href='quiz.html';
}