/*==================================================
  SIA'S ADVENTURE
  game.js
==================================================*/

/*==================================================
  GAME DATA
==================================================*/


/*==================================================
  WIZZY DIALOGUE
==================================================*/

const wizzyWelcomeMessages = [

    "Welcome back, Sia! Ready for another adventure?",

    "Let's earn another star today!",

    "Every question makes you stronger.",

    "I know you can solve this one!",

    "You're becoming a brilliant explorer!",

    "Let's see how clever you are!",

    "Magic happens when we keep learning!",

    "Fantastic! Here's your next challenge.",

    "Believe in yourself—you've got this!",

    "Let's have some fun learning together!"

];


const wizzyCorrectMessages = [

    "Fantastic!",

    "Brilliant thinking!",

    "Excellent work!",

    "Amazing!",

    "You're becoming a real explorer!",

    "Wizzy is very proud of you!",

    "Another star earned!",

    "Wonderful work!"

];


const wizzyIncorrectMessages = [

    "Good try!",

    "Every mistake helps us learn.",

    "Don't worry—we'll get it next time.",

    "Keep practising!",

    "You're getting stronger every question.",

    "Let's learn this together."

];

const subject =
    localStorage.getItem("subject") || "mixed";

/*==================================================
  HOP CELEBRATIONS
==================================================*/

const hopMessages = [

    "Treasure awaits!",

    "Hop is cheering for you!",

    "Amazing work!",

    "Another star collected!",

    "Fantastic exploring!",

    "You're on a roll!",

    "Keep going!"

];

function getQuestionFile() {

    switch (subject) {

        case "maths":
            return "questions/maths.json";

        case "mixed":
            // For now, Mixed uses the Maths questions.
            // As more subjects are added, we'll expand this.
            return "questions/maths.json";

        default:
            return "questions/maths.json";

    }

}

/*==================================================
  START GAME
==================================================*/


fetch(getQuestionFile())

    .then(response => {

        if (!response.ok) {

            throw new Error(
                "Unable to load questions."
            );

        }

        return response.json();

    })

    .then(data => {

        questions = data;

        QuestionEngine.initialise(questions);

        initialiseGame();

    })
    
    .catch(error => {

        console.error(error);

        alert(
            "Sorry, the question bank could not be loaded."
        );

    });

function initialiseGame() {

    player = PlayerStorage.load();

    updateStats();

    loadRandomQuestion();

}


/*==================================================
  LOAD QUESTION
==================================================*/

function loadRandomQuestion() {

    if (questions.length === 0) {

    alert("No questions available.");

    return;

}

    currentQuestion =
        QuestionEngine.getRandomQuestion(
            player,
            questions
        );
    displayQuestion();

}

/*==================================================
  DISPLAY QUESTION
==================================================*/

function displayQuestion() {

    hideExplanation();

    clearAnswerSelection();
document.getElementById("submit-answer").style.display = "inline-block";
document.getElementById("dont-know").style.display = "inline-block";

document.getElementById("submit-answer").disabled = false;
document.getElementById("dont-know").disabled = false;

document.getElementById("next-question").style.display = "none";

    showRandomWizzyMessage();
 
    document.getElementById("question-text").textContent =
        currentQuestion.question;

    document.getElementById("hint-text").textContent =
        currentQuestion.hint;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {

        const label =
            document.createElement("label");

        label.className = "answer-option";

label.innerHTML = `

<input
type="radio"
name="answer"
value="${index}">

${answer}

`;

    label.querySelector("input").addEventListener("change", () => {

        document
            .querySelectorAll(".answer-option")
            .forEach(option =>
                option.classList.remove("selected")
            );

        label.classList.add("selected");

    });

    answers.appendChild(label);

    });

}

/*==================================================
  ANSWER CHECKING
==================================================*/

