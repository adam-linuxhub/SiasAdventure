import { LearningEngine } from "./learning";
import type { Player } from "./types";
import { Levels } from "./levels";
import {
    QuestionEngine,
    type QuestionResult
} from "./questionEngine";
import { PlayerStorage } from "./storage";
import { QuestionProgressStorage } from "./storage/QuestionProgressStorage";

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

        if (question?.id) {

            LearningEngine.recordAnswer(
                question.skillId ?? "",
                result.correct
            );

            QuestionProgressStorage.recordAnswer(
                question.id,
                result.correct
            );
            if (

                question.skillId &&

                question.difficulty

            ) {

                // Next step:
                // Check whether every question
                // in this skill and difficulty
                // has now been mastered.
            }
            const isReviewQuestion =

                QuestionProgressStorage.isReviewQuestion(

                    question.id

                );

            if (isReviewQuestion) {

                QuestionProgressStorage.completeReview(

                    question.id,

                    result.correct

                );
            }
            else if (!result.correct) {

                QuestionProgressStorage.scheduleReview(

                    question.id,

                    QuestionEngine.getQuestionNumber()

                );

            }

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

        }
        else {

            player.incorrect++;

        }

        const levelComplete =
            Levels.checkLevelComplete(player);

        if (levelComplete) {

            player.treasureChests++;

        }

        const levelUp =
            Levels.checkLevel(player);

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