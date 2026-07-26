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