/*==================================================
  SIA'S ADVENTURE

  QUESTION SELECTOR

==================================================*/

import type { Question } from "./questionEngine";

export const QuestionSelector = {

    select(
        availableQuestions: Question[]
    ): Question {

        return availableQuestions[
            Math.floor(
                Math.random() *
                availableQuestions.length
            )
        ];

    }

};