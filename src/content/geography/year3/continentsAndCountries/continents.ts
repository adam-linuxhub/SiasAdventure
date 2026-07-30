import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const continents: SkillContent = {

    skillId: "continents",

    title: "Continents of the World",

    description:
        "Learn about the seven continents and where they are located on Earth.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-con-001",

        question:
            "What is a continent?",

        options: [
            "A large area of land on Earth",
            "A small village",
            "A type of ocean",
            "A weather event"
        ],

        answer: 0,

        explanation:
            "A continent is one of Earth's large land areas.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-002",

        question:
            "How many continents are there?",

        options: [
            "Seven",
            "Five",
            "Ten",
            "Three"
        ],

        answer: 0,

        explanation:
            "The world is usually divided into seven continents.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-003",

        question:
            "Which continent is the UK part of?",

        options: [
            "Europe",
            "Asia",
            "Africa",
            "South America"
        ],

        answer: 0,

        explanation:
            "The United Kingdom is located in Europe.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents", "uk"]
    },

    {
        id: "geo-con-004",

        question:
            "Which is the largest continent?",

        options: [
            "Asia",
            "Europe",
            "Australia",
            "Antarctica"
        ],

        answer: 0,

        explanation:
            "Asia is the largest continent by land area.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-005",

        question:
            "Which continent is the largest desert found in?",

        options: [
            "Africa",
            "Europe",
            "Australia",
            "North America"
        ],

        answer: 0,

        explanation:
            "The Sahara Desert is located in Africa.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-006",

        question:
            "Which continent contains the Amazon Rainforest?",

        options: [
            "South America",
            "Asia",
            "Europe",
            "Antarctica"
        ],

        answer: 0,

        explanation:
            "The Amazon Rainforest is mainly found in South America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-con-007",

        question:
            "Which continent is covered mostly by ice?",

        options: [
            "Antarctica",
            "Africa",
            "Europe",
            "Australia"
        ],

        answer: 0,

        explanation:
            "Antarctica is a continent covered by a large ice sheet.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-008",

        question:
            "Which continent is also a country?",

        options: [
            "Australia",
            "Africa",
            "Asia",
            "Europe"
        ],

        answer: 0,

        explanation:
            "Australia is both a country and the name of a continent region.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-009",

        question:
            "Which continent is north of Africa?",

        options: [
            "Europe",
            "Antarctica",
            "Australia",
            "South America"
        ],

        answer: 0,

        explanation:
            "Europe is located north of Africa, across the Mediterranean Sea.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-010",

        question:
            "Which continent is east of Europe?",

        options: [
            "Asia",
            "South America",
            "Africa",
            "Antarctica"
        ],

        answer: 0,

        explanation:
            "Asia is connected to and east of Europe.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-011",

        question:
            "Which continent contains the United States?",

        options: [
            "North America",
            "Europe",
            "Africa",
            "Asia"
        ],

        answer: 0,

        explanation:
            "The United States is located in North America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-012",

        question:
            "Which continent contains Brazil?",

        options: [
            "South America",
            "Africa",
            "Europe",
            "Australia"
        ],

        answer: 0,

        explanation:
            "Brazil is a country in South America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-013",

        question:
            "Which continent contains Egypt?",

        options: [
            "Africa",
            "Asia",
            "Europe",
            "South America"
        ],

        answer: 0,

        explanation:
            "Egypt is mainly located in Africa.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-014",

        question:
            "Why do geographers study continents?",

        options: [
            "To understand how places are organised around Earth",
            "To change countries",
            "To stop weather",
            "To create oceans"
        ],

        answer: 0,

        explanation:
            "Continents help us organise and understand the world's geography.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-015",

        question:
            "What is a world map used for?",

        options: [
            "Showing locations of continents and countries",
            "Measuring temperature",
            "Creating mountains",
            "Predicting earthquakes"
        ],

        answer: 0,

        explanation:
            "World maps show where places are located.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-con-016",

        question:
            "Which continent has the most countries?",

        options: [
            "Africa",
            "Antarctica",
            "Australia",
            "Europe"
        ],

        answer: 0,

        explanation:
            "Africa contains more countries than any other continent.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-017",

        question:
            "Why are continents different from each other?",

        options: [
            "They have different climates, landscapes and cultures",
            "They are all identical",
            "They have no features",
            "They are all the same size"
        ],

        answer: 0,

        explanation:
            "Continents vary in their physical and human geography.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-018",

        question:
            "Which continent is south of Europe?",

        options: [
            "Africa",
            "Asia",
            "North America",
            "Antarctica"
        ],

        answer: 0,

        explanation:
            "Africa is located south of Europe.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-019",

        question:
            "Why are maps useful for learning continents?",

        options: [
            "They show where continents are located",
            "They change continent sizes",
            "They create oceans",
            "They remove borders"
        ],

        answer: 0,

        explanation:
            "Maps help us understand the location and size of continents.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-con-020",

        question:
            "Which sentence best describes continents?",

        options: [
            "Continents are large areas of land containing many countries and landscapes",
            "Continents are types of weather",
            "Continents are only oceans",
            "Continents cannot be mapped"
        ],

        answer: 0,

        explanation:
            "Continents are major land areas that contain many different places.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "continents"]
    }

    ]

};