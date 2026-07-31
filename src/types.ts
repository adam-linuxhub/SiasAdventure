/*==================================================
  SIA'S ADVENTURE

  PLAYER TYPES

==================================================*/

export interface Player {

    /*==============================================
      PROFILE
    ==============================================*/

    name: string;

    /*==============================================
      PROGRESSION
    ==============================================*/

    level: number;

    levelName: string;

    xp: number;

    adventurePoints: number;

    /*==============================================
      WORLDS
    ==============================================*/

    world: number;

    worldsCompleted: number;

    /*==============================================
      REWARDS
    ==============================================*/

    stars: number;

    treasureChests: number;

    badges: string[];

    treasures: string[];

    /*==============================================
      STATISTICS
    ==============================================*/

    questionsAnswered: number;

    correct: number;

    incorrect: number;

    questionsThisLevel: number;

}