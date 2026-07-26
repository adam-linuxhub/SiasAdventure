import type { Player } from "./types";
import { PlayerStorage } from "./storage";

interface Reward {
  item: string;
  badge: string;
}

export const Treasure = {
  open(player: Player): Reward {
    const rewards: Reward[] = [
      {
        item: "🪄 Magic Wand",
        badge: "First Spell",
      },
      {
        item: "💎 Crystal Gem",
        badge: "Treasure Hunter",
      },
      {
        item: "📚 Spell Book",
        badge: "Book Finder",
      },
      {
        item: "⭐ Golden Star",
        badge: "Star Collector",
      },
    ];

    const reward =
      rewards[Math.floor(Math.random() * rewards.length)];

    player.treasureChests++;
    player.stars += 50;

    if (!player.badges.includes(reward.badge)) {
      player.badges.push(reward.badge);
    }

    PlayerStorage.save(player);

    return reward;
  },
};