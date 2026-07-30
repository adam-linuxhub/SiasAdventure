export type LearningStage =
    | "recognise"
    | "understand"
    | "apply"
    | "master";

export type ActivityId = string;
export type SkillId = string;

export interface BaseActivity {
    id: ActivityId;
    skillId: SkillId;
    stage: LearningStage;

    question: string;
    explanation: string;

    difficulty: 1 | 2 | 3 | 4 | 5;

    estimatedSeconds?: number;
    hint?: string;
    tags?: string[];
}

/**
 * Final format used by the game.
 */
export interface MultipleChoiceActivity extends BaseActivity {
    options: string[];
    correctAnswer: string;
}

/**
 * Legacy format still found in older content.
 */
export interface LegacyMultipleChoiceActivity extends BaseActivity {
    answers: string[];
    correct: number;
}

/**
 * Transitional format.
 */
export interface IndexedMultipleChoiceActivity extends BaseActivity {
    options: string[];
    answer: number;
}

export type AnyActivity =
    | MultipleChoiceActivity
    | LegacyMultipleChoiceActivity
    | IndexedMultipleChoiceActivity;