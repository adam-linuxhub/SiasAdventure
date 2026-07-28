import type { Player } from "./types";

export interface Question {

    id?: string;

    skillId?: string;

    stage?: "recognise" | "understand" | "apply" | "master";

    difficulty?: 1 | 2 | 3 | 4 | 5;

    tags?: string[];

    question: string;

    hint: string;

    answers: string[];

    correct: number;

    explanation: string;

    xp?: number;
}

export interface QuestionResult {

    correct: boolean;

    correctAnswer: number;

    explanation: string;

    xpAwarded: number;

    starsAwarded: number;
}

export const QuestionEngine = {

    shuffledQuestions: [] as Question[],

    currentIndex: 0,

    currentQuestion: null as Question | null,

    initialise(questions: Question[]): void {

        this.shuffledQuestions = [...questions];

        for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

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

    getNextQuestion(
    questions: Question[]
): Question {

        if (this.shuffledQuestions.length === 0) {

            this.initialise(questions);

        }

        if (this.currentIndex >= this.shuffledQuestions.length) {

            this.initialise(questions);

        }

        this.currentQuestion =
            this.shuffledQuestions[this.currentIndex++];

        return this.currentQuestion;
    },

    getCurrentQuestion(): Question | null {

        return this.currentQuestion;

    },

    submitAnswer(answer: number): QuestionResult {

        if (!this.currentQuestion) {

            throw new Error("No current question.");

        }

        const correct =
            answer === this.currentQuestion.correct;

        return {

    correct,

    correctAnswer: this.currentQuestion.correct,

    explanation: this.currentQuestion.explanation,

    xpAwarded: correct
        ? (this.currentQuestion.xp ?? 10)
        : 0,

    starsAwarded: correct
        ? 5
        : 0
};
    },

    reset(): void {

        this.currentIndex = 0;

        this.currentQuestion = null;
    }
};