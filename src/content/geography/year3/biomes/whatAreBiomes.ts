import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const whatAreBiomes: SkillContent = {

    skillId: "whatAreBiomes",

    title: "What Are Biomes?",

    description:
        "Learn what biomes are and how climate, plants and animals are connected around the world.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-bio-001",
        skillId: "whatAreBiomes",
        question:
            "What is a biome?",
        stage: "recognise",
        options: [
            "A large area with a similar climate, plants and animals",
            "A single type of animal",
            "A type of mountain",
            "A small garden"
        ],

        explanation:
            "A biome is a large region with similar climate conditions and living things.",

        difficulty: 1,
        correctAnswer: "A large area with a similar climate, plants and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-002",
        skillId: "whatAreBiomes",
        question:
            "What helps decide which biome exists in an area?",
        stage: "recognise",
        options: [
            "Climate",
            "Roads",
            "Buildings",
            "Map symbols"
        ],

        explanation:
            "Climate affects what plants and animals can survive in an area.",

        difficulty: 1,
        correctAnswer: "Climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-003",
        skillId: "whatAreBiomes",
        question:
            "What two things are found in every biome?",
        stage: "recognise",
        options: [
            "Plants and animals",
            "Buildings and roads",
            "Cars and trains",
            "Rivers and bridges only"
        ],

        explanation:
            "Biomes contain living things that are adapted to their environment.",

        difficulty: 1,
        correctAnswer: "Plants and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-004",
        skillId: "whatAreBiomes",
        question:
            "Why do different biomes have different plants?",
        stage: "recognise",
        options: [
            "Plants adapt to different climate conditions",
            "All plants grow everywhere",
            "Plants choose random places",
            "Climate has no effect"
        ],

        explanation:
            "Temperature and rainfall affect which plants can grow.",

        difficulty: 2,
        correctAnswer: "Plants adapt to different climate conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-005",
        skillId: "whatAreBiomes",
        question:
            "Why do animals in different biomes look different?",
        stage: "recognise",
        options: [
            "They have adaptations for their environment",
            "All animals are identical",
            "Animals do not depend on habitats",
            "Climate does not matter"
        ],

        explanation:
            "Animals develop features that help them survive in their habitats.",

        difficulty: 2,
        correctAnswer: "They have adaptations for their environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-bio-006",
        skillId: "whatAreBiomes",
        question:
            "Which biome is found near the equator?",
        stage: "recognise",
        options: [
            "Tropical rainforest",
            "Polar region",
            "Tundra",
            "Ice sheet"
        ],

        explanation:
            "Tropical rainforests are found in hot areas near the equator.",

        difficulty: 1,
        correctAnswer: "Tropical rainforest",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-bio-007",
        skillId: "whatAreBiomes",
        question:
            "Which biome is very cold and found near the poles?",
        stage: "recognise",
        options: [
            "Polar biome",
            "Rainforest",
            "Desert",
            "Grassland"
        ],

        explanation:
            "Polar biomes have very cold temperatures and lots of ice.",

        difficulty: 1,
        correctAnswer: "Polar biome",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-008",
        skillId: "whatAreBiomes",
        question:
            "Which biome usually has very little rainfall?",
        stage: "recognise",
        options: [
            "Desert",
            "Rainforest",
            "Wetland",
            "Tropical forest"
        ],

        explanation:
            "Deserts are dry areas with very low rainfall.",

        difficulty: 1,
        correctAnswer: "Desert",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-bio-009",
        skillId: "whatAreBiomes",
        question:
            "What is an ecosystem?",
        stage: "recognise",
        options: [
            "Living things interacting with their environment",
            "A type of weather",
            "A mountain range",
            "A map symbol"
        ],

        explanation:
            "An ecosystem includes plants, animals and their surroundings.",

        difficulty: 2,
        correctAnswer: "Living things interacting with their environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-010",
        skillId: "whatAreBiomes",
        question:
            "Why are plants important in ecosystems?",
        stage: "recognise",
        options: [
            "They provide food and habitats",
            "They stop all animals living",
            "They remove all water",
            "They create mountains"
        ],

        explanation:
            "Plants provide food and shelter for many living things.",

        difficulty: 1,
        correctAnswer: "They provide food and habitats",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-011",
        skillId: "whatAreBiomes",
        question:
            "What is a habitat?",
        stage: "recognise",
        options: [
            "The place where a living thing lives",
            "A type of climate",
            "A weather instrument",
            "A mountain feature"
        ],

        explanation:
            "A habitat provides the things an organism needs to survive.",

        difficulty: 1,
        correctAnswer: "The place where a living thing lives",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-bio-012",
        skillId: "whatAreBiomes",
        question:
            "Why are rainforests important?",
        stage: "recognise",
        options: [
            "They contain many different plants and animals",
            "They have no life",
            "They are always frozen",
            "They have no rainfall"
        ],

        explanation:
            "Rainforests have some of the greatest biodiversity on Earth.",

        difficulty: 1,
        correctAnswer: "They contain many different plants and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-bio-013",
        skillId: "whatAreBiomes",
        question:
            "What does biodiversity mean?",
        stage: "recognise",
        options: [
            "The variety of living things in an area",
            "The amount of rainfall",
            "The height of mountains",
            "The number of roads"
        ],

        explanation:
            "Biodiversity describes the range of plants and animals in a place.",

        difficulty: 2,
        correctAnswer: "The variety of living things in an area",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-014",
        skillId: "whatAreBiomes",
        question:
            "Why are deserts difficult places for plants to survive?",
        stage: "recognise",
        options: [
            "There is very little water",
            "There is too much snow",
            "There are too many rivers",
            "The climate is always wet"
        ],

        explanation:
            "Plants in deserts need special adaptations to survive with little water.",

        difficulty: 1,
        correctAnswer: "There is very little water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-bio-015",
        skillId: "whatAreBiomes",
        question:
            "What is an adaptation?",
        stage: "recognise",
        options: [
            "A feature that helps a living thing survive",
            "A type of weather",
            "A map symbol",
            "A human building"
        ],

        explanation:
            "Adaptations help plants and animals survive in their environments.",

        difficulty: 2,
        correctAnswer: "A feature that helps a living thing survive",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-bio-016",
        skillId: "whatAreBiomes",
        question:
            "How can humans affect biomes?",
        stage: "recognise",
        options: [
            "By changing habitats through activities such as farming and building",
            "Humans cannot affect nature",
            "Only animals affect biomes",
            "Biomes never change"
        ],

        explanation:
            "Human activities can change ecosystems and habitats.",

        difficulty: 2,
        correctAnswer: "By changing habitats through activities such as farming and building",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-bio-017",
        skillId: "whatAreBiomes",
        question:
            "Why should ecosystems be protected?",
        stage: "recognise",
        options: [
            "To protect plants, animals and natural environments",
            "To remove wildlife",
            "To stop all human activity",
            "To change all climates"
        ],

        explanation:
            "Protecting ecosystems helps maintain biodiversity.",

        difficulty: 1,
        correctAnswer: "To protect plants, animals and natural environments",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-bio-018",
        skillId: "whatAreBiomes",
        question:
            "Which factor is important for plant growth?",
        stage: "recognise",
        options: [
            "Temperature and rainfall",
            "Road signs",
            "Buildings",
            "Maps"
        ],

        explanation:
            "Plants need suitable conditions to grow.",

        difficulty: 1,
        correctAnswer: "Temperature and rainfall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-019",
        skillId: "whatAreBiomes",
        question:
            "Why are biomes found in different parts of Earth?",
        stage: "recognise",
        options: [
            "Different areas have different climates",
            "All places have identical conditions",
            "Maps create biomes",
            "Animals decide locations"
        ],

        explanation:
            "Climate differences create different environments around the world.",

        difficulty: 2,
        correctAnswer: "Different areas have different climates",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biomes"]
    },

    {
        id: "geo-bio-020",
        skillId: "whatAreBiomes",
        question:
            "Which sentence best describes a biome?",
        stage: "recognise",
        options: [
            "A large area with a particular climate and living things adapted to it",
            "A single plant",
            "A weather instrument",
            "A type of road"
        ],

        explanation:
            "Biomes are large regions with similar climates and ecosystems.",

        difficulty: 2,
        correctAnswer: "A large area with a particular climate and living things adapted to it",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "biomes"]
    }

    ]

};


export default whatAreBiomes;

export {

    whatAreBiomes

};
