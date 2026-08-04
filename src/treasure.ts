/*==================================================
  TREASURE
==================================================*/

import type { Player } from "./types";

/*==================================================
  RELIC
==================================================*/

export interface Relic {

    id: string;

    world: number;

    order: number;

    item: string;

    badge: string;

    description: string;

    icon: string;

    /**
     * Image filename.
     */
    image: string;

    rarity:
        | "Common"
        | "Rare"
        | "Epic"
        | "Legendary";

}

export interface TreasureWorld {

    id: number;

    name: string;

    relics: Relic[];

}

/*==================================================
  WORLD 1 RELICS
==================================================*/

const world1Relics: Relic[] = [

    {

        id: "w1-magic-wand",

        world: 1,

        order: 1,

        item: "Magic Wand",

        badge: "First Spell",

        description:
            "A magical wand once carried by the first Guardian of Knowledge.",

        icon: "🪄",icon: "🪄",

        image: "magic-wand.png",

        rarity: "Common"

    },

    {

        id: "w1-crystal-gem",

        world: 1,

        order: 2,

        item: "Crystal Gem",

        badge: "Treasure Hunter",

        description:
            "A glowing crystal said to hold the wisdom of the Crystal Caves.",

        icon: "💎",
        image: "crystal-gem.png",


        rarity: "Rare"

    },

    {

        id: "w1-spell-book",

        world: 1,

        order: 3,

        item: "Spell Book",

        badge: "Book Finder",

        description:
            "An ancient spell book filled with forgotten magical knowledge.",

        icon: "📚",
        image: "spell-book.png",

        rarity: "Epic"

    },

    {

        id: "w1-golden-star",

        world: 1,

        order: 4,

        item: "Golden Star",

        badge: "Star Collector",

        description:
            "A legendary star that shines with the purest magical energy.",

        icon: "⭐",
        image: "golden-star.png",

        rarity: "Legendary"

    },
    {
        id: "w1-crystal-key",
        world: 1,
        order: 5,
        item: "Crystal Key",
        badge: "Key Finder",
        description: "Unlocks hidden crystal chambers.",
        icon: "🗝️",
                image: "crystal-key.png",

        rarity: "Common"
    },
    {
        id: "w1-cave-lantern",
        world: 1,
        order: 6,
        item: "Cave Lantern",
        badge: "Light Bringer",
        description: "A lantern that never burns out.",
        icon: "🏮",
                image: "cave-lantern.png",

        rarity: "Common"
    },
    {
        id: "w1-glow-mushroom",
        world: 1,
        order: 7,
        item: "Glow Mushroom",
        badge: "Nature Friend",
        description: "A mushroom that glows with magical light.",
        icon: "🍄",
                image: "glow-mushroom.png",

        rarity: "Common"
    },
    {
        id: "w1-magic-compass",
        world: 1,
        order: 8,
        item: "Magic Compass",
        badge: "Path Finder",
        description: "Always points towards adventure.",
        icon: "🧭",
                image: "magic-compass.png",

        rarity: "Rare"
    },
    {
        id: "w1-ancient-scroll",
        world: 1,
        order: 9,
        item: "Ancient Scroll",
        badge: "Scholar",
        description: "Contains forgotten magical secrets.",
        icon: "📜",
                image: "ancient-scroll.png",

        rarity: "Rare"
    },
    {
        id: "w1-crystal-crown",
        world: 1,
        order: 10,
        item: "Crystal Crown",
        badge: "Royal Explorer",
        description: "The crown of the Crystal King.",
        icon: "👑",
                image: "crystal-crown.png",

        rarity: "Legendary"
    },
    {
        id: "w1-silver-pickaxe",
        world: 1,
        order: 11,
        item: "Silver Pickaxe",
        badge: "Miner",
        description: "Perfect for mining enchanted crystals.",
        icon: "⛏️",
                image: "silver-pickaxe.png",

        rarity: "Common"
    },
    {
        id: "w1-magic-boots",
        world: 1,
        order: 12,
        item: "Magic Boots",
        badge: "Swift Steps",
        description: "Run faster through the caves.",
        icon: "🥾",
                image: "magic-boots.png",

        rarity: "Common"
    },
    {
        id: "w1-dragon-egg",
        world: 1,
        order: 13,
        item: "Dragon Egg",
        badge: "Dragon Keeper",
        description: "Warm to the touch.",
        icon: "🥚",
                image: "dragon-egg.png",

        rarity: "Epic"
    },
    {
        id: "w1-crystal-skull",
        world: 1,
        order: 14,
        item: "Crystal Skull",
        badge: "Ancient Secrets",
        description: "An eerie relic carved from crystal.",
        icon: "💀",
                image: "crystal-skull.png",

        rarity: "Rare"
    },
    {
        id: "w1-moon-crystal",
        world: 1,
        order: 15,
        item: "Moon Crystal",
        badge: "Moon Watcher",
        description: "Glows brightest at night.",
        icon: "🌙",
                image: "moon-crystal.png",

        rarity: "Epic"
    },
    {
        id: "w1-golden-feather",
        world: 1,
        order: 16,
        item: "Golden Feather",
        badge: "Sky Friend",
        description: "Dropped by a magical bird.",
        icon: "🪶",
                image: "golden-feather.png",

        rarity: "Rare"
    },
    {
        id: "w1-phoenix-ember",
        world: 1,
        order: 17,
        item: "Phoenix Ember",
        badge: "Fire Keeper",
        description: "Still warm with magical fire.",
        icon: "🔥",
                image: "phoenix-ember.png",

        rarity: "Epic"
    },
    {
        id: "w1-cave-map",
        world: 1,
        order: 18,
        item: "Cave Map",
        badge: "Explorer",
        description: "Shows hidden cave passages.",
        icon: "🗺️",
                image: "cave-map.png",

        rarity: "Common"
    },
    {
        id: "w1-magic-ring",
        world: 1,
        order: 19,
        item: "Magic Ring",
        badge: "Ring Bearer",
        description: "A ring filled with magical energy.",
        icon: "💍",
                image: "magic-ring.png",

        rarity: "Rare"
    },
    {
        id: "w1-wizard-hat",
        world: 1,
        order: 20,
        item: "Wizard Hat",
        badge: "Young Wizard",
        description: "Once worn by a great wizard.",
        icon: "🎩",
                image: "wizard-hat.png",

        rarity: "Epic"
    },
    {
        id: "w1-crystal-shield",
        world: 1,
        order: 21,
        item: "Crystal Shield",
        badge: "Protector",
        description: "Reflects magical attacks.",
        icon: "🛡️",
                image: "crystal-shield.png",

        rarity: "Rare"
    },
    {
        id: "w1-treasure-key",
        world: 1,
        order: 22,
        item: "Treasure Key",
        badge: "Master Locksmith",
        description: "Opens ancient treasure chests.",
        icon: "🗝️",
                image: "treasure-key.png",

        rarity: "Common"
    },
    {
        id: "w1-enchanted-rope",
        world: 1,
        order: 23,
        item: "Enchanted Rope",
        badge: "Climber",
        description: "Climbs by itself.",
        icon: "🪢",
                image: "enchanted-rope.png",

        rarity: "Common"
    },
    {
        id: "w1-ancient-coin",
        world: 1,
        order: 24,
        item: "Ancient Coin",
        badge: "Collector",
        description: "A coin from a forgotten kingdom.",
        icon: "🪙",
                image: "ancient-coin.png",

        rarity: "Rare"
    },
    {
        id: "w1-crystal-heart",
        world: 1,
        order: 25,
        item: "Crystal Heart",
        badge: "Kind Heart",
        description: "Pulses with magical life.",
        icon: "💖",
                image: "crystal-heart.png",

        rarity: "Epic"
    },
    {
        id: "w1-guardian-statue",
        world: 1,
        order: 26,
        item: "Guardian Statue",
        badge: "Guardian Friend",
        description: "A tiny stone guardian.",
        icon: "🗿",
                image: "guardian-statue.png",

        rarity: "Rare"
    },
    {
        id: "w1-rainbow-crystal",
        world: 1,
        order: 27,
        item: "Rainbow Crystal",
        badge: "Rainbow Finder",
        description: "Reflects every colour.",
        icon: "🌈",
                image: "rainbow-crystal.png",

        rarity: "Epic"
    },
    {
        id: "w1-cave-owl",
        world: 1,
        order: 28,
        item: "Cave Owl",
        badge: "Owl Friend",
        description: "A wise owl from the crystal caves.",
        icon: "🦉",
                image: "cave-owl.png",

        rarity: "Rare"
    },
    {
        id: "w1-guardian-sword",
        world: 1,
        order: 29,
        item: "Guardian Sword",
        badge: "Brave Explorer",
        description: "Forged to protect the caves.",
        icon: "⚔️",
                image: "guardian-sword.png",

        rarity: "Epic"
    },
    {
        id: "w1-crystal-kings-crown",
        world: 1,
        order: 30,
        item: "Crystal King's Crown",
        badge: "Crystal Champion",
        description: "The greatest treasure of Crystal Caves.",
        icon: "👑",
                image: "crystal-kings-crown.png",

        rarity: "Legendary"
    }

];

