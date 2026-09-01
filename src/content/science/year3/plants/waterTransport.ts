import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const waterTransport: SkillContent = {

    skillId: "water-transport",

    title: "Water Transport in Plants",

    description:
        "Learn how water moves through a flowering plant.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-water-transport-001",
            skillId: "water-transport",
            question: "Where does a plant take in most of its water?",
            stage: "recognise",
            options: [
                "Through its roots",
                "Through its flowers",
                "Through its leaves",
                "Through its seeds"
            ],

            explanation:
                "Roots absorb water from the soil.",

            difficulty: 1,
            correctAnswer: "Through its roots",
            estimatedSeconds: 10,

            hint: "Think about which plant part is underground and touches the soil.",

            tags: [
                "science",
                "plants",
                "roots",
                "water"
            ]
        },

        {
            id: "sci-water-transport-002",
            skillId: "water-transport",
            question: "After the roots absorb water, which part carries it around the plant?",
            stage: "recognise",
            options: [
                "The stem",
                "The flower",
                "The seed",
                "The petals"
            ],

            explanation:
                "The stem transports water from the roots to the rest of the plant.",

            difficulty: 1,
            correctAnswer: "The stem",
            estimatedSeconds: 15,

            hint: "Look for the plant part that acts like a pathway between roots and leaves.",

            tags: [
                "science",
                "plants",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-water-transport-003",
            skillId: "water-transport",
            question: "Where does most of the water carried by the stem go?",
            stage: "recognise",
            options: [
                "The leaves",
                "The roots",
                "The seeds",
                "The flowers only"
            ],

            explanation:
                "Water is carried to the leaves where it helps the plant make food.",

            difficulty: 1,
            correctAnswer: "The leaves",
            estimatedSeconds: 15,

            hint: "Think about which part needs water to make food using sunlight.",

            tags: [
                "science",
                "plants",
                "leaves",
                "water"
            ]
        },

        {
            id: "sci-water-transport-004",
            skillId: "water-transport",
            question: "Which sequence correctly shows how water travels through a plant?",
            stage: "recognise",
            options: [
                "Roots → Stem → Leaves",
                "Leaves → Stem → Roots",
                "Stem → Roots → Leaves",
                "Flowers → Stem → Roots"
            ],

            explanation:
                "Water is absorbed by the roots, carried through the stem and reaches the leaves.",

            difficulty: 1,
            correctAnswer: "Roots → Stem → Leaves",
            estimatedSeconds: 15,

            hint: "Start with the part that collects water from the soil.",

            tags: [
                "science",
                "plants",
                "water"
            ]
        },

        {
            id: "sci-water-transport-005",
            skillId: "water-transport",
            question: "Why do plants need water?",
            stage: "recognise",
            options: [
                "To help them make food and grow",
                "To make rocks",
                "To produce plastic",
                "To make soil"
            ],

            explanation:
                "Water is needed for healthy growth and for making food in the leaves.",

            difficulty: 1,
            correctAnswer: "To help them make food and grow",
            estimatedSeconds: 15,

            hint: "Plants use water as part of the process that helps them grow and stay healthy.",

            tags: [
                "science",
                "plants",
                "water"
            ]
        },

        {
            id: "sci-water-transport-006",
            skillId: "water-transport",
            question: "Which plant part absorbs water from the soil?",
            stage: "recognise",
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

            hint: "The part that grows underground is responsible for taking in water.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-water-transport-007",
            skillId: "water-transport",
            question: "What carries water from the roots to the leaves?",
            stage: "recognise",
            options: [
                "The stem",
                "The flower",
                "The fruit",
                "The seed"
            ],

            explanation:
                "The stem transports water through the plant.",

            difficulty: 1,
            correctAnswer: "The stem",
            estimatedSeconds: 15,

            hint: "Think of the plant part that connects the underground roots to the leaves above ground.",

            tags: [
                "science",
                "plants",
                "stem"
            ]
        },

        {
            id: "sci-water-transport-008",
            skillId: "water-transport",
            question: "Which part uses the water to help make food?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Seeds",
                "Flowers"
            ],

            explanation:
                "Leaves use water together with sunlight and carbon dioxide to make food.",

            difficulty: 1,
            correctAnswer: "Leaves",
            estimatedSeconds: 15,

            hint: "The plant part that catches sunlight is also where food is made.",

            tags: [
                "science",
                "plants",
                "leaves"
            ]
        },

        {
            id: "sci-water-transport-009",
            skillId: "water-transport",
            question: "If roots cannot absorb enough water, what is most likely to happen?",
            stage: "recognise",
            options: [
                "The plant may wilt.",
                "The plant grows faster.",
                "The plant makes more seeds immediately.",
                "Nothing changes."
            ],

            explanation:
                "Without enough water, plants become weak and may wilt.",

            difficulty: 1,
            correctAnswer: "The plant may wilt.",
            estimatedSeconds: 15,

            hint: "Plants need water to stay firm and healthy. Think about what happens when they lose water.",

            tags: [
                "science",
                "plants",
                "water"
            ]
        },

        {
            id: "sci-water-transport-010",
            skillId: "water-transport",
            question: "Which statement is correct?",
            stage: "recognise",
            options: [
                "Roots absorb water and the stem carries it to the leaves.",
                "Leaves absorb water and send it to the roots.",
                "Flowers carry water around the plant.",
                "Seeds absorb water for the whole plant."
            ],

            explanation:
                "Water moves from the roots, through the stem and to the leaves.",

            difficulty: 1,
            correctAnswer: "Roots absorb water and the stem carries it to the leaves.",
            estimatedSeconds: 20,

            hint: "Remember the journey of water: it starts underground and travels upwards.",

            tags: [
                "science",
                "plants",
                "water",
                "transport"
            ]
        },

        {
            id: "sci-water-transport-011",
            skillId: "water-transport",
            question: "Which part of a plant is the main entry point for water from the soil?",
            stage: "recognise",
            options: [
                "Roots",
                "Flowers",
                "Leaves",
                "Fruit"
            ],

            explanation:
                "Roots take in water from the soil and begin its journey through the plant.",

            difficulty: 1,
            correctAnswer: "Roots",
            estimatedSeconds: 15,

            hint: "Look underground for the part that is in contact with the soil.",

            tags: [
                "science",
                "plants",
                "roots",
                "water"
            ]
        },

        {
            id: "sci-water-transport-012",
            skillId: "water-transport",
            question: "After water enters the roots, what happens next?",
            stage: "recognise",
            options: [
                "It moves through the stem.",
                "It turns into a seed.",
                "It leaves through a flower.",
                "It stays underground."
            ],

            explanation:
                "After entering through the roots, water is transported through the stem.",

            difficulty: 1,
            correctAnswer: "It moves through the stem.",
            estimatedSeconds: 15,

            hint: "Think about the pathway that carries water upwards.",

            tags: [
                "science",
                "plants",
                "roots",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-water-transport-013",
            skillId: "water-transport",
            question: "Which part of a plant receives water after it travels up the stem?",
            stage: "recognise",
            options: [
                "Leaves",
                "Roots",
                "Seeds",
                "Soil"
            ],

            explanation:
                "Water travels through the stem to the leaves, where it is used to help make food.",

            difficulty: 1,
            correctAnswer: "Leaves",
            estimatedSeconds: 15,

            hint: "Think about the part above the stem that uses sunlight to make food.",

            tags: [
                "science",
                "plants",
                "leaves",
                "water"
            ]
        },

        {
            id: "sci-water-transport-014",
            skillId: "water-transport",
            question: "Which route shows water moving through a plant?",
            stage: "recognise",
            options: [
                "Roots → Stem → Leaves",
                "Leaves → Roots → Stem",
                "Flowers → Leaves → Roots",
                "Seeds → Flowers → Stem"
            ],

            explanation:
                "Water enters through the roots, travels up the stem and reaches the leaves.",

            difficulty: 1,
            correctAnswer: "Roots → Stem → Leaves",
            estimatedSeconds: 15,

            hint: "Start where water enters the plant and follow it upwards.",

            tags: [
                "science",
                "plants",
                "water",
                "transport"
            ]
        },
                {
            id: "sci-water-transport-015",
            skillId: "water-transport",
            question: "Which sequence shows the correct journey of water?",
            stage: "recognise",
            options: [
                "Soil → Roots → Stem → Leaves",
                "Leaves → Stem → Soil → Roots",
                "Roots → Leaves → Soil → Stem",
                "Stem → Soil → Roots → Leaves"
            ],

            explanation:
                "Water is absorbed from the soil by the roots, travels through the stem and reaches the leaves.",

            difficulty: 2,
            correctAnswer: "Soil → Roots → Stem → Leaves",
            estimatedSeconds: 20,

            hint: "Start with where the water comes from before it enters the plant.",

            tags: [
                "science",
                "plants",
                "water",
                "transport"
            ]
        },

        {
            id: "sci-water-transport-016",
            skillId: "water-transport",
            question: "What do roots absorb besides water?",
            stage: "recognise",
            options: [
                "Minerals",
                "Sunlight",
                "Clouds",
                "Seeds"
            ],

            explanation:
                "Roots absorb both water and minerals from the soil.",

            difficulty: 2,
            correctAnswer: "Minerals",
            estimatedSeconds: 20,

            hint: "Plants need more than just water from the soil. Think about nutrients that help them grow.",

            tags: [
                "science",
                "plants",
                "roots",
                "minerals"
            ]
        },

        {
            id: "sci-water-transport-017",
            skillId: "water-transport",
            question: "Which part transports water to every part of the plant?",
            stage: "recognise",
            options: [
                "Stem",
                "Flower",
                "Leaf",
                "Seed"
            ],

            explanation:
                "The stem carries water from the roots throughout the plant.",

            difficulty: 2,
            correctAnswer: "Stem",
            estimatedSeconds: 20,

            hint: "Look for the plant part that connects the roots with the rest of the plant.",

            tags: [
                "science",
                "plants",
                "stem",
                "transport"
            ]
        },

        {
            id: "sci-water-transport-018",
            skillId: "water-transport",
            question: "A plant is watered. Which part receives the water first?",
            stage: "recognise",
            options: [
                "Roots",
                "Leaves",
                "Flowers",
                "Stem"
            ],

            explanation:
                "The roots are the first part of the plant to absorb water from the soil.",

            difficulty: 2,
            correctAnswer: "Roots",
            estimatedSeconds: 20,

            hint: "Water enters the plant where the plant touches the soil.",

            tags: [
                "science",
                "plants",
                "roots"
            ]
        },

        {
            id: "sci-water-transport-019",
            skillId: "water-transport",
            question: "Which statement is true?",
            stage: "recognise",
            options: [
                "Water moves upwards through the stem.",
                "Water moves from the leaves into the soil.",
                "Flowers absorb all the water.",
                "Seeds carry water around the plant."
            ],

            explanation:
                "Water travels upwards through the stem from the roots to the leaves.",

            difficulty: 2,
            correctAnswer: "Water moves upwards through the stem.",
            estimatedSeconds: 20,

            hint: "Think about the direction water must travel to reach leaves above the ground.",

            tags: [
                "science",
                "plants",
                "stem",
                "water"
            ]
        },

        {
            id: "sci-water-transport-020",
            skillId: "water-transport",
            question: "What is the main job of the stem in water transport?",
            stage: "recognise",
            options: [
                "To carry water from the roots to the leaves",
                "To absorb water from the soil",
                "To make food",
                "To produce seeds"
            ],

            explanation:
                "The stem transports water throughout the plant.",

            difficulty: 2,
            correctAnswer: "To carry water from the roots to the leaves",
            estimatedSeconds: 20,

            hint: "The stem does not collect water; it moves water to where it is needed.",

                        tags: [
                "science",
                "plants",
                "stem",
                "transport"
            ]
        }

    ]

};

export default waterTransport;

export {
    waterTransport
};