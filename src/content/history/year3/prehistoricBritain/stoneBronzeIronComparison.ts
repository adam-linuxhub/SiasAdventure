import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const stoneBronzeIronComparison: SkillContent = {

    skillId: "stoneBronzeIronComparison",

    title: "Stone Age, Bronze Age and Iron Age",

    description:
        "Compare how life in Britain changed from the Stone Age through the Bronze Age to the Iron Age.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-compare-001",

        question: "Which Age came first?",

        options: [
            "Stone Age",
            "Bronze Age",
            "Iron Age",
            "Roman Age"
        ],

        explanation:
            "The Stone Age came before the Bronze Age and the Iron Age.",

        difficulty: 1,
        correctAnswer: "Stone Age",
        estimatedSeconds: 15,

        tags: ["history", "timeline"]
    },

    {
        id: "hist-compare-002",

        question: "Which Age came after the Stone Age?",

        options: [
            "Bronze Age",
            "Iron Age",
            "Victorian Age",
            "Roman Age"
        ],

        explanation:
            "The Bronze Age followed the Stone Age.",

        difficulty: 1,
        correctAnswer: "Bronze Age",
        estimatedSeconds: 15,

        tags: ["history", "timeline"]
    },

    {
        id: "hist-compare-003",

        question: "Which Age came after the Bronze Age?",

        options: [
            "Iron Age",
            "Stone Age",
            "Ice Age",
            "Roman Age"
        ],

        explanation:
            "The Iron Age followed the Bronze Age.",

        difficulty: 1,
        correctAnswer: "Iron Age",
        estimatedSeconds: 15,

        tags: ["history", "timeline"]
    },

    {
        id: "hist-compare-004",

        question: "What material gave the Stone Age its name?",

        options: [
            "Stone",
            "Iron",
            "Bronze",
            "Wood"
        ],

        explanation:
            "Stone was the main material used to make tools.",

        difficulty: 1,
        correctAnswer: "Stone",
        estimatedSeconds: 15,

        tags: ["history", "stone-age"]
    },

    {
        id: "hist-compare-005",

        question: "What material gave the Bronze Age its name?",

        options: [
            "Bronze",
            "Stone",
            "Iron",
            "Gold"
        ],

        explanation:
            "Bronze became the main material for tools and weapons.",

        difficulty: 1,
        correctAnswer: "Bronze",
        estimatedSeconds: 15,

        tags: ["history", "bronze-age"]
    },

    {
        id: "hist-compare-006",

        question: "What material gave the Iron Age its name?",

        options: [
            "Iron",
            "Stone",
            "Bronze",
            "Silver"
        ],

        explanation:
            "Iron became the main material for many tools and weapons.",

        difficulty: 1,
        correctAnswer: "Iron",
        estimatedSeconds: 15,

        tags: ["history", "iron-age"]
    },

    {
        id: "hist-compare-007",

        question: "Which Age used the oldest tools?",

        options: [
            "Stone Age",
            "Bronze Age",
            "Iron Age",
            "They all used the same tools."
        ],

        explanation:
            "Stone tools were used before bronze and iron tools were developed.",

        difficulty: 1,
        correctAnswer: "Stone Age",
        estimatedSeconds: 15,

        tags: ["history", "tools"]
    },

    {
        id: "hist-compare-008",

        question: "Which metal was usually stronger than bronze?",

        options: [
            "Iron",
            "Gold",
            "Silver",
            "Tin"
        ],

        explanation:
            "Iron tools were usually stronger than bronze tools.",

        difficulty: 1,
        correctAnswer: "Iron",
        estimatedSeconds: 20,

        tags: ["history", "iron"]
    },

    {
        id: "hist-compare-009",

        question: "During which Age were hill forts common?",

        options: [
            "Iron Age",
            "Stone Age",
            "Bronze Age",
            "Ice Age"
        ],

        explanation:
            "Hill forts became common during the Iron Age.",

        difficulty: 1,
        correctAnswer: "Iron Age",
        estimatedSeconds: 20,

        tags: ["history", "hill-fort"]
    },

    {
        id: "hist-compare-010",

        question: "Which statement is true?",

        options: [
            "Tools generally became stronger over time.",
            "Stone tools were stronger than iron tools.",
            "Bronze came after iron.",
            "Iron came before stone."
        ],

        explanation:
            "As people discovered new materials, they made stronger tools.",

        difficulty: 1,
        correctAnswer: "Tools generally became stronger over time.",
        estimatedSeconds: 20,

        tags: ["history", "comparison"]
    },

    {
        id: "hist-compare-011",

        question: "Why was bronze an improvement over stone?",

        options: [
            "Bronze tools were usually stronger and lasted longer.",
            "Bronze floated on water.",
            "Bronze was softer than stone.",
            "Bronze grew naturally."
        ],

        explanation:
            "Bronze tools were stronger and more durable than stone tools.",

        difficulty: 2,
        correctAnswer: "Bronze tools were usually stronger and lasted longer.",
        estimatedSeconds: 20,

        tags: ["history", "bronze-age"]
    },

    {
        id: "hist-compare-012",

        question: "Why was iron an improvement over bronze?",

        options: [
            "Iron tools were generally stronger.",
            "Iron was lighter than feathers.",
            "Iron was made from wood.",
            "Iron melted in the rain."
        ],

        explanation:
            "Iron made stronger tools and weapons than bronze.",

        difficulty: 2,
        correctAnswer: "Iron tools were generally stronger.",
        estimatedSeconds: 20,

        tags: ["history", "iron-age"]
    },

    {
        id: "hist-compare-013",

        question: "Which timeline is correct?",

        options: [
            "Stone Age → Bronze Age → Iron Age",
            "Bronze Age → Stone Age → Iron Age",
            "Iron Age → Bronze Age → Stone Age",
            "Iron Age → Stone Age → Bronze Age"
        ],

        explanation:
            "This is the correct order of these periods in British history.",

        difficulty: 2,
        correctAnswer: "Stone Age → Bronze Age → Iron Age",
        estimatedSeconds: 20,

        tags: ["history", "timeline"]
    },

    {
        id: "hist-compare-014",

        question: "Which Age is most closely linked with Celtic tribes and hill forts?",

        options: [
            "Iron Age",
            "Stone Age",
            "Bronze Age",
            "Roman Britain"
        ],

        explanation:
            "Many Celtic tribes lived in hill forts during the Iron Age.",

        difficulty: 2,
        correctAnswer: "Iron Age",
        estimatedSeconds: 20,

        tags: ["history", "iron-age", "celts"]
    },

    {
        id: "hist-compare-015",

        question: "How did life change from the Stone Age to the Bronze Age?",

        options: [
            "People began using bronze tools and farming became more developed.",
            "People stopped making tools.",
            "People invented electricity.",
            "People built railways."
        ],

        explanation:
            "Bronze tools and improved farming changed daily life.",

        difficulty: 2,
        correctAnswer: "People began using bronze tools and farming became more developed.",
        estimatedSeconds: 20,

        tags: ["history", "comparison"]
    },

    {
        id: "hist-compare-016",

        question: "How did life change from the Bronze Age to the Iron Age?",

        options: [
            "People began making stronger iron tools.",
            "People stopped farming.",
            "People forgot how to make tools.",
            "People moved into castles."
        ],

        explanation:
            "Iron tools improved farming, building and everyday life.",

        difficulty: 2,
        correctAnswer: "People began making stronger iron tools.",
        estimatedSeconds: 20,

        tags: ["history", "comparison"]
    },

    {
        id: "hist-compare-017",

        question: "What stayed the same throughout all three Ages?",

        options: [
            "People needed food and shelter.",
            "People used mobile phones.",
            "People travelled by train.",
            "People had electricity."
        ],

        explanation:
            "Although tools changed, people always needed food, homes and clothing.",

        difficulty: 2,
        correctAnswer: "People needed food and shelter.",
        estimatedSeconds: 20,

        tags: ["history", "comparison"]
    },

    {
        id: "hist-compare-018",

        question: "Why do historians divide prehistory into different Ages?",

        options: [
            "Because the materials used for tools changed over time.",
            "Because people changed languages every year.",
            "Because Britain moved location.",
            "Because farming disappeared."
        ],

        explanation:
            "The Ages are named after the main materials used for tools.",

        difficulty: 2,
        correctAnswer: "Because the materials used for tools changed over time.",
        estimatedSeconds: 20,

        tags: ["history", "prehistory"]
    },

    {
        id: "hist-compare-019",

        question: "Which set is in the correct order from oldest to newest?",

        options: [
            "Stone tool, bronze axe, iron sword",
            "Iron sword, stone tool, bronze axe",
            "Bronze axe, iron sword, stone tool",
            "Iron sword, bronze axe, stone tool"
        ],

        explanation:
            "Stone tools came first, followed by bronze and then iron.",

        difficulty: 2,
        correctAnswer: "Stone tool, bronze axe, iron sword",
        estimatedSeconds: 20,

        tags: ["history", "timeline"]
    },

    {
        id: "hist-compare-020",

        question: "Which sentence best describes the Stone, Bronze and Iron Ages?",

        options: [
            "People gradually developed stronger materials and better tools, changing how they lived.",
            "Life never changed during prehistory.",
            "People used modern technology throughout all three Ages.",
            "The Ages happened in the opposite order."
        ],

        explanation:
            "The development of new materials helped improve farming, building and everyday life over thousands of years.",

        difficulty: 2,
        correctAnswer: "People gradually developed stronger materials and better tools, changing how they lived.",
        estimatedSeconds: 20,

        tags: ["history", "stone-age", "bronze-age", "iron-age", "comparison"]
    }

    ]

};