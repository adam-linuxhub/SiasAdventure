import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const compassDirections: SkillContent = {

    skillId: "compassDirections",

    title: "Compass Directions",

    description:
        "Learn the four main compass directions and how they help us describe locations and movement.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-compass-001",
        skillId: "compassDirections",
        question: "Which direction is at the top of most maps?",
        stage: "recognise",
        options: [
            "North",
            "South",
            "East",
            "West"
        ],

        hint:
            "Imagine holding a standard map. Which direction is usually at the top?",

        explanation:
            "Most maps are drawn with north at the top.",

        difficulty: 1,
        correctAnswer: "North",
        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-002",
        skillId: "compassDirections",
        question: "Which direction is opposite north?",
        stage: "recognise",
        options: [
            "South",
            "East",
            "West",
            "Left"
        ],

        hint:
            "Look for the direction directly across from north on a compass.",

        explanation:
            "South is directly opposite north on a compass.",

        difficulty: 1,
        correctAnswer: "South",
        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-003",
        skillId: "compassDirections",
        question: "Which direction is opposite east?",
        stage: "recognise",
        options: [
            "West",
            "North",
            "South",
            "Up"
        ],

        hint:
            "Think of the direction directly opposite east.",

        explanation:
            "West is opposite east on a compass.",

        difficulty: 1,
        correctAnswer: "West",
        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-004",
        skillId: "compassDirections",
        question: "Which direction is to the right of north on most maps?",
        stage: "recognise",
        options: [
            "East",
            "West",
            "South",
            "Up"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "When north is at the top, east is on the right.",

        difficulty: 1,
        correctAnswer: "East",
        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-005",
        skillId: "compassDirections",
        question: "Which direction is to the left of north on most maps?",
        stage: "recognise",
        options: [
            "West",
            "East",
            "South",
            "Down"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "West is on the left side of most maps.",

        difficulty: 1,
        correctAnswer: "West",
        estimatedSeconds: 15,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-006",
        skillId: "compassDirections",
        question: "How many main compass directions are there?",
        stage: "recognise",
        options: [
            "Four",
            "Three",
            "Five",
            "Eight"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "The four main compass directions are north, east, south and west.",

        difficulty: 1,
        correctAnswer: "Four",
        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-007",
        skillId: "compassDirections",
        question: "Which direction comes after north when moving clockwise around a compass?",
        stage: "recognise",
        options: [
            "East",
            "South",
            "West",
            "North again"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "The order clockwise is north, east, south, west.",

        difficulty: 1,
        correctAnswer: "East",
        estimatedSeconds: 15,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-008",
        skillId: "compassDirections",
        question: "Which tool helps people find directions?",
        stage: "recognise",
        options: [
            "Compass",
            "Ruler",
            "Calculator",
            "Thermometer"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "A compass helps people find directions.",

        difficulty: 1,
        correctAnswer: "Compass",
        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-009",
        skillId: "compassDirections",
        question: "If you travel south, which direction are you moving?",
        stage: "recognise",
        options: [
            "Towards the bottom of most maps",
            "Towards the top of most maps",
            "Towards the right of most maps",
            "Towards the left of most maps"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "South is shown at the bottom of most maps.",

        difficulty: 1,
        correctAnswer: "Towards the bottom of most maps",
        estimatedSeconds: 20,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-010",
        skillId: "compassDirections",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "North, east, south and west are compass directions.",
            "Compass directions only work on treasure maps.",
            "Every map has south at the top.",
            "Compasses measure distance."
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "The four main compass directions help us describe locations.",

        difficulty: 1,
        correctAnswer: "North, east, south and west are compass directions.",
        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-011",
        skillId: "compassDirections",
        question: "If your school is east of your home, which direction would you travel to get there?",
        stage: "recognise",
        options: [
            "East",
            "West",
            "North",
            "South"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "If something is east of you, you travel east to reach it.",

        difficulty: 2,
        correctAnswer: "East",
        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-012",
        skillId: "compassDirections",
        question: "A park is north of a library. Where is the library compared with the park?",
        stage: "recognise",
        options: [
            "South",
            "East",
            "West",
            "North"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "If one place is north of another, the other place is south of it.",

        difficulty: 2,
        correctAnswer: "South",
        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-013",
        skillId: "compassDirections",
        question: "Why do maps often include a compass?",
        stage: "recognise",
        options: [
            "To show which way is north",
            "To measure roads",
            "To count buildings",
            "To show the weather"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "A compass helps readers understand the direction of places on a map.",

        difficulty: 2,
        correctAnswer: "To show which way is north",
        estimatedSeconds: 20,

        tags: ["geography", "maps", "compass"]
    },

    {
        id: "geo-compass-014",
        skillId: "compassDirections",
        question: "If you walk west and then turn around, which direction are you now facing?",
        stage: "recognise",
        options: [
            "East",
            "North",
            "South",
            "West"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "Turning around means facing the opposite direction.",

        difficulty: 2,
        correctAnswer: "East",
        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-015",
        skillId: "compassDirections",
        question: "Why are compass directions useful?",
        stage: "recognise",
        options: [
            "They help describe where places are.",
            "They tell the temperature.",
            "They show population.",
            "They measure height."
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "Compass directions help us describe and follow routes.",

        difficulty: 2,
        correctAnswer: "They help describe where places are.",
        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-016",
        skillId: "compassDirections",
        question: "Which order is correct when moving clockwise around a compass?",
        stage: "recognise",
        options: [
            "North, East, South, West",
            "North, West, South, East",
            "East, North, West, South",
            "South, East, North, West"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "Moving clockwise around a compass gives the order north, east, south and west.",

        difficulty: 2,
        correctAnswer: "North, East, South, West",
        estimatedSeconds: 20,

        tags: ["geography", "compass"]
    },

    {
        id: "geo-compass-017",
        skillId: "compassDirections",
        question: "If a river is west of a village, where is the village compared with the river?",
        stage: "recognise",
        options: [
            "East",
            "North",
            "South",
            "West"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "If the river is west of the village, the village is east of the river.",

        difficulty: 2,
        correctAnswer: "East",
        estimatedSeconds: 20,

        tags: ["geography", "directions"]
    },

    {
        id: "geo-compass-018",
        skillId: "compassDirections",
        question: "Which direction would you travel if your destination is directly below you on a map?",
        stage: "recognise",
        options: [
            "South",
            "North",
            "East",
            "West"
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "The bottom of most maps points south.",

        difficulty: 2,
        correctAnswer: "South",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-compass-019",
        skillId: "compassDirections",
        question: "Why should you know which way north is on a map?",
        stage: "recognise",
        options: [
            "It helps you work out the other directions.",
            "It tells you the weather.",
            "It measures the distance.",
            "It shows the map scale."
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "Once you know north, you can identify east, south and west.",

        difficulty: 2,
        correctAnswer: "It helps you work out the other directions.",
        estimatedSeconds: 20,

        tags: ["geography", "compass", "maps"]
    },

    {
        id: "geo-compass-020",
        skillId: "compassDirections",
        question: "Which sentence best describes compass directions?",
        stage: "recognise",
        options: [
            "They help people describe locations and find their way.",
            "They tell the time of day.",
            "They show how old a place is.",
            "They measure rainfall."
        ],

        hint:
            "Think about how maps are usually drawn or how opposite directions work.",

        explanation:
            "Compass directions are an important map-reading skill used to describe location and movement.",

        difficulty: 2,
        correctAnswer: "They help people describe locations and find their way.",
        estimatedSeconds: 20,

        tags: ["geography", "compass", "map-skills"]
    }

    ]

};


export default compassDirections;

export {

    compassDirections

};
