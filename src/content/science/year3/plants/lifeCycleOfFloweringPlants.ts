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
        },
                {
            id: "sci-plant-life-021",
            skillId: "life-cycle-of-flowering-plants",
            question: "Ella plants a seed and waters it. A small root grows first. What stage has begun?",
            stage: "recognise",
            options: [
                "Pollination",
                "Flowering",
                "Germination",
                "Seed dispersal"
            ],

            explanation:
                "The first root appearing is part of germination.",

            difficulty: 3,
            correctAnswer: "Germination",
            estimatedSeconds: 25,

            hint: "The seed has started to grow. Which stage begins when this happens?",

            tags: [
                "science",
                "plants",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-022",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why is it important for plants to make seeds?",
            stage: "recognise",
            options: [
                "So roots grow faster",
                "So flowers stay colourful",
                "So new plants can grow",
                "So leaves become bigger"
            ],

            explanation:
                "Seeds allow plants to reproduce and continue their life cycle.",

            difficulty: 3,
            correctAnswer: "So new plants can grow",
            estimatedSeconds: 25,

            hint: "Think about what seeds can become and how that helps the plant's life cycle continue.",

            tags: [
                "science",
                "plants",
                "seeds",
                "reproduction"
            ]
        },

        {
            id: "sci-plant-life-023",
            skillId: "life-cycle-of-flowering-plants",
            question: "What happens after an adult flowering plant produces seeds?",
            stage: "recognise",
            options: [
                "The roots disappear.",
                "The leaves become flowers.",
                "The plant becomes a seedling.",
                "The seeds can spread and grow."
            ],

            explanation:
                "Seeds are dispersed and may grow into new plants, beginning the cycle again.",

            difficulty: 3,
            correctAnswer: "The seeds can spread and grow.",
            estimatedSeconds: 25,

            hint: "Think about how the new seeds can leave the parent plant and begin the cycle again.",

            tags: [
                "science",
                "plants",
                "seed-dispersal"
            ]
        },

        {
            id: "sci-plant-life-024",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage happens only after a plant has grown into an adult?",
            stage: "recognise",
            options: [
                "Root sprouting",
                "Germination",
                "Flowering",
                "Seedling growth"
            ],

            explanation:
                "Plants usually flower after reaching adulthood.",

            difficulty: 3,
            correctAnswer: "Flowering",
            estimatedSeconds: 25,

            hint: "Young plants need time to mature before they can produce flowers.",

            tags: [
                "science",
                "plants",
                "flowers"
            ]
        },

        {
            id: "sci-plant-life-025",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why is the life cycle called a cycle?",
            stage: "recognise",
            options: [
                "Because flowers are round.",
                "Because plants grow in circles.",
                "Because roots curl up.",
                "Because it repeats."
            ],

            explanation:
                "New seeds grow into new plants, repeating the same stages over and over.",

            difficulty: 3,
            correctAnswer: "Because it repeats.",
            estimatedSeconds: 25,

            hint: "A cycle returns to the beginning after its stages have been completed.",

            tags: [
                "science",
                "plants",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-026",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage comes after germination?",
            stage: "recognise",
            options: [
                "Flower",
                "Adult plant",
                "Seedling",
                "Seed"
            ],

            explanation:
                "After a seed germinates, it develops into a young seedling.",

            difficulty: 3,
            correctAnswer: "Seedling",
            estimatedSeconds: 25,

            hint: "The seed has started growing. What do we call the young plant that develops?",

            tags: [
                "science",
                "plants",
                "germination",
                "seedling",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-027",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage comes before a seedling?",
            stage: "recognise",
            options: [
                "Adult plant",
                "Germination",
                "Flowering",
                "Seed dispersal"
            ],

            explanation:
                "Germination is when the seed begins growing before it becomes a seedling.",

            difficulty: 3,
            correctAnswer: "Germination",
            estimatedSeconds: 25,

            hint: "Think about the stage when the seed first starts to grow.",

            tags: [
                "science",
                "plants",
                "germination",
                "seedling",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-028",
            skillId: "life-cycle-of-flowering-plants",
            question: "What does an adult flowering plant produce to continue the life cycle?",
            stage: "recognise",
            options: [
                "Clouds",
                "Roots only",
                "Rocks",
                "Seeds"
            ],

            explanation:
                "An adult flowering plant produces flowers and, after reproduction, new seeds.",

            difficulty: 3,
            correctAnswer: "Seeds",
            estimatedSeconds: 25,

            hint: "Think about what the adult plant needs to make for another plant to grow.",

            tags: [
                "science",
                "plants",
                "adult-plant",
                "seeds",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-029",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage happens when a mature plant produces flowers?",
            stage: "recognise",
            options: [
                "Germination",
                "Seed dispersal",
                "Flowering",
                "Seedling growth"
            ],

            explanation:
                "A mature flowering plant produces flowers as part of its reproductive stage.",

            difficulty: 3,
            correctAnswer: "Flowering",
            estimatedSeconds: 25,

            hint: "Look for the stage when the mature plant develops its flowers.",

            tags: [
                "science",
                "plants",
                "flowers",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-030",
            skillId: "life-cycle-of-flowering-plants",
            question: "What can happen after a flower is successfully pollinated?",
            stage: "recognise",
            options: [
                "The roots stop growing.",
                "The leaves disappear.",
                "The plant becomes a seedling.",
                "Seeds can begin to develop."
            ],

            explanation:
                "Successful pollination allows fertilisation to take place, after which seeds can develop.",

            difficulty: 4,
            correctAnswer: "Seeds can begin to develop.",
            estimatedSeconds: 30,

            hint: "Pollination is part of reproduction. Think about what can develop after this process.",

            tags: [
                "science",
                "plants",
                "pollination",
                "seeds"
            ]
        },
                {
            id: "sci-plant-life-031",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which sequence shows the life cycle in the correct order?",
            stage: "recognise",
            options: [
                "Flower → Seedling → Seed → Germination → Adult plant",
                "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
                "Adult plant → Seed → Flower → Seedling → Germination",
                "Seedling → Flower → Germination → Seed → Adult plant"
            ],

            explanation:
                "A seed germinates, becomes a seedling, grows into an adult plant, flowers and produces new seeds.",

            difficulty: 4,
            correctAnswer: "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
            estimatedSeconds: 35,

            hint: "Start with the seed and follow the stages as the plant grows, reproduces and makes new seeds.",

            tags: [
                "science",
                "plants",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-032",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why must a seedling continue to grow before it can produce flowers?",
            stage: "recognise",
            options: [
                "It must lose its roots.",
                "It must become mature first.",
                "It must stop making leaves.",
                "It must become a seed."
            ],

            explanation:
                "A seedling needs to grow and mature before it can become a flowering adult plant.",

            difficulty: 4,
            correctAnswer: "It must become mature first.",
            estimatedSeconds: 30,

            hint: "Young plants need time to develop before they can reproduce.",

            tags: [
                "science",
                "plants",
                "seedling",
                "flowers",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-033",
            skillId: "life-cycle-of-flowering-plants",
            question: "A plant has produced flowers and later develops seeds. Which part of the life cycle is it completing?",
            stage: "recognise",
            options: [
                "Germination",
                "Seedling growth",
                "Reproduction",
                "Root absorption"
            ],

            explanation:
                "Producing seeds is part of reproduction because it creates the next generation of plants.",

            difficulty: 4,
            correctAnswer: "Reproduction",
            estimatedSeconds: 30,

            hint: "Think about the stage when the plant creates the next generation.",

            tags: [
                "science",
                "plants",
                "reproduction",
                "seeds"
            ]
        },

        {
            id: "sci-plant-life-034",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why is seed dispersal useful in the life cycle?",
            stage: "recognise",
            options: [
                "It makes seeds flower at once.",
                "It stops seeds needing water.",
                "It turns seeds into leaves.",
                "It helps seeds reach places where new plants can grow."
            ],

            explanation:
                "Dispersal can move seeds away from the parent plant, reducing competition and helping them find suitable places to grow.",

            difficulty: 4,
            correctAnswer: "It helps seeds reach places where new plants can grow.",
            estimatedSeconds: 30,

            hint: "Think about why it might help a seed to land somewhere away from the parent plant.",

            tags: [
                "science",
                "plants",
                "seed-dispersal",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-035",
            skillId: "life-cycle-of-flowering-plants",
            question: "What happens when a seed begins germination?",
            stage: "recognise",
            options: [
                "The seed starts to grow.",
                "The seed is dispersed.",
                "The adult plant makes flowers.",
                "The flower attracts insects."
            ],

            explanation:
                "Germination is the beginning of growth when a seed develops into a young plant.",

            difficulty: 4,
            correctAnswer: "The seed starts to grow.",
            estimatedSeconds: 25,

            hint: "Germination is the point when growth begins inside the seed.",

            tags: [
                "science",
                "plants",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-036",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which event can begin the next cycle after an adult plant has made seeds?",
            stage: "recognise",
            options: [
                "The leaves become soil.",
                "The roots turn into flowers.",
                "A seed germinates.",
                "The adult plant becomes a seedling."
            ],

            explanation:
                "When a new seed germinates, it begins growing into a new plant and starts the cycle again.",

            difficulty: 4,
            correctAnswer: "A seed germinates.",
            estimatedSeconds: 30,

            hint: "The new cycle begins when one of the new seeds starts growing.",

            tags: [
                "science",
                "plants",
                "germination",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-037",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which statement best explains the life cycle of a flowering plant?",
            stage: "recognise",
            options: [
                "A plant grows once and never makes another generation.",
                "A flower grows directly into an adult plant without a seed.",
                "A seed becomes a flower before it develops roots or leaves.",
                "A seed grows into a plant, which later makes new seeds."
            ],

            explanation:
                "The flowering plant life cycle repeats as seeds germinate, plants grow, flowers develop and new seeds are produced.",

            difficulty: 5,
            correctAnswer: "A seed grows into a plant, which later makes new seeds.",
            estimatedSeconds: 40,

            hint: "Choose the answer that follows the journey from one seed to the next generation.",

            tags: [
                "science",
                "plants",
                "life-cycle",
                "seeds",
                "flowers",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-038",
            skillId: "life-cycle-of-flowering-plants",
            question: "A seed has germinated and a small plant has appeared. What should happen next?",
            stage: "recognise",
            options: [
                "It becomes a flower at once.",
                "It stops growing.",
                "The seedling grows larger.",
                "It immediately produces seeds."
            ],

            explanation:
                "After germination, the young seedling continues growing before becoming a mature plant.",

            difficulty: 5,
            correctAnswer: "The seedling grows larger.",
            estimatedSeconds: 30,

            hint: "The plant is still young. Think about what must happen before it can reproduce.",

            tags: [
                "science",
                "plants",
                "seedling",
                "growth"
            ]
        },

        {
            id: "sci-plant-life-039",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why does the adult plant need to produce flowers?",
            stage: "recognise",
            options: [
                "Flowers make the stem grow.",
                "Flowers absorb all the water.",
                "Flowers keep the roots underground.",
                "Flowers allow the plant to reproduce."
            ],

            explanation:
                "Flowers contain the reproductive parts of flowering plants and help them produce seeds.",

            difficulty: 5,
            correctAnswer: "Flowers allow the plant to reproduce.",
            estimatedSeconds: 30,

            hint: "Flowers have an important job in helping the plant make the next generation.",

            tags: [
                "science",
                "plants",
                "flowers",
                "reproduction"
            ]
        },

        {
            id: "sci-plant-life-040",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is the relationship between pollination and seed production?",
            stage: "recognise",
            options: [
                "Pollination makes a seed germinate.",
                "Pollination turns roots into flowers.",
                "Pollination stops the plant reproducing.",
                "Pollination helps start the process that can lead to seeds."
            ],

            explanation:
                "Pollination transfers pollen to the female part of a flower, allowing fertilisation and seed development to follow.",

            difficulty: 5,
            correctAnswer: "Pollination helps start the process that can lead to seeds.",
            estimatedSeconds: 35,

            hint: "Pollination happens before seeds develop. Think about what it helps the flower do.",

            tags: [
                "science",
                "plants",
                "pollination",
                "seeds",
                "reproduction"
            ]
        },
                {
            id: "sci-plant-life-041",
            skillId: "life-cycle-of-flowering-plants",
            question: "A gardener finds seeds scattered around an adult flowering plant. What stage has probably happened?",
            stage: "recognise",
            options: [
                "Root formation",
                "Seedling growth",
                "Seed dispersal",
                "Germination"
            ],

            explanation:
                "Seeds scattered away from the parent plant have been dispersed.",

            difficulty: 5,
            correctAnswer: "Seed dispersal",
            estimatedSeconds: 30,

            hint: "The important clue is that the seeds have moved away from the adult plant.",

            tags: [
                "science",
                "plants",
                "seed-dispersal",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-042",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which stage gives a flowering plant the chance to produce the next generation?",
            stage: "recognise",
            options: [
                "Root growth",
                "Reproduction",
                "Germination",
                "Seedling growth"
            ],

            explanation:
                "During reproduction, the flowering plant produces seeds that can grow into new plants.",

            difficulty: 5,
            correctAnswer: "Reproduction",
            estimatedSeconds: 30,

            hint: "Look for the stage where the plant creates seeds for future plants.",

            tags: [
                "science",
                "plants",
                "reproduction",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-043",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why can the same life cycle happen again after seeds are produced?",
            stage: "recognise",
            options: [
                "The leaves become seeds.",
                "The flowers turn back into roots.",
                "The adult plant becomes a seedling.",
                "The seeds can grow into new flowering plants."
            ],

            explanation:
                "New seeds can germinate and grow into flowering plants, allowing the cycle to repeat.",

            difficulty: 5,
            correctAnswer: "The seeds can grow into new flowering plants.",
            estimatedSeconds: 30,

            hint: "Think about what a seed can become when it has the right conditions.",

            tags: [
                "science",
                "plants",
                "seeds",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-044",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which event happens before a seedling can become a mature flowering plant?",
            stage: "recognise",
            options: [
                "It must produce seeds.",
                "It must be pollinated.",
                "It must become fruit.",
                "It must grow."
            ],

            explanation:
                "A seedling needs to grow and mature before it can produce flowers.",

            difficulty: 5,
            correctAnswer: "It must grow.",
            estimatedSeconds: 30,

            hint: "A young plant cannot flower immediately. Think about what it needs to do first.",

            tags: [
                "science",
                "plants",
                "seedling",
                "growth",
                "flowers"
            ]
        },

        {
            id: "sci-plant-life-045",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which statement correctly describes seed dispersal in the life cycle?",
            stage: "recognise",
            options: [
                "Seeds become roots before leaving the plant.",
                "Seeds absorb sunlight to make food.",
                "Seeds begin making flowers.",
                "Seeds move away from the parent plant."
            ],

            explanation:
                "Seed dispersal moves seeds away from the parent plant so they can grow in new places.",

            difficulty: 5,
            correctAnswer: "Seeds move away from the parent plant.",
            estimatedSeconds: 30,

            hint: "The word dispersal means spreading or moving things apart.",

            tags: [
                "science",
                "plants",
                "seed-dispersal"
            ]
        },

        {
            id: "sci-plant-life-046",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which order shows what happens from a mature plant to the beginning of a new plant?",
            stage: "recognise",
            options: [
                "Seeds → Flower → Germination → Dispersal",
                "Flower → Seeds → Dispersal → Germination",
                "Germination → Flower → Seeds → Seedling",
                "Dispersal → Flower → Seedling → Seeds"
            ],

            explanation:
                "A mature plant flowers, produces seeds, the seeds are dispersed and then a seed can germinate.",

            difficulty: 5,
            correctAnswer: "Flower → Seeds → Dispersal → Germination",
            estimatedSeconds: 35,

            hint: "Start with the mature plant's flowers and follow the events until a new seed starts growing.",

            tags: [
                "science",
                "plants",
                "life-cycle",
                "flowers",
                "seeds",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-047",
            skillId: "life-cycle-of-flowering-plants",
            question: "A plant has flowers but has not yet made seeds. Which process may still need to happen?",
            stage: "recognise",
            options: [
                "Germination",
                "Root growth",
                "Seed dispersal from the parent plant",
                "Pollination and fertilisation"
            ],

            explanation:
                "Pollination and fertilisation are needed before seeds can develop in flowering plants.",

            difficulty: 5,
            correctAnswer: "Pollination and fertilisation",
            estimatedSeconds: 35,

            hint: "The plant has reached the flower stage, but the next generation has not formed yet.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination",
                "fertilisation"
            ]
        },

        {
            id: "sci-plant-life-048",
            skillId: "life-cycle-of-flowering-plants",
            question: "What is the main difference between a seed and a seedling?",
            stage: "recognise",
            options: [
                "A seed can only grow in darkness.",
                "A seed is always bigger than a seedling.",
                "A seedling cannot have roots.",
                "A seedling is a young plant that has started growing."
            ],

            explanation:
                "A seed contains a young plant, while a seedling is the young plant after it has begun to grow.",

            difficulty: 5,
            correctAnswer: "A seedling is a young plant that has started growing.",
            estimatedSeconds: 35,

            hint: "Think about what changes when the seed begins germinating.",

            tags: [
                "science",
                "plants",
                "seeds",
                "seedling",
                "germination"
            ]
        },

        {
            id: "sci-plant-life-049",
            skillId: "life-cycle-of-flowering-plants",
            question: "Why is reproduction important in the life cycle of flowering plants?",
            stage: "recognise",
            options: [
                "It stops the plant growing.",
                "It removes the plant's roots.",
                "It prevents flowers from forming.",
                "It produces new seeds that can grow into new plants."
            ],

            explanation:
                "Reproduction produces new seeds, allowing another generation of flowering plants to grow.",

            difficulty: 5,
            correctAnswer: "It produces new seeds that can grow into new plants.",
            estimatedSeconds: 35,

            hint: "Think about what reproduction needs to achieve for the plant's life cycle to continue.",

            tags: [
                "science",
                "plants",
                "reproduction",
                "seeds",
                "life-cycle"
            ]
        },

        {
            id: "sci-plant-life-050",
            skillId: "life-cycle-of-flowering-plants",
            question: "Which summary best describes the life cycle of a flowering plant?",
            stage: "recognise",
            options: [
                "A seed grows into a plant, but the life cycle stops there.",
                "A seedling makes seeds before it becomes a mature plant.",
                "A seed becomes a flower straight away and then stops growing.",
                "A seed grows into a mature plant, which produces flowers and new seeds."
            ],

            explanation:
                "The life cycle repeats as seeds germinate, plants grow, mature plants flower and produce new seeds.",

            difficulty: 5,
            correctAnswer: "A seed grows into a mature plant, which produces flowers and new seeds.",
            estimatedSeconds: 40,

            hint: "Choose the answer that follows the complete journey from one generation to the next.",

            tags: [
                "science",
                "plants",
                "life-cycle",
                "seeds",
                "germination",
                "flowers",
                "reproduction"
            ]
        }

    ]
};

export default lifeCycleOfFloweringPlants;

export {
    lifeCycleOfFloweringPlants
};