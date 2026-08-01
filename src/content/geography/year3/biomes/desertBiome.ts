import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const desertBiome: SkillContent = {

    skillId: "desertBiome",

    title: "The Desert Biome",

    description:
        "Learn where deserts are found, their climate, adaptations of plants and animals, and how people live in desert environments.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-db-001",
        skillId: "desertBiome",
        question:
            "What is a desert?",
        stage: "recognise",
        options: [
            "A very dry area with little rainfall",
            "A place covered completely by forests",
            "A cold ocean area",
            "A type of mountain"
        ],

        explanation:
            "Deserts are areas that receive very little rainfall.",

        difficulty: 1,
        correctAnswer: "A very dry area with little rainfall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-002",
        skillId: "desertBiome",
        question:
            "What is the climate like in hot deserts?",
        stage: "recognise",
        options: [
            "Very dry with high temperatures",
            "Cold and snowy all year",
            "Wet and rainy every day",
            "Cool with lots of forests"
        ],

        explanation:
            "Hot deserts have very little rainfall and can have extremely high temperatures.",

        difficulty: 1,
        correctAnswer: "Very dry with high temperatures",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-003",
        skillId: "desertBiome",
        question:
            "Which famous desert is in Africa?",
        stage: "recognise",
        options: [
            "The Sahara Desert",
            "The Amazon Rainforest",
            "The Himalayas",
            "The Alps"
        ],

        explanation:
            "The Sahara is a large desert in northern Africa.",

        difficulty: 1,
        correctAnswer: "The Sahara Desert",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-004",
        skillId: "desertBiome",
        question:
            "Why do deserts receive little rainfall?",
        stage: "recognise",
        options: [
            "Air conditions make it difficult for clouds to produce rain",
            "There are no clouds anywhere",
            "Plants stop rainfall",
            "Rivers remove all water"
        ],

        explanation:
            "Many deserts are dry because of atmospheric conditions and location.",

        difficulty: 2,
        correctAnswer: "Air conditions make it difficult for clouds to produce rain",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-005",
        skillId: "desertBiome",
        question:
            "What is an oasis?",
        stage: "recognise",
        options: [
            "A place in a desert where water is found",
            "A desert storm",
            "A type of sand dune",
            "A mountain peak"
        ],

        explanation:
            "An oasis is a water source in a dry desert environment.",

        difficulty: 1,
        correctAnswer: "A place in a desert where water is found",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-006",
        skillId: "desertBiome",
        question:
            "Why are oases important?",
        stage: "recognise",
        options: [
            "They provide water for plants, animals and people",
            "They remove all water",
            "They make deserts colder",
            "They stop sand movement"
        ],

        explanation:
            "Oases allow life to survive in dry areas.",

        difficulty: 1,
        correctAnswer: "They provide water for plants, animals and people",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-007",
        skillId: "desertBiome",
        question:
            "How do desert plants survive?",
        stage: "recognise",
        options: [
            "They have adaptations to store or save water",
            "They need constant rain",
            "They cannot survive",
            "They live underwater"
        ],

        explanation:
            "Desert plants have features that help them survive with little water.",

        difficulty: 1,
        correctAnswer: "They have adaptations to store or save water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-008",
        skillId: "desertBiome",
        question:
            "How do some cacti survive in deserts?",
        stage: "recognise",
        options: [
            "They store water in their stems",
            "They need lots of rainfall",
            "They cannot grow there",
            "They live in rivers"
        ],

        explanation:
            "Cacti store water to survive dry conditions.",

        difficulty: 1,
        correctAnswer: "They store water in their stems",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-009",
        skillId: "desertBiome",
        question:
            "How do desert animals survive?",
        stage: "recognise",
        options: [
            "They have adaptations for heat and limited water",
            "They do not need food",
            "They only live in forests",
            "They avoid all sunlight"
        ],

        explanation:
            "Desert animals have adaptations that help them survive harsh conditions.",

        difficulty: 2,
        correctAnswer: "They have adaptations for heat and limited water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-db-010",
        skillId: "desertBiome",
        question:
            "Why are camels suited to desert life?",
        stage: "recognise",
        options: [
            "They can survive with little water and cope with heat",
            "They need cold weather",
            "They cannot travel far",
            "They live underwater"
        ],

        explanation:
            "Camels have adaptations that help them survive in deserts.",

        difficulty: 1,
        correctAnswer: "They can survive with little water and cope with heat",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-011",
        skillId: "desertBiome",
        question:
            "What is a sand dune?",
        stage: "recognise",
        options: [
            "A hill of sand shaped by wind",
            "A mountain made of rock",
            "A river feature",
            "A type of cloud"
        ],

        explanation:
            "Wind moves sand and can create dunes.",

        difficulty: 1,
        correctAnswer: "A hill of sand shaped by wind",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-012",
        skillId: "desertBiome",
        question:
            "What causes sand dunes to move?",
        stage: "recognise",
        options: [
            "Wind",
            "Rain only",
            "Snow",
            "Rivers"
        ],

        explanation:
            "Wind can move sand across desert landscapes.",

        difficulty: 1,
        correctAnswer: "Wind",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-013",
        skillId: "desertBiome",
        question:
            "Why is farming difficult in deserts?",
        stage: "recognise",
        options: [
            "There is little water available",
            "There is too much rain",
            "The soil is always frozen",
            "Plants grow too quickly"
        ],

        explanation:
            "Farming needs water, which is limited in many deserts.",

        difficulty: 1,
        correctAnswer: "There is little water available",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-014",
        skillId: "desertBiome",
        question:
            "How do some people live in deserts?",
        stage: "recognise",
        options: [
            "By adapting to the environment and using available resources",
            "By ignoring the climate",
            "By creating rainfall",
            "By removing all sand"
        ],

        explanation:
            "People living in deserts adapt their lifestyles to dry conditions.",

        difficulty: 2,
        correctAnswer: "By adapting to the environment and using available resources",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-015",
        skillId: "desertBiome",
        question:
            "What resource is especially important in deserts?",
        stage: "recognise",
        options: [
            "Water",
            "Snow",
            "Icebergs",
            "Rainforests"
        ],

        explanation:
            "Water is a valuable resource in dry desert environments.",

        difficulty: 1,
        correctAnswer: "Water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-016",
        skillId: "desertBiome",
        question:
            "Why do deserts have fewer plants than rainforests?",
        stage: "recognise",
        options: [
            "They receive much less rainfall",
            "They have too many rivers",
            "They are always frozen",
            "They have too much shade"
        ],

        explanation:
            "Low rainfall limits the number of plants that can grow.",

        difficulty: 1,
        correctAnswer: "They receive much less rainfall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-017",
        skillId: "desertBiome",
        question:
            "What is desertification?",
        stage: "recognise",
        options: [
            "Land becoming more like a desert",
            "A desert turning into a rainforest",
            "A type of animal",
            "A weather instrument"
        ],

        explanation:
            "Desertification happens when land becomes dry and less productive.",

        difficulty: 2,
        correctAnswer: "Land becoming more like a desert",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-db-018",
        skillId: "desertBiome",
        question:
            "Why should desert environments be protected?",
        stage: "recognise",
        options: [
            "They contain unique plants, animals and ecosystems",
            "They have no life",
            "They cannot change",
            "They are not important"
        ],

        explanation:
            "Deserts contain specially adapted species and valuable environments.",

        difficulty: 1,
        correctAnswer: "They contain unique plants, animals and ecosystems",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-db-019",
        skillId: "desertBiome",
        question:
            "Which animal is adapted to desert conditions?",
        stage: "recognise",
        options: [
            "Camel",
            "Penguin",
            "Polar bear",
            "Dolphin"
        ],

        explanation:
            "Camels have adaptations that help them survive in deserts.",

        difficulty: 1,
        correctAnswer: "Camel",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "deserts"]
    },

    {
        id: "geo-db-020",
        skillId: "desertBiome",
        question:
            "Which sentence best describes a desert biome?",
        stage: "recognise",
        options: [
            "A dry environment where plants and animals have special adaptations",
            "A wet forest with many trees",
            "A frozen ocean",
            "A place without any life"
        ],

        explanation:
            "Deserts are dry ecosystems where living things adapt to limited water.",

        difficulty: 2,
        correctAnswer: "A dry environment where plants and animals have special adaptations",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "deserts"]
    }

    ]

};


export default desertBiome;

export {

    desertBiome

};
