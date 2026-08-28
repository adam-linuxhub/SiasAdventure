export type LearningStage =
    | "recognise"
    | "understand"
    | "apply"
    | "master";

export type ActivityId = string;
export type SkillId = string;

export interface MultipleChoiceActivity {

    id: ActivityId;

    skillId: SkillId;

    category?: {
        subject: string;
        subSubject: string;
    };

    stage: LearningStage;

    question: string;

    options: string[];

    correctAnswer: string;

    explanation: string;

    /*
     * Optional metadata
     */

    difficulty?: 1 | 2 | 3 | 4 | 5;

    estimatedSeconds?: number;

    tags?: string[];

    hint?: string;

    image?: string;

}

export interface SkillContent {

    skillId: SkillId;

    title: string;

    description: string;

    version: 1;

    activities: MultipleChoiceActivity[];

}