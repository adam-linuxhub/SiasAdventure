/*==================================================
  SIA'S ADVENTURE

  QUESTION ADAPTER

  Converts curriculum activities into the
  Question format required by QuestionEngine.

==================================================*/

import { getAllSkills } from "./content";

import type { Question } from "./questionEngine";

import type {
    MultipleChoiceActivity,
    SkillContent
} from "./content/types";

import type {
    NvrQuestion
} from "./content/nonVerbalReasoning/nvrTypes";

/*==================================================
  CONVERT
==================================================*/

function convertActivity(
    activity: MultipleChoiceActivity
): Question {

    const correct =
        activity.options.indexOf(
            activity.correctAnswer
        );

    if (correct === -1) {

        throw new Error(
            `Correct answer not found for ${activity.id}`
        );

    }

    return {

        type: "maths",

        id: activity.id,

        skillId: activity.skillId,

        stage: activity.stage,

        difficulty: activity.difficulty,

        tags: activity.tags,

        question: activity.question,

        hint: activity.hint ?? "",

        answers: [...activity.options],

        correct,

        explanation: activity.explanation,

        xp: 10

    };

}

/*==================================================
  CONVERT NVR QUESTION
==================================================*/

export function convertNvrQuestion(
    question: NvrQuestion
): Question {
    
    return {

        type: "nvr",

        id: question.id,

        skillId: question.skillId,

        stage: question.stage,

        difficulty: question.difficulty,

        tags: question.tags,

        question: question.question,

        hint: question.hint,

        /*
         * NVR does not use text answers.
         *
         * Keep the generic Question model satisfied,
         * while the actual visual question is stored
         * in data for the NVR renderer.
         */
        answers: [],

        /*
         * The visual answer is stored inside the NVR
         * payload. The generic correct index is not
         * used by the NVR renderer.
         */
        correct: 0,

        explanation: question.explanation,

        xp: 10,

        data: question

    };

}

/*==================================================
  PUBLIC
==================================================*/

export function getAllQuestions(): Question[] {

const skills: SkillContent[] =
    getAllSkills();


    const questions =
        skills.flatMap(skill =>
            skill.activities.map(convertActivity)
        );

    return questions;

}