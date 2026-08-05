/*==================================================
  SIA'S ADVENTURE

  QUESTION PROGRESS STORAGE

==================================================*/

export interface QuestionProgress {

    questionId: string;

    attempts: number;

    correctCount: number;

    lastAnswerCorrect: boolean;

    reviewAfterQuestion: number | null;

    reviewAttemptsThisAdventure: number;

    carryForward: boolean;

}

const STORAGE_KEY =
    "sias-adventure-question-progress";

export const QuestionProgressStorage = {

    progress: new Map<string, QuestionProgress>(),

    /*==============================================
      LOAD
    ==============================================*/

    load(): void {

        this.progress.clear();

        const json =
            localStorage.getItem(STORAGE_KEY);

        if (!json) {

            return;

        }

        const data =
            JSON.parse(json) as QuestionProgress[];

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
            this.progress.get(questionId);

        if (!progress) {

            progress = {

                questionId,

                attempts: 0,

                correctCount: 0,

                lastAnswerCorrect: false,

                reviewAfterQuestion: null,

                reviewAttemptsThisAdventure: 0,

                carryForward: false

            };

            this.progress.set(

                questionId,

                progress

            );

        }

        return progress;

    },

    /*==============================================
      RECORD ANSWER
    ==============================================*/

    recordAnswer(

        questionId: string,

        correct: boolean

    ): QuestionProgress {

        const progress =
            this.get(questionId);

        progress.attempts++;

        progress.lastAnswerCorrect =
            correct;

        if (correct) {

            progress.correctCount = Math.min(

                3,

                progress.correctCount + 1

            );

        }

        this.save();

        return progress;

    },

    /*==============================================
      SCHEDULE REVIEW
    ==============================================*/

    scheduleReview(

        questionId: string,

        currentQuestionNumber: number

    ): void {

        const progress =
            this.get(questionId);

        if (

            progress.reviewAfterQuestion !== null

        ) {

            return;

        }

        progress.reviewAfterQuestion =
            currentQuestionNumber + 5;

        console.log(
            "[Review] Scheduled",
            questionId,
            "for question",
            progress.reviewAfterQuestion
        );

        this.save();

    },

    /*==============================================
      GET DUE REVIEW
    ==============================================*/

    getDueReviewQuestion(

        currentQuestionNumber: number

    ): string | null {

        for (

            const progress of

            this.progress.values()

        ) {

            if (

                progress.reviewAfterQuestion !== null &&

                progress.reviewAfterQuestion <= currentQuestionNumber &&

                progress.reviewAttemptsThisAdventure < 1

            ) {

                return progress.questionId;

            }

        }

        return null;

    },

    /*==============================================
    GET CARRY FORWARD QUESTIONS
    ==============================================*/

    getCarryForwardQuestions(): string[] {

        const questions: string[] = [];

        for (

            const progress of

            this.progress.values()

        ) {

            if (

                progress.carryForward

            ) {

                questions.push(

                    progress.questionId

                );

            }

        }

        return questions;

    },
    /*==============================================
    COMPLETE REVIEW
    ==============================================*/

    completeReview(

        questionId: string,

        answeredCorrectly: boolean

    ): void {

        const progress =
            this.get(questionId);

        progress.reviewAttemptsThisAdventure++;

        progress.reviewAfterQuestion = null;

        if (!answeredCorrectly) {

            progress.carryForward =   !answeredCorrectly;

        }

        this.save();

    },

    /*==============================================
    RESET ADVENTURE
    ==============================================*/

    resetAdventure(): void {

        this.progress.forEach(progress => {

            progress.reviewAttemptsThisAdventure = 0;

            progress.carryForward = false;

        });

        this.save();

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

    },

    /*==============================================
    IS REVIEW QUESTION
    ==============================================*/

    isReviewQuestion(

        questionId: string

    ): boolean {

        return this.get(

            questionId

        ).reviewAfterQuestion !== null;

    },

    /*==============================================
      GET ALL
    ==============================================*/

    getAll(): QuestionProgress[] {

        return [

            ...this.progress.values()

        ];

    }

};