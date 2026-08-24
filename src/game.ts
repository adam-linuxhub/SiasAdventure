import { GameController } from "./gameController";
import type { Player } from "./types";
import { PlayerStorage } from "./storage";
import { Levels } from "./levels";
import { Worlds } from "./worlds";
import { Treasure } from "./treasure";
import { Dashboard } from "./parentDashboard";
import { initialiseTreasureUI } from "./treasureUI";
import { getAllQuestions } from "./questionAdapter";
import type { Relic } from "./treasure";
import { QuestionEngine,type Question,type QuestionResult} from "./questionEngine";
import {renderTreasureGallery} from "./treasureUI";
import NvrRenderer from "./nvr/NvrRenderer";
import {
    convertNvrQuestion
} from "./questionAdapter";

import {
    getNvrTestQuestions
} from "./nvrTestMode";

let player: Player;
let completedWorldId: number | null = null;
let questions: Question[] = [];
let pendingChest = false;
let levelUp = false;
let levelCompletePending = false;
type CelebrationMode = "level" | "world";
let celebrationMode: CelebrationMode = "level";
let nvrRenderer: NvrRenderer | null = null;
let nvrSelectedAnswer:
    { row: number; column: number } | null = null;

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

function updateWorldBackground(): void {

    document.body.className =
        document.body.className.replace(
            /world-\d+/,
            ""
        );

    document.body.classList.add(
        `world-${player.world}`
    );

}

/*==================================================
  START GAME
==================================================*/



function initialiseGame() {
    player = PlayerStorage.load();

    PlayerStorage.loadLearning();

    updateWorldBackground();

    initialiseTreasureUI();

    initialiseFireworks();

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

    updateStats();

}
/*==================================================
  DISPLAY QUESTION
==================================================*/

