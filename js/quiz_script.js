let questions = [];
window.onload = async function() {
    const loadedQuestions = await loadQuestions();
    if (loadedQuestions) {
        questions = loadedQuestions;
    } else {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 30000);
    }

    giveQuestion();
}

async function loadQuestions() {
    try {
        const response = await fetch('../json/questions.json');
        if (!response.ok) {
            throw new Error('HIBA: ' + response.status);
        }

        const questionsData = await response.json();
        return questionsData;
    } catch (error) {
        errorMessage('Hiba történt a kérdések betöltése közben.\nKérlek próbáld újra!\n' + error.message);
        return;
    }
}

function nextQuestion() {
    const answer = document.querySelector('input[name="answer"]:checked');
    const optionLabels = document.querySelectorAll('label');
    if (!answer) {
        errorMessage('Kérlek válassz egy választ!');
        return;
    }
    const next_btn = document.getElementById('next-btn');
    next_btn.disabled = true;
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.disabled = true;
    });

    const questionId = localStorage.getItem('currentQuestionId');
    const rightAnswer = questions[questionId].correct;
    const points = parseInt(localStorage.getItem('points')) || 0;

    if (answer.value == questions[questionId].options[rightAnswer]) {
        localStorage.setItem('points', points + 1);
    }
    
    optionLabels.forEach (label => {
        label.classList.add('incorrect');
    });
    const correctRadio = document.querySelector(`input[value='${questions[questionId].options[rightAnswer]}']`);
    const correctLabel = document.querySelector(`#${correctRadio.id}-label`);
    correctLabel.classList.remove('incorrect');
    correctLabel.classList.add('correct');

    setTimeout(() => {
        generateNextQuestionId();
        giveQuestion();
    }, 3000);
}

function giveQuestion() {
    if (localStorage.getItem('hasStarted') != 'true') {
        generateNextQuestionId();
        localStorage.setItem('hasStarted', true);
    }
    const options = document.querySelectorAll('input[name="answer"]');
    const optionLabels = document.querySelectorAll('label');
    const questionText = document.getElementById('question-text');
    const currentQuestionId = localStorage.getItem('currentQuestionId') || 0;
    questionText.textContent = questions[currentQuestionId].question;

    const mix = [0, 1, 2, 3];
    for (let i = mix.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mix[i], mix[j]] = [mix[j], mix[i]];
    }

    optionLabels.forEach((label, index) => {
        label.textContent = questions[currentQuestionId].options[mix[index]];
        label.classList.remove('incorrect');
        label.classList.remove('correct');
    });

    options.forEach ((option, index) => {
        option.checked = false;
        option.value = questions[currentQuestionId].options[mix[index]];
        option.disabled = false;
    });

    const taskNum = parseInt(localStorage.getItem('taskNum')) || 0;
    const questionCounter = document.getElementById('question-counter');
    questionCounter.textContent = `Kérdés ${taskNum} / 20`;

    const next_btn = document.getElementById('next-btn');
    next_btn.disabled = false;
}

function generateNextQuestionId() {
    const taskNum = parseInt(localStorage.getItem('taskNum')) || 0;
    if (taskNum + 1 > 20) {
        window.location.href = 'result.html';
        return;
    }
    localStorage.setItem('taskNum', taskNum + 1);

    const usedQuestions = JSON.parse(localStorage.getItem('usedQuestions')) || [];
    let nextQuestionId;
    do {
        nextQuestionId = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(nextQuestionId) && usedQuestions.length < questions.length);

    if (usedQuestions.includes(nextQuestionId)) {
        window.location.href = 'result.html';
        return;
    }
    usedQuestions.push(nextQuestionId);
    localStorage.setItem('usedQuestions', JSON.stringify(usedQuestions));
    localStorage.setItem('currentQuestionId', nextQuestionId);
}

function errorMessage(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}