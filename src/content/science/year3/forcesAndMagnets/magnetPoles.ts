import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const magnetPoles: SkillContent = {

    skillId: "magnetPoles",

    title: "Magnet Poles",

    description:
        "Learn that every magnet has two poles and discover how different poles attract or repel each other.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-magnet-poles-001",
        skillId: "magnetPoles",
        question: "How many poles does every magnet have?",
        stage: "recognise",
        options: [
            "Two",
            "One",
            "Three",
            "Four"
        ],

        explanation:
            "Every magnet has two poles: a north pole and a south pole.",

        difficulty: 1,
        correctAnswer: "Two",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-002",
        skillId: "magnetPoles",
        question: "What are the two poles called?",
        stage: "recognise",
        options: [
            "North and South",
            "East and West",
            "Top and Bottom",
            "Left and Right"
        ],

        explanation:
            "The ends of a magnet are called the north pole and the south pole.",

        difficulty: 1,
        correctAnswer: "North and South",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-003",
        skillId: "magnetPoles",
        question: "What happens when a north pole and a south pole are brought together?",
        stage: "recognise",
        options: [
            "They attract",
            "They repel",
            "They disappear",
            "Nothing happens"
        ],

        explanation:
            "Unlike poles attract each other.",

        difficulty: 1,
        correctAnswer: "They attract",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-004",
        skillId: "magnetPoles",
        question: "What happens when two north poles are brought together?",
        stage: "recognise",
        options: [
            "They repel",
            "They attract",
            "They melt",
            "They stick forever"
        ],

        explanation:
            "Like poles repel each other.",

        difficulty: 1,
        correctAnswer: "They repel",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-005",
        skillId: "magnetPoles",
        question: "What happens when two south poles are brought together?",
        stage: "recognise",
        options: [
            "They repel",
            "They attract",
            "They become stronger",
            "Nothing happens"
        ],

        explanation:
            "Like poles always repel.",

        difficulty: 1,
        correctAnswer: "They repel",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-006",
        skillId: "magnetPoles",
        question: "Which poles attract each other?",
        stage: "recognise",
        options: [
            "North and South",
            "North and North",
            "South and South",
            "All poles attract"
        ],

        explanation:
            "Opposite poles attract.",

        difficulty: 1,
        correctAnswer: "North and South",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-007",
        skillId: "magnetPoles",
        question: "Which poles repel each other?",
        stage: "recognise",
        options: [
            "Like poles",
            "Unlike poles",
            "Only north poles",
            "Only south poles"
        ],

        explanation:
            "Like poles (north-north or south-south) repel each other.",

        difficulty: 1,
        correctAnswer: "Like poles",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-008",
        skillId: "magnetPoles",
        question: "Where is the magnetic force strongest on a bar magnet?",
        stage: "recognise",
        options: [
            "At the poles",
            "In the middle",
            "Everywhere equally",
            "Only underneath"
        ],

        explanation:
            "The magnetic force is strongest at the north and south poles.",

        difficulty: 1,
        correctAnswer: "At the poles",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-009",
        skillId: "magnetPoles",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Every magnet has a north and south pole.",
            "Magnets have only one pole.",
            "Magnets have no poles.",
            "Only large magnets have poles."
        ],

        explanation:
            "Every magnet has two poles.",

        difficulty: 1,
        correctAnswer: "Every magnet has a north and south pole.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-010",
        skillId: "magnetPoles",
        question: "What do we call it when magnets push away from each other?",
        stage: "recognise",
        options: [
            "Repel",
            "Reflect",
            "Melt",
            "Bounce"
        ],

        explanation:
            "Repel means magnets push apart.",

        difficulty: 1,
        correctAnswer: "Repel",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-011",
        skillId: "magnetPoles",
        question: "A north pole is brought near another north pole. What happens?",
        stage: "recognise",
        options: [
            "They push apart",
            "They stick together",
            "One disappears",
            "Nothing changes"
        ],

        explanation:
            "North and north are like poles, so they repel.",

        difficulty: 2,
        correctAnswer: "They push apart",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-012",
        skillId: "magnetPoles",
        question: "A south pole is brought near a north pole. What happens?",
        stage: "recognise",
        options: [
            "They pull together",
            "They push apart",
            "They lose their magnetism",
            "Nothing happens"
        ],

        explanation:
            "Opposite poles attract each other.",

        difficulty: 2,
        correctAnswer: "They pull together",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-013",
        skillId: "magnetPoles",
        question: "Why do two magnets sometimes push apart?",
        stage: "recognise",
        options: [
            "Like poles are facing each other",
            "The magnets are too heavy",
            "They are made of plastic",
            "They have run out of magnetism"
        ],

        explanation:
            "Like poles repel one another.",

        difficulty: 2,
        correctAnswer: "Like poles are facing each other",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-014",
        skillId: "magnetPoles",
        question: "Why do two magnets sometimes stick together?",
        stage: "recognise",
        options: [
            "Opposite poles are facing each other",
            "They are the same colour",
            "They are warm",
            "They are heavy"
        ],

        explanation:
            "North and south poles attract.",

        difficulty: 2,
        correctAnswer: "Opposite poles are facing each other",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract"]
    },

    {
        id: "sci-magnet-poles-015",
        skillId: "magnetPoles",
        question: "Which pair of poles will attract?",
        stage: "recognise",
        options: [
            "North and South",
            "North and North",
            "South and South",
            "None of these"
        ],

        explanation:
            "Unlike poles attract each other.",

        difficulty: 2,
        correctAnswer: "North and South",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-016",
        skillId: "magnetPoles",
        question: "A child says, 'North poles always attract.' Is this correct?",
        stage: "recognise",
        options: [
            "No, north poles repel each other.",
            "Yes, north poles always attract.",
            "Only large north poles attract.",
            "Only small north poles attract."
        ],

        explanation:
            "North-north is a pair of like poles, so they repel.",

        difficulty: 2,
        correctAnswer: "No, north poles repel each other.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "repel"]
    },

    {
        id: "sci-magnet-poles-017",
        skillId: "magnetPoles",
        question: "What is the best way to find out which poles attract?",
        stage: "recognise",
        options: [
            "Test different pole combinations",
            "Guess",
            "Measure the magnets",
            "Paint the magnets"
        ],

        explanation:
            "Testing different combinations is the best investigation.",

        difficulty: 2,
        correctAnswer: "Test different pole combinations",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "magnets"]
    },

    {
        id: "sci-magnet-poles-018",
        skillId: "magnetPoles",
        question: "Why is the magnetic pull strongest at the ends of a magnet?",
        stage: "recognise",
        options: [
            "The poles are at the ends",
            "The middle has no magnetism",
            "The ends are heavier",
            "The ends are colder"
        ],

        explanation:
            "The north and south poles are where the magnetic force is strongest.",

        difficulty: 2,
        correctAnswer: "The poles are at the ends",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles"]
    },

    {
        id: "sci-magnet-poles-019",
        skillId: "magnetPoles",
        question: "Which sentence is correct?",
        stage: "recognise",
        options: [
            "Unlike poles attract and like poles repel.",
            "Unlike poles repel and like poles attract.",
            "All poles attract.",
            "All poles repel."
        ],

        explanation:
            "This is the basic rule for magnetic poles.",

        difficulty: 2,
        correctAnswer: "Unlike poles attract and like poles repel.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "attract", "repel"]
    },

    {
        id: "sci-magnet-poles-020",
        skillId: "magnetPoles",
        question: "Which sentence best describes magnet poles?",
        stage: "recognise",
        options: [
            "Every magnet has a north and south pole. Opposite poles attract and like poles repel.",
            "Magnets have only one pole.",
            "Every pole attracts every other pole.",
            "Poles only matter for large magnets."
        ],

        explanation:
            "All magnets have two poles. Opposite poles attract, while like poles repel.",

        difficulty: 2,
        correctAnswer: "Every magnet has a north and south pole. Opposite poles attract and like poles repel.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "poles", "attract", "repel"]
    }

    ]

};


export default magnetPoles;

export {

    magnetPoles

};
