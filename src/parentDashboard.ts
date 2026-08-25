import type { Player } from "./types";
import { Worlds } from "./worlds";
import { LearningEngine } from "./learning";
import { getAllSkills } from "./content";
import { SkillProgressStorage } from "./storage/SkillProgressStorage";
import { QuestionProgressStorage } from "./storage/QuestionProgressStorage";
import skillMetadata from "./content/generatedSkillMetadata";
import { getSkill } from "./content/getSkill";

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
                ? getSkill(
                    weakest[0].skillId
                )?.title ?? weakest[0].skillId
                : "no specific area";

        const strongestSkill =
            strongest.length > 0
                ? getSkill(
                    strongest[0].skillId
                )?.title ?? strongest[0].skillId
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

    const skillData = skills.map(skill => {
    const questions =
        skill.activities.filter(
            activity => activity.id
        );

    const progress =
        LearningEngine.skills.get(skill.skillId);

    const questionsSeen =
        progress?.questionsSeen ?? 0;

    const correctAnswers =
        progress?.correct ?? 0;

    const accuracy =
        questionsSeen > 0
            ? Math.round(
                (correctAnswers / questionsSeen) * 100
            )
            : null;

    const progressCount =
    Math.min(
        questionsSeen,
        questions.length
    );

    let status = "Not Started";

    if (questionsSeen > 0) {

        status = "Learning";

    }

    if (
        progress?.mastery === 100 &&
        questionsSeen >= 10
    ) {

        status = "Mastered";

    }

    return {

        subject:
            skillMetadata[skill.skillId]?.subject ??
            "Unknown",

        title:
            skill.title,

        totalQuestions:
            questions.length,

        mastered:
            progressCount,

        accuracy,

        status

    };

});

    // Skills that Sia has started working on
    const activeSkills =
        skillData
            .filter(
                skill => skill.accuracy !== null
            )
            .sort((a, b) => {

                const subjectComparison =
                    a.subject.localeCompare(
                        b.subject
                    );

                if (subjectComparison !== 0) {
                    return subjectComparison;
                }

                if (
                    a.accuracy! !==
                    b.accuracy!
                ) {
                    return (
                        a.accuracy! -
                        b.accuracy!
                    );
                }

                return a.title.localeCompare(
                    b.title
                );

            });

    // Skills Sia has not started
    const notStartedSkills =
        skillData
            .filter(
                skill => skill.accuracy === null
            )
            .sort((a, b) => {

                const subjectComparison =
                    a.subject.localeCompare(
                        b.subject
                    );

                if (subjectComparison !== 0) {
                    return subjectComparison;
                }

                return a.title.localeCompare(
                    b.title
                );

            });

    const activeRows =
        activeSkills
            .map(skill => {

                return `
                    <tr>

                        <td>
                            ${skill.subject}
                        </td>

                        <td>
                            ${skill.title}
                        </td>

                        <td>
                            ${skill.mastered}
                            /
                            ${skill.totalQuestions}
                        </td>

                        <td>
                            ${skill.accuracy}%
                        </td>

                        <td>
                            ${skill.status}
                        </td>

                    </tr>
                `;

            })
            .join("");

    const notStartedRows =
        notStartedSkills
            .map(skill => {

                return `
                    <tr>

                        <td>
                            ${skill.subject}
                        </td>

                        <td>
                            ${skill.title}
                        </td>

                        <td>
                            0
                            /
                            ${skill.totalQuestions}
                        </td>

                        <td>
                            —
                        </td>

                        <td>
                            Not Started
                        </td>

                    </tr>
                `;

            })
            .join("");

    container.innerHTML = `

        <div class="card">

            <h2>
                Skills in Progress
            </h2>

            <p>
                These are the skills Sia has started
                working on. They are shown from
                lowest to highest accuracy.
            </p>

            <table class="skills-table">

                <thead>

                    <tr>

                        <th>Subject</th>
                        <th>Skill</th>
                        <th>Progress</th>
                        <th>Accuracy</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    ${activeRows}

                </tbody>

            </table>

        </div>

        <div class="card">

            <h2>
                Not Yet Started
            </h2>

            <p>
                These skills have not yet been
                attempted.
            </p>

            <table class="skills-table">

                <thead>

                    <tr>

                        <th>Subject</th>
                        <th>Skill</th>
                        <th>Progress</th>
                        <th>Accuracy</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    ${notStartedRows}

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

                                    ${getSkill(skill.skillId)?.title ?? skill.skillId}

                                </strong>

                                (${skillMetadata[skill.skillId]?.subject ?? "Unknown"})

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

                                    ${getSkill(skill.skillId)?.title ?? skill.skillId}

                                </strong>

                                (${skillMetadata[skill.skillId]?.subject ?? "Unknown"})

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