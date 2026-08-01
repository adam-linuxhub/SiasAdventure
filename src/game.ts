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

    byId<HTMLButtonElement>("submit-answer").style.display =
        "inline-block";

    byId<HTMLButtonElement>("dont-know").style.display =
        "inline-block";

    byId<HTMLButtonElement>("submit-answer").disabled =
        false;

    byId<HTMLButtonElement>("dont-know").disabled =
        false;

    byId<HTMLButtonElement>("next-question").style.display =
        "none";

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

    /*==============================================
      NON-VERBAL REASONING
    ==============================================*/

    if (currentQuestion.type === "nvr") {

        answers.style.display = "none";

        nvrContainer.classList.add(
            "active"
        );

        displayNvrQuestion(

            currentQuestion,

            answerIndex => {

                checkAnswer(

                    answerIndex

                );

            }

        );

        return;

    }

    /*==============================================
      STANDARD QUESTIONS
    ==============================================*/

    answers.style.display = "";

    nvrContainer.classList.remove(
        "active"
    );

    currentQuestion.answers.forEach(

        (
            answer,
            index
        ) => {
                        const label =

                document.createElement(

                    "label"

                );

            label.className =

                "answer-option";

            label.innerHTML = `

<input
type="radio"
name="answer"
value="${index}">
${answer}

`;

            label
                .querySelector<HTMLInputElement>(

                    "input"

                )!
                .addEventListener(

                    "change",

                    () => {

                        document
                            .querySelectorAll<HTMLElement>(

                                ".answer-option"

                            )
                            .forEach(

                                option => {

                                    option.classList.remove(

                                        "selected"

                                    );

                                }

                            );

                        label.classList.add(

                            "selected"

                        );

                    }

                );

            answers.appendChild(

                label

            );

        }

    );

}