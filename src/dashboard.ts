import type { Player } from "./types";
import { Treasure } from "./treasure";
import { Worlds } from "./worlds";
import { LearningEngine } from "./learning";
import { AchievementEngine } from "./achievements";
import {
    SkillRegistry,
    type Subject
} from "./skills";

function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}

export const Dashboard = {

    renderStatistics(player: Player): void {

        const accuracy =
            player.questionsAnswered === 0
                ? 0
                : Math.round(
                    (player.correct /
                        player.questionsAnswered) * 100
                );

        const world =
            Worlds.getWorld(player.world);

        byId<HTMLDivElement>("statistics").innerHTML = `

            <div class="stat-card">
                ⭐ Stars
                <strong>${player.stars}</strong>
            </div>

            <div class="stat-card">
                🏆 Rank
                <strong>${player.levelName}</strong>
            </div>

            <div class="stat-card">
                🌍 World
                <strong>${world ? `${player.world}: ${world.name}` : player.world}</strong>
            </div>

            <div class="stat-card">
                ❓ Questions
                <strong>${player.questionsAnswered}</strong>
            </div>

            <div class="stat-card">
                ✅ Correct
                <strong>${player.correct}</strong>
            </div>

            <div class="stat-card">
                🎯 Accuracy
                <strong>${accuracy}%</strong>
            </div>

            <div class="stat-card">
                🎁 Chests
                <strong>${player.treasureChests}</strong>
            </div>

            <div class="stat-card">
                💎 Treasures
                <strong>${player.treasures.length}</strong>
            </div>

            <div class="stat-card">
                🏅 Badges
                <strong>${player.badges.length}</strong>
            </div>

        `;

    },

    renderSubjectSummary(): void {

        const container =
            byId<HTMLDivElement>("subject-summary");

        const subjects =
            LearningEngine.getSubjectProgress();

        if (subjects.length === 0) {

            container.innerHTML =
                "<p>No learning data yet.</p>";

            return;

        }

        const icons: Record<string, string> = {

            "Maths": "🔢",

            "English": "📖",

            "Verbal Reasoning": "🧠",

            "Non-Verbal Reasoning": "🧩"

        };

        container.innerHTML = subjects.map(subject => {

            const stars =
                "★".repeat(
                    LearningEngine.getStars(
                        subject.mastery
                    )
                ) +
                "☆".repeat(
                    5 -
                    LearningEngine.getStars(
                        subject.mastery
                    )
                );

            return `

                <div class="subject-card">

                    <div class="subject-header">

                        <span>

                            ${icons[subject.subject] ?? "📚"}

                            ${subject.subject}

                        </span>

                        <span>

                            ${subject.mastery}%

                        </span>

                    </div>

                    <div class="subject-stars">

                        ${stars}

                    </div>

                    <div class="subject-progress">

                        <div
                            class="subject-progress-bar"
                            style="width:${subject.mastery}%">

                        </div>

                    </div>

                    <div class="subject-footer">

                        ${subject.correct}
                        /
                        ${subject.questionsSeen}
                        correct

                        •

                        ${subject.skills}
                        skills attempted

                    </div>

                </div>

            `;

        }).join("");

    },

renderTreasureGallery(player: Player): void {

    const gallery =
        byId<HTMLDivElement>("treasure-gallery");

    gallery.innerHTML = "";

    const RELICS_PER_SHELF = 5;

    const SHELVES =
        Math.ceil(30 / RELICS_PER_SHELF);
        
    for (

        let shelf = 0;

        shelf < SHELVES;

        shelf++

    ) {

        const shelfElement =
            document.createElement("div");

        shelfElement.className =
            "vault-shelf";

        for (

            let position = 0;

            position < RELICS_PER_SHELF;

            position++

        ) {

            const index =
                shelf * RELICS_PER_SHELF + position;

            const relic =
                Treasure.relics[index];

            const relicElement =
                document.createElement("div");

            if (relic) {

                const owned =
                    player.treasures.includes(
                        relic.item
                    );

                relicElement.className =
                    `vault-relic ${owned ? "owned" : "locked"}`;

                relicElement.innerHTML = `

                    <div class="treasure-icon">

                        ${owned ? relic.icon : "❔"}

                    </div>

                    <div class="treasure-name">

                        ${owned
                            ? relic.item
                            : "Unknown Relic"}

                    </div>

                    <div class="treasure-status rarity-${relic.rarity.toLowerCase()}">

                        ${relic.rarity}

                    </div>

                    <div class="treasure-status">

                        ${owned
                            ? "Recovered ✨"
                            : "Hidden"}

                    </div>

                `;

            }

            else {

                relicElement.className =
                    "vault-relic empty";

                relicElement.innerHTML = `

                    <div class="treasure-icon">

                        ❔

                    </div>

                    <div class="treasure-name">

                        Unknown Relic

                    </div>

                    <div class="treasure-status">

                        ???

                    </div>

                `;

            }

            shelfElement.appendChild(
                relicElement
            );

        }

        gallery.appendChild(
            shelfElement
        );

    }

},

    renderSkillsReport(): void {

        const container =
            byId<HTMLDivElement>("skills-report");

        const skills =
            LearningEngine.getAllSkills();

        if (skills.length === 0) {

            container.innerHTML =
                "<p>No learning data yet.</p>";

            return;

        }

        const subjects: Subject[] = [

            "Maths",

            "English",

            "Verbal Reasoning",

            "Non-Verbal Reasoning"

        ];

        const icons: Record<Subject, string> = {

            "Maths": "🔢",

            "English": "📖",

            "Verbal Reasoning": "🧠",

            "Non-Verbal Reasoning": "🧩"

        };

        container.innerHTML = subjects.map(subject => {

            const subjectSkills =
                skills
                    .filter(skill =>
                        SkillRegistry.getSubject(
                            skill.skillId
                        ) === subject
                    )
                    .sort(
                        (a, b) =>
                            b.mastery - a.mastery
                    );

            if (subjectSkills.length === 0) {

                return "";

            }

            return `

                <div class="subject-group">

                    <h3>

                        ${icons[subject]} ${subject}

                    </h3>

                    ${subjectSkills.map(skill => {

                        const starCount =
                            LearningEngine.getStars(
                                skill.mastery
                            );

                        const stars =
                            "★".repeat(starCount) +
                            "☆".repeat(5 - starCount);

                        return `

                            <div class="skill-card">

                                <div class="skill-header">

                                    <span class="skill-name">

                                        ${SkillRegistry.getName(skill.skillId)}

                                    </span>

                                    <span class="skill-score">

                                        ${skill.mastery}%

                                    </span>

                                </div>

                                <div class="skill-stars">

                                    ${stars}

                                </div>

                                <div class="skill-progress">

                                    <div
                                        class="skill-progress-bar"
                                        style="width:${skill.mastery}%">
                                    </div>

                                </div>

                                <div class="skill-footer">

                                    ${skill.correct}
                                    /
                                    ${skill.questionsSeen}
                                    correct

                                </div>

                            </div>

                        `;

                    }).join("")}

                </div>

            `;

        }).join("");

    },

    renderNeedsPractice(): void {

        const container =
            byId<HTMLDivElement>("needs-practice");

        const skills =
            LearningEngine.getWeakestSkills();

        if (skills.length === 0) {

            container.innerHTML =
                "<p>No learning data yet.</p>";

            return;

        }

        container.innerHTML = skills.map(skill => `

            <div class="practice-card">

                <div>

                    <div class="practice-name">

                        ${SkillRegistry.getName(skill.skillId)}

                    </div>

                    <div class="practice-subject">

                        ${SkillRegistry.getSubject(skill.skillId)}

                    </div>

                </div>

                <div class="practice-score">

                    ${skill.mastery}%

                </div>

            </div>

        `).join("");

    },

    renderStrongestSkills(): void {

        const container =
            byId<HTMLDivElement>("strongest-skills");

        const skills =
            LearningEngine.getStrongestSkills();

        if (skills.length === 0) {

            container.innerHTML =
                "<p>No learning data yet.</p>";

            return;

        }

        container.innerHTML = skills.map(skill => `

            <div class="practice-card">

                <div>

                    <div class="practice-name">

                        ${SkillRegistry.getName(skill.skillId)}

                    </div>

                    <div class="practice-subject">

                        ${SkillRegistry.getSubject(skill.skillId)}

                    </div>

                </div>

                <div class="practice-score">

                    ${skill.mastery}%

                </div>

            </div>

        `).join("");

    },

    renderAchievements(player: Player): void {

        const container =
            byId<HTMLDivElement>("achievements");

        const achievements =
            AchievementEngine.getUnlocked(player);

        if (achievements.length === 0) {

            container.innerHTML =
                "<p>No achievements unlocked yet.</p>";

            return;

        }

        container.innerHTML = achievements.map(achievement => `

            <div class="achievement-card">

                <div class="achievement-icon">

                    ${achievement.icon}

                </div>

                <div class="achievement-info">

                    <div class="achievement-name">

                        ${achievement.name}

                    </div>

                    <div class="achievement-description">

                        ${achievement.description}

                    </div>

                </div>

            </div>

        `).join("");

    }

};