/*==================================================
  SIA'S ADVENTURE

  QUESTION PROGRESS MANAGER

==================================================*/

import {
    QuestionProgress,
    ReviewQuestion,
    CarryForwardQuestion
} from "./QuestionProgress";

const STORAGE_KEY =
    "sias-adventure-question-progress";

export const QuestionProgressManager = {

    /*==============================================
      DATA
    ==============================================*/

    progress:
        new Map<string, QuestionProgress>(),

    reviewQueue:
        [] as ReviewQuestion[],

    carryForwardQueue:
        [] as CarryForwardQuestion[],

    /*==============================================
      LOAD
    ==============================================*/

    load(): void {

        const json =
            localStorage.getItem(STORAGE_KEY);

        if (!json) {

            this.progress.clear();

            return;

        }

        const data =
            JSON.parse(json) as QuestionProgress[];

        this.progress.clear();

        data.forEach(progress => {

            this.progress.set(

                progress.questionId,

                progress

            );

        });

    },

    /*==============================================
      SAVE
    ==============================================*/

    save(): void {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(

                [...this.progress.values()]

            )

        );

    },

    /*==============================================
      GET
    ==============================================*/

    get(

        questionId: string

    ): QuestionProgress {

        let progress =

            this.progress.get(

                questionId

            );

        if (!progress) {

            progress = {

                questionId,

                attempts: 0,

                correctCount: 0,

                lastAnswerCorrect: false,

                reviewedThisAdventure: false

            };

            this.progress.set(

                questionId,

                progress

            );

        }

        return progress;

    },

    /*==============================================
      IS MASTERED
    ==============================================*/

    isMastered(

        questionId: string

    ): boolean {

        return this.get(

            questionId

        ).correctCount >= 3;

    }

};