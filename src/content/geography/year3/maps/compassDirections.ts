import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const compassDirections: SkillContent = {

    skillId: "compassDirections",

    title: "Compass Directions",

    description:
        "Learn the four main compass directions and how they help us describe locations and movement.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-compass-001",

        question: "Which direction is at the top of most maps?",

        options: [
            "North",
            "South",
            "East",
            "West"
        ],

        answer: 0,

        explanation:
            "Most maps are drawn with north at the top.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-002",

        question: "Which direction is opposite north?",

        options: [
            "South",
            "East",
            "West",
            "Left"
        ],

        answer: 0,

        explanation:
            "South is directly opposite north on a compass.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-003",

        question: "Which direction is opposite east?",

        options: [
            "West",
            "North",
            "South",
            "Up"
        ],

        answer: 0,

        explanation:
            "West is opposite east on a compass.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-004",

        question: "Which direction is to the right of north on most maps?",

        options: [
            "East",
            "West",
            "South",
            "Up"
        ],

        answer: 0,

        explanation:
            "When north is at the top, east is on the right.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-005",

        question: "Which direction is to the left of north on most maps?",

        options: [
            "West",
            "East",
            "South",
            "Down"
        ],

        answer: 0,

        explanation:
            "West is on the left side of most maps.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-006",

        question: "How many main compass directions are there?",

        options: [
            "Four",
            "Three",
            "Five",
            "Eight"
        ],

        answer: 0,

        explanation:
            "The four main compass directions are north, east, south and west.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-007",

        question: "Which direction comes after north when moving clockwise around a compass?",

        options: [
            "East",
            "South",
            "West",
            "North again"
        ],

        answer: 0,

        explanation:
            "The order clockwise is north, east, south, west.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-008",

        question: "Which tool helps people find directions?",

        options: [
            "Compass",
            "Ruler",
            "Calculator",
            "Thermometer"
        ],

        answer: 0,

        explanation:
            "A compass helps people find directions.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-009",

        question: "If you travel south, which direction are you moving?",

        options: [
            "Towards the bottom of most maps",
            "Towards the top of most maps",
            "Towards the right of most maps",
            "Towards the left of most maps"
        ],

        answer: 0,

        explanation:
            "South is shown at the bottom of most maps.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-010",

        question: "Which statement is true?",

        options: [
            "North, east, south and west are compass directions.",
            "Compass directions only work on treasure maps.",
            "Every map has south at the top.",
            "Compasses measure distance."
        ],

        answer: 0,

        explanation:
            "The four main compass directions help us describe locations.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-011",

        question: "If your school is east of your home, which direction would you travel to get there?",

        options: [
            "East",
            "West",
            "North",
            "South"
        ],

        answer: 0,

        explanation:
            "If something is east of you, you travel east to reach it.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-012",

        question: "A park is north of a library. Where is the library compared with the park?",

        options: [
            "South",
            "East",
            "West",
            "North"
        ],

        answer: 0,

        explanation:
            "If one place is north of another, the other place is south of it.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-013",

        question: "Why do maps often include a compass?",

        options: [
            "To show which way is north",
            "To measure roads",
            "To count buildings",
            "To show the weather"
        ],

        answer: 0,

        explanation:
            "A compass helps readers understand the direction of places on a map.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-014",

        question: "If you walk west and then turn around, which direction are you now facing?",

        options: [
            "East",
            "North",
            "South",
            "West"
        ],

        answer: 0,

        explanation:
            "Turning around means facing the opposite direction.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-015",

        question: "Why are compass directions useful?",

        options: [
            "They help describe where places are.",
            "They tell the temperature.",
            "They show population.",
            "They measure height."
        ],

        answer: 0,

        explanation:
            "Compass directions help us describe and follow routes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-016",

        question: "Which order is correct when moving clockwise around a compass?",

        options: [
            "North, East, South, West",
            "North, West, South, East",
            "East, North, West, South",
            "South, East, North, West"
        ],

        answer: 0,

        explanation:
            "Moving clockwise around a compass gives the order north, east, south and west.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-017",

        question: "If a river is west of a village, where is the village compared with the river?",

        options: [
            "East",
            "North",
            "South",
            "West"
        ],

        answer: 0,

        explanation:
            "If the river is west of the village, the village is east of the river.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-018",

        question: "Which direction would you travel if your destination is directly below you on a map?",

        options: [
            "South",
            "North",
            "East",
            "West"
        ],

        answer: 0,

        explanation:
            "The bottom of most maps points south.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-compass-019",

        question: "Why should you know which way north is on a map?",

        options: [
            "It helps you work out the other directions.",
            "It tells you the weather.",
            "It measures the distance.",
            "It shows the map scale."
        ],

        answer: 0,

        explanation:
            "Once you know north, you can identify east, south and west.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "compass", "maps"]
    },

    {
        id: "geo-compass-020",

        question: "Which sentence best describes compass directions?",

        options: [
            "They help people describe locations and find their way.",
            "They tell the time of day.",
            "They show how old a place is.",
            "They measure rainfall."
        ],

        answer: 0,

        explanation:
            "Compass directions are an important map-reading skill used to describe location and movement.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "compass", "map-skills"]
    }

    ]

};