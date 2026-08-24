/*==================================================
  SIA'S ADVENTURE

  NVR TEST MODE

  Test questions must never modify the player's
  real game or learning progress.
==================================================*/

import type { NvrQuestion } from "./content/nonVerbalReasoning/nvrTypes";
import shapeAnalogies from "./content/nonVerbalReasoning/year3/shapeAnalogies/shapeAnalogies";
import {
    convertNvrQuestion
} from "./questionAdapter";
import type { Question } from "./questionEngine";

/*==================================================
  TEST QUESTION
==================================================*/

export function getNvrTestQuestion(): NvrQuestion {

    return shapeAnalogies[0];

}

/*==================================================
  TEST ANSWER
==================================================*/

export function checkNvrTestAnswer(
    question: Question,
    row: number,
    column: number
): boolean {

    const nvrQuestion =
        question.data as NvrQuestion;

    return (
        nvrQuestion.answer.row === row &&
        nvrQuestion.answer.column === column
    );

}


/*==================================================
  TEST CONVERSION
==================================================*/

export function getNvrTestAsQuestion(): Question {

    return convertNvrQuestion(
        getNvrTestQuestion()
    );

}

export function getNvrTestQuestions(): NvrQuestion[] {

    return [
        shapeAnalogies[0],
        shapeAnalogies[1]
    ];

}