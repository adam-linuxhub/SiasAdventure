/*==================================================
  SIA'S ADVENTURE

  NVR QUESTION RENDERER

  Displays a Non-Verbal Reasoning question
  using the canvas renderer.

==================================================*/

import NvrRenderer from "../nvr/NvrRenderer";

import type {
    NvrQuestion
} from "../content/nonVerbalReasoning/nvrTypes";

/*==================================================
  PRIVATE
==================================================*/

let renderer: NvrRenderer | null = null;

/*==================================================
  HELPERS
==================================================*/

function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}

/*==================================================
  PUBLIC
==================================================*/

export function renderNvrQuestion(

    question: NvrQuestion,

    onAnswer: (

        row: number,

        column: number

    ) => void

): void {

    /*----------------------------------------------
      Question text
    ----------------------------------------------*/

    byId<HTMLElement>("question-text").textContent =
        question.question;

    byId<HTMLElement>("hint-text").textContent =
        question.hint;

    /*----------------------------------------------
      Clear existing answers
    ----------------------------------------------*/

    const answers =
        byId<HTMLDivElement>("answers");

    answers.innerHTML = "";

    /*----------------------------------------------
      Create canvas
    ----------------------------------------------*/

    const canvas =
        document.createElement("canvas");

    canvas.id = "nvr-canvas";

    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "420px";

    answers.appendChild(canvas);

    /*----------------------------------------------
      Create renderer
    ----------------------------------------------*/

    renderer = new NvrRenderer(canvas);

    renderer.render(question);

    renderer.attach(

        (

            row,

            column

        ) => {

            onAnswer(

                row,

                column

            );

        }

    );

}

/*==================================================
  PUBLIC
==================================================*/

export function resetNvrRenderer(): void {

    renderer?.reset();

}

export function rerenderNvrQuestion(

    question: NvrQuestion

): void {

    if (!renderer) {

        return;

    }

    renderer.render(question);

}

export function destroyNvrRenderer(): void {

    renderer = null;

}