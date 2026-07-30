import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const conductorsAndInsulators: SkillContent = {

    skillId: "conductorsAndInsulators",

    title: "Conductors and Insulators",

    description:
        "Learn which materials allow electricity to pass through them and which materials stop electricity flowing.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-conductors-001",

        question: "What is a conductor?",

        options: [
            "A material that lets electricity pass through it",
            "A material that stops electricity",
            "A type of battery",
            "A kind of light bulb"
        ],

        answer: 0,

        explanation:
            "Conductors allow electricity to flow through them.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "conductors"]
    },

    {
        id: "sci-conductors-002",

        question: "What is an insulator?",

        options: [
            "A material that stops electricity flowing through it",
            "A material that makes electricity",
            "A type of switch",
            "A kind of wire"
        ],

        answer: 0,

        explanation:
            "Insulators do not allow electricity to flow easily.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "insulators"]
    },

    {
        id: "sci-conductors-003",

        question: "Which material is a good electrical conductor?",

        options: [
            "Copper",
            "Plastic",
            "Rubber",
            "Wood"
        ],

        answer: 0,

        explanation:
            "Copper is a metal and is an excellent conductor of electricity.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "metals"]
    },

    {
        id: "sci-conductors-004",

        question: "Which material is an insulator?",

        options: [
            "Plastic",
            "Copper",
            "Aluminium",
            "Iron"
        ],

        answer: 0,

        explanation:
            "Plastic does not let electricity pass through easily.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "insulators"]
    },

    {
        id: "sci-conductors-005",

        question: "Most metals are...",

        options: [
            "Good conductors",
            "Good insulators",
            "Waterproof",
            "Transparent"
        ],

        answer: 0,

        explanation:
            "Most metals allow electricity to flow easily.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "metals", "conductors"]
    },

    {
        id: "sci-conductors-006",

        question: "Why are electrical wires usually made from copper?",

        options: [
            "Copper is a good conductor.",
            "Copper is soft.",
            "Copper is waterproof.",
            "Copper is magnetic."
        ],

        answer: 0,

        explanation:
            "Copper carries electricity very well.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "wires"]
    },

    {
        id: "sci-conductors-007",

        question: "What covers many electrical wires to help keep people safe?",

        options: [
            "Plastic",
            "Copper",
            "Steel",
            "Aluminium"
        ],

        answer: 0,

        explanation:
            "Plastic is an insulator that helps prevent electric shocks.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-008",

        question: "Which of these is made from metal?",

        options: [
            "Paper clip",
            "Rubber band",
            "Wooden spoon",
            "Plastic ruler"
        ],

        answer: 0,

        explanation:
            "A paper clip is usually made from steel, which conducts electricity.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "metals"]
    },

    {
        id: "sci-conductors-009",

        question: "Which material is least likely to conduct electricity?",

        options: [
            "Rubber",
            "Copper",
            "Silver",
            "Iron"
        ],

        answer: 0,

        explanation:
            "Rubber is a good electrical insulator.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "insulators"]
    },

    {
        id: "sci-conductors-010",

        question: "Which statement is true?",

        options: [
            "Some materials conduct electricity better than others.",
            "All materials conduct electricity equally well.",
            "Only batteries conduct electricity.",
            "Only water conducts electricity."
        ],

        answer: 0,

        explanation:
            "Different materials have different electrical properties.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-conductors-011",

        question: "Why is plastic used to cover electrical wires?",

        options: [
            "It is an insulator that helps protect people.",
            "It carries electricity better than copper.",
            "It makes electricity stronger.",
            "It stores electricity."
        ],

        answer: 0,

        explanation:
            "Plastic stops electricity reaching your hands.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-012",

        question: "Which pair contains two conductors?",

        options: [
            "Copper and aluminium",
            "Plastic and rubber",
            "Wood and plastic",
            "Rubber and glass"
        ],

        answer: 0,

        explanation:
            "Copper and aluminium are both metals and conduct electricity well.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "conductors"]
    },

    {
        id: "sci-conductors-013",

        question: "Which pair contains two insulators?",

        options: [
            "Plastic and rubber",
            "Copper and steel",
            "Iron and aluminium",
            "Copper and plastic"
        ],

        answer: 0,

        explanation:
            "Plastic and rubber both stop electricity flowing easily.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "insulators"]
    },

    {
        id: "sci-conductors-014",

        question: "Why are metals commonly used inside electrical cables?",

        options: [
            "They allow electricity to flow easily.",
            "They stop electricity flowing.",
            "They are transparent.",
            "They are waterproof."
        ],

        answer: 0,

        explanation:
            "The metal core carries the electrical current.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "conductors", "wires"]
    },

    {
        id: "sci-conductors-015",

        question: "Which material would be safest for the handle of an electrical tool?",

        options: [
            "Rubber",
            "Copper",
            "Steel",
            "Aluminium"
        ],

        answer: 0,

        explanation:
            "Rubber is an insulator that helps protect the user.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "safety", "insulators"]
    },

    {
        id: "sci-conductors-016",

        question: "Why would a plastic spoon not complete an electrical circuit?",

        options: [
            "Plastic is an insulator.",
            "Plastic is a metal.",
            "Plastic stores electricity.",
            "Plastic creates electricity."
        ],

        answer: 0,

        explanation:
            "Electricity does not flow easily through plastic.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits", "insulators"]
    },

    {
        id: "sci-conductors-017",

        question: "Which object would most likely complete a simple circuit?",

        options: [
            "Metal paper clip",
            "Rubber band",
            "Plastic ruler",
            "Wooden stick"
        ],

        answer: 0,

        explanation:
            "The metal paper clip conducts electricity.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits", "conductors"]
    },

    {
        id: "sci-conductors-018",

        question: "Why are rubber gloves sometimes used when working with electricity?",

        options: [
            "Rubber is an insulator.",
            "Rubber is a conductor.",
            "Rubber stores electricity.",
            "Rubber produces electricity."
        ],

        answer: 0,

        explanation:
            "Rubber helps reduce the risk of electric shock.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-019",

        question: "What do conductors and insulators have in common?",

        options: [
            "They are both types of materials.",
            "They both stop electricity.",
            "They both allow electricity through equally well.",
            "They are both metals."
        ],

        answer: 0,

        explanation:
            "Materials can be grouped as conductors or insulators depending on how they carry electricity.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "materials"]
    },

    {
        id: "sci-conductors-020",

        question: "Which sentence best describes conductors and insulators?",

        options: [
            "Conductors allow electricity to flow, while insulators reduce or stop the flow of electricity.",
            "Conductors stop electricity and insulators carry it.",
            "All materials are conductors.",
            "Only metals are insulators."
        ],

        answer: 0,

        explanation:
            "Conductors and insulators have different electrical properties that make them useful for different jobs.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "conductors", "insulators"]
    }

    ]

};