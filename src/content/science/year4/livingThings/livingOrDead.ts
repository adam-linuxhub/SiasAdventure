import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const livingOrDead: SkillContent = {

    skillId: "livingOrDead",

    title: "Living or Dead",

    description:
        "Learn how to identify living things, dead things and things that have never been alive.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-living-dead-001",

        question: "Which of these is a living thing?",

        options: [
            "A rabbit",
            "A rock",
            "A toy car",
            "A spoon"
        ],

        answer: 0,

        explanation:
            "A rabbit is alive because it grows, breathes and reproduces.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-002",

        question: "Which of these has never been alive?",

        options: [
            "A brick",
            "A leaf",
            "A tree stump",
            "A feather"
        ],

        answer: 0,

        explanation:
            "A brick has never been alive. The other items came from living things.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-003",

        question: "Which of these is dead?",

        options: [
            "A fallen leaf",
            "A growing flower",
            "A fish",
            "A bird"
        ],

        answer: 0,

        explanation:
            "A fallen leaf is no longer living but once was alive.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-004",

        question: "Which of these grows?",

        options: [
            "A seedling",
            "A plastic cup",
            "A pencil",
            "A coin"
        ],

        answer: 0,

        explanation:
            "Growing is one of the characteristics of living things.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "growth"]
    },

    {
        id: "sci-living-dead-005",

        question: "Which is a sign that something is living?",

        options: [
            "It grows",
            "It is shiny",
            "It is hard",
            "It is heavy"
        ],

        answer: 0,

        explanation:
            "Living things grow during their lives.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-006",

        question: "Which of these is alive?",

        options: [
            "An oak tree",
            "A table",
            "A glass bottle",
            "A football"
        ],

        answer: 0,

        explanation:
            "Trees are living plants.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "plants"]
    },

    {
        id: "sci-living-dead-007",

        question: "Which object has never been alive?",

        options: [
            "A plastic ruler",
            "A feather",
            "A log",
            "An egg shell"
        ],

        answer: 0,

        explanation:
            "Plastic rulers are made from manufactured materials.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-008",

        question: "Living things need...",

        options: [
            "Food or nutrients",
            "Paint",
            "Metal",
            "Glass"
        ],

        answer: 0,

        explanation:
            "Living things need food or nutrients to survive.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-009",

        question: "Which of these can reproduce?",

        options: [
            "A cat",
            "A chair",
            "A ball",
            "A book"
        ],

        answer: 0,

        explanation:
            "Reproduction is a characteristic of living things.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-010",

        question: "Which statement is true?",

        options: [
            "All living things grow.",
            "All rocks grow.",
            "Cars reproduce.",
            "Plastic bottles breathe."
        ],

        answer: 0,

        explanation:
            "Growing is one of the life processes.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-011",

        question: "A wooden chair is made from a tree. Which is true?",

        options: [
            "The chair has never been alive, but it came from something that was.",
            "The chair is still alive.",
            "The chair is growing.",
            "The chair breathes."
        ],

        answer: 0,

        explanation:
            "Wood comes from trees, but the chair itself is not living.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-012",

        question: "Why is a mushroom considered living?",

        options: [
            "It grows and reproduces.",
            "It is brown.",
            "It grows in soil.",
            "It has no leaves."
        ],

        answer: 0,

        explanation:
            "Fungi are living organisms because they carry out life processes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "fungi"]
    },

    {
        id: "sci-living-dead-013",

        question: "Which item is dead rather than never alive?",

        options: [
            "A dry twig",
            "A metal spoon",
            "A plastic cup",
            "A glass marble"
        ],

        answer: 0,

        explanation:
            "The twig came from a living tree.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-014",

        question: "Why is a rock not living?",

        options: [
            "It does not carry out life processes.",
            "It is heavy.",
            "It is hard.",
            "It is grey."
        ],

        answer: 0,

        explanation:
            "Rocks do not grow, reproduce or need food.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-015",

        question: "Which group contains only living things?",

        options: [
            "Dog, oak tree, butterfly",
            "Rock, bird, flower",
            "Plastic bottle, fish, cat",
            "Brick, tree, worm"
        ],

        answer: 0,

        explanation:
            "Every item in the first group is living.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-living-dead-016",

        question: "Which life process helps make more of the same species?",

        options: [
            "Reproduction",
            "Sleeping",
            "Rolling",
            "Shining"
        ],

        answer: 0,

        explanation:
            "Living things reproduce to create offspring.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-017",

        question: "A shell washed onto the beach belonged to a snail. The shell is...",

        options: [
            "Dead",
            "Living",
            "Growing",
            "Never alive"
        ],

        answer: 0,

        explanation:
            "The shell came from a living animal, so it is not something that has never been alive.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-018",

        question: "Which feature helps scientists decide if something is living?",

        options: [
            "Whether it carries out life processes",
            "Its colour",
            "Its size",
            "Its shape"
        ],

        answer: 0,

        explanation:
            "Scientists look for life processes such as growth and reproduction.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "working-scientifically"]
    },

    {
        id: "sci-living-dead-019",

        question: "A seed is alive because it can...",

        options: [
            "Grow into a new plant",
            "Roll downhill",
            "Float forever",
            "Turn into a rock"
        ],

        answer: 0,

        explanation:
            "Seeds are living because they can germinate and grow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "plants"]
    },

    {
        id: "sci-living-dead-020",

        question: "Which sentence best describes living things?",

        options: [
            "Living things carry out life processes such as growing, reproducing and needing food.",
            "Living things are always green.",
            "Living things never move.",
            "Living things are always animals."
        ],

        answer: 0,

        explanation:
            "All living things carry out life processes, whether they are plants, animals or fungi.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "living-things", "life-processes"]
    }

    ]

};