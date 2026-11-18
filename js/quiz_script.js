/*const questions = [
  {
    "id": 0,
    "question": "Mi a localStorage maximális tárolási kapacitása nagyjából domainenként a legtöbb modern böngészőben?",
    "options": ["5 MB", "50 KB", "500 MB", "Nincs korlát"],
    "correct": 0
  },
  {
    "id": 1,
    "question": "Mi a kimenete a következő kódnak: console.log(typeof typeof 1);",
    "options": ["number", "string", "object", "undefined"],
    "correct": 1
  },
  {
    "id": 2,
    "question": "Melyik kulcsszó hoz létre úgynevezett Temporal Dead Zone-t (TDZ) a deklaráció előtt?",
    "options": ["var", "let és const", "csak a var", "függvények"],
    "correct": 1
  },
  {
    "id": 3,
    "question": "Mi a kimenete a következő logikai vizsgálatnak: console.log([] == ![]);",
    "options": ["true", "false", "TypeError", "undefined"],
    "correct": 0
  },
  {
    "id": 4,
    "question": "Melyik sorrendben futnak le a feladatok a JavaScript Event Loop mechanizmusában?",
    "options": [
      "Macrotaskok -> Microtaskok -> Render",
      "Microtaskok -> Macrotaskok -> Render",
      "Render -> Macrotaskok -> Microtaskok",
      "Mindig véletlenszerű sorrendben"
    ],
    "correct": 1
  },
  {
    "id": 5,
    "question": "Mit eredményez az Object.freeze() metódus alkalmazása egy objektumra?",
    "options": [
      "Teljesen megakadályozza a tulajdonságok módosítását, törlését és újak hozzáadását (sekélyen)",
      "Titkosítja az objektum adatait a memóriában",
      "Csak a metódusokat törli az objektumból",
      "Olvashatatlanná teszi a JSON.stringify() számára"
    ],
    "correct": 0
  },
  {
    "id": 6,
    "question": "Mit ad vissza a következő kifejezés: [1, 2, 3].map(num => num * 2).filter(num => num > 3);",
    "options": ["[2, 4, 6]", "[4, 6]", "[6]", "[2, 6]"],
    "correct": 1
  },
  {
    "id": 7,
    "question": "Melyik metódus hoz létre sekély másolatot (shallow copy) egy tömbről?",
    "options": [".concat() vagy spread operátor (...)", ".clone()", ".copy()", ".deepCopy()"],
    "correct": 0
  },
  {
    "id": 8,
    "question": "Mi a closure (zárvány) pontos definíciója JavaScriptben?",
    "options": [
      "Egy függvény, ami bezárja a böngészőablakot",
      "Egy függvény, amely hozzáfér a külső hatáskörének (scope) változóihoz akkor is, amikor a külső függvény már lefutott",
      "Egy speciális objektum, ami titkosítja a változókat",
      "A kód lezárása strict mode-ban"
    ],
    "correct": 1
  },
  {
    "id": 9,
    "question": "Mi a 'this' kulcsszó értéke egy hagyományos (nem nyíl) függvényben, ha azt egy objektum metódusaként hívják meg?",
    "options": [
      "A globális ablak (window) objektum",
      "Az az objektum, amely meghívta a metódust",
      "Mindig az 'undefined'",
      "A legközelebbi HTML elem"
    ],
    "correct": 1
  },
  {
    "id": 10,
    "question": "Mit ad vissza a 'typeof null' kifejezés JavaScriptben egy történelmi hiba (bug) miatt?",
    "options": ["null", "undefined", "object", "boolean"],
    "correct": 2
  },
  {
    "id": 11,
    "question": "Mi a célja az Array.prototype.reduce() metódusnak?",
    "options": [
      "Csökkenti a tömb méretét az első elem törlésével",
      "Egyetlen értékké redukálja (összegzi/kombinálja) a tömb elemeit egy akkumulátor segítségével",
      "Törli a duplikátumokat a tömbből",
      "Kiszűri a nem kívánt elemeket"
    ],
    "correct": 1
  },
  {
    "id": 12,
    "question": "Hogyan ellenőrizhetjük biztonságosan, hogy egy változó értéke pontosan NaN (Not-a-Number)?",
    "options": [
      "valtozo == NaN",
      "valtozo === NaN",
      "Number.isNaN(valtozo)",
      "isNaN(valtozo) - ellenőrzés nélkül"
    ],
    "correct": 2
  },
  {
    "id": 13,
    "question": "Mi a kimenete a következő műveletnek: console.log(1 + '2' + 3);",
    "options": ["6", "123", "15", "NaN"],
    "correct": 1
  },
  {
    "id": 14,
    "question": "Mi az async/await a háttérben?",
    "options": [
      "Egy teljesen új többszálas (multithreading) motor",
      "A Promise-ok szintaktikai cukorka (syntactic sugar) változata",
      "Egy webszerver protokoll",
      "A szinkron kód futtatásának tiltása"
    ],
    "correct": 1
  },
  {
    "id": 15,
    "question": "Mi a WeakMap fő sajátossága a hagyományos Map-hez képest?",
    "options": [
      "A kulcsok csak primitív adattípusok lehetnek",
      "A kulcsok csak objektumok lehetnek, és gyenge hivatkozásúak (a szemétgyűjtő törölheti őket)",
      "Gyorsabb a keresése ezerszer",
      "Nem lehet elemet törölni belőle"
    ],
    "correct": 1
  },
  {
    "id": 16,
    "question": "Mi az Event Bubbling (eseménybuborékolás) lényege a DOM-ban?",
    "options": [
      "Az esemény a legkülső elemtől indul befelé",
      "Az esemény a legbelső célelemtől indulva felfelé halad az ősök felé a DOM fában",
      "Az események buborékokat rajzolnak a képernyőre vizuálisan",
      "Automatikusan újratölti az oldalt"
    ],
    "correct": 1
  },
  {
    "id": 17,
    "question": "Mi a különbség e.preventDefault() és e.stopPropagation() között?",
    "options": [
      "Az előbbi megakadályozza az alapértelmezett böngészőműködést, az utóbbi leállítja az esemény buborékolását",
      "Ugyanazt csinálják, kettőjük között nincs különbség",
      "Az előbbi törli az elemet, az utóbbi csak elrejti",
      "Az utóbbi leállítja a JavaScript motor futását"
    ],
    "correct": 0
  },
  {
    "id": 18,
    "question": "Mi történik, ha egy const-tal deklarált objektum belső tulajdonságát módosítjuk?",
    "options": [
      "SyntaxError hiba lép fel",
      "TypeError hiba lép fel",
      "A tulajdonság sikeresen megváltozik, mert a const csak az újrakötést gátolja meg",
      "A program leáll"
    ],
    "correct": 2
  },
  {
    "id": 19,
    "question": "Mi a kimenete: console.log([...'hello']);",
    "options": [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      "Hibaüzenetet ad",
      "5"
    ],
    "correct": 1
  },
  {
    "id": 20,
    "question": "Mikor érdemes a Promise.allSettled() metódust használni a Promise.all() helyett?",
    "options": [
      "Ha azt akarjuk, hogy az összes ígéret teljesüljön, de ha egy is elbukik, az egész megszakad",
      "Ha meg akarjuk várni az összes ígéret befejeződését, függetlenül attól, hogy sikeresek vagy hibásak lettek",
      "Ha csak a leggyorsabb ígéret eredménye kell",
      "Nem létezik ilyen metódus"
    ],
    "correct": 1
  },
  {
    "id": 21,
    "question": "Mi a célja a 'strict mode'-nak ('use strict')?",
    "options": [
      "Megtiltja a reszponzív dizájnt",
      "Szigorúbb szintaktikai és hibakezelési szabályokat kényszerít ki (pl. tiltja a nem deklarált változókat)",
      "Gyorsabbá teszi a képek betöltését",
      "Kötelezővé teszi a jQuery használatát"
    ],
    "correct": 1
  },
  {
    "id": 22,
    "question": "Mit csinál az Array.prototype.some() metódus?",
    "options": [
      "Igazat ad vissza, ha legalább egy elem megfelel a callback függvény feltételének",
      "Megszámolja az elemeket",
      "Kiválaszt egy véletlenszerű elemet",
      "Igazat ad, ha minden elem megfelel a feltételnek"
    ],
    "correct": 0
  },
  {
    "id": 23,
    "question": "Mi a kimenete: console.log(0.1 + 0.2 === 0.3);",
    "options": ["true", "false", "undefined", "NaN"],
    "correct": 1
  },
  {
    "id": 24,
    "question": "Hogyan működik a struktúrabontás (destructuring) tömbök esetén?",
    "options": [
      "const [a, b] = [1, 2];",
      "const {a, b} = [1, 2];",
      "const [a, b] = {1, 2};",
      "Array.destruct(1, 2);"
    ],
    "correct": 0
  },
  {
    "id": 25,
    "question": "Mi a különbség a querySelector és a getElementById között a teljesítményt és a rugalmasságot tekintve?",
    "options": [
      "A getElementById gyorsabb, de csak ID-t fogad; a querySelector tetszőleges CSS szelektorral működik",
      "A querySelector csak ID-t tud kezelni",
      "Nincs semmilyen különbség",
      "A getElementById elavult és hibát dob modern böngészőkben"
    ],
    "correct": 0
  },
  {
    "id": 26,
    "question": "Mi a célja a Proxy objektumnak JavaScriptben?",
    "options": [
      "Hálózati kérések titkosítása",
      "Egy másik objektum alapműveleteinek (pl. tulajdonság olvasás, írás) elfogása és testreszabása",
      "Gyorsítótárazás a szerveren",
      "CSS stílusok dinamikus injektálása"
    ],
    "correct": 1
  },
  {
    "id": 27,
    "question": "Mit jelent az, hogy egy függvény 'tiszta függvény' (pure function)?",
    "options": [
      "Nincsenek benne kommentek",
      "Ugyanarra a bemenetre mindig ugyanazt a kimenetet adja, és nincs mellékhatása (side effect)",
      "Csak számokkal dolgozhat",
      "Aszinkron módon fut le"
    ],
    "correct": 1
  },
  {
    "id": 28,
    "question": "Mi a szerepe a Symbol adattípusnak JavaScriptben?",
    "options": [
      "Matematikai szimbólumok megjelenítése",
      "Egyedi és megváltoztathatatlan azonosítók létrehozása, amelyek objektumkulcsként használhatók névütközések elkerülésére",
      "Gyorsabb szövegkezelés",
      "Adatbázis-kapcsolat létesítése"
    ],
    "correct": 1
  },
  {
    "id": 29,
    "question": "Mi történik, ha egy async függvény nem ad vissza explicit módon semmit (nincs benne return)?",
    "options": [
      "Hozzáad egy undefined értékű hibát",
      "Egy 'resolved' állapotú Promise-t ad vissza, aminek az értéke undefined",
      "Leállítja a programot",
      "Semmi, üresen marad"
    ],
    "correct": 1
  },
  {
    "id": 30,
    "question": "Mi a célja a rest paraméternek (...args) egy függvénynél?",
    "options": [
      "Tetszőleges számú argumentumot tömbként gyűjt össze",
      "Törli az argumentumokat",
      "Pihenteti a CPU-t",
      "Kötelezővé teszi az első paramétert"
    ],
    "correct": 0
  },
  {
    "id": 31,
    "question": "Mi a különbség az innerHTML és a textContent között?",
    "options": [
      "Az innerHTML kezeli a HTML tageket is, míg a textContent csak tiszta szövegként kezeli a tartalmat",
      "Ugyanaz a kettő",
      "A textContent gyorsabb, de futtatja a script tageket",
      "Az innerHTML elavult"
    ],
    "correct": 0
  },
  {
    "id": 32,
    "question": "Mi a kimenete: console.log(typeof NaN);",
    "options": ["NaN", "number", "undefined", "string"],
    "correct": 1
  },
  {
    "id": 33,
    "question": "Melyik metódus keresi meg a legközelebbi ős elemet, amely megfelel egy adott CSS szelektornak?",
    "options": ["element.closest()", "element.parent()", "element.findAncestor()", "document.select()"],
    "correct": 0
  },
  {
    "id": 34,
    "question": "Mit csinál az Array.prototype.flatMap()?",
    "options": [
      "Csak laposítja a tömböt",
      "Először alkalmaz egy map függvényt az elemekre, majd egy szint mélységben laposítja (flatten) az eredményt",
      "Törli a tömb üres elemeit",
      "Grafikonokat rajzol a tömb adataiból"
    ],
    "correct": 1
  },
  {
    "id": 35,
    "question": "Mi az Optional Chaining (?.) operátor fő előnye?",
    "options": [
      "Gyorsabbá teszi a válaszidőt",
      "Megakadályozza a 'TypeError: Cannot read properties of undefined' hibákat, ha egy láncolt tulajdonság nem létezik",
      "Opcionálissá teszi a változók deklarálását",
      "Keresést hajt végre a DOM-ban"
    ],
    "correct": 1
  },
  {
    "id": 36,
    "question": "Hogyan lehet megelőzni egy eseménykezelő többszöri lefutását ugyanazon az elemen, ha egyszer már hozzáadtuk?",
    "options": [
      "Használhatjuk az once: true opciót az addEventListener-ben",
      "Nem lehet, mindig lefut",
      "Csak a removeEventListener segít közvetlenül kattintás után",
      "Automatikusan csak egyszer fut le"
    ],
    "correct": 0
  },
  {
    "id": 37,
    "question": "Mi a Nullish Coalescing (??) operátor viselkedése a logikai vagy (||) operátorral szemben?",
    "options": [
      "Ugyanúgy viselkednek",
      "A ?? csak akkor adja a jobb oldali értéket, ha a bal oldal null vagy undefined (nem veszi hamisnak a 0-t vagy az üres stringet)",
      "A || operátor gyorsabb",
      "A ?? operátor csak számokhoz jó"
    ],
    "correct": 1
  },
  {
    "id": 38,
    "question": "Mit jelent a DOM-ban egy elem 'offsetTop' tulajdonsága?",
    "options": [
      "Az elem távolságát mutatja a legfelső szülőtől vagy az offsetParent-től pixelben",
      "Az elem magasságát",
      "A böngészőablak tetejétől számított margót",
      "A betűtípus méretét"
    ],
    "correct": 0
  },
  {
    "id": 39,
    "question": "Melyik metódus használható arra, hogy több objektum tulajdonságait összefésüljük egy új objektumba?",
    "options": [
      "Object.assign() vagy object spread ({ ...obj1, ...obj2 })",
      "Array.merge()",
      "JSON.concat()",
      "Object.join()"
    ],
    "correct": 0
  }
]*/

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
}

