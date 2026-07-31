/*==================================================
  SIA'S ADVENTURE

  RENDERER FACTORY

==================================================*/

import type { Question } from "../questionEngine";

import {

    renderStandardQuestion

} from "./standardQuestionRenderer";

import {

    renderNvrQuestion

} from "./nvrQuestionRenderer";

export function renderQuestion(

    question: Question,

    onNvrAnswer?: (

        row: number,

        column: number

    ) => void

): void {

    switch (

        question.type

    ) {

        case "nvr":

            renderNvrQuestion(

                question,

                onNvrAnswer ??

                (() => {})

            );

            break;

        default:

            renderStandardQuestion(

                question

            );

    }

}