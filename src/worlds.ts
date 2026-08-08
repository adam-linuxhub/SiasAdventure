import type { Player } from "./types";

export interface World {

    id: number;

    name: string;

    subtitle: string;

    description: string;

    relicsRequired: number;

}


export const Worlds = {

    worlds: <World[]>[

        {
            id: 1,
            name: "Crystal Caves",
            subtitle: "The Cave of Shimmering Knowledge",
            description: "Ancient crystals glow with magical energy.",
            relicsRequired: 30
        },
        {
            id: 3,
            name: "Enchanted Forest",
            subtitle: "Where Magic Grows",
            description: "Friendly woodland creatures guard hidden relics.",
            relicsRequired: 30
        },
        {
            id: 4,
            name: "Pirate Isles",
            subtitle: "Treasures of the Seven Seas",
            description: "Discover long-lost pirate relics.",
            relicsRequired: 30
        },
        {
            id: 5,
            name: "Dragon Mountains",
            subtitle: "Home of Ancient Dragons",
            description: "Only the bravest explorers reach the summit.",
            relicsRequired: 30
        },
        {
            id: 6,
            name: "Ancient Desert",
            subtitle: "The Lost Kingdom",
            description: "Ancient secrets lie beneath the sand.",
            relicsRequired: 30
        },
        {
            id: 7,
            name: "Underwater Kingdom",
            subtitle: "The Coral Palace",
            description: "Search beneath the waves for magical relics.",
            relicsRequired: 30
        },
        {
            id: 2,
            name: "Frozen Kingdom",
            subtitle: "The Ice Palace",
            description: "Frozen relics sparkle beneath the snow.",
            relicsRequired: 30
        },
        {
            id: 8,
            name: "Sky Kingdom",
            subtitle: "Above the Clouds",
            description: "Floating islands hide legendary treasures.",
            relicsRequired: 30
        },
        {
            id: 9,
            name: "Dinosaur Valley",
            subtitle: "A Journey Through Time",
            description: "Collect relics from a prehistoric world.",
            relicsRequired: 30
        },
        {
            id: 10,
            name: "Space Station",
            subtitle: "Beyond the Stars",
            description: "Explore the mysteries of the universe.",
            relicsRequired: 30
        },
        {
            id: 11,
            name: "Time Traveller",
            subtitle: "Across the Ages",
            description: "Recover relics from every era.",
            relicsRequired: 30
        },
        {
            id: 12,
            name: "Wizard's Castle",
            subtitle: "The Academy of Knowledge",
            description: "The final challenge awaits.",
            relicsRequired: 30
        }
    ],


    getWorld(id: number): World | undefined {

        return this.worlds.find(
            world => world.id === id
        );

    },


    getNextWorld(id: number): World | undefined {

        return this.getWorld(id + 1);

    },


    isFinalWorld(id: number): boolean {

        return id === this.worlds.length;

    }

};