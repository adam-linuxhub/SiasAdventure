import { MultipleChoiceActivity } from "../content/types";

import { ActivityProgress } from "./types";

export class ConfidenceEngine {

    update(

        activity: MultipleChoiceActivity,

        progress: ActivityProgress,

        correct: boolean

    ): void {

        const change = this.getConfidenceChange(

            activity.difficulty ?? 3,

            correct

        );

        progress.confidence = Math.max(

            0,

            Math.min(

                100,

                progress.confidence + change

            )

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

}