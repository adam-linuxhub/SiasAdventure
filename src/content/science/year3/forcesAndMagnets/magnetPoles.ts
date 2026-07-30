import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const magnetPoles: SkillContent = {

    skillId: "magnetPoles",

    title: "Magnet Poles",

    description:
        "Learn that every magnet has two poles and discover how different poles attract or repel each other.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-magnet-poles-001",

        question: "How many poles does every magnet have?",

        options: [
            "Two",
            "One",
            "Three",
            "Four"
        ],

        answer: 0,

        explanation:
            "Every magnet has two poles: a north pole and a south pole.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-002",

        question: "What are the two poles called?",

        options: [
            "North and South",
            "East and West",
            "Top and Bottom",
            "Left and Right"
        ],

        answer: 0,

        explanation:
            "The ends of a magnet are called the north pole and the south pole.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-003",

        question: "What happens when a north pole and a south pole are brought together?",

        options: [
            "They attract",
            "They repel",
            "They disappear",
            "Nothing happens"
        ],

        answer: 0,

        explanation:
            "Unlike poles attract each other.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-004",

        question: "What happens when two north poles are brought together?",

        options: [
            "They repel",
            "They attract",
            "They melt",
            "They stick forever"
        ],

        answer: 0,

        explanation:
            "Like poles repel each other.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-005",

        question: "What happens when two south poles are brought together?",

        options: [
            "They repel",
            "They attract",
            "They become stronger",
            "Nothing happens"
        ],

        answer: 0,

        explanation:
            "Like poles always repel.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-006",

        question: "Which poles attract each other?",

        options: [
            "North and South",
            "North and North",
            "South and South",
            "All poles attract"
        ],

        answer: 0,

        explanation:
            "Opposite poles attract.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-007",

        question: "Which poles repel each other?",

        options: [
            "Like poles",
            "Unlike poles",
            "Only north poles",
            "Only south poles"
        ],

        answer: 0,

        explanation:
            "Like poles (north-north or south-south) repel each other.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-008",

        question: "Where is the magnetic force strongest on a bar magnet?",

        options: [
            "At the poles",
            "In the middle",
            "Everywhere equally",
            "Only underneath"
        ],

        answer: 0,

        explanation:
            "The magnetic force is strongest at the north and south poles.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-009",

        question: "Which statement is true?",

        options: [
            "Every magnet has a north and south pole.",
            "Magnets have only one pole.",
            "Magnets have no poles.",
            "Only large magnets have poles."
        ],

        answer: 0,

        explanation:
            "Every magnet has two poles.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-010",

        question: "What do we call it when magnets push away from each other?",

        options: [
            "Repel",
            "Reflect",
            "Melt",
            "Bounce"
        ],

        answer: 0,

        explanation:
            "Repel means magnets push apart.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-011",

        question: "A north pole is brought near another north pole. What happens?",

        options: [
            "They push apart",
            "They stick together",
            "One disappears",
            "Nothing changes"
        ],

        answer: 0,

        explanation:
            "North and north are like poles, so they repel.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-012",

        question: "A south pole is brought near a north pole. What happens?",

        options: [
            "They pull together",
            "They push apart",
            "They lose their magnetism",
            "Nothing happens"
        ],

        answer: 0,

        explanation:
            "Opposite poles attract each other.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-013",

        question: "Why do two magnets sometimes push apart?",

        options: [
            "Like poles are facing each other",
            "The magnets are too heavy",
            "They are made of plastic",
            "They have run out of magnetism"
        ],

        answer: 0,

        explanation:
            "Like poles repel one another.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-014",

        question: "Why do two magnets sometimes stick together?",

        options: [
            "Opposite poles are facing each other",
            "They are the same colour",
            "They are warm",
            "They are heavy"
        ],

        answer: 0,

        explanation:
            "North and south poles attract.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-015",

        question: "Which pair of poles will attract?",

        options: [
            "North and South",
            "North and North",
            "South and South",
            "None of these"
        ],

        answer: 0,

        explanation:
            "Unlike poles attract each other.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-016",

        question: "A child says, 'North poles always attract.' Is this correct?",

        options: [
            "No, north poles repel each other.",
            "Yes, north poles always attract.",
            "Only large north poles attract.",
            "Only small north poles attract."
        ],

        answer: 0,

        explanation:
            "North-north is a pair of like poles, so they repel.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-017",

        question: "What is the best way to find out which poles attract?",

        options: [
            "Test different pole combinations",
            "Guess",
            "Measure the magnets",
            "Paint the magnets"
        ],

        answer: 0,

        explanation:
            "Testing different combinations is the best investigation.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "magnets"]
    },

    {
        id: "sci-magnet-poles-018",

        question: "Why is the magnetic pull strongest at the ends of a magnet?",

        options: [
            "The poles are at the ends",
            "The middle has no magnetism",
            "The ends are heavier",
            "The ends are colder"
        ],

        answer: 0,

        explanation:
            "The north and south poles are where the magnetic force is strongest.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-019",

        question: "Which sentence is correct?",

        options: [
            "Unlike poles attract and like poles repel.",
            "Unlike poles repel and like poles attract.",
            "All poles attract.",
            "All poles repel."
        ],

        answer: 0,

        explanation:
            "This is the basic rule for magnetic poles.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract", "repel"]
    },

    {
        id: "sci-magnet-poles-020",

        question: "Which sentence best describes magnet poles?",

        options: [
            "Every magnet has a north and south pole. Opposite poles attract and like poles repel.",
            "Magnets have only one pole.",
            "Every pole attracts every other pole.",
            "Poles only matter for large magnets."
        ],

        answer: 0,

        explanation:
            "All magnets have two poles. Opposite poles attract, while like poles repel.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles", "attract", "repel"]
    }

    ]

};