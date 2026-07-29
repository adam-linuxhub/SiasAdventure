export enum MasteryLevel {

    New,

    Learning,

    Improving,

    Confident,

    Mastered

}

export interface AnswerRecord {

    correct: boolean;

    answeredAt: Date;

    responseTimeMs: number;

}

export interface ActivityProgress {

    activityId: string;

    attempts: number;

    correct: number;

    confidence: number;

    history: AnswerRecord[];

    lastSeen?: Date;

}