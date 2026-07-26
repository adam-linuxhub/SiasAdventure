export interface Player {
  name: string;
  xp: number;
  stars: number;
  level: number;
  levelName: string;
  treasureChests: number;
  badges: string[];
  questionsAnswered: number;
  correct: number;
  incorrect: number;
}

export const PlayerStorage = {
  load(): Player {
    const saved = localStorage.getItem("siasAdventure");

    if (saved) {
      return JSON.parse(saved) as Player;
    }

    return {
      name: "Sia",
      xp: 0,
      stars: 0,
      level: 1,
      levelName: "Explorer",
      treasureChests: 0,
      badges: [],
      questionsAnswered: 0,
      correct: 0,
      incorrect: 0,
    };
  },

  save(player: Player): void {
    localStorage.setItem(
      "siasAdventure",
      JSON.stringify(player)
    );
  },
};