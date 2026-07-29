import { GameController } from "./gameController";
import type { Player } from "./types";
import { PlayerStorage } from "./storage";
import { Levels } from "./levels";
import { Worlds } from "./worlds";
import { Treasure } from "./treasure";
import { Dashboard } from "./dashboard";
import { initialiseTreasureUI } from "./treasureUI";
import {
    QuestionEngine,
    type Question,
    type QuestionResult
} from "./questionEngine";

let player: Player;
let questions: Question[] = [];

let levelUp = false;

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

function byId<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing element: ${id}`);
  }

  return element as T;
}

function bySelector<T extends Element>(selector: string): T {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Missing element: ${selector}`);
  }

  return element as T;
}

/*==================================================
  START GAME
==================================================*/

fetch("questions/maths.json")

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

    PlayerStorage.loadLearning();

    initialiseTreasureUI();

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

    QuestionEngine.getNextQuestion(
    questions
);

displayQuestion();

}

/*==================================================
  DISPLAY QUESTION
==================================================*/

function displayQuestion() {
const currentQuestion =
    QuestionEngine.getCurrentQuestion();

if (!currentQuestion) {
    return;
}

    hideExplanation();

    clearAnswerSelection();
byId<HTMLButtonElement>("submit-answer").style.display = "inline-block";
byId<HTMLButtonElement>("dont-know").style.display = "inline-block";

byId<HTMLButtonElement>("submit-answer").disabled = false;
byId<HTMLButtonElement>("dont-know").disabled = false;

byId<HTMLButtonElement>("next-question").style.display = "none";

    showRandomWizzyMessage();
 
    byId<HTMLElement>("question-text").textContent =
        currentQuestion.question;

    byId<HTMLElement>("hint-text").textContent =
        currentQuestion.hint;

    const answers = byId<HTMLDivElement>("answers");

    answers.innerHTML = "";

 currentQuestion.answers.forEach((answer, index) => {
    const label = document.createElement("label");

    label.className = "answer-option";

    label.innerHTML = `
<input
type="radio"
name="answer"
value="${index}">
${answer}
`;

    label
        .querySelector<HTMLInputElement>("input")!
        .addEventListener("change", () => {
            document
                .querySelectorAll<HTMLElement>(".answer-option")
                .forEach(option => {
                    option.classList.remove("selected");
                });

            label.classList.add("selected");
        });

    answers.appendChild(label);
});
}

/*==================================================
  ANSWER CHECKING
==================================================*/

function checkAnswer(selectedAnswer: number): void {
const currentQuestion =
    QuestionEngine.getCurrentQuestion();

if (!currentQuestion) {
    return;
}
    levelUp = false;

    const explanation =
        byId<HTMLDivElement>("explanation");

    const answerOptions =
    document.querySelectorAll<HTMLElement>(".answer-option");

    // Prevent answering twice
    answerOptions.forEach(option => {

        option.style.pointerEvents = "none";

    });

    byId<HTMLButtonElement>("submit-answer").style.display = "none";
    byId<HTMLButtonElement>("dont-know").style.display = "none";

    byId<HTMLButtonElement>("next-question").style.display = "inline-block";

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

const gameResult =
    GameController.answer(
        player,
        selectedAnswer
    );

const result = gameResult.result;

levelUp = gameResult.levelUp;

const levelComplete =
    gameResult.levelComplete;

const worldComplete =
    gameResult.worldComplete;

if (result.correct) {

    showHop();

}
else {

    showIncorrectExplanation(result);

}

updateStats();

if (worldComplete) {

    showWorldComplete();

}
else if (levelComplete) {

    showLevelComplete();

}
else if (levelUp) {

    showLevelUp();

}
else if (result.correct) {

    showCorrectExplanation(result);

}

explanation.classList.remove("hidden");

byId<HTMLButtonElement>("next-question").style.display =
    "inline-block";

}

/*==================================================
  EVENT HANDLERS
==================================================*/

byId<HTMLButtonElement>("submit-answer")
    .addEventListener("click", submitAnswer);

byId<HTMLButtonElement>("dont-know")
    .addEventListener("click", dontKnow);

byId<HTMLButtonElement>("next-question")
    .addEventListener("click", nextQuestion);


/*==================================================
  SUBMIT ANSWER
==================================================*/

