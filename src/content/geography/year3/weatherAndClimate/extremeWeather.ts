import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const extremeWeather: SkillContent = {

    skillId: "extremeWeather",

    title: "Extreme Weather",

    description:
        "Learn about extreme weather events, their effects and how people prepare for them.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-ew-001",

        question:
            "What is extreme weather?",

        options: [
            "Weather conditions that are unusually severe or dangerous",
            "Normal daily weather",
            "Weather that never changes",
            "Only sunny weather"
        ],

        explanation:
            "Extreme weather is more severe than usual and can cause damage or danger.",

        difficulty: 1,
        correctAnswer: "Weather conditions that are unusually severe or dangerous",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather", "extreme-weather"]
    },

    {
        id: "geo-ew-002",

        question:
            "Which is an example of extreme weather?",

        options: [
            "A hurricane",
            "A normal sunny day",
            "A light breeze",
            "A cloudy morning"
        ],

        explanation:
            "Hurricanes are powerful storms and are examples of extreme weather.",

        difficulty: 1,
        correctAnswer: "A hurricane",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-003",

        question:
            "What is a flood?",

        options: [
            "When water covers land that is usually dry",
            "When a river disappears",
            "When clouds vanish",
            "When the ground freezes"
        ],

        explanation:
            "Flooding happens when there is too much water in an area.",

        difficulty: 1,
        correctAnswer: "When water covers land that is usually dry",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-004",

        question:
            "What can cause flooding?",

        options: [
            "Heavy rainfall or overflowing rivers",
            "A lack of clouds",
            "Cold temperatures only",
            "Strong sunshine"
        ],

        explanation:
            "Too much water from rainfall or rivers can cause floods.",

        difficulty: 1,
        correctAnswer: "Heavy rainfall or overflowing rivers",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "floods"]
    },

    {
        id: "geo-ew-005",

        question:
            "What is a drought?",

        options: [
            "A long period with very little rainfall",
            "A very windy day",
            "A heavy snowstorm",
            "A type of cloud"
        ],

        explanation:
            "Droughts happen when an area has very little rain for a long time.",

        difficulty: 1,
        correctAnswer: "A long period with very little rainfall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-006",

        question:
            "What problems can droughts cause?",

        options: [
            "Water shortages and difficulty growing crops",
            "Too many rivers",
            "More snow",
            "Extra rainfall"
        ],

        explanation:
            "Droughts can affect people, animals and farming.",

        difficulty: 1,
        correctAnswer: "Water shortages and difficulty growing crops",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "drought"]
    },

    {
        id: "geo-ew-007",

        question:
            "What is a hurricane?",

        options: [
            "A powerful tropical storm with strong winds",
            "A small cloud",
            "A mountain storm only",
            "A type of river"
        ],

        explanation:
            "Hurricanes are large storms that form over warm oceans.",

        difficulty: 2,
        correctAnswer: "A powerful tropical storm with strong winds",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "storms"]
    },

    {
        id: "geo-ew-008",

        question:
            "What can strong winds from storms do?",

        options: [
            "Damage buildings and trees",
            "Create mountains",
            "Stop all rainfall",
            "Remove oceans"
        ],

        explanation:
            "Very strong winds can cause damage to people and places.",

        difficulty: 1,
        correctAnswer: "Damage buildings and trees",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "storms"]
    },

    {
        id: "geo-ew-009",

        question:
            "What is a heatwave?",

        options: [
            "A long period of unusually hot weather",
            "A cold winter",
            "A flood",
            "A snowstorm"
        ],

        explanation:
            "Heatwaves are periods of very high temperatures lasting several days.",

        difficulty: 1,
        correctAnswer: "A long period of unusually hot weather",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-010",

        question:
            "Why can heatwaves be dangerous?",

        options: [
            "They can affect health and cause water shortages",
            "They create mountains",
            "They stop the Sun",
            "They make rivers freeze"
        ],

        explanation:
            "Very hot weather can create risks for people and the environment.",

        difficulty: 2,
        correctAnswer: "They can affect health and cause water shortages",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-011",

        question:
            "How can people prepare for floods?",

        options: [
            "Using flood warnings and protection measures",
            "Ignoring weather information",
            "Removing all rivers",
            "Stopping rainfall"
        ],

        explanation:
            "Warnings and preparation can reduce the effects of flooding.",

        difficulty: 2,
        correctAnswer: "Using flood warnings and protection measures",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "floods"]
    },

    {
        id: "geo-ew-012",

        question:
            "Why are weather forecasts important during extreme weather?",

        options: [
            "They help people prepare and stay safe",
            "They stop extreme weather happening",
            "They change the climate",
            "They create storms"
        ],

        explanation:
            "Forecasts help people make decisions before dangerous weather occurs.",

        difficulty: 2,
        correctAnswer: "They help people prepare and stay safe",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-013",

        question:
            "How can extreme weather affect animals?",

        options: [
            "It can damage habitats and reduce available food",
            "It always helps animals",
            "It has no effect",
            "It creates new species instantly"
        ],

        explanation:
            "Extreme conditions can make survival harder for wildlife.",

        difficulty: 2,
        correctAnswer: "It can damage habitats and reduce available food",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-ew-014",

        question:
            "Why can flooding damage homes?",

        options: [
            "Water can enter buildings and damage belongings",
            "Floods remove all buildings",
            "Water becomes electricity",
            "Homes move away"
        ],

        explanation:
            "Floodwater can damage buildings and possessions.",

        difficulty: 1,
        correctAnswer: "Water can enter buildings and damage belongings",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "floods"]
    },

    {
        id: "geo-ew-015",

        question:
            "Why are droughts difficult for farmers?",

        options: [
            "Crops need water to grow",
            "Plants need less water",
            "Droughts create too much rain",
            "Animals do not need water"
        ],

        explanation:
            "Without enough water, crops and animals can struggle.",

        difficulty: 1,
        correctAnswer: "Crops need water to grow",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "drought"]
    },

    {
        id: "geo-ew-016",

        question:
            "What is climate change linked to?",

        options: [
            "Changes in Earth's climate over time",
            "Only daily weather changes",
            "Changing map symbols",
            "Moving rivers"
        ],

        explanation:
            "Climate change refers to long-term changes in climate patterns.",

        difficulty: 2,
        correctAnswer: "Changes in Earth's climate over time",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-ew-017",

        question:
            "Why do scientists study extreme weather?",

        options: [
            "To understand risks and improve preparation",
            "To create storms",
            "To stop all weather",
            "To remove seasons"
        ],

        explanation:
            "Studying extreme weather helps people prepare and respond.",

        difficulty: 2,
        correctAnswer: "To understand risks and improve preparation",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-018",

        question:
            "Which place is more likely to experience hurricanes?",

        options: [
            "Warm tropical coastal areas",
            "The middle of a desert only",
            "A mountain peak only",
            "A frozen lake"
        ],

        explanation:
            "Hurricanes usually form over warm tropical oceans.",

        difficulty: 2,
        correctAnswer: "Warm tropical coastal areas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "storms"]
    },

    {
        id: "geo-ew-019",

        question:
            "What can communities do during extreme weather?",

        options: [
            "Work together and follow safety advice",
            "Ignore warnings",
            "Stop collecting information",
            "Make the weather worse"
        ],

        explanation:
            "Preparation and cooperation help communities stay safer.",

        difficulty: 1,
        correctAnswer: "Work together and follow safety advice",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "weather"]
    },

    {
        id: "geo-ew-020",

        question:
            "Which sentence best describes extreme weather?",

        options: [
            "Extreme weather is unusually severe weather that can affect people and the environment",
            "Extreme weather is normal daily weather",
            "Extreme weather only means sunshine",
            "Extreme weather never changes"
        ],

        explanation:
            "Extreme weather events can have major effects on people and places.",

        difficulty: 2,
        correctAnswer: "Extreme weather is unusually severe weather that can affect people and the environment",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather"]
    }

    ]

};