/*==================================================
  LEARNING ENGINE
==================================================*/

export interface SkillProgress {

    skillId: string;

    questionsSeen: number;

    correct: number;

    incorrect: number;

    mastery: number;

    confidence: number;

}

export const LearningEngine = {

    skills: new Map<string, SkillProgress>(),

    recordAnswer(
        skillId: string,
        correct: boolean
    ): void {

        let progress =
            this.skills.get(skillId);

        if (!progress) {

            progress = {

                skillId,

                questionsSeen: 0,

                correct: 0,

                incorrect: 0,

                mastery: 0,

                confidence: 0

            };

            this.skills.set(
                skillId,
                progress
            );

        }

        progress.questionsSeen++;

        if (correct) {

            progress.correct++;

        }
        else {

            progress.incorrect++;

        }

                progress.mastery = Math.round(
            (progress.correct /
                progress.questionsSeen) * 100
        );
        
        progress.confidence = Math.min(
            progress.questionsSeen,
            10
        ) * 10;
            },

    getWeakestSkill(): string | null {

    if (this.skills.size === 0) {

        return null;

    }

    let weakest: SkillProgress | null = null;

    let lowestScore = Number.MAX_SAFE_INTEGER;

    for (const skill of this.skills.values()) {

        const score =
            skill.mastery +
            ((100 - skill.confidence) * 0.3);

        if (score < lowestScore) {

            lowestScore = score;
            weakest = skill;

        }

    }

    return weakest?.skillId ?? null;

},

getAllSkills(): SkillProgress[] {

    return [...this.skills.values()]
        .sort((a, b) =>
            a.skillId.localeCompare(b.skillId)
        );

},

getStars(mastery: number): number {

    if (mastery >= 90) return 5;

    if (mastery >= 75) return 4;

    if (mastery >= 60) return 3;

    if (mastery >= 40) return 2;

    if (mastery >= 20) return 1;

    return 0;

}

};