function submitAnswer() {

    const selected =
    document.querySelector<HTMLInputElement>(
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
const currentQuestion =
    QuestionEngine.getCurrentQuestion();

if (!currentQuestion) {
    return;
}
    player.questionsAnswered++;

    PlayerStorage.save(player);

    updateStats();

    const explanation =
        byId<HTMLDivElement>("explanation");

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

 byId<HTMLButtonElement>("submit-answer").style.display = "none";
byId<HTMLButtonElement>("dont-know").style.display = "none";

byId<HTMLButtonElement>("next-question").style.display = "inline-block";
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

function showCorrectExplanation(
    result: QuestionResult
) {

    const explanation =
        byId<HTMLDivElement>("explanation");

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

${result.explanation}

</p>

`;

}

/*==================================================
  INCORRECT ANSWER
==================================================*/

function showIncorrectExplanation(
    result: QuestionResult
) {

    const explanation =
        byId<HTMLDivElement>("explanation");

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

<strong>${result.correctAnswerText}</strong>

</p>

<p>

${result.explanation}

</p>

`;

}

/*==================================================
  HOP CELEBRATION
==================================================*/

function showHop() {

    const hop =
        byId<HTMLDivElement>("hop-celebration");

    const hopMessage =
        byId<HTMLElement>("hop-message");

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
        byId<HTMLDivElement>("explanation");

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

function showLevelComplete() {
    const explanation =
    byId<HTMLDivElement>("explanation");

    const reward =
        Treasure.open(player);

    PlayerStorage.save(player);

    explanation.innerHTML = `
        <div class="level-complete">
            <h2>🎉 Level Complete!</h2>

            <p>You answered <strong>20 questions</strong>.</p>

            <p>🎁 You earned <strong>1 Treasure Chest</strong>!</p>

            <p>

                ✨ Inside was:

                <strong>${reward.item}</strong>

            </p>

            <p>

                📦 Total Treasure Chests:
                <strong>${player.treasureChests}</strong>

            </p>

            <p>Keep going to complete your next level!</p>
        </div>
    `;

}

function showWorldComplete() {

    const explanation =
        byId<HTMLDivElement>("explanation");

    const completedWorld =
        Worlds.getWorld(player.world);


    PlayerStorage.save(player);
    updateStats();

    const nextWorld =
        Worlds.getNextWorld(player.world - 1);

    const completedWorldName =
        completedWorld?.name ?? `World ${player.world - 1}`;

    const nextWorldName =
        nextWorld?.name ?? "Master Explorer";

    explanation.innerHTML = `

    <h2>🌍 World Complete!</h2>

    <p>

    🧙 <strong>Fantastic, Sia!</strong>

    </p>

    <p>

    You have completed

    <strong>${completedWorldName}</strong>!

    </p>

    <hr>

    <p>

    ${nextWorld
        ? `✨ <strong>${nextWorldName} Unlocked!</strong>`
        : `👑 <strong>Congratulations!</strong>`}

    </p>

    <p>

    ${nextWorld
        ? `💎 Welcome to <strong>${nextWorldName}</strong>`
        : `🎉 You have completed every world!`}

    </p>

    <p>

    ⭐ Adventure Points:
        <strong>${player.adventurePoints}</strong>

        <br><br>

        🏅 Worlds Completed:
        <strong>${player.worldsCompleted}</strong>

    </p>

    <p>

    🎒 Pack your backpack...

    Your next adventure begins now!

    </p>

    <p>

    ➡️ Click <strong>Next Question</strong> to continue.

    </p>

    `;

}


/*==================================================
  HIDE EXPLANATION
==================================================*/

function hideExplanation() {

    byId<HTMLDivElement>("explanation")
        .classList.add("hidden");

    byId<HTMLButtonElement>("next-question")
        .style.display = "none";

}

/*==================================================
  CLEAR ANSWERS
==================================================*/

function clearAnswerSelection() {

    document
    .querySelectorAll<HTMLElement>(".answer-option")
    .forEach(option => {

            option.classList.remove(
                "correct",
                "incorrect",
                "selected"
            );

            option.style.pointerEvents = "auto";

        });

}

function lockAnswerUI(
    selectedAnswer: number,
    correctAnswer: number
): void {

    const answerOptions =
        document.querySelectorAll<HTMLElement>(".answer-option");

    answerOptions.forEach(option => {
        option.style.pointerEvents = "none";
    });

    byId<HTMLButtonElement>("submit-answer").style.display = "none";
    byId<HTMLButtonElement>("dont-know").style.display = "none";
    byId<HTMLButtonElement>("next-question").style.display = "inline-block";

    answerOptions.forEach((option, index) => {

        if (index === correctAnswer) {

            option.classList.add("correct");

        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {

            option.classList.add("incorrect");

        }

    });

}


/*==================================================
  UPDATE PLAYER STATS
==================================================*/

function updateStats() {

    byId<HTMLElement>("stars").textContent =
        player.stars.toString();

    byId<HTMLElement>("treasure-chests").textContent =
        player.treasureChests.toString();

    byId<HTMLElement>("level").textContent =
        `${player.levelName}`;
    
    byId<HTMLElement>("level-progress").textContent =
        `${player.questionsThisLevel} / 20`;
    
    const world =
    Worlds.getWorld(player.world);

    byId<HTMLElement>("world").textContent =
        world
            ? world.name
            : "";

        byId<HTMLElement>("world").title =
            `Worlds Completed: ${player.worldsCompleted}`;

        byId<HTMLElement>("xp-progress").style.width =
            `${Math.min(player.xp, 100)}%`;

    Dashboard.renderTreasureGallery(player);
    Dashboard.renderStatistics(player);
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

let wizzyTimer: ReturnType<typeof setInterval> | null = null;

function typeWizzyMessage(text: string): void {

    const element =
        byId<HTMLElement>("wizzy-message");

    if (!element) {

        return;

    }

    if (wizzyTimer !== null) {
    clearInterval(wizzyTimer!);
}

    element.textContent = "";

    let index = 0;

    wizzyTimer = setInterval(() => {

        if (index >= text.length) {

            clearInterval(wizzyTimer!);

            wizzyTimer = null;

            return;

        }

        element.textContent += text[index];

        index++;

    }, 28);

}