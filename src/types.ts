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

    /**
     * Legacy treasure list.
     *
     * Keep this for backwards compatibility
     * until the Treasure Vault is complete.
     */
    treasures: string[];

    /**
     * Permanent collection of relic ids.
     *
     * Example:
     *
     * [
     *   "magic-wand",
     *   "crystal-gem"
     * ]
     */
    relics: string[];

    /**
     * Treasure chests opened
     * in the current world.
     */
    worldTreasureCount: number;

    /*==============================================
      STATISTICS
    ==============================================*/

    questionsAnswered: number;

    correct: number;

    incorrect: number;

    questionsThisLevel: number;

}