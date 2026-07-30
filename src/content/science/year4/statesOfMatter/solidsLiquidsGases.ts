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
        skillId: "solidsLiquidsGases",
        question: "Which state of matter has a fixed shape?",

        options: [
            "Solid",
            "Liquid",
            "Gas",
            "Steam"
        ],

        explanation:
            "Solids keep their own shape unless a force changes them.",

        difficulty: 1,
        correctAnswer: "Solid",
        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "solids"]
    },

    {
        id: "sci-states-002",
        skillId: "solidsLiquidsGases",
        question: "Which state of matter takes the shape of its container but keeps the same volume?",

        options: [
            "Liquid",
            "Solid",
            "Gas",
            "Ice"
        ],

        explanation:
            "Liquids flow and take the shape of their container.",

        difficulty: 1,
        correctAnswer: "Liquid",
        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "liquids"]
    },

    {
        id: "sci-states-003",
        skillId: "solidsLiquidsGases",
        question: "Which state of matter spreads out to fill all the space available?",

        options: [
            "Gas",
            "Solid",
            "Liquid",
            "Rock"
        ],

        explanation:
            "Gases expand to fill their container.",

        difficulty: 1,
        correctAnswer: "Gas",
        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "gases"]
    },

    {
        id: "sci-states-004",
        skillId: "solidsLiquidsGases",
        question: "Which of these is a solid?",

        options: [
            "Brick",
            "Milk",
            "Air",
            "Steam"
        ],

        explanation:
            "A brick keeps its own shape, so it is a solid.",

        difficulty: 1,
        correctAnswer: "Brick",
        estimatedSeconds: 15,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-005",
        skillId: "solidsLiquidsGases",
        question: "Which of these is a liquid?",

        options: [
            "Orange juice",
            "Wood",
            "Smoke",
            "Glass marble"
        ],

        explanation:
            "Orange juice flows and takes the shape of its container.",

        difficulty: 1,
        correctAnswer: "Orange juice",
        estimatedSeconds: 15,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-006",
        skillId: "solidsLiquidsGases",
        question: "Which of these is a gas?",

        options: [
            "Oxygen",
            "Ice",
            "Butter",
            "Water"
        ],

        explanation:
            "Oxygen is a gas at room temperature.",

        difficulty: 1,
        correctAnswer: "Oxygen",
        estimatedSeconds: 15,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-007",
        skillId: "solidsLiquidsGases",
        question: "What happens when you pour water into a cup?",

        options: [
            "It takes the shape of the cup.",
            "It keeps its own shape.",
            "It fills the whole room.",
            "It becomes a solid."
        ],

        explanation:
            "Liquids change shape to fit their container.",

        difficulty: 1,
        correctAnswer: "It takes the shape of the cup.",
        estimatedSeconds: 15,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-008",
        skillId: "solidsLiquidsGases",
        question: "Which state of matter can usually be poured?",

        options: [
            "Liquid",
            "Solid",
            "Gas",
            "Metal"
        ],

        explanation:
            "Liquids flow and can be poured.",

        difficulty: 1,
        correctAnswer: "Liquid",
        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-009",
        skillId: "solidsLiquidsGases",
        question: "Which state of matter is air?",

        options: [
            "Gas",
            "Solid",
            "Liquid",
            "Ice"
        ],

        explanation:
            "Air is made of several gases.",

        difficulty: 1,
        correctAnswer: "Gas",
        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-010",
        skillId: "solidsLiquidsGases",
        question: "Which statement is true?",

        options: [
            "Solids usually keep their own shape.",
            "Liquids always keep their own shape.",
            "Gases have a fixed shape.",
            "Liquids fill the whole room."
        ],

        explanation:
            "A solid has a fixed shape unless it is changed by a force.",

        difficulty: 1,
        correctAnswer: "Solids usually keep their own shape.",
        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-states-011",
        skillId: "solidsLiquidsGases",
        question: "Why does water change shape when poured into different containers?",

        options: [
            "It is a liquid.",
            "It is a solid.",
            "It is a gas.",
            "It is melting."
        ],

        explanation:
            "Liquids do not have a fixed shape.",

        difficulty: 2,
        correctAnswer: "It is a liquid.",
        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-012",
        skillId: "solidsLiquidsGases",
        question: "Why does a balloon get bigger when you blow into it?",

        options: [
            "The gas inside spreads out.",
            "The gas becomes a liquid.",
            "The balloon becomes a solid.",
            "The air disappears."
        ],

        explanation:
            "Gases spread out to fill the space available.",

        difficulty: 2,
        correctAnswer: "The gas inside spreads out.",
        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-013",
        skillId: "solidsLiquidsGases",
        question: "Which list contains only solids?",

        options: [
            "Stone, pencil, spoon",
            "Milk, juice, water",
            "Air, oxygen, helium",
            "Steam, water, ice"
        ],

        explanation:
            "Each item in the first list is a solid.",

        difficulty: 2,
        correctAnswer: "Stone, pencil, spoon",
        estimatedSeconds: 20,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-014",
        skillId: "solidsLiquidsGases",
        question: "Which list contains only liquids?",

        options: [
            "Milk, oil, water",
            "Air, oxygen, helium",
            "Stone, wood, brick",
            "Ice, steam, water vapour"
        ],

        explanation:
            "Milk, oil and water are all liquids.",

        difficulty: 2,
        correctAnswer: "Milk, oil, water",
        estimatedSeconds: 20,

        tags: ["science", "liquids"]
    },

    {
        id: "sci-states-015",
        skillId: "solidsLiquidsGases",
        question: "Which list contains only gases?",

        options: [
            "Oxygen, helium, carbon dioxide",
            "Water, milk, oil",
            "Stone, brick, glass",
            "Ice, water, steam"
        ],

        explanation:
            "All three are gases at room temperature.",

        difficulty: 2,
        correctAnswer: "Oxygen, helium, carbon dioxide",
        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-016",
        skillId: "solidsLiquidsGases",
        question: "Which property belongs to gases?",

        options: [
            "They spread out to fill their container.",
            "They always keep the same shape.",
            "They cannot move.",
            "They cannot be compressed."
        ],

        explanation:
            "Gases spread throughout the available space.",

        difficulty: 2,
        correctAnswer: "They spread out to fill their container.",
        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-017",
        skillId: "solidsLiquidsGases",
        question: "A cube of ice is moved from one plate to another. What happens?",

        options: [
            "It keeps the same shape.",
            "It takes the shape of the new plate.",
            "It fills the room.",
            "It becomes a gas immediately."
        ],

        explanation:
            "Ice is a solid, so it keeps its shape.",

        difficulty: 2,
        correctAnswer: "It keeps the same shape.",
        estimatedSeconds: 20,

        tags: ["science", "solids"]
    },

    {
        id: "sci-states-018",
        skillId: "solidsLiquidsGases",
        question: "Which statement compares solids and liquids correctly?",

        options: [
            "Both have a fixed volume, but only solids have a fixed shape.",
            "Both fill the whole container.",
            "Only liquids have volume.",
            "Solids always flow."
        ],

        explanation:
            "Liquids keep their volume but change shape.",

        difficulty: 2,
        correctAnswer: "Both have a fixed volume, but only solids have a fixed shape.",
        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-states-019",
        skillId: "solidsLiquidsGases",
        question: "Why is steam able to spread through a room?",

        options: [
            "It is a gas.",
            "It is a solid.",
            "It is frozen.",
            "It has no particles."
        ],

        explanation:
            "Gases spread out and fill the available space.",

        difficulty: 2,
        correctAnswer: "It is a gas.",
        estimatedSeconds: 20,

        tags: ["science", "gases"]
    },

    {
        id: "sci-states-020",
        skillId: "solidsLiquidsGases",
        question: "Which sentence best describes the three states of matter?",

        options: [
            "Solids keep their shape, liquids flow and gases spread out to fill their container.",
            "Solids and liquids always behave the same way.",
            "Only gases have volume.",
            "Liquids and gases keep a fixed shape."
        ],

        explanation:
            "The three states of matter have different properties that help us identify them.",

        difficulty: 2,
        correctAnswer: "Solids keep their shape, liquids flow and gases spread out to fill their container.",
        estimatedSeconds: 20,

        tags: ["science", "states-of-matter", "solids", "liquids", "gases"]
    }

    ]

};