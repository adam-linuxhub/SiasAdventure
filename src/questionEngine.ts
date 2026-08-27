/*==================================================
  SIA'S ADVENTURE

  QUESTION ENGINE

==================================================*/

import { QuestionSelector } from "./questionSelector";
import { QuestionProgressStorage } from "./storage/QuestionProgressStorage";
import { SkillProgressStorage } from "./storage/SkillProgressStorage";
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

    category?: {
        subject: string;
        subSubject: string;
    };

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

/*==============================================
  SHUFFLE ANSWERS
==============================================*/

function shuffleAnswers(question: Question): Question {

    const answers = [...question.answers];

    const correctAnswer = answers[question.correct];

    for (let i = answers.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [answers[i], answers[j]] =
            [answers[j], answers[i]];

    }

    return {

        ...question,

        answers,

        correct: answers.indexOf(correctAnswer)

    };

}

/*==================================================
  ENGINE
==================================================*/

export const QuestionEngine = {

    shuffledQuestions: [] as Question[],

    currentIndex: 0,
    questionNumber: 0,
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
        this.questionNumber = 0;
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

        /*------------------------------------------
        REVIEW QUESTION
        ------------------------------------------*/

        const reviewQuestionId =

            QuestionProgressStorage.getDueReviewQuestion(

                this.getQuestionNumber()

            );

        if (reviewQuestionId) {

            const reviewQuestion =

                questions.find(

                    question =>

                        question.id === reviewQuestionId

                );

            if (reviewQuestion) {

                this.currentQuestion =

                    shuffleAnswers(
                        reviewQuestion
                    );

                this.questionNumber++;

                return this.currentQuestion;

            }

        }

        /*------------------------------------------
        NORMAL QUESTION
        ------------------------------------------*/

const remainingQuestions =

    this.shuffledQuestions

        .slice(

            this.currentIndex

        )

        .filter(question => {

            /*------------------------------------------
            KEEP QUESTIONS WITHOUT IDS
            ------------------------------------------*/

            if (!question.id) {

                return true;

            }

            /*------------------------------------------
            KEEP CARRY FORWARD QUESTIONS
            ------------------------------------------*/

            if (

                QuestionProgressStorage
                    .getCarryForwardQuestions()
                    .includes(question.id)

            ) {

                return !QuestionProgressStorage.isMastered(

                    question.id

                );

            }

            /*------------------------------------------
            REMOVE MASTERED QUESTIONS
            ------------------------------------------*/

            if (

                QuestionProgressStorage.isMastered(

                    question.id

                )

            ) {

                return false;

            }

            /*------------------------------------------
            FILTER BY CURRENT DIFFICULTY
            ------------------------------------------*/

            if (

                !question.skillId ||

                !question.difficulty

            ) {

                return true;

            }

            return (

                question.difficulty <=

                SkillProgressStorage.getDifficulty(

                    question.skillId

                )

            );

        });
                
        /*------------------------------------------
        CARRY FORWARD
        ------------------------------------------*/

        const carryForwardQuestions =

            QuestionProgressStorage
                .getCarryForwardQuestions()
                .filter(questionId =>

                    remainingQuestions.some(

                        question =>

                            question.id === questionId

                    )

                );

        let selectedQuestion: Question | undefined;

        if (

            carryForwardQuestions.length > 0 &&

            Math.random() < 0.10

        ) {

            const carryForwardId =

                carryForwardQuestions[

                    Math.floor(

                        Math.random() *

                        carryForwardQuestions.length

                    )

                ];

        const carryForwardQuestion =

            questions.find(

                question =>

                    question.id === carryForwardId &&

                    !QuestionProgressStorage.isMastered(

                        question.id!

                    )

            );

if (

    carryForwardQuestion &&

    !QuestionProgressStorage.isReviewQuestion(

        carryForwardQuestion.id!

    )

) {

    selectedQuestion = carryForwardQuestion;

}
        }
        
        if (!selectedQuestion) {

            if (

                remainingQuestions.length === 0

            ) {

                throw new Error(

                    "No eligible questions remaining."

                );

            }

            selectedQuestion =

                QuestionSelector.select(

                    remainingQuestions

                );

        }

        if (!selectedQuestion) {

            throw new Error(

                "Failed to select a question."

            );

        }

        this.currentQuestion =

            shuffleAnswers(

                selectedQuestion

            );

 
const selectedIndex =

    this.shuffledQuestions.indexOf(

        selectedQuestion

    );

    if (selectedIndex >= 0) {

        [

            this.shuffledQuestions[this.currentIndex],

            this.shuffledQuestions[selectedIndex]

        ] = [

            this.shuffledQuestions[selectedIndex],

            this.shuffledQuestions[this.currentIndex]

        ];

        this.currentIndex++;

    }

        this.questionNumber++;

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
    QUESTION NUMBER
    ==============================================*/

    getQuestionNumber(): number {

        return this.questionNumber;

    },
    
    /*==============================================
      RESET
    ==============================================*/

    reset(): void {

        this.currentIndex = 0;
        this.questionNumber = 0;
        this.currentQuestion = null;

    }

};