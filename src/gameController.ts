import { LearningEngine } from "./learning";
import type { Player } from "./types";
import { Levels } from "./levels";
import {
    QuestionEngine,
    type QuestionResult
} from "./questionEngine";
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
                    break;

            }

        } else {

            player.incorrect++;

        }

        const levelComplete =
            Levels.checkLevelComplete(player);

        if (levelComplete) {

            player.treasureChests++;

        }

        const levelUp =
            Levels.checkLevel(player);

        // World progression is handled by Treasure.open()
        const worldComplete = false;

        PlayerStorage.save(player);

        return {

            result,

            levelUp,

            levelComplete,

            worldComplete

        };

    }

};