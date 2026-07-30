import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const settlements: SkillContent = {

    skillId: "settlements",

    title: "Settlements",

    description:
        "Learn about villages, towns and cities, and why people choose places to live.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-settle-001",
        skillId: "settlements",
        question: "What is a settlement?",
        stage: "recognise",
        options: [
            "A place where people live",
            "A type of weather",
            "A large river",
            "A mountain"
        ],

        explanation:
            "A settlement is any place where people live, such as a village, town or city.",

        difficulty: 1,
        correctAnswer: "A place where people live",
        estimatedSeconds: 15,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-002",
        skillId: "settlements",
        question: "Which is usually the smallest type of settlement?",
        stage: "recognise",
        options: [
            "Village",
            "Town",
            "City",
            "Capital"
        ],

        explanation:
            "Villages are usually smaller than towns and cities.",

        difficulty: 1,
        correctAnswer: "Village",
        estimatedSeconds: 15,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-003",
        skillId: "settlements",
        question: "Which settlement is usually larger than a village but smaller than a city?",
        stage: "recognise",
        options: [
            "Town",
            "Village",
            "Hamlet",
            "Country"
        ],

        explanation:
            "A town is usually larger than a village but smaller than a city.",

        difficulty: 1,
        correctAnswer: "Town",
        estimatedSeconds: 15,

        tags: ["geography", "towns"]
    },

    {
        id: "geo-settle-004",
        skillId: "settlements",
        question: "Which type of settlement is usually the largest?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        explanation:
            "Cities usually have the largest populations and the most buildings.",

        difficulty: 1,
        correctAnswer: "City",
        estimatedSeconds: 15,

        tags: ["geography", "cities"]
    },

    {
        id: "geo-settle-005",
        skillId: "settlements",
        question: "People live in settlements because they provide...",
        stage: "recognise",
        options: [
            "Homes",
            "Volcanoes",
            "Glaciers",
            "Jungles"
        ],

        explanation:
            "Settlements are places where people build homes and communities.",

        difficulty: 1,
        correctAnswer: "Homes",
        estimatedSeconds: 15,

        tags: ["geography", "homes"]
    },

    {
        id: "geo-settle-006",
        skillId: "settlements",
        question: "Which place is most likely to have the fewest people?",
        stage: "recognise",
        options: [
            "Village",
            "City",
            "Large town",
            "Capital city"
        ],

        explanation:
            "Villages usually have smaller populations than towns and cities.",

        difficulty: 1,
        correctAnswer: "Village",
        estimatedSeconds: 15,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-007",
        skillId: "settlements",
        question: "Which settlement usually has the most shops?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        explanation:
            "Cities usually have many shops because more people live there.",

        difficulty: 1,
        correctAnswer: "City",
        estimatedSeconds: 15,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-008",
        skillId: "settlements",
        question: "What is a population?",
        stage: "recognise",
        options: [
            "The number of people living in a place",
            "A type of building",
            "A road",
            "A map symbol"
        ],

        explanation:
            "Population means the number of people living in a place.",

        difficulty: 1,
        correctAnswer: "The number of people living in a place",
        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-009",
        skillId: "settlements",
        question: "Which place is most likely to have a large hospital?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Small farm",
            "Woodland"
        ],

        explanation:
            "Large hospitals are usually found in cities where more people live.",

        difficulty: 1,
        correctAnswer: "City",
        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-010",
        skillId: "settlements",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "People live in villages, towns and cities.",
            "People only live in cities.",
            "Villages are always larger than cities.",
            "Cities never have schools."
        ],

        explanation:
            "Settlements come in different sizes, and people live in all of them.",

        difficulty: 1,
        correctAnswer: "People live in villages, towns and cities.",
        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-011",
        skillId: "settlements",
        question: "Why were many settlements built near rivers?",
        stage: "recognise",
        options: [
            "Rivers provided fresh water.",
            "Rivers made computers.",
            "Rivers built houses.",
            "Rivers created roads."
        ],

        explanation:
            "People needed fresh water for drinking, farming and washing.",

        difficulty: 2,
        correctAnswer: "Rivers provided fresh water.",
        estimatedSeconds: 20,

        tags: ["geography", "rivers"]
    },

    {
        id: "geo-settle-012",
        skillId: "settlements",
        question: "Why do people build settlements near roads?",
        stage: "recognise",
        options: [
            "It makes travelling and transporting goods easier.",
            "Roads provide electricity.",
            "Roads grow crops.",
            "Roads stop the weather."
        ],

        explanation:
            "Roads help people travel to work, school and shops.",

        difficulty: 2,
        correctAnswer: "It makes travelling and transporting goods easier.",
        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-013",
        skillId: "settlements",
        question: "Why do cities usually have more schools than villages?",
        stage: "recognise",
        options: [
            "More people live there.",
            "Cities are warmer.",
            "Cities have more rivers.",
            "Villages are underground."
        ],

        explanation:
            "Larger populations need more schools and other services.",

        difficulty: 2,
        correctAnswer: "More people live there.",
        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-014",
        skillId: "settlements",
        question: "Which settlement is most likely to have the busiest roads?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        explanation:
            "Cities have more people and vehicles using the roads.",

        difficulty: 2,
        correctAnswer: "City",
        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-015",
        skillId: "settlements",
        question: "Why do settlements often grow larger over time?",
        stage: "recognise",
        options: [
            "More people move there.",
            "The buildings become taller every day.",
            "Mountains push them bigger.",
            "Roads disappear."
        ],

        explanation:
            "As more people move into an area, new homes and services are built.",

        difficulty: 2,
        correctAnswer: "More people move there.",
        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-016",
        skillId: "settlements",
        question: "Which place would probably have the most public transport?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Small farm",
            "Forest"
        ],

        explanation:
            "Cities usually have buses, trains and other transport because many people need them.",

        difficulty: 2,
        correctAnswer: "City",
        estimatedSeconds: 20,

        tags: ["geography", "transport"]
    },

    {
        id: "geo-settle-017",
        skillId: "settlements",
        question: "Why do settlements need shops?",
        stage: "recognise",
        options: [
            "So people can buy the things they need.",
            "To make rivers flow.",
            "To grow trees.",
            "To stop traffic."
        ],

        explanation:
            "Shops provide food, clothes and other everyday items.",

        difficulty: 2,
        correctAnswer: "So people can buy the things they need.",
        estimatedSeconds: 20,

        tags: ["geography", "services"]
    },

    {
        id: "geo-settle-018",
        skillId: "settlements",
        question: "Which settlement is most likely to have the greatest population?",
        stage: "recognise",
        options: [
            "City",
            "Village",
            "Hamlet",
            "Farm"
        ],

        explanation:
            "Cities usually have the largest populations.",

        difficulty: 2,
        correctAnswer: "City",
        estimatedSeconds: 20,

        tags: ["geography", "population"]
    },

    {
        id: "geo-settle-019",
        skillId: "settlements",
        question: "Why do people choose to live in settlements?",
        stage: "recognise",
        options: [
            "They provide homes, jobs and services.",
            "They always have beaches.",
            "They never have roads.",
            "They are always in mountains."
        ],

        explanation:
            "Settlements offer homes and important services such as schools and shops.",

        difficulty: 2,
        correctAnswer: "They provide homes, jobs and services.",
        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-settle-020",
        skillId: "settlements",
        question: "Which sentence best describes a settlement?",
        stage: "recognise",
        options: [
            "A place where people live and work, such as a village, town or city.",
            "A place where only animals live.",
            "A type of weather.",
            "A mountain range."
        ],

        explanation:
            "Settlements include all places where people have built communities.",

        difficulty: 2,
        correctAnswer: "A place where people live and work, such as a village, town or city.",
        estimatedSeconds: 20,

        tags: ["geography", "settlements", "human-geography"]
    }

    ]

};