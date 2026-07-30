import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

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

        answer: 0,

        explanation:
            "Extreme weather is more severe than usual and can cause damage or danger.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Hurricanes are powerful storms and are examples of extreme weather.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Flooding happens when there is too much water in an area.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Too much water from rainfall or rivers can cause floods.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Droughts happen when an area has very little rain for a long time.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Droughts can affect people, animals and farming.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Hurricanes are large storms that form over warm oceans.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Very strong winds can cause damage to people and places.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Heatwaves are periods of very high temperatures lasting several days.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Very hot weather can create risks for people and the environment.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Warnings and preparation can reduce the effects of flooding.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Forecasts help people make decisions before dangerous weather occurs.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Extreme conditions can make survival harder for wildlife.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Floodwater can damage buildings and possessions.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Without enough water, crops and animals can struggle.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Climate change refers to long-term changes in climate patterns.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Studying extreme weather helps people prepare and respond.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Hurricanes usually form over warm tropical oceans.",

        difficulty: 2,

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

        answer: 0,

        explanation:
            "Preparation and cooperation help communities stay safer.",

        difficulty: 1,

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

        answer: 0,

        explanation:
            "Extreme weather events can have major effects on people and places.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "weather"]
    }

    ]

};