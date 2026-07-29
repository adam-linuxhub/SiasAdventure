import {
    SkillContent,
    MultipleChoiceActivity
} from "../content/types";

import { LearningEngine } from "./LearningEngine";

export interface ActivityCandidate {

    engine: LearningEngine;

    activity: MultipleChoiceActivity;

}

export class LearningManager {

    private readonly engines: LearningEngine[];

    private static readonly SHORTLIST_SIZE = 10;

    constructor(
        skills: SkillContent[]
    ) {

        this.engines = skills.map(
            skill => new LearningEngine(skill)
        );

    }

    getEngines(): LearningEngine[] {

        return this.engines;

    }

    getEngine(
        skillId: string
    ): LearningEngine | undefined {

        return this.engines.find(
            engine =>
                engine.getSkillId() === skillId
        );

    }

    getActivities(): ActivityCandidate[] {

        return this.engines.flatMap(engine =>

            engine.getActivities().map(activity => ({

                engine,

                activity

            }))

        );

    }

    getNextActivity(): ActivityCandidate {

        const ranked = this
            .getActivities()
            .map(candidate => ({

                candidate,

                score: this.calculateScore(candidate)

            }))
            .sort(

                (a, b) =>

                    b.score - a.score

            );

        const shortlist = ranked.slice(

            0,

            Math.min(

                LearningManager.SHORTLIST_SIZE,

                ranked.length

            )

        );

        return shortlist[

            Math.floor(

                Math.random() *

                shortlist.length

            )

        ].candidate;

    }

    private calculateScore(

        candidate: ActivityCandidate

    ): number {

        const engine =
            candidate.engine;

        const activity =
            candidate.activity;

        const progress =
            engine.getActivityProgress(
                activity
            );

        let score = 100;

        score += 100 - progress.confidence;

        if (progress.attempts === 0) {

            score += 100;

        }

        score -= progress.attempts;

        const days =
            engine.getDaysSinceLastSeen(
                activity
            );

        if (days >= 30) {

            score += 50;

        }

        else if (days >= 7) {

            score += 25;

        }

        else if (days >= 1) {

            score += 10;

        }

        return score;

    }

}