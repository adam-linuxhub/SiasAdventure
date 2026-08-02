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