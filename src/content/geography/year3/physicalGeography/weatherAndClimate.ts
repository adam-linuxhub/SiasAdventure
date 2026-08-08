import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const weatherAndClimate: SkillContent = {

    skillId: "weatherAndClimate",

    title: "Weather and Climate",

    description:
        "Learn the difference between weather and climate, the seasons and common weather conditions.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-weather-001",
        skillId: "weatherAndClimate",
        question: "What is weather?",
        stage: "recognise",
        options: [
            "The conditions outside at a particular time",
            "The average weather over many years",
            "A type of mountain",
            "A map symbol"
        ],

        hint: "Think about today's conditions, not many years.",
        explanation:
            "Weather describes what it is like outside right now or over a short period of time.",

        difficulty: 1,
        correctAnswer: "The conditions outside at a particular time",
        estimatedSeconds: 15,

        tags: ["geography", "weather"]
    },

    {
        id: "geo-weather-002",
        skillId: "weatherAndClimate",
        question: "Which of these is an example of weather?",
        stage: "recognise",
        options: [
            "Rain",
            "A river",
            "A mountain",
            "A road"
        ],

        hint: "Choose something you could experience outside today.",
        explanation:
            "Rain is a weather condition.",

        difficulty: 1,
        correctAnswer: "Rain",
        estimatedSeconds: 15,

        tags: ["geography", "weather"]
    },

    {
        id: "geo-weather-003",
        skillId: "weatherAndClimate",
        question: "What is climate?",
        stage: "recognise",
        options: [
            "The usual weather in a place over many years",
            "Today's weather",
            "A strong wind",
            "A map"
        ],

        hint: "Focus on weather patterns over a very long time.",
        explanation:
            "Climate describes the usual weather in a place over a long period of time.",

        difficulty: 1,
        correctAnswer: "The usual weather in a place over many years",
        estimatedSeconds: 15,

        tags: ["geography", "climate"]
    },

    {
        id: "geo-weather-004",
        skillId: "weatherAndClimate",
        question: "How many seasons are there in the UK?",
        stage: "recognise",
        options: [
            "Four",
            "Two",
            "Three",
            "Five"
        ],

        hint: "Count the UK's regular yearly seasons.",
        explanation:
            "The UK has four seasons: spring, summer, autumn and winter.",

        difficulty: 1,
        correctAnswer: "Four",
        estimatedSeconds: 15,

        tags: ["geography", "seasons"]
    },

    {
        id: "geo-weather-005",
        skillId: "weatherAndClimate",
        question: "Which season is usually the warmest?",
        stage: "recognise",
        options: [
            "Summer",
            "Winter",
            "Autumn",
            "Spring"
        ],

        hint: "Think about which season people expect the hottest days.",
        explanation:
            "Summer is usually the warmest season in the UK.",

        difficulty: 1,
        correctAnswer: "Summer",
        estimatedSeconds: 15,

        tags: ["geography", "summer"]
    },

    {
        id: "geo-weather-006",
        skillId: "weatherAndClimate",
        question: "Which season is usually the coldest?",
        stage: "recognise",
        options: [
            "Winter",
            "Summer",
            "Spring",
            "Autumn"
        ],

        hint: "Remember when frost and snow are most common.",
        explanation:
            "Winter is usually the coldest season.",

        difficulty: 1,
        correctAnswer: "Winter",
        estimatedSeconds: 15,

        tags: ["geography", "winter"]
    },

    {
        id: "geo-weather-007",
        skillId: "weatherAndClimate",
        question: "Which instrument measures temperature?",
        stage: "recognise",
        options: [
            "Thermometer",
            "Compass",
            "Ruler",
            "Map"
        ],

        hint: "Choose the tool used to measure how hot or cold it is.",
        explanation:
            "A thermometer measures how hot or cold it is.",

        difficulty: 1,
        correctAnswer: "Thermometer",
        estimatedSeconds: 15,

        tags: ["geography", "temperature"]
    },

    {
        id: "geo-weather-008",
        skillId: "weatherAndClimate",
        question: "Which weather condition might need an umbrella?",
        stage: "recognise",
        options: [
            "Rain",
            "Sunshine",
            "Cloud",
            "Fog"
        ],

        hint: "Think about what keeps you dry outdoors.",
        explanation:
            "Umbrellas help keep us dry when it rains.",

        difficulty: 1,
        correctAnswer: "Rain",
        estimatedSeconds: 20,

        tags: ["geography", "rain"]
    },

    {
        id: "geo-weather-009",
        skillId: "weatherAndClimate",
        question: "Which weather condition might make trees sway?",
        stage: "recognise",
        options: [
            "Wind",
            "Fog",
            "Sunshine",
            "Cloud"
        ],

        hint: "Picture what makes branches move.",
        explanation:
            "Strong winds can make trees move.",

        difficulty: 1,
        correctAnswer: "Wind",
        estimatedSeconds: 20,

        tags: ["geography", "wind"]
    },

    {
        id: "geo-weather-010",
        skillId: "weatherAndClimate",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Weather can change from day to day.",
            "Weather never changes.",
            "Climate changes every hour.",
            "Every country has the same weather."
        ],

        hint: "Find the fact that is always true.",
        explanation:
            "Weather changes frequently, sometimes several times in one day.",

        difficulty: 1,
        correctAnswer: "Weather can change from day to day.",
        estimatedSeconds: 20,

        tags: ["geography", "weather"]
    },

    {
        id: "geo-weather-011",
        skillId: "weatherAndClimate",
        question: "What is the main difference between weather and climate?",
        stage: "recognise",
        options: [
            "Weather is short-term, climate is long-term.",
            "Climate changes every hour.",
            "Weather lasts for years.",
            "They mean exactly the same thing."
        ],

        hint: "Compare a single day with many years.",
        explanation:
            "Weather describes current conditions, while climate describes usual conditions over many years.",

        difficulty: 2,
        correctAnswer: "Weather is short-term, climate is long-term.",
        estimatedSeconds: 20,

        tags: ["geography", "weather", "climate"]
    },

    {
        id: "geo-weather-012",
        skillId: "weatherAndClimate",
        question: "Why do we wear warm coats in winter?",
        stage: "recognise",
        options: [
            "Winter is usually colder.",
            "Winter has longer rivers.",
            "Winter has more mountains.",
            "Winter has fewer roads."
        ],

        hint: "Think about why warm clothes are needed.",
        explanation:
            "Warm clothes help keep us comfortable in cold weather.",

        difficulty: 2,
        correctAnswer: "Winter is usually colder.",
        estimatedSeconds: 20,

        tags: ["geography", "winter"]
    },

    {
        id: "geo-weather-013",
        skillId: "weatherAndClimate",
        question: "Why might people wear hats and use sunscreen in summer?",
        stage: "recognise",
        options: [
            "To protect themselves from strong sunshine",
            "To keep warm",
            "To stop the rain",
            "To help them swim"
        ],

        hint: "Consider what protects you from strong sunshine.",
        explanation:
            "Sun hats and sunscreen help protect people from the Sun's rays.",

        difficulty: 2,
        correctAnswer: "To protect themselves from strong sunshine",
        estimatedSeconds: 20,

        tags: ["geography", "summer"]
    },

    {
        id: "geo-weather-014",
        skillId: "weatherAndClimate",
        question: "Why is a weather forecast useful?",
        stage: "recognise",
        options: [
            "It helps people plan ahead.",
            "It changes the weather.",
            "It measures mountains.",
            "It builds roads."
        ],

        hint: "Think about why people check forecasts before leaving home.",
        explanation:
            "Weather forecasts help people decide what to wear and what activities to plan.",

        difficulty: 2,
        correctAnswer: "It helps people plan ahead.",
        estimatedSeconds: 20,

        tags: ["geography", "forecast"]
    },

    {
        id: "geo-weather-015",
        skillId: "weatherAndClimate",
        question: "Which season often has flowers beginning to bloom?",
        stage: "recognise",
        options: [
            "Spring",
            "Winter",
            "Autumn",
            "Summer"
        ],

        hint: "Picture the season when new growth begins.",
        explanation:
            "Many plants begin growing and flowering during spring.",

        difficulty: 2,
        correctAnswer: "Spring",
        estimatedSeconds: 20,

        tags: ["geography", "spring"]
    },

    {
        id: "geo-weather-016",
        skillId: "weatherAndClimate",
        question: "Which season is often linked with leaves changing colour?",
        stage: "recognise",
        options: [
            "Autumn",
            "Spring",
            "Summer",
            "Winter"
        ],

        hint: "Think about when trees prepare for winter.",
        explanation:
            "In autumn many trees change colour before their leaves fall.",

        difficulty: 2,
        correctAnswer: "Autumn",
        estimatedSeconds: 20,

        tags: ["geography", "autumn"]
    },

    {
        id: "geo-weather-017",
        skillId: "weatherAndClimate",
        question: "Why can weather affect our plans?",
        stage: "recognise",
        options: [
            "Different weather is suitable for different activities.",
            "Weather changes maps.",
            "Weather moves mountains.",
            "Weather changes compass directions."
        ],

        hint: "Imagine planning a picnic in different conditions.",
        explanation:
            "Heavy rain, strong winds or sunshine can affect what we choose to do.",

        difficulty: 2,
        correctAnswer: "Different weather is suitable for different activities.",
        estimatedSeconds: 20,

        tags: ["geography", "weather"]
    },

    {
        id: "geo-weather-018",
        skillId: "weatherAndClimate",
        question: "Which of these is part of a weather forecast?",
        stage: "recognise",
        options: [
            "Expected rain and temperature",
            "Population size",
            "Mountain height",
            "Road names"
        ],

        hint: "Think about the information a forecast usually gives.",
        explanation:
            "Forecasts often include temperature, rain, wind and sunshine.",

        difficulty: 2,
        correctAnswer: "Expected rain and temperature",
        estimatedSeconds: 20,

        tags: ["geography", "forecast"]
    },

    {
        id: "geo-weather-019",
        skillId: "weatherAndClimate",
        question: "Why can two countries have different climates?",
        stage: "recognise",
        options: [
            "They are in different parts of the world.",
            "They use different maps.",
            "They speak different languages.",
            "They have different flags."
        ],

        hint: "Consider how location affects usual weather.",
        explanation:
            "A country's location affects its usual weather over many years.",

        difficulty: 2,
        correctAnswer: "They are in different parts of the world.",
        estimatedSeconds: 20,

        tags: ["geography", "climate"]
    },

    {
        id: "geo-weather-020",
        skillId: "weatherAndClimate",
        question: "Which sentence best describes weather and climate?",
        stage: "recognise",
        options: [
            "Weather is what happens now, while climate is the usual weather over many years.",
            "Weather and climate are exactly the same thing.",
            "Climate changes every day.",
            "Weather lasts for hundreds of years."
        ],

        hint: "Compare short-term conditions with long-term patterns.",
        explanation:
            "Weather describes short-term conditions, while climate describes long-term patterns.",

        difficulty: 2,
        correctAnswer: "Weather is what happens now, while climate is the usual weather over many years.",
        estimatedSeconds: 20,

        tags: ["geography", "weather", "climate", "physical-geography"]
    }

    ]

};


export default weatherAndClimate;

export {

    weatherAndClimate

};
