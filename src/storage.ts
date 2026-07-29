import type { Player } from "./types";
import {
    LearningEngine,
    type SkillProgress
} from "./learning";

export const PlayerStorage = {
  load(): Player {
    const saved = localStorage.getItem("siasAdventure");

    if (saved) {
      const player = JSON.parse(saved) as Player;

      player.adventurePoints ??= 0;
      player.world ??= 1;
      player.worldsCompleted ??= 0;
      player.questionsThisLevel ??= 0;
      player.treasures ??= [];

      return player;
    }
    
    return {
      name: "Sia",
      xp: 0,
      stars: 0,
      level: 1,
      levelName: "Explorer",
      treasureChests: 0,
      badges: [],
      treasures: [],
      questionsAnswered: 0,
      correct: 0,
      incorrect: 0,
      adventurePoints: 0,
      world: 1,
      worldsCompleted: 0,
      questionsThisLevel: 0
      
    };
  },

    save(player: Player): void {
  localStorage.setItem(
    "siasAdventure",
    JSON.stringify(player)
  );

  this.saveLearning();
},

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
  saveLearning(): void {
    localStorage.setItem(
      "siasAdventureLearning",
      JSON.stringify(
        [...LearningEngine.skills.entries()]
      )
    );
  }
};