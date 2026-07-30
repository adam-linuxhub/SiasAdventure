import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const whatAreBiomes: SkillContent = {

    skillId: "whatAreBiomes",

    title: "What Are Biomes?",

    description:
        "Learn what biomes are and how climate, plants and animals are connected around the world.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-bio-001",

        question:
            "What is a biome?",

        options: [
            "A large area with a similar climate, plants and animals",
            "A single type of animal",
            "A type of mountain",
            "A small garden"
        ],

        answer: 0,

        explanation:
            "A biome is a large region with similar climate conditions and living things.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-002",

        question:
            "What helps decide which biome exists in an area?",

        options: [
            "Climate",
            "Roads",
            "Buildings",
            "Map symbols"
        ],

        answer: 0,

        explanation:
            "Climate affects what plants and animals can survive in an area.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-003",

        question:
            "What two things are found in every biome?",

        options: [
            "Plants and animals",
            "Buildings and roads",
            "Cars and trains",
            "Rivers and bridges only"
        ],

        answer: 0,

        explanation:
            "Biomes contain living things that are adapted to their environment.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-004",

        question:
            "Why do different biomes have different plants?",

        options: [
            "Plants adapt to different climate conditions",
            "All plants grow everywhere",
            "Plants choose random places",
            "Climate has no effect"
        ],

        answer: 0,

        explanation:
            "Temperature and rainfall affect which plants can grow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-005",

        question:
            "Why do animals in different biomes look different?",

        options: [
            "They have adaptations for their environment",
            "All animals are identical",
            "Animals do not depend on habitats",
            "Climate does not matter"
        ],

        answer: 0,

        explanation:
            "Animals develop features that help them survive in their habitats.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-bio-006",

        question:
            "Which biome is found near the equator?",

        options: [
            "Tropical rainforest",
            "Polar region",
            "Tundra",
            "Ice sheet"
        ],

        answer: 0,

        explanation:
            "Tropical rainforests are found in hot areas near the equator.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-bio-007",

        question:
            "Which biome is very cold and found near the poles?",

        options: [
            "Polar biome",
            "Rainforest",
            "Desert",
            "Grassland"
        ],

        answer: 0,

        explanation:
            "Polar biomes have very cold temperatures and lots of ice.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-008",

        question:
            "Which biome usually has very little rainfall?",

        options: [
            "Desert",
            "Rainforest",
            "Wetland",
            "Tropical forest"
        ],

        answer: 0,

        explanation:
            "Deserts are dry areas with very low rainfall.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-bio-009",

        question:
            "What is an ecosystem?",

        options: [
            "Living things interacting with their environment",
            "A type of weather",
            "A mountain range",
            "A map symbol"
        ],

        answer: 0,

        explanation:
            "An ecosystem includes plants, animals and their surroundings.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-010",

        question:
            "Why are plants important in ecosystems?",

        options: [
            "They provide food and habitats",
            "They stop all animals living",
            "They remove all water",
            "They create mountains"
        ],

        answer: 0,

        explanation:
            "Plants provide food and shelter for many living things.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-011",

        question:
            "What is a habitat?",

        options: [
            "The place where a living thing lives",
            "A type of climate",
            "A weather instrument",
            "A mountain feature"
        ],

        answer: 0,

        explanation:
            "A habitat provides the things an organism needs to survive.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-bio-012",

        question:
            "Why are rainforests important?",

        options: [
            "They contain many different plants and animals",
            "They have no life",
            "They are always frozen",
            "They have no rainfall"
        ],

        answer: 0,

        explanation:
            "Rainforests have some of the greatest biodiversity on Earth.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-bio-013",

        question:
            "What does biodiversity mean?",

        options: [
            "The variety of living things in an area",
            "The amount of rainfall",
            "The height of mountains",
            "The number of roads"
        ],

        answer: 0,

        explanation:
            "Biodiversity describes the range of plants and animals in a place.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-014",

        question:
            "Why are deserts difficult places for plants to survive?",

        options: [
            "There is very little water",
            "There is too much snow",
            "There are too many rivers",
            "The climate is always wet"
        ],

        answer: 0,

        explanation:
            "Plants in deserts need special adaptations to survive with little water.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-bio-015",

        question:
            "What is an adaptation?",

        options: [
            "A feature that helps a living thing survive",
            "A type of weather",
            "A map symbol",
            "A human building"
        ],

        answer: 0,

        explanation:
            "Adaptations help plants and animals survive in their environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-016",

        question:
            "How can humans affect biomes?",

        options: [
            "By changing habitats through activities such as farming and building",
            "Humans cannot affect nature",
            "Only animals affect biomes",
            "Biomes never change"
        ],

        answer: 0,

        explanation:
            "Human activities can change ecosystems and habitats.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-bio-017",

        question:
            "Why should ecosystems be protected?",

        options: [
            "To protect plants, animals and natural environments",
            "To remove wildlife",
            "To stop all human activity",
            "To change all climates"
        ],

        answer: 0,

        explanation:
            "Protecting ecosystems helps maintain biodiversity.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-bio-018",

        question:
            "Which factor is important for plant growth?",

        options: [
            "Temperature and rainfall",
            "Road signs",
            "Buildings",
            "Maps"
        ],

        answer: 0,

        explanation:
            "Plants need suitable conditions to grow.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-019",

        question:
            "Why are biomes found in different parts of Earth?",

        options: [
            "Different areas have different climates",
            "All places have identical conditions",
            "Maps create biomes",
            "Animals decide locations"
        ],

        answer: 0,

        explanation:
            "Climate differences create different environments around the world.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-020",

        question:
            "Which sentence best describes a biome?",

        options: [
            "A large area with a particular climate and living things adapted to it",
            "A single plant",
            "A weather instrument",
            "A type of road"
        ],

        answer: 0,

        explanation:
            "Biomes are large regions with similar climates and ecosystems.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "biomes"]
    }

    ]

};