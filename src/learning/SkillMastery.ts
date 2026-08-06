/*==================================================
  SIA'S ADVENTURE

  SKILL MASTERY
==================================================*/

import type { Question } from "../questionEngine";
import { QuestionProgressStorage } from "../storage/QuestionProgressStorage";

export const SkillMastery = {

    /*==============================================
      IS DIFFICULTY MASTERED
    ==============================================*/

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

        const masteredQuestions =

            skillQuestions.filter(

                question =>

                    question.id !== undefined &&

                    QuestionProgressStorage.isMastered(

                        question.id

                    )

            );


        return (

            masteredQuestions.length ===

            skillQuestions.length &&

            skillQuestions.length > 0

        );

    }

};