const worlds: TreasureWorld[] = [

    {

        id: 1,

        name: "Crystal Caves",

        relics: world1Relics

    },

    {

        id: 2,

        name: "Enchanted Forest",

        relics: []

    },

    {

        id: 3,

        name: "Pirate Isles",

        relics: []

    },

    {

        id: 4,

        name: "Frozen Kingdom",

        relics: []

    },

    {

        id: 5,

        name: "Dragon Mountains",

        relics: []

    },

    {

        id: 6,

        name: "Ancient Desert",

        relics: []

    },

    {

        id: 7,

        name: "Underwater Kingdom",

        relics: []

    },

    {

        id: 8,

        name: "Sky Kingdom",

        relics: []

    },

    {

        id: 9,

        name: "Dinosaur Valley",

        relics: []

    },

    {

        id: 10,

        name: "Space Station",

        relics: []

    },

    {

        id: 11,

        name: "Time Traveller",

        relics: []

    },

    {

        id: 12,

        name: "Wizard's Castle",

        relics: []

    }

];

/*==================================================
  TREASURE ENGINE
==================================================*/

export const Treasure = {

    worlds,

    getCurrentWorld(player: Player): TreasureWorld {

        return this.worlds[player.world - 1];

    },

    getCurrentRelics(player: Player): Relic[] {

        return this.getCurrentWorld(player).relics;

    },

    getCollectionProgress(player: Player): number {

        return player.relics.filter(id =>
            id.startsWith(`w${player.world}-`)
        ).length;

    },

    isWorldComplete(player: Player): boolean {

        return this.getCollectionProgress(player) >= 30;

    },

    unlockNextWorld(player: Player): boolean {

        if (!this.isWorldComplete(player)) {

            return false;

        }

        player.worldTreasureCount = 0;

        player.worldsCompleted++;

        if (player.world < this.worlds.length) {

            player.world++;

        } else {

            player.year++;

            player.world = 1;

        }

        return true;

    },

    open(player: Player): Relic {

        console.log("Opening treasure...");
        console.log("Current world:", player.world);

        const relics =
            this.getCurrentRelics(player);

        console.log("Relics in world:", relics.length);

        const relic =
            relics.find(
                r => !player.relics.includes(r.id)
            );

        console.log("Found relic:", relic);

        if (!relic) {

            console.log("No relic found.");

            this.unlockNextWorld(player);

            const fallback =
                this.getCurrentRelics(player)[0];

            console.log("Fallback:", fallback);

            return fallback;

        }

        player.stars += 50;

        if (!player.badges.includes(relic.badge)) {

            player.badges.push(relic.badge);

        }

        if (!player.treasures.includes(relic.item)) {

            player.treasures.push(relic.item);

        }

        if (!player.relics.includes(relic.id)) {

            player.relics.push(relic.id);

        }

        player.worldTreasureCount =
            this.getCollectionProgress(player);

        this.unlockNextWorld(player);

        console.log("Returning relic:", relic);

        return relic;

    }

};