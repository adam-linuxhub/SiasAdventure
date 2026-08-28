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
        description: "A magical wand once carried by the first Guardian of Knowledge.",
        icon: "🪄",
        image: "magic-wand.png",
        rarity: "Common"
    },

    {
        id: "w1-crystal-orb",
        world: 1,
        order: 2,
        item: "Crystal Orb",
        badge: "Treasure Hunter",
        description: "A glowing crystal said to hold the wisdom of the Crystal Caves.",
        icon: "💎",
        image: "crystal-orb.png",
        rarity: "Rare"
    },

    {
        id: "w1-spell-book",
        world: 1,
        order: 3,
        item: "Spell Book",
        badge: "Keeper of Knowledge",
        description: "An ancient spell book filled with forgotten magical knowledge.",
        icon: "📚",
        image: "spell-book.png",
        rarity: "Epic"
    },

    {
        id: "w1-star-pendant",
        world: 1,
        order: 4,
        item: "Star Pendant",
        badge: "Star Collector",
        description: "A pendant that shines with the light of the night sky.",
        icon: "⭐",
        image: "star-pendant.png",
        rarity: "Legendary"
    },

    {
        id: "w1-ancient-key",
        world: 1,
        order: 5,
        item: "Ancient Key",
        badge: "Key Finder",
        description: "Unlocks forgotten doors beneath the Crystal Caves.",
        icon: "🗝️",
        image: "ancient-key.png",
        rarity: "Common"
    },

    {
        id: "w1-magic-lantern",
        world: 1,
        order: 6,
        item: "Magic Lantern",
        badge: "Light Bringer",
        description: "Its magical flame never fades.",
        icon: "🏮",
        image: "magic-lantern.png",
        rarity: "Common"
    },

    {
        id: "w1-compass",
        world: 1,
        order: 7,
        item: "Navigator's Compass",
        badge: "Path Finder",
        description: "Always points towards the next adventure.",
        icon: "🧭",
        image: "navigator-compass.png",
        rarity: "Rare"
    },

    {
        id: "w1-celestial-scroll",
        world: 1,
        order: 8,
        item: "Celestial Scroll",
        badge: "Scholar",
        description: "Contains forgotten magical secrets.",
        icon: "📜",
        image: "celestial-scroll.png",
        rarity: "Rare"
    },

    {
        id: "w1-mystic-map",
        world: 1,
        order: 9,
        item: "Mystic Map",
        badge: "Explorer",
        description: "Shows hidden paths through enchanted lands.",
        icon: "🗺️",
        image: "mystic-map.png",
        rarity: "Common"
    },

    {
        id: "w1-crystal-crown",
        world: 1,
        order: 10,
        item: "Crystal Crown",
        badge: "Royal Explorer",
        description: "The jeweled crown of the Crystal King.",
        icon: "👑",
        image: "crystal-crown.png",
        rarity: "Epic"
    },

    {
        id: "w1-phoenix-feather-quill",
        world: 1,
        order: 11,
        item: "Phoenix Feather Quill",
        badge: "Master Scribe",
        description: "Writes with magical ink that never fades.",
        icon: "🪶",
        image: "phoenix-feather-quill.png",
        rarity: "Rare"
    },

    {
        id: "w1-phoenix-medallion",
        world: 1,
        order: 12,
        item: "Phoenix Medallion",
        badge: "Fire Keeper",
        description: "Glows with the eternal flame of the phoenix.",
        icon: "🔥",
        image: "phoenix-medallion.png",
        rarity: "Legendary"
    },

    {
        id: "w1-armillary-sphere",
        world: 1,
        order: 13,
        item: "Armillary Sphere",
        badge: "Sky Watcher",
        description: "Maps the stars of the magical heavens.",
        icon: "🌌",
        image: "armillary-sphere.png",
        rarity: "Epic"
    },

    {
        id: "w1-celestial-globe",
        world: 1,
        order: 14,
        item: "Celestial Globe",
        badge: "World Keeper",
        description: "A globe containing the constellations.",
        icon: "🌍",
        image: "celestial-globe.png",
        rarity: "Rare"
    },

    {
        id: "w1-guardian-shield",
        world: 1,
        order: 15,
        item: "Guardian Shield",
        badge: "Protector",
        description: "Reflects magical attacks.",
        icon: "🛡️",
        image: "guardian-shield.png",
        rarity: "Rare"
    },

    {
        id: "w1-royal-ring",
        world: 1,
        order: 16,
        item: "Royal Ring",
        badge: "Ring Bearer",
        description: "A ring once worn by the Crystal King.",
        icon: "💍",
        image: "royal-ring.png",
        rarity: "Rare"
    },

    {
        id: "w1-wizard-hat",
        world: 1,
        order: 17,
        item: "Wizard Hat",
        badge: "Young Wizard",
        description: "Once worn by a great wizard.",
        icon: "🎩",
        image: "wizard-hat.png",
        rarity: "Epic"
    },

    {
        id: "w1-golden-chalice",
        world: 1,
        order: 18,
        item: "Golden Chalice",
        badge: "Royal Feast",
        description: "A magnificent chalice from the Crystal Kingdom.",
        icon: "🏆",
        image: "golden-chalice.png",
        rarity: "Rare"
    },

    {
        id: "w1-starlight-elixir",
        world: 1,
        order: 19,
        item: "Starlight Elixir",
        badge: "Star Brewer",
        description: "A potion sparkling with captured starlight.",
        icon: "🧪",
        image: "starlight-elixir.png",
        rarity: "Epic"
    },

    {
        id: "w1-scales-of-justice",
        world: 1,
        order: 20,
        item: "Scales of Justice",
        badge: "Fair Judge",
        description: "An enchanted balance that always reveals the truth.",
        icon: "⚖️",
        image: "scales-of-justice.png",
        rarity: "Rare"
    },

    {
        id: "w1-sun-medallion",
        world: 1,
        order: 21,
        item: "Sun Medallion",
        badge: "Light Bearer",
        description: "Radiates the warmth of the morning sun.",
        icon: "☀️",
        image: "sun-medallion.png",
        rarity: "Epic"
    },

    {
        id: "w1-time-hourglass",
        world: 1,
        order: 22,
        item: "Time Hourglass",
        badge: "Time Keeper",
        description: "Every grain of sand holds a forgotten memory.",
        icon: "⏳",
        image: "time-hourglass.png",
        rarity: "Rare"
    },

    {
        id: "w1-cosmic-hourglass",
        world: 1,
        order: 23,
        item: "Cosmic Hourglass",
        badge: "Master of Time",
        description: "Its glowing sands flow between the stars.",
        icon: "⌛",
        image: "cosmic-hourglass.png",
        rarity: "Legendary"
    },

    {
        id: "w1-astral-telescope",
        world: 1,
        order: 24,
        item: "Astral Telescope",
        badge: "Star Explorer",
        description: "Reveals distant constellations invisible to ordinary eyes.",
        icon: "🔭",
        image: "astral-telescope.png",
        rarity: "Rare"
    },

    {
        id: "w1-astral-armillary",
        world: 1,
        order: 25,
        item: "Astral Armillary",
        badge: "Sky Cartographer",
        description: "Charts the movements of the magical heavens.",
        icon: "🌌",
        image: "astral-armillary.png",
        rarity: "Legendary"
    },

    {
        id: "w1-crystal-staff",
        world: 1,
        order: 26,
        item: "Crystal Staff",
        badge: "Crystal Sage",
        description: "A powerful staff infused with ancient crystal magic.",
        icon: "🪄",
        image: "crystal-staff.png",
        rarity: "Epic"
    },

    {
        id: "w1-enchanted-sword",
        world: 1,
        order: 27,
        item: "Enchanted Sword",
        badge: "Brave Explorer",
        description: "Forged to defend the Crystal Kingdom.",
        icon: "⚔️",
        image: "enchanted-sword.png",
        rarity: "Epic"
    },

    {
        id: "w1-magic-essence-flask",
        world: 1,
        order: 28,
        item: "Magic Essence Flask",
        badge: "Essence Collector",
        description: "Contains swirling magical energy gathered from the stars.",
        icon: "🧪",
        image: "magic-essence-flask.png",
        rarity: "Rare"
    },

    {
        id: "w1-royal-crown",
        world: 1,
        order: 29,
        item: "Royal Crown",
        badge: "Crystal Champion",
        description: "The treasured crown of the rulers of the Crystal Kingdom.",
        icon: "👑",
        image: "royal-crown.png",
        rarity: "Legendary"
    },

    {
        id: "w1-treasure-chest",
        world: 1,
        order: 30,
        item: "Treasure Chest",
        badge: "Master Collector",
        description: "The legendary chest that holds the greatest treasures of the Crystal Caves.",
        icon: "🧰",
        image: "treasure-chest-open.png",
        rarity: "Legendary"
    }

];

