/*==================================================
  ACHIEVEMENTS
==================================================*/

import type { Player } from "./types";

export interface Achievement {

    id: string;

    name: string;

    description: string;

    icon: string;

    unlocked: (player: Player) => boolean;

}

export const AchievementRegistry: Achievement[] = [

    {
        id: "first-question",
        name: "Quiz Beginner",
        description: "Answer your first question.",
        icon: "🎓",

        unlocked: player =>
            player.questionsAnswered >= 1
    },

    {
        id: "100-questions",
        name: "Hard Worker",
        description: "Answer 100 questions.",
        icon: "💯",

        unlocked: player =>
            player.questionsAnswered >= 100
    },

    {
        id: "500-questions",
        name: "Quiz Master",
        description: "Answer 500 questions.",
        icon: "🏆",

        unlocked: player =>
            player.questionsAnswered >= 500
    },

    {
        id: "accuracy-90",
        name: "Accuracy Champion",
        description: "Reach 90% accuracy.",
        icon: "🎯",

        unlocked: player =>
            player.questionsAnswered >= 20 &&
            player.correct / player.questionsAnswered >= 0.9
    },

    {
        id: "treasure-10",
        name: "Treasure Hunter",
        description: "Collect 10 treasures.",
        icon: "💎",

        unlocked: player =>
            player.treasures.length >= 10
    },

    {
        id: "world-1",
        name: "World Explorer",
        description: "Complete your first world.",
        icon: "🌍",

        unlocked: player =>
            player.worldsCompleted >= 1
    }

];

/*==================================================
  ACHIEVEMENT ENGINE
==================================================*/

export const AchievementEngine = {

    getUnlocked(player: Player): Achievement[] {

        return AchievementRegistry.filter(a =>
            a.unlocked(player)
        );

    },

    getLocked(player: Player): Achievement[] {

        return AchievementRegistry.filter(a =>
            !a.unlocked(player)
        );

    }

};