import type { Player } from "./types";

export interface Reward {
    item: string;
    badge: string;
    icon: string;
    rarity: "Common" | "Rare" | "Epic" | "Legendary";
}

const rewards: Reward[] = [

    {
        item: "Magic Wand",
        badge: "First Spell",
        icon: "🪄",
        rarity: "Common"
    },

    {
        item: "Crystal Gem",
        badge: "Treasure Hunter",
        icon: "💎",
        rarity: "Rare"
    },

    {
        item: "Spell Book",
        badge: "Book Finder",
        icon: "📚",
        rarity: "Epic"
    },

    {
        item: "Golden Star",
        badge: "Star Collector",
        icon: "⭐",
        rarity: "Legendary"
    }

];

export const Treasure = {

    rewards,

    open(player: Player): Reward {

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

    }

};