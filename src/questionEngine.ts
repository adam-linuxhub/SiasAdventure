import type { Player } from "./types";

export interface Question {
  question: string;
  hint: string;
  answers: string[];
  correct: number;
  explanation: string;
  xp?: number;
}

export const QuestionEngine = {
  shuffledQuestions: [] as Question[],
  currentIndex: 0,

  initialise(questions: Question[]): void {
    this.shuffledQuestions = [...questions];

    // Fisher-Yates shuffle
    for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [
        this.shuffledQuestions[i],
        this.shuffledQuestions[j],
      ] = [
        this.shuffledQuestions[j],
        this.shuffledQuestions[i],
      ];
    }

    this.currentIndex = 0;
  },

  getRandomQuestion(
    _player: Player,
    questions: Question[]
  ): Question {
    if (this.shuffledQuestions.length === 0) {
      this.initialise(questions);
    }

    if (this.currentIndex >= this.shuffledQuestions.length) {
      this.initialise(questions);
    }

    return this.shuffledQuestions[this.currentIndex++];
  },
};