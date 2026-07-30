import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const weatherBasics: SkillContent = {

    skillId: "weatherBasics",

    title: "Weather Basics",

    description:
        "Learn what weather is, how it changes and the difference between weather and climate.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-wb-001",
        skillId: "weatherBasics",
        question:
            "What is weather?",

        options: [
            "The condition of the atmosphere at a particular time and place",
            "The shape of the land",
            "The type of rocks in an area",
            "The movement of rivers"
        ],

        explanation:
            "Weather describes what the atmosphere is like, including temperature, rain, wind and clouds.",

        difficulty: 1,
        correctAnswer: "The condition of the atmosphere at a particular time and place",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-002",
        skillId: "weatherBasics",
        question:
            "Which of these is part of the weather?",

        options: [
            "Rain",
            "A mountain",
            "A river",
            "A building"
        ],

        explanation:
            "Rain is a type of weather condition.",

        difficulty: 1,
        correctAnswer: "Rain",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-003",
        skillId: "weatherBasics",
        question:
            "What is temperature?",

        options: [
            "How hot or cold something is",
            "How much rain falls",
            "How fast wind blows",
            "How many clouds there are"
        ],

        explanation:
            "Temperature tells us how hot or cold the air is.",

        difficulty: 1,
        correctAnswer: "How hot or cold something is",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-004",
        skillId: "weatherBasics",
        question:
            "What instrument measures temperature?",

        options: [
            "A thermometer",
            "A compass",
            "A ruler",
            "A map"
        ],

        explanation:
            "A thermometer is used to measure temperature.",

        difficulty: 1,
        correctAnswer: "A thermometer",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-005",
        skillId: "weatherBasics",
        question:
            "What is rainfall?",

        options: [
            "The amount of rain that falls",
            "The speed of wind",
            "The amount of sunshine",
            "The height of mountains"
        ],

        explanation:
            "Rainfall measures how much rain falls over a period of time.",

        difficulty: 1,
        correctAnswer: "The amount of rain that falls",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-006",
        skillId: "weatherBasics",
        question:
            "What instrument measures rainfall?",

        options: [
            "A rain gauge",
            "A thermometer",
            "A compass",
            "A telescope"
        ],

        explanation:
            "A rain gauge collects and measures rainfall.",

        difficulty: 1,
        correctAnswer: "A rain gauge",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-007",
        skillId: "weatherBasics",
        question:
            "What is wind?",

        options: [
            "Moving air",
            "Falling water",
            "Frozen rain",
            "A type of cloud"
        ],

        explanation:
            "Wind is air moving from one place to another.",

        difficulty: 1,
        correctAnswer: "Moving air",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-008",
        skillId: "weatherBasics",
        question:
            "What instrument measures wind speed?",

        options: [
            "An anemometer",
            "A thermometer",
            "A rain gauge",
            "A compass"
        ],

        explanation:
            "An anemometer measures how fast the wind is moving.",

        difficulty: 2,
        correctAnswer: "An anemometer",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-009",
        skillId: "weatherBasics",
        question:
            "What are clouds made from?",

        options: [
            "Tiny water droplets or ice crystals",
            "Smoke",
            "Dust only",
            "Solid rock"
        ],

        explanation:
            "Clouds form when water vapour cools and condenses.",

        difficulty: 2,
        correctAnswer: "Tiny water droplets or ice crystals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-010",
        skillId: "weatherBasics",
        question:
            "Why does weather change?",

        options: [
            "The atmosphere is constantly changing",
            "The Earth stops moving",
            "Mountains control everything",
            "Rivers create all weather"
        ],

        explanation:
            "Changes in the atmosphere cause different weather conditions.",

        difficulty: 2,
        correctAnswer: "The atmosphere is constantly changing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-011",
        skillId: "weatherBasics",
        question:
            "What is climate?",

        options: [
            "The usual weather conditions of a place over a long time",
            "The weather today only",
            "A type of cloud",
            "A river system"
        ],

        explanation:
            "Climate describes typical weather patterns over many years.",

        difficulty: 2,
        correctAnswer: "The usual weather conditions of a place over a long time",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-wb-012",
        skillId: "weatherBasics",
        question:
            "What is the difference between weather and climate?",

        options: [
            "Weather changes quickly, while climate describes long-term patterns",
            "They are exactly the same",
            "Climate changes every hour",
            "Weather never changes"
        ],

        explanation:
            "Weather is short-term, while climate describes patterns over a longer period.",

        difficulty: 2,
        correctAnswer: "Weather changes quickly, while climate describes long-term patterns",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather", "climate"]
    },

    {
        id: "geo-wb-013",
        skillId: "weatherBasics",
        question:
            "What type of weather includes sunshine?",

        options: [
            "Sunny weather",
            "Stormy weather",
            "Snowy weather",
            "Foggy weather"
        ],

        explanation:
            "Sunny weather happens when there are fewer clouds and more sunlight.",

        difficulty: 1,
        correctAnswer: "Sunny weather",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-014",
        skillId: "weatherBasics",
        question:
            "What is a storm?",

        options: [
            "A period of very strong or extreme weather",
            "A type of mountain",
            "A quiet sunny day",
            "A river feature"
        ],

        explanation:
            "Storms can include strong winds, heavy rain or lightning.",

        difficulty: 1,
        correctAnswer: "A period of very strong or extreme weather",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-015",
        skillId: "weatherBasics",
        question:
            "Why do people study weather?",

        options: [
            "To help plan activities and prepare for conditions",
            "To change the weather",
            "To stop seasons",
            "To create mountains"
        ],

        explanation:
            "Weather information helps people make decisions.",

        difficulty: 1,
        correctAnswer: "To help plan activities and prepare for conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-016",
        skillId: "weatherBasics",
        question:
            "What is a weather forecast?",

        options: [
            "A prediction of future weather conditions",
            "A map of mountains",
            "A list of rivers",
            "A record of history"
        ],

        explanation:
            "Forecasts predict what the weather may be like.",

        difficulty: 1,
        correctAnswer: "A prediction of future weather conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-017",
        skillId: "weatherBasics",
        question:
            "What causes seasons?",

        options: [
            "The Earth's tilt as it moves around the Sun",
            "Changes in rivers",
            "Moving mountains",
            "Clouds only"
        ],

        explanation:
            "The Earth's tilt affects how much sunlight different areas receive.",

        difficulty: 2,
        correctAnswer: "The Earth's tilt as it moves around the Sun",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-018",
        skillId: "weatherBasics",
        question:
            "Why can weather be different in two places on the same day?",

        options: [
            "Places have different locations and conditions",
            "The weather is always identical",
            "Maps create weather",
            "Rivers control all weather"
        ],

        explanation:
            "Location, altitude and other factors affect weather.",

        difficulty: 2,
        correctAnswer: "Places have different locations and conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-019",
        skillId: "weatherBasics",
        question:
            "Which of these is a weather measurement?",

        options: [
            "Temperature",
            "Population",
            "Distance",
            "Height of buildings"
        ],

        explanation:
            "Temperature is one way scientists measure weather.",

        difficulty: 1,
        correctAnswer: "Temperature",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-wb-020",
        skillId: "weatherBasics",
        question:
            "Which sentence best describes weather?",

        options: [
            "Weather describes the conditions of the atmosphere at a certain time and place",
            "Weather never changes",
            "Weather only means rain",
            "Weather describes mountains only"
        ],

        explanation:
            "Weather includes many atmospheric conditions such as temperature, wind and rainfall.",

        difficulty: 2,
        correctAnswer: "Weather describes the conditions of the atmosphere at a certain time and place",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather"]
    }

    ]

};