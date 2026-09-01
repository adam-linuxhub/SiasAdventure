import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const lifeCycleOfFloweringPlants: SkillContent = {

    skillId: "life-cycle-of-flowering-plants",

    title: "Life Cycle of Flowering Plants",

    description:
        "Learn how flowering plants grow, reproduce and make new plants.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-plant-life-001",
            skillId: "life-cycle-of-flowering-plants",
            question: "What does a seed grow into?",
            stage: "recognise",
            options: [
                "A new plant",
                "A young tree",
                "A flower",
                "A root"
            ],

            explanation:
                "A seed can grow into a new plant when it has the right conditions.",

            difficulty: 1,
            correctAnswer: "A new plant",
            estimatedSeconds: 10,

            hint: "Think about what you would expect to see after planting a seed and caring for it.",

            tags: [
                "science",
                "plants",
                "life-cycle",
                "seeds"
            ]
        },

        {
            id: "sci-plant-life-002",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is the first stage in the life cycle of a flowering plant?",
            stage: "recognise",
            options: [
                "A flower",
                "A seed",
                "A seedling",
                "An adult plant"
            ],

            explanation:
                "The life cycle of a flowering plant begins with a seed.",

            difficulty: 1,
            correctAnswer: "A seed",
            estimatedSeconds: 10,

            hint: "Think about what is there before the plant starts to grow.",

            tags: [
                "science",
                "plants",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-003",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is it called when a seed begins to grow?",
            stage: "recognise",
            options: [
                "Pollination",
                "Germination",
                "Seed dispersal",
                "Fertilisation"
            ],

            explanation:
                "Germination is when a seed starts to grow into a new plant.",

            difficulty: 1,
            correctAnswer: "Germination",
            estimatedSeconds: 15,

            hint: "This word describes the stage when a seed starts growing.",

            tags: [
                "science",
                "plants",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-004",
            skillId: "life-cycle-of-flowering-plants",
            question: "What usually grows out of a seed first?",
            stage: "recognise",
            options: [
                "Flowers",
                "Roots",
                "Leaves",
                "Petals"
            ],

            explanation:
                "The first root grows down into the soil to absorb water.",

            difficulty: 1,
            correctAnswer: "Roots",
            estimatedSeconds: 15,

            hint: "Think about which part needs to grow into the soil to find water.",

            tags: [
                "science",
                "plants",
                "roots",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-005",
            skillId: "life-cycle-of-flowering-plants",
            question: "What does a seed need to begin germinating?",
            stage: "recognise",
            options: [
                "A flower",
                "Enough water",
                "A bee",
                "Some fruit"
            ],

            explanation:
                "A seed needs suitable conditions, including water and warmth, to begin germinating.",

            difficulty: 1,
            correctAnswer: "Enough water",
            estimatedSeconds: 15,

            hint: "Think about the things a seed needs before it can start growing.",

            tags: [
                "science",
                "plants",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-006",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is a young plant called?",
            stage: "recognise",
            options: [
                "A flower",
                "A seedling",
                "A seed",
                "A young root"
            ],

            explanation:
                "A young plant that has grown from a seed is called a seedling.",

            difficulty: 1,
            correctAnswer: "A seedling",
            estimatedSeconds: 15,

            hint: "This word describes a plant that is still young and has started growing.",

            tags: [
                "science",
                "plants",
                "seedling",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-007",
            skillId: "life-cycle-of-flowering-plants",
            question: "What does a seedling need to keep growing?",
            stage: "recognise",
            options: [
                "Only darkness",
                "Water, light and nutrients",
                "Only water",
                "No sunlight"
            ],

            explanation:
                "A growing seedling needs water, light and nutrients to develop into a healthy plant.",

            difficulty: 1,
            correctAnswer: "Water, light and nutrients",
            estimatedSeconds: 15,

            hint: "Think about the basic things a young plant needs to stay alive and grow.",

            tags: [
                "science",
                "plants",
                "seedling",
                "growth"
            ]
        },

        {
            id: "sci-plant-life-008",
            skillId: "life-cycle-of-flowering-plants",
            question: "What does a seedling grow into?",
            stage: "recognise",
            options: [
                "A root",
                "A petal",
                "An adult plant",
                "A flower"
            ],

            explanation:
                "A healthy seedling grows larger and eventually becomes an adult plant.",

            difficulty: 1,
            correctAnswer: "An adult plant",
            estimatedSeconds: 15,

            hint: "A seedling is a young plant. Think about what it becomes as it grows up.",

            tags: [
                "science",
                "plants",
                "seedling",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-009",
            skillId: "life-cycle-of-flowering-plants",
            question: "What happens when a flowering plant becomes mature?",
            stage: "recognise",
            options: [
                "Its roots disappear.",
                "It can produce flowers.",
                "It needs no more water.",
                "It becomes a seed."
            ],

            explanation:
                "When a flowering plant reaches maturity, it can produce flowers and reproduce.",

            difficulty: 1,
            correctAnswer: "It can produce flowers.",
            estimatedSeconds: 15,

            hint: "A mature flowering plant is ready for the stage that helps it reproduce.",

            tags: [
                "science",
                "plants",
                "flowers",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-010",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which part of the life cycle allows a flowering plant to make new seeds?",
            stage: "recognise",
            options: [
                "Root growth",
                "Seedling growth",
                "Germination",
                "Flowering"
            ],

            explanation:
                "Flowers contain the reproductive parts that allow flowering plants to make seeds.",

            difficulty: 1,
            correctAnswer: "Flowering",
            estimatedSeconds: 20,

            hint: "Think about the stage when the plant has developed its reproductive part.",

            tags: [
                "science",
                "plants",
                "flowers",
                "seeds",
                "life-cycle"
            ]
        },
                {
            id: "sci-plant-life-011",
            skillId: "life-cycle-of-flowering-plants",
            question: "What can happen to seeds after they are made?",
            stage: "recognise",
            options: [
                "They can be dispersed.",
                "They become roots.",
                "They turn into flowers.",
                "They stay on the plant."
            ],

            explanation:
                "Seeds can be dispersed away from the parent plant before they germinate and grow.",

            difficulty: 2,
            correctAnswer: "They can be dispersed.",
            estimatedSeconds: 20,

            hint: "Think about how seeds can move away from the parent plant before they start growing.",

            tags: [
                "science",
                "plants",
                "seeds",
                "seed-dispersal"
            ]
        },

        {
            id: "sci-plant-life-012",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is pollination?",
            stage: "recognise",
            options: [
                "A seed starts growing.",
                "A root takes in water.",
                "Pollen moves to a flower.",
                "A seed travels away."
            ],

            explanation:
                "Pollination happens when pollen is transferred to the female part of a flower.",

            difficulty: 2,
            correctAnswer: "Pollen moves to a flower.",
            estimatedSeconds: 20,

            hint: "Think about what needs to be moved to the flower during reproduction.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination"
            ]
        },

        {
            id: "sci-plant-life-013",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which animals often help with pollination?",
            stage: "recognise",
            options: [
                "Fish",
                "Bees",
                "Worms",
                "Moles"
            ],

            explanation:
                "Bees and other insects can carry pollen from one flower to another.",

            difficulty: 2,
            correctAnswer: "Bees",
            estimatedSeconds: 20,

            hint: "Think about an insect that visits flowers to collect nectar.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination",
                "bees"
            ]
        },

        {
            id: "sci-plant-life-014",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why is pollination important to flowering plants?",
            stage: "recognise",
            options: [
                "It makes roots grow.",
                "It helps leaves take in water.",
                "It makes stems grow.",
                "It helps plants make seeds."
            ],

            explanation:
                "Pollination allows pollen to reach the female part of a flower, which is needed for seed production.",

            difficulty: 2,
            correctAnswer: "It helps plants make seeds.",
            estimatedSeconds: 20,

            hint: "Think about what the plant needs to make the next generation.",

            tags: [
                "science",
                "plants",
                "pollination",
                "seeds",
                "reproduction"
            ]
        },

        {
            id: "sci-plant-life-015",
            skillId: "life-cycle-of-flowering-plants",
            question: "What develops from the flower after successful pollination and fertilisation?",
            stage: "recognise",
            options: [
                "Leaves",
                "Branches",
                "Roots",
                "Seeds"
            ],

            explanation:
                "After pollination and fertilisation, seeds begin to develop.",

            difficulty: 2,
            correctAnswer: "Seeds",
            estimatedSeconds: 20,

            hint: "Think about what can begin a new plant's life after reproduction.",

            tags: [
                "science",
                "plants",
                "seeds"
            ]
        },

        {
            id: "sci-plant-life-016",
            skillId: "life-cycle-of-flowering-plants",
            question: "What can happen after seeds are spread away from the parent plant?",
            stage: "recognise",
            options: [
                "They disappear.",
                "They turn into leaves.",
                "They can grow into new plants.",
                "They become flowers at once."
            ],

            explanation:
                "If conditions are right, dispersed seeds can germinate and grow into new plants.",

            difficulty: 2,
            correctAnswer: "They can grow into new plants.",
            estimatedSeconds: 20,

            hint: "The seeds can begin the life cycle again if they land somewhere suitable.",

            tags: [
                "science",
                "plants",
                "seed-dispersal"
            ]
        },

        {
            id: "sci-plant-life-017",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage comes just before a flowering plant produces seeds?",
            stage: "recognise",
            options: [
                "Germination",
                "Flowering",
                "Root growth",
                "Seedling growth"
            ],

            explanation:
                "Flowers are produced before seeds develop.",

            difficulty: 2,
            correctAnswer: "Flowering",
            estimatedSeconds: 20,

            hint: "Think about what appears on a mature plant before seeds can be made.",

            tags: [
                "science",
                "plants",
                "flowers",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-018",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage comes after a seedling?",
            stage: "recognise",
            options: [
                "Seed",
                "Fruit",
                "Adult plant",
                "Pollination"
            ],

            explanation:
                "A healthy seedling grows into an adult flowering plant.",

            difficulty: 2,
            correctAnswer: "Adult plant",
            estimatedSeconds: 20,

            hint: "A seedling is still young. Think about what it becomes when it has grown.",

            tags: [
                "science",
                "plants",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-019",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is the purpose of seeds in the plant life cycle?",
            stage: "recognise",
            options: [
                "To carry water",
                "To absorb sunlight",
                "To make leaves green",
                "To grow into new plants"
            ],

            explanation:
                "Seeds allow new plants to grow, continuing the life cycle.",

            difficulty: 2,
            correctAnswer: "To grow into new plants",
            estimatedSeconds: 20,

            hint: "Think about what seeds can become when they have the right conditions.",

            tags: [
                "science",
                "plants",
                "seeds"
            ]
        },

        {
            id: "sci-plant-life-020",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which sequence is correct?",
            stage: "recognise",
            options: [
                "Flower → Seed → Root → Seedling",
                "Adult plant → Seedling → Seed",
                "Seed → Germination → Seedling → Adult plant",
                "Seed → Flower → Germination → Root"
            ],

            explanation:
                "A seed germinates, becomes a seedling and then grows into an adult plant.",

            difficulty: 2,
            correctAnswer: "Seed → Germination → Seedling → Adult plant",
            estimatedSeconds: 25,

            hint: "Start with the seed and follow the stages as the plant grows.",

                        tags: [
                "science",
                "plants",
                "life-cycle"
            ]
        }

    ]

};

export default lifeCycleOfFloweringPlants;