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

    rarity:
        | "Common"
        | "Rare"
        | "Epic"
        | "Legendary";

}

/*==================================================
  WORLD 1 RELICS
==================================================*/

const relics: Relic[] = [

    {

        id: "magic-wand",

        world: 1,

        order: 1,

        item: "Magic Wand",

        badge: "First Spell",

        description:
            "A magical wand once carried by the first Guardian of Knowledge.",

        icon: "🪄",

        rarity: "Common"

    },

    {

        id: "crystal-gem",

        world: 1,

        order: 2,

        item: "Crystal Gem",

        badge: "Treasure Hunter",

        description:
            "A glowing crystal said to hold the wisdom of the Crystal Caves.",

        icon: "💎",

        rarity: "Rare"

    },

    {

        id: "spell-book",

        world: 1,

        order: 3,

        item: "Spell Book",

        badge: "Book Finder",

        description:
            "An ancient spell book filled with forgotten magical knowledge.",

        icon: "📚",

        rarity: "Epic"

    },

    {

        id: "golden-star",

        world: 1,

        order: 4,

        item: "Golden Star",

        badge: "Star Collector",

        description:
            "A legendary star that shines with the purest magical energy.",

        icon: "⭐",

        rarity: "Legendary"

    }

];

/*==================================================
  TREASURE ENGINE
==================================================*/

export const Treasure = {

    relics,

    open(player: Player): Relic {

        const nextRelicIndex = Math.min(

            player.treasures.length,

            relics.length - 1

        );

        const relic =
            relics[nextRelicIndex];

        player.stars += 50;

        if (

            !player.badges.includes(

                relic.badge

            )

        ) {

            player.badges.push(

                relic.badge

            );

        }

        if (

            !player.treasures.includes(

                relic.item

            )

        ) {

            player.treasures.push(

                relic.item

            );

        }

        return relic;

    }

};