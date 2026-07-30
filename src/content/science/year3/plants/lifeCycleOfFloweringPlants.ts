import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const lifeCycleOfFloweringPlants: SkillContent = {

    skillId: "life-cycle-of-flowering-plants",

    title: "Life Cycle of Flowering Plants",

    description:
        "Learn how flowering plants grow, reproduce and make new plants.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-plant-life-001",

        question: "What does a seed grow into?",

        options: [
            "A new plant",
            "A rock",
            "A cloud",
            "A mushroom"
        ],

        explanation:
            "A seed can grow into a new plant when it has the right conditions.",

        difficulty: 1,
        correctAnswer: "A new plant",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "life-cycle",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-002",

        question: "What is the first stage in the life cycle of a flowering plant?",

        options: [
            "Seed",
            "Flower",
            "Fruit",
            "Leaf"
        ],

        explanation:
            "The life cycle of a flowering plant begins with a seed.",

        difficulty: 1,
        correctAnswer: "Seed",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-003",

        question: "What is it called when a seed begins to grow?",

        options: [
            "Germination",
            "Pollination",
            "Photosynthesis",
            "Hibernation"
        ],

        explanation:
            "Germination is when a seed starts to grow into a new plant.",

        difficulty: 1,
        correctAnswer: "Germination",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-004",

        question: "What usually grows out of a seed first?",

        options: [
            "Roots",
            "Flowers",
            "Fruit",
            "Petals"
        ],

        explanation:
            "The first root grows down into the soil to absorb water.",

        difficulty: 1,
        correctAnswer: "Roots",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "roots",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-005",

        question: "After a seedling grows, what does it become?",

        options: [
            "An adult plant",
            "A rock",
            "A cloud",
            "A seed again"
        ],

        explanation:
            "A healthy seedling grows into an adult flowering plant.",

        difficulty: 1,
        correctAnswer: "An adult plant",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-006",

        question: "What part of the adult plant helps it reproduce?",

        options: [
            "Flower",
            "Root",
            "Stem",
            "Leaf"
        ],

        explanation:
            "Flowers help plants reproduce by producing seeds.",

        difficulty: 1,
        correctAnswer: "Flower",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-life-007",

        question: "What is made after successful pollination and fertilisation?",

        options: [
            "Seeds",
            "Roots",
            "Leaves",
            "Stems"
        ],

        explanation:
            "Seeds develop after pollination and fertilisation.",

        difficulty: 1,
        correctAnswer: "Seeds",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-008",

        question: "What can happen to seeds after they are made?",

        options: [
            "They can grow into new plants.",
            "They turn into rocks.",
            "They become sunlight.",
            "They disappear immediately."
        ],

        explanation:
            "Seeds can grow into new plants when conditions are right.",

        difficulty: 1,
        correctAnswer: "They can grow into new plants.",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-009",

        question: "Which stage comes after germination?",

        options: [
            "Seedling",
            "Seed",
            "Fruit",
            "Pollination"
        ],

        explanation:
            "After germination, the young plant is called a seedling.",

        difficulty: 1,
        correctAnswer: "Seedling",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "seedling"
        ]
    },

    {
        id: "sci-plant-life-010",

        question: "What is the correct order of the plant life cycle?",

        options: [
            "Seed → Seedling → Adult plant → Flower → Seeds",
            "Flower → Seed → Leaf → Root",
            "Seed → Flower → Seedling → Root",
            "Leaf → Stem → Seed → Flower"
        ],

        explanation:
            "A flowering plant grows from a seed into a seedling, becomes an adult plant, produces flowers and then makes new seeds.",

        difficulty: 1,
        correctAnswer: "Seed → Seedling → Adult plant → Flower → Seeds",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },
        {
        id: "sci-plant-life-011",

        question: "What does a seed need before it can begin to grow?",

        options: [
            "The right conditions",
            "Snow",
            "Plastic",
            "A flower"
        ],

        explanation:
            "Seeds need the right conditions, such as water, warmth and air, before they can germinate.",

        difficulty: 2,
            correctAnswer: "The right conditions",
            estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-012",

        question: "What is a young plant called just after germination?",

        options: [
            "A seedling",
            "A flower",
            "A fruit",
            "A root"
        ],

        explanation:
            "A young plant that has just started growing is called a seedling.",

        difficulty: 2,
        correctAnswer: "A seedling",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seedling"
        ]
    },

    {
        id: "sci-plant-life-013",

        question: "What grows before flowers appear on a flowering plant?",

        options: [
            "Leaves and stems",
            "Fruit",
            "Seeds",
            "Petals"
        ],

        explanation:
            "The plant grows stems and leaves before it becomes mature enough to produce flowers.",

        difficulty: 2,
        correctAnswer: "Leaves and stems",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-014",

        question: "Why does a flowering plant produce flowers?",

        options: [
            "To reproduce and make seeds",
            "To absorb water",
            "To hold the plant upright",
            "To make roots"
        ],

        explanation:
            "Flowers help plants reproduce by producing seeds.",

        difficulty: 2,
        correctAnswer: "To reproduce and make seeds",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-life-015",

        question: "What develops from the flower after successful pollination and fertilisation?",

        options: [
            "Seeds",
            "Roots",
            "Leaves",
            "Branches"
        ],

        explanation:
            "After pollination and fertilisation, seeds begin to develop.",

        difficulty: 2,
        correctAnswer: "Seeds",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-016",

        question: "What can happen after seeds are spread away from the parent plant?",

        options: [
            "They can grow into new plants.",
            "They become flowers straight away.",
            "They turn into leaves.",
            "They disappear."
        ],

        explanation:
            "If conditions are right, dispersed seeds can germinate and grow into new plants.",

        difficulty: 2,
        correctAnswer: "They can grow into new plants.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-plant-life-017",

        question: "Which stage comes just before a flowering plant produces seeds?",

        options: [
            "Flowering",
            "Seed",
            "Root growth",
            "Germination"
        ],

        explanation:
            "Flowers are produced before seeds develop.",

        difficulty: 2,
        correctAnswer: "Flowering",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "flowers",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-018",

        question: "Which stage comes after a seedling?",

        options: [
            "Adult plant",
            "Seed",
            "Fruit",
            "Pollination"
        ],

        explanation:
            "A healthy seedling grows into an adult flowering plant.",

        difficulty: 2,
        correctAnswer: "Adult plant",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-019",

        question: "What is the purpose of seeds in the plant life cycle?",

        options: [
            "To grow into new plants",
            "To absorb sunlight",
            "To carry water",
            "To make leaves green"
        ],

        explanation:
            "Seeds allow new plants to grow, continuing the life cycle.",

        difficulty: 2,
        correctAnswer: "To grow into new plants",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-020",

        question: "Which sequence is correct?",

        options: [
            "Seed → Germination → Seedling → Adult plant",
            "Flower → Seed → Root → Seedling",
            "Adult plant → Seedling → Seed",
            "Seed → Flower → Germination → Root"
        ],

        explanation:
            "A seed germinates, becomes a seedling and then grows into an adult plant.",

        difficulty: 2,
        correctAnswer: "Seed → Germination → Seedling → Adult plant",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-021",

        question: "Ella plants a seed and waters it. A small root grows first. What stage has begun?",

        options: [
            "Germination",
            "Pollination",
            "Seed dispersal",
            "Flowering"
        ],

        explanation:
            "The first root appearing is part of germination.",

        difficulty: 3,
        correctAnswer: "Germination",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-022",

        question: "Why is it important for plants to make seeds?",

        options: [
            "So new plants can grow",
            "So roots grow faster",
            "So leaves become bigger",
            "So flowers stay colourful"
        ],

        explanation:
            "Seeds allow plants to reproduce and continue their life cycle.",

        difficulty: 3,
        correctAnswer: "So new plants can grow",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seeds",
            "reproduction"
        ]
    },

    {
        id: "sci-plant-life-023",

        question: "What happens after an adult flowering plant produces seeds?",

        options: [
            "The seeds can be dispersed and grow into new plants.",
            "The plant becomes a seedling.",
            "The roots disappear.",
            "The leaves turn into flowers."
        ],

        explanation:
            "Seeds are dispersed and may grow into new plants, beginning the cycle again.",

        difficulty: 3,
        correctAnswer: "The seeds can be dispersed and grow into new plants.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-plant-life-024",

        question: "Which stage happens only after a plant has grown into an adult?",

        options: [
            "Flowering",
            "Germination",
            "Seedling growth",
            "Root sprouting"
        ],

        explanation:
            "Plants usually flower after reaching adulthood.",

        difficulty: 3,
        correctAnswer: "Flowering",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-life-025",

        question: "Why is the life cycle called a cycle?",

        options: [
            "Because it repeats again and again.",
            "Because plants grow in circles.",
            "Because flowers are round.",
            "Because roots curl up."
        ],

        explanation:
            "New seeds grow into new plants, repeating the same stages over and over.",

        difficulty: 3,
        correctAnswer: "Because it repeats again and again.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },
        {
        id: "sci-plant-life-026",

        question: "What usually happens after a seed germinates?",

        options: [
            "It grows into a seedling.",
            "It becomes a flower.",
            "It produces fruit immediately.",
            "It turns into a root only."
        ],

        explanation:
            "After germination, the seed grows into a young plant called a seedling.",

        difficulty: 3,
            correctAnswer: "It grows into a seedling.",
            estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "germination",
            "seedling"
        ]
    },

    {
        id: "sci-plant-life-027",

        question: "Which part of the life cycle allows a plant to produce new seeds?",

        options: [
            "Flowering",
            "Root growth",
            "Leaf growth",
            "Stem growth"
        ],

        explanation:
            "Flowers are the reproductive part of the plant and produce seeds after pollination and fertilisation.",

        difficulty: 3,
        correctAnswer: "Flowering",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "flowers",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-028",

        question: "What is the main purpose of germination?",

        options: [
            "To start the growth of a new plant",
            "To produce flowers",
            "To make fruit",
            "To spread seeds"
        ],

        explanation:
            "Germination is the process where a seed begins to grow into a new plant.",

        difficulty: 3,
        correctAnswer: "To start the growth of a new plant",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-029",

        question: "A seed grows into a seedling. What does the seedling eventually become?",

        options: [
            "An adult flowering plant",
            "A fruit",
            "A root",
            "A seed again"
        ],

        explanation:
            "With the right conditions, a seedling grows into an adult flowering plant.",

        difficulty: 3,
        correctAnswer: "An adult flowering plant",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seedling",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-030",

        question: "Which stage completes the life cycle before it begins again?",

        options: [
            "New seeds are produced.",
            "The leaves fall off.",
            "The roots stop growing.",
            "The stem gets taller."
        ],

        explanation:
            "When new seeds are produced, they can grow into new plants and the life cycle starts again.",

        difficulty: 3,
        correctAnswer: "New seeds are produced.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seeds",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-031",

        question: "Which stage happens immediately before seeds are produced?",

        options: [
            "Flowering",
            "Germination",
            "Seedling growth",
            "Root growth"
        ],

        explanation:
            "Seeds are produced after the plant flowers and pollination and fertilisation have taken place.",

        difficulty: 4,
        correctAnswer: "Flowering",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "flowers"
        ]
    },

    {
        id: "sci-plant-life-032",

        question: "Why is seed dispersal useful for plants?",

        options: [
            "It helps new plants grow away from the parent plant.",
            "It helps leaves make food.",
            "It makes flowers brighter.",
            "It helps roots absorb sunlight."
        ],

        explanation:
            "Seed dispersal reduces competition for space, water and light by spreading seeds away from the parent plant.",

        difficulty: 4,
        correctAnswer: "It helps new plants grow away from the parent plant.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-plant-life-033",

        question: "A flower produces seeds. What is the next stage in the life cycle?",

        options: [
            "The seeds are dispersed and may germinate.",
            "The plant becomes a seedling.",
            "The roots disappear.",
            "The leaves become flowers."
        ],

        explanation:
            "Seeds are spread away from the parent plant and can later germinate.",

        difficulty: 4,
        correctAnswer: "The seeds are dispersed and may germinate.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "seed-dispersal",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-034",

        question: "Which sequence is correct?",

        options: [
            "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
            "Seed → Flower → Germination → Adult plant",
            "Flower → Seedling → Seed → Roots",
            "Adult plant → Seed → Flower → Seedling"
        ],

        explanation:
            "This is the correct order of the life cycle of a flowering plant.",

        difficulty: 4,
        correctAnswer: "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-035",

        question: "Why do flowering plants reproduce?",

        options: [
            "To produce new plants of the same kind",
            "To make bigger leaves",
            "To grow taller stems",
            "To absorb more sunlight"
        ],

        explanation:
            "Reproduction allows plants to produce seeds that grow into new plants.",

        difficulty: 4,
        correctAnswer: "To produce new plants of the same kind",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "reproduction"
        ]
    },

    {
        id: "sci-plant-life-036",

        question: "What is the job of a seed?",

        options: [
            "To grow into a new plant",
            "To make food",
            "To absorb water",
            "To attract insects"
        ],

        explanation:
            "A seed contains a young plant that can grow when conditions are right.",

        difficulty: 4,
        correctAnswer: "To grow into a new plant",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-037",

        question: "Which stage lasts the longest in most flowering plants?",

        options: [
            "Growing into an adult plant",
            "Being a seed",
            "Flowering",
            "Making seeds"
        ],

        explanation:
            "Most of a plant's life is spent growing before it flowers and produces seeds.",

        difficulty: 4,
        correctAnswer: "Growing into an adult plant",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "growth"
        ]
    },

    {
        id: "sci-plant-life-038",

        question: "A seed lands in dry soil with no water. What is most likely to happen?",

        options: [
            "It will not germinate.",
            "It will flower immediately.",
            "It will become a seedling straight away.",
            "It will produce fruit."
        ],

        explanation:
            "Seeds need suitable conditions, including water, before germination can begin.",

        difficulty: 4,
        correctAnswer: "It will not germinate.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-039",

        question: "What is the purpose of the adult plant stage?",

        options: [
            "To grow, flower and produce seeds",
            "To become a seed again",
            "To stop growing",
            "To produce rocks"
        ],

        explanation:
            "Adult plants produce flowers and eventually make seeds to continue the life cycle.",

        difficulty: 4,
        correctAnswer: "To grow, flower and produce seeds",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "adult-plant"
        ]
    },

    {
        id: "sci-plant-life-040",

        question: "Which statement best describes the life cycle of a flowering plant?",

        options: [
            "It repeats as each new seed grows into another plant.",
            "It only happens once for all plants.",
            "It ends when flowers appear.",
            "It starts with leaves."
        ],

        explanation:
            "The life cycle repeats because each generation produces new seeds that grow into new plants.",

        difficulty: 4,
        correctAnswer: "It repeats as each new seed grows into another plant.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },
        {
        id: "sci-plant-life-041",

        question: "A plant has produced seeds. What must happen before one of the seeds grows into a new plant?",

        options: [
            "The seed must germinate.",
            "The seed must produce flowers.",
            "The seed must grow fruit.",
            "The seed must become a leaf."
        ],

        explanation:
            "Before a seed can grow into a new plant, it must germinate under the right conditions.",

        difficulty: 5,
            correctAnswer: "The seed must germinate.",
            estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "germination",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-042",

        question: "Which stage happens immediately after an adult plant flowers?",

        options: [
            "Seeds develop.",
            "The plant becomes a seedling.",
            "The roots stop growing.",
            "The leaves fall off."
        ],

        explanation:
            "After flowering, pollination and fertilisation can lead to seeds developing.",

        difficulty: 5,
        correctAnswer: "Seeds develop.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "flowers",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-043",

        question: "Why is seed dispersal important in a plant's life cycle?",

        options: [
            "It gives seeds a chance to grow in new places.",
            "It helps flowers make food.",
            "It makes roots absorb more water.",
            "It changes seedlings into flowers."
        ],

        explanation:
            "Seed dispersal spreads seeds to new places where they may have enough space, light and water to grow.",

        difficulty: 5,
        correctAnswer: "It gives seeds a chance to grow in new places.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-plant-life-044",

        question: "Which sequence correctly completes the life cycle?",

        options: [
            "Adult plant → Flower → Seeds → Germination → Seedling",
            "Adult plant → Seedling → Flower → Seed",
            "Flower → Root → Seedling → Seeds",
            "Seedling → Seeds → Flower → Adult plant"
        ],

        explanation:
            "Adult plants produce flowers, flowers produce seeds, seeds germinate and grow into seedlings.",

        difficulty: 5,
        correctAnswer: "Adult plant → Flower → Seeds → Germination → Seedling",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "life-cycle"
        ]
    },

    {
        id: "sci-plant-life-045",

        question: "Which statement best explains why flowering plants make seeds every year?",

        options: [
            "To produce the next generation of plants",
            "To make more leaves",
            "To absorb more sunlight",
            "To grow taller stems"
        ],

        explanation:
            "Seeds allow flowering plants to reproduce and continue their life cycle.",

        difficulty: 5,
        correctAnswer: "To produce the next generation of plants",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "reproduction",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-046",

        question: "Which stage comes directly before germination?",

        options: [
            "A seed",
            "A flower",
            "A seedling",
            "An adult plant"
        ],

        explanation:
            "A seed exists before it germinates and begins to grow.",

        difficulty: 5,
        correctAnswer: "A seed",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "germination",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-047",

        question: "A seed has enough water and warmth but is damaged. What is most likely?",

        options: [
            "It may not grow into a healthy plant.",
            "It will become a flower immediately.",
            "It will skip the seedling stage.",
            "It will produce seeds straight away."
        ],

        explanation:
            "A damaged seed may not be able to germinate successfully, even if conditions are suitable.",

        difficulty: 5,
        correctAnswer: "It may not grow into a healthy plant.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "germination"
        ]
    },

    {
        id: "sci-plant-life-048",

        question: "What is the main purpose of the flowering stage?",

        options: [
            "To allow the plant to reproduce by making seeds",
            "To absorb water from the soil",
            "To make food for the plant",
            "To grow new roots"
        ],

        explanation:
            "The flowering stage allows pollination and the production of seeds for the next generation.",

        difficulty: 5,
        correctAnswer: "To allow the plant to reproduce by making seeds",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "flowers",
            "reproduction"
        ]
    },

    {
        id: "sci-plant-life-049",

        question: "Which statement best describes the relationship between seeds and adult plants?",

        options: [
            "Seeds grow into adult plants, which produce more seeds.",
            "Adult plants grow into seeds.",
            "Seeds only produce flowers.",
            "Adult plants never make seeds."
        ],

        explanation:
            "This repeating pattern is what makes the life cycle a cycle.",

        difficulty: 5,
        correctAnswer: "Seeds grow into adult plants, which produce more seeds.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "life-cycle",
            "seeds"
        ]
    },

    {
        id: "sci-plant-life-050",

        question: "Which summary best describes the life cycle of a flowering plant?",

        options: [
            "A seed germinates into a seedling, grows into an adult plant, produces flowers, makes seeds and the cycle begins again.",
            "A flower grows into a root, then a leaf, then a seed.",
            "A seed becomes a flower without growing.",
            "Plants only complete the life cycle once."
        ],

        explanation:
            "Flowering plants repeat the same life cycle as each new generation grows from seeds and produces more seeds.",

        difficulty: 5,
        correctAnswer: "A seed germinates into a seedling, grows into an adult plant, produces flowers, makes seeds and the cycle begins again.",
        estimatedSeconds: 40,

        tags: [
            "science",
            "plants",
            "life-cycle",
            "germination",
            "flowers",
            "seeds"
        ]
    }

    ]

};
