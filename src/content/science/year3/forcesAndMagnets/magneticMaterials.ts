import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const magneticMaterials: SkillContent = {

    skillId: "magneticMaterials",

    title: "Magnetic Materials",

    description:
        "Learn which materials are magnetic and investigate which objects are attracted to magnets.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-magnetic-materials-001",
        skillId: "magneticMaterials",
        question: "What does a magnet do?",
        stage: "recognise",
        options: [
            "It attracts some materials",
            "It creates light",
            "It makes objects heavier",
            "It melts metal"
        ],

        explanation:
            "Magnets attract certain materials such as iron and steel.",

        difficulty: 1,
        correctAnswer: "It attracts some materials",
        estimatedSeconds: 15,

        tags: ["science", "forces", "magnets"]
    },

    {
        id: "sci-magnetic-materials-002",
        skillId: "magneticMaterials",
        question: "Which material is magnetic?",
        stage: "recognise",
        options: [
            "Iron",
            "Wood",
            "Plastic",
            "Glass"
        ],

        explanation:
            "Iron is one of the materials that magnets attract.",

        difficulty: 1,
        correctAnswer: "Iron",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-003",
        skillId: "magneticMaterials",
        question: "Which object would a magnet attract?",
        stage: "recognise",
        options: [
            "An iron nail",
            "A wooden spoon",
            "A plastic ruler",
            "A rubber ball"
        ],

        explanation:
            "Iron nails are attracted to magnets.",

        difficulty: 1,
        correctAnswer: "An iron nail",
        estimatedSeconds: 15,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnetic-materials-004",
        skillId: "magneticMaterials",
        question: "Which material is NOT magnetic?",
        stage: "recognise",
        options: [
            "Plastic",
            "Iron",
            "Steel",
            "Nickel"
        ],

        explanation:
            "Plastic is not attracted to magnets.",

        difficulty: 1,
        correctAnswer: "Plastic",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-005",
        skillId: "magneticMaterials",
        question: "Which metal is magnetic?",
        stage: "recognise",
        options: [
            "Steel",
            "Aluminium",
            "Copper",
            "Gold"
        ],

        explanation:
            "Steel contains iron, so it is usually magnetic.",

        difficulty: 1,
        correctAnswer: "Steel",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "steel"]
    },

    {
        id: "sci-magnetic-materials-006",
        skillId: "magneticMaterials",
        question: "Which classroom object is likely to be magnetic?",
        stage: "recognise",
        options: [
            "A paper clip",
            "An eraser",
            "A wooden pencil",
            "A plastic folder"
        ],

        explanation:
            "Most paper clips are made from steel.",

        difficulty: 1,
        correctAnswer: "A paper clip",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "everyday"]
    },

    {
        id: "sci-magnetic-materials-007",
        skillId: "magneticMaterials",
        question: "Which material is most likely to be attracted to a magnet?",
        stage: "recognise",
        options: [
            "Nickel",
            "Paper",
            "Glass",
            "Fabric"
        ],

        explanation:
            "Nickel is a magnetic metal.",

        difficulty: 1,
        correctAnswer: "Nickel",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-008",
        skillId: "magneticMaterials",
        question: "Can magnets attract wood?",
        stage: "recognise",
        options: [
            "No",
            "Yes",
            "Only if it is wet",
            "Only if it is painted"
        ],

        explanation:
            "Wood is not a magnetic material.",

        difficulty: 1,
        correctAnswer: "No",
        estimatedSeconds: 20,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnetic-materials-009",
        skillId: "magneticMaterials",
        question: "Which object is least likely to be attracted to a magnet?",
        stage: "recognise",
        options: [
            "A rubber band",
            "A steel screw",
            "An iron bolt",
            "A paper clip"
        ],

        explanation:
            "Rubber is not magnetic.",

        difficulty: 1,
        correctAnswer: "A rubber band",
        estimatedSeconds: 20,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnetic-materials-010",
        skillId: "magneticMaterials",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Not all metals are magnetic.",
            "Every metal is magnetic.",
            "Only plastic is magnetic.",
            "Magnets attract everything."
        ],

        explanation:
            "Only certain metals, such as iron, steel and nickel, are magnetic.",

        difficulty: 1,
        correctAnswer: "Not all metals are magnetic.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-011",
        skillId: "magneticMaterials",
        question: "A magnet attracts an object. What is the object most likely made from?",
        stage: "recognise",
        options: [
            "Iron",
            "Wood",
            "Glass",
            "Paper"
        ],

        explanation:
            "Magnets attract magnetic materials such as iron.",

        difficulty: 2,
        correctAnswer: "Iron",
        estimatedSeconds: 20,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnetic-materials-012",
        skillId: "magneticMaterials",
        question: "Why doesn't a magnet attract a plastic bottle?",
        stage: "recognise",
        options: [
            "Plastic is not magnetic.",
            "The bottle is too light.",
            "Plastic is too smooth.",
            "The magnet is broken."
        ],

        explanation:
            "Magnets only attract certain materials.",

        difficulty: 2,
        correctAnswer: "Plastic is not magnetic.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-013",
        skillId: "magneticMaterials",
        question: "Which investigation would help you find magnetic materials?",
        stage: "recognise",
        options: [
            "Test different objects with a magnet",
            "Measure their height",
            "Weigh every object",
            "Paint each object"
        ],

        explanation:
            "Testing objects with a magnet is a simple fair test.",

        difficulty: 2,
        correctAnswer: "Test different objects with a magnet",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "magnets"]
    },

    {
        id: "sci-magnetic-materials-014",
        skillId: "magneticMaterials",
        question: "Which pair are both magnetic?",
        stage: "recognise",
        options: [
            "Iron and steel",
            "Plastic and wood",
            "Glass and paper",
            "Rubber and fabric"
        ],

        explanation:
            "Iron and steel are both magnetic materials.",

        difficulty: 2,
        correctAnswer: "Iron and steel",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-015",
        skillId: "magneticMaterials",
        question: "A magnet attracts one spoon but not another. What is the best explanation?",
        stage: "recognise",
        options: [
            "They are made from different materials",
            "One spoon is bigger",
            "One spoon is cleaner",
            "One spoon is newer"
        ],

        explanation:
            "Some metals are magnetic, while others are not.",

        difficulty: 2,
        correctAnswer: "They are made from different materials",
        estimatedSeconds: 20,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnetic-materials-016",
        skillId: "magneticMaterials",
        question: "Which material should you choose to make a fridge magnet stick?",
        stage: "recognise",
        options: [
            "Steel",
            "Plastic",
            "Wood",
            "Glass"
        ],

        explanation:
            "Steel is attracted to magnets.",

        difficulty: 2,
        correctAnswer: "Steel",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "everyday"]
    },

    {
        id: "sci-magnetic-materials-017",
        skillId: "magneticMaterials",
        question: "Why do magnets attract some objects but not others?",
        stage: "recognise",
        options: [
            "Only some materials are magnetic",
            "Only large objects are magnetic",
            "Only heavy objects are magnetic",
            "Magnets choose randomly"
        ],

        explanation:
            "Magnets attract only certain materials.",

        difficulty: 2,
        correctAnswer: "Only some materials are magnetic",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-018",
        skillId: "magneticMaterials",
        question: "Which object would be best for testing a magnet?",
        stage: "recognise",
        options: [
            "A steel paper clip",
            "A sponge",
            "A cardboard tube",
            "A cotton sock"
        ],

        explanation:
            "Steel paper clips are reliably attracted to magnets.",

        difficulty: 2,
        correctAnswer: "A steel paper clip",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "investigation"]
    },

    {
        id: "sci-magnetic-materials-019",
        skillId: "magneticMaterials",
        question: "Which material would NOT be suitable for making a magnetic toy?",
        stage: "recognise",
        options: [
            "Wood",
            "Iron",
            "Steel",
            "Nickel"
        ],

        explanation:
            "Wood is not attracted to magnets.",

        difficulty: 2,
        correctAnswer: "Wood",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnetic-materials-020",
        skillId: "magneticMaterials",
        question: "Which sentence best describes magnetic materials?",
        stage: "recognise",
        options: [
            "Magnetic materials are attracted to magnets.",
            "All materials are magnetic.",
            "Magnets attract every object.",
            "Only plastic is magnetic."
        ],

        explanation:
            "Materials such as iron, steel and nickel are magnetic because they are attracted to magnets.",

        difficulty: 2,
        correctAnswer: "Magnetic materials are attracted to magnets.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    }

    ]

};