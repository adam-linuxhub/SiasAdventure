import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const settlements: SkillContent = {

    skillId: "settlements",

    title: "Settlements",

    description:
        "Learn about villages, towns and cities, and why people choose places to live.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-settle-001",

        question: "What is a settlement?",

        options: [
            "A place where people live",
            "A type of weather",
            "A large river",
            "A mountain"
        ],

        answer: 0,

        explanation:
            "A settlement is any place where people live, such as a village, town or city.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-002",

        question: "Which is usually the smallest type of settlement?",

        options: [
            "Village",
            "Town",
            "City",
            "Capital"
        ],

        answer: 0,

        explanation:
            "Villages are usually smaller than towns and cities.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-003",

        question: "Which settlement is usually larger than a village but smaller than a city?",

        options: [
            "Town",
            "Village",
            "Hamlet",
            "Country"
        ],

        answer: 0,

        explanation:
            "A town is usually larger than a village but smaller than a city.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "towns"]
    },

    {
        id: "geo-settle-004",

        question: "Which type of settlement is usually the largest?",

        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        answer: 0,

        explanation:
            "Cities usually have the largest populations and the most buildings.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "cities"]
    },

    {
        id: "geo-settle-005",

        question: "People live in settlements because they provide...",

        options: [
            "Homes",
            "Volcanoes",
            "Glaciers",
            "Jungles"
        ],

        answer: 0,

        explanation:
            "Settlements are places where people build homes and communities.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "homes"]
    },

    {
        id: "geo-settle-006",

        question: "Which place is most likely to have the fewest people?",

        options: [
            "Village",
            "City",
            "Large town",
            "Capital city"
        ],

        answer: 0,

        explanation:
            "Villages usually have smaller populations than towns and cities.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-007",

        question: "Which settlement usually has the most shops?",

        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        answer: 0,

        explanation:
            "Cities usually have many shops because more people live there.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-008",

        question: "What is a population?",

        options: [
            "The number of people living in a place",
            "A type of building",
            "A road",
            "A map symbol"
        ],

        answer: 0,

        explanation:
            "Population means the number of people living in a place.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-009",

        question: "Which place is most likely to have a large hospital?",

        options: [
            "City",
            "Village",
            "Small farm",
            "Woodland"
        ],

        answer: 0,

        explanation:
            "Large hospitals are usually found in cities where more people live.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-010",

        question: "Which statement is true?",

        options: [
            "People live in villages, towns and cities.",
            "People only live in cities.",
            "Villages are always larger than cities.",
            "Cities never have schools."
        ],

        answer: 0,

        explanation:
            "Settlements come in different sizes, and people live in all of them.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-011",

        question: "Why were many settlements built near rivers?",

        options: [
            "Rivers provided fresh water.",
            "Rivers made computers.",
            "Rivers built houses.",
            "Rivers created roads."
        ],

        answer: 0,

        explanation:
            "People needed fresh water for drinking, farming and washing.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-settle-012",

        question: "Why do people build settlements near roads?",

        options: [
            "It makes travelling and transporting goods easier.",
            "Roads provide electricity.",
            "Roads grow crops.",
            "Roads stop the weather."
        ],

        answer: 0,

        explanation:
            "Roads help people travel to work, school and shops.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-013",

        question: "Why do cities usually have more schools than villages?",

        options: [
            "More people live there.",
            "Cities are warmer.",
            "Cities have more rivers.",
            "Villages are underground."
        ],

        answer: 0,

        explanation:
            "Larger populations need more schools and other services.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-014",

        question: "Which settlement is most likely to have the busiest roads?",

        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        answer: 0,

        explanation:
            "Cities have more people and vehicles using the roads.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-015",

        question: "Why do settlements often grow larger over time?",

        options: [
            "More people move there.",
            "The buildings become taller every day.",
            "Mountains push them bigger.",
            "Roads disappear."
        ],

        answer: 0,

        explanation:
            "As more people move into an area, new homes and services are built.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-016",

        question: "Which place would probably have the most public transport?",

        options: [
            "City",
            "Village",
            "Small farm",
            "Forest"
        ],

        answer: 0,

        explanation:
            "Cities usually have buses, trains and other transport because many people need them.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-017",

        question: "Why do settlements need shops?",

        options: [
            "So people can buy the things they need.",
            "To make rivers flow.",
            "To grow trees.",
            "To stop traffic."
        ],

        answer: 0,

        explanation:
            "Shops provide food, clothes and other everyday items.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-018",

        question: "Which settlement is most likely to have the greatest population?",

        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        answer: 0,

        explanation:
            "Cities usually have the largest populations.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-019",

        question: "Why do people choose to live in settlements?",

        options: [
            "They provide homes, jobs and services.",
            "They always have beaches.",
            "They never have roads.",
            "They are always in mountains."
        ],

        answer: 0,

        explanation:
            "Settlements offer homes and important services such as schools and shops.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-020",

        question: "Which sentence best describes a settlement?",

        options: [
            "A place where people live and work, such as a village, town or city.",
            "A place where only animals live.",
            "A type of weather.",
            "A mountain range."
        ],

        answer: 0,

        explanation:
            "Settlements include all places where people have built communities.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "settlements", "human-geography"]
    }

    ]

};