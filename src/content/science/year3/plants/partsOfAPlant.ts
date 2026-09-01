import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const partsOfAPlant: SkillContent = {

    skillId: "parts-of-a-plant",

    title: "Parts of a Plant",

    description:
        "Learn the names and jobs of the different parts of flowering plants.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-plant-parts-001",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant grows underground?",
            stage: "recognise",
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

            hint: "Think about the part hidden beneath the soil that anchors the plant.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-002",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant usually grows above the ground and supports the plant?",
            stage: "recognise",
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

            hint: "Look for the part that acts like a support and holds other parts up.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-003",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant makes food using sunlight?",
            stage: "recognise",
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

            hint: "Think about the flat, green parts of a plant that collect sunlight.",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-004",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant often has colourful petals?",
            stage: "recognise",
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

            hint: "Think about the part that is often bright and attracts pollinators.",

            tags: [
                "science",
                "plants",
                "flowers"
            ]
        },

        {
            id: "sci-plant-parts-005",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant can grow into a new plant?",
            stage: "recognise",
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

            hint: "This part contains the beginning of a new plant waiting to grow.",

            tags: [
                "science",
                "plants",
                "seeds"
            ]
        },

        {
            id: "sci-plant-parts-006",
            skillId: "parts-of-a-plant",
            question: "What is the main job of roots?",
            stage: "recognise",
            options: [
                "Make seeds",
                "Hold the plant and take in water",
                "Catch insects",
                "Produce fruit"
            ],

            explanation:
                "Roots anchor the plant and take in water and minerals from the soil.",

            difficulty: 1,
            correctAnswer: "Hold the plant and take in water",
            estimatedSeconds: 15,

            hint: "Roots have two important jobs: keeping the plant steady and taking in what it needs from the soil.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-007",
            skillId: "parts-of-a-plant",
            question: "What is the main job of the stem?",
            stage: "recognise",
            options: [
                "Make seeds",
                "Catch rain",
                "Support the plant and carry water",
                "Grow underground"
            ],

            explanation:
                "The stem supports the plant and carries water and nutrients around it.",

            difficulty: 1,
            correctAnswer: "Support the plant and carry water",
            estimatedSeconds: 15,

            hint: "The stem connects the roots with the parts above the ground.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-008",
            skillId: "parts-of-a-plant",
            question: "What is the main job of leaves?",
            stage: "recognise",
            options: [
                "Hold the plant in the soil",
                "Produce seeds",
                "Absorb water from the ground",
                "Make food for the plant"
            ],

            explanation:
                "Leaves use sunlight, air and water to make food for the plant.",

            difficulty: 1,
            correctAnswer: "Make food for the plant",
            estimatedSeconds: 15,

            hint: "Leaves are like tiny food factories powered by sunlight.",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-009",
            skillId: "parts-of-a-plant",
            question: "What is the main job of flowers?",
            stage: "recognise",
            options: [
                "Store food",
                "Help make seeds",
                "Absorb water",
                "Hold the plant upright"
            ],

            explanation:
                "Flowers help plants reproduce by making seeds.",

            difficulty: 1,
            correctAnswer: "Help make seeds",
            estimatedSeconds: 15,

            hint: "Flowers are involved in creating the next generation of plants.",

            tags: [
                "science",
                "plants",
                "flowers"
            ]
        },

        {
            id: "sci-plant-parts-010",
            skillId: "parts-of-a-plant",
            question: "Which part of the plant usually absorbs water from the soil?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Flowers",
                "Stem"
            ],

            explanation:
                "Roots absorb water and minerals from the soil.",

            difficulty: 1,
            correctAnswer: "Roots",
            estimatedSeconds: 15,

            hint: "The part that is underground is closest to the water stored in soil.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },
                {
            id: "sci-plant-parts-011",
            skillId: "parts-of-a-plant",
            question: "Which part carries water from the roots to the leaves?",
            stage: "recognise",
            options: [
                "Flower",
                "Stem",
                "Seed",
                "Petal"
            ],

            explanation:
                "The stem carries water from the roots to the rest of the plant.",

            difficulty: 2,
            correctAnswer: "Stem",
            estimatedSeconds: 20,

            hint: "Think about the plant's transport system connecting the roots and leaves.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-012",
            skillId: "parts-of-a-plant",
            question: "Which part uses sunlight to make food?",
            stage: "recognise",
            options: [
                "Roots",
                "Seeds",
                "Leaves",
                "Stem"
            ],

            explanation:
                "Leaves capture sunlight and use it to make food for the plant.",

            difficulty: 2,
            correctAnswer: "Leaves",
            estimatedSeconds: 20,

            hint: "Which part is usually wide and exposed to the light?",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-013",
            skillId: "parts-of-a-plant",
            question: "Which plant part often attracts bees and butterflies?",
            stage: "recognise",
            options: [
                "Seed",
                "Flower",
                "Root",
                "Stem"
            ],

            explanation:
                "Bright flowers attract insects that help pollinate the plant.",

            difficulty: 2,
            correctAnswer: "Flower",
            estimatedSeconds: 20,

            hint: "Think about the colourful part of the plant that insects visit.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination"
            ]
        },

        {
            id: "sci-plant-parts-014",
            skillId: "parts-of-a-plant",
            question: "Which part of the plant grows into a new plant after germination?",
            stage: "recognise",
            options: [
                "Leaf",
                "Flower",
                "Seed",
                "Stem"
            ],

            explanation:
                "A seed begins to grow during germination and develops into a new plant.",

            difficulty: 2,
            correctAnswer: "Seed",
            estimatedSeconds: 20,

            hint: "Germination starts when the part containing the young plant begins to grow.",

            tags: [
                "science",
                "plants",
                "seeds",
                "germination"
            ]
        },

        {
            id: "sci-plant-parts-015",
            skillId: "parts-of-a-plant",
            question: "Which part of the plant is usually found below the soil?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Flowers",
                "Stem"
            ],

            explanation:
                "Roots grow below the soil to anchor the plant and absorb water.",

            difficulty: 2,
            correctAnswer: "Roots",
            estimatedSeconds: 20,

            hint: "Look for the plant part that is hidden underground and connects with the soil.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-016",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant helps keep it firmly in the ground?",
            stage: "recognise",
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

            hint: "Think about which part acts like an anchor holding the plant in place.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-017",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant supports the leaves and flowers?",
            stage: "recognise",
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

            hint: "This part grows upwards and holds the plant's leaves and flowers above the ground.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-018",
            skillId: "parts-of-a-plant",
            question: "Why do plants need leaves?",
            stage: "recognise",
            options: [
                "To absorb water from the soil",
                "To make food",
                "To grow underground",
                "To make roots"
            ],

            explanation:
                "Leaves use sunlight to make food that helps the plant grow.",

            difficulty: 2,
            correctAnswer: "To make food",
            estimatedSeconds: 20,

            hint: "Leaves use something from the Sun to help create energy for the plant.",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-019",
            skillId: "parts-of-a-plant",
            question: "Why do many flowers have brightly coloured petals?",
            stage: "recognise",
            options: [
                "To absorb water",
                "To attract insects",
                "To hold up the plant",
                "To grow underground"
            ],

            explanation:
                "Brightly coloured petals attract insects such as bees and butterflies.",

            difficulty: 2,
            correctAnswer: "To attract insects",
            estimatedSeconds: 20,

            hint: "Think about why a flower might need visitors like bees and butterflies.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination"
            ]
        },

        {
            id: "sci-plant-parts-020",
            skillId: "parts-of-a-plant",
            question: "What grows into a new plant?",
            stage: "recognise",
            options: [
                "A leaf",
                "A seed",
                "A root",
                "A stem"
            ],

            explanation:
                "Seeds contain the tiny new plant that begins growing during germination.",

            difficulty: 2,
            correctAnswer: "A seed",
            estimatedSeconds: 20,

            hint: "This plant part contains everything needed to begin a new plant's life.",

                        tags: [
                "science",
                "plants",
                "seeds"
            ]
        }

    ]

};

export default partsOfAPlant;

export {
    partsOfAPlant
};