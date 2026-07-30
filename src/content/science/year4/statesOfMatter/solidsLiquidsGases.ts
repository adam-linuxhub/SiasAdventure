import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const solidsLiquidsGases: SkillContent = {

    skillId: "solidsLiquidsGases",

    title: "Solids, Liquids and Gases",

    description:
        "Learn how to identify solids, liquids and gases by their properties and compare how they behave.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-states-001",

        question: "Which state of matter has a fixed shape?",

        options: [
            "Solid",
            "Liquid",
            "Gas",
            "Steam"
        ],

        answer: 0,

        explanation:
            "Solids keep their own shape unless a force changes them.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "solids"]
    },

    {
        id: "sci-states-002",

        question: "Which state of matter takes the shape of its container but keeps the same volume?",

        options: [
            "Liquid",
            "Solid",
            "Gas",
            "Ice"
        ],

        answer: 0,

        explanation:
            "Liquids flow and take the shape of their container.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "liquids"]
    },

    {
        id: "sci-states-003",

        question: "Which state of matter spreads out to fill all the space available?",

        options: [
            "Gas",
            "Solid",
            "Liquid",
            "Rock"
        ],

        answer: 0,

        explanation:
            "Gases expand to fill their container.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "gases"]
    },

    {
        id: "sci-states-004",

        question: "Which of these is a solid?",

        options: [
            "Brick",
            "Milk",
            "Air",
            "Steam"
        ],

        answer: 0,

        explanation:
            "A brick keeps its own shape, so it is a solid.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-005",

        question: "Which of these is a liquid?",

        options: [
            "Orange juice",
            "Wood",
            "Smoke",
            "Glass marble"
        ],

        answer: 0,

        explanation:
            "Orange juice flows and takes the shape of its container.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-006",

        question: "Which of these is a gas?",

        options: [
            "Oxygen",
            "Ice",
            "Butter",
            "Water"
        ],

        answer: 0,

        explanation:
            "Oxygen is a gas at room temperature.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-007",

        question: "What happens when you pour water into a cup?",

        options: [
            "It takes the shape of the cup.",
            "It keeps its own shape.",
            "It fills the whole room.",
            "It becomes a solid."
        ],

        answer: 0,

        explanation:
            "Liquids change shape to fit their container.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-008",

        question: "Which state of matter can usually be poured?",

        options: [
            "Liquid",
            "Solid",
            "Gas",
            "Metal"
        ],

        answer: 0,

        explanation:
            "Liquids flow and can be poured.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-009",

        question: "Which state of matter is air?",

        options: [
            "Gas",
            "Solid",
            "Liquid",
            "Ice"
        ],

       answer: 0,

        explanation:
            "Air is made of several gases.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-010",

        question: "Which statement is true?",

        options: [
            "Solids usually keep their own shape.",
            "Liquids always keep their own shape.",
            "Gases have a fixed shape.",
            "Liquids fill the whole room."
        ],

        answer: 0,

        explanation:
            "A solid has a fixed shape unless it is changed by a force.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-states-011",

        question: "Why does water change shape when poured into different containers?",

        options: [
            "It is a liquid.",
            "It is a solid.",
            "It is a gas.",
            "It is melting."
        ],

        answer: 0,

        explanation:
            "Liquids do not have a fixed shape.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-012",

        question: "Why does a balloon get bigger when you blow into it?",

        options: [
            "The gas inside spreads out.",
            "The gas becomes a liquid.",
            "The balloon becomes a solid.",
            "The air disappears."
        ],

        answer: 0,

        explanation:
            "Gases spread out to fill the space available.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-013",

        question: "Which list contains only solids?",

        options: [
            "Stone, pencil, spoon",
            "Milk, juice, water",
            "Air, oxygen, helium",
            "Steam, water, ice"
        ],

        answer: 0,

        explanation:
            "Each item in the first list is a solid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-014",

        question: "Which list contains only liquids?",

        options: [
            "Milk, oil, water",
            "Air, oxygen, helium",
            "Stone, wood, brick",
            "Ice, steam, water vapour"
        ],

        answer: 0,

        explanation:
            "Milk, oil and water are all liquids.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-015",

        question: "Which list contains only gases?",

        options: [
            "Oxygen, helium, carbon dioxide",
            "Water, milk, oil",
            "Stone, brick, glass",
            "Ice, water, steam"
        ],

        answer: 0,

        explanation:
            "All three are gases at room temperature.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-016",

        question: "Which property belongs to gases?",

        options: [
            "They spread out to fill their container.",
            "They always keep the same shape.",
            "They cannot move.",
            "They cannot be compressed."
        ],

        answer: 0,

        explanation:
            "Gases spread throughout the available space.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-017",

        question: "A cube of ice is moved from one plate to another. What happens?",

        options: [
            "It keeps the same shape.",
            "It takes the shape of the new plate.",
            "It fills the room.",
            "It becomes a gas immediately."
        ],

        answer: 0,

        explanation:
            "Ice is a solid, so it keeps its shape.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-018",

        question: "Which statement compares solids and liquids correctly?",

        options: [
            "Both have a fixed volume, but only solids have a fixed shape.",
            "Both fill the whole container.",
            "Only liquids have volume.",
            "Solids always flow."
        ],

        answer: 0,

        explanation:
            "Liquids keep their volume but change shape.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-states-019",

        question: "Why is steam able to spread through a room?",

        options: [
            "It is a gas.",
            "It is a solid.",
            "It is frozen.",
            "It has no particles."
        ],

        answer: 0,

        explanation:
            "Gases spread out and fill the available space.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-020",

        question: "Which sentence best describes the three states of matter?",

        options: [
            "Solids keep their shape, liquids flow and gases spread out to fill their container.",
            "Solids and liquids always behave the same way.",
            "Only gases have volume.",
            "Liquids and gases keep a fixed shape."
        ],

        answer: 0,

        explanation:
            "The three states of matter have different properties that help us identify them.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter", "solids", "liquids", "gases"]
    }

    ]

};