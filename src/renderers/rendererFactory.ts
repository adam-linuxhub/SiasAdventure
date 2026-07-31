/*==================================================
  SIA'S ADVENTURE

  RENDERER FACTORY

==================================================*/

import type { Question } from "../questionEngine";
import type { NvrQuestion } from "../content/nonVerbalReasoning/nvrTypes";

import {
    renderStandardQuestion
} from "./standardQuestionRenderer";

import {
    renderNvrQuestion
} from "./nvrQuestionRenderer";

export function renderQuestion(

    question: Question | NvrQuestion,

    onNvrAnswer?: (

        row: number,

        column: number

    ) => void

): void {

    if ("figures" in question) {

        renderNvrQuestion(

            question,

            onNvrAnswer ??

            (() => {})

        );

        return;

    }

    renderStandardQuestion(

        question

    );

}