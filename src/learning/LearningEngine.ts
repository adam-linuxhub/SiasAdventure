import {
    SkillContent,
    MultipleChoiceActivity
} from "../content/types";

export class LearningEngine {

    private currentIndex = 0;

    private attempts = 0;

    private correct = 0;

    constructor(
        private readonly skill: SkillContent
    ) {}

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

    recordAnswer(correct: boolean): void {

        this.attempts++;

        if (correct) {

            this.correct++;

        }

    }

    getAttempts(): number {

        return this.attempts;

    }

    getCorrect(): number {

        return this.correct;

    }

    getAccuracy(): number {

        if (this.attempts === 0) {

            return 0;

        }

        return Math.round(
            (this.correct / this.attempts) * 100
        );

    }

}