async function loadQuestions() {
    try {
        const response = fetch('../json/questions.json');
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
    const questionId = localStorage.getItem('currentQuestionId');
    const rightAnswer = questions[questionId].correct;
    const points = parseInt(localStorage.getItem('points')) || 0;

    if (answer.value == questions[questionId].options[rightAnswer]) {
        localStorage.setItem('points', points + 1);
    }
    
    optionLabels.forEach (label => {
        label.classList.add('incorrect');
    });
    const correctOption = document.querySelector(`input[value="${questions[questionId].options[rightAnswer]}"]`);
    correctOption.classList.remove('incorrect');
    correctOption.classList.add('correct');

    const next_btn = document.getElementById('next-btn');
    next_btn.disabled = true;

    setTimeout(() => {
        generateNextQuestionId();
        giveQuestion();
    }, 3000);
}

function giveQuestion() {
    if (!localStorage.getItem('hasStarted')) {
        generateNextQuestionId();
        localStorage.setItem('hasStarted', true);
    }
    const options = document.querySelectorAll('input[name="answer"]');
    const optionLabels = document.querySelectorAll('label');
    const questionText = document.getElementById('question-text');
    const currentQuestionId = localStorage.getItem('currentQuestionId');
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
    });

    const taskNum = parseInt(localStorage.getItem('taskNum')) || 0;
    const questionCounter = document.getElementById('question-counter');
    questionCounter.textContent = `Kérdés ${taskNum + 1} / 20`;

    const next_btn = document.getElementById('next-btn');
    next_btn.disabled = false;
}

function generateNextQuestionId() {
    const taskNum = parseInt(localStorage.getItem('taskNum')) || 0;
    if (taskNum + 1 >= 20) {
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

window.addEventListener('load', () => {
    giveQuestion();
});