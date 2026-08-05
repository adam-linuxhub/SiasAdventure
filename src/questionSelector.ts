/*==================================================
  SIA'S ADVENTURE

  QUESTION SELECTOR

==================================================*/

import type { Question } from "./questionEngine";

export const QuestionSelector = {

    select(

        availableQuestions: Question[],

        preferredQuestionId?: string

    ): Question {

        /*==========================================
          PREFERRED QUESTION
        ==========================================*/

        if (preferredQuestionId) {

            const preferredQuestion =

                availableQuestions.find(

                    question =>

                        question.id === preferredQuestionId

                );

            if (preferredQuestion) {

                return preferredQuestion;

            }

        }

        /*==========================================
          RANDOM QUESTION
        ==========================================*/

        return availableQuestions[

            Math.floor(

                Math.random() *

                availableQuestions.length

            )

        ];

    }

};