import type { Player } from "./types";

interface World {
    world: number;
    name: string;
    adventurePoints: number;
}

export const Worlds = {

    worlds: [

    {
        world: 1,
        name: "Enchanted Forest",
        adventurePoints: 0,
    },

    {
        world: 2,
        name: "Crystal Caves",
        adventurePoints: 10,
    },

    {
        world: 3,
        name: "Castle of Curiosity",
        adventurePoints: 25,
    },

    {
        world: 4,
        name: "Whispering Waters",
        adventurePoints: 45,
    },

    {
        world: 5,
        name: "Frost Peak",
        adventurePoints: 70,
    },

    {
        world: 6,
        name: "Dragon Volcano",
        adventurePoints: 100,
    },

    {
        world: 7,
        name: "Sky Kingdom",
        adventurePoints: 140,
    },

    {
        world: 8,
        name: "Star Temple",
        adventurePoints: 190,
    }

] as World[],

    getWorld(worldNumber: number): World | undefined {

        return this.worlds.find(
            world => world.world === worldNumber
        );

    },

    getNextWorld(worldNumber: number): World | undefined {

        return this.getWorld(worldNumber + 1);

    },

    checkWorld(player: Player): boolean {

        const currentWorld =
            this.getWorld(player.world);

        if (!currentWorld) {
            return false;
        }

        const nextWorld =
        this.getNextWorld(player.world);

        return (
            nextWorld !== undefined &&
            player.adventurePoints >=
            nextWorld.adventurePoints
        );

    }

};