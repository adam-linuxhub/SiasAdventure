import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const whatPlantsNeed: SkillContent = {

    skillId: "what-plants-need",

    title: "What Plants Need",

    description:
        "Learn what plants need to grow healthy and strong.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-plants-need-001",
            skillId: "what-plants-need",
            question: "Which of these do plants need to grow?",
            stage: "recognise",
            options: [
                "Water",
                "Chocolate",
                "Plastic",
                "Glass"
            ],

            explanation:
                "Plants need water to stay healthy and grow.",

            hint:
                "Think about what a plant absorbs through its roots to stay alive.",

            difficulty: 1,
            correctAnswer: "Water",
            estimatedSeconds: 10,

            tags: [
                "science",
                "plants",
                "water"
            ]
        },

        {
            id: "sci-plants-need-002",
            skillId: "what-plants-need",
            question: "Which of these do plants need to make food?",
            stage: "recognise",
            options: [
                "Sunlight",
                "Television",
                "Sand",
                "Paper"
            ],

            explanation:
                "Plants use sunlight to make their own food.",

            hint:
                "Think about the source of energy that comes from the Sun.",

            difficulty: 1,
            correctAnswer: "Sunlight",
            estimatedSeconds: 10,

            tags: [
                "science",
                "plants",
                "sunlight"
            ]
        },

        {
            id: "sci-plants-need-003",
            skillId: "what-plants-need",
            question: "Where do plants usually get water from?",
            stage: "recognise",
            options: [
                "The soil",
                "The Moon",
                "The clouds only",
                "Rocks"
            ],

            explanation:
                "Roots absorb water from the soil.",

            hint:
                "Think about what surrounds the roots below the ground.",

            difficulty: 1,
            correctAnswer: "The soil",
            estimatedSeconds: 10,

            tags: [
                "science",
                "plants",
                "water",
                "roots"
            ]
        },

        {
            id: "sci-plants-need-004",
            skillId: "what-plants-need",
            question: "Which gas do plants need from the air?",
            stage: "recognise",
            options: [
                "Carbon dioxide",
                "Helium",
                "Hydrogen",
                "Nitrogen"
            ],

            explanation:
                "Plants take in carbon dioxide from the air to make food.",

            hint:
                "Think about the gas plants use during photosynthesis to help make food.",

            difficulty: 1,
            correctAnswer: "Carbon dioxide",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "air"
            ]
        },

        {
            id: "sci-plants-need-005",
            skillId: "what-plants-need",
            question: "Which part of the plant uses sunlight to make food?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Flowers",
                "Seeds"
            ],

            explanation:
                "Leaves use sunlight, water and carbon dioxide to make food.",

            hint:
                "Which part of the plant is usually green and collects sunlight?",

            difficulty: 1,
            correctAnswer: "Leaves",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-plants-need-006",
            skillId: "what-plants-need",
            question: "What happens if a plant does not get enough water?",
            stage: "recognise",
            options: [
                "It may wilt and stop growing.",
                "It grows much faster.",
                "It turns into a tree.",
                "Nothing happens."
            ],

            explanation:
                "Without enough water, plants become weak and may wilt.",

            hint:
                "Imagine a plant becoming dry because it cannot get the water it needs.",

            difficulty: 1,
            correctAnswer: "It may wilt and stop growing.",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "water"
            ]
        },

        {
            id: "sci-plants-need-007",
            skillId: "what-plants-need",
            question: "Why do plants need sunlight?",
            stage: "recognise",
            options: [
                "To make food",
                "To make noise",
                "To grow roots in the air",
                "To produce rocks"
            ],

            explanation:
                "Plants use sunlight to make the food they need to live.",

            hint:
                "Sunlight gives plants the energy they need for making their own food.",

            difficulty: 1,
            correctAnswer: "To make food",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "sunlight"
            ]
        },

        {
            id: "sci-plants-need-008",
            skillId: "what-plants-need",
            question: "Which part of a plant takes in water from the soil?",
            stage: "recognise",
            options: [
                "Roots",
                "Leaves",
                "Flowers",
                "Fruit"
            ],

            explanation:
                "Roots take in water from the soil and help move it through the plant.",

            hint:
                "Think about the part that grows underground.",

            difficulty: 1,
            correctAnswer: "Roots",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "water",
                "roots"
            ]
        },

        {
            id: "sci-plants-need-009",
            skillId: "what-plants-need",
            question: "What do leaves use to make food?",
            stage: "recognise",
            options: [
                "Sunlight",
                "Plastic",
                "Milk",
                "Sand"
            ],

            explanation:
                "Leaves use energy from sunlight to help the plant make food.",

            hint:
                "Look for the thing that gives the plant energy from the Sun.",

            difficulty: 1,
            correctAnswer: "Sunlight",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "leaves",
                "sunlight"
            ]
        },

        {
            id: "sci-plants-need-010",
            skillId: "what-plants-need",
            question: "What do roots find in the soil that helps a plant grow?",
            stage: "recognise",
            options: [
                "Nutrients",
                "Moonlight",
                "Plastic",
                "Smoke"
            ],

            explanation:
                "Roots absorb nutrients from the soil to help the plant grow.",

            hint:
                "Think about the useful substances plants take from the soil.",

            difficulty: 1,
            correctAnswer: "Nutrients",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "roots",
                "nutrients",
                "soil"
            ]
        },

        {
            id: "sci-plants-need-011",
            skillId: "what-plants-need",
            question: "Which of these comes from the air and helps plants make food?",
            stage: "recognise",
            options: [
                "Carbon dioxide",
                "Water",
                "Soil",
                "Minerals"
            ],

            explanation:
                "Plants take carbon dioxide from the air and use it when making food.",

            hint:
                "Look for the gas that plants take in from the air.",

            difficulty: 1,
            correctAnswer: "Carbon dioxide",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "air",
                "carbon-dioxide"
            ]
        },

        {
            id: "sci-plants-need-012",
            skillId: "what-plants-need",
            question: "Which of these is most important for a plant growing in dry soil?",
            stage: "recognise",
            options: [
                "Water",
                "A toy",
                "A book",
                "A stone"
            ],

            explanation:
                "Plants need water to stay healthy and continue growing.",

            hint:
                "The soil is dry, so think about what the plant is missing.",

            difficulty: 1,
            correctAnswer: "Water",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "water",
                "soil"
            ]
        },

        {
            id: "sci-plants-need-013",
            skillId: "what-plants-need",
            question: "Which plant part is usually above the ground and catches sunlight?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Seeds",
                "Root hairs"
            ],

            explanation:
                "Leaves are usually above the ground and collect sunlight for the plant.",

            hint:
                "Think about the flat, green parts you can see on many plants.",

            difficulty: 1,
            correctAnswer: "Leaves",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "leaves",
                "sunlight"
            ]
        },

        {
            id: "sci-plants-need-014",
            skillId: "what-plants-need",
            question: "Which sentence about plants is true?",
            stage: "recognise",
            options: [
                "Plants need water and sunlight.",
                "Plants need chocolate to grow.",
                "Plants can grow without water.",
                "Plants do not need sunlight."
            ],

            explanation:
                "Plants need water and sunlight, along with other resources, to grow well.",

            hint:
                "Choose the sentence that names two real things plants need.",

            difficulty: 1,
            correctAnswer: "Plants need water and sunlight.",
            estimatedSeconds: 15,

            tags: [
                "science",
                "plants",
                "water",
                "sunlight"
            ]
        },
                {
            id: "sci-plants-need-015",
            skillId: "what-plants-need",
            question: "Which sentence is correct?",
            stage: "recognise",
            options: [
                "Plants need water, sunlight, air and nutrients to grow.",
                "Plants only need water.",
                "Plants only need sunlight.",
                "Plants do not need air."
            ],

            explanation:
                "Healthy plants need several things to survive and grow well.",

            hint:
                "Think about the different resources a plant needs, not just one thing.",

            difficulty: 2,
            correctAnswer: "Plants need water, sunlight, air and nutrients to grow.",
            estimatedSeconds: 20,

            tags: [
                "science",
                "plants"
            ]
        },

        {
            id: "sci-plants-need-016",
            skillId: "what-plants-need",
            question: "Which gas do plants take in from the air to help make food?",
            stage: "recognise",
            options: [
                "Carbon dioxide",
                "Oxygen",
                "Helium",
                "Hydrogen"
            ],

            explanation:
                "Plants use carbon dioxide from the air, together with water and sunlight, to make food.",

            hint:
                "Plants use a gas from the air during photosynthesis to help create food.",

            difficulty: 2,
            correctAnswer: "Carbon dioxide",
            estimatedSeconds: 20,

            tags: [
                "science",
                "plants",
                "air",
                "carbon-dioxide"
            ]
        },

        {
            id: "sci-plants-need-017",
            skillId: "what-plants-need",
            question: "What gives a plant the energy it needs to make food?",
            stage: "recognise",
            options: [
                "Sunlight",
                "Rain",
                "Wind",
                "Soil"
            ],

            explanation:
                "Sunlight provides the energy plants need to make their own food.",

            hint:
                "Look for the thing that comes from the Sun and provides energy.",

            difficulty: 2,
            correctAnswer: "Sunlight",
            estimatedSeconds: 20,

            tags: [
                "science",
                "plants",
                "sunlight"
            ]
        },

        {
            id: "sci-plants-need-018",
            skillId: "what-plants-need",
            question: "Where do plants get most of their minerals?",
            stage: "recognise",
            options: [
                "The soil",
                "The sky",
                "The Sun",
                "The Moon"
            ],

            explanation:
                "Plants absorb minerals from the soil through their roots.",

            hint:
                "Roots are underground, so think about what they are surrounded by.",

            difficulty: 2,
            correctAnswer: "The soil",
            estimatedSeconds: 20,

            tags: [
                "science",
                "plants",
                "soil",
                "minerals"
            ]
        },

        {
            id: "sci-plants-need-019",
            skillId: "what-plants-need",
            question: "Which part of the plant absorbs water from the soil?",
            stage: "recognise",
            options: [
                "Roots",
                "Leaves",
                "Flowers",
                "Stem"
            ],

            explanation:
                "Roots absorb water and minerals from the soil.",

            hint:
                "Think about the plant part that grows below the ground.",

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
            id: "sci-plants-need-020",
            skillId: "what-plants-need",
            question: "Which part of the plant uses sunlight to make food?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Flowers",
                "Seeds"
            ],

            explanation:
                "Leaves use sunlight, water and carbon dioxide to make food for the plant.",

            hint:
                "The part that is usually wide, flat and green collects sunlight.",

            difficulty: 2,
            correctAnswer: "Leaves",
            estimatedSeconds: 20,

                        tags: [
                "science",
                "plants",
                "leaves"
            ]
        }

    ]

};

export default whatPlantsNeed;

export {
    whatPlantsNeed
};