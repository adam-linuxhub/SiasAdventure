/*==================================================
  SIA'S ADVENTURE

  DISPLAY NVR QUESTION

==================================================*/

import type { Question } from "../questionEngine";
import type { NvrQuestion } from "../content/nonVerbalReasoning/nvrTypes";

import NvrRenderer from "./NvrRenderer";

/*==================================================
  RENDERER
==================================================*/

let renderer: NvrRenderer | null = null;

/*==================================================
  DISPLAY
==================================================*/

export function displayNvrQuestion(

    question: Question,

    onAnswerSelected?: (

        answerIndex: number

    ) => void

): void {

    const canvas = document.getElementById(

        "nvr-canvas"

    ) as HTMLCanvasElement;

    if (!canvas) {

        throw new Error(

            "Missing nvr-canvas."

        );

    }

    if (!renderer) {

        renderer = new NvrRenderer(

            canvas

        );

        renderer.attach(

            (

                row,

                column

            ) => {

                if (

                    onAnswerSelected

                ) {

                    onAnswerSelected(

                        column

                    );

                }

            }

        );

    }

    renderer.render(

        question.data as NvrQuestion

    );

}

/*==================================================
  RESET
==================================================*/

export function resetNvrRenderer(): void {

    renderer?.reset();

}