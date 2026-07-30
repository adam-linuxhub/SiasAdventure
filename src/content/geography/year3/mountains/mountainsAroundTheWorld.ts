import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const mountainsAroundTheWorld: SkillContent = {

    skillId: "mountainsAroundTheWorld",

    title: "Mountains Around the World",

    description:
        "Learn about famous mountains, mountain ranges, continents and how mountains are located around the world.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-maw-001",

        question:
            "What is a mountain range?",

        options: [
            "A group of mountains connected together",
            "A single small hill",
            "A type of river",
            "A flat area of land"
        ],

        answer: 0,

        explanation:
            "A mountain range is a group of mountains that are close together.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-002",

        question:
            "Which mountain range contains Mount Everest?",

        options: [
            "The Himalayas",
            "The Alps",
            "The Andes",
            "The Rockies"
        ],

        answer: 0,

        explanation:
            "Mount Everest is part of the Himalayan mountain range.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-003",

        question:
            "Where are the Himalayas located?",

        options: [
            "Asia",
            "Africa",
            "Australia",
            "South America"
        ],

        answer: 0,

        explanation:
            "The Himalayas are a large mountain range in Asia.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-004",

        question:
            "What is the highest mountain above sea level?",

        options: [
            "Mount Everest",
            "Ben Nevis",
            "Mount Snowdon",
            "The Alps"
        ],

        answer: 0,

        explanation:
            "Mount Everest is the highest mountain above sea level.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-005",

        question:
            "Which mountain range is found in Europe?",

        options: [
            "The Alps",
            "The Himalayas",
            "The Andes",
            "The Rockies"
        ],

        answer: 0,

        explanation:
            "The Alps stretch across several European countries.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-006",

        question:
            "Which mountain range is found in South America?",

        options: [
            "The Andes",
            "The Alps",
            "The Himalayas",
            "The Pennines"
        ],

        answer: 0,

        explanation:
            "The Andes are a long mountain range along western South America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-007",

        question:
            "Which mountain range is found in North America?",

        options: [
            "The Rocky Mountains",
            "The Himalayas",
            "The Alps",
            "The Andes"
        ],

        answer: 0,

        explanation:
            "The Rocky Mountains are located in North America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-008",

        question:
            "What continent is the Andes mountain range in?",

        options: [
            "South America",
            "Europe",
            "Asia",
            "Africa"
        ],

        answer: 0,

        explanation:
            "The Andes run along the western side of South America.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-009",

        question:
            "Why do geographers use maps to study mountains?",

        options: [
            "To find where mountains are located",
            "To change mountains",
            "To create weather",
            "To remove mountains"
        ],

        answer: 0,

        explanation:
            "Maps help us locate and compare places around the world.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-maw-010",

        question:
            "What does a globe show?",

        options: [
            "A model of Earth",
            "Only mountains",
            "Only rivers",
            "A weather forecast"
        ],

        answer: 0,

        explanation:
            "A globe is a model showing Earth's continents and oceans.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-maw-011",

        question:
            "Why are some mountain areas difficult to live in?",

        options: [
            "They can be steep, cold and hard to travel through",
            "They have no land",
            "They have no weather",
            "They are always underwater"
        ],

        answer: 0,

        explanation:
            "Mountain environments can be challenging because of their height and climate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-012",

        question:
            "What is a mountain environment?",

        options: [
            "The natural surroundings of a mountain area",
            "A type of map",
            "A city centre",
            "A river crossing"
        ],

        answer: 0,

        explanation:
            "An environment includes the living and non-living features of an area.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-013",

        question:
            "Why do tourists visit mountains?",

        options: [
            "For activities such as climbing, walking and sightseeing",
            "To build cities",
            "To remove forests",
            "To stop rivers"
        ],

        answer: 0,

        explanation:
            "Mountains attract visitors for recreation and exploration.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-014",

        question:
            "Which mountain is in the UK?",

        options: [
            "Ben Nevis",
            "Mount Everest",
            "K2",
            "Kilimanjaro"
        ],

        answer: 0,

        explanation:
            "Ben Nevis in Scotland is the highest mountain in the UK.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "uk"]
    },

    {
        id: "geo-maw-015",

        question:
            "Why are mountain ranges often shown on maps?",

        options: [
            "They are important features of Earth's surface",
            "They are invisible",
            "They are made by people",
            "They are only found in cities"
        ],

        answer: 0,

        explanation:
            "Mountain ranges are major physical features of the Earth.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-maw-016",

        question:
            "What can people compare about mountains around the world?",

        options: [
            "Height, location and features",
            "Only their names",
            "Only their colours",
            "Only their age"
        ],

        answer: 0,

        explanation:
            "Geographers compare mountains using different measurements and features.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-017",

        question:
            "Why do mountain climates vary?",

        options: [
            "Height and location affect temperature and rainfall",
            "All mountains have identical weather",
            "Mountains control all weather",
            "Climate does not change"
        ],

        answer: 0,

        explanation:
            "Altitude and location influence mountain climates.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-018",

        question:
            "What type of map feature helps show height?",

        options: [
            "Contour lines",
            "Road signs",
            "Country names only",
            "Weather symbols"
        ],

        answer: 0,

        explanation:
            "Contour lines show changes in height on maps.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-maw-019",

        question:
            "Why are mountains important around the world?",

        options: [
            "They provide habitats, resources and influence landscapes",
            "They have no effect",
            "They only create roads",
            "They prevent all life"
        ],

        answer: 0,

        explanation:
            "Mountains are important natural features that support life.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-maw-020",

        question:
            "Which sentence best describes mountains around the world?",

        options: [
            "Mountains are found on different continents and have different features",
            "All mountains are the same",
            "Mountains only exist in one country",
            "Mountains cannot be studied"
        ],

        answer: 0,

        explanation:
            "Mountains vary in size, location and characteristics.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};