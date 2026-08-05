/*==================================================
  SIA'S ADVENTURE

  SKILL MASTERY

==================================================*/

import type { Question } from "../questionEngine";
import { QuestionProgressStorage } from "../storage/QuestionProgressStorage";

export const SkillMastery = {

    isDifficultyMastered(

        questions: Question[],

        skillId: string,

        difficulty: 1 | 2 | 3 | 4 | 5

    ): boolean {

        const skillQuestions =

            questions.filter(

                question =>

                    question.skillId === skillId &&

                    question.difficulty === difficulty

            );

        if (

            skillQuestions.length === 0

        ) {

            return false;

        }

        return skillQuestions.every(

            question =>

                question.id &&

                QuestionProgressStorage.isMastered(

                    question.id

                )

        );

    }

};