function checkAnswer(selectedAnswer) {

    levelUp = false;

    const explanation =
        document.getElementById("explanation");

    const answerOptions =
        document.querySelectorAll(".answer-option");

    // Prevent answering twice
    answerOptions.forEach(option => {

        option.style.pointerEvents = "none";

    });

    document.getElementById("submit-answer").style.display = "none";
    document.getElementById("dont-know").style.display = "none";

    document.getElementById("next-question").style.display = "inline-block";

    // Highlight answers
    answerOptions.forEach((option, index) => {

        if (index === currentQuestion.correct) {

            option.classList.add("correct");

        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== currentQuestion.correct
        ) {

            option.classList.add("incorrect");

        }

    });

    player.questionsAnswered++;

    if (selectedAnswer === currentQuestion.correct) {

        player.correct++;

        player.xp += currentQuestion.xp ?? 10;

        player.stars += 5;

        levelUp = Levels.checkLevel(player);

        showHop();

    }
    else {

        showIncorrectExplanation();

    }

    PlayerStorage.save(player);

    updateStats();

    if (levelUp) {

        showLevelUp();

    }
    else if (selectedAnswer === currentQuestion.correct) {

        showCorrectExplanation();

    }

    explanation.classList.remove("hidden");

    document.getElementById("next-question").style.display =
        "inline-block";

}

/*==================================================
  EVENT HANDLERS
==================================================*/

document
    .getElementById("submit-answer")
    .addEventListener("click", submitAnswer);

document
    .getElementById("dont-know")
    .addEventListener("click", dontKnow);

document
    .getElementById("next-question")
    .addEventListener("click", nextQuestion);


/*==================================================
  SUBMIT ANSWER
==================================================*/

function submitAnswer() {

    const selected =
        document.querySelector(
            "input[name='answer']:checked"
        );

    if (!selected) {

        alert("Choose an answer first!");

        return;

    }

    checkAnswer(Number(selected.value));

}

/*==================================================
  I DON'T KNOW
==================================================*/

function dontKnow() {

    player.questionsAnswered++;

    PlayerStorage.save(player);

    updateStats();

    const explanation =
        document.getElementById("explanation");

    explanation.innerHTML = `

<h3>🧙 Wizzy says...</h3>

<p>

That's perfectly okay!

Every great wizard learns by practising.

</p>

<p>

The correct answer was:

<strong>${currentQuestion.answers[currentQuestion.correct]}</strong>

</p>

<p>

${currentQuestion.explanation}

</p>

`;

    explanation.classList.remove("hidden");

 document.getElementById("submit-answer").style.display = "none";
document.getElementById("dont-know").style.display = "none";

document.getElementById("next-question").style.display = "inline-block";
}

/*==================================================
  NEXT QUESTION
==================================================*/

function nextQuestion() {

    hideExplanation();
    loadRandomQuestion();

}

/*==================================================
  CORRECT ANSWER
==================================================*/

function showCorrectExplanation() {

    const explanation =
        document.getElementById("explanation");

    const message =
        wizzyCorrectMessages[
            Math.floor(
                Math.random() *
                wizzyCorrectMessages.length
            )
        ];

    explanation.innerHTML = `

<h3>🧙 Wizzy says...</h3>

<p><strong>${message}</strong></p>

<p>

${currentQuestion.explanation}

</p>

`;

}

/*==================================================
  INCORRECT ANSWER
==================================================*/

function showIncorrectExplanation() {

    const explanation =
        document.getElementById("explanation");

    const message =
        wizzyIncorrectMessages[
            Math.floor(
                Math.random() *
                wizzyIncorrectMessages.length
            )
        ];

    explanation.innerHTML = `

<h3>🧙 Wizzy says...</h3>

<p><strong>${message}</strong></p>

<p>

The correct answer was:

<strong>${currentQuestion.answers[currentQuestion.correct]}</strong>

</p>

<p>

${currentQuestion.explanation}

</p>

`;

}

/*==================================================
  HOP CELEBRATION
==================================================*/

