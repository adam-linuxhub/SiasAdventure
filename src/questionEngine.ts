/*==================================================
  SIA'S ADVENTURE

  QUESTION ENGINE

==================================================*/

import { QuestionSelector } from "./questionSelector";

/*==================================================
  QUESTION
==================================================*/

export type QuestionType =
    | "maths"
    | "english"
    | "vr"
    | "nvr";

export interface Question {

    type: QuestionType;

    id?: string;

    skillId?: string;

    stage?:
        | "recognise"
        | "understand"
        | "apply"
        | "master";

    difficulty?: 1 | 2 | 3 | 4 | 5;

    tags?: string[];

    question: string;

    hint: string;

    /**
     * Text questions display these.
     *
     * NVR ignores them but keeps the same
     * internal model.
     */
    answers: string[];

    /**
     * Index of the correct answer.
     */
    correct: number;

    explanation: string;

    xp?: number;

    /**
     * Optional payload for specialised
     * renderers (NVR, future puzzle types).
     */
    data?: unknown;

}

/*==================================================
  RESULT
==================================================*/

export interface QuestionResult {

    correct: boolean;

    correctAnswerText: string;

    explanation: string;

    xpAwarded: number;

    starsAwarded: number;

}

/*==================================================
  ENGINE
==================================================*/

export const QuestionEngine = {

    shuffledQuestions: [] as Question[],

    currentIndex: 0,

    currentQuestion: null as Question | null,

    /*==============================================
      INITIALISE
    ==============================================*/

    initialise(

        questions: Question[]

    ): void {

        this.shuffledQuestions = [...questions];

        for (

            let i = this.shuffledQuestions.length - 1;

            i > 0;

            i--

        ) {

            const j = Math.floor(

                Math.random() *

                (i + 1)

            );

            [

                this.shuffledQuestions[i],

                this.shuffledQuestions[j]

            ] = [

                this.shuffledQuestions[j],

                this.shuffledQuestions[i]

            ];

        }

        this.currentIndex = 0;

        this.currentQuestion = null;

    },

    /*==============================================
      NEXT QUESTION
    ==============================================*/

    getNextQuestion(

        questions: Question[]

    ): Question {

        if (

            this.shuffledQuestions.length === 0

        ) {

            this.initialise(

                questions

            );

        }

        if (

            this.currentIndex >=

            this.shuffledQuestions.length

        ) {

            this.initialise(

                questions

            );

        }

        const remainingQuestions =

            this.shuffledQuestions.slice(

                this.currentIndex

            );

        this.currentQuestion =

            QuestionSelector.select(

                remainingQuestions

            );

        const selectedIndex =

            this.shuffledQuestions.indexOf(

                this.currentQuestion

            );

        [

            this.shuffledQuestions[this.currentIndex],

            this.shuffledQuestions[selectedIndex]

        ] = [

            this.shuffledQuestions[selectedIndex],

            this.shuffledQuestions[this.currentIndex]

        ];

        this.currentIndex++;

        return this.currentQuestion;

    },

    /*==============================================
      CURRENT QUESTION
    ==============================================*/

    getCurrentQuestion():

        Question | null {

        return this.currentQuestion;

    },

    /*==============================================
      SUBMIT ANSWER
    ==============================================*/

    submitAnswer(

        answer: number

    ): QuestionResult {

        if (

            !this.currentQuestion

        ) {

            throw new Error(

                "No current question."

            );

        }

        const correct =

            answer ===

            this.currentQuestion.correct;

        return {

            correct,

            correctAnswerText:

                this.currentQuestion.answers[

                    this.currentQuestion.correct

                ] ?? "",

            explanation:

                this.currentQuestion.explanation,

            xpAwarded:

                correct

                    ? (

                        this.currentQuestion.xp

                        ?? 10

                    )

                    : 0,

            starsAwarded:

                correct

                    ? 5

                    : 0

        };

    },

    /*==============================================
      RESET
    ==============================================*/

    reset(): void {

        this.currentIndex = 0;

        this.currentQuestion = null;

    }

};