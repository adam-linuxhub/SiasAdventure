import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const partsOfAPlant: SkillContent = {

    skillId: "parts-of-a-plant",

    title: "Parts of a Plant",

    description:
        "Learn the names and jobs of the different parts of flowering plants.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-plant-parts-001",

        question: "Which part of a plant grows underground?",

        options: [
            "Roots",
            "Flower",
            "Leaf",
            "Stem"
        ],

        explanation:
            "Roots usually grow underground and hold the plant in the soil.",

        difficulty: 1,
        correctAnswer: "Roots",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-002",

        question: "Which part of a plant usually grows above the ground and supports the plant?",

        options: [
            "Stem",
            "Root",
            "Flower",
            "Seed"
        ],

        explanation:
            "The stem supports the plant and holds up the leaves and flowers.",

        difficulty: 1,
        correctAnswer: "Stem",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-003",

        question: "Which part of a plant makes food using sunlight?",

        options: [
            "Leaves",
            "Roots",
            "Stem",
            "Flower"
        ],

        explanation:
            "Leaves use sunlight to make food for the plant.",

        difficulty: 1,
        correctAnswer: "Leaves",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-004",

        question: "Which part of a plant often has colourful petals?",

        options: [
            "Flower",
            "Root",
            "Stem",
            "Leaf"
        ],

        explanation:
            "Flowers often have colourful petals that help attract insects.",

        difficulty: 1,
        correctAnswer: "Flower",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-parts-005",

        question: "Which part of a plant can grow into a new plant?",

        options: [
            "Seed",
            "Leaf",
            "Stem",
            "Root"
        ],

        explanation:
            "A seed can grow into a new plant when it has the right conditions.",

        difficulty: 1,
        correctAnswer: "Seed",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-parts-006",

        question: "What is the main job of roots?",

        options: [
            "Hold the plant in the ground and absorb water",
            "Make seeds",
            "Catch insects",
            "Produce fruit"
        ],

        explanation:
            "Roots anchor the plant and take in water and minerals from the soil.",

        difficulty: 1,
        correctAnswer: "Hold the plant in the ground and absorb water",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-007",

        question: "What is the main job of the stem?",

        options: [
            "Support the plant and carry water",
            "Make seeds",
            "Grow underground",
            "Catch rain"
        ],

        explanation:
            "The stem supports the plant and carries water and nutrients around it.",

        difficulty: 1,
        correctAnswer: "Support the plant and carry water",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-008",

        question: "What is the main job of leaves?",

        options: [
            "Make food for the plant",
            "Hold the plant in the soil",
            "Produce seeds",
            "Absorb water from the ground"
        ],

        explanation:
            "Leaves use sunlight, air and water to make food for the plant.",

        difficulty: 1,
        correctAnswer: "Make food for the plant",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-009",

        question: "What is the main job of flowers?",

        options: [
            "Help the plant make seeds",
            "Hold the plant upright",
            "Absorb water",
            "Store food"
        ],

        explanation:
            "Flowers help plants reproduce by making seeds.",

        difficulty: 1,
        correctAnswer: "Help the plant make seeds",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-parts-010",

        question: "Which part of the plant usually absorbs water from the soil?",

        options: [
            "Roots",
            "Leaves",
            "Flowers",
            "Stem"
        ],

        explanation:
            "Roots absorb water and minerals from the soil.",

        difficulty: 1,
        correctAnswer: "Roots",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-011",

        question: "Which part carries water from the roots to the leaves?",

        options: [
            "Stem",
            "Flower",
            "Seed",
            "Petal"
        ],

        explanation:
            "The stem carries water from the roots to the rest of the plant.",

        difficulty: 2,
        correctAnswer: "Stem",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-012",

        question: "Which part uses sunlight to make food?",

        options: [
            "Leaves",
            "Roots",
            "Seeds",
            "Stem"
        ],

        explanation:
            "Leaves capture sunlight and use it to make food for the plant.",

        difficulty: 2,
        correctAnswer: "Leaves",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-013",

        question: "Which plant part often attracts bees and butterflies?",

        options: [
            "Flower",
            "Root",
            "Stem",
            "Seed"
        ],

        explanation:
            "Bright flowers attract insects that help pollinate the plant.",

        difficulty: 2,
        correctAnswer: "Flower",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "flowers",
            "pollination"
        ]
    },

    {
        id: "sci-plant-parts-014",

        question: "Which part of the plant grows into a new plant after germination?",

        options: [
            "Seed",
            "Leaf",
            "Stem",
            "Flower"
        ],

        explanation:
            "A seed begins to grow during germination and develops into a new plant.",

        difficulty: 2,
        correctAnswer: "Seed",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seeds",
            "germination"
        ]
    },

    {
        id: "sci-plant-parts-015",

        question: "Which part of the plant is usually found below the soil?",

        options: [
            "Roots",
            "Leaves",
            "Flowers",
            "Stem"
        ],

        explanation:
            "Roots grow below the soil to anchor the plant and absorb water.",

        difficulty: 2,
        correctAnswer: "Roots",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },
        {
        id: "sci-plant-parts-016",

        question: "Which part of a plant helps keep it firmly in the ground?",

        options: [
            "Roots",
            "Leaves",
            "Flowers",
            "Seeds"
        ],

        explanation:
            "Roots anchor the plant firmly in the soil so it does not fall over easily.",

        difficulty: 2,
            correctAnswer: "Roots",
            estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-017",

        question: "Which part of a plant supports the leaves and flowers?",

        options: [
            "Stem",
            "Root",
            "Seed",
            "Petal"
        ],

        explanation:
            "The stem supports the plant and holds the leaves and flowers up towards the sunlight.",

        difficulty: 2,
        correctAnswer: "Stem",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-018",

        question: "Why do plants need leaves?",

        options: [
            "To make food",
            "To absorb water from the soil",
            "To grow underground",
            "To make roots"
        ],

        explanation:
            "Leaves use sunlight to make food that helps the plant grow.",

        difficulty: 2,
        correctAnswer: "To make food",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-019",

        question: "Why do many flowers have brightly coloured petals?",

        options: [
            "To attract insects",
            "To absorb water",
            "To hold up the plant",
            "To grow underground"
        ],

        explanation:
            "Brightly coloured petals attract insects such as bees and butterflies.",

        difficulty: 2,
        correctAnswer: "To attract insects",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "flowers",
            "pollination"
        ]
    },

    {
        id: "sci-plant-parts-020",

        question: "What grows into a new plant?",

        options: [
            "A seed",
            "A leaf",
            "A root",
            "A stem"
        ],

        explanation:
            "Seeds contain the tiny new plant that begins growing during germination.",

        difficulty: 2,
        correctAnswer: "A seed",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-parts-021",

        question: "Which plant part absorbs minerals as well as water?",

        options: [
            "Roots",
            "Flowers",
            "Leaves",
            "Seeds"
        ],

        explanation:
            "Roots absorb water and useful minerals from the soil.",

        difficulty: 3,
        correctAnswer: "Roots",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-022",

        question: "Which part carries water from the roots to the leaves and flowers?",

        options: [
            "Stem",
            "Flower",
            "Leaf",
            "Seed"
        ],

        explanation:
            "The stem transports water and nutrients around the plant.",

        difficulty: 3,
        correctAnswer: "Stem",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-023",

        question: "Which part of a plant is usually green?",

        options: [
            "Leaves",
            "Roots",
            "Seeds",
            "Petals"
        ],

        explanation:
            "Most leaves are green because they contain chlorophyll, which helps them make food.",

        difficulty: 3,
        correctAnswer: "Leaves",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-024",

        question: "Which part usually develops into seeds after pollination?",

        options: [
            "Flower",
            "Leaf",
            "Root",
            "Stem"
        ],

        explanation:
            "Flowers produce seeds after successful pollination and fertilisation.",

        difficulty: 3,
        correctAnswer: "Flower",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "flowers",
            "seeds"
        ]
    },

    {
        id: "sci-plant-parts-025",

        question: "Which part of a plant starts growing first during germination?",

        options: [
            "Root",
            "Flower",
            "Leaf",
            "Petal"
        ],

        explanation:
            "The first root grows down into the soil to absorb water and anchor the young plant.",

        difficulty: 3,
        correctAnswer: "Root",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "roots",
            "germination"
        ]
    },

    {
        id: "sci-plant-parts-026",

        question: "Lucy says, 'Leaves absorb water from the soil.' Is she correct?",

        options: [
            "No, roots absorb water from the soil.",
            "Yes, leaves absorb water from the soil.",
            "No, flowers absorb water.",
            "No, seeds absorb water."
        ],

        explanation:
            "Roots, not leaves, absorb water from the soil.",

        difficulty: 3,
        correctAnswer: "No, roots absorb water from the soil.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "roots",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-027",

        question: "Amir says, 'The stem helps hold the plant upright.' Is he correct?",

        options: [
            "Yes",
            "No",
            "Only at night",
            "Only when it rains"
        ],

        explanation:
            "The stem supports the plant and helps keep it upright.",

        difficulty: 3,
        correctAnswer: "Yes",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-028",

        question: "Which two plant parts work together to provide water and food for the plant?",

        options: [
            "Roots and leaves",
            "Flowers and seeds",
            "Flowers and petals",
            "Seeds and roots"
        ],

        explanation:
            "Roots absorb water while leaves use water and sunlight to make food.",

        difficulty: 3,
        correctAnswer: "Roots and leaves",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "roots",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-029",

        question: "Which plant part usually grows towards the light?",

        options: [
            "Stem",
            "Root",
            "Seed",
            "Soil"
        ],

        explanation:
            "The stem grows upwards towards the light, carrying the leaves with it.",

        difficulty: 3,
        correctAnswer: "Stem",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-030",

        question: "Which statement is correct?",

        options: [
            "Roots absorb water, stems support the plant, leaves make food and flowers help produce seeds.",
            "Leaves absorb water, flowers make food and roots grow in the air.",
            "Seeds support the plant and stems make food.",
            "Flowers absorb water and roots attract insects."
        ],

        explanation:
            "Each part of a plant has its own important job that helps the whole plant survive.",

        difficulty: 3,
        correctAnswer: "Roots absorb water, stems support the plant, leaves make food and flowers help produce seeds.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "plant-parts"
        ]
    },
        {
        id: "sci-plant-parts-031",

        question: "Which part of a plant keeps it firmly anchored in the soil?",

        options: [
            "Roots",
            "Leaves",
            "Flowers",
            "Seeds"
        ],

        explanation:
            "Roots anchor the plant in the ground so it can grow upright.",

        difficulty: 3,
            correctAnswer: "Roots",
            estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-032",

        question: "Which part of a plant carries water from the roots to the leaves?",

        options: [
            "Stem",
            "Flower",
            "Seed",
            "Petal"
        ],

        explanation:
            "The stem carries water and nutrients throughout the plant.",

        difficulty: 3,
        correctAnswer: "Stem",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-033",

        question: "Which part of a plant needs sunlight to make food?",

        options: [
            "Leaves",
            "Roots",
            "Stem",
            "Flower"
        ],

        explanation:
            "Leaves use sunlight, water and carbon dioxide to make food for the plant.",

        difficulty: 3,
        correctAnswer: "Leaves",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-034",

        question: "Which part of a flowering plant usually produces seeds?",

        options: [
            "Flower",
            "Leaf",
            "Root",
            "Stem"
        ],

        explanation:
            "Flowers produce seeds after pollination and fertilisation.",

        difficulty: 3,
        correctAnswer: "Flower",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-parts-035",

        question: "Which statement about seeds is true?",

        options: [
            "Seeds can grow into new plants.",
            "Seeds absorb sunlight to make food.",
            "Seeds hold the plant in the soil.",
            "Seeds carry water around the plant."
        ],

        explanation:
            "Seeds contain a tiny young plant that can grow when conditions are right.",

        difficulty: 3,
        correctAnswer: "Seeds can grow into new plants.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-parts-036",

        question: "Which plant part is most important for absorbing water?",

        options: [
            "Roots",
            "Leaves",
            "Flowers",
            "Petals"
        ],

        explanation:
            "Roots absorb water and minerals from the soil.",

        difficulty: 4,
        correctAnswer: "Roots",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-037",

        question: "Which plant part holds the leaves up to the sunlight?",

        options: [
            "Stem",
            "Root",
            "Seed",
            "Flower"
        ],

        explanation:
            "The stem lifts the leaves towards the light so they can make food.",

        difficulty: 4,
        correctAnswer: "Stem",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-038",

        question: "Which plant part usually contains chlorophyll?",

        options: [
            "Leaves",
            "Roots",
            "Seeds",
            "Flowers"
        ],

        explanation:
            "Leaves contain chlorophyll, the green substance used to make food from sunlight.",

        difficulty: 4,
        correctAnswer: "Leaves",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "leaves",
            "chlorophyll"
        ]
    },

    {
        id: "sci-plant-parts-039",

        question: "Which plant part is most likely to attract bees?",

        options: [
            "Flower",
            "Root",
            "Stem",
            "Seed"
        ],

        explanation:
            "Flowers often attract bees with their bright colours and nectar.",

        difficulty: 4,
        correctAnswer: "Flower",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "flowers",
            "pollination"
        ]
    },

    {
        id: "sci-plant-parts-040",

        question: "Which statement is true about roots?",

        options: [
            "They usually grow underground.",
            "They make food using sunlight.",
            "They produce petals.",
            "They attract insects."
        ],

        explanation:
            "Roots usually grow underground where they absorb water and anchor the plant.",

        difficulty: 4,
        correctAnswer: "They usually grow underground.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-041",

        question: "Which statement is true about stems?",

        options: [
            "They support the plant and transport water.",
            "They make seeds.",
            "They absorb water from the soil.",
            "They make nectar."
        ],

        explanation:
            "The stem supports the plant and carries water and nutrients around it.",

        difficulty: 4,
        correctAnswer: "They support the plant and transport water.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-042",

        question: "Which statement is true about leaves?",

        options: [
            "They make food for the plant.",
            "They grow into new plants.",
            "They absorb water from the soil.",
            "They produce roots."
        ],

        explanation:
            "Leaves use sunlight to make food that the plant needs to grow.",

        difficulty: 4,
        correctAnswer: "They make food for the plant.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-043",

        question: "Which statement is true about flowers?",

        options: [
            "They help the plant reproduce by making seeds.",
            "They absorb minerals from the soil.",
            "They hold the plant upright.",
            "They make food using sunlight."
        ],

        explanation:
            "Flowers are the reproductive part of many plants and produce seeds.",

        difficulty: 4,
        correctAnswer: "They help the plant reproduce by making seeds.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-parts-044",

        question: "Which statement is true about seeds?",

        options: [
            "They can grow into new plants.",
            "They transport water.",
            "They absorb sunlight.",
            "They attract bees."
        ],

        explanation:
            "A seed contains the beginning of a new plant.",

        difficulty: 4,
        correctAnswer: "They can grow into new plants.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-parts-045",

        question: "Which sequence shows how water travels through a plant?",

        options: [
            "Roots → Stem → Leaves",
            "Leaves → Stem → Roots",
            "Flowers → Leaves → Roots",
            "Stem → Flowers → Roots"
        ],

        explanation:
            "Water is absorbed by the roots, carried through the stem and reaches the leaves.",

        difficulty: 5,
        correctAnswer: "Roots → Stem → Leaves",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "roots",
            "stem",
            "leaves"
        ]
    },
        {
        id: "sci-plant-parts-046",

        question: "What is the main job of the roots?",

        options: [
            "To absorb water and hold the plant in the soil",
            "To attract insects",
            "To make food using sunlight",
            "To produce petals"
        ],

        explanation:
            "Roots absorb water and minerals from the soil and keep the plant firmly anchored.",

        difficulty: 5,
            correctAnswer: "To absorb water and hold the plant in the soil",
            estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "roots"
        ]
    },

    {
        id: "sci-plant-parts-047",

        question: "What is the main job of the stem?",

        options: [
            "To support the plant and transport water",
            "To make seeds",
            "To absorb water from the soil",
            "To attract pollinators"
        ],

        explanation:
            "The stem supports the plant and carries water and nutrients between the roots and leaves.",

        difficulty: 5,
        correctAnswer: "To support the plant and transport water",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "stem"
        ]
    },

    {
        id: "sci-plant-parts-048",

        question: "What is the main job of the leaves?",

        options: [
            "To make food for the plant using sunlight",
            "To hold the plant in the soil",
            "To produce seeds",
            "To absorb minerals from the soil"
        ],

        explanation:
            "Leaves use sunlight, water and carbon dioxide to make food for the plant.",

        difficulty: 5,
        correctAnswer: "To make food for the plant using sunlight",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "leaves"
        ]
    },

    {
        id: "sci-plant-parts-049",

        question: "What is the main job of the flower?",

        options: [
            "To help the plant produce seeds",
            "To carry water around the plant",
            "To absorb water from the soil",
            "To make food using sunlight"
        ],

        explanation:
            "Flowers are the reproductive part of the plant and help produce seeds.",

        difficulty: 5,
        correctAnswer: "To help the plant produce seeds",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-parts-050",

        question: "Which summary correctly describes the jobs of the main parts of a flowering plant?",

        options: [
            "Roots absorb water and anchor the plant, stems support the plant and transport water, leaves make food, flowers produce seeds and seeds grow into new plants.",
            "Roots make food, stems attract insects, leaves absorb water and flowers hold the plant upright.",
            "Leaves grow underground, roots make seeds, stems make food and flowers absorb water.",
            "Every part of a plant has exactly the same job."
        ],

        explanation:
            "Each part of a flowering plant has a different job that helps the whole plant survive and reproduce.",

        difficulty: 5,
        correctAnswer: "Roots absorb water and anchor the plant, stems support the plant and transport water, leaves make food, flowers produce seeds and seeds grow into new plants.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "plant-parts"
        ]
    }

    ]

};