import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const ironAge: SkillContent = {

    skillId: "ironAge",

    title: "The Iron Age",

    description:
        "Learn about life in Britain during the Iron Age, including iron tools, hill forts and Celtic tribes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-iron-001",
        skillId: "ironAge",
        question: "Why is it called the Iron Age?",

        options: [
            "People began making tools from iron.",
            "Everything was made from iron.",
            "People lived inside iron houses.",
            "Iron grew in forests."
        ],

        explanation:
            "The Iron Age is named after people began making many tools and weapons from iron.",

        difficulty: 1,
        correctAnswer: "People began making tools from iron.",
        estimatedSeconds: 15,

        tags: ["history", "iron-age"]
    },

    {
        id: "hist-iron-002",
        skillId: "ironAge",
        question: "Which metal became widely used during the Iron Age?",

        options: [
            "Iron",
            "Plastic",
            "Aluminium",
            "Silver"
        ],

        explanation:
            "Iron became the main material for making tools and weapons.",

        difficulty: 1,
        correctAnswer: "Iron",
        estimatedSeconds: 15,

        tags: ["history", "iron"]
    },

    {
        id: "hist-iron-003",
        skillId: "ironAge",
        question: "Iron tools were usually stronger than tools made from...",

        options: [
            "Bronze",
            "Plastic",
            "Glass",
            "Paper"
        ],

        explanation:
            "Iron was generally stronger and tougher than bronze.",

        difficulty: 1,
        correctAnswer: "Bronze",
        estimatedSeconds: 15,

        tags: ["history", "tools"]
    },

    {
        id: "hist-iron-004",
        skillId: "ironAge",
        question: "What was a hill fort?",

        options: [
            "A settlement built on high ground",
            "A large cave",
            "A stone bridge",
            "An underground tunnel"
        ],

        explanation:
            "Hill forts were settlements built on hills for protection.",

        difficulty: 1,
        correctAnswer: "A settlement built on high ground",
        estimatedSeconds: 15,

        tags: ["history", "hill-fort"]
    },

    {
        id: "hist-iron-005",
        skillId: "ironAge",
        question: "Why were hill forts often built on hills?",

        options: [
            "They were easier to defend.",
            "They were closer to the sea.",
            "They were warmer.",
            "They had electricity."
        ],

        explanation:
            "Being on high ground helped people see approaching danger.",

        difficulty: 1,
        correctAnswer: "They were easier to defend.",
        estimatedSeconds: 15,

        tags: ["history", "hill-fort"]
    },

    {
        id: "hist-iron-006",
        skillId: "ironAge",
        question: "What were groups of Iron Age people often called?",

        options: [
            "Tribes",
            "Teams",
            "Companies",
            "Countries"
        ],

        explanation:
            "People lived in groups called tribes.",

        difficulty: 1,
        correctAnswer: "Tribes",
        estimatedSeconds: 15,

        tags: ["history", "tribes"]
    },

    {
        id: "hist-iron-007",
        skillId: "ironAge",
        question: "Many people living in Britain during the Iron Age were called...",

        options: [
            "Celts",
            "Romans",
            "Vikings",
            "Normans"
        ],

        explanation:
            "Many tribes living in Britain during the Iron Age were Celts.",

        difficulty: 1,
        correctAnswer: "Celts",
        estimatedSeconds: 15,

        tags: ["history", "celts"]
    },

    {
        id: "hist-iron-008",
        skillId: "ironAge",
        question: "What could stronger iron tools help people do?",

        options: [
            "Farm and build more effectively",
            "Fly aeroplanes",
            "Use computers",
            "Drive tractors"
        ],

        explanation:
            "Iron tools made farming and building easier.",

        difficulty: 1,
        correctAnswer: "Farm and build more effectively",
        estimatedSeconds: 20,

        tags: ["history", "tools"]
    },

    {
        id: "hist-iron-009",
        skillId: "ironAge",
        question: "Which of these would most likely be found in an Iron Age settlement?",

        options: [
            "Iron spear",
            "Television",
            "Bicycle",
            "Plastic bottle"
        ],

        explanation:
            "Iron weapons and tools became common during this period.",

        difficulty: 1,
        correctAnswer: "Iron spear",
        estimatedSeconds: 20,

        tags: ["history", "artefacts"]
    },

    {
        id: "hist-iron-010",
        skillId: "ironAge",
        question: "Which statement is true?",

        options: [
            "Iron became an important material for tools and weapons.",
            "People travelled by train.",
            "People used mobile phones.",
            "People lived in skyscrapers."
        ],

        explanation:
            "Iron changed how people worked and lived.",

        difficulty: 1,
        correctAnswer: "Iron became an important material for tools and weapons.",
        estimatedSeconds: 20,

        tags: ["history", "iron-age"]
    },

    {
        id: "hist-iron-011",
        skillId: "ironAge",
        question: "Why was iron better than bronze for many tools?",

        options: [
            "It was usually stronger and tougher.",
            "It floated on water.",
            "It was softer.",
            "It melted in sunlight."
        ],

        explanation:
            "Iron made stronger tools that lasted longer.",

        difficulty: 2,
        correctAnswer: "It was usually stronger and tougher.",
        estimatedSeconds: 20,

        tags: ["history", "iron"]
    },

    {
        id: "hist-iron-012",
        skillId: "ironAge",
        question: "Why did people build hill forts?",

        options: [
            "To help protect their communities",
            "To watch television",
            "To grow crops indoors",
            "To build ships"
        ],

        explanation:
            "Hill forts helped defend people from attacks.",

        difficulty: 2,
        correctAnswer: "To help protect their communities",
        estimatedSeconds: 20,

        tags: ["history", "hill-fort"]
    },

    {
        id: "hist-iron-013",
        skillId: "ironAge",
        question: "What was one important job of a tribe?",

        options: [
            "Working together to survive",
            "Building railways",
            "Running supermarkets",
            "Flying aeroplanes"
        ],

        explanation:
            "People worked together to farm, hunt and protect one another.",

        difficulty: 2,
        correctAnswer: "Working together to survive",
        estimatedSeconds: 20,

        tags: ["history", "tribes"]
    },

    {
        id: "hist-iron-014",
        skillId: "ironAge",
        question: "Why were stronger farming tools useful?",

        options: [
            "They made farming easier and more efficient.",
            "They created electricity.",
            "They made food taste better.",
            "They built roads automatically."
        ],

        explanation:
            "Iron tools helped farmers work the land more effectively.",

        difficulty: 2,
        correctAnswer: "They made farming easier and more efficient.",
        estimatedSeconds: 20,

        tags: ["history", "farming"]
    },

    {
        id: "hist-iron-015",
        skillId: "ironAge",
        question: "Why was living in a tribe important?",

        options: [
            "People could help and protect one another.",
            "People could build computers.",
            "People could use cars.",
            "People could travel by train."
        ],

        explanation:
            "Working together helped communities survive.",

        difficulty: 2,
        correctAnswer: "People could help and protect one another.",
        estimatedSeconds: 20,

        tags: ["history", "tribes"]
    },

    {
        id: "hist-iron-016",
        skillId: "ironAge",
        question: "Which activity was common during the Iron Age?",

        options: [
            "Farming with iron tools",
            "Driving buses",
            "Using electricity",
            "Flying planes"
        ],

        explanation:
            "Iron tools made farming more productive.",

        difficulty: 2,
        correctAnswer: "Farming with iron tools",
        estimatedSeconds: 20,

        tags: ["history", "farming"]
    },

    {
        id: "hist-iron-017",
        skillId: "ironAge",
        question: "What advantage did a hill fort have?",

        options: [
            "People could see danger from far away.",
            "It was underwater.",
            "It had central heating.",
            "It was built from glass."
        ],

        explanation:
            "Higher ground made it easier to spot approaching enemies.",

        difficulty: 2,
        correctAnswer: "People could see danger from far away.",
        estimatedSeconds: 20,

        tags: ["history", "hill-fort"]
    },

    {
        id: "hist-iron-018",
        skillId: "ironAge",
        question: "Why do historians study Iron Age artefacts?",

        options: [
            "They help us understand how people lived.",
            "They still produce electricity.",
            "They are used in modern factories.",
            "They are magical objects."
        ],

        explanation:
            "Artefacts give us clues about life in the past.",

        difficulty: 2,
        correctAnswer: "They help us understand how people lived.",
        estimatedSeconds: 20,

        tags: ["history", "evidence"]
    },

    {
        id: "hist-iron-019",
        skillId: "ironAge",
        question: "Which item would most likely belong to the Iron Age?",

        options: [
            "Iron sword",
            "Laptop",
            "Plastic toy",
            "Electric torch"
        ],

        explanation:
            "Iron weapons and tools were common during this period.",

        difficulty: 2,
        correctAnswer: "Iron sword",
        estimatedSeconds: 20,

        tags: ["history", "artefacts"]
    },

    {
        id: "hist-iron-020",
        skillId: "ironAge",
        question: "Which sentence best describes the Iron Age?",

        options: [
            "People used iron tools, lived in tribes and built hill forts for protection.",
            "People travelled by train and used electricity.",
            "People lived only in castles.",
            "People stopped farming."
        ],

        explanation:
            "The Iron Age brought stronger tools, thriving farming communities and defended settlements.",

        difficulty: 2,
        correctAnswer: "People used iron tools, lived in tribes and built hill forts for protection.",
        estimatedSeconds: 20,

        tags: ["history", "iron-age", "hill-fort", "tribes"]
    }

    ]

};