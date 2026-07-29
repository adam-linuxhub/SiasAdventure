export type LearningStage =
    | "recognise"
    | "understand"
    | "apply"
    | "master";

export type ActivityId = string;

export type SkillId = string;

export interface MultipleChoiceActivity {

    id: string;

    question: string;

    options: string[];

    answer: number;

    explanation: string;

    difficulty: 1 | 2 | 3 | 4 | 5;

    estimatedSeconds: number;

    tags: string[];

}

export interface SkillContent {
    skillId: SkillId;

    title: string;

    description: string;

    version: 1;

    activities: MultipleChoiceActivity[];
}