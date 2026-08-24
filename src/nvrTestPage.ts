/*==================================================
  SIA'S ADVENTURE

  NVR DEVELOPMENT TEST PAGE

  This page deliberately does NOT use:
  - GameController
  - QuestionEngine
  - PlayerStorage
  - LearningEngine
  - QuestionProgressStorage
  - SkillProgressStorage
==================================================*/

import NvrRenderer from "./nvr/NvrRenderer";

import {
    getNvrTestAsQuestion,
    checkNvrTestAnswer
} from "./nvrTestMode";

import type { NvrQuestion }
    from "./content/nonVerbalReasoning/nvrTypes";

function byId<T extends HTMLElement>(
    id: string
): T {

    const element =
        document.getElementById(id);

    if (!element) {

        throw new Error(
            `Missing element: ${id}`
        );

    }

    return element as T;

}


/*==================================================
  QUESTION
==================================================*/

const question =
    getNvrTestAsQuestion();


byId<HTMLElement>("question-text")
    .textContent =
        question.question;


byId<HTMLElement>("hint-text")
    .textContent =
        question.hint;


/*==================================================
  CANVAS
==================================================*/

const canvas =
    document.createElement("canvas");

canvas.id = "nvr-canvas";

canvas.style.display = "block";
canvas.style.width = "100%";
canvas.style.height = "420px";


byId<HTMLDivElement>("answers")
    .appendChild(canvas);


/*==================================================
  RENDERER
==================================================*/

const renderer =
    new NvrRenderer(canvas);


renderer.render(
    question.data as NvrQuestion
);

/*==================================================
  ANSWER
==================================================*/

renderer.attach(

    (
        row,
        column
    ) => {

        const correct =
            checkNvrTestAnswer(
                question,
                row,
                column
            );


        const result =
            byId<HTMLDivElement>(
                "test-result"
            );


        result.textContent =
            correct
                ? "CORRECT — test answer only."
                : "INCORRECT — test answer only.";

    }

);