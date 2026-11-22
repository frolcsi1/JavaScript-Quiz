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

window.onload = async function() {
    if (
        localStorage.getItem('hasStarted') != 'true' ||
        localStorage.getItem('taskNum') != '20'
    ) {
        window.location.href = 'index.html';
    }
    const points = parseInt(localStorage.getItem('points')) || 0;
    const pointsElement = document.getElementById('points');
    pointsElement.textContent = points;

    const usedQuestions = JSON.parse(localStorage.getItem('usedQuestions'));
    const questions = await loadQuestions();
    const rightAnswersDiv = document.getElementById("rigthAnswers")

    usedQuestions.forEach(questionId => {
        const questionDIV = document.createElement("div");
        rightAnswersDiv.appendChild(questionDIV);

        const h1 = document.createElement("h1");
        h1.classList.add("pre-wrap");
        h1.textContent = questions[questionId].question;
        questionDIV.appendChild(h1);

        for (let i = 0; i < 4; i++) {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `answer${questionId}`;
            input.name = `o${i}${questionId}`;
            input.value = i;
            input.disabled = true;
            questionDIV.appendChild(input);

            const label = document.createElement("label");
            label.for = `o${i}${questionId}`;
            label.id = `o${i}${questionId}-label`;
            label.classList.add(questions[questionId].correct == i ? 'correct' : 'incorrect');
            label.classList.add("pre-wrap");
            label.textContent = questions[questionId].options[i];
            questionDIV.appendChild(label);

            const br = document.createElement("br");
            questionDIV.appendChild(br);
        }

        const hr = document.createElement("hr");
        questionDIV.append(hr);
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
