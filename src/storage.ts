import type { Player } from "./types";
import {
    LearningEngine,
    type SkillProgress
} from "./learning";

export const PlayerStorage = {

    /*==================================================
      LOAD PLAYER
    ==================================================*/

    load(): Player {

        const saved = localStorage.getItem("siasAdventure");

        if (saved) {

            const player = JSON.parse(saved) as Player;

            /*==========================================
              BACKWARDS COMPATIBILITY
            ==========================================*/

            player.year ??= 3;
            player.adventurePoints ??= 0;
            player.world ??= 1;
            player.worldsCompleted ??= 0;
            player.questionsThisLevel ??= 0;

            player.badges ??= [];
            player.treasures ??= [];
            player.relics ??= [];
            player.worldTreasureCount ??= 0;

            return player;

        }

        return {

            /*==========================================
              PROFILE
            ==========================================*/

            name: "Sia",

            /*==========================================
              PROGRESSION
            ==========================================*/

            level: 1,
            levelName: "Explorer",
            xp: 0,
            adventurePoints: 0,

            /*==========================================
              ADVENTURE
            ==========================================*/

            year: 3,
            world: 1,
            worldsCompleted: 0,

            /*==========================================
              REWARDS
            ==========================================*/

            stars: 0,
            treasureChests: 0,
            badges: [],
            treasures: [],
            relics: [],
            worldTreasureCount: 0,

            /*==========================================
              STATISTICS
            ==========================================*/

            questionsAnswered: 0,
            correct: 0,
            incorrect: 0,
            questionsThisLevel: 0

        };

    },

    /*==================================================
      SAVE PLAYER
    ==================================================*/

    save(player: Player): void {

        localStorage.setItem(
            "siasAdventure",
            JSON.stringify(player)
        );

        this.saveLearning();

    },

    /*==================================================
      RESET PLAYER
    ==================================================*/

    reset(): Player {

        localStorage.removeItem("siasAdventure");
        localStorage.removeItem("siasAdventureLearning");

        LearningEngine.skills.clear();

        const player: Player = {

            /*==========================================
              PROFILE
            ==========================================*/

            name: "Sia",

            /*==========================================
              PROGRESSION
            ==========================================*/

            level: 1,
            levelName: "Explorer",
            xp: 0,
            adventurePoints: 0,

            /*==========================================
              ADVENTURE
            ==========================================*/

            year: 3,
            world: 1,
            worldsCompleted: 0,

            /*==========================================
              REWARDS
            ==========================================*/

            stars: 0,
            treasureChests: 0,
            badges: [],
            treasures: [],
            relics: [],
            worldTreasureCount: 0,

            /*==========================================
              STATISTICS
            ==========================================*/

            questionsAnswered: 0,
            correct: 0,
            incorrect: 0,
            questionsThisLevel: 0

        };

        this.save(player);

        return player;

    },

    /*==================================================
      LOAD LEARNING
    ==================================================*/

    loadLearning(): void {

        const saved = localStorage.getItem(
            "siasAdventureLearning"
        );

        if (!saved) {
            return;
        }

        LearningEngine.skills = new Map(
            JSON.parse(saved) as Array<[string, SkillProgress]>
        );

    },

    /*==================================================
      SAVE LEARNING
    ==================================================*/

    saveLearning(): void {

        localStorage.setItem(
            "siasAdventureLearning",
            JSON.stringify(
                [...LearningEngine.skills.entries()]
            )
        );

    }

};