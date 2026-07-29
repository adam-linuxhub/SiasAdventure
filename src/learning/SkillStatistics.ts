export class SkillStatistics {

    private attempts = 0;

    private correct = 0;

    record(correct: boolean): void {

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