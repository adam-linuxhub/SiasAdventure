/*==================================================
  SIA'S ADVENTURE

  CONTENT

==================================================*/

import mathematics from "./mathematics";
import english from "./english";
import science from "./science";
import history from "./history";
import geography from "./geography";
import verbalReasoning from "./verbalReasoning";
import verbalSkills from "./verbalSkills";
import nonVerbalReasoning from "./nonVerbalReasoning";

import type { Question } from "../questionEngine";
import type {
    MultipleChoiceActivity,
    SkillContent
} from "./types";


/*==================================================
  CONTENT TREE
==================================================*/

export const content = {

    mathematics,

    english,

    science,

    history,

    geography,

    verbalReasoning,

    verbalSkills,

    nonVerbalReasoning

};


/*==================================================
  COLLECT QUESTIONS
==================================================*/

function collectActivitiesWithCategories(
    node: unknown,
    questions: MultipleChoiceActivity[],
    subject: string = "",
    subSubject: string = ""
): void {

    if (Array.isArray(node)) {

        for (const item of node) {

            collectActivitiesWithCategories(
                item,
                questions,
                subject,
                subSubject
            );
        }

        return;
    }

    if (
        node &&
        typeof node === "object"
    ) {

        const object =
            node as Record<string, unknown>;

        // Actual question
        if (
            "question" in object &&
            "correctAnswer" in object
        ) {

            questions.push({
                ...(object as unknown as MultipleChoiceActivity),
                category: {
                    subject,
                    subSubject
                }
            });

            return;
        }

        // Continue through content tree
        for (const [key, value] of Object.entries(object)) {

            /*
             * Year folders are structural only.
             * They are not subjects or sub-subjects.
             */
            if (
                key === "year3" ||
                key === "year4" ||
                key === "year5" ||
                key === "year6"
            ) {

                collectActivitiesWithCategories(
                    value,
                    questions,
                    subject,
                    subSubject
                );

                continue;
            }

            const nextSubject =
                subject || key;

            const nextSubSubject =
                subject && !subSubject
                    ? key
                    : subSubject;

            collectActivitiesWithCategories(
                value,
                questions,
                nextSubject,
                nextSubSubject
            );
        }
    }
}

function collectQuestions(
    node: unknown,
    questions: Question[]
): void {

    if (Array.isArray(node)) {

        for (const item of node) {

            collectQuestions(
                item,
                questions
            );
        }

        return;
    }

    if (
        node &&
        typeof node === "object"
    ) {

        const object =
            node as Record<string, unknown>;

        if (
            "question" in object &&
            "correctAnswer" in object
        ) {

            questions.push(
                object as unknown as Question
            );

            return;
        }

        for (const value of Object.values(object)) {

            collectQuestions(
                value,
                questions
            );
        }
    }
}

/*==================================================
  GET ALL QUESTIONS
==================================================*/

export function getAllQuestions(): Question[] {

    const questions: Question[] = [];

    collectQuestions(
        content,
        questions
    );

    return questions;
}

/*==================================================
  GET ALL ACTIVITIES WITH CATEGORIES
==================================================*/

export function getAllActivitiesWithCategories(): MultipleChoiceActivity[] {

    const activities: MultipleChoiceActivity[] = [];

    collectActivitiesWithCategories(
        content,
        activities
    );

    return activities;
}

/*==================================================
  COLLECT SKILLS
==================================================*/

function collectSkills(

    node: unknown,

    skills: SkillContent[]

): void {


    if (

        Array.isArray(

            node

        )

    ) {


        for (

            const item

            of node

        ) {


            collectSkills(

                item,

                skills

            );

        }


        return;

    }


    if (

        node

        &&

        typeof node === "object"

    ) {


        if (

            "skillId" in node

            &&

            "activities" in node

        ) {


            skills.push(

                node as SkillContent

            );


            return;

        }


        for (

            const value

            of Object.values(

                node

            )

        ) {


            collectSkills(

                value,

                skills

            );

        }

    }

}


/*==================================================
  GET ALL SKILLS
==================================================*/

export function getAllSkills(): SkillContent[] {


    const skills: SkillContent[] = [];


    collectSkills(

        content,

        skills

    );


    return skills;

}