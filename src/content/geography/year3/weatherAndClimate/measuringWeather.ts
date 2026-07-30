import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const measuringWeather: SkillContent = {

    skillId: "measuringWeather",

    title: "Measuring Weather",

    description:
        "Learn how weather is measured using different instruments and how weather data is recorded.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mw-001",

        question:
            "Why do scientists measure the weather?",

        options: [
            "To understand weather patterns and make forecasts",
            "To change the weather",
            "To stop seasons happening",
            "To create storms"
        ],

        answer: 0,

        explanation:
            "Measuring weather helps scientists understand conditions and predict future weather.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-002",

        question:
            "Which instrument measures temperature?",

        options: [
            "Thermometer",
            "Rain gauge",
            "Anemometer",
            "Wind vane"
        ],

        answer: 0,

        explanation:
            "A thermometer measures how hot or cold the air is.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-003",

        question:
            "Which instrument measures rainfall?",

        options: [
            "Rain gauge",
            "Thermometer",
            "Compass",
            "Barometer"
        ],

        answer: 0,

        explanation:
            "A rain gauge collects and measures the amount of rainfall.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-004",

        question:
            "Which instrument measures wind speed?",

        options: [
            "Anemometer",
            "Rain gauge",
            "Thermometer",
            "Map key"
        ],

        answer: 0,

        explanation:
            "An anemometer measures how fast the wind is moving.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-005",

        question:
            "What does a wind vane show?",

        options: [
            "The direction the wind is blowing from",
            "The temperature",
            "The amount of rainfall",
            "The height of mountains"
        ],

        answer: 0,

        explanation:
            "A wind vane shows wind direction.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-006",

        question:
            "Which weather measurement tells us how hot or cold the air is?",

        options: [
            "Temperature",
            "Rainfall",
            "Wind direction",
            "Cloud cover"
        ],

        answer: 0,

        explanation:
            "Temperature measures how hot or cold the air is.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-007",

        question:
            "What does a rain gauge collect?",

        options: [
            "Rainwater",
            "Wind",
            "Sunlight",
            "Clouds"
        ],

        answer: 0,

        explanation:
            "A rain gauge collects rain so the amount can be measured.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-008",

        question:
            "What unit might be used to measure rainfall?",

        options: [
            "Millimetres",
            "Kilometres",
            "Degrees",
            "Litres per person"
        ],

        answer: 0,

        explanation:
            "Rainfall is commonly measured in millimetres.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-009",

        question:
            "What unit is used to measure temperature?",

        options: [
            "Degrees Celsius",
            "Metres",
            "Kilograms",
            "Seconds"
        ],

        answer: 0,

        explanation:
            "Temperature is often measured in degrees Celsius in the UK.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-010",

        question:
            "What is cloud cover?",

        options: [
            "How much of the sky is covered by clouds",
            "The height of clouds",
            "The speed of clouds",
            "The colour of the sky only"
        ],

        answer: 0,

        explanation:
            "Cloud cover describes how much of the sky has clouds.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-011",

        question:
            "Why do weather stations collect data?",

        options: [
            "To record and study weather conditions",
            "To control the weather",
            "To create clouds",
            "To stop rainfall"
        ],

        answer: 0,

        explanation:
            "Weather stations collect information about the atmosphere.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-012",

        question:
            "What is a weather chart used for?",

        options: [
            "Showing and comparing weather information",
            "Showing only roads",
            "Building mountains",
            "Measuring rivers"
        ],

        answer: 0,

        explanation:
            "Charts help people understand weather data.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-013",

        question:
            "Why do scientists record weather over time?",

        options: [
            "To find patterns and changes",
            "To stop weather changing",
            "To remove clouds",
            "To create seasons"
        ],

        answer: 0,

        explanation:
            "Long-term records help scientists understand weather patterns.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-014",

        question:
            "What is a weather diary?",

        options: [
            "A record of daily weather observations",
            "A book of maps only",
            "A list of mountains",
            "A type of instrument"
        ],

        answer: 0,

        explanation:
            "A weather diary records observations such as temperature and rainfall.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-015",

        question:
            "Which information could be recorded in a weather diary?",

        options: [
            "Temperature, rainfall and wind",
            "House prices",
            "Population numbers",
            "Road distances"
        ],

        answer: 0,

        explanation:
            "Weather diaries record weather conditions.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-016",

        question:
            "What does a forecast use weather measurements for?",

        options: [
            "Predicting future weather",
            "Changing the climate",
            "Moving rivers",
            "Creating mountains"
        ],

        answer: 0,

        explanation:
            "Weather forecasts use data to predict likely conditions.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-017",

        question:
            "Why are different instruments needed to measure weather?",

        options: [
            "Different parts of weather need different measurements",
            "One instrument cannot measure everything",
            "Weather instruments are decorative",
            "They are used for maps"
        ],

        answer: 0,

        explanation:
            "Each instrument measures a different weather feature.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-018",

        question:
            "Which instrument would you use to measure wind direction?",

        options: [
            "Wind vane",
            "Rain gauge",
            "Thermometer",
            "Anemometer"
        ],

        answer: 0,

        explanation:
            "A wind vane shows the direction the wind comes from.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-019",

        question:
            "Why is accurate weather data important?",

        options: [
            "It helps people prepare and make decisions",
            "It stops all bad weather",
            "It changes seasons",
            "It controls nature"
        ],

        answer: 0,

        explanation:
            "Accurate weather information helps people plan safely.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-mw-020",

        question:
            "Which sentence best describes measuring weather?",

        options: [
            "Scientists use instruments to record weather conditions",
            "Weather cannot be measured",
            "Only rain can be measured",
            "Weather instruments change the atmosphere"
        ],

        answer: 0,

        explanation:
            "Weather instruments help us collect information about the atmosphere.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather"]
    }

    ]

};