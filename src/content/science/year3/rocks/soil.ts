import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const soil: SkillContent = {

    skillId: "soil",

    title: "Soil",

    description:
        "Learn how soil is formed, the different types of soil and why soil is important for plants and living things.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-soil-001",

        question: "What is soil?",

        options: [
            "A mixture of tiny pieces of rock, air, water and dead plants and animals",
            "Only tiny rocks",
            "Only sand",
            "Only water"
        ],

        answer: 0,

        explanation:
            "Soil is made from tiny rock particles, water, air and decayed living matter.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "rocks", "soil"]
    },

    {
        id: "sci-soil-002",

        question: "Where do most plants grow?",

        options: [
            "In soil",
            "On clouds",
            "On ice",
            "In the sea"
        ],

        answer: 0,

        explanation:
            "Most plants grow in soil because it provides support, water and nutrients.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "soil", "plants"]
    },

    {
        id: "sci-soil-003",

        question: "What helps to make soil over a long time?",

        options: [
            "Broken rocks",
            "Plastic",
            "Glass",
            "Metal"
        ],

        answer: 0,

        explanation:
            "Soil forms as rocks break down over many years.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "soil", "rocks"]
    },

    {
        id: "sci-soil-004",

        question: "Which of these is a type of soil?",

        options: [
            "Clay",
            "Concrete",
            "Brick",
            "Plastic"
        ],

        answer: 0,

        explanation:
            "Clay is one of the main types of soil.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "soil", "clay"]
    },

    {
        id: "sci-soil-005",

        question: "Which soil is made of large grains?",

        options: [
            "Sandy soil",
            "Clay soil",
            "Mud",
            "Compost"
        ],

        answer: 0,

        explanation:
            "Sandy soil contains larger grains than other soil types.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "soil", "sand"]
    },

    {
        id: "sci-soil-006",

        question: "Which soil feels sticky when it is wet?",

        options: [
            "Clay soil",
            "Sandy soil",
            "Rock",
            "Gravel"
        ],

        answer: 0,

        explanation:
            "Clay soil becomes sticky because its particles are very small.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "soil", "clay"]
    },

    {
        id: "sci-soil-007",

        question: "Why is soil important?",

        options: [
            "It helps plants grow",
            "It makes the Sun shine",
            "It creates rain",
            "It makes rocks float"
        ],

        answer: 0,

        explanation:
            "Plants depend on soil for support, water and nutrients.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "soil", "plants"]
    },

    {
        id: "sci-soil-008",

        question: "Which living thing might live in soil?",

        options: [
            "Earthworm",
            "Shark",
            "Whale",
            "Dolphin"
        ],

        answer: 0,

        explanation:
            "Earthworms spend most of their lives in soil.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "soil", "living-things"]
    },

    {
        id: "sci-soil-009",

        question: "What can be found in healthy soil?",

        options: [
            "Tiny living organisms",
            "Only rocks",
            "Only water",
            "Only sand"
        ],

        answer: 0,

        explanation:
            "Healthy soil contains many tiny living organisms.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "soil", "living-things"]
    },

    {
        id: "sci-soil-010",

        question: "Why do roots grow into soil?",

        options: [
            "To take in water and nutrients",
            "To reach the clouds",
            "To make flowers float",
            "To find sunlight"
        ],

        answer: 0,

        explanation:
            "Roots absorb water and nutrients from the soil.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "soil", "plants"]
    },

    {
        id: "sci-soil-011",

        question: "Which soil lets water pass through it most quickly?",

        options: [
            "Sandy soil",
            "Clay soil",
            "Wet clay",
            "Mud"
        ],

        answer: 0,

        explanation:
            "Sandy soil has larger spaces between its grains, allowing water to drain quickly.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "sand"]
    },

    {
        id: "sci-soil-012",

        question: "Which soil holds the most water?",

        options: [
            "Clay soil",
            "Sandy soil",
            "Gravel",
            "Pebbles"
        ],

        answer: 0,

        explanation:
            "Clay soil holds water because its particles are very small and close together.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "clay"]
    },

    {
        id: "sci-soil-013",

        question: "How is soil formed?",

        options: [
            "Rocks break down over many years",
            "Trees turn into soil overnight",
            "Rain makes new rocks",
            "Clouds become soil"
        ],

        answer: 0,

        explanation:
            "Weathering slowly breaks rocks into smaller pieces that become part of soil.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "weathering"]
    },

    {
        id: "sci-soil-014",

        question: "Why do gardeners often add compost to soil?",

        options: [
            "To add nutrients for plants",
            "To make rocks harder",
            "To stop rain",
            "To remove roots"
        ],

        answer: 0,

        explanation:
            "Compost adds nutrients that help plants grow well.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "compost"]
    },

    {
        id: "sci-soil-015",

        question: "Which soil would be best for a cactus?",

        options: [
            "Sandy soil",
            "Clay soil",
            "Very wet soil",
            "Solid rock"
        ],

        answer: 0,

        explanation:
            "Cacti grow best in well-drained sandy soil.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "sand", "plants"]
    },

    {
        id: "sci-soil-016",

        question: "What do earthworms do that helps soil?",

        options: [
            "They mix and loosen it",
            "They turn it into rock",
            "They dry it out",
            "They remove all nutrients"
        ],

        answer: 0,

        explanation:
            "Earthworms improve soil by mixing it and allowing air and water to move through it.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "earthworms"]
    },

    {
        id: "sci-soil-017",

        question: "Why is air in soil important?",

        options: [
            "Plant roots need air to stay healthy",
            "It makes rocks grow",
            "It changes soil into sand",
            "It stops plants needing water"
        ],

        answer: 0,

        explanation:
            "Roots need air as well as water to grow properly.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "plants"]
    },

    {
        id: "sci-soil-018",

        question: "Which statement about soil is true?",

        options: [
            "Different soils have different properties",
            "All soils are exactly the same",
            "Soil contains only rocks",
            "Plants do not need soil"
        ],

        answer: 0,

        explanation:
            "Clay, sandy and other soils have different properties.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "properties"]
    },

    {
        id: "sci-soil-019",

        question: "Why is healthy soil important for farming?",

        options: [
            "It helps crops grow well",
            "It makes rain fall",
            "It creates sunshine",
            "It stops seeds growing"
        ],

        answer: 0,

        explanation:
            "Healthy soil provides crops with water and nutrients.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "farming"]
    },

    {
        id: "sci-soil-020",

        question: "Which sentence best describes soil?",

        options: [
            "It is a mixture that supports plants and many living things",
            "It is only broken rock",
            "It is only water",
            "It is a type of metal"
        ],

        answer: 0,

        explanation:
            "Soil is made from rock particles, water, air and organic matter, making it an important habitat for plants and animals.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "soil", "plants", "living-things"]
    }

    ]

};