/*==================================================
  SIA'S ADVENTURE

  PARENT DASHBOARD

==================================================*/

import type { Player } from "./types";
import { Worlds } from "./worlds";
import { LearningEngine } from "./learning";
import { getAllQuestions } from "./questionAdapter";
import { getAllSkills } from "./content";
import { SkillProgressStorage } from "./storage/SkillProgressStorage";
import { QuestionProgressStorage } from "./storage/QuestionProgressStorage";
import skillMetadata from "./content/generatedSkillMetadata";
import { getSkill } from "./content/getSkill";


/*==================================================
  HELPERS
==================================================*/

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


/*==================================================
  DASHBOARD
==================================================*/

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


        const questions =
            getAllQuestions();


        /*
         * QuestionProgressStorage contains the
         * persistent question-level progress.
         *
         * The Skills Overview uses this store rather
         * than LearningEngine.skills because the latter
         * is an in-memory learning state and may not yet
         * have been populated when the parent dashboard
         * is opened.
         */
        QuestionProgressStorage.load();


        if (skills.length === 0) {

            container.innerHTML = `

                <div class="card">
                    No learning data available.
                </div>

            `;

            return;

        }


        /*==============================================
          BUILD QUESTION → CATEGORY LOOKUP
        ==============================================*/

        const categoryBySkill =
            new Map<string, string>();

        const subjectBySkill =
            new Map<string, string>();


        for (const question of questions) {

            if (!question.skillId) {
                continue;
            }


            if (question.category?.subject) {

                if (
                    !subjectBySkill.has(
                        question.skillId
                    )
                ) {

                    subjectBySkill.set(
                        question.skillId,
                        question.category.subject
                    );

                }

            }


            if (question.category?.subSubject) {

                if (
                    !categoryBySkill.has(
                        question.skillId
                    )
                ) {

                    categoryBySkill.set(
                        question.skillId,
                        question.category.subSubject
                    );

                }

            }

        }


        /*==============================================
          BUILD SKILL DATA
        ==============================================*/

        const skillData =
            skills.map(skill => {

                const skillQuestions =
                    questions.filter(
                        question =>
                            question.skillId ===
                            skill.skillId
                    );


                /*
                 * Each skill contains a fixed set of
                 * questions. A question is counted as
                 * attempted when its stored attempt
                 * count is greater than zero.
                 */
                let questionsAttempted = 0;

                let correctAnswers = 0;

                let totalAttempts = 0;


                for (const question of skillQuestions) {

                    const progress =
                        QuestionProgressStorage.get(
                            question.id
                        );


                    const attempts =
                        progress?.attempts ?? 0;


                    const correctCount =
                        progress?.correctCount ?? 0;


                    if (attempts > 0) {

                        questionsAttempted++;

                    }


                    totalAttempts += attempts;

                    correctAnswers += correctCount;

                }


                /*
                 * Accuracy is based on all recorded
                 * attempts, rather than the number of
                 * unique questions attempted.
                 */
                const accuracy =
                    totalAttempts > 0
                        ? Math.round(
                            (
                                correctAnswers /
                                totalAttempts
                            ) *
                            100
                        )
                        : null;


                let status =
                    "Not Started";


                if (questionsAttempted > 0) {

                    status =
                        "Learning";

                }


                /*
                 * A skill is considered mastered when
                 * at least 10 questions have been
                 * attempted and every recorded attempt
                 * has been correct.
                 */
                if (
                    totalAttempts > 0 &&
                    accuracy === 100 &&
                    questionsAttempted >= 10
                ) {

                    status =
                        "Mastered";

                }


                return {

                    subject:
                        subjectBySkill.get(
                            skill.skillId
                        ) ??
                        skillMetadata[
                            skill.skillId
                        ]?.subject ??
                        "Unknown",


                    category:
                        categoryBySkill.get(
                            skill.skillId
                        ) ??
                        "Unknown",


                    title:
                        skill.title,


                    totalQuestions:
                        skillQuestions.length,


                    questionsAttempted,


                    accuracy,


                    status

                };

            });


        /*==============================================
          SORT SKILLS
        ==============================================*/

        skillData.sort(
            (a, b) => {

                const subjectComparison =
                    a.subject.localeCompare(
                        b.subject
                    );


                if (
                    subjectComparison !== 0
                ) {

                    return subjectComparison;

                }


                const categoryComparison =
                    a.category.localeCompare(
                        b.category
                    );


                if (
                    categoryComparison !== 0
                ) {

                    return categoryComparison;

                }


                if (
                    a.accuracy !== null &&
                    b.accuracy !== null &&
                    a.accuracy !== b.accuracy
                ) {

                    return (
                        a.accuracy -
                        b.accuracy
                    );

                }


                if (
                    a.accuracy === null &&
                    b.accuracy !== null
                ) {

                    return 1;

                }


                if (
                    a.accuracy !== null &&
                    b.accuracy === null
                ) {

                    return -1;

                }


                return a.title.localeCompare(
                    b.title
                );

            }
        );


        /*==============================================
          GROUP BY SUBJECT
        ==============================================*/

        const subjects =
            new Map<
                string,
                Map<string, typeof skillData>
            >();


        for (const skill of skillData) {

            if (
                !subjects.has(
                    skill.subject
                )
            ) {

                subjects.set(
                    skill.subject,
                    new Map()
                );

            }


            const categories =
                subjects.get(
                    skill.subject
                )!;


            if (
                !categories.has(
                    skill.category
                )
            ) {

                categories.set(
                    skill.category,
                    []
                );

            }


            categories
                .get(skill.category)!
                .push(skill);

        }


        /*==============================================
          RENDER SUBJECTS
        ==============================================*/

        const subjectSections =
            [...subjects.entries()]
                .map(
                    (
                        [
                            subject,
                            categories
                        ]
                    ) => {

                        const categorySections =
                            [...categories.entries()]
                                .map(
                                    (
                                        [
                                            category,
                                            categorySkills
                                        ]
                                    ) => {

                                        const rows =
                                            categorySkills
                                                .map(
                                                    skill => {

                                                        return `

                                                            <tr>

                                                                <td>
                                                                    ${skill.title}
                                                                </td>

                                                                <td>
                                                                    ${
                                                                        skill.questionsAttempted
                                                                    }
                                                                    /
                                                                    ${
                                                                        skill.totalQuestions
                                                                    }
                                                                </td>

                                                                <td>
                                                                    ${
                                                                        skill.accuracy !== null
                                                                            ? `${skill.accuracy}%`
                                                                            : "—"
                                                                    }
                                                                </td>

                                                                <td>
                                                                    ${skill.status}
                                                                </td>

                                                            </tr>

                                                        `;

                                                    }
                                                )
                                                .join("");


                                        return `

                                            <div class="card">

                                                <h3>
                                                    ${category}
                                                </h3>

                                                <table class="skills-table">

                                                    <thead>

                                                        <tr>

                                                            <th>
                                                                Skill
                                                            </th>

                                                            <th>
                                                                Questions
                                                            </th>

                                                            <th>
                                                                Accuracy
                                                            </th>

                                                            <th>
                                                                Status
                                                            </th>

                                                        </tr>

                                                    </thead>

                                                    <tbody>

                                                        ${rows}

                                                    </tbody>

                                                </table>

                                            </div>

                                        `;

                                    }
                                )
                                .join("");


                        return `

                            <section class="skills-subject">

                                <h2>
                                    ${subject}
                                </h2>

                                ${categorySections}

                            </section>

                        `;

                    }
                )
                .join("");


        container.innerHTML = `

            <div class="card">

                <h2>
                    Skills Overview
                </h2>

                <p>
                    Skills are organised by subject and category.
                    Accuracy shows how Sia has performed on the
                    questions she has attempted.
                </p>

            </div>

            ${subjectSections}

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
                                    ${
                                        getSkill(
                                            skill.skillId
                                        )?.title ??
                                        skill.skillId
                                    }
                                </strong>

                                (
                                    ${
                                        skillMetadata[
                                            skill.skillId
                                        ]?.subject ??
                                        "Unknown"
                                    }
                                )

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
                                    ${
                                        getSkill(
                                            skill.skillId
                                        )?.title ??
                                        skill.skillId
                                    }
                                </strong>

                                (
                                    ${
                                        skillMetadata[
                                            skill.skillId
                                        ]?.subject ??
                                        "Unknown"
                                    }
                                )

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