function showHop() {

    const hop =
        document.getElementById("hop-celebration");

    const hopMessage =
        document.getElementById("hop-message");

    if (hopMessage) {

        hopMessage.textContent =
            hopMessages[
                Math.floor(
                    Math.random() *
                    hopMessages.length
                )
            ];

    }

    hop.style.display = "block";

    setTimeout(() => {

        hop.style.display = "none";

    }, 2500);

}

/*==================================================
  LEVEL UP
==================================================*/

function showLevelUp() {

    const reward =
        Treasure.open(player);

    const explanation =
        document.getElementById("explanation");

    explanation.innerHTML = `

<h2>🎁 Magical Treasure Chest!</h2>

<p>

🧙 Amazing, Sia!

</p>

<p>

⭐ You reached Level ${player.level}

<br>

${player.levelName}

</p>

<p>

🐇 Hop opened the treasure chest!

</p>

<p>

🎁 ${reward.item}

</p>

<p>

🏆 ${reward.badge}

</p>

<p>

⭐ +50 Stars!

</p>

`;

}

/*==================================================
  HIDE EXPLANATION
==================================================*/

function hideExplanation() {

    document
        .getElementById("explanation")
        .classList.add("hidden");

    document
        .getElementById("next-question")
        .style.display = "none";

}

/*==================================================
  CLEAR ANSWERS
==================================================*/

function clearAnswerSelection() {

    document
        .querySelectorAll(".answer-option")
        .forEach(option => {

            option.classList.remove(
                "correct",
                "incorrect",
                "selected"
            );

            option.style.pointerEvents = "auto";

        });

}

/*==================================================
  UPDATE PLAYER STATS
==================================================*/

function updateStats() {

    document.getElementById("stars").textContent =
        player.stars;

    document.getElementById("level").textContent =
        `${player.level} ${player.levelName}`;

    document.getElementById("xp-progress").style.width =
        `${Math.min(player.xp, 100)}%`;

}

/*==================================================
  RANDOM WIZZY MESSAGE
==================================================*/

function showRandomWizzyMessage() {

    const message =
        wizzyWelcomeMessages[
            Math.floor(
                Math.random() *
                wizzyWelcomeMessages.length
            )
        ];

    typeWizzyMessage(message);

}

/*==================================================
  TYPEWRITER EFFECT
==================================================*/

/*==================================================
  TYPEWRITER EFFECT
==================================================*/

let wizzyTimer = null;

function typeWizzyMessage(text) {

    const element =
        document.getElementById("wizzy-message");

    if (!element) {

        return;

    }

    if (wizzyTimer) {

        clearInterval(wizzyTimer);

    }

    element.textContent = "";

    let index = 0;

    wizzyTimer = setInterval(() => {

        if (index >= text.length) {

            clearInterval(wizzyTimer);

            wizzyTimer = null;

            return;

        }

        element.textContent += text[index];

        index++;

    }, 28);

}

function loadSingleSubject(subject) {

    fetch(`questions/${subject}.json`)

        .then(response => {

            if (!response.ok)
                throw new Error("Unable to load questions.");

            return response.json();

        })

        .then(data => {

            questions = data;

            QuestionEngine.initialise(questions);

            initialiseGame();

        })

        .catch(showLoadError);

}


function loadMixedQuestions() {

    Promise.all([

        fetch("questions/maths.json").then(r => r.json()),
        fetch("questions/grammar.json").then(r => r.json()),
        fetch("questions/spelling.json").then(r => r.json()),
        fetch("questions/punctuation.json").then(r => r.json()),
        fetch("questions/verbal.json").then(r => r.json()),
        fetch("questions/nonverbal.json").then(r => r.json())

    ])

    .then(allQuestions => {

        questions = allQuestions.flat();

        QuestionEngine.initialise(questions);

        initialiseGame();

    })

    .catch(showLoadError);

}


function showLoadError(error) {

    console.error(error);

    alert(
        "Sorry, the question bank could not be loaded."
    );

}