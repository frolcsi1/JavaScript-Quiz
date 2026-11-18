window.onload = function() {
    if (
        localStorage.getItem('hasStarted') != 'true' ||
        localStorage.getItem('taskNum') != 20
    ) {
        window.location.href = 'index.html';
    }
}

const points = parseInt(localStorage.getItem('points')) || 0;
const pointsElement = document.getElementById('points');
pointsElement.textContent = points;

localStorage.setItem('hasStarted', false);
localStorage.setItem('points', 0);
localStorage.setItem('taskNum', 0);
localStorage.setItem('usedQuestions', JSON.stringify([]));