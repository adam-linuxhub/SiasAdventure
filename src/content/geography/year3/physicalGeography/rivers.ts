import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const rivers: SkillContent = {

    skillId: "rivers",

    title: "Rivers",

    description:
        "Learn about rivers, where they begin, where they end and why they are important.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-rivers-001",
        skillId: "rivers",
        question: "What is a river?",
        stage: "recognise",
        options: [
            "A large natural flow of water",
            "A mountain",
            "A road",
            "A forest"
        ],

        explanation:
            "A river is a natural flow of water that moves across the land.",

        difficulty: 1,
        correctAnswer: "A large natural flow of water",
        estimatedSeconds: 15,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-002",
        skillId: "rivers",
        question: "Where does a river usually begin?",
        stage: "recognise",
        options: [
            "At its source",
            "At the sea",
            "In a city",
            "At a bridge"
        ],

        explanation:
            "The beginning of a river is called its source.",

        difficulty: 1,
        correctAnswer: "At its source",
        estimatedSeconds: 15,

        tags: ["geography", "river-source"]
    },

    {
        id: "geo-rivers-003",
        skillId: "rivers",
        question: "Where does a river usually end?",
        stage: "recognise",
        options: [
            "At its mouth",
            "At its source",
            "On a mountain",
            "In a forest"
        ],

        explanation:
            "The mouth is where a river flows into the sea, a lake or another river.",

        difficulty: 1,
        correctAnswer: "At its mouth",
        estimatedSeconds: 15,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-004",
        skillId: "rivers",
        question: "What does water in a river do?",
        stage: "recognise",
        options: [
            "Flows downhill",
            "Always flows uphill",
            "Stays still forever",
            "Flows into the sky"
        ],

        explanation:
            "Rivers usually flow downhill because of gravity.",

        difficulty: 1,
        correctAnswer: "Flows downhill",
        estimatedSeconds: 15,

        tags: ["geography", "water"]
    },

    {
        id: "geo-rivers-005",
        skillId: "rivers",
        question: "Which of these is a natural feature?",
        stage: "recognise",
        options: [
            "River",
            "Motorway",
            "Railway",
            "Car park"
        ],

        explanation:
            "A river is a natural feature of the Earth's surface.",

        difficulty: 1,
        correctAnswer: "River",
        estimatedSeconds: 15,

        tags: ["geography", "physical-geography"]
    },

    {
        id: "geo-rivers-006",
        skillId: "rivers",
        question: "What is the beginning of a river called?",
        stage: "recognise",
        options: [
            "Source",
            "Mouth",
            "Bridge",
            "Bank"
        ],

        explanation:
            "A river starts at its source.",

        difficulty: 1,
        correctAnswer: "Source",
        estimatedSeconds: 15,

        tags: ["geography", "river-source"]
    },

    {
        id: "geo-rivers-007",
        skillId: "rivers",
        question: "What is the end of a river called?",
        stage: "recognise",
        options: [
            "Mouth",
            "Source",
            "Hill",
            "Spring"
        ],

        explanation:
            "The mouth is where a river finishes its journey.",

        difficulty: 1,
        correctAnswer: "Mouth",
        estimatedSeconds: 15,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-008",
        skillId: "rivers",
        question: "Which colour is rivers usually shown in on maps?",
        stage: "recognise",
        options: [
            "Blue",
            "Red",
            "Yellow",
            "Black"
        ],

        explanation:
            "Water features such as rivers are usually coloured blue on maps.",

        difficulty: 1,
        correctAnswer: "Blue",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-rivers-009",
        skillId: "rivers",
        question: "Which place is a river most likely to flow into?",
        stage: "recognise",
        options: [
            "The sea",
            "A school",
            "A road",
            "A playground"
        ],

        explanation:
            "Many rivers flow into the sea at their mouth.",

        difficulty: 1,
        correctAnswer: "The sea",
        estimatedSeconds: 20,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-010",
        skillId: "rivers",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Rivers are natural features.",
            "Rivers always flow uphill.",
            "Every river is the same length.",
            "People build all rivers."
        ],

        explanation:
            "Rivers are naturally formed features that flow across the land.",

        difficulty: 1,
        correctAnswer: "Rivers are natural features.",
        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-011",
        skillId: "rivers",
        question: "Why do many towns and cities grow near rivers?",
        stage: "recognise",
        options: [
            "Rivers provide water and transport.",
            "Rivers stop all rain.",
            "Rivers make roads unnecessary.",
            "Rivers grow buildings."
        ],

        explanation:
            "People have settled near rivers for fresh water, transport and farming.",

        difficulty: 2,
        correctAnswer: "Rivers provide water and transport.",
        estimatedSeconds: 20,

        tags: ["geography", "settlements", "rivers"]
    },

    {
        id: "geo-rivers-012",
        skillId: "rivers",
        question: "Why does a river flow downhill?",
        stage: "recognise",
        options: [
            "Gravity pulls the water downhill.",
            "The wind pushes it.",
            "Fish move it.",
            "Trees pull it."
        ],

        explanation:
            "Gravity causes water to flow from higher land to lower land.",

        difficulty: 2,
        correctAnswer: "Gravity pulls the water downhill.",
        estimatedSeconds: 20,

        tags: ["geography", "water"]
    },

    {
        id: "geo-rivers-013",
        skillId: "rivers",
        question: "Why are rivers important for wildlife?",
        stage: "recognise",
        options: [
            "Many plants and animals live in and around them.",
            "They stop animals moving.",
            "Only fish can use them.",
            "Nothing lives near rivers."
        ],

        explanation:
            "Rivers provide habitats for many different living things.",

        difficulty: 2,
        correctAnswer: "Many plants and animals live in and around them.",
        estimatedSeconds: 20,

        tags: ["geography", "wildlife"]
    },

    {
        id: "geo-rivers-014",
        skillId: "rivers",
        question: "What happens at the mouth of a river?",
        stage: "recognise",
        options: [
            "The river joins the sea, a lake or another river.",
            "The river begins.",
            "The river freezes forever.",
            "The river disappears underground."
        ],

        explanation:
            "The mouth is where a river ends by flowing into another body of water.",

        difficulty: 2,
        correctAnswer: "The river joins the sea, a lake or another river.",
        estimatedSeconds: 20,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-015",
        skillId: "rivers",
        question: "Why are rivers shown on maps?",
        stage: "recognise",
        options: [
            "They are important natural features.",
            "They change every hour.",
            "They replace roads.",
            "They only exist in winter."
        ],

        explanation:
            "Rivers help people understand the landscape and navigate.",

        difficulty: 2,
        correctAnswer: "They are important natural features.",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-rivers-016",
        skillId: "rivers",
        question: "Which activity is most likely to happen on a river?",
        stage: "recognise",
        options: [
            "Boating",
            "Flying aeroplanes",
            "Playing football",
            "Driving trains"
        ],

        explanation:
            "Many rivers are used for boating and other water activities.",

        difficulty: 2,
        correctAnswer: "Boating",
        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-017",
        skillId: "rivers",
        question: "If you follow a river downstream, where are you travelling?",
        stage: "recognise",
        options: [
            "Towards its mouth",
            "Towards its source",
            "Up a mountain",
            "Into a cave"
        ],

        explanation:
            "Downstream means travelling in the direction the river flows.",

        difficulty: 2,
        correctAnswer: "Towards its mouth",
        estimatedSeconds: 20,

        tags: ["geography", "river-flow"]
    },

    {
        id: "geo-rivers-018",
        skillId: "rivers",
        question: "Which feature is most likely to be found beside a river?",
        stage: "recognise",
        options: [
            "River bank",
            "Volcano",
            "Desert",
            "Glacier"
        ],

        explanation:
            "The land beside a river is called the river bank.",

        difficulty: 2,
        correctAnswer: "River bank",
        estimatedSeconds: 20,

        tags: ["geography", "river-bank"]
    },

    {
        id: "geo-rivers-019",
        skillId: "rivers",
        question: "What is one reason farmers value rivers?",
        stage: "recognise",
        options: [
            "They provide water for crops and animals.",
            "They build fences.",
            "They grow trees.",
            "They make tractors."
        ],

        explanation:
            "Rivers provide an important source of water for farming.",

        difficulty: 2,
        correctAnswer: "They provide water for crops and animals.",
        estimatedSeconds: 20,

        tags: ["geography", "farming", "rivers"]
    },

    {
        id: "geo-rivers-020",
        skillId: "rivers",
        question: "Which sentence best describes a river?",
        stage: "recognise",
        options: [
            "A natural flow of water that begins at a source and ends at a mouth.",
            "A road for cars.",
            "A line drawn only on maps.",
            "A man-made canal."
        ],

        explanation:
            "Rivers are natural watercourses that flow from their source to their mouth.",

        difficulty: 2,
        correctAnswer: "A natural flow of water that begins at a source and ends at a mouth.",
        estimatedSeconds: 20,

        tags: ["geography", "rivers", "physical-geography"]
    }

    ]

};