/*==================================================
    SIA'S ADVENTURE
    START SCREEN
==================================================*/


/*==================================================
    CHARACTER DIALOGUE
==================================================*/

const characterDialogue = {

    wizzy: "Welcome back, Sia! Ready for another adventure?",

    hootie: "Need a hint? I'm always here to help!",

    hop: "Let's find some treasure!"

} as const;

const characterNames = {

    wizzy: "Wizzy",

    hop: "Hop",

    hootie: "Hootie"

} as const;

/*==================================================
    ELEMENTS
==================================================*/

const bubble =
    document.getElementById("speech-bubble") as HTMLDivElement | null;

const bubbleName =
    document.getElementById("speech-name") as HTMLDivElement | null;

const bubbleText =
    document.getElementById("speech-text") as HTMLDivElement | null;

const characterCards =
    document.querySelectorAll<HTMLElement>(".character-card");

/*==================================================
    SPARKLES
==================================================*/

function createSparkles(card: HTMLElement): void {

    const rect = card.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            rect.left +
            window.scrollX +
            Math.random() * rect.width +
            "px";

        sparkle.style.top =
            rect.top +
            window.scrollY +
            Math.random() * rect.height +
            "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 900);

    }

}

/*==================================================
    SHOW SPEECH
==================================================*/

function showSpeech(card: HTMLElement): void {

    if (!bubble || !bubbleName || !bubbleText) {

        return;

    }

    const character =
        card.dataset.character as keyof typeof characterDialogue;

    const rect =
        card.getBoundingClientRect();

    bubbleName.textContent =
        characterNames[character];

    bubbleText.textContent =
        characterDialogue[character];

    bubble.style.display = "block";

    bubble.style.left =
        rect.left +
        rect.width / 2 -
        120 +
        window.scrollX +
        "px";

    bubble.style.top =
        rect.top -
        110 +
        window.scrollY +
        "px";

    createSparkles(card);

}

/*==================================================
    HIDE SPEECH
==================================================*/

function hideSpeech(): void {

    if (bubble) {

        bubble.style.display = "none";

    }

}

/*==================================================
    STARS
==================================================*/

function createStars(): void {

    const sky =
        document.getElementById("stars");

    if (!sky) {

        return;

    }

    for (let i = 0; i < 60; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        sky.appendChild(star);

    }

}

/*==================================================
    STORY
==================================================*/

function initialiseStory(): void {

    const storyButton =
        document.getElementById("story-button");

    const storyOverlay =
        document.getElementById("story-overlay");

    const closeStory =
        document.getElementById("close-story");

    const beginAdventure =
        document.getElementById("begin-adventure");

    if (
        !storyButton ||
        !storyOverlay ||
        !closeStory ||
        !beginAdventure
    ) {

        return;

    }

    storyButton.addEventListener("click", () => {

        storyOverlay.classList.remove("hidden");

    });

    closeStory.addEventListener("click", () => {

        storyOverlay.classList.add("hidden");

    });

    beginAdventure.addEventListener("click", () => {

        storyOverlay.classList.add("hidden");

        startAdventure();

    });

}


/*==================================================
    START ADVENTURE
==================================================*/

function startAdventure(): void {

    window.location.href = "game.html";

}

/*==================================================
    BUTTONS
==================================================*/

const startButton =
    document.getElementById("start-adventure");

startButton?.addEventListener("click", () => {

    startAdventure();

});

/*==================================================
    EVENTS
==================================================*/

characterCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        showSpeech(card);

    });

    card.addEventListener("mouseleave", hideSpeech);

});

/*==================================================
    INITIALISE
==================================================*/

createStars();

initialiseStory();