/*==================================================
  WORLD 2 RELICS
==================================================*/

const world2Relics: Relic[] = [

    {
        id: "w2-emerald-elven-quiver",
        world: 2,
        order: 1,
        item: "Emerald Elven Quiver",
        badge: "Forest Archer",
        description: "An enchanted quiver woven with living vines and set with a glowing emerald.",
        icon: "🏹",
        image: "emerald_elven_quiver.png",
        rarity: "Common"
    },

    {
        id: "w2-emerald-enchanted-quill",
        world: 2,
        order: 2,
        item: "Emerald Enchanted Quill",
        badge: "Forest Scribe",
        description: "A magical quill that writes with the green light of the enchanted forest.",
        icon: "🪶",
        image: "emerald_enchanted_quill.png",
        rarity: "Rare"
    },

    {
        id: "w2-emerald-flower-tiara",
        world: 2,
        order: 3,
        item: "Emerald Flower Tiara",
        badge: "Forest Royalty",
        description: "A delicate golden tiara adorned with emeralds and enchanted woodland flowers.",
        icon: "👑",
        image: "emerald_flower_tiara.png",
        rarity: "Epic"
    },

    {
        id: "w2-emerald-leaf-crown",
        world: 2,
        order: 4,
        item: "Emerald Leaf Crown",
        badge: "Leaf Guardian",
        description: "A magnificent crown of golden vines and emerald leaves from the ancient forest.",
        icon: "👑",
        image: "emerald_leaf_crown.png",
        rarity: "Legendary"
    },

    {
        id: "w2-emerald-leaf-tiara",
        world: 2,
        order: 5,
        item: "Emerald Leaf Tiara",
        badge: "Woodland Noble",
        description: "A beautiful woodland tiara decorated with shining leaves and emerald crystals.",
        icon: "👑",
        image: "emerald_leaf_tiara.png",
        rarity: "Rare"
    },

    {
        id: "w2-emerald-spiral-vial",
        world: 2,
        order: 6,
        item: "Emerald Spiral Vial",
        badge: "Forest Alchemist",
        description: "A mysterious vial containing swirling emerald magic gathered from the forest.",
        icon: "🧪",
        image: "emerald_spiral_vial.png",
        rarity: "Common"
    },

    {
        id: "w2-emerald-starflower-pendant",
        world: 2,
        order: 7,
        item: "Emerald Starflower Pendant",
        badge: "Starflower Keeper",
        description: "A radiant pendant combining emerald magic with the delicate power of starflowers.",
        icon: "💚",
        image: "emerald_starflower_pendant.png",
        rarity: "Epic"
    },

    {
        id: "w2-emerald-vine-compass",
        world: 2,
        order: 8,
        item: "Emerald Vine Compass",
        badge: "Forest Pathfinder",
        description: "An enchanted compass that guides explorers safely through the deepest woodland.",
        icon: "🧭",
        image: "emerald_vine_compass.png",
        rarity: "Rare"
    },

    {
        id: "w2-emerald-vine-hourglass",
        world: 2,
        order: 9,
        item: "Emerald Vine Hourglass",
        badge: "Keeper of Seasons",
        description: "Its enchanted sands mark the changing seasons of the magical forest.",
        icon: "⏳",
        image: "emerald_vine_hourglass.png",
        rarity: "Epic"
    },

    {
        id: "w2-emerald-vine-ring",
        world: 2,
        order: 10,
        item: "Emerald Vine Ring",
        badge: "Vine Keeper",
        description: "A golden ring entwined with magical vines and a brilliant emerald.",
        icon: "💍",
        image: "emerald_vine_ring.png",
        rarity: "Rare"
    },

    {
        id: "w2-enchanted-emerald-garden-lantern",
        world: 2,
        order: 11,
        item: "Enchanted Emerald Garden Lantern",
        badge: "Garden Light",
        description: "A glowing lantern that illuminates hidden paths and secret gardens.",
        icon: "🏮",
        image: "enchanted_emerald_garden_lantern.png",
        rarity: "Common"
    },

    {
        id: "w2-enchanted-emerald-grimoire",
        world: 2,
        order: 12,
        item: "Enchanted Emerald Grimoire",
        badge: "Forest Spellkeeper",
        description: "An ancient book containing spells passed down by the guardians of the forest.",
        icon: "📚",
        image: "enchanted_emerald_grimoire.png",
        rarity: "Legendary"
    },

    {
        id: "w2-enchanted-emerald-hourglass",
        world: 2,
        order: 13,
        item: "Enchanted Emerald Hourglass",
        badge: "Time of the Forest",
        description: "An enchanted hourglass filled with sparkling emerald sands.",
        icon: "⌛",
        image: "enchanted_emerald_hourglass.png",
        rarity: "Rare"
    },

    {
        id: "w2-enchanted-emerald-telescope",
        world: 2,
        order: 14,
        item: "Enchanted Emerald Telescope",
        badge: "Forest Stargazer",
        description: "A magical telescope that reveals wonders hidden beyond the forest canopy.",
        icon: "🔭",
        image: "enchanted_emerald_telescope.png",
        rarity: "Epic"
    },

    {
        id: "w2-enchanted-emerald-tree-orb",
        world: 2,
        order: 15,
        item: "Enchanted Emerald Tree Orb",
        badge: "Tree Whisperer",
        description: "A glowing orb containing the living magic of an ancient enchanted tree.",
        icon: "🔮",
        image: "enchanted_emerald_tree_orb.png",
        rarity: "Legendary"
    },

    {
        id: "w2-enchanted-emerald-wand",
        world: 2,
        order: 16,
        item: "Enchanted Emerald Wand",
        badge: "Forest Spellcaster",
        description: "A vine-wrapped wand channeling the bright magic of the enchanted forest.",
        icon: "🪄",
        image: "enchanted_emerald_wand.png",
        rarity: "Epic"
    },

    {
        id: "w2-enchanted-world-tree-orb",
        world: 2,
        order: 17,
        item: "Enchanted World Tree Orb",
        badge: "World Tree Guardian",
        description: "A powerful orb said to contain a fragment of the magic of the World Tree.",
        icon: "🌳",
        image: "enchanted_world_tree_orb.png",
        rarity: "Legendary"
    },

    {
        id: "w2-jeweled-emerald-butterfly",
        world: 2,
        order: 18,
        item: "Jeweled Emerald Butterfly",
        badge: "Butterfly Friend",
        description: "A magical butterfly crafted from emeralds and enchanted woodland jewels.",
        icon: "🦋",
        image: "jeweled_emerald_butterfly.png",
        rarity: "Rare"
    },

    {
        id: "w2-nature-amulet",
        world: 2,
        order: 19,
        item: "Nature Amulet",
        badge: "Friend of Nature",
        description: "A powerful amulet blessed with the gentle magic of the natural world.",
        icon: "🍃",
        image: "nature_amulet.png",
        rarity: "Common"
    },

    {
        id: "w2-nature-crystal-orb",
        world: 2,
        order: 20,
        item: "Nature Crystal Orb",
        badge: "Crystal of Nature",
        description: "A luminous crystal orb filled with the energy of the living forest.",
        icon: "💎",
        image: "nature_crystal_orb.png",
        rarity: "Epic"
    },

    {
        id: "w2-nature-deer-emblem",
        world: 2,
        order: 21,
        item: "Nature Deer Emblem",
        badge: "Forest Guardian",
        description: "A sacred emblem honouring the graceful deer that guard the enchanted woodland.",
        icon: "🦌",
        image: "nature_deer_emblem.png",
        rarity: "Legendary"
    },

    {
        id: "w2-nature-grimoire",
        world: 2,
        order: 22,
        item: "Nature Grimoire",
        badge: "Nature Scholar",
        description: "A magical tome filled with the secrets of plants, creatures and ancient trees.",
        icon: "📖",
        image: "nature_grimoire.png",
        rarity: "Epic"
    },

    {
        id: "w2-nature-key",
        world: 2,
        order: 23,
        item: "Nature Key",
        badge: "Secret Keeper",
        description: "An enchanted key said to unlock a hidden place deep within the forest.",
        icon: "🗝️",
        image: "nature_key.png",
        rarity: "Common"
    },

    {
        id: "w2-nature-lantern",
        world: 2,
        order: 24,
        item: "Nature Lantern",
        badge: "Path Lighter",
        description: "A woodland lantern whose gentle glow reveals hidden forest paths.",
        icon: "🏮",
        image: "nature_lantern.png",
        rarity: "Rare"
    },

    {
        id: "w2-nature-pendant",
        world: 2,
        order: 25,
        item: "Nature Pendant",
        badge: "Heart of the Forest",
        description: "A beautiful pendant carrying the peaceful magic of the enchanted woodland.",
        icon: "🍃",
        image: "nature_pendant.png",
        rarity: "Rare"
    },

    {
        id: "w2-nature-ring",
        world: 2,
        order: 26,
        item: "Nature Ring",
        badge: "Nature's Bond",
        description: "A magical ring woven with living vines and blessed with emerald energy.",
        icon: "💍",
        image: "nature_ring.png",
        rarity: "Common"
    },

    {
        id: "w2-nature-staff",
        world: 2,
        order: 27,
        item: "Nature Staff",
        badge: "Forest Mage",
        description: "An ancient staff grown from enchanted wood and crowned with a glowing emerald.",
        icon: "🪄",
        image: "nature_staff.png",
        rarity: "Epic"
    },

    {
        id: "w2-nature-tree-orb",
        world: 2,
        order: 28,
        item: "Nature Tree Orb",
        badge: "Ancient Tree Keeper",
        description: "A magical orb containing the spirit and wisdom of an ancient tree.",
        icon: "🌳",
        image: "nature_tree_orb.png",
        rarity: "Legendary"
    },

    {
        id: "w2-verdant-compass",
        world: 2,
        order: 29,
        item: "Verdant Compass",
        badge: "Master Pathfinder",
        description: "An ornate emerald compass that always points towards the heart of the forest.",
        icon: "🧭",
        image: "verdant_compass.png",
        rarity: "Epic"
    },

    {
        id: "w2-verdant-pendant",
        world: 2,
        order: 30,
        item: "Verdant Pendant",
        badge: "Heart of Verdance",
        description: "A magnificent emerald pendant glowing with the life-giving magic of the forest.",
        icon: "💚",
        image: "verdant_pendant.png",
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

        relics: world2Relics

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

        /*==========================================
        RESET CURRENT WORLD PROGRESS
        ==========================================*/

        player.worldTreasureCount = 0;

        player.questionsThisLevel = 0;

        player.worldsCompleted++;

        /*==========================================
        NEXT WORLD
        ==========================================*/

        if (player.world < this.worlds.length) {

            player.world++;

            return true;

        }

        /*==========================================
        NEXT SCHOOL YEAR
        ==========================================*/

        player.year++;

        player.world = 1;

        player.worldTreasureCount = 0;

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