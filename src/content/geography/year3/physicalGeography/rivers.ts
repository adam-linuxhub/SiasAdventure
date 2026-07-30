import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const rivers: SkillContent = {

    skillId: "rivers",

    title: "Rivers",

    description:
        "Learn about rivers, where they begin, where they end and why they are important.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-rivers-001",

        question: "What is a river?",

        options: [
            "A large natural flow of water",
            "A mountain",
            "A road",
            "A forest"
        ],

        answer: 0,

        explanation:
            "A river is a natural flow of water that moves across the land.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-002",

        question: "Where does a river usually begin?",

        options: [
            "At its source",
            "At the sea",
            "In a city",
            "At a bridge"
        ],

        answer: 0,

        explanation:
            "The beginning of a river is called its source.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "river-source"]
    },

    {
        id: "geo-rivers-003",

        question: "Where does a river usually end?",

        options: [
            "At its mouth",
            "At its source",
            "On a mountain",
            "In a forest"
        ],

        answer: 0,

        explanation:
            "The mouth is where a river flows into the sea, a lake or another river.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-004",

        question: "What does water in a river do?",

        options: [
            "Flows downhill",
            "Always flows uphill",
            "Stays still forever",
            "Flows into the sky"
        ],

        answer: 0,

        explanation:
            "Rivers usually flow downhill because of gravity.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "water"]
    },

    {
        id: "geo-rivers-005",

        question: "Which of these is a natural feature?",

        options: [
            "River",
            "Motorway",
            "Railway",
            "Car park"
        ],

        answer: 0,

        explanation:
            "A river is a natural feature of the Earth's surface.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "physical-geography"]
    },

    {
        id: "geo-rivers-006",

        question: "What is the beginning of a river called?",

        options: [
            "Source",
            "Mouth",
            "Bridge",
            "Bank"
        ],

        answer: 0,

        explanation:
            "A river starts at its source.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "river-source"]
    },

    {
        id: "geo-rivers-007",

        question: "What is the end of a river called?",

        options: [
            "Mouth",
            "Source",
            "Hill",
            "Spring"
        ],

        answer: 0,

        explanation:
            "The mouth is where a river finishes its journey.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-008",

        question: "Which colour is rivers usually shown in on maps?",

        options: [
            "Blue",
            "Red",
            "Yellow",
            "Black"
        ],

        answer: 0,

        explanation:
            "Water features such as rivers are usually coloured blue on maps.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-rivers-009",

        question: "Which place is a river most likely to flow into?",

        options: [
            "The sea",
            "A school",
            "A road",
            "A playground"
        ],

        answer: 0,

        explanation:
            "Many rivers flow into the sea at their mouth.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-010",

        question: "Which statement is true?",

        options: [
            "Rivers are natural features.",
            "Rivers always flow uphill.",
            "Every river is the same length.",
            "People build all rivers."
        ],

        answer: 0,

        explanation:
            "Rivers are naturally formed features that flow across the land.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-011",

        question: "Why do many towns and cities grow near rivers?",

        options: [
            "Rivers provide water and transport.",
            "Rivers stop all rain.",
            "Rivers make roads unnecessary.",
            "Rivers grow buildings."
        ],

        answer: 0,

        explanation:
            "People have settled near rivers for fresh water, transport and farming.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "settlements", "rivers"]
    },

    {
        id: "geo-rivers-012",

        question: "Why does a river flow downhill?",

        options: [
            "Gravity pulls the water downhill.",
            "The wind pushes it.",
            "Fish move it.",
            "Trees pull it."
        ],

        answer: 0,

        explanation:
            "Gravity causes water to flow from higher land to lower land.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "water"]
    },

    {
        id: "geo-rivers-013",

        question: "Why are rivers important for wildlife?",

        options: [
            "Many plants and animals live in and around them.",
            "They stop animals moving.",
            "Only fish can use them.",
            "Nothing lives near rivers."
        ],

        answer: 0,

        explanation:
            "Rivers provide habitats for many different living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "wildlife"]
    },

    {
        id: "geo-rivers-014",

        question: "What happens at the mouth of a river?",

        options: [
            "The river joins the sea, a lake or another river.",
            "The river begins.",
            "The river freezes forever.",
            "The river disappears underground."
        ],

        answer: 0,

        explanation:
            "The mouth is where a river ends by flowing into another body of water.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "river-mouth"]
    },

    {
        id: "geo-rivers-015",

        question: "Why are rivers shown on maps?",

        options: [
            "They are important natural features.",
            "They change every hour.",
            "They replace roads.",
            "They only exist in winter."
        ],

        answer: 0,

        explanation:
            "Rivers help people understand the landscape and navigate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-rivers-016",

        question: "Which activity is most likely to happen on a river?",

        options: [
            "Boating",
            "Flying aeroplanes",
            "Playing football",
            "Driving trains"
        ],

        answer: 0,

        explanation:
            "Many rivers are used for boating and other water activities.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-rivers-017",

        question: "If you follow a river downstream, where are you travelling?",

        options: [
            "Towards its mouth",
            "Towards its source",
            "Up a mountain",
            "Into a cave"
        ],

        answer: 0,

        explanation:
            "Downstream means travelling in the direction the river flows.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "river-flow"]
    },

    {
        id: "geo-rivers-018",

        question: "Which feature is most likely to be found beside a river?",

        options: [
            "River bank",
            "Volcano",
            "Desert",
            "Glacier"
        ],

        answer: 0,

        explanation:
            "The land beside a river is called the river bank.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "river-bank"]
    },

    {
        id: "geo-rivers-019",

        question: "What is one reason farmers value rivers?",

        options: [
            "They provide water for crops and animals.",
            "They build fences.",
            "They grow trees.",
            "They make tractors."
        ],

        answer: 0,

        explanation:
            "Rivers provide an important source of water for farming.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "farming", "rivers"]
    },

    {
        id: "geo-rivers-020",

        question: "Which sentence best describes a river?",

        options: [
            "A natural flow of water that begins at a source and ends at a mouth.",
            "A road for cars.",
            "A line drawn only on maps.",
            "A man-made canal."
        ],

        answer: 0,

        explanation:
            "Rivers are natural watercourses that flow from their source to their mouth.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "rivers", "physical-geography"]
    }

    ]

};