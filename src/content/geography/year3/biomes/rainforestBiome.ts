import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const rainforestBiome: SkillContent = {

    skillId: "rainforestBiome",

    title: "The Tropical Rainforest",

    description:
        "Learn where tropical rainforests are found, their layers, plants, animals and why they are important.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-rf-001",
        skillId: "rainforestBiome",
        question:
            "Where are tropical rainforests usually found?",
        stage: "recognise",
        options: [
            "Near the equator",
            "Near the North Pole",
            "In very cold mountain areas",
            "Only in Europe"
        ],

        explanation:
            "Tropical rainforests are usually found in warm areas close to the equator.",

        difficulty: 1,
        correctAnswer: "Near the equator",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-002",
        skillId: "rainforestBiome",
        question:
            "What is the climate like in a tropical rainforest?",
        stage: "recognise",
        options: [
            "Hot and wet",
            "Cold and dry",
            "Frozen all year",
            "Cool with no rainfall"
        ],

        explanation:
            "Rainforests have high temperatures and lots of rainfall.",

        difficulty: 1,
        correctAnswer: "Hot and wet",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-003",
        skillId: "rainforestBiome",
        question:
            "Why do tropical rainforests have many different plants and animals?",
        stage: "recognise",
        options: [
            "The warm, wet conditions support many living things",
            "Nothing can survive there",
            "They have no sunlight",
            "They are very dry"
        ],

        explanation:
            "Rainforests have conditions that allow many species to live there.",

        difficulty: 1,
        correctAnswer: "The warm, wet conditions support many living things",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-004",
        skillId: "rainforestBiome",
        question:
            "What does biodiversity mean?",
        stage: "recognise",
        options: [
            "The variety of living things in an area",
            "The amount of rainfall",
            "The height of trees",
            "The number of roads"
        ],

        explanation:
            "Rainforests have high biodiversity because they contain many species.",

        difficulty: 2,
        correctAnswer: "The variety of living things in an area",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-005",
        skillId: "rainforestBiome",
        question:
            "What is the canopy?",
        stage: "recognise",
        options: [
            "The layer formed by the tops of rainforest trees",
            "The forest floor",
            "The roots underground",
            "A river through the forest"
        ],

        explanation:
            "The canopy is the upper layer where tree branches and leaves meet.",

        difficulty: 1,
        correctAnswer: "The layer formed by the tops of rainforest trees",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-006",
        skillId: "rainforestBiome",
        question:
            "Which rainforest layer receives the most sunlight?",
        stage: "recognise",
        options: [
            "The canopy",
            "The forest floor",
            "The roots",
            "The soil layer"
        ],

        explanation:
            "The canopy receives most of the sunlight because it is at the top.",

        difficulty: 2,
        correctAnswer: "The canopy",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-007",
        skillId: "rainforestBiome",
        question:
            "What is the forest floor like?",
        stage: "recognise",
        options: [
            "Dark because little sunlight reaches it",
            "Always covered in snow",
            "Very dry with no plants",
            "Above the treetops"
        ],

        explanation:
            "The thick canopy blocks much of the sunlight from reaching the forest floor.",

        difficulty: 2,
        correctAnswer: "Dark because little sunlight reaches it",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-008",
        skillId: "rainforestBiome",
        question:
            "Why do rainforest trees grow very tall?",
        stage: "recognise",
        options: [
            "They compete for sunlight",
            "They are made taller by people",
            "There is no sunlight",
            "They grow underwater"
        ],

        explanation:
            "Trees grow upwards to reach sunlight above other plants.",

        difficulty: 2,
        correctAnswer: "They compete for sunlight",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-009",
        skillId: "rainforestBiome",
        question:
            "Which animal might live in a rainforest?",
        stage: "recognise",
        options: [
            "Monkey",
            "Polar bear",
            "Penguin",
            "Arctic fox"
        ],

        explanation:
            "Many animals, including monkeys, live in tropical rainforests.",

        difficulty: 1,
        correctAnswer: "Monkey",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-010",
        skillId: "rainforestBiome",
        question:
            "Why are rainforest plants important?",
        stage: "recognise",
        options: [
            "They provide food and habitats for many species",
            "They stop all life",
            "They remove rainfall",
            "They create deserts"
        ],

        explanation:
            "Plants provide shelter and food for rainforest animals.",

        difficulty: 1,
        correctAnswer: "They provide food and habitats for many species",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-011",
        skillId: "rainforestBiome",
        question:
            "What is deforestation?",
        stage: "recognise",
        options: [
            "The removal of large areas of forest",
            "Planting new trees",
            "Studying animals",
            "Measuring rainfall"
        ],

        explanation:
            "Deforestation happens when forests are cleared.",

        difficulty: 1,
        correctAnswer: "The removal of large areas of forest",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-012",
        skillId: "rainforestBiome",
        question:
            "Why are rainforests cut down?",
        stage: "recognise",
        options: [
            "For activities such as farming and obtaining resources",
            "Because trees cannot grow",
            "Because animals remove them",
            "Because rainforests are empty"
        ],

        explanation:
            "People may clear rainforests for farming, roads and materials.",

        difficulty: 2,
        correctAnswer: "For activities such as farming and obtaining resources",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-013",
        skillId: "rainforestBiome",
        question:
            "Why are rainforests important for Earth?",
        stage: "recognise",
        options: [
            "They support biodiversity and help regulate climate",
            "They have no effect",
            "They stop all rainfall",
            "They create oceans"
        ],

        explanation:
            "Rainforests are important ecosystems with many environmental roles.",

        difficulty: 2,
        correctAnswer: "They support biodiversity and help regulate climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-014",
        skillId: "rainforestBiome",
        question:
            "What is an indigenous community?",
        stage: "recognise",
        options: [
            "A group of people who have lived in an area for a long time",
            "A type of plant",
            "A weather event",
            "A mountain range"
        ],

        explanation:
            "Many indigenous communities have lived in rainforest areas for generations.",

        difficulty: 2,
        correctAnswer: "A group of people who have lived in an area for a long time",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-015",
        skillId: "rainforestBiome",
        question:
            "Why are rainforest soils often thin?",
        stage: "recognise",
        options: [
            "Heavy rainfall can wash nutrients away",
            "There is no rain",
            "The ground is frozen",
            "Trees remove all soil"
        ],

        explanation:
            "Rain can wash nutrients deeper into the ground.",

        difficulty: 2,
        correctAnswer: "Heavy rainfall can wash nutrients away",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-016",
        skillId: "rainforestBiome",
        question:
            "How do rainforest animals survive?",
        stage: "recognise",
        options: [
            "They have adaptations suited to their environment",
            "They do not need habitats",
            "They cannot survive there",
            "They all live the same way"
        ],

        explanation:
            "Animals have features that help them survive in rainforest conditions.",

        difficulty: 2,
        correctAnswer: "They have adaptations suited to their environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-rf-017",
        skillId: "rainforestBiome",
        question:
            "What is a tropical rainforest ecosystem made up of?",
        stage: "recognise",
        options: [
            "Plants, animals and their environment",
            "Only trees",
            "Only rivers",
            "Only soil"
        ],

        explanation:
            "An ecosystem includes living things and their surroundings.",

        difficulty: 1,
        correctAnswer: "Plants, animals and their environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-rf-018",
        skillId: "rainforestBiome",
        question:
            "How can people help protect rainforests?",
        stage: "recognise",
        options: [
            "By conserving forests and reducing destruction",
            "By removing all trees",
            "By increasing pollution",
            "By destroying habitats"
        ],

        explanation:
            "Conservation helps protect rainforest ecosystems.",

        difficulty: 1,
        correctAnswer: "By conserving forests and reducing destruction",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-rf-019",
        skillId: "rainforestBiome",
        question:
            "Why are rainforests called 'rainforests'?",
        stage: "recognise",
        options: [
            "Because they receive large amounts of rainfall",
            "Because they create all rain",
            "Because they are always flooded",
            "Because they have no trees"
        ],

        explanation:
            "The name comes from their high rainfall levels.",

        difficulty: 1,
        correctAnswer: "Because they receive large amounts of rainfall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-rf-020",
        skillId: "rainforestBiome",
        question:
            "Which sentence best describes a tropical rainforest?",
        stage: "recognise",
        options: [
            "A warm, wet biome with many plants and animals",
            "A cold area with ice only",
            "A dry area with little life",
            "A place without trees"
        ],

        explanation:
            "Tropical rainforests are warm, wet ecosystems with high biodiversity.",

        difficulty: 2,
        correctAnswer: "A warm, wet biome with many plants and animals",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "rainforest"]
    }

    ]

};


export default rainforestBiome;

export {

    rainforestBiome

};