function displayQuestion(): void {

    const currentQuestion =
        QuestionEngine.getCurrentQuestion();

    if (!currentQuestion) {
        return;
    }

    clearAnswerSelection();
    nvrSelectedAnswer = null;
    if (nvrRenderer) {

        nvrRenderer.clearSelection();

    }
    const message =
        byId<HTMLDivElement>("game-message");

    message.classList.remove("visible");
    message.textContent = "";

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

    const answers =
        byId<HTMLDivElement>("answers");

    answers.innerHTML = "";

    const nvrContainer =
    byId<HTMLDivElement>("nvr-container");


    if (currentQuestion.type === "nvr") {

        answers.style.display = "none";

        nvrContainer.classList.add("active");

        if (!nvrRenderer) {

            const canvas =
                byId<HTMLCanvasElement>("nvr-canvas");

            nvrRenderer =
                new NvrRenderer(canvas);
                        nvrRenderer.attach(
                (row, column) => {

                    nvrSelectedAnswer = {

                row,

                column

            };

                }
            );


        }

        nvrRenderer.render(
            currentQuestion.data as import(
                "./content/nonVerbalReasoning/nvrTypes"
            ).NvrQuestion
        );

        return;

    }

    nvrContainer.classList.remove("active");

    answers.style.display = "";

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

        label
            .querySelector<HTMLInputElement>("input")!
            .addEventListener("change", () => {

                document
                    .querySelectorAll<HTMLElement>(".answer-option")
                    .forEach(option => {
                        option.classList.remove("selected");
                    });

                label.classList.add("selected");

                message.classList.remove("visible");
                message.textContent = "";

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

    showCorrectExplanation(result);

}
else {

    showIncorrectExplanation(result);

}



if (worldComplete) {

    showWorldComplete();

}
else if (levelComplete) {

    pendingChest = true;

    levelCompletePending = true;

}
else if (levelUp) {

    showLevelUp();

}



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

    byId<HTMLButtonElement>("continue-level")
    .addEventListener("click", continueLevel);

    byId<HTMLButtonElement>("open-level-chest")
    .addEventListener(
        "click",
        openLevelTreasure
    );

    

    /*==================================================
    SUBMIT ANSWER
    ==================================================*/

    function submitAnswer() {

        const currentQuestion =
            QuestionEngine.getCurrentQuestion();

        if (!currentQuestion) {

            return;

        }

        /*==================================================
        NVR
        ==================================================*/

        if (currentQuestion.type === "nvr") {

            if (!nvrSelectedAnswer) {

                showMessage(
                    "Choose an answer first."
                );

                return;

            }

            const nvrQuestion =
                currentQuestion.data as import(
                    "./content/nonVerbalReasoning/nvrTypes"
                ).NvrQuestion;

            const correct =
                nvrQuestion.answer.row ===
                    nvrSelectedAnswer.row &&

                nvrQuestion.answer.column ===
                    nvrSelectedAnswer.column;

            showMessage(

                correct
                    ? "Correct!"
                    : "Not quite. Try again."

            );

            /*
            * NVR test flow only.
            *
            * Do not call checkAnswer().
            * Do not save progress.
            */

            byId<HTMLButtonElement>(
                "submit-answer"
            ).style.display = "none";

            byId<HTMLButtonElement>(
                "dont-know"
            ).style.display = "none";

            byId<HTMLButtonElement>(
                "next-question"
            ).style.display = "inline-block";

            return;

        }

        /*==================================================
        NORMAL QUESTIONS
        ==================================================*/

        const selected =
            document.querySelector<HTMLInputElement>(
                "input[name='answer']:checked"
            );

        if (!selected) {

            showMessage(
                "Choose an answer first."
            );

            return;

        }

        checkAnswer(
            Number(selected.value)
        );

    }

function showMessage(message: string): void {

    const element = document.getElementById("game-message");

    if (!element) return;

    element.textContent = message;
    element.classList.add("visible");

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

    const message =

        "That's perfectly okay! " +

        "Every great wizard learns by practising.\n" +

        currentQuestion.explanation;

    typeWizzyMessage(message);


 byId<HTMLButtonElement>("submit-answer").style.display = "none";
byId<HTMLButtonElement>("dont-know").style.display = "none";

byId<HTMLButtonElement>("next-question").style.display = "inline-block";
}

/*==================================================
  NEXT QUESTION
==================================================*/

function nextQuestion() {

    if (levelCompletePending) {

        levelCompletePending = false;

        showCelebrationOverlay();

        return;

    }

    loadRandomQuestion();

}

function continueLevel(): void {

    hideLevelOverlay();

    levelCompletePending = false;

    player.questionsThisLevel = 0;

    QuestionEngine.reset();

    PlayerStorage.save(player);

    loadRandomQuestion();

}

/*==================================================
  CORRECT ANSWER
==================================================*/

function showCorrectExplanation(
    result: QuestionResult
) {

    const message =

        wizzyCorrectMessages[
            Math.floor(
                Math.random() *
                wizzyCorrectMessages.length
            )
        ];

    typeWizzyMessage(

        `${message}\n${result.explanation}`

    );

}

/*==================================================
  INCORRECT ANSWER
==================================================*/

function showIncorrectExplanation(
    result: QuestionResult
) {

    const message =

        wizzyIncorrectMessages[
            Math.floor(
                Math.random() *
                wizzyIncorrectMessages.length
            )
        ];

    typeWizzyMessage(

        `${message}\n` +

        `The correct answer was: ` +

        `${result.correctAnswerText}\n` +

        result.explanation

    );

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

    if (!reward) {

        return;

    }

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

function showCelebrationOverlay(): void {

    const chestImage =
        byId<HTMLImageElement>("level-chest-image");

    const overlayTitle =
        byId<HTMLElement>("level-complete-title");

    const chestTitle =
        byId<HTMLElement>("level-chest-title");

    const chestMessage =
        byId<HTMLElement>("level-chest-message");

    const openButton =
        byId<HTMLButtonElement>("open-level-chest");

    const continueButton =
        byId<HTMLButtonElement>("continue-level");

    const relic =
        byId<HTMLDivElement>("level-relic");

    // Reset chest image
    chestImage.src =
        "images/magic/treasure-chest.png";

    chestImage.classList.remove("shake");

    // Hide revealed relic
    relic.classList.add("hidden");
    relic.classList.remove("show");
    relic.innerHTML = "";

    // Reset buttons
    openButton.disabled = false;
    openButton.style.display = "inline-block";

    continueButton.style.display = "none";

    if (celebrationMode === "level") {

        overlayTitle.textContent =
            "🎉 LEVEL COMPLETE!";

        chestTitle.textContent =
            "🎁 Magical Treasure Chest";

        chestMessage.innerHTML = `

            You answered all
            <strong>20 magical questions correctly!</strong>

            <br><br>

            A mysterious treasure chest has appeared.

            

        `;

        typeWizzyMessage(

            "Fantastic work, Sia! You've completed another level. I wonder what magical relic is hiding inside that treasure chest..."

        );

    } else {

        overlayTitle.textContent =
            "🌍 WORLD COMPLETE!";

        chestTitle.textContent =
            "🏆 World Complete";

        chestMessage.innerHTML = `

            You recovered all
            <strong>30 magical relics!</strong>

            <br><br>

            This magical world has been restored.

        `;

        typeWizzyMessage(

            "Amazing, Sia! You recovered every relic in this world. A brand new adventure is waiting for you!"

        );

        openButton.style.display =
            "none";

        continueButton.style.display =
            "inline-block";

    }

    byId<HTMLDivElement>("level-complete-overlay")
        .classList.remove("hidden");

    startFireworks();

}


/*==================================================
  OPEN LEVEL TREASURE
==================================================*/

function openLevelTreasure(): void {

    if (!pendingChest) {

        return;

    }

    pendingChest = false;

    const previousWorld = player.world;

    const reward =
        Treasure.open(player);

    if (!reward) {

        return;

    }


    if (player.world !== previousWorld) {

        completedWorldId = previousWorld;

        celebrationMode = "world";

        showWorldComplete();

        showCelebrationOverlay();

        setTimeout(() => {

            updateWorldBackground();

        }, 1500);

    }

    PlayerStorage.save(player);

    updateStats();

    const chestImage =
        byId<HTMLImageElement>("level-chest-image");

    const chestTitle =
        byId<HTMLElement>("level-chest-title");

    const chestMessage =
        byId<HTMLElement>("level-chest-message");

    const openButton =
        byId<HTMLButtonElement>("open-level-chest");

    const continueButton =
        byId<HTMLButtonElement>("continue-level");

    const relic =
        byId<HTMLDivElement>("level-relic");

    chestImage.classList.add("shake");

    openButton.disabled = true;

    setTimeout(() => {

        // TODO:
        // Replace with an open chest image later.
        chestImage.src =
            "images/magic/treasure-chest.png";

        chestImage.classList.remove("shake");

        relic.innerHTML = `
            <img
                src="images/relics/world${previousWorld}/${reward.image}"
                alt="${reward.item}"
                class="relic-image">
        `;

        relic.classList.remove("hidden");
        relic.classList.remove("show");

        void relic.offsetWidth;

        relic.classList.add("show");

        chestTitle.textContent =
            `🎉 ${reward.item}`;

        let rarityColour = "#8BC34A";

        switch (reward.rarity) {

            case "Rare":
                rarityColour = "#42A5F5";
                break;

            case "Epic":
                rarityColour = "#AB47BC";
                break;

            case "Legendary":
                rarityColour = "#FFD700";
                break;

        }

        chestMessage.innerHTML = `

            <div style="font-size:1.25rem;font-weight:bold;color:${rarityColour};">

                ${reward.rarity} Relic

            </div>

            <br>

            <div style="font-size:1.1rem;">

                ${reward.description}

            </div>

            <br>

            ⭐ +50 Stars

            <br>

            🏅 ${reward.badge}

        `;

        continueButton.style.display =
            "inline-block";

        continueButton.animate(

            [

                { opacity: 0, transform: "translateY(20px)" },

                { opacity: 1, transform: "translateY(0px)" }

            ],

            {

                duration: 450,

                fill: "forwards"

            }

        );

        openButton.style.display = "none";

    }, 650);

}

function hideLevelOverlay() {

    byId<HTMLDivElement>("level-complete-overlay")
        .classList.add("hidden");
    celebrationMode = "level";
        stopFireworks();
}

function showWorldComplete(): void {

    const explanation =
        byId<HTMLDivElement>("explanation");

    const completedWorld =
    Worlds.getWorld(
        completedWorldId ?? player.world
    );

    const nextWorld =
        Worlds.getNextWorld(player.world);

    PlayerStorage.save(player);

    updateStats();

    explanation.innerHTML = `

        <h2>🏆 World Complete!</h2>

        <p>

            <strong>Congratulations, Sia!</strong>

        </p>

        <p>

            You recovered all
            <strong>30 magical relics</strong>
            from

            <strong>${completedWorld?.name ?? "this world"}</strong>.

        </p>

        <hr>

        <p>

            ⭐ Bonus Reward:
            <strong>+500 Stars</strong>

        </p>

        <p>

            🏅 Worlds Completed:
            <strong>${player.worldsCompleted}</strong>

        </p>

        <hr>

        ${
            nextWorld
            ? `

                <p>

                    🌍 Your next destination is

                    <strong>${nextWorld.name}</strong>.

                </p>

                <p>

                    Wizzy is waiting to guide you on your next adventure!

                </p>

            `
            : `

                <p>

                    👑 Amazing!

                    You have completed every world in this year.

                </p>

            `
        }

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
  TREASURE CHEST
==================================================*/


/*==================================================
  UPDATE PLAYER STATS
==================================================*/

function updateStats() {

    byId<HTMLElement>("stars").textContent =
        player.stars.toString();

    byId<HTMLElement>("treasure-chests").textContent =
        player.relics.filter(r =>
            r.startsWith(`w${player.world}-`)
        ).length.toString();
        
    byId<HTMLElement>("level").textContent =
        player.levelName;

    byId<HTMLElement>("level-progress").textContent =
        `${Math.min(player.questionsThisLevel + 1, 20)} / 20`;
    const world =
        Worlds.getWorld(player.world);

    byId<HTMLElement>("world").textContent =
        world ? world.name : "";

    byId<HTMLElement>("world").title =
        `Worlds Completed: ${player.worldsCompleted}`;

    byId<HTMLElement>("xp-progress").style.width =
        `${(player.questionsThisLevel / 20) * 100}%`;
    
    renderTreasureGallery(player);

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
  FIREWORKS
==================================================*/

interface FireworkParticle{

    x:number;

    y:number;

    dx:number;

    dy:number;

    life:number;

    colour:string;
    
    size:number;
}

let fireworksCanvas:HTMLCanvasElement;

let fireworksContext:CanvasRenderingContext2D;

const particles:FireworkParticle[]=[];

let fireworksRunning=false;

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
        clearInterval(wizzyTimer);
        wizzyTimer = null;
    }

    // Preserve line breaks (\n) in the message
    element.style.whiteSpace = "pre-line";

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

function initialiseFireworks(){

    fireworksCanvas=
        byId<HTMLCanvasElement>("fireworks-canvas");

    fireworksContext=
        fireworksCanvas.getContext("2d")!;

    resizeFireworks();

    window.addEventListener(
        "resize",
        resizeFireworks
    );

}

function resizeFireworks(){

    fireworksCanvas.width=
        fireworksCanvas.clientWidth;

    fireworksCanvas.height=
        fireworksCanvas.clientHeight;

}

function launchFirework(){

    const x=
        Math.random()*fireworksCanvas.width;

    const y=
        Math.random()*fireworksCanvas.height*0.5;

    const colours=[

        "#ff3366",

        "#ffcc00",

        "#00ccff",

        "#00ff66",

        "#ffffff",

        "#ff66ff"

    ];

    for(let i=0;i<80;i++){

        const angle=
            Math.random()*Math.PI*2;

        const speed=
            Math.random()*5+2;

        particles.push({

            x,

            y,

            dx:Math.cos(angle)*speed,

            dy:Math.sin(angle)*speed,

            life:60,

            colour:
                colours[
                    Math.floor(
                        Math.random()*colours.length
                    )
                ],
                
            size: Math.random() * 3 + 2

        });

    }

}

function updateFireworks(){

    fireworksContext.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );

    particles.forEach(p=>{

        p.x+=p.dx;

        p.y+=p.dy;

        p.dy+=0.05;

        p.life--;

        fireworksContext.globalAlpha=
            p.life/60;

        fireworksContext.fillStyle=
            p.colour;

        fireworksContext.beginPath();

        fireworksContext.arc(

            p.x,

            p.y,

            p.size,

            0,

            Math.PI*2

        );

        fireworksContext.fill();

    });
    fireworksContext.globalAlpha = 1;

    for(let i=particles.length-1;i>=0;i--){

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

    if(fireworksRunning){

        requestAnimationFrame(
            updateFireworks
        );

    }

}

function startFireworks(){

    if (fireworksRunning) {

        return;

    }

    fireworksRunning = true;

    launchFirework();

    updateFireworks();

    const timer = setInterval(() => {

        if (!fireworksRunning) {

            clearInterval(timer);

            return;

        }

        launchFirework();

    }, 900);

}

function stopFireworks(){

    fireworksRunning=false;

    particles.length=0;

    fireworksContext.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );

}

/*==================================================
  START APPLICATION
==================================================*/

questions =
    getNvrTestQuestions().map(
        convertNvrQuestion
    );

QuestionEngine.initialise(
    questions
);

initialiseGame();
