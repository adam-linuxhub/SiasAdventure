import type { Question } from "./questionEngine";
import { LearningEngine } from "./learning";

export const QuestionSelector = {

    select(
        availableQuestions: Question[]
    ): Question {

        const weakestSkill =
            LearningEngine.getWeakestSkill();

        if (!weakestSkill) {

            return availableQuestions[
                Math.floor(
                    Math.random() * availableQuestions.length
                )
            ];

        }

        const matchingQuestions =
            availableQuestions.filter(
                question =>
                    question.skillId === weakestSkill
            );

        if (matchingQuestions.length === 0) {

            return availableQuestions[
                Math.floor(
                    Math.random() * availableQuestions.length
                )
            ];

        }

        return matchingQuestions[
            Math.floor(
                Math.random() *
                matchingQuestions.length
            )
        ];

    }

};