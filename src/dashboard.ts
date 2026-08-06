import type { Player } from "./types";
import { Worlds } from "./worlds";
import { LearningEngine } from "./learning";
import { getAllSkills } from "./content";
import { SkillProgressStorage } from "./storage/SkillProgressStorage";
import { QuestionProgressStorage } from "./storage/QuestionProgressStorage";
import {
    SkillRegistry,
    type Subject
} from "./skills";

function byId<T extends HTMLElement>(
    id: string
): T {

    const element =
        document.getElementById(id);

    if (!element) {

        throw new Error(
            `Missing element: ${id}`
        );

    }

    return element as T;

}

export const Dashboard = {

    /*==================================================
      SUMMARY
    ==================================================*/

    renderSummary(
        player: Player
    ): void {

        const container =
            byId<HTMLDivElement>(
                "dashboard-summary"
            );

        const accuracy =
            player.questionsAnswered > 0
                ? Math.round(
                    player.correct /
                    player.questionsAnswered *
                    100
                )
                : 0;

        const weakest =
            LearningEngine
                .getWeakestSkills();

        const strongest =
            LearningEngine
                .getStrongestSkills();

        const weakestSkill =
            weakest.length > 0
                ? SkillRegistry.getName(
                    weakest[0].skillId
                )
                : "no specific area";

        const strongestSkill =
            strongest.length > 0
                ? SkillRegistry.getName(
                    strongest[0].skillId
                )
                : "all skills";

        let progress = "";

        if (accuracy >= 90) {

            progress =
                "excellent";

        }
        else if (accuracy >= 75) {

            progress =
                "good";

        }
        else {

            progress =
                "steady";

        }

        container.innerHTML = `

            <div class="card">

                <h2>

                    Learning Summary

                </h2>

                <p>

                    Sia is making
                    <strong>${progress}</strong>
                    progress.

                </p>

                <p>

                    She has answered
                    <strong>

                        ${player.questionsAnswered}

                    </strong>

                    questions with an overall accuracy of

                    <strong>

                        ${accuracy}%

                    </strong>.

                </p>

                <p>

                    Her strongest area is

                    <strong>

                        ${strongestSkill}

                    </strong>.

                </p>

                <p>

                    The main area requiring additional practice is

                    <strong>

                        ${weakestSkill}

                    </strong>.

                </p>

                <p>

                    Short, regular practice sessions will help
                    maintain confidence while continuing to
                    strengthen weaker skills.

                </p>

            </div>

        `;

    },
    /*==================================================
      OVERVIEW
    ==================================================*/

    renderOverview(
        player: Player
    ): void {

        const world =
            Worlds.getWorld(
                player.world
            );

        const accuracy =
            player.questionsAnswered > 0
                ? Math.round(
                    player.correct /
                    player.questionsAnswered *
                    100
                )
                : 0;

        byId<HTMLDivElement>(
            "overall-progress"
        ).innerHTML = `

            <div class="overview-grid">

                <div class="overview-card">

                    <div class="overview-title">

                        Questions Answered

                    </div>

                    <div class="overview-value">

                        ${player.questionsAnswered}

                    </div>

                </div>

                <div class="overview-card">

                    <div class="overview-title">

                        Correct Answers

                    </div>

                    <div class="overview-value">

                        ${player.correct}

                    </div>

                </div>

                <div class="overview-card">

                    <div class="overview-title">

                        Accuracy

                    </div>

                    <div class="overview-value">

                        ${accuracy}%

                    </div>

                </div>

                <div class="overview-card">

                    <div class="overview-title">

                        Current Level

                    </div>

                    <div class="overview-value">

                        ${player.levelName}

                    </div>

                </div>

            </div>

        `;

    },

    /*==================================================
      STATISTICS
    ==================================================*/

    renderStatistics(
        player: Player
    ): void {

        const accuracy =
            player.questionsAnswered > 0
                ? Math.round(
                    player.correct /
                    player.questionsAnswered *
                    100
                )
                : 0;

        byId<HTMLDivElement>(
            "statistics"
        ).innerHTML = `

            <div class="card">

                <h2>

                    Statistics

                </h2>

                <div class="statistics-grid">

                    <div class="stat-card">

                        <div class="stat-title">

                            Questions Answered

                        </div>

                        <div class="stat-value">

                            ${player.questionsAnswered}

                        </div>

                    </div>

                    <div class="stat-card">

                        <div class="stat-title">

                            Correct Answers

                        </div>

                        <div class="stat-value">

                            ${player.correct}

                        </div>

                    </div>

                    <div class="stat-card">

                        <div class="stat-title">

                            Accuracy

                        </div>

                        <div class="stat-value">

                            ${accuracy}%

                        </div>

                    </div>

                </div>

            </div>

        `;

    },

    /*==================================================
      SKILLS REPORT
    ==================================================*/

    renderSkillsReport(): void {

        const container =

            byId<HTMLDivElement>(

                "skills-report"

            );

        const skills =

            getAllSkills();

        if (skills.length === 0) {

            container.innerHTML = `

                <div class="card">

                    No learning data available.

                </div>

            `;

            return;

        }

        const rows = skills.map(skill => {

            const difficulty =

                SkillProgressStorage.getDifficulty(

                    skill.skillId

                );

            let mastered = 0;

            let learning = 0;

            let review = 0;

            let notAttempted = 0;

            for (

                const activity of

                skill.activities

            ) {

                if (!activity.id) {

                    continue;

                }

                const progress =

                    QuestionProgressStorage.get(

                        activity.id

                    );

                if (

                    QuestionProgressStorage.isMastered(

                        activity.id

                    )

                ) {

                    mastered++;

                }
                else if (

                    progress.reviewAfterQuestion !== null ||

                    progress.carryForward

                ) {

                    review++;

                }
                else if (

                    progress.attempts > 0

                ) {

                    learning++;

                }
                else {

                    notAttempted++;

                }

            }

            return `

            <tr>

                <td>

                    -

                </td>

                <td>

                    ${skill.title}

                </td>

                <td>

                    Level ${difficulty}

                </td>

                <td>

                    ${mastered}

                </td>

                <td>

                    ${learning}

                </td>

                <td>

                    ${review}

                </td>

                <td>

                    ${notAttempted}

                </td>

            </tr>

            `;

        }).join("");

        container.innerHTML = `

            <div class="card">

                <h2>

                    Adaptive Learning Report

                </h2>

                <table class="skills-table">

                    <thead>

                        <tr>

                            <th>Category</th>

                            <th>Skill</th>

                            <th>Difficulty</th>

                            <th>Mastered</th>

                            <th>Learning</th>

                            <th>Review</th>

                            <th>Not Attempted</th>

                        </tr>
                    </thead>

                    <tbody>

                        ${rows}

                    </tbody>

                </table>

            </div>

        `;

    },
    
    /*==================================================
      RECOMMENDATIONS
    ==================================================*/

    renderRecommendations(): void {

        const container =
            byId<HTMLDivElement>(
                "recommendations"
            );

        const weakest =
            LearningEngine
                .getWeakestSkills();

        const strongest =
            LearningEngine
                .getStrongestSkills();

        if (

            weakest.length === 0 ||

            strongest.length === 0

        ) {

            container.innerHTML = `

                <div class="card">

                    No learning data available.

                </div>

            `;

            return;

        }

        container.innerHTML = `

            <div class="card">

                <h2>

                    Weekly Recommendations

                </h2>

                <h3>

                    Priority Skills

                </h3>

                <ul>

                    ${weakest
                        .slice(0, 3)
                        .map(skill => `

                            <li>

                                <strong>

                                    ${SkillRegistry.getName(skill.skillId)}

                                </strong>

                                (${SkillRegistry.getSubject(skill.skillId)})

                            </li>

                        `)
                        .join("")}

                </ul>

                <h3>

                    Strongest Skills

                </h3>

                <ul>

                    ${strongest
                        .slice(0, 3)
                        .map(skill => `

                            <li>

                                <strong>

                                    ${SkillRegistry.getName(skill.skillId)}

                                </strong>

                                (${SkillRegistry.getSubject(skill.skillId)})

                            </li>

                        `)
                        .join("")}

                </ul>

                <p>

                    Recommended practice:
                    15–20 minutes,
                    3 times this week.

                </p>

            </div>

        `;

    }

};