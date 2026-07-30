import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const habitats: SkillContent = {

    skillId: "habitats",

    title: "Habitats",

    description:
        "Learn about different habitats and how living things are suited to the places where they live.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-habitats-001",

        question: "What is a habitat?",

        options: [
            "The place where a living thing lives",
            "A type of weather",
            "A group of animals",
            "A kind of plant"
        ],

        answer: 0,

        explanation:
            "A habitat is the natural place where a plant or animal lives.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-002",

        question: "Which animal is well suited to living in the sea?",

        options: [
            "Dolphin",
            "Camel",
            "Fox",
            "Rabbit"
        ],

        answer: 0,

        explanation:
            "Dolphins are adapted to life in the sea.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats", "animals"]
    },

    {
        id: "sci-habitats-003",

        question: "Which habitat would you find a camel in?",

        options: [
            "Desert",
            "Pond",
            "Woodland",
            "Arctic"
        ],

        answer: 0,

        explanation:
            "Camels are well adapted to hot desert habitats.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-004",

        question: "Where does a frog usually live?",

        options: [
            "Pond",
            "Desert",
            "Mountain",
            "Ocean"
        ],

        answer: 0,

        explanation:
            "Frogs often live in or near ponds.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats", "pond"]
    },

    {
        id: "sci-habitats-005",

        question: "Which plant is most likely to grow in a woodland?",

        options: [
            "Oak tree",
            "Seaweed",
            "Cactus",
            "Coral"
        ],

        answer: 0,

        explanation:
            "Oak trees are common in woodland habitats.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "plants", "habitats"]
    },

    {
        id: "sci-habitats-006",

        question: "Which habitat has lots of salt water?",

        options: [
            "Ocean",
            "Forest",
            "Meadow",
            "Pond"
        ],

        answer: 0,

        explanation:
            "Oceans are made of salt water.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-007",

        question: "Which animal is suited to an Arctic habitat?",

        options: [
            "Polar bear",
            "Kangaroo",
            "Elephant",
            "Tiger"
        ],

        answer: 0,

        explanation:
            "Polar bears are adapted to very cold environments.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "habitats", "animals"]
    },

    {
        id: "sci-habitats-008",

        question: "Why do animals need habitats?",

        options: [
            "To find food, water and shelter",
            "To change colour",
            "To become plants",
            "To make weather"
        ],

        answer: 0,

        explanation:
            "Habitats provide everything living things need to survive.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-009",

        question: "Which habitat would you find fish living in?",

        options: [
            "River",
            "Desert",
            "Woodland",
            "Grassland"
        ],

        answer: 0,

        explanation:
            "Fish are adapted to living in water.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "habitats", "fish"]
    },

    {
        id: "sci-habitats-010",

        question: "Which statement is true?",

        options: [
            "Different living things live in different habitats.",
            "Every animal lives in the same habitat.",
            "Plants do not have habitats.",
            "Habitats are only found outdoors."
        ],

        answer: 0,

        explanation:
            "Different species are suited to different habitats.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-011",

        question: "Why is a cactus suited to the desert?",

        options: [
            "It stores water.",
            "It has large floating leaves.",
            "It breathes underwater.",
            "It grows in ice."
        ],

        answer: 0,

        explanation:
            "Cacti store water to survive long dry periods.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "plants", "adaptations"]
    },

    {
        id: "sci-habitats-012",

        question: "Why do fish have gills?",

        options: [
            "To breathe underwater",
            "To climb trees",
            "To keep warm",
            "To fly"
        ],

        answer: 0,

        explanation:
            "Gills allow fish to take oxygen from water.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "fish", "adaptations"]
    },

    {
        id: "sci-habitats-013",

        question: "A pond dries up. What is most likely to happen to the frogs living there?",

        options: [
            "They may move to another suitable habitat.",
            "They become fish.",
            "They turn into plants.",
            "Nothing changes."
        ],

        answer: 0,

        explanation:
            "Animals often need to find a new habitat if their old one no longer meets their needs.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "habitats", "survival"]
    },

    {
        id: "sci-habitats-014",

        question: "Which habitat would be best for an earthworm?",

        options: [
            "Moist soil",
            "Ocean",
            "Desert sand",
            "Snow"
        ],

        answer: 0,

        explanation:
            "Earthworms need damp soil to survive.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-015",

        question: "Why do woodland animals often have brown or green colours?",

        options: [
            "They help them blend into their surroundings.",
            "They help them swim.",
            "They help them fly.",
            "They make them louder."
        ],

        answer: 0,

        explanation:
            "Camouflage helps animals avoid predators and hunt for food.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "adaptations", "camouflage"]
    },

    {
        id: "sci-habitats-016",

        question: "What do all habitats provide?",

        options: [
            "The things living things need to survive",
            "The same temperature",
            "Only plants",
            "Only animals"
        ],

        answer: 0,

        explanation:
            "Habitats provide food, water, shelter and space.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-017",

        question: "Why would a polar bear struggle to live in a hot desert?",

        options: [
            "It is adapted for cold habitats.",
            "It cannot walk on sand.",
            "It cannot see in daylight.",
            "It only eats plants."
        ],

        answer: 0,

        explanation:
            "Its thick fur and body are suited to freezing conditions.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "adaptations"]
    },

    {
        id: "sci-habitats-018",

        question: "Why do scientists study habitats?",

        options: [
            "To understand how living things survive",
            "To make habitats bigger",
            "To change the weather",
            "To build roads"
        ],

        answer: 0,

        explanation:
            "Studying habitats helps us understand living things and protect them.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "working-scientifically"]
    },

    {
        id: "sci-habitats-019",

        question: "Which pair is correctly matched?",

        options: [
            "Camel — Desert",
            "Polar bear — Rainforest",
            "Dolphin — Woodland",
            "Frog — Arctic"
        ],

        answer: 0,

        explanation:
            "Camels are adapted to desert habitats.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-020",

        question: "Which sentence best describes a habitat?",

        options: [
            "A habitat is a place that provides living things with what they need to survive.",
            "A habitat is any place with trees.",
            "A habitat only contains animals.",
            "Every habitat is exactly the same."
        ],

        answer: 0,

        explanation:
            "Habitats provide food, water, shelter and space for living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "habitats", "adaptations"]
    }

    ]

};