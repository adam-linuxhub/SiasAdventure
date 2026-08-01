import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const habitats: SkillContent = {

    skillId: "habitats",

    title: "Habitats",

    description:
        "Learn about different habitats and how living things are suited to the places where they live.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-habitats-001",
        skillId: "habitats",
        question: "What is a habitat?",
        stage: "recognise",
        options: [
            "The place where a living thing lives",
            "A type of weather",
            "A group of animals",
            "A kind of plant"
        ],

        explanation:
            "A habitat is the natural place where a plant or animal lives.",

        difficulty: 1,
        correctAnswer: "The place where a living thing lives",
        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-002",
        skillId: "habitats",
        question: "Which animal is well suited to living in the sea?",
        stage: "recognise",
        options: [
            "Dolphin",
            "Camel",
            "Fox",
            "Rabbit"
        ],

        explanation:
            "Dolphins are adapted to life in the sea.",

        difficulty: 1,
        correctAnswer: "Dolphin",
        estimatedSeconds: 15,

        tags: ["science", "habitats", "animals"]
    },

    {
        id: "sci-habitats-003",
        skillId: "habitats",
        question: "Which habitat would you find a camel in?",
        stage: "recognise",
        options: [
            "Desert",
            "Pond",
            "Woodland",
            "Arctic"
        ],

        explanation:
            "Camels are well adapted to hot desert habitats.",

        difficulty: 1,
        correctAnswer: "Desert",
        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-004",
        skillId: "habitats",
        question: "Where does a frog usually live?",
        stage: "recognise",
        options: [
            "Pond",
            "Desert",
            "Mountain",
            "Ocean"
        ],

        explanation:
            "Frogs often live in or near ponds.",

        difficulty: 1,
        correctAnswer: "Pond",
        estimatedSeconds: 15,

        tags: ["science", "habitats", "pond"]
    },

    {
        id: "sci-habitats-005",
        skillId: "habitats",
        question: "Which plant is most likely to grow in a woodland?",
        stage: "recognise",
        options: [
            "Oak tree",
            "Seaweed",
            "Cactus",
            "Coral"
        ],

        explanation:
            "Oak trees are common in woodland habitats.",

        difficulty: 1,
        correctAnswer: "Oak tree",
        estimatedSeconds: 15,

        tags: ["science", "plants", "habitats"]
    },

    {
        id: "sci-habitats-006",
        skillId: "habitats",
        question: "Which habitat has lots of salt water?",
        stage: "recognise",
        options: [
            "Ocean",
            "Forest",
            "Meadow",
            "Pond"
        ],

        explanation:
            "Oceans are made of salt water.",

        difficulty: 1,
        correctAnswer: "Ocean",
        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-007",
        skillId: "habitats",
        question: "Which animal is suited to an Arctic habitat?",
        stage: "recognise",
        options: [
            "Polar bear",
            "Kangaroo",
            "Elephant",
            "Tiger"
        ],

        explanation:
            "Polar bears are adapted to very cold environments.",

        difficulty: 1,
        correctAnswer: "Polar bear",
        estimatedSeconds: 15,

        tags: ["science", "habitats", "animals"]
    },

    {
        id: "sci-habitats-008",
        skillId: "habitats",
        question: "Why do animals need habitats?",
        stage: "recognise",
        options: [
            "To find food, water and shelter",
            "To change colour",
            "To become plants",
            "To make weather"
        ],

        explanation:
            "Habitats provide everything living things need to survive.",

        difficulty: 1,
        correctAnswer: "To find food, water and shelter",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-009",
        skillId: "habitats",
        question: "Which habitat would you find fish living in?",
        stage: "recognise",
        options: [
            "River",
            "Desert",
            "Woodland",
            "Grassland"
        ],

        explanation:
            "Fish are adapted to living in water.",

        difficulty: 1,
        correctAnswer: "River",
        estimatedSeconds: 20,

        tags: ["science", "habitats", "fish"]
    },

    {
        id: "sci-habitats-010",
        skillId: "habitats",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Different living things live in different habitats.",
            "Every animal lives in the same habitat.",
            "Plants do not have habitats.",
            "Habitats are only found outdoors."
        ],

        explanation:
            "Different species are suited to different habitats.",

        difficulty: 1,
        correctAnswer: "Different living things live in different habitats.",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-011",
        skillId: "habitats",
        question: "Why is a cactus suited to the desert?",
        stage: "recognise",
        options: [
            "It stores water.",
            "It has large floating leaves.",
            "It breathes underwater.",
            "It grows in ice."
        ],

        explanation:
            "Cacti store water to survive long dry periods.",

        difficulty: 2,
        correctAnswer: "It stores water.",
        estimatedSeconds: 20,

        tags: ["science", "plants", "adaptations"]
    },

    {
        id: "sci-habitats-012",
        skillId: "habitats",
        question: "Why do fish have gills?",
        stage: "recognise",
        options: [
            "To breathe underwater",
            "To climb trees",
            "To keep warm",
            "To fly"
        ],

        explanation:
            "Gills allow fish to take oxygen from water.",

        difficulty: 2,
        correctAnswer: "To breathe underwater",
        estimatedSeconds: 20,

        tags: ["science", "fish", "adaptations"]
    },

    {
        id: "sci-habitats-013",
        skillId: "habitats",
        question: "A pond dries up. What is most likely to happen to the frogs living there?",
        stage: "recognise",
        options: [
            "They may move to another suitable habitat.",
            "They become fish.",
            "They turn into plants.",
            "Nothing changes."
        ],

        explanation:
            "Animals often need to find a new habitat if their old one no longer meets their needs.",

        difficulty: 2,
        correctAnswer: "They may move to another suitable habitat.",
        estimatedSeconds: 20,

        tags: ["science", "habitats", "survival"]
    },

    {
        id: "sci-habitats-014",
        skillId: "habitats",
        question: "Which habitat would be best for an earthworm?",
        stage: "recognise",
        options: [
            "Moist soil",
            "Ocean",
            "Desert sand",
            "Snow"
        ],

        explanation:
            "Earthworms need damp soil to survive.",

        difficulty: 2,
        correctAnswer: "Moist soil",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-015",
        skillId: "habitats",
        question: "Why do woodland animals often have brown or green colours?",
        stage: "recognise",
        options: [
            "They help them blend into their surroundings.",
            "They help them swim.",
            "They help them fly.",
            "They make them louder."
        ],

        explanation:
            "Camouflage helps animals avoid predators and hunt for food.",

        difficulty: 2,
        correctAnswer: "They help them blend into their surroundings.",
        estimatedSeconds: 20,

        tags: ["science", "adaptations", "camouflage"]
    },

    {
        id: "sci-habitats-016",
        skillId: "habitats",
        question: "What do all habitats provide?",
        stage: "recognise",
        options: [
            "The things living things need to survive",
            "The same temperature",
            "Only plants",
            "Only animals"
        ],

        explanation:
            "Habitats provide food, water, shelter and space.",

        difficulty: 2,
        correctAnswer: "The things living things need to survive",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-017",
        skillId: "habitats",
        question: "Why would a polar bear struggle to live in a hot desert?",
        stage: "recognise",
        options: [
            "It is adapted for cold habitats.",
            "It cannot walk on sand.",
            "It cannot see in daylight.",
            "It only eats plants."
        ],

        explanation:
            "Its thick fur and body are suited to freezing conditions.",

        difficulty: 2,
        correctAnswer: "It is adapted for cold habitats.",
        estimatedSeconds: 20,

        tags: ["science", "adaptations"]
    },

    {
        id: "sci-habitats-018",
        skillId: "habitats",
        question: "Why do scientists study habitats?",
        stage: "recognise",
        options: [
            "To understand how living things survive",
            "To make habitats bigger",
            "To change the weather",
            "To build roads"
        ],

        explanation:
            "Studying habitats helps us understand living things and protect them.",

        difficulty: 2,
        correctAnswer: "To understand how living things survive",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically"]
    },

    {
        id: "sci-habitats-019",
        skillId: "habitats",
        question: "Which pair is correctly matched?",
        stage: "recognise",
        options: [
            "Camel — Desert",
            "Polar bear — Rainforest",
            "Dolphin — Woodland",
            "Frog — Arctic"
        ],

        explanation:
            "Camels are adapted to desert habitats.",

        difficulty: 2,
        correctAnswer: "Camel — Desert",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-habitats-020",
        skillId: "habitats",
        question: "Which sentence best describes a habitat?",
        stage: "recognise",
        options: [
            "A habitat is a place that provides living things with what they need to survive.",
            "A habitat is any place with trees.",
            "A habitat only contains animals.",
            "Every habitat is exactly the same."
        ],

        explanation:
            "Habitats provide food, water, shelter and space for living things.",

        difficulty: 2,
        correctAnswer: "A habitat is a place that provides living things with what they need to survive.",
        estimatedSeconds: 20,

        tags: ["science", "habitats", "adaptations"]
    }

    ]

};


export default habitats;

export {

    habitats

};
