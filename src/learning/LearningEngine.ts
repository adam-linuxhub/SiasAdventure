import {
    SkillContent,
    MultipleChoiceActivity
} from "../content/types";

import {
    ActivityProgress,
    MasteryLevel
} from "./types";

import { SkillStatistics } from "./SkillStatistics";

export class LearningEngine {

    private currentIndex = 0;

    private readonly statistics =
        new SkillStatistics();

    private readonly progress =
        new Map<string, ActivityProgress>();

    constructor(
        private readonly skill: SkillContent
    ) {

        for (const activity of skill.activities) {

            this.progress.set(
                activity.id,
                {
                    activityId: activity.id,
                    attempts: 0,
                    correct: 0,
                    confidence: 0,
                    history: []
                }
            );

        }

    }

    getSkill(): SkillContent {

        return this.skill;

    }

    getSkillId(): string {

        return this.skill.id;

    }

    getSkillName(): string {

        return this.skill.name;

    }

    getActivities(): MultipleChoiceActivity[] {

        return this.skill.activities;

    }

    getCurrentActivity(): MultipleChoiceActivity {

        return this.skill.activities[this.currentIndex];

    }

    hasNextActivity(): boolean {

        return this.currentIndex <
            this.skill.activities.length - 1;

    }

    nextActivity(): MultipleChoiceActivity {

        if (this.hasNextActivity()) {

            this.currentIndex++;

        }

        return this.getCurrentActivity();

    }

    reset(): void {

        this.currentIndex = 0;

    }

    recordAnswer(

        correct: boolean,

        responseTimeMs = 0

    ): void {

        this.recordActivityAnswer(

            this.getCurrentActivity(),

            correct,

            responseTimeMs

        );

    }

    private getConfidenceChange(

        difficulty: number,

        correct: boolean

    ): number {

        const changes = [

            { correct: 6, incorrect: -8 },

            { correct: 8, incorrect: -10 },

            { correct: 10, incorrect: -12 },

            { correct: 12, incorrect: -15 },

            { correct: 15, incorrect: -18 }

        ];

        const values =

            changes[Math.max(

                1,

                Math.min(5, difficulty)

            ) - 1];

        return correct

            ? values.correct

            : values.incorrect;

    }

    recordActivityAnswer(

        activity: MultipleChoiceActivity,

        correct: boolean,

        responseTimeMs = 0

    ): void {

        this.statistics.record(correct);

        const progress =
            this.progress.get(activity.id);

        if (!progress) {

            return;

        }

        progress.attempts++;

        if (correct) {

            progress.correct++;

        }

        const change = this.getConfidenceChange(

            activity.difficulty,

            correct

        );

        progress.confidence = Math.max(

            0,

            Math.min(

                100,

                progress.confidence + change

            )

        );

        progress.history.push({

            correct,

            answeredAt: new Date(),

            responseTimeMs

        });

        if (progress.history.length > 10) {

            progress.history.shift();

        }

        progress.lastSeen = new Date();

    }

    getActivityProgress(

        activity: MultipleChoiceActivity

    ): ActivityProgress {

        return this.progress.get(
            activity.id
        )!;

    }

    getMasteryLevel(

        activity: MultipleChoiceActivity

    ): MasteryLevel {

        const confidence =
            this.getActivityProgress(
                activity
            ).confidence;

        if (confidence <= 20) {

            return MasteryLevel.New;

        }

        if (confidence <= 40) {

            return MasteryLevel.Learning;

        }

        if (confidence <= 60) {

            return MasteryLevel.Improving;

        }

        if (confidence <= 80) {

            return MasteryLevel.Confident;

        }

        return MasteryLevel.Mastered;

    }

    getDaysSinceLastSeen(

        activity: MultipleChoiceActivity

    ): number {

        const progress =
            this.getActivityProgress(activity);

        if (!progress.lastSeen) {

            return Number.MAX_SAFE_INTEGER;

        }

        const milliseconds =
            Date.now() -
            progress.lastSeen.getTime();

        return Math.floor(

            milliseconds /

            (1000 * 60 * 60 * 24)

        );

    }

    getAttempts(): number {

        return this.statistics.getAttempts();

    }

    getCorrect(): number {

        return this.statistics.getCorrect();

    }

    getAccuracy(): number {

        return this.statistics.getAccuracy();

    }

}