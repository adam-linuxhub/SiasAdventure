import { LearningEngine } from "./learning";
import type { Player } from "./types";
import { Levels } from "./levels";
import { QuestionEngine, type QuestionResult } from "./questionEngine";
import { Worlds } from "./worlds";
import { PlayerStorage } from "./storage";

export interface GameResult {

    result: QuestionResult;

    levelUp: boolean;

    levelComplete: boolean;

    worldComplete: boolean;

}

export const GameController = {

    answer(
        player: Player,
        selectedAnswer: number
    ): GameResult {

        const result =
            QuestionEngine.submitAnswer(selectedAnswer);

        const question =
            QuestionEngine.getCurrentQuestion();

        if (question?.skillId) {

            LearningEngine.recordAnswer(
                question.skillId,
                result.correct
            );

        }

        player.questionsAnswered++;
        player.questionsThisLevel++;

        if (result.correct) {

            player.correct++;

            player.xp += result.xpAwarded;

            player.stars += result.starsAwarded;

            switch (question?.stage) {

                case "recognise":
                    player.adventurePoints += 1;
                    break;

                case "understand":
                    player.adventurePoints += 2;
                    break;

                case "apply":
                    player.adventurePoints += 3;
                    break;

                case "master":
                    player.adventurePoints += 4;
                    break;

                default:
                    player.adventurePoints += 1;

            }

        } else {

            player.incorrect++;

        }

 
        const levelComplete =
            Levels.checkLevelComplete(player);

        if (levelComplete) {

            player.questionsThisLevel = 0;

            player.treasureChests++;

        }

        const levelUp =
            Levels.checkLevel(player);

        const worldComplete =
            Worlds.checkWorld(player);

        if (worldComplete) {

            player.world++;

            player.worldsCompleted++;

        }

        // Save all player changes made during this turn
        PlayerStorage.save(player);

        return {

            result,

            levelUp,

            levelComplete,

            worldComplete

        };

    }

};