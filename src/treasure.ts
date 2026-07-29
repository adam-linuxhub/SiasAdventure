import type { Player } from "./types";

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

    player.stars += 50;

    if (!player.badges.includes(reward.badge)) {
      player.badges.push(reward.badge);
    }

    if (!player.treasures.includes(reward.item)) {
      player.treasures.push(reward.item);
    }

    return reward;
  },
};