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
        skillId: "conductorsAndInsulators",
        question: "What is a conductor?",

        options: [
            "A material that lets electricity pass through it",
            "A material that stops electricity",
            "A type of battery",
            "A kind of light bulb"
        ],

        explanation:
            "Conductors allow electricity to flow through them.",

        difficulty: 1,
        correctAnswer: "A material that lets electricity pass through it",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "conductors"]
    },

    {
        id: "sci-conductors-002",
        skillId: "conductorsAndInsulators",
        question: "What is an insulator?",

        options: [
            "A material that stops electricity flowing through it",
            "A material that makes electricity",
            "A type of switch",
            "A kind of wire"
        ],

        explanation:
            "Insulators do not allow electricity to flow easily.",

        difficulty: 1,
        correctAnswer: "A material that stops electricity flowing through it",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "insulators"]
    },

    {
        id: "sci-conductors-003",
        skillId: "conductorsAndInsulators",
        question: "Which material is a good electrical conductor?",

        options: [
            "Copper",
            "Plastic",
            "Rubber",
            "Wood"
        ],

        explanation:
            "Copper is a metal and is an excellent conductor of electricity.",

        difficulty: 1,
        correctAnswer: "Copper",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "metals"]
    },

    {
        id: "sci-conductors-004",
        skillId: "conductorsAndInsulators",
        question: "Which material is an insulator?",

        options: [
            "Plastic",
            "Copper",
            "Aluminium",
            "Iron"
        ],

        explanation:
            "Plastic does not let electricity pass through easily.",

        difficulty: 1,
        correctAnswer: "Plastic",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "insulators"]
    },

    {
        id: "sci-conductors-005",
        skillId: "conductorsAndInsulators",
        question: "Most metals are...",

        options: [
            "Good conductors",
            "Good insulators",
            "Waterproof",
            "Transparent"
        ],

        explanation:
            "Most metals allow electricity to flow easily.",

        difficulty: 1,
        correctAnswer: "Good conductors",
        estimatedSeconds: 15,

        tags: ["science", "metals", "conductors"]
    },

    {
        id: "sci-conductors-006",
        skillId: "conductorsAndInsulators",
        question: "Why are electrical wires usually made from copper?",

        options: [
            "Copper is a good conductor.",
            "Copper is soft.",
            "Copper is waterproof.",
            "Copper is magnetic."
        ],

        explanation:
            "Copper carries electricity very well.",

        difficulty: 1,
        correctAnswer: "Copper is a good conductor.",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "wires"]
    },

    {
        id: "sci-conductors-007",
        skillId: "conductorsAndInsulators",
        question: "What covers many electrical wires to help keep people safe?",

        options: [
            "Plastic",
            "Copper",
            "Steel",
            "Aluminium"
        ],

        explanation:
            "Plastic is an insulator that helps prevent electric shocks.",

        difficulty: 1,
        correctAnswer: "Plastic",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-008",
        skillId: "conductorsAndInsulators",
        question: "Which of these is made from metal?",

        options: [
            "Paper clip",
            "Rubber band",
            "Wooden spoon",
            "Plastic ruler"
        ],

        explanation:
            "A paper clip is usually made from steel, which conducts electricity.",

        difficulty: 1,
        correctAnswer: "Paper clip",
        estimatedSeconds: 20,

        tags: ["science", "metals"]
    },

    {
        id: "sci-conductors-009",
        skillId: "conductorsAndInsulators",
        question: "Which material is least likely to conduct electricity?",

        options: [
            "Rubber",
            "Copper",
            "Silver",
            "Iron"
        ],

        explanation:
            "Rubber is a good electrical insulator.",

        difficulty: 1,
        correctAnswer: "Rubber",
        estimatedSeconds: 20,

        tags: ["science", "insulators"]
    },

    {
        id: "sci-conductors-010",
        skillId: "conductorsAndInsulators",
        question: "Which statement is true?",

        options: [
            "Some materials conduct electricity better than others.",
            "All materials conduct electricity equally well.",
            "Only batteries conduct electricity.",
            "Only water conducts electricity."
        ],

        explanation:
            "Different materials have different electrical properties.",

        difficulty: 1,
        correctAnswer: "Some materials conduct electricity better than others.",
        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-conductors-011",
        skillId: "conductorsAndInsulators",
        question: "Why is plastic used to cover electrical wires?",

        options: [
            "It is an insulator that helps protect people.",
            "It carries electricity better than copper.",
            "It makes electricity stronger.",
            "It stores electricity."
        ],

        explanation:
            "Plastic stops electricity reaching your hands.",

        difficulty: 2,
        correctAnswer: "It is an insulator that helps protect people.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-012",
        skillId: "conductorsAndInsulators",
        question: "Which pair contains two conductors?",

        options: [
            "Copper and aluminium",
            "Plastic and rubber",
            "Wood and plastic",
            "Rubber and glass"
        ],

        explanation:
            "Copper and aluminium are both metals and conduct electricity well.",

        difficulty: 2,
        correctAnswer: "Copper and aluminium",
        estimatedSeconds: 20,

        tags: ["science", "conductors"]
    },

    {
        id: "sci-conductors-013",
        skillId: "conductorsAndInsulators",
        question: "Which pair contains two insulators?",

        options: [
            "Plastic and rubber",
            "Copper and steel",
            "Iron and aluminium",
            "Copper and plastic"
        ],

        explanation:
            "Plastic and rubber both stop electricity flowing easily.",

        difficulty: 2,
        correctAnswer: "Plastic and rubber",
        estimatedSeconds: 20,

        tags: ["science", "insulators"]
    },

    {
        id: "sci-conductors-014",
        skillId: "conductorsAndInsulators",
        question: "Why are metals commonly used inside electrical cables?",

        options: [
            "They allow electricity to flow easily.",
            "They stop electricity flowing.",
            "They are transparent.",
            "They are waterproof."
        ],

        explanation:
            "The metal core carries the electrical current.",

        difficulty: 2,
        correctAnswer: "They allow electricity to flow easily.",
        estimatedSeconds: 20,

        tags: ["science", "conductors", "wires"]
    },

    {
        id: "sci-conductors-015",
        skillId: "conductorsAndInsulators",
        question: "Which material would be safest for the handle of an electrical tool?",

        options: [
            "Rubber",
            "Copper",
            "Steel",
            "Aluminium"
        ],

        explanation:
            "Rubber is an insulator that helps protect the user.",

        difficulty: 2,
        correctAnswer: "Rubber",
        estimatedSeconds: 20,

        tags: ["science", "safety", "insulators"]
    },

    {
        id: "sci-conductors-016",
        skillId: "conductorsAndInsulators",
        question: "Why would a plastic spoon not complete an electrical circuit?",

        options: [
            "Plastic is an insulator.",
            "Plastic is a metal.",
            "Plastic stores electricity.",
            "Plastic creates electricity."
        ],

        explanation:
            "Electricity does not flow easily through plastic.",

        difficulty: 2,
        correctAnswer: "Plastic is an insulator.",
        estimatedSeconds: 20,

        tags: ["science", "circuits", "insulators"]
    },

    {
        id: "sci-conductors-017",
        skillId: "conductorsAndInsulators",
        question: "Which object would most likely complete a simple circuit?",

        options: [
            "Metal paper clip",
            "Rubber band",
            "Plastic ruler",
            "Wooden stick"
        ],

        explanation:
            "The metal paper clip conducts electricity.",

        difficulty: 2,
        correctAnswer: "Metal paper clip",
        estimatedSeconds: 20,

        tags: ["science", "circuits", "conductors"]
    },

    {
        id: "sci-conductors-018",
        skillId: "conductorsAndInsulators",
        question: "Why are rubber gloves sometimes used when working with electricity?",

        options: [
            "Rubber is an insulator.",
            "Rubber is a conductor.",
            "Rubber stores electricity.",
            "Rubber produces electricity."
        ],

        explanation:
            "Rubber helps reduce the risk of electric shock.",

        difficulty: 2,
        correctAnswer: "Rubber is an insulator.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "safety"]
    },

    {
        id: "sci-conductors-019",
        skillId: "conductorsAndInsulators",
        question: "What do conductors and insulators have in common?",

        options: [
            "They are both types of materials.",
            "They both stop electricity.",
            "They both allow electricity through equally well.",
            "They are both metals."
        ],

        explanation:
            "Materials can be grouped as conductors or insulators depending on how they carry electricity.",

        difficulty: 2,
        correctAnswer: "They are both types of materials.",
        estimatedSeconds: 20,

        tags: ["science", "materials"]
    },

    {
        id: "sci-conductors-020",
        skillId: "conductorsAndInsulators",
        question: "Which sentence best describes conductors and insulators?",

        options: [
            "Conductors allow electricity to flow, while insulators reduce or stop the flow of electricity.",
            "Conductors stop electricity and insulators carry it.",
            "All materials are conductors.",
            "Only metals are insulators."
        ],

        explanation:
            "Conductors and insulators have different electrical properties that make them useful for different jobs.",

        difficulty: 2,
        correctAnswer: "Conductors allow electricity to flow, while insulators reduce or stop the flow of electricity.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "conductors", "insulators"]
    }

    ]

};