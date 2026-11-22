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
