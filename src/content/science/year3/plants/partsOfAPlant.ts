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
        },
                {
            id: "sci-plant-parts-021",
            skillId: "parts-of-a-plant",
            question: "Which plant part absorbs minerals as well as water?",
            stage: "recognise",
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

            hint: "The part that is surrounded by soil is responsible for taking in water and minerals.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-022",
            skillId: "parts-of-a-plant",
            question: "Which part carries water from the roots to the leaves and flowers?",
            stage: "recognise",
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

            hint: "Think of the plant part that acts like a pathway between the roots and the rest of the plant.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-023",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant is usually green?",
            stage: "recognise",
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

            hint: "Look for the part that captures sunlight and is commonly green.",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-024",
            skillId: "parts-of-a-plant",
            question: "Which part usually develops into seeds after pollination?",
            stage: "recognise",
            options: [
                "Leaf",
                "Flower",
                "Root",
                "Stem"
            ],

            explanation:
                "Flowers produce seeds after successful pollination and fertilisation.",

            difficulty: 3,
            correctAnswer: "Flower",
            estimatedSeconds: 25,

            hint: "Think about which plant part is responsible for reproduction.",

            tags: [
                "science",
                "plants",
                "flowers",
                "seeds"
            ]
        },

        {
            id: "sci-plant-parts-025",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant starts growing first during germination?",
            stage: "recognise",
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

            hint: "The first growth needs to help the young plant collect water and stay secure.",

            tags: [
                "science",
                "plants",
                "roots",
                "germination"
            ]
        },

        {
            id: "sci-plant-parts-026",
            skillId: "parts-of-a-plant",
            question: "Lucy says, 'Leaves absorb water from the soil.' Is she correct?",
            stage: "recognise",
            options: [
                "Yes, leaves absorb soil water.",
                "No, flowers absorb water.",
                "No, seeds absorb water.",
                "No, roots absorb soil water."
            ],

            explanation:
                "Roots, not leaves, absorb water from the soil.",

            difficulty: 3,
            correctAnswer: "No, roots absorb soil water.",
            estimatedSeconds: 25,

            hint: "Remember where the plant gets water from before it travels upwards.",

            tags: [
                "science",
                "plants",
                "roots",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-027",
            skillId: "parts-of-a-plant",
            question: "Amir says, 'The stem helps hold the plant upright.' Is he correct?",
            stage: "recognise",
            options: [
                "Only at night",
                "Yes",
                "Only when it rains",
                "No"
            ],

            explanation:
                "The stem supports the plant and helps keep it upright.",

            difficulty: 3,
            correctAnswer: "Yes",
            estimatedSeconds: 20,

            hint: "Think about the part that acts like a support holding leaves and flowers up.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-028",
            skillId: "parts-of-a-plant",
            question: "Which two plant parts work together to provide water and food for the plant?",
            stage: "recognise",
            options: [
                "Flowers and seeds",
                "Roots and leaves",
                "Flowers and petals",
                "Seeds and roots"
            ],

            explanation:
                "Roots absorb water while leaves use water and sunlight to make food.",

            difficulty: 3,
            correctAnswer: "Roots and leaves",
            estimatedSeconds: 30,

            hint: "One part collects water from the soil and another part uses sunlight to make food.",

            tags: [
                "science",
                "plants",
                "roots",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-029",
            skillId: "parts-of-a-plant",
            question: "Which plant part protects the seeds in many flowering plants?",
            stage: "recognise",
            options: [
                "Fruit",
                "Roots",
                "Leaves",
                "Stem"
            ],

            explanation:
                "In many flowering plants, fruit develops around the seeds and helps protect them.",

            difficulty: 3,
            correctAnswer: "Fruit",
            estimatedSeconds: 25,

            hint: "Think about the part that can form around seeds after a flower has been pollinated.",

            tags: [
                "science",
                "plants",
                "fruit",
                "seeds"
            ]
        },

        {
            id: "sci-plant-parts-030",
            skillId: "parts-of-a-plant",
            question: "Which part of a plant is most important for absorbing water from the soil?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Flowers",
                "Fruit"
            ],

            explanation:
                "Roots absorb water and minerals from the soil.",

            difficulty: 3,
            correctAnswer: "Roots",
            estimatedSeconds: 25,

            hint: "The part that grows underground is in the best position to collect water from the soil.",

            tags: [
                "science",
                "plants",
                "roots",
                "water"
            ]
        },
                {
            id: "sci-plant-parts-031",
            skillId: "parts-of-a-plant",
            question: "Which part connects the roots with the leaves?",
            stage: "recognise",
            options: [
                "Stem",
                "Flower",
                "Seed",
                "Petal"
            ],

            explanation:
                "The stem connects the roots to the leaves and transports water around the plant.",

            difficulty: 4,
            correctAnswer: "Stem",
            estimatedSeconds: 25,

            hint: "Think about the part between the underground roots and the leaves above them.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-plant-parts-032",
            skillId: "parts-of-a-plant",
            question: "Which part of a flowering plant is involved in making seeds?",
            stage: "recognise",
            options: [
                "Flower",
                "Root",
                "Stem",
                "Leaf"
            ],

            explanation:
                "Flowers contain the reproductive parts of flowering plants and help produce seeds.",

            difficulty: 4,
            correctAnswer: "Flower",
            estimatedSeconds: 25,

            hint: "Think about the plant part that attracts pollinators and is involved in reproduction.",

            tags: [
                "science",
                "plants",
                "flowers",
                "seeds"
            ]
        },

        {
            id: "sci-plant-parts-033",
            skillId: "parts-of-a-plant",
            question: "What would happen if a plant had no roots?",
            stage: "recognise",
            options: [
                "It would struggle to absorb water and stay anchored.",
                "It would make more flowers.",
                "Its leaves would make extra roots.",
                "It would grow normally."
            ],

            explanation:
                "Roots absorb water and minerals and help anchor the plant in the soil.",

            difficulty: 4,
            correctAnswer: "It would struggle to absorb water and stay anchored.",
            estimatedSeconds: 30,

            hint: "Think about the two important jobs roots normally do for a plant.",

            tags: [
                "science",
                "plants",
                "roots",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-034",
            skillId: "parts-of-a-plant",
            question: "What would happen if a plant's stem were badly damaged?",
            stage: "recognise",
            options: [
                "Water might not reach the leaves properly.",
                "The roots would turn into flowers.",
                "The leaves would make more soil.",
                "The seeds would disappear."
            ],

            explanation:
                "The stem transports water and supports the leaves, so damage can affect the rest of the plant.",

            difficulty: 4,
            correctAnswer: "Water might not reach the leaves properly.",
            estimatedSeconds: 30,

            hint: "The stem acts as a pathway. Think about what happens if that pathway is damaged.",

            tags: [
                "science",
                "plants",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-035",
            skillId: "parts-of-a-plant",
            question: "What would happen if a plant had very few leaves?",
            stage: "recognise",
            options: [
                "It might make less food.",
                "It would need no water.",
                "Its roots would disappear.",
                "It would make food faster."
            ],

            explanation:
                "Leaves make food for the plant, so having fewer healthy leaves can reduce food production.",

            difficulty: 4,
            correctAnswer: "It might make less food.",
            estimatedSeconds: 30,

            hint: "Think about the job of leaves and what the plant would lose if it had fewer of them.",

            tags: [
                "science",
                "plants",
                "leaves",
                "food"
            ]
        },

        {
            id: "sci-plant-parts-036",
            skillId: "parts-of-a-plant",
            question: "Which set contains the main parts of a flowering plant?",
            stage: "recognise",
            options: [
                "Roots, stem, leaves and flowers",
                "Roots, rocks, leaves and clouds",
                "Flowers, soil, water and seeds",
                "Leaves, rain, stems and sunlight"
            ],

            explanation:
                "The main parts of a flowering plant include roots, stem, leaves and flowers.",

            difficulty: 4,
            correctAnswer: "Roots, stem, leaves and flowers",
            estimatedSeconds: 30,

            hint: "Choose the option that lists plant parts rather than things plants need or objects around them.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "leaves",
                "flowers"
            ]
        },

        {
            id: "sci-plant-parts-037",
            skillId: "parts-of-a-plant",
            question: "Which part is responsible for making food using sunlight?",
            stage: "recognise",
            options: [
                "Roots",
                "Leaves",
                "Flowers",
                "Seeds"
            ],

            explanation:
                "Leaves use sunlight, water and carbon dioxide to make food.",

            difficulty: 4,
            correctAnswer: "Leaves",
            estimatedSeconds: 25,

            hint: "Which part is usually green and exposed to sunlight?",

            tags: [
                "science",
                "plants",
                "leaves",
                "photosynthesis"
            ]
        },

        {
            id: "sci-plant-parts-038",
            skillId: "parts-of-a-plant",
            question: "Why are roots useful even though we cannot usually see them?",
            stage: "recognise",
            options: [
                "They absorb water and minerals and anchor the plant.",
                "They make sunlight.",
                "They attract bees.",
                "They produce petals."
            ],

            explanation:
                "Roots have important jobs underground: they absorb water and minerals and keep the plant anchored.",

            difficulty: 4,
            correctAnswer: "They absorb water and minerals and anchor the plant.",
            estimatedSeconds: 30,

            hint: "Think about what a plant needs from the soil and what keeps it standing.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-039",
            skillId: "parts-of-a-plant",
            question: "Why is the stem important to leaves?",
            stage: "recognise",
            options: [
                "It supports them and helps supply water.",
                "It turns them into flowers.",
                "It absorbs sunlight for them.",
                "It makes their seeds."
            ],

            explanation:
                "The stem holds leaves up towards the light and carries water to them.",

            difficulty: 4,
            correctAnswer: "It supports them and helps supply water.",
            estimatedSeconds: 30,

            hint: "Think about the stem's two jobs: support and transport.",

            tags: [
                "science",
                "plants",
                "stem",
                "leaves"
            ]
        },

        {
            id: "sci-plant-parts-040",
            skillId: "parts-of-a-plant",
            question: "Why are flowers important to flowering plants?",
            stage: "recognise",
            options: [
                "They help the plant reproduce.",
                "They absorb most of the water.",
                "They hold the plant in the soil.",
                "They make the roots grow."
            ],

            explanation:
                "Flowers contain the parts needed for reproduction and help the plant make seeds.",

            difficulty: 4,
            correctAnswer: "They help the plant reproduce.",
            estimatedSeconds: 30,

            hint: "Think about what a flower needs to help the plant produce its next generation.",

            tags: [
                "science",
                "plants",
                "flowers",
                "reproduction"
            ]
        },
                {
            id: "sci-plant-parts-041",
            skillId: "parts-of-a-plant",
            question: "Which plant part would be most affected first if the soil became very dry?",
            stage: "recognise",
            options: [
                "Roots",
                "Flowers",
                "Fruit",
                "Petals"
            ],

            explanation:
                "Roots are in the soil and absorb water, so very dry soil makes it harder for them to collect enough water.",

            difficulty: 5,
            correctAnswer: "Roots",
            estimatedSeconds: 30,

            hint: "Which part is directly surrounded by the soil and takes in water?",

            tags: [
                "science",
                "plants",
                "roots",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-042",
            skillId: "parts-of-a-plant",
            question: "A plant's roots absorb water, but the leaves cannot make enough food. What could be the problem?",
            stage: "recognise",
            options: [
                "The leaves may not be getting enough sunlight.",
                "The roots may be too colourful.",
                "The flowers may be too small.",
                "The seeds may be underground."
            ],

            explanation:
                "Leaves need sunlight as well as water and carbon dioxide to make food.",

            difficulty: 5,
            correctAnswer: "The leaves may not be getting enough sunlight.",
            estimatedSeconds: 30,

            hint: "The roots are getting water, so think about another thing leaves need to make food.",

            tags: [
                "science",
                "plants",
                "leaves",
                "sunlight"
            ]
        },

        {
            id: "sci-plant-parts-043",
            skillId: "parts-of-a-plant",
            question: "Which two parts are most directly involved in getting water to the leaves?",
            stage: "recognise",
            options: [
                "Roots and stem",
                "Flowers and seeds",
                "Petals and fruit",
                "Leaves and flowers"
            ],

            explanation:
                "Roots absorb water from the soil and the stem transports it to the leaves.",

            difficulty: 5,
            correctAnswer: "Roots and stem",
            estimatedSeconds: 30,

            hint: "One part collects the water and another carries it upwards.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-044",
            skillId: "parts-of-a-plant",
            question: "Which statement correctly matches a plant part with its job?",
            stage: "recognise",
            options: [
                "Roots absorb water.",
                "Leaves hold the plant in soil.",
                "Flowers carry water from roots.",
                "Seeds make sunlight."
            ],

            explanation:
                "Roots absorb water from the soil. The other options describe jobs that belong to different plant parts.",

            difficulty: 5,
            correctAnswer: "Roots absorb water.",
            estimatedSeconds: 30,

            hint: "Match each plant part to the job it is best known for.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-plant-parts-045",
            skillId: "parts-of-a-plant",
            question: "A plant has healthy roots but a damaged stem. Which job may be affected?",
            stage: "recognise",
            options: [
                "Making seeds",
                "Moving water to the leaves",
                "Attracting insects",
                "Absorbing sunlight"
            ],

            explanation:
                "The stem transports water from the roots to the leaves, so damage can affect this job.",

            difficulty: 5,
            correctAnswer: "Moving water to the leaves",
            estimatedSeconds: 30,

            hint: "Think about what the stem carries from the roots to the parts above the ground.",

            tags: [
                "science",
                "plants",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-046",
            skillId: "parts-of-a-plant",
            question: "A plant has plenty of water but very few healthy leaves. What problem might this cause?",
            stage: "recognise",
            options: [
                "It may make less food.",
                "Its roots will make flowers.",
                "It will no longer need sunlight.",
                "Its seeds will disappear."
            ],

            explanation:
                "Leaves make food for the plant, so having very few healthy leaves can reduce food production.",

            difficulty: 5,
            correctAnswer: "It may make less food.",
            estimatedSeconds: 30,

            hint: "Think about which plant part makes food and what happens when there is less of it.",

            tags: [
                "science",
                "plants",
                "leaves",
                "food"
            ]
        },

        {
            id: "sci-plant-parts-047",
            skillId: "parts-of-a-plant",
            question: "Which sequence shows how water reaches the leaves?",
            stage: "recognise",
            options: [
                "Roots → Stem → Leaves",
                "Leaves → Roots → Stem",
                "Flowers → Roots → Leaves",
                "Seeds → Flowers → Stem"
            ],

            explanation:
                "Roots absorb water from the soil, then the stem carries it to the leaves.",

            difficulty: 5,
            correctAnswer: "Roots → Stem → Leaves",
            estimatedSeconds: 30,

            hint: "Start with the part that takes in water from the soil.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "leaves",
                "water"
            ]
        },

        {
            id: "sci-plant-parts-048",
            skillId: "parts-of-a-plant",
            question: "Which statement best explains how the main plant parts work together?",
            stage: "recognise",
            options: [
                "Roots absorb water, stems support and transport, leaves make food, and flowers help reproduction.",
                "Roots make food, leaves absorb soil, and flowers hold the plant upright.",
                "Flowers absorb water, stems make seeds, and roots attract insects.",
                "Leaves hold the plant underground while roots catch sunlight."
            ],

            explanation:
                "Each main plant part has an important job that helps the plant survive, grow and reproduce.",

            difficulty: 5,
            correctAnswer: "Roots absorb water, stems support and transport, leaves make food, and flowers help reproduction.",
            estimatedSeconds: 40,

            hint: "Think about the main job of each part: roots, stem, leaves and flowers.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "leaves",
                "flowers"
            ]
        },

        {
            id: "sci-plant-parts-049",
            skillId: "parts-of-a-plant",
            question: "Which plant part would be most important for attracting a bee?",
            stage: "recognise",
            options: [
                "Flower",
                "Root",
                "Stem",
                "Seed"
            ],

            explanation:
                "Flowers often have bright colours, scents or nectar that attract bees and other pollinators.",

            difficulty: 5,
            correctAnswer: "Flower",
            estimatedSeconds: 30,

            hint: "Think about the colourful part of the plant that insects visit.",

            tags: [
                "science",
                "plants",
                "flowers",
                "pollination"
            ]
        },

        {
            id: "sci-plant-parts-050",
            skillId: "parts-of-a-plant",
            question: "Which summary correctly describes the main parts of a flowering plant?",
            stage: "recognise",
            options: [
                "Roots absorb water and anchor the plant, stems support and transport, leaves make food, and flowers help make seeds.",
                "Roots make food, stems absorb sunlight, leaves make seeds, and flowers collect water.",
                "Leaves hold the plant in the soil, roots attract insects, and flowers transport water.",
                "Stems grow underground, roots make flowers, and leaves produce soil."
            ],

            explanation:
                "Roots, stems, leaves and flowers have different jobs that work together to help a flowering plant survive, grow and reproduce.",

            difficulty: 5,
            correctAnswer: "Roots absorb water and anchor the plant, stems support and transport, leaves make food, and flowers help make seeds.",
            estimatedSeconds: 40,

            hint: "Choose the answer that correctly matches each main plant part with its job.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "leaves",
                "flowers",
                "seeds"
            ]
        }

    ]

};

export default partsOfAPlant;

export {
    partsOfAPlant
};