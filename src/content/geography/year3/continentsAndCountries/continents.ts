import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const continents: SkillContent = {

    skillId: "continents",

    title: "Continents of the World",

    description:
        "Learn about the seven continents and where they are located on Earth.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-con-001",
        skillId: "continents",
        question:
            "What is a continent?",
        stage: "recognise",
        options: [
            "A large area of land on Earth",
            "A small village",
            "A type of ocean",
            "A weather event"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "A continent is one of Earth's large land areas.",

        difficulty: 1,
        correctAnswer: "A large area of land on Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-002",
        skillId: "continents",
        question:
            "How many continents are there?",
        stage: "recognise",
        options: [
            "Seven",
            "Five",
            "Ten",
            "Three"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "The world is usually divided into seven continents.",

        difficulty: 1,
        correctAnswer: "Seven",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-003",
        skillId: "continents",
        question:
            "Which continent is the UK part of?",
        stage: "recognise",
        options: [
            "Europe",
            "Asia",
            "Africa",
            "South America"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "The United Kingdom is located in Europe.",

        difficulty: 1,
        correctAnswer: "Europe",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents", "uk"]
    },

    {
        id: "geo-con-004",
        skillId: "continents",
        question:
            "Which is the largest continent?",
        stage: "recognise",
        options: [
            "Asia",
            "Europe",
            "Australia",
            "Antarctica"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Asia is the largest continent by land area.",

        difficulty: 1,
        correctAnswer: "Asia",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-005",
        skillId: "continents",
        question:
            "Which continent is the largest desert found in?",
        stage: "recognise",
        options: [
            "Africa",
            "Europe",
            "Australia",
            "North America"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "The Sahara Desert is located in Africa.",

        difficulty: 2,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-006",
        skillId: "continents",
        question:
            "Which continent contains the Amazon Rainforest?",
        stage: "recognise",
        options: [
            "South America",
            "Asia",
            "Europe",
            "Antarctica"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "The Amazon Rainforest is mainly found in South America.",

        difficulty: 1,
        correctAnswer: "South America",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rainforest"]
    },

    {
        id: "geo-con-007",
        skillId: "continents",
        question:
            "Which continent is covered mostly by ice?",
        stage: "recognise",
        options: [
            "Antarctica",
            "Africa",
            "Europe",
            "Australia"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Antarctica is a continent covered by a large ice sheet.",

        difficulty: 1,
        correctAnswer: "Antarctica",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-008",
        skillId: "continents",
        question:
            "Which continent is also a country?",
        stage: "recognise",
        options: [
            "Australia",
            "Africa",
            "Asia",
            "Europe"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Australia is both a country and the name of a continent region.",

        difficulty: 2,
        correctAnswer: "Australia",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-009",
        skillId: "continents",
        question:
            "Which continent is north of Africa?",
        stage: "recognise",
        options: [
            "Europe",
            "Antarctica",
            "Australia",
            "South America"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Europe is located north of Africa, across the Mediterranean Sea.",

        difficulty: 2,
        correctAnswer: "Europe",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-010",
        skillId: "continents",
        question:
            "Which continent is east of Europe?",
        stage: "recognise",
        options: [
            "Asia",
            "South America",
            "Africa",
            "Antarctica"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Asia is connected to and east of Europe.",

        difficulty: 2,
        correctAnswer: "Asia",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-011",
        skillId: "continents",
        question:
            "Which continent contains the United States?",
        stage: "recognise",
        options: [
            "North America",
            "Europe",
            "Africa",
            "Asia"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "The United States is located in North America.",

        difficulty: 1,
        correctAnswer: "North America",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-012",
        skillId: "continents",
        question:
            "Which continent contains Brazil?",
        stage: "recognise",
        options: [
            "South America",
            "Africa",
            "Europe",
            "Australia"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Brazil is a country in South America.",

        difficulty: 1,
        correctAnswer: "South America",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-013",
        skillId: "continents",
        question:
            "Which continent contains Egypt?",
        stage: "recognise",
        options: [
            "Africa",
            "Asia",
            "Europe",
            "South America"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Egypt is mainly located in Africa.",

        difficulty: 1,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-con-014",
        skillId: "continents",
        question:
            "Why do geographers study continents?",
        stage: "recognise",
        options: [
            "To understand how places are organised around Earth",
            "To change countries",
            "To stop weather",
            "To create oceans"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Continents help us organise and understand the world's geography.",

        difficulty: 2,
        correctAnswer: "To understand how places are organised around Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-015",
        skillId: "continents",
        question:
            "What is a world map used for?",
        stage: "recognise",
        options: [
            "Showing locations of continents and countries",
            "Measuring temperature",
            "Creating mountains",
            "Predicting earthquakes"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "World maps show where places are located.",

        difficulty: 1,
        correctAnswer: "Showing locations of continents and countries",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-con-016",
        skillId: "continents",
        question:
            "Which continent has the most countries?",
        stage: "recognise",
        options: [
            "Africa",
            "Antarctica",
            "Australia",
            "Europe"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Africa contains more countries than any other continent.",

        difficulty: 2,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-017",
        skillId: "continents",
        question:
            "Why are continents different from each other?",
        stage: "recognise",
        options: [
            "They have different climates, landscapes and cultures",
            "They are all identical",
            "They have no features",
            "They are all the same size"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Continents vary in their physical and human geography.",

        difficulty: 2,
        correctAnswer: "They have different climates, landscapes and cultures",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-018",
        skillId: "continents",
        question:
            "Which continent is south of Europe?",
        stage: "recognise",
        options: [
            "Africa",
            "Asia",
            "North America",
            "Antarctica"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Africa is located south of Europe.",

        difficulty: 2,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "continents"]
    },

    {
        id: "geo-con-019",
        skillId: "continents",
        question:
            "Why are maps useful for learning continents?",
        stage: "recognise",
        options: [
            "They show where continents are located",
            "They change continent sizes",
            "They create oceans",
            "They remove borders"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Maps help us understand the location and size of continents.",

        difficulty: 1,
        correctAnswer: "They show where continents are located",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-con-020",
        skillId: "continents",
        question:
            "Which sentence best describes continents?",
        stage: "recognise",
        options: [
            "Continents are large areas of land containing many countries and landscapes",
            "Continents are types of weather",
            "Continents are only oceans",
            "Continents cannot be mapped"
        ],

        hint:
            "Think about the key geography idea in the question and eliminate impossible answers.",
        explanation:
            "Continents are major land areas that contain many different places.",

        difficulty: 2,
        correctAnswer: "Continents are large areas of land containing many countries and landscapes",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "continents"]
    }

    ]

};


export default continents;

export {

    continents

};