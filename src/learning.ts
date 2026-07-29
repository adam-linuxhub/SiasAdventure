/*==================================================
  LEARNING ENGINE
==================================================*/

import { SkillRegistry } from "./skills";

export interface SkillProgress {

    skillId: string;

    questionsSeen: number;

    correct: number;

    incorrect: number;

    mastery: number;

    confidence: number;

}

export interface SubjectProgress {

    subject: string;

    skills: number;

    questionsSeen: number;

    correct: number;

    mastery: number;

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

        } else {

            progress.incorrect++;

        }

        progress.mastery = Math.round(
            (progress.correct /
                progress.questionsSeen) * 100
        );

        progress.confidence =
            Math.min(
                progress.questionsSeen,
                10
            ) * 10;

    },

    getWeakestSkill(): string | null {

        if (this.skills.size === 0) {

            return null;

        }

        let weakest: SkillProgress | null = null;

        let lowestScore =
            Number.MAX_SAFE_INTEGER;

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
                a.skillId.localeCompare(
                    b.skillId
                )
            );

    },

    getStrongestSkills(
        limit = 5
    ): SkillProgress[] {

        return [...this.skills.values()]
            .sort((a, b) => {

                if (b.mastery !== a.mastery) {

                    return b.mastery - a.mastery;

                }

                return b.confidence - a.confidence;

            })
            .slice(0, limit);

    },

    getWeakestSkills(
        limit = 5
    ): SkillProgress[] {

        return [...this.skills.values()]
            .sort((a, b) => {

                if (a.mastery !== b.mastery) {

                    return a.mastery - b.mastery;

                }

                return a.confidence - b.confidence;

            })
            .slice(0, limit);

    },

    getSubjectProgress(): SubjectProgress[] {

        const subjects =
            new Map<string, SubjectProgress>();

        this.getAllSkills().forEach(skill => {

            const subject =
                SkillRegistry.getSubject(
                    skill.skillId
                );

            let progress =
                subjects.get(subject);

            if (!progress) {

                progress = {

                    subject,

                    skills: 0,

                    questionsSeen: 0,

                    correct: 0,

                    mastery: 0

                };

                subjects.set(
                    subject,
                    progress
                );

            }

            progress.skills++;

            progress.questionsSeen +=
                skill.questionsSeen;

            progress.correct +=
                skill.correct;

        });

        subjects.forEach(progress => {

            progress.mastery =
                progress.questionsSeen === 0
                    ? 0
                    : Math.round(
                        (progress.correct /
                            progress.questionsSeen) * 100
                    );

        });

        return [...subjects.values()]
            .sort(
                (a, b) =>
                    b.mastery - a.mastery
            );

    },

    getOverallMastery(): number {

        if (this.skills.size === 0) {

            return 0;

        }

        let total = 0;

        for (const skill of this.skills.values()) {

            total += skill.mastery;

        }

        return Math.round(
            total / this.skills.size
        );

    },

    getStars(
        mastery: number
    ): number {

        if (mastery >= 90) return 5;

        if (mastery >= 75) return 4;

        if (mastery >= 60) return 3;

        if (mastery >= 40) return 2;

        if (mastery >= 20) return 1;

        return 0;

    }

};