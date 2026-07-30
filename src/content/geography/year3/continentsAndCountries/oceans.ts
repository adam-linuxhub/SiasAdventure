import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const oceans: SkillContent = {

    skillId: "oceans",

    title: "Oceans of the World",

    description:
        "Learn about the five oceans, where they are located and why oceans are important.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-oce-001",
        skillId: "oceans",
        question:
            "What is an ocean?",
        stage: "recognise",
        options: [
            "A very large area of salt water",
            "A small lake",
            "A type of mountain",
            "A weather event"
        ],

        explanation:
            "Oceans are huge areas of salt water that cover much of Earth's surface.",

        difficulty: 1,
        correctAnswer: "A very large area of salt water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-002",
        skillId: "oceans",
        question:
            "How many oceans are there in the world?",
        stage: "recognise",
        options: [
            "Five",
            "Seven",
            "Three",
            "Ten"
        ],

        explanation:
            "The five oceans are Pacific, Atlantic, Indian, Southern and Arctic.",

        difficulty: 1,
        correctAnswer: "Five",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-003",
        skillId: "oceans",
        question:
            "Which is the largest ocean?",
        stage: "recognise",
        options: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean"
        ],

        explanation:
            "The Pacific Ocean is the largest ocean on Earth.",

        difficulty: 1,
        correctAnswer: "Pacific Ocean",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-004",
        skillId: "oceans",
        question:
            "Which ocean is between Europe and North America?",
        stage: "recognise",
        options: [
            "Atlantic Ocean",
            "Pacific Ocean",
            "Indian Ocean",
            "Southern Ocean"
        ],

        explanation:
            "The Atlantic Ocean separates Europe and North America.",

        difficulty: 1,
        correctAnswer: "Atlantic Ocean",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-005",
        skillId: "oceans",
        question:
            "Which ocean is around Antarctica?",
        stage: "recognise",
        options: [
            "Southern Ocean",
            "Arctic Ocean",
            "Atlantic Ocean",
            "Indian Ocean"
        ],

        explanation:
            "The Southern Ocean surrounds Antarctica.",

        difficulty: 1,
        correctAnswer: "Southern Ocean",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-006",
        skillId: "oceans",
        question:
            "Which ocean is near the North Pole?",
        stage: "recognise",
        options: [
            "Arctic Ocean",
            "Pacific Ocean",
            "Indian Ocean",
            "Southern Ocean"
        ],

        explanation:
            "The Arctic Ocean is located around the North Pole.",

        difficulty: 1,
        correctAnswer: "Arctic Ocean",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-007",
        skillId: "oceans",
        question:
            "Which ocean is between Africa, Asia and Australia?",
        stage: "recognise",
        options: [
            "Indian Ocean",
            "Atlantic Ocean",
            "Arctic Ocean",
            "Southern Ocean"
        ],

        explanation:
            "The Indian Ocean is located between these continents.",

        difficulty: 2,
        correctAnswer: "Indian Ocean",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-008",
        skillId: "oceans",
        question:
            "Why are oceans important?",
        stage: "recognise",
        options: [
            "They provide habitats and help regulate Earth's climate",
            "They have no effect on Earth",
            "They contain no life",
            "They only create waves"
        ],

        explanation:
            "Oceans support life and influence weather and climate.",

        difficulty: 2,
        correctAnswer: "They provide habitats and help regulate Earth's climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-009",
        skillId: "oceans",
        question:
            "What type of water is found in oceans?",
        stage: "recognise",
        options: [
            "Salt water",
            "Fresh water only",
            "Frozen water only",
            "No water"
        ],

        explanation:
            "Ocean water contains salt, unlike most freshwater rivers and lakes.",

        difficulty: 1,
        correctAnswer: "Salt water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-010",
        skillId: "oceans",
        question:
            "What are waves in the ocean?",
        stage: "recognise",
        options: [
            "Movements of water caused mainly by wind",
            "Moving islands",
            "Types of fish",
            "Clouds under water"
        ],

        explanation:
            "Wind transfers energy to the ocean surface and creates waves.",

        difficulty: 1,
        correctAnswer: "Movements of water caused mainly by wind",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-011",
        skillId: "oceans",
        question:
            "What is a current?",
        stage: "recognise",
        options: [
            "A moving flow of ocean water",
            "A type of beach",
            "A mountain stream",
            "A weather instrument"
        ],

        explanation:
            "Ocean currents are large movements of water through the oceans.",

        difficulty: 2,
        correctAnswer: "A moving flow of ocean water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-012",
        skillId: "oceans",
        question:
            "Why do oceans affect climate?",
        stage: "recognise",
        options: [
            "They store and move heat around Earth",
            "They stop all weather",
            "They create continents",
            "They remove sunlight"
        ],

        explanation:
            "Oceans influence temperatures and weather patterns.",

        difficulty: 2,
        correctAnswer: "They store and move heat around Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-oce-013",
        skillId: "oceans",
        question:
            "What animals live in oceans?",
        stage: "recognise",
        options: [
            "Marine animals such as whales and fish",
            "Only land animals",
            "Only birds",
            "No living things"
        ],

        explanation:
            "Oceans contain many different marine ecosystems.",

        difficulty: 1,
        correctAnswer: "Marine animals such as whales and fish",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-014",
        skillId: "oceans",
        question:
            "What is a marine habitat?",
        stage: "recognise",
        options: [
            "A habitat found in the sea",
            "A desert habitat",
            "A mountain habitat",
            "A city habitat"
        ],

        explanation:
            "Marine habitats are environments in oceans and seas.",

        difficulty: 1,
        correctAnswer: "A habitat found in the sea",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-oce-015",
        skillId: "oceans",
        question:
            "Why should oceans be protected?",
        stage: "recognise",
        options: [
            "To protect marine life and ecosystems",
            "To remove all sea life",
            "To stop rainfall",
            "To create pollution"
        ],

        explanation:
            "Healthy oceans are important for many species and people.",

        difficulty: 1,
        correctAnswer: "To protect marine life and ecosystems",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-oce-016",
        skillId: "oceans",
        question:
            "What can pollute oceans?",
        stage: "recognise",
        options: [
            "Plastic and other waste",
            "Clean water",
            "Sunlight",
            "Fish"
        ],

        explanation:
            "Pollution can damage ocean habitats and wildlife.",

        difficulty: 1,
        correctAnswer: "Plastic and other waste",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "pollution"]
    },

    {
        id: "geo-oce-017",
        skillId: "oceans",
        question:
            "Why are oceans shown on world maps?",
        stage: "recognise",
        options: [
            "To show the location of major water areas",
            "To show only roads",
            "To measure buildings",
            "To create weather"
        ],

        explanation:
            "Maps show where oceans and continents are located.",

        difficulty: 1,
        correctAnswer: "To show the location of major water areas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-oce-018",
        skillId: "oceans",
        question:
            "Which continent is surrounded by the Southern Ocean?",
        stage: "recognise",
        options: [
            "Antarctica",
            "Europe",
            "Africa",
            "Asia"
        ],

        explanation:
            "The Southern Ocean surrounds the continent of Antarctica.",

        difficulty: 2,
        correctAnswer: "Antarctica",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "oceans"]
    },

    {
        id: "geo-oce-019",
        skillId: "oceans",
        question:
            "How are continents and oceans connected?",
        stage: "recognise",
        options: [
            "Continents are large land areas surrounded by oceans",
            "They are completely separate",
            "Oceans are found only inland",
            "Continents float on rivers"
        ],

        explanation:
            "Earth's continents are surrounded and separated by oceans.",

        difficulty: 2,
        correctAnswer: "Continents are large land areas surrounded by oceans",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-oce-020",
        skillId: "oceans",
        question:
            "Which sentence best describes oceans?",
        stage: "recognise",
        options: [
            "Oceans are large areas of salt water that support life and influence Earth",
            "Oceans are small lakes",
            "Oceans have no importance",
            "Oceans only contain waves"
        ],

        explanation:
            "Oceans are important parts of Earth's physical geography.",

        difficulty: 2,
        correctAnswer: "Oceans are large areas of salt water that support life and influence Earth",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "oceans"]
    }

    ]

};