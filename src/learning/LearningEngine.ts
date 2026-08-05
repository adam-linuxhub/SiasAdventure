/*==================================================
  SIA'S ADVENTURE

  LEARNING ENGINE

==================================================*/

import type { Question } from "../questionEngine";

export const LearningEngine = {

    /*==============================================
      INITIALISE
    ==============================================*/

    initialise(): void {

        // Future:
        // Load saved learning progress.

    },

    /*==============================================
      START ADVENTURE
    ==============================================*/

    startAdventure(): void {

        // Future:
        // Reset review flags.

    },

    /*==============================================
      END ADVENTURE
    ==============================================*/

    endAdventure(): void {

        // Future:
        // Prepare carry-forward queue.

    },

    /*==============================================
      RECORD ANSWER
    ==============================================*/

    recordAnswer(

        question: Question,

        correct: boolean

    ): void {

        // Future:
        // Update question progress.
        // Add/remove review queue.
        // Update difficulty progress.

    },

    /*==============================================
      NEXT QUESTION
    ==============================================*/

    getNextQuestion(

        questions: Question[]

    ): Question {

        // Temporary implementation.
        // QuestionEngine still chooses.

        return questions[0];

    }

};