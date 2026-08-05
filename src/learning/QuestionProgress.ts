/*==================================================
  SIA'S ADVENTURE

  QUESTION PROGRESS TYPES

==================================================*/

export interface QuestionProgress {

    questionId: string;

    attempts: number;

    correctCount: number;

    lastAnswerCorrect: boolean;

    reviewedThisAdventure: boolean;

}

export interface ReviewQuestion {

    questionId: string;

    dueAtQuestion: number;

}

export interface CarryForwardQuestion {

    questionId: string;

}